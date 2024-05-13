'use client'
 
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
 
export function NavigationEvents({
  children,
}: {
  children: React.ReactNode
}) {
  const [ loading, setLoading ] = useState(true)
  const [ height, setHeight ] = useState(0)
  const dataFetch = useRef(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  useLayoutEffect(() => {
    // start:: prevent executing useEffect twice
    if (dataFetch.current) return;
    setHeight(window.innerHeight)
    // console.log("document.readyState === 'complete'", document.readyState === 'complete')
    if (document.readyState === 'complete') {
       setLoading(false)
    }

    // ?${searchParams}
    const url = `${pathname}`
    console.log(url)
    // You can now use the current URL
    // ...

    dataFetch.current = true;
    // end:: prevent executing useEffect twice
  }, [pathname, searchParams, loading])
  // <Loader height={height} size={150} />
 
  // return <>{loading ? children : children }</>
  return children;
}