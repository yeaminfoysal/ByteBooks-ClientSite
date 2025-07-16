import BooksStats from "@/components/AllBooks/BooksStats";
import { BooksTable } from "@/components/AllBooks/BooksTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router";

export default function AllBooks() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-10">
        <div>
          <h1 className="text-3xl font-bold">Book Collection</h1>
          <p className="text-muted-foreground">Manage your library's book inventory</p>
        </div>
        <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
          <Link to="/create-book">
            <Plus className="mr-2 h-4 w-4" />
            Add New Book
          </Link>
        </Button>
      </div>

      <BooksStats />

      <BooksTable />
    </div>
  )
}
