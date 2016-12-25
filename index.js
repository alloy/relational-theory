import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './app/components/app'

const http = express()

const props = {
  items: [
    'Item 1',
    'Item 2',
  ],
}

http.get('/', (req, res) => {
  res.send(`
    <html>
    <body>
      <div id="content">
        ${ReactDOMServer.renderToString(<App {...props} />)}
      </div>
    </body>
    </html>
  `)
})

http.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
