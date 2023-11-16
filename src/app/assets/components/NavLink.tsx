'use client'
//SAM - gardener's name
 
/*
 
NavLink: by default the active class is added when the href matches the start of the URL pathname.
I use the exact property to change it to an exact match with the whole URL pathname.

exact: bool
When true, the active class/style will only be applied if the location is matched exactly.

strict: bool
When true, the trailing slash on a location’s pathname will be taken into consideration when determining if the location matches the current URL. See the <Route strict> documentation for more information.

isActive: func
A function to add extra logic for determining whether the link is active. This should be used if you want to do more than verify that the link’s pathname matches the current URL’s pathname.

<NavLink
  to="/events/123"
  isActive={(match, location) => {
    if (!match) {
      return false;
    }

    // only consider an event active if its event id is an odd number
    const eventID = parseInt(match.params.eventID);
    return !isNaN(eventID) && eventID % 2 === 1;
  }}
>
  Event 123
</NavLink>
 
aria-current: string
The value of the aria-current attribute used on an active link. Available values are:

"page" - used to indicate a link within a set of pagination links
"step" - used to indicate a link within a step indicator for a step-based process
"location" - used to indicate the image that is visually highlighted as the current component of a flow chart
"date" - used to indicate the current date within a calendar
"time" - used to indicate the current time within a timetable
"true" - used to indicate if the NavLink is active
"false" - used to prevent assistive technologies from reacting to a current link (a use case would be to prevent multiple aria-current tags on a single page)
Defaults to "page".
*/
import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavProps {
    href: string;
    exact: boolean;
    children: React.ReactNode;
    className: string;
    activeclassname?: string;
    strict?: boolean;
    target?: string;
    rel?: string;
    // innerRef?: any;
}
 
export const NavLink = ({ href, exact, children, ...props }: NavProps) => {
  // implement strict
  const aRef = useRef<HTMLAnchorElement>(null)
  const [isHover, setIsHover ] = useState(false)
  const isDark = true;

  const pathname = usePathname()
  const active = ' font-bold'
  const isActive = exact ? pathname === href : pathname.startsWith(href)


  const darkStyle = isDark ? {} : {};

  const setHover = () => {
    setIsHover(true)
    // console.log(aRef.current?.style.backgroundColor)
  }
  const removeHover = () => {
    setIsHover(false)
  }
 
  if (isActive) {
    props.className += active + props.activeclassname
  }
 
  return (
    <Link 
      ref={aRef} 
      onMouseEnter={() => setHover()} 
      onMouseLeave={() => removeHover()}
      href={href} 
      {...props}>
      {children}
    </Link>
  )
}

export default NavLink
// 