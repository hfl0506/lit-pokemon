import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { debounce } from "../../helpers";
import { getPokemon } from "../../api";
import { PokemonInfo } from "../../interface";
import "../../components/pkmon-card.js";

@customElement("pkmon-home")
export class HomePage extends LitElement {
  static styles = css`
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
      background: var(--white);
    }

    input {
      height: 2rem;
      width: 20rem;
      margin: 1rem;
      border-radius: 8px;
      text-align: center;
    }
  `;

  @property({ attribute: false }) _input: string = "";
  @property({ attribute: false, type: Object }) _pokemon = {} as PokemonInfo;
  @query("input", true) _search!: HTMLInputElement;

  async onSearch(e: InputEvent) {
    e.preventDefault();

    const search = this._search.value.trim();

    const data = await getPokemon(search);

    if (data === undefined) return;

    this._pokemon = data;

    console.log(this._pokemon);

    this.requestUpdate();
  }

  render() {
    return html`<div>
      <input
        id="search"
        .value=${this._input}
        @input=${debounce(this.onSearch)}
      />
      ${Object.keys(this._pokemon).length > 0
        ? html` <pkmon-card .pokemonData=${this._pokemon}></pkmon-card> `
        : html` <p>No Pokemon found...</p> `}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pkmon-home": HomePage;
  }
}
