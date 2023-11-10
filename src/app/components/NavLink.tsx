'use client'
//SAM
 
/*
 
NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.
 
*/
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavProps {
    href: string;
    exact?: string;
    children: React.ReactNode;
    className: string;
}
 
export const NavLink = ({ href, exact, children, ...props }: NavProps) => {
  const pathname = usePathname()
  const active = ' font-bold'
  const isActive = exact ? pathname === href : pathname.startsWith(href)
 
  if (isActive) {
    props.className += active
  }
 
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}