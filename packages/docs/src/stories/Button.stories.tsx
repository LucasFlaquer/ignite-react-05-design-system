import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@flaquer-ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react'

const meta = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
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
