import { LitElement, html } from "lit-element";

class renderTest extends LitElement {
  static get properties() {
    return {
      kitty: { type: String },
      cursorType: { type: String },
    };
  }

  constructor() {
    super();
    this.kitty = "wittle kitten";
    this.cursorType = "grab";
  }

  render() {
    return html`
      <style>
        :host {
          cursor: ${this.cursorType} text;
        }
        #text {
          font-size: 100px;
          text-align: center;
        }
      </style>
      <div id="text">${this.kitty}</div>
    `;
  }
}

window.customElements.define("render-test", renderTest);
