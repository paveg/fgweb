import Link from 'next/link'

export type InlineLinkProps = {
  href: string
}

export const InlineLink: React.FC<InlineLinkProps> = ({ href, children }): JSX.Element => {
  return <Link href={href}>
    <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 mx-12">
      {children}
    </a>
  </Link >
}
