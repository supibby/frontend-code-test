import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'
import { ComponentProps } from 'react'
import { CheckIcon } from '../../assets/icons/checkIcon'

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
    icon: {
      control: 'select',
      options: ['none', 'check'],
      mapping: {
        none: undefined,
        check: CheckIcon,
      },
    },
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
    onClick: () => {
      console.log('hi')
      action('button-click')('Custom click handler: hi')
    },
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const WithIcon: Story = {
  args: {
    icon: 'check',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
