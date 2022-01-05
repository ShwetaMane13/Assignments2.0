import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div id="nav">
        <p className="nav-text"><Link to="/">Home</Link></p> 
        <p className="nav-text"><Link to="/allproducts">All Products</Link></p>
     </div>
}