import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/header'
import Main from './components/main/main'

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'))
