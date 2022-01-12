import type { NextPage } from "next";
import Link from "next/link";
import Sanity from "../lib/config";
import { booksQuery } from "../lib/queries";

interface HomeProps {
  books: any;
}

const Home: NextPage<HomeProps> = ({ books }) => {
  return (
    <main className="w-100 min-h-screen px-4 md:px-8 pt-48 bg-white grid grid-cols-4 gap-x-32">
      {books.map((book) => (
        <Link href={`/books/${book.slug.current}`} key={book._id}>
          <a>
            <div className="w-full bg-blue-600 aspect-square">{book.title}</div>
          </a>
        </Link>
      ))}
    </main>
  );
};

export async function getStaticProps({ params }: any) {
  const books = await Sanity.fetch(booksQuery);

  return { props: { books } };
}

export default Home;
