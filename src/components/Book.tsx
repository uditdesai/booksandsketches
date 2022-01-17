import { useState, useEffect } from "react"
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
    if (fullFlipPos <= 4) setFullFlipPos((prev) => prev + 1)
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
      } aspect-[240/340] w-full block relative z-[1]`}
    >
      <div
        style={{ background: !fullFlipFunction ? book.color : "none" }}
        className={`Book__frontCover ${
          fullFlipFunction
            ? "Book__frontCover--slow"
            : "drop-shadow-lg grid place-items-center"
        } ${
          fullFlipPos >= 1 && "Book__frontCover--flipped"
        } w-full h-full absolute top-0 left-0`}
      >
        {fullFlipFunction ? (
          <>
            <div
              className="Book__face Book__face--front Book__face--cover"
              style={{ background: book.color }}
            >
              <Image
                src={urlFor(book.sketch).url()}
                alt={book.sketch.alt}
                layout="fill"
                className="pointer-events-none"
              />
            </div>
            <div
              className="Book__face Book__face--back Book__face--cover"
              style={{ background: book.color }}
            ></div>
          </>
        ) : (
          <Image
            src={urlFor(book.sketch).url()}
            alt={book.sketch.alt}
            layout="fill"
            className="pointer-events-none"
          />
        )}
      </div>
      <div
        className={`Book__page ${
          fullFlipFunction ? "Book__page--slow" : "bg-stone-50 drop-shadow-sm"
        }  Book__page--1 ${
          fullFlipPos >= 2 && "Book__page--1--flipped"
        } absolute left-0`}
      >
        {fullFlipFunction ? (
          <>
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
          </>
        ) : null}
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
        {fullFlipFunction ? (
          <>
            <div className="Book__face Book__face--front brightness-[0.98]">
              <span>{book.title}</span>
              <div></div>
              <span>3</span>
            </div>
            <div className="Book__face Book__face--back brightness-[0.98]">
              <span>{book.author}</span>
              <div></div>
              <span>4</span>
            </div>
          </>
        ) : null}
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
        {fullFlipFunction ? (
          <>
            <div className="Book__face Book__face--frontbrightness-[0.96]">
              <span>{book.title}</span>
              <div></div>
              <span>5</span>
            </div>
            <div className="Book__face Book__face--back brightness-[0.96]">
              <span>{book.author}</span>
              <div></div>
              <span>6</span>
            </div>
          </>
        ) : null}
      </div>
      <div
        className={`Book__page ${
          fullFlipFunction
            ? "hidden"
            : "drop-shadow-sm bg-stone-50 brightness-[0.91]"
        } Book__page--4 absolute left-0`}
      ></div>
      <div
        className={`Book__page ${
          fullFlipFunction
            ? "hidden"
            : "drop-shadow-sm bg-stone-50 brightness-[0.88]"
        } Book__page--5 absolute left-0`}
      ></div>
      <div
        style={{ background: !fullFlipFunction ? book.color : "none" }}
        className={`Book__backCover w-full h-full absolute top-0 left-0 ${
          fullFlipPos >= 5 && "Book__backCover--flipped"
        }`}
      >
        {fullFlipFunction ? (
          <>
            <div
              className="Book__face Book__face--front Book__face--cover"
              style={{ background: book.color }}
            ></div>
            <div
              className="Book__face Book__face--back Book__face--cover"
              style={{ background: book.color }}
            >
              <Image
                src={urlFor(book.sketch).url()}
                alt={book.sketch.alt}
                layout="fill"
                className="pointer-events-none"
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  )

  return (
    <div className="w-full h-full grid">
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
      ) : fullFlipFunction ? (
        <div className="w-full h-full grid grid-cols-2">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
          </div>
          <div className="w-full relative">
            {BookElement}
            <div className="w-full h-full absolute top-0 left-0 z-0 flex flex-col items-center justify-center">
              <p>Thanks for reading my thoughts</p>
            </div>
          </div>
        </div>
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
        <div className="mt-6 flex justify-self-center">
          <button className="mr-6" onClick={prevPage}>
            Prev
          </button>
          <button onClick={nextPage}>Next</button>
        </div>
      )}
    </div>
  )
}
