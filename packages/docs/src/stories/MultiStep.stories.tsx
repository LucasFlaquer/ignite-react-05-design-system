import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@flaquer-ignite-ui/react'

const meta = {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          {story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export default meta

type Story = StoryObj<MultiStepProps>

export const Primary: Story = {
  args: {},
}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
