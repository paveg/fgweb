type Props = {}

type IconLinkProps = {
  href: string
}
const InstagramIconLink: React.VFC<IconLinkProps> = ({ href }): JSX.Element => {
  return <a className="ml-3 text-gray-500" href={href} rel="noopener noreferrer" target="_blank">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    </svg>
  </a>
}

const TwitterIconLink: React.VFC<IconLinkProps> = ({ href }): JSX.Element => {
  return <a className="ml-3 text-gray-500" href={href} rel="noopener noreferrer" target="_blank">
    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>
  </a>
}

export const Footer: React.FC<Props> = (): JSX.Element => {
  return <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM3 17l10 5 10-5M2 12l10 5 10-5">aaa</path>
        </svg>
        <span className="ml-3 text-xl">Funai Gaming</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 Funai Gaming —
        <a href="https://twitter.com/paveg_" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@paveg_</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <TwitterIconLink href="https://twitter.com/paveg_" />
        <InstagramIconLink href="https://www.instagram.com/_pavlog/" />
      </span>
    </div>
  </footer>
}
