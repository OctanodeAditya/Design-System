import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Styles/Color Palette',
  render: () => {
    const renderScale = (name: string, prefix: string, levels: number[]) => html`
      <div style="margin-bottom: 40px;">
        <h3 style="margin-bottom: 16px; text-transform: capitalize; color: #1e293b;">${name}</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
          ${levels.map(level => {
            const token = `--color-${prefix}-${level}`;
            return html`
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="height: 64px; border-radius: 8px; background-color: var(${token}); border: 1px solid #e2e8f0; box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.05);"></div>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 12px; font-weight: 600; color: #334155;">${prefix}-${level}</span>
                  <span style="font-size: 10px; color: #64748b; font-family: monospace;">var(${token})</span>
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    `;

    return html`
      <div style="padding: 40px; font-family: sans-serif;">
        <h1 style="margin-bottom: 8px; color: #0f172a;">Color Palette</h1>
        <p style="margin-bottom: 48px; color: #64748b;">Global design tokens for the BAPS (Satsang Mobile) design system.</p>

        ${renderScale('Greys (Slate)', 'grey', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900])}
        ${renderScale('Brand Primary (Red)', 'red', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900])}
        ${renderScale('Success (Green)', 'green', [100, 500, 700, 900])}
        ${renderScale('Info (Blue)', 'blue', [100, 500, 700, 900])}
        ${renderScale('Warning (Yellow)', 'yellow', [100, 500, 900])}

        <div style="margin-top: 60px; padding: 32px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
          <h3 style="margin-top: 0; color: #0f172a;">Interactive State Mapping</h3>
          <p style="font-size: 14px; color: #475569; margin-bottom: 24px;">Recommended levels for component states across the system:</p>
          <div style="display: flex; gap: 40px;">
            <div style="display: flex; items-center; gap: 12px;">
              <div style="width: 24px; height: 24px; border-radius: 4px; background-color: var(--color-primary-700);"></div>
              <span style="font-size: 14px;"><strong>Rest:</strong> Level 700</span>
            </div>
            <div style="display: flex; items-center; gap: 12px;">
              <div style="width: 24px; height: 24px; border-radius: 4px; background-color: var(--color-primary-600);"></div>
              <span style="font-size: 14px;"><strong>Hover:</strong> Level 600</span>
            </div>
            <div style="display: flex; items-center; gap: 12px;">
              <div style="width: 24px; height: 24px; border-radius: 4px; background-color: var(--color-primary-800);"></div>
              <span style="font-size: 14px;"><strong>Active:</strong> Level 800</span>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

export default meta;
export const Palette: StoryObj = {};
