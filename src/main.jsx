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
import {NuqsAdapter} from 'nuqs/adapters/react'
import Pokemons from "./pages/Pokemons.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/gen/:id",
        element: <Gen/>,
    },
    {
        path: "/type/:type",
        element: <Type/>,
    },
    {
        path: "/types",
        element: <Types/>,
    },
    {
        path: "/pokemon/:id",
        element: <Pokemon/>,
    },
    {
        path: "/pokemons",
        element: <Pokemons/>
    },
    {
        path: "/random",
        element: <Random/>,
    },
], {
    future: {
        v7_fetcherPersist: true,
        v7_fetcherPersistKey: "pokestats",
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NuqsAdapter>
            <Navbar/>
            <RouterProvider
                router={router}
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
                }}
            />
        </NuqsAdapter>
    </React.StrictMode>
);
