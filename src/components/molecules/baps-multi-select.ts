import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export interface MultiSelectOption {
  label: string;
  value: string;
}

@customElement('baps-multi-select')
export class BapsMultiSelect extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--font-family-base, 'Inter', sans-serif);
      position: relative;
    }

    .select-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-4, 4px);
      width: 100%;
    }

    label {
      font-weight: var(--font-weight-semibold, 600);
      font-size: var(--font-p-14-size, 14px);
      color: var(--color-grey-900, #0F172A);
      margin-bottom: var(--spacing-4, 4px);
    }

    .trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 48px;
      padding: var(--spacing-8) var(--spacing-16);
      background-color: var(--color-white, #FFFFFF);
      border: 1px solid var(--color-grey-300, #CBD5E1);
      border-radius: var(--border-radius-base, 8px);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;
      user-select: none;
      gap: var(--spacing-8);
    }

    .trigger:hover:not(.disabled) {
      border-color: var(--color-grey-400, #94A3B8);
    }

    .trigger.active {
      border-color: var(--color-primary-700, #B91C1C);
      box-shadow: 0 0 0 1px var(--color-primary-700, #B91C1C);
    }

    .trigger.error {
      border-color: var(--color-red-500, #EF4444);
    }

    .trigger.disabled {
      background-color: var(--color-grey-100, #F1F5F9);
      border-color: var(--color-grey-200, #E2E8F0);
      cursor: not-allowed;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      flex: 1;
    }

    .placeholder {
      font-size: var(--font-p-16-size, 16px);
      color: var(--color-grey-400, #94A3B8);
    }

    /* Tag Styling */
    .tag {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background-color: var(--color-grey-100, #F1F5F9);
      color: var(--color-grey-700, #334155);
      font-size: 13px;
      font-weight: 500;
      padding: 4px 8px;
      border-radius: 4px;
      border: 1px solid var(--color-grey-200, #E2E8F0);
    }

    .tag-close {
      cursor: pointer;
      display: flex;
      align-items: center;
      color: var(--color-grey-500);
      transition: color 0.2s;
    }

    .tag-close:hover {
      color: var(--color-red-500);
    }

    .dropdown-chevron {
      width: 18px;
      height: 18px;
      transition: all 0.2s ease-in-out;
      color: var(--color-grey-500);
      background: transparent !important;
      border: none !important;
      pointer-events: none;
      flex-shrink: 0;
    }

    .active .dropdown-chevron {
      transform: rotate(180deg);
      color: var(--color-primary-700);
    }

    /* Menu Styling */
    .menu {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      width: 100%;
      background: var(--color-white, #FFFFFF);
      border: 1px solid var(--color-grey-200, #E2E8F0);
      border-radius: var(--border-radius-base, 8px);
      box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(0, 0, 0, 0.04);
      z-index: 1000;
      max-height: 280px;
      overflow-y: auto;
      padding: 8px 0;
      display: none;
    }

    .menu.open {
      display: block;
    }

    .option {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      font-size: var(--font-p-14-size, 14px);
      color: var(--color-grey-700);
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .option:hover {
      background-color: var(--color-grey-100);
    }

    /* Checkbox visual mockup */
    .checkbox-box {
      width: 18px;
      height: 18px;
      border: 2px solid var(--color-grey-300);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      flex-shrink: 0;
    }

    .selected .checkbox-box {
      background-color: var(--color-primary-700);
      border-color: var(--color-primary-700);
    }

    .check-icon {
      width: 12px;
      height: 12px;
      fill: white;
      display: none;
    }

    .selected .check-icon {
      display: block;
    }

    /* Helper & Error text */
    .helper-text {
      font-size: var(--font-p-12-size, 12px);
      color: var(--color-grey-500);
      margin-top: 4px;
    }
    .helper-text.error {
      color: var(--color-red-500);
    }
  `;

  @property({ type: String }) label = '';
  @property({ type: String }) placeholder = 'Select options';
  @property({ type: Array }) options: MultiSelectOption[] = [];
  @property({ type: Array }) selectedValues: string[] = [];
  @property({ type: String }) state: 'default' | 'error' = 'default';
  @property({ type: String }) helperText = '';
  @property({ type: Boolean }) disabled = false;

  @state() private _isOpen = false;

  private _toggleMenu() {
    if (!this.disabled) {
      this._isOpen = !this._isOpen;
    }
  }

  private _toggleOption(option: MultiSelectOption, e: Event) {
    e.stopPropagation();
    const index = this.selectedValues.indexOf(option.value);
    if (index > -1) {
      this.selectedValues = this.selectedValues.filter(v => v !== option.value);
    } else {
      this.selectedValues = [...this.selectedValues, option.value];
    }
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.selectedValues } }));
    this.requestUpdate();
  }

  private _removeTag(value: string, e: Event) {
    e.stopPropagation();
    this.selectedValues = this.selectedValues.filter(v => v !== value);
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.selectedValues } }));
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  private _handleOutsideClick = (e: MouseEvent) => {
    if (this._isOpen && !e.composedPath().includes(this)) {
      this._isOpen = false;
    }
  }

  render() {
    const triggerClasses = {
      'trigger': true,
      'active': this._isOpen,
      'error': this.state === 'error',
      'disabled': this.disabled
    };

    return html`
      <div class="select-container">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        
        <div class="${classMap(triggerClasses)}" @click="${this._toggleMenu}">
          <div class="tags-container">
            ${this.selectedValues.length === 0 
              ? html`<span class="placeholder">${this.placeholder}</span>`
              : this.selectedValues.map(value => {
                const opt = this.options.find(o => o.value === value);
                return html`
                  <span class="tag">
                    ${opt ? opt.label : value}
                    <span class="tag-close" @click="${(e: Event) => this._removeTag(value, e)}">×</span>
                  </span>
                `;
              })
            }
          </div>
          <svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none">
            <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="menu ${this._isOpen ? 'open' : ''}">
          ${this.options.map(option => html`
            <div 
              class="option ${this.selectedValues.includes(option.value) ? 'selected' : ''}" 
              @click="${(e: Event) => this._toggleOption(option, e)}"
            >
              <div class="checkbox-box">
                <svg class="check-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              ${option.label}
            </div>
          `)}
        </div>

        ${this.helperText ? html`
          <div class="helper-text ${this.state === 'error' ? 'error' : ''}">
            ${this.helperText}
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-multi-select': BapsMultiSelect;
  }
}
