import "./style.css";


const ProductList = ({children}) => {
    return(
        <ul className="product">
            {children}
        </ul>
    )
}

export default ProductList