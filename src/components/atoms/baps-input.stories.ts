import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-input';

const meta = {
  title: 'Atoms/Input',
  tags: ['autodocs'],
  render: (args) => html`
    <baps-input 
      label="${args.label}"
      topHint="${args.topHint}"
      placeholder="${args.placeholder}"
      prefixStr="${args.prefixStr}"
      suffixStr="${args.suffixStr}"
      state="${args.state}"
      helperText="${args.helperText}"
      ?disabled="${args.disabled}">
      ${args.leadingIcon ? html`<span slot="leading-icon">@</span>` : ''}
    </baps-input>
  `,
  argTypes: {
    label: { control: 'text' },
    topHint: { control: 'text' },
    state: { control: 'select', options: ['default', 'active', 'error'] },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    prefixStr: { control: 'text' },
    suffixStr: { control: 'text' },
    disabled: { control: 'boolean' },
    leadingIcon: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { label: 'Username', topHint: 'Optional', placeholder: 'Enter username...', state: 'default', leadingIcon: true },
};

export const UsageExamples: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 40px; width: 400px; padding: 24px;">
      
      <div>
        <h3 style="margin: 0; color: #111827; margin-bottom: 24px;">Standard States</h3>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <baps-input label="First Name" placeholder="e.g. John" state="default">
          </baps-input>

          <baps-input label="Company Name" topHint="Optional" placeholder="Typing..." value="Acme Inc." state="active">
          </baps-input>

          <baps-input label="Email Address" placeholder="Email" value="invalid-email@" state="error" helperText="Please enter a valid email address.">
          </baps-input>

          <baps-input label="Account ID" placeholder="Cannot edit" value="ID-948274" disabled>
          </baps-input>
        </div>
      </div>
      
      <hr style="border: 1px solid #e5e7eb; width: 100%;" />
      
      <div>
        <h3 style="margin: 0; color: #111827; margin-bottom: 24px;">Prefixes & Suffixes</h3>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <baps-input label="Price" placeholder="0.00" prefixStr="$" suffixStr="USD"></baps-input>
          
          <baps-input label="Website" placeholder="mycompany" prefixStr="https://" suffixStr=".com"></baps-input>
          
          <baps-input label="Weight Metric" topHint="Max 99" placeholder="Enter weight..." suffixStr="kg"></baps-input>
        </div>
      </div>

    </div>
  `
};
