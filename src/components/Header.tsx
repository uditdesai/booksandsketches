import { Svg } from "../components/Svg/Svg";
import Link from "next/link";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <nav className="w-full p-8 fixed flex items-center justify-between">
      <Link href="/">
        <a className="font-sans-serif text-16 text-black">Home</a>
      </Link>
      <Svg svg="logo" className="Header__svg absolute -top-6 w-140" />
      <Link href="/info">
        <a className="font-sans-serif text-16 text-black">Info</a>
      </Link>
    </nav>
  );
};
