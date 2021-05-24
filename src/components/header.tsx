import Link from 'next/link'

export const Header: React.VFC = (): JSX.Element => {
  return (
    <header className="body-font bg-gray-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center mb-4 md:mb-0"
          href={'/'}
        >
          <span className="text-xl text-white">Funai Gaming Web</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-white text-gray-300">Home</a>
          </Link>
          <Link href="/members">
            <a className="mr-5 hover:text-white text-gray-300">Member</a>
          </Link>
          <Link href="/parts">
            <a className="mr-5 hover:text-white text-gray-300">Parts</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
