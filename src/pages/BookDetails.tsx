import { useDeleteBookMutation, useGetBookDetailsQuery } from "@/redux/api/baseApi";
import { useNavigate, useParams } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, Users } from "lucide-react";
import { BorrowModal } from "@/components/BookDetails/BorrowBookModalForm";
import { UpdateBookModal } from "@/components/BookDetails/UpdateBookModalForm";
import { useState } from "react";
import Swal from "sweetalert2";
import type { Book } from "@/types/books";
import booksFeature from '@/assets/books-feature.jpg';

export default function BookDetails() {
  const params = useParams();
  const id = params.id;
  const { data, isFetching, isLoading } = useGetBookDetailsQuery({ id });
  const book: Book = data?.data;
  const [deleteBook] = useDeleteBookMutation();
  const [openUpdate, setOpenUpdate] = useState(false);
  const navigate = useNavigate()
  const [openBorrow, setOpenBorrow] = useState(false)

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
        await navigate("/")
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong while deleting the book.", "error");
    }
  };

  if (isLoading || isFetching) return <p className="text-center mt-10 text-gray-500 min-h-screen">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-14 space-y-6">
      {/* Book Card */}
      <Card className="flex bg-gradient-card border-primary flex-col md:flex-row overflow-hidden shadow-xl rounded-2xl">
        {/* Left Section - Visual */}
        <div className={`relative md:w-1/3 w-full `}>
          <img
            src={booksFeature}
            alt={booksFeature}
            className="w-full h-80 object-cover rounded-lg group-hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Right Section - Content */}
        <CardContent className="p-6 flex flex-col gap-4 md:w-2/3">
          {/* Title & Author */}
          <div>
            <h2 className="text-2xl font-semibold">{book?.title}</h2>
            <p className="text-muted-foreground text-sm mt-4">by {book?.author}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">{book?.description}</p>

          {/* Info */}
          <div className="mt-auto flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{book?.available ? "Available" : "Not Available"} – {book?.copies} copies</span>
            </div>
            <div>ISBN: {book?.isbn}</div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              size="sm"
              className="h-8 w-8 p-0 bg-blue-500/90 hover:bg-blue-500 cursor-pointer"
              onClick={() => setOpenUpdate(true)}
            >
              <Edit2 className="w-4 h-4 text-white" />
            </Button>
            <UpdateBookModal book={book} open={openUpdate} setOpen={setOpenUpdate} />
            <Button onClick={() => { handleDeleteBook(book._id) }} variant="destructive" className="w-full sm:w-auto">
              Delete Book
            </Button>
            <Button disabled={!book.available} onClick={() => setOpenBorrow(true)} variant="outline">Borrow</Button>
          </div>
        </CardContent>
      </Card>

      <BorrowModal
        bookId={book?._id}
        quantity={book.copies}
        open={openBorrow}
        setOpen={setOpenBorrow}
      />
    </div>
  );
}
