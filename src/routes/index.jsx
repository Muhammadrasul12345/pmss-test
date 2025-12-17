import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home";
import About from "../pages/About"
import Tarkibiy from "../pages/Tarkibiy";
import History from "../pages/History";
import Hamkorlar from "../pages/Hamkorlar";
import Aloqa from "../pages/Aloqa";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/korxona-haqida",
                element: <About />
            },
            {
                path: "/tarkibiy-tuzilma",
                element: <Tarkibiy />
            },
            {
                path: "/korxona-tarixi",
                element: <History />
            },
            {
                path: "/hamkorlar",
                element: <Hamkorlar />
            },
            {
                path: "/aloqa",
                element: <Aloqa />
            }
        ]
    }
])