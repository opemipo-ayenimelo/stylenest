import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          StyleNest
        </Link>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Shop
          </Link>
          <a
            href="https://github.com/opemipo-ayenimelo/stylenest"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}