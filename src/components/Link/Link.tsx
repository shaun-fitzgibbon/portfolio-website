import { AnchorHTMLAttributes, forwardRef, Ref } from 'react'
import NextLink, { LinkProps } from 'next/link'
import cn from 'classnames'
import styles from './Link.module.scss'

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps

const Link = (
  {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    children,
    className,
    ...rest
  }: CustomLinkProps,
  ref: Ref<HTMLAnchorElement>
) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}
      >
        <a className={cn(styles.Link, className)} ref={ref} {...rest}>
          {children}
        </a>
      </NextLink>
    )
  }

  if (isAnchorLink) {
    return (
      <a className={cn(styles.Link, className)} ref={ref} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a
      className={cn(styles.Link, className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {children}
    </a>
  )
}

export default forwardRef(Link)
