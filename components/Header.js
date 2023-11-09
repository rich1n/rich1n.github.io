import DarkMode from "./DarkMode"
import Link from "next/link"
import NavLinks from "../data/NavLinks"

export default function Header( { title = '', titulo = '', description = '', home } ) {
  return (
    <div className="mt-8 flex items-center justify-center text-base leading-5">
      <div className="hidden sm:block">
        {NavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <DarkMode />
    </div>
  )
}
