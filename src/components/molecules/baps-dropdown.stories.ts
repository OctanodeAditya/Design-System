import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-dropdown.ts';

const meta: Meta = {
  title: 'Molecules/Dropdown',
  component: 'baps-dropdown',
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'error'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

const defaultOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
];

export const Default: Story = {
  args: {
    label: 'Single Select',
    placeholder: 'Choose one...',
    options: defaultOptions,
    helperText: 'This is a helper text',
    state: 'default',
    disabled: false,
  },
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 40px; max-width: 400px; padding: 20px;">
      
      <div>
        <h4 style="margin-bottom: 12px; color: #64748B;">Rest / Default</h4>
        <baps-dropdown 
          label="Country" 
          placeholder="Select country"
          .options="${[
            { label: 'India', value: 'in' },
            { label: 'USA', value: 'us' },
            { label: 'UK', value: 'uk' }
          ]}">
        </baps-dropdown>
      </div>

      <div>
        <h4 style="margin-bottom: 12px; color: #64748B;">Error State</h4>
        <baps-dropdown 
          label="Email Preference" 
          state="error"
          helperText="Please select a preference"
          .options="${[
            { label: 'Daily', value: 'daily' },
            { label: 'Weekly', value: 'weekly' }
          ]}">
        </baps-dropdown>
      </div>

      <div>
        <h4 style="margin-bottom: 12px; color: #64748B;">Disabled</h4>
        <baps-dropdown 
          label="Locked Setting" 
          disabled
          value="locked"
          .options="${[{ label: 'Admin Only', value: 'locked' }]}">
        </baps-dropdown>
      </div>

    </div>
  `,
};

export const Preselected: Story = {
  args: {
    label: 'Pre-selected',
    options: defaultOptions,
    value: '2',
  },
};
