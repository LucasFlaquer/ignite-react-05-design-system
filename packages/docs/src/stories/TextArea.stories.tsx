import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

const meta = {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Text size="sm">Observations</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export default meta

type Story = StoryObj<TextAreaProps>

export const Primary: Story = {
  args: {
    placeholder: 'Add any observations',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
