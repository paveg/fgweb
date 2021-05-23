import Link from 'next/link'

export type InlineLinkProps = {
  href: string
  target?: '_blank'
}

export const InlineLink: React.FC<InlineLinkProps> = ({ href, target, children }): JSX.Element => {
  return (target === '_blank') ?
    <Link href={href}>
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 mx-12" target={target} rel="noreferrer noopener">
        {children}
      </a>
    </Link> :
    <Link href={href}>
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 mx-12">
        {children}
      </a>
    </Link>
}
