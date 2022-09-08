import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

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

  @property({ attribute: "data", type: Object }) pokemonData = {};

  render() {
    return html`
      <div class="card-wrapper">
        <div>
          <label>Name: </label>
          <span></span>
        </div>
        <div>
          <label>Attribute: </label>
          <span></span>
        </div>
        <div>
          <label>Abilities</label>
          <span></span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pkmon-card": PkmonCard;
  }
}
