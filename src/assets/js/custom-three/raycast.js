
import {LitElement, html} from 'lit-element';

import * as THREE from 'three';

import Stats from './jsm/libs/stats.module.js';

import { TrackballControls } from './jsm/controls/TrackballControls.js';
import { BufferGeometryUtils } from './jsm/utils/BufferGeometryUtils.js';

class RayCast extends LitElement {
  static get properties() {
    return {
      kitty: {
        type: String
      },
      count: {
        type: Number
      },
    };
  }
  constructor() {
    super();
    this.kitty = 'wittle';
  }

  render() {
    return html`
      <p>template content</p>
      ${this.kitty}
    `;
  }
}

window.customElements.define('ray-cast', RayCast);