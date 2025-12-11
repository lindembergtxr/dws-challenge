import { useLayoutEffect, type RefObject } from 'react'

export function useDynamicClamp(
  containerRef: RefObject<HTMLDivElement | null>,
  contentRef: RefObject<HTMLHeadElement | HTMLParagraphElement | null>,
) {
  useLayoutEffect(() => {
    const div = containerRef.current
    const text = contentRef.current

    if (!text || !div) return

    function update() {
      if (!text || !div) return

      const totalHeight = div.clientHeight

      const lineHeight = parseFloat(getComputedStyle(text).lineHeight)
      const maxLines = Math.floor(totalHeight / lineHeight)
      text.style.webkitLineClamp = String(maxLines > 0 ? maxLines : 1)
    }

    update()

    const observer = new ResizeObserver(update)
    observer.observe(div)

    window.addEventListener('resize', update)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [contentRef, containerRef])
}
