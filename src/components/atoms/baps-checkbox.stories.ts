import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-checkbox';

const meta = {
  title: 'Atoms/Checkbox',
  tags: ['autodocs'],
  render: (args) => html`
    <baps-checkbox 
      ?checked="${args.checked}"
      ?indeterminated="${args.indeterminated}"
      ?disabled="${args.disabled}"
      ?showLabel="${args.showLabel}"
      label="${args.label}">
    </baps-checkbox>
  `,
  argTypes: {
    checked: { control: 'boolean' },
    indeterminated: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { checked: false, indeterminated: false, disabled: false, showLabel: true, label: 'Subscribe' },
};

export const UsageExamples: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      
      <div>
        <h3>Rest State</h3>
        <div style="display: flex; gap: 24px;">
          <baps-checkbox checked label="Checked"></baps-checkbox>
          <baps-checkbox label="Unchecked"></baps-checkbox>
          <baps-checkbox indeterminated label="Indeterminate"></baps-checkbox>
        </div>
      </div>

      <div>
        <h3>Disabled State</h3>
        <div style="display: flex; gap: 24px;">
          <baps-checkbox checked disabled label="Checked"></baps-checkbox>
          <baps-checkbox disabled label="Unchecked"></baps-checkbox>
          <baps-checkbox indeterminated disabled label="Indeterminate"></baps-checkbox>
        </div>
      </div>

    </div>
  `
};
