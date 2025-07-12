import App from "@/App";
import AddBooks from "@/pages/AddBooks";
import AllBooks from "@/pages/AllBooks";
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
            },
            {
                path: '/books',
                Component: AllBooks
            },
            {
                path: '/create-book',
                Component: AddBooks
            }
        ]
    },
]);

export default router