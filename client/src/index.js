import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'focus-visible/dist/focus-visible'
import { Global, css } from '@emotion/react'
const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>
)
