
import {LitElement, html} from 'lit-element';

class renderTest extends LitElement {

    static get properties() {
        return {
            kitty: {type: String},
            cursorType: {type:String}
        };
    }

    constructor() {
        super();
        this.kitty= 'wittle'
        this.cursorType = 'grab';
    }

    render() {
        return html`
        <style>
            :host {
                cursor: ${this.cursorType}
            } 
        </style>
        <p>template content</p>
        ${this.kitty}
        `;
    }

}

window.customElements.define('render-test', renderTest);