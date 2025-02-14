import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@flaquer-ignite-ui/react'

const meta = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/lucasflaquer.png',
    alt: 'Lucas Flaquer',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export default meta

type Story = StoryObj<AvatarProps>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
