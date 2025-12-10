import { useLayoutEffect, type RefObject } from 'react'

export function useDynamicClamp(ref: RefObject<HTMLHeadElement | HTMLParagraphElement | null>) {
  useLayoutEffect(() => {
    const el = ref.current

    if (!el) return

    const totalHeight = el.clientHeight

    const lineHeight = parseFloat(getComputedStyle(el).lineHeight)

    const maxLines = Math.floor(totalHeight / lineHeight)

    el.style.webkitLineClamp = String(maxLines > 0 ? maxLines : 1)
  }, [ref])
}
