import React from "react";
import Sanity from "../../lib/config";
import { bookQuery, bookSlugsQuery } from "../../lib/queries";

interface BookProps {
  book: any;
}

const BookPage: React.FC<BookProps> = (props) => {
  return <div>{props.book.title}</div>;
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
