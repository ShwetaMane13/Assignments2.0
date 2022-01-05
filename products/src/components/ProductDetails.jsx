import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const ProductDetails = () => {

    const {id} = useParams();
    
    const [details, setDetails] = useState({});

    useEffect(() => {

        getDetails(id);

    }, []);

    const getDetails = (id) => {
        fetch(`http://localhost:3001/allproducts/${id}`).then(d=>d.json()).then((res)=>{setDetails(res)})
    }

  

 return <div id="details">
    Product name: {details.name} 
    <br />
    Product price: {details.price}
    <br />
    Product id: {details.id}
 </div>
}