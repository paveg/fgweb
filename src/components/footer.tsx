import { IconButton } from './parts/buttons/iconButton'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

export const Footer: React.VFC = (): JSX.Element => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          href={'https://fg.vercel.app/'}
        >
          <span className="ml-3 text-xl sm:text-center">Funai Gaming</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 Funai —
          <a
            href="https://twitter.com/paveg_"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @paveg_
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <IconButton
            small
            label="Go to Instagram profile page."
            apperance="tertiary"
            IconComponent={InstagramIcon}
            href="https://www.instagram.com/_pavlog/"
            target="_blank"
          />
          <IconButton
            small
            label="Go to Twitter profile page."
            apperance="tertiary"
            IconComponent={TwitterIcon}
            href="https://twitter.com/paveg_"
            target="_blank"
          />
        </span>
      </div>
    </footer>
  )
}
