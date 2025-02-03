import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

const meta = {
  title: 'Typography/Text',
  component: Text,
  args: {
    // eslint-disable-next-line @stylistic/max-len
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolores tempora maxime? Voluptas totam distinctio corporis fugiat cumque eum minima.',
  },
} as Meta<TextProps>

export default meta

type Story = StoryObj<TextProps>

export const Primary: Story = {}
export const CustomTag: Story = {
  args: {
    as: 'strong',
  },
}
