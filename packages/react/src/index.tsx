import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$lg',
})

export function App() {
  return (
    <Button>Hello World</Button>
  )
}
