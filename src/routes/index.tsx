import App from "@/App";
import LandingPage from "@/pages/LandingPage";
import {
    createBrowserRouter,
} from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: LandingPage
            }
        ]
    },
]);

export default router