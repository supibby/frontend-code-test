import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { ComponentProps } from 'react'

type StoryProps = ComponentProps<typeof Button>

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'primary-outline',
          'secondary-outline',
        ],
      },
    },
    icon: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Button',
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const WithIcon: Story = {
  args: {
    icon: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
