import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-split-button';

const meta = {
  title: 'Molecules/SplitButton',
  tags: ['autodocs'],
  render: (args) => html`
    <baps-split-button 
      type="${args.type}"
      size="${args.size}"
      badge="${args.badge}"
      forceState="${args.forceState}"
      ?showIcon="${args.showIcon}">
      Button Text
    </baps-split-button>
  `,
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'disabled-flat', 'disabled-outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    forceState: { control: 'select', options: ['rest', 'hover', 'active'] },
    badge: { control: 'text' },
    showIcon: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { type: 'primary', size: 'lg', badge: '', forceState: 'rest', showIcon: true, showBadge: true },
};

export const UsageExamples: Story = {
  render: () => html`
    <div style="background-color: #f9fafb; padding: 60px; display: flex; justify-content: center; font-family: sans-serif;">
      <div style="background-color: #ffffff; padding: 40px; border-radius: 8px; border: 1px solid #e5e7eb; display: flex; flex-direction: column; gap: 24px; width: fit-content; min-width: 900px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
        
        <h3 style="margin: 0 0 16px 0; color: #111827; font-size: 1.25rem; font-weight: 600;">Usage Examples</h3>

        <!-- Row 1: Primary Default -->
        <div style="display: flex; gap: 24px; align-items: center;">
          <baps-split-button type="primary" size="sm" badge="" forceState="rest">Button Text</baps-split-button>
          <baps-split-button type="primary" size="md" badge="" forceState="rest">Button Text</baps-split-button>
          <baps-split-button type="primary" size="lg" badge="" forceState="rest">Button Text</baps-split-button>
          <baps-split-button type="primary" size="xl" badge="" forceState="rest">Button Text</baps-split-button>
        </div>

        <!-- Row 2: Primary Hover -->
        <div style="display: flex; gap: 24px; align-items: center;">
          <baps-split-button type="primary" size="sm" badge="" forceState="hover">Button Text</baps-split-button>
          <baps-split-button type="primary" size="md" badge="" forceState="hover">Button Text</baps-split-button>
          <baps-split-button type="primary" size="lg" badge="" forceState="hover">Button Text</baps-split-button>
          <baps-split-button type="primary" size="xl" badge="" forceState="hover">Button Text</baps-split-button>
        </div>

        <!-- Row 3: Primary Active -->
        <div style="display: flex; gap: 24px; align-items: center;">
          <baps-split-button type="primary" size="sm" badge="" forceState="active">Button Text</baps-split-button>
          <baps-split-button type="primary" size="md" badge="" forceState="active">Button Text</baps-split-button>
          <baps-split-button type="primary" size="lg" badge="" forceState="active">Button Text</baps-split-button>
          <baps-split-button type="primary" size="xl" badge="" forceState="active">Button Text</baps-split-button>
        </div>

        <!-- Row 4: Secondary Default -->
        <div style="display: flex; gap: 24px; align-items: center;">
          <baps-split-button type="secondary" size="sm" badge="" forceState="rest">Button Text</baps-split-button>
          <baps-split-button type="secondary" size="md" badge="" forceState="rest">Button Text</baps-split-button>
          <baps-split-button type="secondary" size="lg" badge="" forceState="rest">Button Text</baps-split-button>
          <baps-split-button type="secondary" size="xl" badge="" forceState="rest">Button Text</baps-split-button>
        </div>

        <!-- Row 5: Secondary Hover -->
        <div style="display: flex; gap: 24px; align-items: center;">
          <baps-split-button type="secondary" size="sm" badge="" forceState="hover">Button Text</baps-split-button>
          <baps-split-button type="secondary" size="md" badge="" forceState="hover">Button Text</baps-split-button>
          <baps-split-button type="secondary" size="lg" badge="" forceState="hover">Button Text</baps-split-button>
          <baps-split-button type="secondary" size="xl" badge="" forceState="hover">Button Text</baps-split-button>
        </div>

        <!-- Row 6: Secondary Active -->
        <div style="display: flex; gap: 24px; align-items: center;">
          <baps-split-button type="secondary" size="sm" badge="" forceState="active">Button Text</baps-split-button>
          <baps-split-button type="secondary" size="md" badge="" forceState="active">Button Text</baps-split-button>
          <baps-split-button type="secondary" size="lg" badge="" forceState="active">Button Text</baps-split-button>
          <baps-split-button type="secondary" size="xl" badge="" forceState="active">Button Text</baps-split-button>
        </div>

        <!-- Row 7: Disabled Flat -->
        <div style="display: flex; gap: 24px; align-items: center;">
          <baps-split-button type="disabled-flat" size="sm" badge="">Button Text</baps-split-button>
          <baps-split-button type="disabled-flat" size="md" badge="">Button Text</baps-split-button>
          <baps-split-button type="disabled-flat" size="lg" badge="">Button Text</baps-split-button>
          <baps-split-button type="disabled-flat" size="xl" badge="">Button Text</baps-split-button>
        </div>

        <!-- Row 8: Disabled Outline -->
        <div style="display: flex; gap: 24px; align-items: center;">
          <baps-split-button type="disabled-outline" size="sm" badge="">Button Text</baps-split-button>
          <baps-split-button type="disabled-outline" size="md" badge="">Button Text</baps-split-button>
          <baps-split-button type="disabled-outline" size="lg" badge="">Button Text</baps-split-button>
          <baps-split-button type="disabled-outline" size="xl" badge="">Button Text</baps-split-button>
        </div>

      </div>
    </div>
  `
};
