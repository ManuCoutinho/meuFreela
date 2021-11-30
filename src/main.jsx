import React from 'react'
import ReactDOM from 'react-dom'
import{ App } from './App'
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './styles/style.scss';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
