import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-header';
import '../atoms/baps-button';

const meta = {
  title: 'Organisms/Header',
  tags: ['autodocs'],
  render: (args) => html`
    <baps-header title="${args.title}">
      <baps-button variant="primary" slot="actions">Login</baps-button>
    </baps-header>
  `,
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'mySatsang Mobile',
  },
};
