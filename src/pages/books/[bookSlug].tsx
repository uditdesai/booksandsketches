import React from "react"
import { Book } from "../../components/Book"
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Sanity } from "../../lib/config"
import { bookQuery, bookSlugsQuery } from "../../lib/queries"

interface BookProps {
  book: any
}

const BookPage: React.FC<BookProps> = ({ book }) => {
  return (
    <main className="w-100 min-h-screen px-4 md:px-8 pb-16 pt-24 xs:pt-36 md:pt-48 bg-white flex items-center flex-col">
      <div className="w-1/2">
        <Book
          book={book}
          showContent={false}
          isLink={false}
          animateOnHover={false}
          fullFlipFunction={true}
        />
      </div>

      <div
        className="pt-40 mb-40 w-full flex justify-center"
        id={`${book.slug.current}-compact`}
      >
        <div className="w-56 max-w-xs sm:max-w-[15rem] md:max-w-[18rem] xs:w-full mb-12 sm:mr-12 sm:mb-0 md:mr-20">
          <Book
            book={book}
            showContent={false}
            isLink={false}
            fullFlipFunction={false}
            animateOnHover={false}
          />
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
        </div>
      </div>

      <div className="w-[fit-content] flex flex-col items-center">
        <p className="text-16 mb-5 text-center">
          Thanks for reading
          <br />
          my thoughts
        </p>
        <Button style="filled" to="/" label="Back to home" color={book.color} />
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
