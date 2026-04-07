import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-card';

const meta = {
  title: 'Molecules/Card',
  tags: ['autodocs'],
  render: () => html`
    <baps-card>
      <h3 style="margin-top: 0;">Card Title</h3>
      <p style="color: var(--color-text-muted); font-size: 14px;">
        This is a simple card molecule utilizing global spacing and border-radius tokens.
      </p>
    </baps-card>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
