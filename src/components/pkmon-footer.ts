import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pkmon-footer")
export class PkmonFooter extends LitElement {
  static styles = css`
    footer {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--blue);
      color: var(--white);
    }
  `;
  render() {
    return html`
      <footer>
        <p>Copyright by Ronnie in ${new Date().getFullYear()}</p>
      </footer>
    `;
  }
}
