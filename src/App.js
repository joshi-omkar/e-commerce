import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'
import ProductListing from './Pages/ProductListing'
import SingleProduct from './Pages/SingleProduct'
import Wishlist from './Pages/Wishlist'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`/`} exact element={<Home/>} />
        <Route path={`/login`} exact element={<Login/>} />
        <Route path={`/signup`} exact element={<Signup/>} />
        <Route path={`/cart`} exact element={<Cart/>} />
        <Route path={`/products`} exact element={<ProductListing/>} />
        <Route path={`/products/:id`} exact element={<SingleProduct/>} />
        <Route path={`/wishlist`} exact element={<Wishlist/>} />
      </Routes>
    </div>
  );
}

export default App;
