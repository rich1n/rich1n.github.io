'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import DarkMode from './DarkMode';
import NavLinks from "@/data/NavLinks"
import FooterSidebar from './FooterSidebar';
import LangBar from './LangBar';

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className='hidden sm:block'>
      <div className="lg:sticky lg:top-20">
      <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:my-8 space-y-10 flex flex-col md:flex-row items-start">
        LOGO
      </div>
        <nav className="flex flex-row items-start relative px-4 md:px-0 pb-0 fade md:relative" >
          <div className="text-base leading-5">
              {/**
              * Nav Link Bar
              */}
            <div className="my-6">
              {NavLinks.map((link) => (
                <Link
                  className="flex flex-row p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                  key={link.title}
                  href={link.href}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <FooterSidebar />
            <div className='text-center'>
              <LangBar />
              <DarkMode />
            </div>

          </div>
        </nav>
      </div>
    </aside>
  );
}
