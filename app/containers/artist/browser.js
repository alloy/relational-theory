import React from 'react'
import ReactDOM from 'react-dom'

import Artist from './index'

ReactDOM.render(React.createElement(Artist, window.ARTIST_PROPS), document.getElementById('content'))
