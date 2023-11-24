import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/index'
import appStore from './redux/store'
import { Provider } from 'react-redux' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
)
