import type { NextPage } from "next";
import Sanity from "../lib/config";
import { booksQuery } from "../lib/queries";

interface HomeProps {
  books: any;
}

const Home: NextPage<HomeProps> = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <h1 key={book.slug}>{book.title}</h1>
      ))}
    </>
  );
};

export async function getStaticProps({ params }: any) {
  const books = await Sanity.fetch(booksQuery);

  return { props: { books } };
}

export default Home;
