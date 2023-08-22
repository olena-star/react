import React, { useState, useEffect } from 'react';
import './App.css';
import ProductsList from './components/ProductsList/ProductsList';



function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // async function fetchProducts() {
      try {
        fetch('https://dummyjson.com/products')
        .then(resp => resp.json())
        .then(data => setProducts(data.products))
     
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    // }

    // fetchProducts();
  }, []);

  const handleDoubleClick = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };


  return (
    <div className="app">
      <header className="header">Header</header>
      <main className="main">
       <ProductsList products={products} handleDoubleClick={handleDoubleClick}/>
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;

