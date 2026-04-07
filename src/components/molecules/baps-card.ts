import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('baps-card')
export class MyCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card {
      background-color: var(--color-bg-white, #FFFFFF);
      border-radius: var(--border-radius-base, 8px);
      padding: var(--spacing-md, 16px);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-border-light, #EAEAEA);
      color: var(--color-text-main, #000);
      font-family: var(--font-family-base, 'Inter', sans-serif);
      transition: box-shadow 0.2s;
    }
    .card:hover {
      box-shadow: var(--shadow-md);
    }
  `;

  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-card': MyCard;
  }
}
