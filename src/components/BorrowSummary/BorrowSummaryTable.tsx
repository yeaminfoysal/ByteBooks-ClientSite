
// import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type { ColumnDef } from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi"
import type { Borrow } from "@/types/borrow"
// import { Link } from "react-router"
// import { Button } from "@/components/ui/button"
// import { Plus } from "lucide-react"


type BorrowRow = {
  title: string
  isbn: string
  totalQuantity: number
}

export default function BorrowSummaryTable() {
  const { data, isLoading, isFetching } = useGetBorrowSummaryQuery(undefined)
  const books: Borrow[] = data?.data || []

  // Transform to flat data for table
  const rows: BorrowRow[] = books.map((b) => ({
    title: b.book.title,
    isbn: b.book.isbn,
    totalQuantity: b.totalQuantity,
  }))

  const columns: ColumnDef<BorrowRow>[] = [
    {
      accessorKey: "title",
      header: "Book Title",
    },
    {
      accessorKey: "isbn",
      header: "ISBN",
    },
    {
      accessorKey: "totalQuantity",
      header: "Total Borrowed",
    },
  ]

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
    return (
        <div className="rounded-md border mt-10">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                {isLoading || isFetching ? (
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={3} className="text-center py-10">
                                Loading borrow summary...
                            </TableCell>
                        </TableRow>
                    </TableBody>
                ) : (
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-10">
                                    No data available.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                )}
            </Table>
        </div>
    )
}
