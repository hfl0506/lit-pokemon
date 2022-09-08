import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { debounce } from "../../helpers";
import { getPokemon } from "../../api";

@customElement("pkmon-home")
export class HomePage extends LitElement {
  static styles = css`
    :host {
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
  @property({ attribute: false, type: Array }) _pokemons = [];
  @query("input", true) _search!: HTMLInputElement;

  async onSearch(e: InputEvent) {
    e.preventDefault();
    const search = this._search.value.trim();

    this._pokemons = await getPokemon(search);

    console.log(this._pokemons);

    this.requestUpdate();
  }

  render() {
    return html`<div>
      <input
        id="search"
        .value=${this._input}
        @input=${debounce(this.onSearch)}
      />
      <p>${this._input}</p>
      <div>
        ${this._pokemons?.length > 0
          ? map(
              this._pokemons,
              (pokemon, idx) => html`
                <pkmon-card key=${idx} .data=${pokemon}></pkmon-card>
              `
            )
          : html` <p>No Pokemon Found...</p> `}
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pkmon-home": HomePage;
  }
}
