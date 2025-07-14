import App from "@/App";
import AddBooks from "@/pages/AddBooks";
import AllBooks from "@/pages/AllBooks";
import BookDetails from "@/pages/BookDetails";
import BorrowSummary from "@/pages/BorrowSummary";
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
            },
            {
                path: '/borrow-summary',
                Component: BorrowSummary
            },
            {
                path: 'books/:id',
                Component: BookDetails
            }
        ]
    },
]);

export default router