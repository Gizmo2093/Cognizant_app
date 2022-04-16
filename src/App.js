import * as React from 'react';

import Navbar from './components/Navbar'
import WareHouses from './components/WareHouses'

function App() {
  let [data, setPosts] = React.useState([])

  const [cartProducts, setCartProducts] = React.useState([]);

  const handleAddtoCart = productID =>{
    setCartProducts([...cartProducts, productID])
  };

  // const handleRemovefromCart = productID =>{
  //   const newCartProducts = cartProducts.filter(id => id !== productID)
  //   setCartProducts(newCartProducts)
  //   console.log(cartProducts);
  // }

  React.useEffect(()=>{
    fetch("http://localhost:3001/cars")
    .then(response => response.json())
    .then(json => {
      setPosts(json)
    })
  },[])

  return (
    <div>
      <Navbar />
      <WareHouses handleAddtoCart={handleAddtoCart} data={data} />
    </div>
  );
}

export default App;
