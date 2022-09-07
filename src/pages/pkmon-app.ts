import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/pkmon-header";
import "../components/pkmon-footer";

@customElement("pkmon-app")
export class App extends LitElement {
  static styles = css`
    #slot {
      min-height: 100vh;
    }
  `;
  render() {
    return html`
      <pkmon-header></pkmon-header>
      <div id="slot">
        <slot></slot>
      </div>
      <pkmon-footer></pkmon-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pkmon-app": App;
  }
}
