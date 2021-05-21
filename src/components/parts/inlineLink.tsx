import Link from 'next/link'

type Props = {
  href: string
}

export const InlineLink: React.FC<Props> = ({ href, children }): JSX.Element => {
  return <Link href={href}>
    <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
      {children}
    </a>
  </Link >
}
