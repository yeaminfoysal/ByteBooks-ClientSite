
import type { Book } from '@/types/books';
import BookGrid from './BookGrid';
import { useGetBooksQuery } from '@/redux/api/baseApi';
import { Badge } from '../ui/badge';
// import { useToast } from '@/hooks/use-toast';

function Books() {
    const {
        data,
    } = useGetBooksQuery(undefined, {
        refetchOnMountOrArgChange: true,
        skip: false,
    })

    const books: Book[] = data?.data || [];

    return (
        <div className=" ">
            <div className="text-center">
                <Badge variant="outline" className="mb-4 border-primary/20">
                    Books
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Browse All Books
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    From book cataloging to borrower management, our system provides all the tools you need.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Book Grid */}
                <BookGrid
                    books={books}
                />
            </div>
        </div>
    );
}

export default Books;