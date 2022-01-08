import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/settings">Settings</Link>
    </div>
}