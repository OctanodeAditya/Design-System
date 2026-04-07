import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './baps-tooltip.ts';

const meta: Meta = {
  title: 'Molecules/Tooltip',
  component: 'baps-tooltip',
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top-left', 'top-center', 'top-right',
        'right-top', 'right-center', 'right-bottom',
        'bottom-left', 'bottom-center', 'bottom-right',
        'left-top', 'left-center', 'left-bottom'
      ],
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    title: "I'm Tooltip Title",
    supportingText: "I'm Supporting Text",
    linkText: "Learn more",
    linkHref: "#",
    placement: 'top-center',
  },
};

export const AllPlacements: StoryObj = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; padding: 40px; background: #f9fafb;">
      <baps-tooltip placement="top-left"></baps-tooltip>
      <baps-tooltip placement="top-center"></baps-tooltip>
      <baps-tooltip placement="top-right"></baps-tooltip>
      
      <baps-tooltip placement="bottom-left"></baps-tooltip>
      <baps-tooltip placement="bottom-center"></baps-tooltip>
      <baps-tooltip placement="bottom-right"></baps-tooltip>
      
      <baps-tooltip placement="left-top"></baps-tooltip>
      <baps-tooltip placement="left-center"></baps-tooltip>
      <baps-tooltip placement="left-bottom"></baps-tooltip>
      
      <baps-tooltip placement="right-top"></baps-tooltip>
      <baps-tooltip placement="right-center"></baps-tooltip>
      <baps-tooltip placement="right-bottom"></baps-tooltip>
    </div>
  `,
};

export const CustomContent: StoryObj = {
  args: {
    title: "Project Status",
    supportingText: "This design system is currently under active development and verification.",
    linkText: "View Documentation",
    linkHref: "https://few-shrimps-argue.loca.lt",
    placement: 'top-center',
  },
};
