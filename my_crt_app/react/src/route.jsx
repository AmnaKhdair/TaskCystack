import {createBrowserRouter} from "react-router-dom";
import Home from "./views/home";
import Landing from "./views/landing";

const router= createBrowserRouter(
    [
    {
        path:'/home',
        element:<Home/>
    }
    ,
    {
        path:'*',
        element:<Landing/>
    }
])
export default router;