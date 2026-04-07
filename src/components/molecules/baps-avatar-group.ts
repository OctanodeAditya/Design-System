import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('baps-avatar-group')
export class MyAvatarGroup extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      flex-direction: row;
    }
    
    .group-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* We apply the overlap and cutout by targeting children injected into the slot */
    ::slotted(baps-avatar) {
      margin-left: -8px; /* Default overlap */
      position: relative;
      /* The cutout effect: applying a box-shadow or border to the host element */
      /* Since baps-avatar uses internal border-radius roughly 25%, we match it here */
      border: 2px solid var(--color-white, #fff);
      border-radius: 25%;
      background-color: var(--color-white, #fff);
      transition: transform 0.2s ease, z-index 0.2s ease;
    }

    /* Remove negative margin on the first child */
    ::slotted(baps-avatar:first-child) {
      margin-left: 0;
    }

    /* Optional: hover effect to pop out */
    ::slotted(baps-avatar:hover) {
      transform: translateY(-4px);
      z-index: 10;
    }
  `;

  @property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';

  render() {
    return html`
      <div class="group-container">
        <!-- We pass the size property down via a slot change listener, or just let users set it -->
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baps-avatar-group': MyAvatarGroup;
  }
}
