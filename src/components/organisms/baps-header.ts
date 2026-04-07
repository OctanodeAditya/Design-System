import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('baps-header')
export class MyHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-md, 16px) var(--spacing-lg, 24px);
      background-color: var(--color-bg-white, #FFFFFF);
      border-bottom: 1px solid var(--color-border-light, #EAEAEA);
      font-family: var(--font-family-base, 'Inter', sans-serif);
      position: sticky;
      top: 0;
      z-index: 10;
    }
    h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      color: var(--color-text-main, #000);
      line-height: 1.2;
    }
    .actions {
      display: flex;
      gap: var(--spacing-sm, 8px);
    }
  `;

  @property({ type: String }) title = 'mySatsang';

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-header': MyHeader;
  }
}
