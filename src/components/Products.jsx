import './Products.css'

export default function Products(props) {

    const products = props.data.map((item, i) => {
        return (
            <div className="product" key={i}>
                <h2 className='product__title'>{item.title}</h2>
                <p className='product__author'>Av {item.author}</p>
                <p className='product__text'>{item.text}</p>
                <button
                    className={`button ${props.state.includes(i)?"red":''}`}
                    onClick={() => {props.onAdd(i)}}>Add to cart
                </button>
            </div>
        )
    })

    return (
    <div className='product-container'>
        {products}
    </div>
    )
}
