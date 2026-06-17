import { createBrowserRouter } from "react-router";
import { Root } from "./Root.tsx"
import { Home } from "./Home.tsx";
import { Onboarding } from "./pages/Onboarding.tsx";
import { Login } from "./pages/Login.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: "onboarding", Component: Onboarding },
            { path: "login", Component: Login },
        ],
    },
]);
