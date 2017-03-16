import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
//help to send the whole state to mapstatetoprops and dispatch
import { Provider } from 'react-redux'
import rootReducer from './reducers'
//import from containers instead of components because it has props map in container
import Counter from './containers/Counter'
import './style.css'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Counter label="I'm a counter" />
  </Provider>,
  document.getElementById('react-root')
)
