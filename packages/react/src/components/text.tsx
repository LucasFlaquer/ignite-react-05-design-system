import { ElementType, ReactNode } from 'react'
import { styled } from '../styles'
import { ComponentProps } from '@stitches/react'

export const Text = styled('p', {
  margin: 0,
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType,
  children?: ReactNode
}

Text.displayName = 'Text'
