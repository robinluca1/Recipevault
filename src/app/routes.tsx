import { createBrowserRouter } from "react-router";
import { Root } from "./Root"
import { LandingPage } from "./LandingPage";
import { Onboarding } from "./pages/Onboarding";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: LandingPage },
            { path: "onboarding", Component: Onboarding },
        ],
    },
]);