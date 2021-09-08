import { Button } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Button Primary',
  component: Button,
  args: {
    text: "Enviar"
  },
  argTypes:{
    backgroundColor: {control: 'color'}
  }
} as Meta

export const Basic: Story = (args) => <Button {...args}>{args.text}</Button>
