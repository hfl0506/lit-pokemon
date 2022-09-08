import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Ability } from "../interface";

@customElement("pkmon-ability-pill")
export class PkmonAbilityPill extends LitElement {
  static styles = css`
    span {
      border: 2.5px solid var(--blue);
      border-radius: 8px;
      padding: 2px 5px;
      margin: 2px;
      font-weight: 500;
    }

    span:hover {
      background: var(--blue);
      color: var(--white);
    }
  `;
  @property({ attribute: "skill", type: Object }) skill = {} as Ability;
  render() {
    return html` <span> ${this.skill.ability.name} </span> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pkmon-ability-pill": PkmonAbilityPill;
  }
}
