import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/loginPage";
import Home from "../pages/home";
// import NotFound from "../pages/notFound";

export default function Routers() {
    return(
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
    )
}