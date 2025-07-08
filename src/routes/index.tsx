import App from "@/App";
import {
    createBrowserRouter,
} from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
]);

export default router