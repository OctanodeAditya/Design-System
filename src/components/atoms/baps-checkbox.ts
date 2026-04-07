import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('baps-checkbox')
export class MyCheckbox extends LitElement {
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
    
    .checkbox-wrapper {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-8);
    }

    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 6px;
      border: 2px solid var(--color-grey-300);
      background-color: var(--color-white);
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    /* Hover */
    .checkbox-wrapper:not(.disabled):hover .box {
      border-color: var(--color-grey-400);
    }

    .box.checked, .box.indeterminated {
      background-color: var(--color-primary-700);
      border-color: var(--color-primary-700);
    }

    .icon-vector {
      fill: var(--color-white);
      width: 14px;
      height: 14px;
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease;
    }

    .box.checked .icon-vector, .box.indeterminated .icon-vector {
      opacity: 1;
      transform: scale(1);
    }

    .label-text {
      color: var(--color-grey-900);
      font-size: var(--font-p-14-size);
      user-select: none;
    }

    /* Disabled State */
    .checkbox-wrapper.disabled .box {
      border-color: var(--color-grey-200);
      background-color: var(--color-grey-100);
    }
    .checkbox-wrapper.disabled .box.checked, .checkbox-wrapper.disabled .box.indeterminated {
      background-color: var(--color-grey-400);
      border-color: var(--color-grey-400);
    }
    .checkbox-wrapper.disabled .label-text {
      color: var(--color-grey-500);
    }
  `;

  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) indeterminated = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) showLabel = true;
  @property({ type: String }) label = 'Checkbox Text';

  private _toggle() {
    if (!this.disabled) {
      if (this.indeterminated) {
        this.indeterminated = false;
        this.checked = true;
      } else {
        this.checked = !this.checked;
      }
      this.dispatchEvent(new CustomEvent('change', { detail: { checked: this.checked, indeterminated: this.indeterminated } }));
    }
  }

  render() {
    // Vectors for Check and Indeterminate (Minus)
    const checkIcon = html`
      <svg class="icon-vector" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    `;
    const minusIcon = html`
      <svg class="icon-vector" viewBox="0 0 24 24">
        <path d="M19 13H5v-2h14v2z"/>
      </svg>
    `;

    return html`
      <div 
        class="checkbox-wrapper ${this.disabled ? 'disabled' : ''}" 
        @click="${this._toggle}"
      >
        <div class="box ${this.checked ? 'checked' : ''} ${this.indeterminated ? 'indeterminated' : ''}">
          ${this.indeterminated ? minusIcon : (this.checked ? checkIcon : '')}
        </div>
        ${this.showLabel ? html`<span class="label-text">${this.label}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-checkbox': MyCheckbox;
  }
}
