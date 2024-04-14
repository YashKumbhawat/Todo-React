import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {Provider} from 'react-redux'
import {store} from './store/store.js'
import Layout from './components/Layout.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import FirstPage from './components/FirstPage.jsx'
import SecondPage from './components/SecondPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'',
        element:<FirstPage />
      },
      {
        path:'Performance',
        element:<SecondPage />
      }
    ]
  }
])


function App() {
  
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  )
}

export default App
