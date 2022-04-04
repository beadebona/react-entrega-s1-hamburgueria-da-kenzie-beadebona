import "./style.css"


const Cart = ({currentSale, setCurrentSale, children}) => {

    const calculateValue = currentSale.reduce((sum, item) => sum + (item.price*item.quantity), 0)

    return(
        <div className="cart">
            <h3 className="cart">Carrinho de compras</h3>

            {currentSale.length > 0 ?(
                <>
                <ul className="cart">

                    {children}
                </ul>
                <div className="total-cost">
                    <p>Total</p>
                    <span>R$ {calculateValue.toFixed(2)}</span>
                </div>
                <button className="remove-all" onClick={()=>{setCurrentSale([])}}>Remover Todos</button>
                </> 
            ):(
                <div className="empty">
                    <h3>
                    Sua sacola está vazia
                    </h3>
                    <p>Adicione itens</p>
                </div>
             )}

        </div>
    )
}

export default Cart