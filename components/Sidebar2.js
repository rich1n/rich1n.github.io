'use client';
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavLinks from "@/data/NavLinks"
import FooterSidebar from './layouts/FooterSidebar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import English from "@/public/english.png";
import Spanish from "@/public/spanish.png";

export default function Sidebar2() {
	const router = useRouter();
	const { locale } = useRouter()
	const defaultLang = locale === 'es'

	let pathname = usePathname() || '/';
		if (pathname.includes('/blog/')) {
			pathname = '/blog';
		}

  const onChangeLanguage = (lang) => (e) => {
    e.preventDefault()
    router.push(router.asPath, undefined, { locale: lang })
	}

	const [mounted, setMounted] = useState(false)
	const { theme, setTheme, resolvedTheme } = useTheme()
	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), [])

  return (
    <aside className='hidden sm:block'>
      <div className="lg:sticky lg:top-20">
      <div className="text-center my-4 md:my-8 space-y-10">
        <Link
					href="/"
				>
					R.
				</Link>
      </div>
        <nav className="" >
          <div className="text-base leading-5">
							<div className='flex justify-center'>
									{ defaultLang ?
										<button onClick={onChangeLanguage('en')} value='' defaultChecked = { locale === 'es' }>
											<Image
												src={English.src}
												width={24}
												height={24}
												alt={ defaultLang ? 'Ícono idioma inglés' : 'English flag icon' } 
												loading="lazy"
											/>
										</button>
										:
										<button onClick={onChangeLanguage('es')} value='' defaultChecked = { locale === 'es' }>
											<Image
												src={Spanish.src}
												width={24}
												height={24}
												alt={ defaultLang ? 'Ícono idioma español' : 'Spanish flag icon' } 
												loading="lazy"                  
											/>
										</button>
									}
							</div>
							<button
								aria-label="Toggle Dark Mode"
								type="button"
								className="ml-2 my-4 mr-1 h-8 w-8 rounded p-1 hover:bg-gray-600 duration-700"
								onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
							>
								<svg className="text-gray-900 dark:text-gray-100" fill="currentColor" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20">
									{mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
										<path fillRule="evenodd" clipRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
									) : (
										<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
									)}
								</svg>
							</button>
              {/**
              * Nav Link Bar
              */}
            <div className="my-6">
              {NavLinks.map((link) => (
                <Link
                  className="flex flex-row font-medium hover:bg-gray-600 duration-500 text-gray-900 dark:text-gray-100 sm:p-4"
                  key={link.title}
                  href={link.href}
                >
                  <Image
										src={English.src}
										width={25}
										height={25}
										alt="logo"
									/>
                </Link>
              ))}
            </div>
            <FooterSidebar />
          </div>
        </nav>
      </div>
    </aside>
  );
}
