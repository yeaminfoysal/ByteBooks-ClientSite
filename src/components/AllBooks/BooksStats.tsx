import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { Book } from "@/types/books";
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export default function BooksStats() {
    const { data } = useGetBooksQuery(undefined);
    const books: Book[] = data?.data || []; // ← FIXED

    return (
        <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-card border-primary">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                        <CardTitle className="text-sm font-medium">Total Books</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="-mt-4">
                        <div className="text-2xl font-bold text-primary">{books.length}</div>
                        <p className="text-xs text-muted-foreground">In collection</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-card border-primary">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
                        <CardTitle className="text-sm font-medium">Total Copies</CardTitle>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                           {books.reduce((total, book) => total + book.copies, 0)}
                        </Badge>
                    </CardHeader>
                    <CardContent className="-mt-4">
                        <div className="text-2xl font-bold text-green-600">{books.reduce((total, book) => total + book.copies, 0)}</div>
                        <p className="text-xs text-muted-foreground">Ready to borrow</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-card border-primary">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
                        <CardTitle className="text-sm font-medium">Unique Genres</CardTitle>
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                           {new Set(books.map((book) => book.genre)).size}
                        </Badge>
                    </CardHeader>
                    <CardContent className="-mt-4">
                        <div className="text-2xl font-bold text-orange-600">{new Set(books.map((book) => book.genre)).size}</div>
                        <p className="text-xs text-muted-foreground">Currently out</p>
                    </CardContent>
                </Card>
            </div>

        </>
    );
}
