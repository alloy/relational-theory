import { configure } from '@kadira/storybook'

// TODO: Add globbing: e.g.  ../app/containers/*/_stories/*.story.js
// could use micromatch, which is used in Jest

function loadStories() {
  require('../app/containers/artist/_stories/_header.story')
}

configure(loadStories, module);

