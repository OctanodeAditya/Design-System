import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export interface DropdownOption {
  label: string;
  value: string;
}

@customElement('baps-dropdown')
export class BapsDropdown extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--font-family-base, 'Inter', sans-serif);
      position: relative;
    }

    .dropdown-container {
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
      height: 48px;
      padding: 0 var(--spacing-16, 16px);
      background-color: var(--color-white, #FFFFFF);
      border: 1px solid var(--color-grey-300, #CBD5E1);
      border-radius: var(--border-radius-base, 8px);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;
      user-select: none;
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
      color: var(--color-grey-400, #94A3B8);
    }

    .value-text {
      font-size: var(--font-p-16-size, 16px);
      color: var(--color-grey-900, #0F172A);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .placeholder {
      color: var(--color-grey-400, #94A3B8);
    }

    .disabled .value-text {
      color: var(--color-grey-400, #94A3B8);
    }

    .dropdown-chevron {
      width: 20px;
      height: 20px;
      transition: all 0.2s ease-in-out;
      color: var(--color-grey-500);
      background: transparent !important;
      border: none !important;
      pointer-events: none;
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
      max-height: 240px;
      overflow-y: auto;
      padding: 4px 0;
      display: none;
    }

    .menu.open {
      display: block;
    }

    .option {
      padding: 10px 16px;
      font-size: var(--font-p-14-size, 14px);
      color: var(--color-grey-700, #334155);
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .option:hover {
      background-color: var(--color-grey-100, #F1F5F9);
      color: var(--color-grey-900, #0F172A);
    }

    .option.selected {
      background-color: var(--color-primary-50, #FEF2F2);
      color: var(--color-primary-700, #B91C1C);
      font-weight: 600;
    }

    /* Helper & Error text */
    .helper-text {
      font-size: var(--font-p-12-size, 12px);
      color: var(--color-grey-500, #64748B);
      margin-top: 4px;
    }

    .helper-text.error {
      color: var(--color-red-500, #EF4444);
    }
  `;

  @property({ type: String }) label = '';
  @property({ type: String }) placeholder = 'Select an option';
  @property({ type: Array }) options: DropdownOption[] = [];
  @property({ type: String }) value = '';
  @property({ type: String }) state: 'default' | 'error' = 'default';
  @property({ type: String }) helperText = '';
  @property({ type: Boolean }) disabled = false;

  @state() private _isOpen = false;

  private _toggleMenu() {
    if (!this.disabled) {
      this._isOpen = !this._isOpen;
    }
  }

  private _selectOption(option: DropdownOption) {
    this.value = option.value;
    this._isOpen = false;
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
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
    const selectedOption = this.options.find(opt => opt.value === this.value);
    
    const triggerClasses = {
      'trigger': true,
      'active': this._isOpen,
      'error': this.state === 'error',
      'disabled': this.disabled
    };

    return html`
      <div class="dropdown-container">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        
        <div class="${classMap(triggerClasses)}" @click="${this._toggleMenu}">
          <span class="value-text ${!selectedOption ? 'placeholder' : ''}">
            ${selectedOption ? selectedOption.label : this.placeholder}
          </span>
          <svg class="dropdown-chevron" viewBox="0 0 24 24" fill="none">
            <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="menu ${this._isOpen ? 'open' : ''}">
          ${this.options.map(option => html`
            <div 
              class="option ${this.value === option.value ? 'selected' : ''}" 
              @click="${() => this._selectOption(option)}"
            >
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
    'baps-dropdown': BapsDropdown;
  }
}
