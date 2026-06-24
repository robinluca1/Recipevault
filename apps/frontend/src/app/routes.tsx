import { createBrowserRouter } from "react-router";
import { Root } from "./Root"
import { Home } from "./Home";
import { Onboarding } from "./pages/Onboarding";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp"
import {ProfileSetup} from "./pages/ProfileSetup";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: "onboarding", Component: Onboarding },
            { path: "login", Component: Login },
            { path: "signup", Component: SignUp },
            { path: "profile-setup", Component: ProfileSetup },
        ],
    },
]);