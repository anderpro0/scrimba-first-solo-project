import React from "react";
import ReactDOM from "react-dom"
import App from '../src/App'

import "./index.css"

function Page() {
    return( <App />)
}
ReactDOM.render(<Page />, document.querySelector('#root'))