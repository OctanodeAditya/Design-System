import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './tokens.css';

const meta = {
  title: 'Design Tokens/Typography',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const TypographyScale: Story = {
  render: () => html`
    <style>
      .typo-row {
        display: grid;
        grid-template-columns: 150px 1fr 100px 100px;
        align-items: center;
        padding: 24px 0;
        border-bottom: 1px solid var(--color-grey-200);
        font-family: var(--font-family-base);
        color: var(--color-grey-900);
      }
      .label {
        font-size: 14px;
        color: var(--color-grey-500);
      }
      .spec {
        font-size: 14px;
      }
    </style>
    <div style="padding: 40px; max-width: 1000px;">
      <h1 style="font-size: 40px; margin-bottom: 24px; font-family: var(--font-family-base);">Typography</h1>
      <h2 style="font-size: 32px; margin-bottom: 16px; font-family: var(--font-family-base);">Figtree</h2>
      <hr style="border: none; border-bottom: 1px solid var(--color-grey-300); margin-bottom: 24px;" />
      
      <!-- Titles -->
      <div class="typo-row">
        <span class="label">Title - 56</span>
        <span style="font-size: var(--font-title-56-size); line-height: var(--font-title-56-height); font-weight: var(--font-weight-bold);">Eat lift strategies model pollination</span>
        <span class="spec">64</span>
        <span class="spec">Bold</span>
      </div>
      <div class="typo-row">
        <span class="label">Title - 48</span>
        <span style="font-size: var(--font-title-48-size); line-height: var(--font-title-48-height); font-weight: var(--font-weight-bold);">Eat lift strategies model pollination</span>
        <span class="spec">56</span>
        <span class="spec">Bold</span>
      </div>
      <div class="typo-row">
        <span class="label">Title - 36</span>
        <span style="font-size: var(--font-title-36-size); line-height: var(--font-title-36-height); font-weight: var(--font-weight-bold);">Eat lift strategies model pollination</span>
        <span class="spec">48</span>
        <span class="spec">Bold</span>
      </div>

      <!-- Subtitles -->
      <div class="typo-row">
        <span class="label">Subtitle - 32</span>
        <span style="font-size: var(--font-sub-32-size); line-height: var(--font-sub-32-height); font-weight: var(--font-weight-bold);">Eat lift strategies model pollination</span>
        <span class="spec">40</span>
        <span class="spec">Bold</span>
      </div>
      <div class="typo-row">
        <span class="label">Subtitle - 24</span>
        <span style="font-size: var(--font-sub-24-size); line-height: var(--font-sub-24-height); font-weight: var(--font-weight-bold);">Eat lift strategies model pollination</span>
        <span class="spec">32</span>
        <span class="spec">Bold</span>
      </div>
      <div class="typo-row">
        <span class="label">Subtitle - 20</span>
        <span style="font-size: var(--font-sub-20-size); line-height: var(--font-sub-20-height); font-weight: var(--font-weight-bold);">Eat lift strategies model pollination</span>
        <span class="spec">28</span>
        <span class="spec">Bold</span>
      </div>

      <!-- Paragraphs (Regular) -->
      <div class="typo-row">
        <span class="label">Paragraph - 16</span>
        <span style="font-size: var(--font-p-16-size); line-height: var(--font-p-16-height); font-weight: var(--font-weight-regular);">Eat lift strategies model pollination</span>
        <span class="spec">24</span>
        <span class="spec">Regular</span>
      </div>
      <div class="typo-row">
        <span class="label">Paragraph - 14</span>
        <span style="font-size: var(--font-p-14-size); line-height: var(--font-p-14-height); font-weight: var(--font-weight-regular);">Eat lift strategies model pollination</span>
        <span class="spec">20</span>
        <span class="spec">Regular</span>
      </div>
      <div class="typo-row">
        <span class="label">Paragraph - 12</span>
        <span style="font-size: var(--font-p-12-size); line-height: var(--font-p-12-height); font-weight: var(--font-weight-regular);">Eat lift strategies model pollination</span>
        <span class="spec">16</span>
        <span class="spec">Regular</span>
      </div>

      <!-- Paragraphs (SemiBold) -->
      <div class="typo-row">
        <span class="label">Paragraph - 16 - Semibold</span>
        <span style="font-size: var(--font-p-16-size); line-height: var(--font-p-16-height); font-weight: var(--font-weight-semibold);">Eat lift strategies model pollination</span>
        <span class="spec">24</span>
        <span class="spec">SemiBold</span>
      </div>
      <div class="typo-row">
        <span class="label">Paragraph - 14 - Semibold</span>
        <span style="font-size: var(--font-p-14-size); line-height: var(--font-p-14-height); font-weight: var(--font-weight-semibold);">Eat lift strategies model pollination</span>
        <span class="spec">20</span>
        <span class="spec">SemiBold</span>
      </div>
      <div class="typo-row">
        <span class="label">Paragraph - 12 - Semibold</span>
        <span style="font-size: var(--font-p-12-size); line-height: var(--font-p-12-height); font-weight: var(--font-weight-semibold);">Eat lift strategies model pollination</span>
        <span class="spec">16</span>
        <span class="spec">SemiBold</span>
      </div>

    </div>
  `
};
