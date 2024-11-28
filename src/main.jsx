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
import Random from "./pages/Random.jsx";
import Type from "./pages/Type.jsx";
import Types from "./pages/Types.jsx";

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
        path: "/type/:type",
        element: <Type />,
    },
    {
        path: "/types",
        element: <Types />,
    },
    {
        path: "/pokemon/:id",
        element: <Pokemon />,
    },
    {
        path: "/random",
        element: <Random />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar />
        <RouterProvider router={router} />
    </React.StrictMode>
);
