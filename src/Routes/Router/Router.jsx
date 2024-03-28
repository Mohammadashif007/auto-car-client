import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import New from "../../components/New/New";
import Home from "../../components/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
        ],
    },
]);
