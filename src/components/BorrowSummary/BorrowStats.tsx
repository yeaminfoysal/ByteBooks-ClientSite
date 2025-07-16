import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import { BookOpen, Users, TrendingUp, BarChart3 } from "lucide-react";
import type { Borrow } from "@/types/borrow";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function BorrowStats() {
    const { data } = useGetBorrowSummaryQuery(undefined);
    const books: Borrow[] = data?.data || []; // ← FIXED

    const totalBorrowedBooks = books?.reduce((sum, item) => sum + item.totalQuantity, 0);
    const uniqueBooks = books?.length;
    const mostBorrowedBook = books?.reduce((max, item) =>
        item.totalQuantity > max.totalQuantity ? item : max,
        { totalQuantity: 0, book: { title: 'N/A', isbn: '' } }
    );

    console.log(totalBorrowedBooks, uniqueBooks, mostBorrowedBook);

    return (
        // Stats Cards
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
                    <CardTitle className="text-sm font-medium">Total Borrowed</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="text-2xl font-bold text-primary">{totalBorrowedBooks}</div>
                    <p className="text-xs text-muted-foreground">Books borrowed</p>
                </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
                    <CardTitle className="text-sm font-medium">Unique Books</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="text-2xl font-bold text-blue-600">{uniqueBooks}</div>
                    <p className="text-xs text-muted-foreground">Different titles</p>
                </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
                    <CardTitle className="text-sm font-medium">Most Popular</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="text-2xl font-bold text-green-600">{mostBorrowedBook.totalQuantity}</div>
                    <p className="text-xs text-muted-foreground truncate">
                        {typeof mostBorrowedBook.book.title === "string" && mostBorrowedBook.book.title.length > 20
                            ? `${mostBorrowedBook.book.title.substring(0, 20)}...`
                            : mostBorrowedBook.book.title}
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
                    <CardTitle className="text-sm font-medium">Average</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="text-2xl font-bold text-orange-600">
                        {uniqueBooks && uniqueBooks > 0 ? Math.round(totalBorrowedBooks / uniqueBooks) : 0}
                    </div>
                    <p className="text-xs text-muted-foreground">Per book</p>
                </CardContent>
            </Card>
        </div>
    )
}
