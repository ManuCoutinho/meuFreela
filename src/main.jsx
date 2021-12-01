import React from 'react'
import ReactDOM from 'react-dom'
import{ App } from './App'
import 'react-toastify/dist/ReactToastify.min.css';
import { createServer, Model } from 'miragejs';
import styles from './styles/style.scss';

createServer({
   models:{
      contact: Model,
   },
   routes() {
      this.namespace = 'api';     
      this.post('form', (schema, request) => {
         const data = JSON.parse(request.requestBody)

         return schema.create('form', data)
      })
   }
})

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
