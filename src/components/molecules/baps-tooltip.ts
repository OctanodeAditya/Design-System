import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type TooltipPlacement = 
  | 'top-left' | 'top-center' | 'top-right'
  | 'right-top' | 'right-center' | 'right-bottom'
  | 'bottom-left' | 'bottom-center' | 'bottom-right'
  | 'left-top' | 'left-center' | 'left-bottom';

@customElement('baps-tooltip')
export class BapsTooltip extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      font-family: var(--font-family-base, 'Inter', sans-serif);
      pointer-events: none;
    }

    .tooltip-container {
      position: relative;
      background: var(--color-white, #ffffff);
      border-radius: 8px;
      padding: 12px 16px;
      /* Use drop-shadow on the whole container so it includes the after-arrow */
      filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.08)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.04));
      min-width: 200px;
      max-width: 320px;
      z-index: 100;
      pointer-events: auto;
    }
    
    /* Small wrapper to prevent clipping of the drop-shadow */
    .tooltip-container::before {
      content: '';
      position: absolute;
      inset: -20px;
      z-index: -2;
      pointer-events: none;
    }

    /* Arrow Base */
    .tooltip-container::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background: var(--color-white, #ffffff);
      transform: rotate(45deg);
      box-sizing: border-box;
      z-index: -1;
    }

    /* Content Layout */
    .title {
      font-size: 14px;
      font-weight: 600;
      color: var(--color-grey-900);
      margin: 0 0 4px 0;
      line-height: 20px;
    }

    .supporting-text {
      font-size: 12px;
      font-weight: 400;
      color: var(--color-grey-600);
      margin: 0 0 12px 0;
      line-height: 18px;
    }

    .footer {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .learn-more {
      font-size: 14px;
      font-weight: 600;
      color: var(--color-primary-700);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: color 0.2s ease;
    }

    .learn-more:hover {
      color: var(--color-primary-600);
    }

    .arrow-icon {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Placements Logic */
    
    /* Top Row */
    :host([placement^="top"]) .tooltip-container::after {
      bottom: -6px;
    }
    :host([placement="top-left"]) .tooltip-container::after { left: 16px; }
    :host([placement="top-center"]) .tooltip-container::after { left: calc(50% - 6px); }
    :host([placement="top-right"]) .tooltip-container::after { right: 16px; }

    /* Bottom Row */
    :host([placement^="bottom"]) .tooltip-container::after {
      top: -6px;
    }
    :host([placement="bottom-left"]) .tooltip-container::after { left: 16px; }
    :host([placement="bottom-center"]) .tooltip-container::after { left: calc(50% - 6px); }
    :host([placement="bottom-right"]) .tooltip-container::after { right: 16px; }

    /* Left Column */
    :host([placement^="left"]) .tooltip-container::after {
      right: -6px;
    }
    :host([placement="left-top"]) .tooltip-container::after { top: 12px; }
    :host([placement="left-center"]) .tooltip-container::after { top: calc(50% - 6px); }
    :host([placement="left-bottom"]) .tooltip-container::after { bottom: 12px; }

    /* Right Column */
    :host([placement^="right"]) .tooltip-container::after {
      left: -6px;
    }
    :host([placement="right-top"]) .tooltip-container::after { top: 12px; }
    :host([placement="right-center"]) .tooltip-container::after { top: calc(50% - 6px); }
    :host([placement="right-bottom"]) .tooltip-container::after { bottom: 12px; }
  `;

  @property({ type: String }) title = "I'm Tooltip Title";
  @property({ type: String, attribute: 'supporting-text' }) supportingText = "I'm Supporting Text";
  @property({ type: String, attribute: 'link-text' }) linkText = "Learn more";
  @property({ type: String, attribute: 'link-href' }) linkHref = "#";
  @property({ type: String }) placement: TooltipPlacement = 'top-center';

  render() {
    return html`
      <div class="tooltip-container" role="tooltip">
        <h3 class="title">${this.title}</h3>
        <p class="supporting-text">${this.supportingText}</p>
        ${this.linkText ? html`
          <div class="footer">
            <a href="${this.linkHref}" class="learn-more">
              ${this.linkText} |
              <svg class="arrow-icon" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-tooltip': BapsTooltip;
  }
}
