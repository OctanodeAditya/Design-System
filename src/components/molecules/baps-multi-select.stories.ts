import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-multi-select.ts';

const meta: Meta = {
  title: 'Molecules/MultiSelect',
  component: 'baps-multi-select',
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

const multiOptions = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Lit', value: 'lit' },
  { label: 'Solid', value: 'solid' },
];

export const Default: Story = {
  args: {
    label: 'Frameworks',
    placeholder: 'Choose your stacks...',
    options: multiOptions,
    selectedValues: [],
    helperText: 'Select multiple frameworks',
    state: 'default',
    disabled: false,
  },
};

export const Preselected: Story = {
  args: {
    label: 'Popular Choices',
    options: multiOptions,
    selectedValues: ['react', 'lit'],
  },
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 40px; max-width: 500px; padding: 20px;">
      
      <div>
        <h4 style="margin-bottom: 12px; color: #64748B;">Error State</h4>
        <baps-multi-select 
          label="Selection Required" 
          state="error"
          helperText="Please select at least one framework"
          .options="${multiOptions}"
          .selectedValues="${[]}">
        </baps-multi-select>
      </div>

      <div>
        <h4 style="margin-bottom: 12px; color: #64748B;">Disabled State</h4>
        <baps-multi-select 
          label="Locked Configuration" 
          disabled
          .options="${multiOptions}"
          .selectedValues="${['react', 'vue']}">
        </baps-multi-select>
      </div>

      <div>
        <h4 style="margin-bottom: 12px; color: #64748B;">Many Selected (Wrapping)</h4>
        <baps-multi-select 
          label="Full Stack" 
          .options="${multiOptions}"
          .selectedValues="${['react', 'vue', 'angular', 'svelte', 'lit', 'solid']}">
        </baps-multi-select>
      </div>

    </div>
  `,
};
