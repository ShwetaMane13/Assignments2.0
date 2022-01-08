import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";

export const Login = () => {

    const { handleToken } = useContext(AuthContext);

    const [form, setForm] = useState({});

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    const handleClick = () => {

        const payload = form;

        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(payload),
            headers:{
                "content-type": "application/json"
            }
        }).then(d=>d.json()).then((res)=>{
            handleToken(res.token);
            // console.log(res);
        })
    }

    // console.log(form);

    return <div>
        <input type="text" name="email" onChange={handleChange} placeholder="email" />
        <input type="text" name="password" onChange={handleChange} placeholder="password" />

        <button onClick={handleClick}>Log in</button>
    </div>
}