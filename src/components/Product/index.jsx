

const Product = ({product, handleAdd}) =>{
    return (
        <li key={product.id} className="product" >
        <img className="product" src={product.img}/>
        <div className="product">
            <h3>{product.name}</h3>
            <p  className="category">{product.category}</p>
            <span className="price">R$ {product.price.toFixed(2)}</span>
            <button className="btn-primary" onClick={()=>{handleAdd(product.id)}}>Adicionar</button>
        </div>
    </li>
    )
}

export default Product