import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Cart from './pages/Cart/Cart'
import Wishlist from './pages/Wishlist/Wishlist'
import Profile from './pages/Profile/Profile'
import SingleProduct from './pages/SingleProduct/SingleProduct'

const App = () => {
  return (
    <BrowserRouter>
      <div className='mainContainer'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product">
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App