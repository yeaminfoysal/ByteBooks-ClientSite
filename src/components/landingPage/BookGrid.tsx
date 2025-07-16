import React from 'react';
import type { Book } from '@/types/books';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.slice(0, 8).map((book) => (
          <BookCard
            key={book._id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;