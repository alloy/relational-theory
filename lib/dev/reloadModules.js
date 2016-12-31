// @flow

import chokidar from 'chokidar'

// There’s no interface declaration for the Module module
// $FlowFixMe
import Module from 'module'

module.exports = (root: string) => {
  const inclusionMap: { [key: string]: Set<string> } = {}

  // Overload Module._load
  const _load = Module._load
  Module._load = function(request, parent, isMain) {
    const result = _load.apply(this, arguments)
    const filename = Module._resolveFilename(request, parent, isMain)
    if (filename.startsWith(root) && parent.id.startsWith(root)) {
      const inclusions = inclusionMap[filename] || new Set()
      inclusions.add(parent.id)
      inclusionMap[filename] = inclusions
    }
    return result
  }

  const inclusionsResolver = (filename) => {
    const inclusions = [...inclusionMap[filename] || []]
    return inclusions.map(inclusionsResolver).reduce((a, b) => a.concat(b), inclusions)
  }

  // Watch for FS changes, find the modules that depend on the changed module, and reload all of those.
  const watcher = chokidar.watch(root)
  watcher.on('ready', function() {
    watcher.on('all', function(type, filename) {
      const inclusions = inclusionsResolver(filename)
      inclusions.forEach(id => {
        delete require.cache[id]
        delete inclusionMap[id]
        for (const key in inclusionMap) {
          inclusionMap[key].delete(id)
        }
      })
      inclusions.forEach(require)
    })
  })
}
