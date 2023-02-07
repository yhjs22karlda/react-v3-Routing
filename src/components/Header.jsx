import Home from './Home'
import About from './About'
import Products from './Products'
import Cart from './Cart'
import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import data from './../assets/data.js'
import './Header.css'

export default function Header() {
    const location = useLocation()
    const [state, setState] = useState([])

    function removeProduct(id) {
        setState(prevState => prevState.filter(i => i !== id))

    }

    function addProduct(id) {
        if (!state.includes(id)) {
            setState(prevState => [...prevState, id])
        } else {
            setState(prevState => [...prevState])
        }
    }

    return (
        <>
        <div className="header">
            <Link to="/"><img src="sherlock.png" alt="bild" /></Link>
            <p className='header__para'><Link to="/home">Home</Link></p>
            <p className='header__para'><Link to="/about">About</Link></p>
            <p className='header__para'><Link to="/products">Products</Link></p>
            <Cart state={state} books={data} removeProduct={removeProduct} />
        </div>
        {location.pathname === "/" && <Home />}
        {location.pathname === "/home" && <Home />}
        {location.pathname === "/about" && <About />}
        {location.pathname === "/products" && <Products state={state} data={data} onAdd={addProduct} />}
        </>
    )
}
