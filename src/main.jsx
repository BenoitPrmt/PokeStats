import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Pokemon from "./pages/Pokemon.jsx";
import Home from "./pages/Home.jsx";
import Gen from "./pages/Gen.jsx";
import Navbar from "./components/layout/nav/navbar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/gen/:id",
        element: <Gen />,
    },
    {
        path: "/pokemon/:id",
        element: <Pokemon />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <RouterProvider router={router} />
    </React.StrictMode>
);
