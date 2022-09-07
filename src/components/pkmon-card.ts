import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pkmon-card")
export class PkmonCard extends LitElement {
  static styles = css`
    .card-wrapper {
      width: 400px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;
  render() {
    return html` <div class="card-wrapper"></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pkmon-card": PkmonCard;
  }
}
