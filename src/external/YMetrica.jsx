'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
 
function YandexMetrika() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    ym(100354197, 'hit', url);
 
  }, [pathname, searchParams])
 
  return null
}
export default function YMetrikaComponent() {
	return (
		<Suspense fallback={null}>
			<YandexMetrika />
		</Suspense>
	)
}