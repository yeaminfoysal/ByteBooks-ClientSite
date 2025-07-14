import BorrowCard from "@/components/Borrow Summary/BorrowCard";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import type { Borrow } from "@/types/borrow";
// import BorrowCard from "./BorrowCard";

export default function BorrowSummary() {
    const { data } = useGetBorrowSummaryQuery(undefined)
    const books: Borrow[] = data?.data || []
    console.log(books);
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {books.map((book, idx) => (
                    <BorrowCard
                        key={idx}
                        book={book}
                    />
                ))}
            </div>
        </div>
    )
}
