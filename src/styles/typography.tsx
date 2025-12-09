import type { ReactNode } from 'react'
import styled, { type DefaultTheme } from 'styled-components'

const Typography = {
  h1: styled.h1<{ weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme, weight }) => theme.fontWeight[weight ?? 'bold']};
    line-height: ${({ theme }) => theme.lineHeight.base};
  `,
  h2: styled.h2<{ weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme, weight }) => theme.fontWeight[weight ?? 'bold']};
    line-height: ${({ theme }) => theme.lineHeight.base};
  `,
  h3: styled.h3<{ weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme, weight }) => theme.fontWeight[weight ?? 'bold']};
    line-height: ${({ theme }) => theme.lineHeight.base};
  `,
  bodyLarge: styled.p<{ weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme, weight }) => theme.fontWeight[weight ?? 'regular']};
    line-height: ${({ theme }) => theme.lineHeight.lg};
  `,
  bodySmall: styled.p<{ weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme, weight }) => theme.fontWeight[weight ?? 'regular']};
    line-height: ${({ theme }) => theme.lineHeight.lg};
  `,
  caption: styled.p<{ weight?: keyof DefaultTheme['fontWeight'] }>`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme, weight }) => theme.fontWeight[weight ?? 'regular']};
    line-height: ${({ theme }) => theme.lineHeight.lg};
  `,
} as const

type TypographyComponent = React.ElementType<{
  children: React.ReactNode
  weight?: 'bold' | 'semibold'
}>

type TextProps = {
  variant: keyof typeof Typography
  weight?: 'bold' | 'semibold'
  children: ReactNode
}
export function Text({ variant, weight, children }: TextProps) {
  const Comp: TypographyComponent = Typography[variant]

  return <Comp weight={weight}>{children}</Comp>
}
