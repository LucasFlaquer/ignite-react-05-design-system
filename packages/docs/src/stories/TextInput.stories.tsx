import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

const meta = {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Text size="sm">Username</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export default meta

type Story = StoryObj<TextInputProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type your name',
  },
}
export const WithPrefix: Story = {
  args: {
    prefix: 'call.com/',

  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
