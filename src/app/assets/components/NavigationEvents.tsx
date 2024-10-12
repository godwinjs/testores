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
  const url = `${pathname}`
 
  useLayoutEffect(() => {
    // start:: prevent executing useEffect twice
    if (dataFetch.current) return;
    setHeight(window.innerHeight)
    // console.log("document.readyState === 'complete'", document.readyState === 'complete')
    if (document.readyState === 'complete') {
       setLoading(false)
    }

    dataFetch.current = true;
  }, [pathname, searchParams, loading])
  
  // console.log('url: ', url, 'loading: ', loading)
  // <Loader height={height} size={150} /> 
 
  // return <>{loading ? children : children }</>

  return children; //header/chidren/footer //use a global loading state for page UI!!!!!!!!!!!!!!!!!!!!!!!
}