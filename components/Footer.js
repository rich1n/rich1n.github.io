import siteMetadata, { mail, github, linkedin, twitter } from '@/data/siteMetadata'
import Link from 'next/link'
// Icons taken from: https://simpleicons.org/
import Mail from '@/public/social-icons/mail.svg'
import Github from '@/public/social-icons/github.svg'
import Linkedin from '@/public/social-icons/linkedin.svg'
import Twitter from '@/public/social-icons/twitter.svg'
import Image from 'next/image'

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

export default function Footer({ kind, href, size = 8 }) {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

    const SocialSvg = components[kind]
    console.log(kind)
    console.log('mail')

return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4 text-white">
{/*
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
          >
            <span className="sr-only">{kind}</span>
            <SocialSvg
              className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
            />
          </a>
*/}
          <a href={`mailto:${siteMetadata.email}`} target='_blank'>
            <Image src={Mail} width={25} height={25} alt='Mail Footer Logo' className='hover:scale-125 logo-img'/>
          </a>
          <a href={siteMetadata.github} target='_blank'>
            <Image src={Github} width={25} height={25} alt='Linkedin Footer Logo' />
          </a>
          <a href={siteMetadata.linkedin} target='_blank'>
            <Image src={Linkedin} width={25} height={25} alt='Linkedin Footer Logo' />
          </a>
          <a href={siteMetadata.twitter} target='_blank'>
            <Image src={Twitter} width={25} height={25} alt='Twitter Footer Logo' />
          </a>
        </div>
        <hr className='border border-gray-600 w-2/3 md:w-1/3 mb-4'/>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Developed at Home and fully remote
          </Link>
        </div>
      </div>
    </footer>
  )
}