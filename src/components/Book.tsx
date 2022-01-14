import Link from "next/link"
import Image from "next/image"
import { urlFor } from "../lib/config"

interface BookProps {
  book: any
  showContent?: boolean
  isLink?: boolean
}

export const Book: React.FC<BookProps> = ({
  book,
  showContent = true,
  isLink = true,
}) => {
  return (
    <div>
      {isLink ? (
        <Link href={`/books/${book.slug.current}`}>
          <a className="Book__linkWrapper">
            <div className="Book__wrapper aspect-240/340 w-full block relative">
              <div
                style={{ background: book.color }}
                className="Book__frontCover w-full h-full absolute top-0 left-0 drop-shadow-lg grid place-items-center"
              >
                <Image
                  src={urlFor(book.sketch).url()}
                  alt={book.sketch.alt}
                  layout="fill"
                  className="pointer-events-none"
                />
              </div>
              <div className="Book__page Book__page--1 absolute left-0 drop-shadow-sm bg-stone-50"></div>
              <div className="Book__page Book__page--2 absolute left-0 drop-shadow-sm bg-stone-100"></div>
              <div className="Book__page Book__page--3 absolute left-0 drop-shadow-sm bg-stone-200"></div>
              <div className="Book__page Book__page--4 absolute left-0 drop-shadow-sm bg-stone-300"></div>
              <div
                style={{ background: book.color }}
                className="Book__backCover w-full h-full absolute top-0 left-0"
              ></div>
            </div>
          </a>
        </Link>
      ) : (
        <div className="Book__wrapper aspect-240/340 w-full block relative">
          <div
            style={{ background: book.color }}
            className="Book__frontCover w-full h-full absolute top-0 left-0 drop-shadow-lg grid place-items-center"
          >
            <Image
              src={urlFor(book.sketch).url()}
              alt={book.sketch.alt}
              layout="fill"
              className="pointer-events-none"
            />
          </div>
          <div className="Book__page Book__page--1 absolute left-0 drop-shadow-sm bg-stone-50"></div>
          <div className="Book__page Book__page--2 absolute left-0 drop-shadow-sm bg-stone-100"></div>
          <div className="Book__page Book__page--3 absolute left-0 drop-shadow-sm bg-stone-200"></div>
          <div className="Book__page Book__page--4 absolute left-0 drop-shadow-sm bg-stone-300"></div>
          <div
            style={{ background: book.color }}
            className="Book__backCover w-full h-full absolute top-0 left-0"
          ></div>
        </div>
      )}

      {showContent && (
        <Link href={`/books/${book.slug.current}`}>
          <a>
            <p className="mt-4 text-18">{book.title}</p>
            <p className="text-14">{book.author}</p>
          </a>
        </Link>
      )}
    </div>
  )
}
