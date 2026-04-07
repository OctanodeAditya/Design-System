import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-radio';

const meta = {
  title: 'Atoms/Radio',
  tags: ['autodocs'],
  render: (args) => html`
    <baps-radio 
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      ?showLabel="${args.showLabel}"
      label="${args.label}">
    </baps-radio>
  `,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { checked: false, disabled: false, showLabel: true, label: 'Option 1' },
};

export const UsageExamples: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      
      <div>
        <h3>Rest State</h3>
        <div style="display: flex; gap: 24px;">
          <baps-radio checked label="Checked"></baps-radio>
          <baps-radio label="Unchecked"></baps-radio>
          <baps-radio showLabel="false"></baps-radio>
        </div>
      </div>

      <div>
        <h3>Disabled State</h3>
        <div style="display: flex; gap: 24px;">
          <baps-radio checked disabled label="Checked"></baps-radio>
          <baps-radio disabled label="Unchecked"></baps-radio>
          <baps-radio disabled showLabel="false"></baps-radio>
        </div>
      </div>

    </div>
  `
};
