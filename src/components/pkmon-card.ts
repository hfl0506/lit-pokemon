import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PokemonInfo } from "../interface";
import { map } from "lit/directives/map.js";
import "../components/pkmon-ability-pill.js";

@customElement("pkmon-card")
export class PkmonCard extends LitElement {
  static styles = css`
    .card-wrapper {
      width: 400px;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 2px 4px 4px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      margin: 40px;
      font-weight: 500;
    }

    .card-wrapper:before {
      content: "";
      min-width: 400px;
      height: 20px;
      background-color: var(--blue);
      border-radius: 8px 8px 0px 0px;
    }

    .card-img-ctn {
      display: inline-flex;
      flex-wrap: wrap;
    }

    .card-content {
      padding: 20px 0px;
    }
    .card-content > div {
      padding: 5px 0px;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      border: 0.5px solid #1a1a1a;
      margin: 20px 5px;
    }
  `;

  @property({ attribute: "pokemon-data", type: Object }) pokemonData =
    {} as PokemonInfo;

  render() {
    return html`
      <div class="card-wrapper">
        <div class="card-img-ctn">
          <img src=${this.pokemonData.sprites.front_default} />
          <img
            src=${this.pokemonData.sprites.other["official-artwork"]
              .front_default}
          />
          <img
            src=${this.pokemonData.sprites.other.dream_world.front_default}
          />
          <img src=${this.pokemonData.sprites.other.home.front_default} />
        </div>
        <div class="card-content">
          <div>
            <label>Name:</label>
            <span>${this.pokemonData.name.toUpperCase()}</span>
          </div>
          <div>
            <label>Height: </label>
            <span>${this.pokemonData.height} ft.</span>
          </div>
          <div>
            <label>Weight: </label>
            <span>${this.pokemonData.weight} lbs.</span>
          </div>
          <div>
            <label>Abilities: </label>
            ${map(
              this.pokemonData.abilities,
              (data, idx) =>
                html`<pkmon-ability-pill
                  key=${idx}
                  .skill=${data}
                ></pkmon-ability-pill>`
            )}
          </div>
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
