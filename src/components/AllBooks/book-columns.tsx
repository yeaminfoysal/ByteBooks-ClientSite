import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu"
import type { ColumnDef } from "@tanstack/react-table"
import type { Book } from "@/types/books"
// import { Link } from "react-router"
// import { UpdateBookModal } from "../BookDetails/UpdateModalForm"
// import { useState } from "react";
import { ActionCell } from "./ActionCell"


export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Title <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => <div>{row.getValue("author")}</div>,
  },
  {
    accessorKey: "genre",
    header: "Genre",
    cell: ({ row }) => <div>{row.getValue("genre")}</div>,
  },
  {
    accessorKey: "copies",
    header: "Copies",
    cell: ({ row }) => <div className="text-left">{row.getValue("copies")}</div>,
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({ row }) => (
      <span className={row.getValue("available") ? "text-green-600" : "text-red-500"}>
        {row.getValue("available") ? "Yes" : "No"}
      </span>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionCell book={row.original} />,
  }
]
