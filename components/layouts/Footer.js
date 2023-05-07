import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <>
      <hr className="dark:border-gray-600 border-gray-400 mt-6 mb-2"/>
      <footer className='px-4 py-2 text-xs flex flex-row justify-between'>
        <div className="mb-2 flex space-x-2 text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-4 text-gray-500 dark:text-gray-400 flex">
          Developed at Home and fully remote by {' '}
          <div className='flex hover:scale-150 duration-1000 ms-1'>
            <a href="https://github.com/rich1n">
              <span className='dark:text-red-500 text-black'>
                me
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}