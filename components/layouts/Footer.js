import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import SocialFooterLinks from './SocialFooterLinks'

export default function Footer() {
  return (
    <footer className='py-2 text-xs flex flex-row justify-between'>
      <div className='flex space-x-4'>
        <SocialFooterLinks />
        <div className="mb-2 flex space-x-2 text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
      <div className="mb-4 text-gray-500 dark:text-gray-400 flex">
        Developed at Home and fully remote by {' '}
        <div className='flex hover:scale-150 duration-1000 ms-1'>
          <Link href="https://github.com/rich1n">
            <span className='dark:text-red-500 text-black'>
              me
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}