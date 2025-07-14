import { useGetBookDetailsQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { BookOpen, Users } from "lucide-react";

export default function BookDetails() {

  const params = useParams();
  const id = params.id
  const { data, isFetching, isLoading } = useGetBookDetailsQuery({ id })
  const book = data?.data;

  console.log(book);
  const getBookColor = (title: string) => {
    const colors = [
      'from-rose-400 to-pink-600',
      'from-blue-400 to-cyan-600',
      'from-green-400 to-emerald-600',
      'from-purple-400 to-violet-600',
      'from-orange-400 to-red-600',
      'from-indigo-400 to-blue-600',
      'from-teal-400 to-cyan-600',
      'from-amber-400 to-orange-600',
    ];

    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const getIconColor = (title: string) => {
    const colors = [
      'text-rose-200',
      'text-blue-200',
      'text-green-200',
      'text-purple-200',
      'text-orange-200',
      'text-indigo-200',
      'text-teal-200',
      'text-amber-200',
    ];

    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  if (isLoading || isFetching) return <p>Loading...</p>;

  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl border-0">
      <CardContent className="p-0">
        {/* Book Image Placeholder */}
        <div className="relative aspect-[1] overflow-hidden group-hover:scale-105 transition-all duration-200">
          <div className={`absolute inset-0 bg-gradient-to-br ${getBookColor(book?.title)} opacity-80 w-[85%] mx-auto rounded-lg`} />

          {/* Book Icon */}
          <div className="absolute top-28 right-12">
            <BookOpen className={`w-48 h-30 ${getIconColor(book?.title)} opacity-100`} />
          </div>

          {/* Book Title on Image */}
          <div className="absolute inset-0 flex justify-center p-6 pt-12">
            <h3 className=" text-xl font-semibold text-center leading-tight drop-shadow-lg">
              {book?.title}
            </h3>
          </div>
          {/* Genre Badge */}
          {/* <div className="absolute bottom-4 right-8">
            <Badge variant="secondary" className="">
              {book.genre}
            </Badge>
          </div> */}
        </div>
      </CardContent>

      <CardFooter className="p-6 flex-col space-y-3">
        {/* Author */}
        {/* <div className="w-full">
          <p className="text-sm text-muted-foreground">by {book.author}</p>
        </div> */}

        {/* Description */}
        {/* <div className="w-full">
          <p className="text-sm line-clamp-3 leading-relaxed">
            {book.description}
          </p>
        </div> */}

        {/* Footer Info */}
        <div className="w-full">
          <div className="flex text-sm mb-2 items-center gap-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>Borrowed : {book?.totalQuantity} copies</span>
          </div>
          <div className="text-sm text-muted-foreground">
            ISBN: {book?.isbn}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
