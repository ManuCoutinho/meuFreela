import React from 'react'
import ReactDOM from 'react-dom'
import{ App } from './App'
import 'react-toastify/dist/ReactToastify.min.css';
import { createServer } from 'miragejs';
import styles from './styles/style.scss';

createServer({
   routes() {
      this.namespace = 'api';

      this.get('/form', () => {
         return [
            {
               id: 1,
               fullName: 'Usuario',
               phone: '41997466070',
               createdAt: '2021-29-11'
            }
         ]
      })
   }
})

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
