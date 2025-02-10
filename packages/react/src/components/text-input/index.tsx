import { Container, Input, Prefix } from './styles'
import { InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <Container>
      {!!prefix && (<Prefix>{prefix}</Prefix>)}
      <Input {...props} />
    </Container>
  )
}

TextInput.displayName = 'TextInput'
