import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  return (
    <div className="App">
      test
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}