import React from "react"
import { Book } from "../../components/Book"
import { Rating } from "../../components/Rating"
import { Sanity } from "../../lib/config"
import { bookQuery, bookSlugsQuery } from "../../lib/queries"

interface BookProps {
  book: any
}

const BookPage: React.FC<BookProps> = ({ book }) => {
  return (
    <main className="w-100 min-h-screen px-4 md:px-8 pt-48 pb-8 bg-white flex justify-center">
      <div className="w-80 mr-24">
        <Book book={book} showContent={false} />
      </div>
      <div className="w-full max-w-xl flex flex-col">
        <h1 className="text-24 mb-1">{book.title}</h1>
        <div className="w-full flex">
          <p className="text-16 mr-12">{book.author}</p>
          <p className="text-16 mr-12">
            {book.isFiction ? "Fiction" : "Non-fiction"}
          </p>
        </div>

        <p className="mt-4 text-14 mb-1">Rating</p>
        <Rating rating={book.rating} color={book.color} />

        <p className="mt-4 text-14 mb-1">Thoughts</p>
        <p className="text-16">{book.thoughts}</p>

        {!!book.sketchIdea ? (
          <>
            <p className="mt-4 text-14 mb-1">Sketch Idea</p>
            <p className="text-16">{book.sketchIdea}</p>
          </>
        ) : null}
      </div>
    </main>
  )
}

export async function getStaticPaths() {
  const books = await Sanity.fetch(bookSlugsQuery)

  const paths = books.map((book: any) => ({
    params: {
      bookSlug: book.slug.current,
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const { bookSlug } = params
  const book = await Sanity.fetch(bookQuery(bookSlug))

  return { props: { book } }
}

export default BookPage
