import { AddBooksForm } from "@/components/AddBook/AddBookForm";

export default function AddBooks() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Add New Book</h1>
        <p className="text-muted-foreground">Add a new book to your library collection
        </p>
      </div>
      <AddBooksForm />
    </div>
  )
}
