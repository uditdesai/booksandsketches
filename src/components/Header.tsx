import { Svg } from "../components/Svg/Svg"
import Link from "next/link"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <nav className="w-full p-4 md:p-8 fixed top-0 left-0 flex items-center justify-between z-50">
      <Link href="/">
        <a className="font-sans-serif text-16 text-black">Home</a>
      </Link>
      <Link href="/">
        <a className="Header__svgLink">
          <Svg
            svg="logo"
            className="Header__svg absolute -top-3 w-56 xs:-top-5 xs:w-96 md:-top-7 md:w-140"
            ariaLabel="Books and Sketches logo"
          />
        </a>
      </Link>
      <Link href="/info">
        <a className="font-sans-serif text-16 text-black">Info</a>
      </Link>
    </nav>
  )
}
