
import { Library } from 'lucide-react';
import type { Book } from '@/types/books';
import BookGrid from './BookGrid';
import { useGetBooksQuery } from '@/redux/api/baseApi';
// import { useToast } from '@/hooks/use-toast';

function App() {
    const {
        data,
        isFetching,
        isLoading,
    } = useGetBooksQuery(undefined, {
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })
    //   const [books, setBooks] = useState<Book[]>(sampleBooks);
    //   const { toast } = useToast();
    console.log(data, isFetching, isLoading);
    const books: Book[] = data?.data || [];

    const handleUpdateBook = () => {
        // toast({
        //     title: 'Update Book',
        //     description: `Update functionality for "${book.title}" would be implemented here.`,
        // });
    };

    const handleDeleteBook = () => {
        // const bookToDelete = books.find(b => b._id === bookId);
        // setBooks(books.filter(book => book._id !== bookId));

        // toast({
        //     title: 'Book Deleted',
        //     description: `"${bookToDelete?.title}" has been removed from the library.`,
        //     variant: 'destructive',
        // });
    };

    return (
        <div className="min-h-screen ">

            {/* Stats */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <Library className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Books</p>
                                <p className="text-2xl font-bold text-gray-900">{books.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="bg-green-100 p-3 rounded-full">
                                <Library className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Copies</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {books.reduce((total, book) => total + book.copies, 0)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <Library className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Unique Genres</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {new Set(books.map(book => book.genre)).size}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book Grid */}
                <BookGrid
                    books={books}
                    onUpdateBook={handleUpdateBook}
                    onDeleteBook={handleDeleteBook}
                />
            </div>
        </div>
    );
}

export default App;