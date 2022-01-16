import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "../lib/config"

interface BookProps {
  book: any
  showContent?: boolean
  isLink?: boolean
  animateOnHover: boolean
  fullFlipFunction: boolean
}

export const Book: React.FC<BookProps> = ({
  book,
  showContent = true,
  isLink = true,
  animateOnHover = true,
  fullFlipFunction = false,
}) => {
  const [fullFlipPos, setFullFlipPos] = useState(0)

  const nextPage = () => {
    if (fullFlipPos <= 5) setFullFlipPos((prev) => prev + 1)
  }

  const prevPage = () => {
    if (fullFlipPos > 0) setFullFlipPos((prev) => prev - 1)
  }

  const BookElement = (
    <div
      className={`Book__wrapper ${
        animateOnHover && "Book__wrapper--animateOnHover"
      } ${
        fullFlipFunction && "Book__wrapper--fullFlip"
      } aspect-[240/340] w-full block relative`}
    >
      <div
        style={{ background: book.color }}
        className={`Book__frontCover ${
          fullFlipFunction && "Book__frontCover--slow"
        } ${
          fullFlipPos >= 1 && "Book__frontCover--flipped"
        } w-full h-full absolute top-0 left-0 drop-shadow-lg grid place-items-center`}
      >
        <Image
          src={urlFor(book.sketch).url()}
          alt={book.sketch.alt}
          layout="fill"
          className="pointer-events-none"
        />
      </div>
      <div
        className={`Book__page ${
          fullFlipFunction ? "Book__page--slow" : "bg-stone-50 drop-shadow-sm"
        }  Book__page--1 ${
          fullFlipPos >= 2 && "Book__page--1--flipped"
        } absolute left-0`}
      >
        <div className="Book__face Book__face--front">
          <span>{book.title}</span>
          <div></div>
          <span>1</span>
        </div>
        <div className="Book__face Book__face--back">
          <span>{book.author}</span>
          <div></div>
          <span>2</span>
        </div>
      </div>
      <div
        className={`Book__page ${
          fullFlipFunction
            ? "Book__page--slow"
            : "drop-shadow-sm bg-stone-50 brightness-[0.97]"
        } Book__page--2 ${
          fullFlipPos >= 3 && "Book__page--2--flipped"
        } absolute left-0`}
      >
        <div className="Book__face Book__face--front brightness-[0.99]">
          <span>{book.title}</span>
          <div></div>
          <span>3</span>
        </div>
        <div className="Book__face Book__face--back brightness-[0.99]">
          <span>{book.author}</span>
          <div></div>
          <span>4</span>
        </div>
      </div>
      <div
        className={`Book__page ${
          fullFlipFunction
            ? "Book__page--slow"
            : "drop-shadow-sm bg-stone-50 brightness-[0.94]"
        } Book__page--3 ${
          fullFlipPos >= 4 && "Book__page--3--flipped"
        } absolute left-0`}
      >
        <div className="Book__face Book__face--frontbrightness-[0.98]">
          <span>{book.title}</span>
          <div></div>
          <span>5</span>
        </div>
        <div className="Book__face Book__face--back brightness-[0.98]">
          <span>{book.author}</span>
          <div></div>
          <span>6</span>
        </div>
      </div>
      <div
        className={`Book__page ${
          fullFlipFunction
            ? "Book__page--slow"
            : "drop-shadow-sm bg-stone-50 brightness-[0.91]"
        } Book__page--4 ${
          fullFlipPos >= 5 && "Book__page--4--flipped"
        } absolute left-0`}
      >
        <div className="Book__face Book__face--front brightness-[0.97]">
          <span>{book.title}</span>
          <div></div>
          <span>7</span>
        </div>
        <div className="Book__face Book__face--back brightness-[0.97]">
          <span>{book.author}</span>
          <div></div>
          <span>8</span>
        </div>
      </div>
      <div
        className={`Book__page ${
          fullFlipFunction
            ? "Book__page--slow"
            : "drop-shadow-sm bg-stone-50 brightness-[0.88]"
        } Book__page--5 ${
          fullFlipPos >= 6 && "Book__page--5--flipped"
        } absolute left-0`}
      >
        <div className="Book__face Book__face--frontbrightness-[0.96]">
          <span>{book.title}</span>
          <div></div>
          <span>9</span>
        </div>
        <div className="Book__face Book__face--back brightness-[0.96]">
          <span>{book.author}</span>
          <div></div>
          <span>10</span>
        </div>
      </div>
      <div
        style={{ background: book.color }}
        className="Book__backCover w-full h-full absolute top-0 left-0"
      ></div>
    </div>
  )

  return (
    <div>
      {isLink ? (
        <Link href={`/books/${book.slug.current}`}>
          <a
            className={`Book__linkWrapper ${
              animateOnHover && "Book__linkWrapper--animateOnHover"
            }`}
          >
            {BookElement}
          </a>
        </Link>
      ) : (
        <>{BookElement}</>
      )}

      {showContent && (
        <Link href={`/books/${book.slug.current}`}>
          <a>
            <p className="mt-4 text-18">{book.title}</p>
            <p className="text-14">{book.author}</p>
          </a>
        </Link>
      )}

      {fullFlipFunction && (
        <div className="mt-6 flex">
          <button className="mr-6" onClick={prevPage}>
            Prev
          </button>
          <button onClick={nextPage}>Next</button>
        </div>
      )}
    </div>
  )
}
