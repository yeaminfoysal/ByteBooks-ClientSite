import { useDeleteBookMutation, useGetBookDetailsQuery } from "@/redux/api/baseApi";
import { useNavigate, useParams } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Edit2, Users } from "lucide-react";
import { BorrowModal } from "@/components/BookDetails/BorrowModalForm";
import { UpdateBookModal } from "@/components/BookDetails/UpdateModalForm";
import { useState } from "react";
import Swal from "sweetalert2";

export default function BookDetails() {
  const params = useParams();
  const id = params.id;
  const { data, isFetching, isLoading } = useGetBookDetailsQuery({ id });
  const book = data?.data;
  const [deleteBook] = useDeleteBookMutation();
  const [openUpdate, setOpenUpdate] = useState(false);
  const navigate = useNavigate()

  const getBookColor = (title: string) => {
    const colors = [
      "from-rose-400 to-pink-600",
      "from-blue-400 to-cyan-600",
      "from-green-400 to-emerald-600",
      "from-purple-400 to-violet-600",
      "from-orange-400 to-red-600",
      "from-indigo-400 to-blue-600",
      "from-teal-400 to-cyan-600",
      "from-amber-400 to-orange-600",
    ];
    const hash = title?.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) || 0;
    return colors[hash % colors.length];
  };

  const getIconColor = (title: string) => {
    const colors = [
      "text-rose-200",
      "text-blue-200",
      "text-green-200",
      "text-purple-200",
      "text-orange-200",
      "text-indigo-200",
      "text-teal-200",
      "text-amber-200",
    ];
    const hash = title?.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) || 0;
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
        await navigate("/")
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong while deleting the book.", "error");
    }
  };



  if (isLoading || isFetching) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Book Card */}
      <Card className="flex flex-col md:flex-row overflow-hidden shadow-xl rounded-2xl">
        {/* Left Section - Visual */}
        <div className="relative md:w-1/3 w-full h-80">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${getBookColor(
              book?.title
            )} opacity-90 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className={`w-44 h-44 ${getIconColor(book?.title)} opacity-90`} />
          </div>
          <div className="absolute bottom-4 w-full text-center px-4">
            <h3 className="text-white text-xl font-bold drop-shadow">{book?.title}</h3>
          </div>
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
              <span>{book?.copies ? "Available" : "Not Available"} – {book?.copies} copies</span>
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
            <BorrowModal disable={!book?.available} bookId={book?._id} />
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
