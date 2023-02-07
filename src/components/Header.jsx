import Cart from './Cart'
import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <img src="sherlock.png" alt="bild" />
            <Cart state={props.state} books={props.books} removeProduct={props.removeProduct} />
        </div>
    )
}

export default Header