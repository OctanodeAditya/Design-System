import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('baps-avatar')
export class MyAvatar extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--font-family-base);
    }
    .avatar-wrapper {
      position: relative;
      display: inline-flex;
    }
    .avatar-box {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: 1px solid transparent;
      overflow: hidden;
      /* Dynamic rounded corners roughly 25% of height based on image */
      border-radius: 25%; 
    }

    /* Sizes */
    .size-xs { width: 24px; height: 24px; font-size: 10px; border-radius: 6px; }
    .size-sm { width: 32px; height: 32px; font-size: 12px; border-radius: 8px; }
    .size-md { width: 40px; height: 40px; font-size: 14px; border-radius: 10px; }
    .size-lg { width: 48px; height: 48px; font-size: 16px; border-radius: 12px; }
    .size-xl { width: 56px; height: 56px; font-size: 20px; border-radius: 14px; }
    .size-2xl { width: 64px; height: 64px; font-size: 24px; border-radius: 16px; }

    /* Variants */
    .variant-neutral {
      background-color: var(--color-white);
      border-color: var(--color-grey-300);
      color: var(--color-grey-700);
    }
    .variant-primary {
      background-color: var(--color-red-100);
      border-color: #B91C1C;
      color: #7F1D1D;
    }
    .variant-success {
      background-color: var(--color-green-100);
      border-color: var(--color-green-500);
      color: var(--color-green-900);
    }

    /* Image */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Icon svg sizing */
    svg.icon {
      width: 60%;
      height: 60%;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.5;
    }

    /* Decorators shared */
    .decorator {
      position: absolute;
      border-radius: 50%;
      box-sizing: border-box;
      /* The outer border creates the cutout effect */
      border: 2px solid var(--color-white);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }

    /* Top Right Status Dot */
    .status-online {
      background-color: var(--color-green-500);
      top: -2%;
      right: -2%;
    }
    .size-xs .status-online { width: 8px; height: 8px; border-width: 1.5px; }
    .size-sm .status-online { width: 10px; height: 10px; }
    .size-md .status-online { width: 12px; height: 12px; }
    .size-lg .status-online { width: 14px; height: 14px; }
    .size-xl .status-online { width: 16px; height: 16px; }
    .size-2xl .status-online { width: 18px; height: 18px; }

    /* Bottom Right Badge */
    .badge-crown {
      background-color: var(--color-blue-500);
      bottom: -4%;
      right: -4%;
    }
    .badge-crown svg {
      fill: var(--color-white);
      width: 60%;
      height: 60%;
    }
    .size-xs .badge-crown { width: 12px; height: 12px; border-width: 1.5px; }
    .size-sm .badge-crown { width: 14px; height: 14px; }
    .size-md .badge-crown { width: 16px; height: 16px; }
    .size-lg .badge-crown { width: 20px; height: 20px; }
    .size-xl .badge-crown { width: 24px; height: 24px; }
    .size-2xl .badge-crown { width: 28px; height: 28px; }
  `;

  @property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';
  @property({ type: String }) variant: 'neutral' | 'primary' | 'success' = 'neutral';
  @property({ type: String }) initials = '';
  @property({ type: String }) imageSrc = '';
  @property({ type: Boolean }) showIcon = false;
  @property({ type: Boolean }) online = false;
  @property({ type: Boolean }) badge = false;

  render() {
    const boxClasses = {
      [`size-${this.size}`]: true,
      [`variant-${this.variant}`]: true
    };

    const envelopeIcon = html`
      <svg class="icon" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    `;

    const crownIcon = html`
      <svg viewBox="0 0 24 24">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
      </svg>
    `;

    return html`
      <div class="avatar-wrapper size-${this.size}">
        <div class="avatar-box ${classMap(boxClasses)}">
          ${this.imageSrc ? html`<img src="${this.imageSrc}" alt="Avatar"/>` : 
            this.showIcon ? envelopeIcon : 
            this.initials}
        </div>
        ${this.online ? html`<div class="decorator status-online"></div>` : ''}
        ${this.badge ? html`<div class="decorator badge-crown">${crownIcon}</div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-avatar': MyAvatar;
  }
}
