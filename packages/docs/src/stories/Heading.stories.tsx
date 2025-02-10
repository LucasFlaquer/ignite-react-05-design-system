import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@flaquer-ignite-ui/react'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {

  },
} as Meta<HeadingProps>

export default meta

type Story = StoryObj<HeadingProps>

export const Primary: Story = {}
export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: { story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`' },
    },
  },
}
