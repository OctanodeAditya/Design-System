import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-avatar';

const meta = {
  title: 'Atoms/Avatar',
  tags: ['autodocs'],
  render: (args) => html`
    <baps-avatar 
      size="${args.size}"
      variant="${args.variant}"
      initials="${args.initials}"
      imageSrc="${args.imageSrc}"
      ?showIcon="${args.showIcon}"
      ?online="${args.online}"
      ?badge="${args.badge}">
    </baps-avatar>
  `,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    variant: { control: 'select', options: ['neutral', 'primary', 'success'] },
    initials: { control: 'text' },
    imageSrc: { control: 'text' },
    showIcon: { control: 'boolean' },
    online: { control: 'boolean' },
    badge: { control: 'boolean' },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const TextAvatar: Story = {
  args: { size: 'lg', variant: 'neutral', initials: 'GP', badge: true, online: true },
};

export const IconAvatar: Story = {
  args: { size: 'lg', variant: 'success', showIcon: true, badge: false, online: false },
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: flex-end;">
      <baps-avatar size="xs" variant="primary" initials="GP" online badge></baps-avatar>
      <baps-avatar size="sm" variant="primary" initials="GP" online badge></baps-avatar>
      <baps-avatar size="md" variant="primary" initials="GP" online badge></baps-avatar>
      <baps-avatar size="lg" variant="primary" initials="GP" online badge></baps-avatar>
      <baps-avatar size="xl" variant="primary" initials="GP" online badge></baps-avatar>
      <baps-avatar size="2xl" variant="primary" initials="GP" online badge></baps-avatar>
    </div>
  `,
};
