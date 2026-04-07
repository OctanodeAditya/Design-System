import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('baps-button')
export class MyButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-8);
      font-family: var(--font-family-base);
      font-weight: var(--font-weight-semibold);
      border-radius: var(--border-radius-base);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;
    }

    /* Sizes */
    .size-large {
      height: 48px;
      padding: 0 var(--spacing-24);
      font-size: var(--font-p-16-size);
    }
    .size-small {
      height: 32px;
      padding: 0 var(--spacing-16);
      font-size: var(--font-p-14-size);
    }

    /* Types */
    .type-primary {
      background-color: var(--color-primary-700);
      color: var(--color-white);
      border: 1px solid var(--color-primary-700);
    }
    .type-primary:hover:not(:disabled) {
      background-color: var(--color-primary-600);
      border-color: var(--color-primary-600);
    }
    .type-primary:active:not(:disabled) {
      background-color: var(--color-primary-800);
      border-color: var(--color-primary-800);
    }

    .type-secondary {
      background-color: transparent;
      color: var(--color-grey-900);
      border: 1px solid var(--color-grey-300);
    }
    .type-secondary:hover:not(:disabled) {
      background-color: var(--color-grey-100);
      border-color: var(--color-grey-400);
    }
    .type-secondary:active:not(:disabled) {
      background-color: var(--color-grey-200);
    }

    .type-tertiary {
      background-color: transparent;
      color: var(--color-grey-900);
      border: 1px solid transparent;
    }
    .type-tertiary:hover:not(:disabled) {
      background-color: var(--color-grey-100);
    }
    .type-tertiary:active:not(:disabled) {
      background-color: var(--color-grey-200);
    }

    /* Disabled */
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  @property({ type: String }) type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @property({ type: String }) size: 'large' | 'small' = 'large';
  @property({ type: Boolean }) disabled = false;

  render() {
    const classes = {
      'type-primary': this.type === 'primary',
      'type-secondary': this.type === 'secondary',
      'type-tertiary': this.type === 'tertiary',
      'size-large': this.size === 'large',
      'size-small': this.size === 'small',
    };

    return html`
      <button class="${classMap(classes)}" ?disabled="${this.disabled}">
        <slot name="leading-icon"></slot>
        <slot></slot>
        <slot name="trailing-icon"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-button': MyButton;
  }
}
