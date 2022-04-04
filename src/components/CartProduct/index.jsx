const CartProduct = ({product, handleRemove}) => {
    return(
        <li key={product.id} >
            <img  src={product.img}/>
            <div>
                <h4>{product.name}</h4>
                <p  className="category">{product.category}</p>
                <p  className="category">Quant: {product.quantity}</p>
            </div>
            <button className="cart" onClick={()=>handleRemove(product.id)}>Remover</button>
        </li>
    )
}

export default CartProduct