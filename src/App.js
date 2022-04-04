import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import Logo from './components/Logo';
import InputSearch from './components/InputSearch';
import Product from './components/Product';
import CartProduct from './components/CartProduct';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  useEffect(()=>{
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response)=> response.json())
    .then((response)=>{
      setProducts(response)
      setFilteredProducts(response)
    })
    .catch((error) =>console.log(error))
  }, [])

  const filter = (value) =>{
      const filtered = products.filter((product) => product.name.toLowerCase().includes(value)|| product.category.toLowerCase().includes(value))
       setFilteredProducts(filtered)
  }
  
  const handleAdd = (value)=>{
    const prod = products.find((item) => item.id === value)
    if(currentSale.find((item) => item.id === value)){
      prod.quantity = prod.quantity + 1
      setCurrentSale([...currentSale])
    }else {
      prod.quantity = 1
      setCurrentSale([...currentSale, prod])
    }
  }

  const handleRemove = (value)=>{
    const prod = products.find((item) => item.id === value)
    if(currentSale.find((item) => item.id === value)){
      if(prod.quantity > 1){
      prod.quantity = prod.quantity - 1
      setCurrentSale([...currentSale])        
      }else{
        const filtered = currentSale.filter((item) => item.id !== value)
        setCurrentSale(filtered)
      }
    }
  }

  return (
    <div className="App">
      <Header>
        <Logo/>
        <InputSearch filter={filter} />
      </Header>
      <main>
        <ProductList>
            {filteredProducts.map((product)=><Product product={product} handleAdd={handleAdd}/>)}
        </ProductList>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}>
          {currentSale.map((sale)=><CartProduct product={sale} handleRemove={handleRemove} />)}
        </Cart>
      </main>
    </div>
  );
}

export default App;
