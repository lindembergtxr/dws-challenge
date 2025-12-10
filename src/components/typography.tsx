import type { ReactNode } from 'react'
import styled, { type DefaultTheme } from 'styled-components'

const Typography = {
  h1: styled.h1<{ $weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight ?? 'bold']};
    line-height: ${({ theme }) => theme.lineHeight.base};
  `,
  h2: styled.h2<{ $weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight ?? 'bold']};
    line-height: ${({ theme }) => theme.lineHeight.base};
  `,
  h3: styled.h3<{ $weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight ?? 'bold']};
    line-height: ${({ theme }) => theme.lineHeight.base};
  `,
  bodyLarge: styled.p<{ $weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight ?? 'regular']};
    line-height: ${({ theme }) => theme.lineHeight.lg};
  `,
  bodySmall: styled.p<{ $weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight ?? 'regular']};
    line-height: ${({ theme }) => theme.lineHeight.lg};
  `,
  caption: styled.p<{ $weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight ?? 'regular']};
    line-height: ${({ theme }) => theme.lineHeight.base};
  `,
} as const

type TypographyMap = {
  h1: typeof Typography.h1
  h2: typeof Typography.h2
  h3: typeof Typography.h3
  bodyLarge: typeof Typography.bodyLarge
  bodySmall: typeof Typography.bodySmall
  caption: typeof Typography.caption
}

const typedTypography = Typography as unknown as TypographyMap

type TextProps = {
  ref?: React.RefObject<HTMLHeadingElement | HTMLParagraphElement | null>
  variant: keyof typeof Typography
  weight?: 'bold' | 'semibold'
  className?: string
  children: ReactNode
}
export function Text({ ref, variant, weight, className, children }: TextProps) {
  const Comp = typedTypography[variant]

  return (
    <Comp ref={ref} $weight={weight} className={className}>
      {children}
    </Comp>
  )
}
