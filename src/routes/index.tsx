import { useRoutes } from "react-router-dom";
import Home from "../views/Home";

const Router = () => useRoutes([
    {
        path: "",
        element: <Home/>
    },
]);

export default Router;
