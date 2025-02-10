import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react'

const meta = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Cancel: Story = {
  args: {
    variant: 'tertiary',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
