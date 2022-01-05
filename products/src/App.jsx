import './App.css';
import { Route, Routes } from "react-router-dom"
import{ Home } from "./components/Home"
import { Allproducts } from "./components/Allproducts"
import { Navbar } from "./components/Navbar"
import { ProductDetails } from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/allproducts" element={<Allproducts />}></Route>
          <Route path="/allproducts/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
