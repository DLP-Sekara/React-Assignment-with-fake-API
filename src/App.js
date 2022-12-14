import logo from './logo.svg';
import './App.css';
import Login from "./pages/login/login";
import NotFound from "./pages/notFound/NotFound";
import Dashboard from "./pages/dashboard/dashboar";
import Cart from "./pages/cart/cart";
import Product from "./pages/product/product";
import User from "./pages/user/user";
import {Route, Routes} from "react-router-dom";
function App() {
  return (

      <Routes>
        <Route exact path="/"element={<Login/>}/>
        <Route  path='dashboard' element={<Dashboard/>}/>
        <Route path="cart"element={<Cart/>}/>
        <Route path="product"element={<Product/>}/>
        <Route path="user"element={<User/>}/>
          <Route path="*"element={<NotFound/>}/>
       </Routes>


  );
}

export default App;
