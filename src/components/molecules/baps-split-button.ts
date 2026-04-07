import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export interface SplitButtonOption {
  label: string;
  value: string;
  divider?: boolean;
}

@customElement('baps-split-button')
export class MySplitButton extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      font-family: var(--font-family-base);
      border-radius: var(--border-radius-base);
    }
    
    .split-wrapper {
      display: flex;
      align-items: stretch;
      border-radius: var(--border-radius-base);
      overflow: hidden;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-8);
      font-family: var(--font-family-base);
      font-weight: var(--font-weight-semibold);
      cursor: pointer;
      border: none;
      background: transparent;
      transition: all 0.2s ease;
      margin: 0;
      padding: 0;
      outline: none;
      white-space: nowrap;
    }

    /* Base Layout per zone */
    .main-action {
      flex: 1;
    }
    .dropdown-action {
      flex-shrink: 0;
    }
    .divider {
      width: 1px;
      transition: all 0.2s ease;
    }

    /* Sizes */
    .size-sm .main-action { padding: 0 var(--spacing-12); font-size: var(--font-p-12-size); height: 32px; }
    .size-sm .dropdown-action { padding: 0 var(--spacing-8); height: 32px; }
    
    .size-md .main-action { padding: 0 var(--spacing-16); font-size: var(--font-p-14-size); height: 40px; }
    .size-md .dropdown-action { padding: 0 var(--spacing-12); height: 40px; }
    
    .size-lg .main-action { padding: 0 var(--spacing-20); font-size: var(--font-p-16-size); height: 48px; }
    .size-lg .dropdown-action { padding: 0 var(--spacing-16); height: 48px; }
    
    .size-xl .main-action { padding: 0 var(--spacing-24); font-size: var(--font-sub-20-size); height: 64px; }
    .size-xl .dropdown-action { padding: 0 var(--spacing-20); height: 64px; }

    /* Icons inside buttons */
    svg.icon {
      width: 1em;
      height: 1em;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
    }
    svg.chevron {
      fill: currentColor;
      stroke: none;
    }

    /* Badge Pillar */
    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      font-weight: var(--font-weight-bold);
      transition: all 0.2s ease;
      padding: 0 var(--spacing-4);
      box-sizing: border-box;
    }
    .size-sm .badge { min-width: 16px; height: 16px; font-size: 10px; }
    .size-md .badge { min-width: 20px; height: 20px; font-size: 12px; }
    .size-lg .badge { min-width: 24px; height: 24px; font-size: 14px; }
    .size-xl .badge { min-width: 32px; height: 32px; font-size: 18px; }

    /* =========================
       THEMES AND STATES
       ========================= */

    /* ----- TYPE: PRIMARY (Crimson) ----- */
    .type-primary.split-wrapper {
      background-color: var(--color-primary-700); 
      color: var(--color-white);
      border: 1px solid var(--color-primary-700);
    }
    .type-primary button { color: var(--color-white); }
    .type-primary .divider { background-color: rgba(255, 255, 255, 0.3); }
    .type-primary .badge { background-color: var(--color-white); color: var(--color-primary-700); }

    /* Primary Interactive */
    .type-primary .main-action:hover,
    .type-primary.force-hover .main-action {
      background-color: var(--color-primary-600); 
    }
    .type-primary .dropdown-action:hover,
    .type-primary.force-hover .dropdown-action {
      background-color: var(--color-primary-700); 
    }
    .type-primary .main-action:active,
    .type-primary.force-active .main-action {
      background-color: var(--color-primary-800); 
    }
    .type-primary .dropdown-action:active,
    .type-primary.force-active .dropdown-action {
      background-color: var(--color-primary-900); 
    }

    /* ----- TYPE: SECONDARY (Outline) ----- */
    .type-secondary.split-wrapper {
      background-color: var(--color-white);
      color: var(--color-grey-900);
      border: 1px solid var(--color-grey-300);
    }
    .type-secondary button { color: var(--color-grey-900); }
    .type-secondary .divider { background-color: var(--color-grey-300); }
    .type-secondary .badge { background-color: var(--color-grey-100); color: var(--color-grey-900); border: 1px solid var(--color-grey-200); }

    /* Secondary Interactive */
    .type-secondary .main-action:hover,
    .type-secondary.force-hover .main-action {
      background-color: var(--color-grey-100);
    }
    .type-secondary .dropdown-action:hover,
    .type-secondary.force-hover .dropdown-action {
      background-color: var(--color-grey-100);
    }
    .type-secondary .main-action:active,
    .type-secondary.force-active .main-action {
      background-color: var(--color-grey-200);
    }
    .type-secondary .dropdown-action:active,
    .type-secondary.force-active .dropdown-action {
      background-color: var(--color-grey-200);
    }

    /* ----- DISABLED STATES ----- */
    /* Disabled Flat (e.g. Row 7 mapping) */
    .type-disabled-flat.split-wrapper {
      background-color: var(--color-grey-100);
      border: 1px solid var(--color-grey-100);
      cursor: not-allowed;
    }
    .type-disabled-flat button { color: var(--color-grey-400); cursor: not-allowed; }
    .type-disabled-flat .divider { background-color: var(--color-grey-200); }
    .type-disabled-flat .badge { background-color: var(--color-grey-200); color: var(--color-grey-400); }

    /* Disabled Outline (e.g. Row 8 mapping) */
    .type-disabled-outline.split-wrapper {
      background-color: var(--color-white);
      border: 1px solid var(--color-grey-200);
      cursor: not-allowed;
    }
    .type-disabled-outline button { color: var(--color-grey-300); cursor: not-allowed; }
    .type-disabled-outline .divider { background-color: var(--color-grey-200); }
    .type-disabled-outline .badge { background-color: var(--color-white); border: 1px solid var(--color-grey-200); color: var(--color-grey-300); }

    /* =========================
       MENU STYLING
       ========================= */
    .menu-container {
      position: relative;
      display: inline-flex;
    }

    .menu {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      min-width: 160px;
      background: var(--color-white, #FFFFFF);
      border: 1px solid var(--color-grey-200, #E2E8F0);
      border-radius: 8px;
      box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(0, 0, 0, 0.04);
      z-index: 1000;
      padding: 4px 0;
      display: none;
      animation: fadeIn 0.2s ease;
    }

    .menu.open {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .menu-item {
      padding: 10px 16px;
      font-size: var(--font-p-14-size, 14px);
      color: var(--color-grey-700, #334155);
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: var(--spacing-8);
      white-space: nowrap;
    }

    .menu-item:hover {
      background-color: var(--color-grey-100, #F1F5F9);
      color: var(--color-grey-900, #0F172A);
    }

    .menu-divider {
      height: 1px;
      background-color: var(--color-grey-100);
      margin: 4px 0;
    }

  `;

  @property({ type: String }) type: 'primary' | 'secondary' | 'disabled-flat' | 'disabled-outline' = 'primary';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: String }) badge = '';
  @property({ type: String }) forceState: 'rest' | 'hover' | 'active' = 'rest';
  @property({ type: Boolean }) showIcon = true;
  @property({ type: Boolean }) showBadge = true;
  @property({ type: Array }) options: SplitButtonOption[] = [];

  @state() private _isOpen = false;


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

  private handleMainClick() {
    if (this.type.includes('disabled')) return;
    this.dispatchEvent(new CustomEvent('main-click', { bubbles: true, composed: true }));
  }

  private handleDropdownClick(e: Event) {
    if (this.type.includes('disabled')) return;
    
    if (this.options.length > 0) {
      e.stopPropagation();
      this._isOpen = !this._isOpen;
    }
    
    this.dispatchEvent(new CustomEvent('dropdown-click', { bubbles: true, composed: true }));
  }

  private handleOptionClick(option: SplitButtonOption) {
    this._isOpen = false;
    this.dispatchEvent(new CustomEvent('select', { 
      detail: { value: option.value, label: option.label },
      bubbles: true, 
      composed: true 
    }));
  }

  render() {
    const wrapperClasses = {
      'split-wrapper': true,
      [`size-${this.size}`]: true,
      [`type-${this.type}`]: true,
      'force-hover': this.forceState === 'hover',
      'force-active': this.forceState === 'active'
    };


    const clockIcon = html`
      <svg class="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke-dasharray="2,2"></circle>
        <path d="M12 7v5l3 3"></path>
      </svg>
    `;

    const chevronIcon = html`
      <svg class="icon chevron" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5H7z"></path>
      </svg>
    `;

    return html`
      <div class="menu-container">
        <div class="${classMap(wrapperClasses)}">
          <!-- Main Zone -->
          <button class="main-action" @click="${this.handleMainClick}">
            ${this.showIcon ? html`<slot name="left-icon">${clockIcon}</slot>` : ''}
            <span class="text"><slot></slot></span>
            ${(this.showBadge && this.badge) ? html`<span class="badge">${this.badge}</span>` : ''}
          </button>
          
          <!-- Divider -->
          <div class="divider"></div>
          
          <!-- Dropdown Zone -->
          <button class="dropdown-action" @click="${this.handleDropdownClick}">
            <slot name="right-icon">${chevronIcon}</slot>
          </button>
        </div>

        <!-- Popover Menu -->
        <div class="menu ${this._isOpen ? 'open' : ''}">
          ${this.options.map((option) => html`
            ${option.divider ? html`<div class="menu-divider"></div>` : ''}
            <div class="menu-item" @click="${() => this.handleOptionClick(option)}">
              ${option.label}
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-split-button': MySplitButton;
  }
}
