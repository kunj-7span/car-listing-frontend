import { useCallback, useRef } from "react"

export function useInfiniteScroll(
  onLoadMore: () => void,
  hasMore: boolean
) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const hasMoreRef = useRef(hasMore)
  const onLoadMoreRef = useRef(onLoadMore)

  hasMoreRef.current = hasMore
  onLoadMoreRef.current = onLoadMore

  const sentinelRef = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }

    if (node) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMoreRef.current) {
            onLoadMoreRef.current()
          }
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "400px",
        }
      )
      observer.observe(node)
      observerRef.current = observer
    }
  }, [])

  return { sentinelRef }
}