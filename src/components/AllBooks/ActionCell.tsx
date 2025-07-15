// components/ActionCell.tsx

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";
import { UpdateBookModal } from "../BookDetails/UpdateModalForm";
import type { Book } from "@/types/books";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import Swal from "sweetalert2";

export function ActionCell({ book }: { book: Book }) {
    const [openUpdate, setOpenUpdate] = useState(false);
    const [deleteBook] = useDeleteBookMutation();

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
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link to={`/books/${book._id}`}>View Details</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenUpdate(true)}>
                        Update Book
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDeleteBook(book._id)}>
                        Delete Book
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <UpdateBookModal book={book} open={openUpdate} setOpen={setOpenUpdate} />
        </>
    );
}
