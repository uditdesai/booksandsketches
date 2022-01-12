import React from "react";
import Sanity from "../../lib/config";
import { bookQuery, bookSlugsQuery } from "../../lib/queries";

interface BookProps {
  book: any;
}

const BookPage: React.FC<BookProps> = ({ book }) => {
  return (
    <main className="BookPage w-100 min-h-screen px-4 md:px-8 pt-48 pb-8 bg-white auto-rows-min grid">
      <div className="pr-24">
        <div className="w-full bg-blue-600 aspect-square"></div>
      </div>
      <div className="BookPage__infoWrapper w-full grid gap-x-24 gap-y-8">
        <h1 className="justify-self-end">Title</h1>
        <p>{book.title}</p>

        <h2 className="justify-self-end">Author</h2>
        <p>{book.author}</p>

        <h2 className="justify-self-end">Rating</h2>
        <p>{book.rating}/10</p>

        <h2 className="justify-self-end">Type</h2>
        <p>{book.isFiction ? "Fiction" : "Non-fiction"}</p>

        <h2 className="justify-self-end">Thoughts</h2>
        <p className="max-w-xl">{book.thoughts}</p>

        {!!book.sketchIdea ? (
          <>
            <h2 className="justify-self-end">Sketch idea</h2>
            <p className="max-w-xl">{book.sketchIdea}</p>
          </>
        ) : null}
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  const books = await Sanity.fetch(bookSlugsQuery);

  const paths = books.map((book: any) => ({
    params: {
      bookSlug: book.slug.current,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { bookSlug } = params;
  const book = await Sanity.fetch(bookQuery(bookSlug));

  return { props: { book } };
}

export default BookPage;
