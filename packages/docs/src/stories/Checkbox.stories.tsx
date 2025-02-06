import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: 2 }}
        >
          {story()}
          <Text size="sm">Accept therms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export default meta

type Story = StoryObj<CheckboxProps>

export const Primary: Story = {
  args: {

  },
}
