"use client";

import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import type { Book } from "@/types/books";
import { useState } from "react";
import { useUpdateBookMutation } from "@/redux/api/baseApi";

type BookFormValues = Omit<Book, "_id" | "available" | "createdAt" | "updatedAt">;

type IBook = {
    book: Book;
};

export function UpdateBookModal({ book }: IBook) {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<BookFormValues>({
        defaultValues: {
            title: book.title,
            author: book.author,
            genre: book.genre,
            isbn: book.isbn,
            description: book.description,
            copies: book.copies,
        },
    });

    const [updateBook] = useUpdateBookMutation();

    const onSubmit = async (data: BookFormValues) => {
        try {
            const response = await updateBook({
                bookId: book._id,
                book: data,
            }).unwrap();

            console.log("Updated book:", response);
            reset()
            setOpen(false); // close modal
        } catch (err) {
            console.error("Failed to update:", err);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 w-8 p-0"
                    onClick={() => reset()}
                >
                    <Edit2 className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Book</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    {[
                        { id: "title", label: "Title" },
                        { id: "author", label: "Author" },
                        { id: "genre", label: "Genre" },
                        { id: "isbn", label: "ISBN" },
                    ].map(({ id, label }) => (
                        <div className="grid grid-cols-4 items-center gap-4" key={id}>
                            <Label htmlFor={id} className="text-right">{label}</Label>
                            <Input
                                id={id}
                                {...register(id as keyof BookFormValues, { required: `${label} is required` })}
                                className="col-span-3"
                            />
                            {errors[id as keyof BookFormValues] && (
                                <p className="col-span-4 text-sm text-red-500 text-center -mt-2">
                                    {errors[id as keyof BookFormValues]?.message}
                                </p>
                            )}
                        </div>
                    ))}

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="copies" className="text-right">Copies</Label>
                        <Input
                            type="number"
                            id="copies"
                            {...register("copies", {
                                required: "Copies is required",
                                valueAsNumber: true,
                                min: { value: 1, message: "Must be at least 1 copy" },
                            })}
                            className="col-span-3"
                        />
                        {errors.copies && (
                            <p className="col-span-4 text-sm text-red-500 text-center -mt-2">
                                {errors.copies.message}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="description" className="text-right pt-2">Description</Label>
                        <textarea
                            id="description"
                            {...register("description", { required: "Description is required" })}
                            rows={4}
                            className="col-span-3 border rounded-md p-2 text-sm"
                        />
                        {errors.description && (
                            <p className="col-span-4 text-sm text-red-500 text-center -mt-2">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    <DialogFooter>
                        <Button type="submit">Update Book</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
