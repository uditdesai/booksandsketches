import React from "react"
import { Book } from "../../components/Book"
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tag"
import { Sanity } from "../../lib/config"
import { bookQuery, bookSlugsQuery } from "../../lib/queries"

interface BookProps {
  book: any
}

const BookPage: React.FC<BookProps> = ({ book }) => {
  return (
    <main className="w-100 min-h-screen px-4 md:px-8 pb-8 pt-24 xs:pt-36 md:pt-48 bg-white flex items-center sm:items-start flex-col sm:flex-row sm:justify-center">
      {/* <div className="w-56 max-w-xs sm:max-w-[15rem] md:max-w-[18rem] xs:w-full mb-12 sm:mr-12 sm:mb-0 md:mr-20">
        <Book book={book} showContent={false} isLink={false} />
      </div>
      <div className="w-full max-w-xl flex flex-col">
        <h1 className="text-24 mb-1">{book.title}</h1>
        <p className="text-16">{book.author}</p>

        <div className="mt-2 grid grid-flow-col auto-cols-min gap-x-2">
          <Tag tag={book.isFiction ? "Fiction" : "Non-fiction"} type="type" />
          {book.bookGenre.map((genre: string) => {
            return <Tag tag={genre} type="genre" key={genre} />
          })}
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
      </div> */}

      <div className="w-56 max-w-xs sm:max-w-xxxs md:max-w-xxs xs:w-full mb-12 sm:mr-12 sm:mb-0 md:mr-20">
        <Book
          book={book}
          showContent={false}
          isLink={false}
          animateOnHover={false}
          fullFlipFunction={true}
        />
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
