import { useEffect, useRef, useState } from 'react'

export const useScrollSpy = (
  elements: (Element | null)[],
  options?: {
    root?: Element
    offset?: number
    threshold?: number
  }
): [number | Element[] | number[] | null] => {
  const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] =
    useState(-1)

  const rootMargin = `-${(options && options.offset) || 0}px 0px 0px 0px`

  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        console.log(entries)
        // find the index of the section that is currently intersecting
        const indexOfElementIntersecting = entries.findIndex((entry) => {
          // if intersection > 0 it means entry is intersecting with the view port
          return entry.intersectionRatio > 0
        })

        // store the value of indexOfElementIntersecting
        setCurrentIntersectingElementIndex(indexOfElementIntersecting)
      },
      {
        root: (options && options.root) || null,
        // use this option to handle custom offset
        rootMargin,
        threshold: options && options.threshold,
      }
    )

    const { current: currentObserver } = observer

    // observe all the elements passed as argument of the hook
    elements &&
      elements.forEach((element) =>
        element ? currentObserver.observe(element) : null
      )

    return () => currentObserver.disconnect()
  }, [elements, options, rootMargin])

  return [currentIntersectingElementIndex]
}
