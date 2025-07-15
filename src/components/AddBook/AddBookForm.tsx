import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Swal from 'sweetalert2'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCreateBookMutation } from "@/redux/api/baseApi"
import { useNavigate } from "react-router"

// ✅ Define form validation schema with Zod
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.string().min(1, "Genre is required"),
  isbn: z.string().min(1, "ISBN is required"),
  copies: z
    .number()
    .min(1, "Copies must be greater than 0"),
})

// ✅ Infer the type from schema
type BookFormValues = z.infer<typeof formSchema>

export function AddBooksForm() {
  const form = useForm<BookFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      genre: "",
      isbn: "",
      copies: 1,
    },
  })
  const [createBook] = useCreateBookMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: BookFormValues) => {
    try {
      const response = await createBook(data).unwrap();
      if (response.success) {
        navigate("/books");
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset(); // optional
    } catch (error: unknown) {
      // Use type guard to narrow the error
      if (typeof error === "object" && error !== null && "data" in error) {
        const err = error as { data?: { message?: string }; message?: string };
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.data?.message || err.message || "Something went wrong",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An unexpected error occurred",
        });
      }
      console.error("❌ Error submitting book:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/** Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Book title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/** Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Book description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/** Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Book author" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/** Genre */}
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <Input placeholder="Book genre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/** ISBN */}
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="Book ISBN" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/** Copies */}
        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copies</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Number of copies"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
