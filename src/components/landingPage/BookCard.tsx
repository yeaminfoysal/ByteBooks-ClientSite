import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Edit2, Trash2, Users, View } from 'lucide-react';
import type { Book } from '@/types/books';
import { useNavigate } from 'react-router';
import { UpdateBookModal } from '../BookDetails/UpdateBookModalForm';
import Swal from 'sweetalert2';
import { useDeleteBookMutation } from '@/redux/api/baseApi';

interface BookCardProps {
  book: Book;
  // onUpdate: (book: Book) => void;
  // onDelete: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();
  const [openUpdate, setOpenUpdate] = useState(false);
  const [deleteBook] = useDeleteBookMutation();

  // const getBookColor = (title: string) => {
  //   const colors = [
  //     'from-rose-400 to-pink-600',
  //     'from-blue-400 to-cyan-600',
  //     'from-green-400 to-emerald-600',
  //     'from-purple-400 to-violet-600',
  //     'from-orange-400 to-red-600',
  //     'from-indigo-400 to-blue-600',
  //     'from-teal-400 to-cyan-600',
  //     'from-amber-400 to-orange-600',
  //   ];

  //   const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  //   return colors[hash % colors.length];
  // };

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

  const handleDeleteBook = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await deleteBook(id).unwrap();
        Swal.fire("Deleted!", "Your book has been deleted.", "success");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong while deleting the book.", "error");
    }
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300  bg-gradient-card border-primary/20 relative overflow-hidden">
      <CardContent className="p-0 h-[240px] flex-shrink-0 relative">
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-hero opacity-80 w-[85%] mx-auto rounded-lg" />

          {/* Book Icon */}
          <div className="absolute top-8 right-26">
            <BookOpen className={`w-20 h-20 ${getIconColor(book.title)} opacity-100`} />
          </div>

          {/* Book Title */}
          <div className="absolute inset-0 flex items-center justify-center px-6 pt-6 text-center">
            <h3 className="text-lg font-semibold text-white leading-tight drop-shadow-lg">
              {book.title}
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2 z-10">
            <Button
              size="sm"
              className="h-8 w-8 p-0 bg-green-400/90 hover:bg-green-400"
              onClick={() => navigate(`books/${book._id}`)}
            >
              <View className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              className="h-8 w-8 p-0 bg-blue-500/90 hover:bg-blue-500"
              onClick={() => setOpenUpdate(true)}
            >
              <Edit2 className="w-4 h-4 text-white" />
            </Button>
            <UpdateBookModal book={book} open={openUpdate} setOpen={setOpenUpdate} />
            <Button
              size="sm"
              variant="destructive"
              className="h-8 w-8 p-0 bg-red-500/90 hover:bg-red-500"
              onClick={() => handleDeleteBook(book._id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Genre Badge */}
          <div className="absolute bottom-4 right-8 z-10">
            <Badge variant="secondary">{book.genre}</Badge>
          </div>
        </div>
      </CardContent>


      <CardFooter className="px-6 flex-col space-y-3">
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