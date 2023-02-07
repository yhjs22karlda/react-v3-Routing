import './Cart.css'

function Cart(props) {
    const shoppinglist = props.state.map((i) => {
        return <li key={i} data-id={i}>
            <button className='li-button' onClick={(e) => handleXClick(e)}>X</button>
            <b>{props.books[i].title}</b> - {props.books[i].author}</li>
    })

    function handleCartClick(e) {
        e.target.previousSibling.classList.toggle("hidden")
    }
    function handleXClick(e) {
        let removeIndex = Number(e.target.parentElement.dataset.id)
        props.removeProduct(removeIndex)
    }

    return (
        <div className='cart'>
            <div className='cart__items hidden'>
                <h3 className='cart__heading'>Tillagda produkter</h3>
                <ol className='cart__list'>
                    {shoppinglist}
                </ol>
            </div>
            <p className='cart__text' onClick={(e) => handleCartClick(e)}>Cart </p>
            <p className='cart__number'>{props.state.length}</p>
        </div>
    )
}

export default Cart