import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('baps-radio')
export class MyRadio extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      font-family: var(--font-family-base);
      cursor: pointer;
    }
    :host([disabled]) {
      cursor: not-allowed;
    }
    
    .radio-wrapper {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-8);
    }

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid var(--color-grey-300);
      background-color: var(--color-white);
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    .circle.checked {
      border-color: var(--color-grey-900);
    }
    
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--color-grey-900);
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease;
    }

    .circle.checked .dot {
      opacity: 1;
      transform: scale(1);
    }

    .label-text {
      color: var(--color-grey-900);
      font-size: var(--font-p-14-size);
      user-select: none;
    }

    /* Disabled State */
    .radio-wrapper.disabled .circle {
      border-color: var(--color-grey-200);
      background-color: var(--color-grey-100);
    }
    .radio-wrapper.disabled .circle.checked {
      border-color: var(--color-grey-300);
    }
    .radio-wrapper.disabled .dot {
      background-color: var(--color-grey-300);
    }
    .radio-wrapper.disabled .label-text {
      color: var(--color-grey-300);
    }
  `;

  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) showLabel = true;
  @property({ type: String }) label = 'Radio Text';

  private _toggle() {
    if (!this.disabled) {
      this.checked = true;
      this.dispatchEvent(new CustomEvent('change', { detail: { checked: this.checked } }));
    }
  }

  render() {
    return html`
      <div 
        class="radio-wrapper ${this.disabled ? 'disabled' : ''}" 
        @click="${this._toggle}"
      >
        <div class="circle ${this.checked ? 'checked' : ''}">
          <div class="dot"></div>
        </div>
        ${this.showLabel ? html`<span class="label-text">${this.label}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-radio': MyRadio;
  }
}
