import { User } from '@phosphor-icons/react'
import { AvatarFallback, AvatarImage, Container } from './styles'
import { ComponentProps } from 'react'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <Container>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </Container>
  )
}
