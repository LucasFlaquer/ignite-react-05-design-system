import { Container, Label, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <Container>
      <Label>Passo {currentStep} de {size}</Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map(step => (
          <Step key={step} active={step <= currentStep} />
        ))}
      </Steps>
    </Container>
  )
}

MultiStep.displayName = 'MultiStep'
