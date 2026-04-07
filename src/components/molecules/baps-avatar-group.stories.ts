import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-avatar-group';
import '../atoms/baps-avatar';

const meta = {
  title: 'Molecules/AvatarGroup',
  tags: ['autodocs'],
  render: () => html`
    <baps-avatar-group>
      <baps-avatar size="md" variant="primary" initials="RW"></baps-avatar>
      <baps-avatar size="md" variant="primary" initials="SP"></baps-avatar>
      <baps-avatar size="md" variant="primary" initials="DG"></baps-avatar>
      <baps-avatar size="md" variant="primary" initials="GD"></baps-avatar>
      <baps-avatar size="md" variant="primary" initials="+2"></baps-avatar>
    </baps-avatar-group>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const MixedScale: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <baps-avatar-group>
        <baps-avatar size="sm" variant="success" initials="RW"></baps-avatar>
        <baps-avatar size="sm" variant="success" initials="SP"></baps-avatar>
        <baps-avatar size="sm" variant="neutral" initials="+2"></baps-avatar>
      </baps-avatar-group>

      <baps-avatar-group>
        <baps-avatar size="lg" variant="neutral" initials="RW" online></baps-avatar>
        <baps-avatar size="lg" variant="primary" initials="SP"></baps-avatar>
        <baps-avatar size="lg" variant="success" initials="DG" online></baps-avatar>
        <baps-avatar size="lg" variant="neutral" initials="+2"></baps-avatar>
      </baps-avatar-group>
    </div>
  `
};
