import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trash2, Users, View } from 'lucide-react';
import type { Book } from '@/types/books';
import { useNavigate } from 'react-router';
import { UpdateBookModal } from '../BookDetails/UpdateModalForm';

interface BookCardProps {
  book: Book;
  // onUpdate: (book: Book) => void;
  // onDelete: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();
  // Generate dynamic colors based on book title
  const getBookColor = (title: string) => {
    const colors = [
      'from-rose-400 to-pink-600',
      'from-blue-400 to-cyan-600',
      'from-green-400 to-emerald-600',
      'from-purple-400 to-violet-600',
      'from-orange-400 to-red-600',
      'from-indigo-400 to-blue-600',
      'from-teal-400 to-cyan-600',
      'from-amber-400 to-orange-600',
    ];

    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const getIconColor = (title: string) => {
    const colors = [
      'text-rose-200',
      'text-blue-200',
      'text-green-200',
      'text-purple-200',
      'text-orange-200',
      'text-indigo-200',
      'text-teal-200',
      'text-amber-200',
    ];

    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };


  // const handleUpdateBook = (id: string) => {
  //   console.log(id);
  //   // toast({
  //   //     title: 'Update Book',
  //   //     description: `Update functionality for "${book.title}" would be implemented here.`,
  //   // });
  // };

  const handleDeleteBook = (id: string) => {
    console.log(id);
    // const bookToDelete = books.find(b => b._id === bookId);
    // setBooks(books.filter(book => book._id !== bookId));

    // toast({
    //     title: 'Book Deleted',
    //     description: `"${bookToDelete?.title}" has been removed from the library.`,
    //     variant: 'destructive',
    // });
  };
  // const handleViewBook = (id) =>{

  // }


  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl border-0">
      <CardContent className="p-0">
        {/* Book Image Placeholder */}
        <div className="relative aspect-[1] overflow-hidden group-hover:scale-105 transition-all duration-200">
          <div className={`absolute inset-0 bg-gradient-to-br ${getBookColor(book.title)} opacity-80 w-[85%] mx-auto rounded-lg`} />

          {/* Book Icon */}
          <div className="absolute top-12 right-12">
            <BookOpen className={`w-48 h-30 ${getIconColor(book.title)} opacity-100`} />
          </div>

          {/* Book Title on Image */}
          <div className="absolute top-34 inset-0 flex justify-center p-6 pt-12">
            <h3 className=" text-xl font-semibold text-center leading-tight drop-shadow-lg">
              {book.title}
            </h3>
          </div>

          {/* Action Buttons - Hidden by default, shown on hover */}
          <div className="absolute top-4 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2">
            <Button
              size="sm"
              // variant="destructive"
              className="h-8 w-8 p-0 bg-green-400/90 hover:bg-green-400 cursor-pointer"
              onClick={() => navigate(`books/${book._id}`)}
            >
              <View className="w-4 h-4" />
            </Button>
            <UpdateBookModal book={book}/>
            <Button
              size="sm"
              variant="destructive"
              className="h-8 w-8 p-0 bg-red-500/90 hover:bg-red-500 cursor-pointer"
              onClick={() => handleDeleteBook(book._id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Genre Badge */}
          <div className="absolute bottom-4 right-8">
            <Badge variant="secondary" className="">
              {book.genre}
            </Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 flex-col space-y-3">
        {/* Author */}
        <div className="w-full">
          <p className="text-sm text-muted-foreground">by {book.author}</p>
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="text-sm line-clamp-3 leading-relaxed">
            {book.description}
          </p>
        </div>

        {/* Footer Info */}
        <div className="w-full flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{book.copies} copies</span>
          </div>
          <div className="text-xs text-muted-foreground">
            ISBN: {book.isbn}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookCard;