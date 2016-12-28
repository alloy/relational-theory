import { configure } from '@kadira/storybook'
import fs from "fs"

// TODO: Add globbing: e.g.  ../app/containers/*/_stories/*.story.js

function loadStories() {
  require('../app/containers/artist/_stories/_header.story')
}

configure(loadStories, module);
