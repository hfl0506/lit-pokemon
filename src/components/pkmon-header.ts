import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pkmon-header")
export class PkmonHeader extends LitElement {
  static styles = css`
    header {
      height: 3.75rem;
      width: 100%;
      background: var(--blue);
    }

    nav {
      height: 3.75rem;
      display: flex;
      align-items: center;
    }

    a {
      color: #fff;
      text-decoration: none;
      padding-left: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
    }

    a:hover {
      color: var(--lightGrey);
    }
  `;
  render() {
    return html`
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pkmon-header": PkmonHeader;
  }
}
