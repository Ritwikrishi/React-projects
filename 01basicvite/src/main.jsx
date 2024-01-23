import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom React App</h1>
//     </div>
//   )
// }

// const aReactElement = React.createElement(
//   'a',
//   { href: "https://google.com", target: "_blank" },
//   "click to visit google"
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
