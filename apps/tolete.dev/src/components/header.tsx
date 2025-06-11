export function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-black'>
      <div className='flex items-center justify-between h-16 px-4'>
        <div className='flex items-center'>
          <h1 className='text-xl font-bold'>My Website</h1>
        </div>
        <nav className='hidden md:flex space-x-4'>
          <a href='#' className='text-gray-800 dark:text-gray-200 hover:text-blue-500'>
            Home
          </a>
          <a href='#' className='text-gray-800 dark:text-gray-200 hover:text-blue-500'>
            About
          </a>
          <a href='#' className='text-gray-800 dark:text-gray-200 hover:text-blue-500'>
            Services
          </a>
          <a href='#' className='text-gray-800 dark:text-gray-200 hover:text-blue-500'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
