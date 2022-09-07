import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pkmon-about")
export class AboutPage extends LitElement {
  render() {
    return html` <p>About Page</p> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pkmon-about": AboutPage;
  }
}
