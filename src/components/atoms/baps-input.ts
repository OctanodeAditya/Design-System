import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('baps-input')
export class MyInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--font-family-base);
      text-align: left;
    }
    
    .field-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-4);
      width: 100%;
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: var(--spacing-4);
    }

    label {
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-p-14-size);
      color: var(--color-grey-900);
    }

    .top-hint {
      font-size: var(--font-p-12-size);
      color: var(--color-grey-500);
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: stretch;
      width: 100%;
      height: 48px;
      box-sizing: border-box;
      border-radius: var(--border-radius-base);
      border: 1px solid var(--color-grey-300);
      background-color: var(--color-white);
      transition: all 0.2s ease-in-out;
      overflow: hidden;
    }
    
    /* States */
    .input-wrapper.state-active {
      border-color: var(--color-primary-700);
      box-shadow: 0 0 0 1px var(--color-primary-700);
    }
    .input-wrapper.state-error {
      border-color: var(--color-red-500) !important;
    }
    .input-wrapper.disabled {
      background-color: var(--color-grey-100);
      cursor: not-allowed;
    }

    input {
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
      border: none;
      background: transparent;
      color: var(--color-grey-900);
      padding: 0 var(--spacing-16);
      font-family: var(--font-family-base);
      font-size: var(--font-p-16-size);
      outline: none;
    }
    input::placeholder {
      color: var(--color-grey-400);
    }
    input:disabled {
      color: var(--color-grey-400);
      cursor: not-allowed;
    }

    .addon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 var(--spacing-16);
      background-color: var(--color-grey-100);
      color: var(--color-grey-600);
      font-size: var(--font-p-14-size);
      user-select: none;
    }
    
    .addon.prefix {
      border-right: 1px solid var(--color-grey-300);
    }
    .addon.suffix {
      border-left: 1px solid var(--color-grey-300);
    }

    .leading-slot {
      display: flex;
      align-items: center;
      padding-left: var(--spacing-16);
      color: var(--color-grey-500);
    }
    .has-leading {
      padding-left: var(--spacing-8);
    }

    /* Helper & Error bottom notes */
    .helper-text {
      display: flex;
      align-items: center;
      gap: var(--spacing-4);
      margin-top: var(--spacing-4);
      font-size: var(--font-p-12-size);
      color: var(--color-grey-500);
      line-height: var(--font-p-12-height);
    }
    .helper-text.error {
      color: var(--color-red-500);
    }
    .helper-text svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
    }
  `;

  @property({ type: String }) label = '';
  @property({ type: String }) topHint = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) value = '';
  @property({ type: String }) state: 'default' | 'active' | 'error' = 'default';
  @property({ type: String }) helperText = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) prefixStr = '';
  @property({ type: String }) suffixStr = '';

  render() {
    const wrapperClasses = {
      'input-wrapper': true,
      'state-active': this.state === 'active',
      'state-error': this.state === 'error',
      'disabled': this.disabled
    };

    const errorIcon = html`
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    `;

    return html`
      <div class="field-container">
        
        <!-- Top Label & Hint -->
        ${this.label || this.topHint ? html`
          <div class="top-bar">
            ${this.label ? html`<label>${this.label}</label>` : html`<span></span>`}
            ${this.topHint ? html`<span class="top-hint">${this.topHint}</span>` : ''}
          </div>
        ` : ''}

        <!-- Main Input Sandbox -->
        <div class="${classMap(wrapperClasses)}">
          ${this.prefixStr ? html`<div class="addon prefix">${this.prefixStr}</div>` : ''}
          
          <span class="leading-slot"><slot name="leading-icon"></slot></span>
          
          <input 
            class="has-leading"
            type="text"
            .value="${this.value}"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            @input="${(e: Event) => this.value = (e.target as HTMLInputElement).value}"
            @focus="${() => { if(this.state !== 'error') this.state = 'active' }}"
            @blur="${() => { if(this.state !== 'error') this.state = 'default' }}"
          />
          
          ${this.suffixStr ? html`<div class="addon suffix">${this.suffixStr}</div>` : ''}
        </div>
        
        <!-- Bottom Helper / Error text -->
        ${this.helperText ? html`
          <div class="helper-text ${this.state === 'error' ? 'error' : ''}">
            ${this.state === 'error' ? errorIcon : ''}
            <span>${this.helperText}</span>
          </div>
        ` : ''}

      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-input': MyInput;
  }
}
