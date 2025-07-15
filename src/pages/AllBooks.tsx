import BooksStats from "@/components/AllBooks/BooksStats";
import { BooksTable } from "@/components/AllBooks/BooksTable";

export default function AllBooks() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BooksStats/>
      <BooksTable />
    </div>
  )
}
