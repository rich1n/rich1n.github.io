import siteMetadata, { github, linkedin, twitter } from '@/data/siteMetadata'
import Link from 'next/link'

// Icons taken from: https://simpleicons.org/
import Mail from '@/public/social-icons/mail.svg'
import Github from '@/public/social-icons/github.svg'
import Linkedin from '@/public/social-icons/linkedin.svg'
import Twitter from '@/public/social-icons/twitter.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4 text-white">
          <a href={`mailto:${siteMetadata.email}`} target='_blank'>
            <Image src={Mail} width={25} height={25} alt='Mail Footer Logo' />
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