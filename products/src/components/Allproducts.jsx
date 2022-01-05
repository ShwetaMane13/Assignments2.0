import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Allproducts = () =>{

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetch("http://localhost:3001/allproducts").then(d=>d.json()).then((res)=>setProducts(res));
    }


 
        
    

    return <div id="tab">
        <table>
            <thead>
                <tr>
                    <td>Product Name</td>
                    <td>Price</td>
                    <td>More Details</td>
                </tr>
            </thead>
        </table>
        {products.map((e) => {
        return <div key={e.id}>
            <table >
                <tbody>
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td><button><Link to={`/allproducts/${e.id}`}>More Details</Link></button></td>
                    </tr>
                </tbody>
        </table>
        </div>
    })}
    </div>
}