import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-button';

const meta = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  render: (args) => html`
    <baps-button type="${args.type}" size="${args.size}" ?disabled="${args.disabled}">
      ${args.leadingIcon ? html`<span slot="leading-icon">✦</span>` : ''}
      ${args.label}
      ${args.trailingIcon ? html`<span slot="trailing-icon">✦</span>` : ''}
    </baps-button>
  `,
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'select', options: ['large', 'small'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    leadingIcon: { control: 'boolean' },
    trailingIcon: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { type: 'primary', size: 'large', label: 'Submit', disabled: false },
};

export const UsageExamples: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      
      <div>
        <h3>Primary</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
          <baps-button type="primary" size="large">Large</baps-button>
          <baps-button type="primary" size="small">Small</baps-button>
          <baps-button type="primary" size="large"><span slot="leading-icon">✦</span> With Icon</baps-button>
          <baps-button type="primary" size="large" disabled>Disabled</baps-button>
        </div>
      </div>

      <div>
        <h3>Secondary</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
          <baps-button type="secondary" size="large">Large</baps-button>
          <baps-button type="secondary" size="small">Small</baps-button>
          <baps-button type="secondary" size="large">With Icon <span slot="trailing-icon">✦</span></baps-button>
          <baps-button type="secondary" size="large" disabled>Disabled</baps-button>
        </div>
      </div>

      <div>
        <h3>Tertiary</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
          <baps-button type="tertiary" size="large">Large</baps-button>
          <baps-button type="tertiary" size="small">Small</baps-button>
          <baps-button type="tertiary" size="small"><span slot="leading-icon">✦</span>Icon</baps-button>
          <baps-button type="tertiary" size="large" disabled>Disabled</baps-button>
        </div>
      </div>

    </div>
  `
};
