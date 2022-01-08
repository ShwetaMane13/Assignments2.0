import { Route, Routes} from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { Home } from "./Home"
import { Login } from "./Login"
import { PrivateRoute } from "./PrivateRoute"
import { Settings } from "./Settings"

export const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path="/dashboard/settings" element={<PrivateRoute><Settings /></PrivateRoute>}/>
        </Routes>
    )
}