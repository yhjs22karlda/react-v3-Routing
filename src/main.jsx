import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Products from './components/Products'
import './index.css'
import {RouterProvider, createBrowserRouter, Link} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [{
            index: true,
            element: <Home />
        },{
            path: "about",
            element: <About />
        },{
            path: "products",
            element: <Products />
        }],
        errorElement: <p style={{color:"white",fontSize:"4rem"}}
        ><Link to="/">Error (go back)</Link></p>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
