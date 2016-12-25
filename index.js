import express from 'express'
import morgan from 'morgan'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './app/components/app'

const props = {
  items: [
    'Item 1',
    'Item 2',
  ],
}

const http = express()

http.use(express.static('public'))
http.use(morgan('combined'))

http.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <script type="text/javascript" src="bundle.js" defer></script>
      <script type="text/javascript">var APP_PROPS = ${JSON.stringify(props)}</script>
    </head>
    <body>
      <div id="content">${ReactDOMServer.renderToString(<App {...props} />)}</div>
    </body>
    </html>
  `)
})

http.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
