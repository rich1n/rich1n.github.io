import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

// Icons taken from: https://simpleicons.org/
import Mail from '@/public/social-icons/mail.svg'
import Github from '@/public/social-icons/github.svg'
import Facebook from '@/public/social-icons/facebook.svg'
import Youtube from '@/public/social-icons/youtube.svg'
import Linkedin from '@/public/social-icons/linkedin.svg'
import Twitter from '@/public/social-icons/twitter.svg'
import Image from 'next/image'

const components = { 
  mail: Mail, 
  github: Github, 
  facebook: Facebook, 
  youtube: Youtube, 
  linkedin: Linkedin, 
  twitter: Twitter 
}

const raton = Mail

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]
  const ratas =  raton

  return (
    <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
{/*      <SocialSvg className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`} />
*/}    </a>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <Image src={Mail} href={`mailto:${siteMetadata.email}`} size="6"/>
          <SocialIcon src={Mail} href={`mailto:${siteMetadata.email}`} size="6"/>
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Developed by TheCoffeeToday
          </Link>
        </div>
      </div>
    </footer>
  )
}