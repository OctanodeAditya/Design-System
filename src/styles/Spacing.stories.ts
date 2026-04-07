import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './tokens.css';

const meta = {
  title: 'Design Tokens/Spacing',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SpacingScale: Story = {
  render: () => html`
    <style>
      .spacing-row {
        display: flex;
        align-items: center;
        gap: 32px;
        padding: 16px 0;
        font-family: var(--font-family-base);
      }
      .label {
        width: 60px;
        font-weight: var(--font-weight-bold);
        font-size: var(--font-p-16-size);
        color: var(--color-grey-900);
      }
      .bar {
        background-color: var(--color-grey-700);
        height: 24px;
        border-radius: 4px;
      }
    </style>
    <div style="padding: 40px; max-width: 800px;">
      <h1 style="font-size: 40px; margin-bottom: 24px; font-family: var(--font-family-base);">Grids and layout</h1>
      
      <div style="display: flex; gap: 80px; margin-top: 40px;">
        <div style="flex: 1;">
          <h2 style="font-size: 28px; margin-bottom: 16px; font-family: var(--font-family-base);">Spacing</h2>
          <p style="font-size: var(--font-p-16-size); line-height: var(--font-p-16-height); color: var(--color-grey-600);">
            Use a base unit of 4 pts or 4 px for all sizing and spacing. Even distribution and pixel counts avoid splitting pixels, which can result in off-center spacing.
          </p>
          <br/>
          <p style="font-size: var(--font-p-16-size); line-height: var(--font-p-16-height); color: var(--color-grey-600);">
            The grids are available as part of the design system. Turn on grids to see the example.
          </p>
        </div>

        <div style="flex: 1;">
          <h3 style="font-size: 20px; margin-bottom: 24px; font-family: var(--font-family-base);">4pt Grid System</h3>
          <div style="color: var(--color-grey-500); font-size: var(--font-p-14-size); margin-bottom: 16px;">Size</div>
          
          <div class="spacing-row">
            <span class="label">4px</span>
            <div class="bar" style="width: var(--spacing-4);"></div>
          </div>
          <div class="spacing-row">
            <span class="label">8px</span>
            <div class="bar" style="width: var(--spacing-8);"></div>
          </div>
          <div class="spacing-row">
            <span class="label">12px</span>
            <div class="bar" style="width: var(--spacing-12);"></div>
          </div>
          <div class="spacing-row">
            <span class="label">16px</span>
            <div class="bar" style="width: var(--spacing-16);"></div>
          </div>
          <div class="spacing-row">
            <span class="label">20px</span>
            <div class="bar" style="width: var(--spacing-20);"></div>
          </div>
          <div class="spacing-row">
            <span class="label">24px</span>
            <div class="bar" style="width: var(--spacing-24);"></div>
          </div>
          <div class="spacing-row">
            <span class="label">32px</span>
            <div class="bar" style="width: var(--spacing-32);"></div>
          </div>
          <div class="spacing-row">
            <span class="label">40px</span>
            <div class="bar" style="width: var(--spacing-40);"></div>
          </div>

        </div>
      </div>
    </div>
  `
};
