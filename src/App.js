import './App.css';
import "./css/style.css"
import "./css/bootstrap.min.css"
import Header from './Common/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home,Shop,Cart,ShopDetails, Contact, Fruits} from './Pages/index'
import Footer from './Common/Footer';




function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>}  />
          <Route path="/shopdetails" element={<ShopDetails/>}  />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/fruits" element={<Fruits/>}  />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
