import React from 'react'
import store from './components/store'
import { Provider } from 'react-redux'
import './App.css'
import CounterFunc from './components/CounterFunc'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterFunc />
      </div>
    </Provider>
  )
}

export default App
