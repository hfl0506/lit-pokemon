import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pkmon-home")
export class HomePage extends LitElement {
  static styles = css``;
  render() {
    return html` <p>Home Page</p> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pkmon-home": HomePage;
  }
}
