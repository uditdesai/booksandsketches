import type { NextPage } from "next"
import { Sanity } from "../lib/config"
import { booksQuery } from "../lib/queries"
import { Book } from "../components/Book"
import { Key } from "react"

interface HomeProps {
  books: any
}

const Home: NextPage<HomeProps> = ({ books }) => {
  return (
    <main className="w-100 px-4 md:px-8 pb-8 pt-24 xs:pt-36 md:pt-48 bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 xs:gap-x-24 sm:gap-x-20 lg:gap-x-24 xl:gap-x-28">
      {books.map((book: any) => (
        <Book
          key={book._id}
          book={book}
          animateOnHover={true}
          fullFlipFunction={false}
        />
      ))}
    </main>
  )
}

export async function getStaticProps({ params }: any) {
  const books = await Sanity.fetch(booksQuery)

  return { props: { books } }
}

export default Home
