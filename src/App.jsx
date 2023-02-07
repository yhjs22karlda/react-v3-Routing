import Header from './components/Header'
import Pruduct from './components/Product'

import './App.css'
import data from './assets/data.js'
import {useState} from 'react'

function App() {
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

    const products = data.map((item, i) => {
        return <Pruduct key={i} id={i} book={item} state={state} addProduct={addProduct} />
    })

    return (
        <div className='app'>
            <Header state={state} books={data} removeProduct={removeProduct} />
            <div className='product-container'>
                {products}
            </div>
        </div>
    )
}

export default App
