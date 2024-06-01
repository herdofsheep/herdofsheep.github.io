// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gmIOE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c767fc22f18de3a7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7SwCM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _litElement = require("lit-element");
var _three = require("three");
var _lodash = require("lodash");
var _lodashDefault = parcelHelpers.interopDefault(_lodash);
var _gltfloaderJs = require("three/examples/jsm/loaders/GLTFLoader.js");
var _trackballControlsJs = require("three/examples/jsm/controls/TrackballControls.js");
var _bufferGeometryUtilsJs = require("three/examples/jsm/utils/BufferGeometryUtils.js");
class RayCast extends (0, _litElement.LitElement) {
    static get properties() {
        return {
            container: {
                type: Object
            },
            camera: {
                type: Object
            },
            controls: {
                type: Object
            },
            scene: {
                type: Object
            },
            renderer: {
                type: Object
            },
            pickingTexture: {
                type: Object
            },
            pickingScene: {
                type: Object
            },
            highlightShape: {
                type: Object
            },
            mouse: {
                type: Object
            },
            mousePosX: {
                type: Object
            },
            mousePosY: {
                type: Object
            },
            infoVisible: {
                type: String
            },
            offset: {
                type: Object
            },
            pickingData: {
                type: Object
            },
            cursorType: {
                type: String
            },
            canClick: {
                type: Boolean
            },
            link: {
                type: String
            },
            duplicated: {
                type: Boolean
            },
            que: {
                type: Object
            },
            work: {
                type: Object
            },
            queBig: {
                type: Object
            },
            workBig: {
                type: Object
            },
            files: {
                type: Array
            }
        };
    }
    constructor(){
        super();
        this.mouse = new _three.Vector2();
        this.mousePosX = "0px";
        this.mousePosY = "0px";
        this.beganTouching = false;
        this.offset = new _three.Vector3(1, 1, 1);
        this.duplicated = false;
        this.pickingData = [];
        this.cursorType = "grab";
        this.canClick = false;
        this.link = "";
        this.addEventListener("click", this.clickLink);
        this.addEventListener("touchstart", this.touchStart);
        this.addEventListener("touchmove", this.touchMove);
        this.addEventListener("touchcancel", this.touchMove);
        this.addEventListener("touchend", this.touchEnd);
    }
    render() {
        return (0, _litElement.html)`
    <style>
      :host {
        cursor: ${this.cursorType}
      }
      .followMouse {
        top: ${this.mousePosY};
        left: ${this.mousePosX};
        color: white;
        font-size:50px;
        visibility: ${this.infoVisible};
        position:absolute;
        z-index: 10;
      }
      #crosshair {
        top: ${this.YCenter};
        left: ${this.XCenter};
        position: absolute;
        visibility: hidden;
        width: 0px;
        height: 0px;
        z-index: 100;
      }
      #upSpoke {
        background: white;
        height: 10px;
        width: 2px;
        transform: translateY(-3px);
      }
      #sideSpoke {
        background: white;
        height: 2px;
        width: 10px;
        transform: translate(-4px,-9px);
      }
      #container{
				top:0px;
				position: absolute;
			}
      @media (hover: none) {
        /* behaviour for touch browsers */
        #crosshair {
          visibility: visible;
        }
      }
    </style>
    <div id="container" ></div>
    <div id="infoText" class="followMouse" ></div>
    <div id="crosshair" >
      <div id="upSpoke"></div>
      <div id="sideSpoke"></div>
    </div>
    `;
    }
    async firstUpdated() {
        // Give the browser a chance to paint
        await new Promise((r)=>setTimeout(r, 0));
        this.init();
        this.animate();
    }
    init() {
        this.container = this.shadowRoot.getElementById("container");
        this.camera = new _three.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.XCenter = window.innerWidth / 2 + "px";
        this.YCenter = window.innerHeight / 2 + "px";
        this.mousePosX = this.XCenter;
        this.mousePosY = this.YCenter;
        this.scene = new _three.Scene();
        this.scene.background = new _three.Color(0x424242);
        this.pickingScene = new _three.Scene();
        this.pickingTexture = new _three.WebGLRenderTarget(1, 1);
        this.scene.add(new _three.AmbientLight(0x555555));
        const light = new _three.SpotLight(0xffffff, 1.5);
        light.position.set(0, 500, 20000);
        this.scene.add(light);
        this.files = [
            "que",
            "work",
            "github",
            "math"
        ];
        this.work = this.loadModel("/assets/models/gltf/radcam.glb");
        this.workBig = this.loadModel("/assets/models/gltf/radcamBig.glb");
        this.que = this.loadModel("/assets/models/gltf/questionmark.glb");
        this.queBig = this.loadModel("/assets/models/gltf/questionmarkBig.glb");
        this.github = this.loadModel("/assets/models/gltf/github.glb");
        this.githubBig = this.loadModel("/assets/models/gltf/githubBig.glb");
        this.math = this.loadModel("/assets/models/gltf/math.glb");
        this.mathBig = this.loadModel("/assets/models/gltf/mathBig.glb");
        this.renderer = new _three.WebGLRenderer({
            antialias: true
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
        this.controls = new (0, _trackballControlsJs.TrackballControls)(this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = -1;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = -0.8;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.renderer.domElement.addEventListener("mousemove", this.onMouseMove.bind(this));
        window.addEventListener("resize", this.onWindowResize.bind(this), false);
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.XCenter = window.innerWidth / 2 + "px";
        this.YCenter = window.innerHeight / 2 + "px";
        this.mousePosX = this.XCenter;
        this.mousePosY = this.YCenter;
    }
    onMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        this.mousePosX = this.mouse.x + 15 + "px";
        this.mousePosY = this.mouse.y + 15 + "px";
    }
    loadModel(url) {
        var loader = new (0, _gltfloaderJs.GLTFLoader)();
        var model = new _three.Group;
        loader.load(url, function(gltf) {
            gltf.scene.traverse(function(child) {});
            model.add(gltf.scene);
        });
        return model;
    }
    animate() {
        window.requestAnimationFrame(()=>this.animate());
        if (this.duplicated == false) this.duplicate();
        if (this.duplicated == true) this.threeRender();
    }
    threeRender() {
        this.controls.update();
        this.pick();
        this.renderer.setRenderTarget(null);
        this.renderer.render(this.scene, this.camera);
    }
    duplicate() {
        var files = this.files;
        const geometriesDrawn = {};
        const geometriesPicking = {};
        const matrix = new _three.Matrix4();
        const quaternion = new _three.Quaternion();
        const color = new _three.Color();
        const pickingMaterial = new _three.MeshBasicMaterial({
            vertexColors: true
        });
        const defaultMaterial = new _three.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
            vertexColors: true,
            shininess: 0
        });
        const geometriesTypes = [];
        var clones = this.cloneFiles(files);
        if (clones == null) return;
        //hide the loading label
        this.parentElement.children.loading.style.visibility = "hidden";
        for(var i in files){
            var currentType = files[i];
            geometriesDrawn[currentType] = [];
            geometriesPicking[currentType] = [];
        }
        for(let i = 1; i < 51; i++){
            var randomPick = Math.floor(Math.random() * files.length);
            var objectThisTime = clones[randomPick];
            var smallObject = objectThisTime.data.clone();
            const position = new _three.Vector3();
            position.x = Math.random() * 10000 - 5000;
            position.y = Math.random() * 6000 - 3000;
            position.z = Math.random() * 8000 - 4000;
            const rotation = new _three.Euler();
            rotation.x = Math.random() * 2 * Math.PI;
            rotation.y = Math.random() * 2 * Math.PI;
            rotation.z = Math.random() * 2 * Math.PI;
            var scaleSize = 50;
            const scale = new _three.Vector3(scaleSize, scaleSize, scaleSize);
            quaternion.setFromEuler(rotation);
            matrix.compose(position, quaternion, scale);
            smallObject.applyMatrix4(matrix);
            // give the peep's vertices a random color, to be displayed
            this.applyVertexColors(smallObject, color.setHex(0x060606));
            geometriesDrawn[objectThisTime.type].push(smallObject);
            // give the peep's vertices a color corresponding to the "id"
            smallObject = smallObject.clone();
            this.applyVertexColors(smallObject, color.setHex(i));
            geometriesPicking[objectThisTime.type].push(smallObject);
            this.pickingData[i] = {
                position: position,
                rotation: rotation,
                scale: scale,
                type: objectThisTime.type
            };
        }
        this.highlightShape = {};
        for(var i in files){
            var type = files[i];
            if (type == "work") //0xc96833 --orange
            //0x000422 --darkblue
            var highlightColor = 0xc96833;
            if (type == "github") //0x21023a --dark purple
            //0x380860 --bright purple
            //0x370e42 --pinkier purple
            var highlightColor = 0x370e42;
            if (type == "que") var highlightColor = 0xff4162;
            if (type == "math") //0xd5fdd5 --paler green
            var highlightColor = 0xbfe3bf;
            this.highlightShape[files[i]] = new _three.Mesh(clones[i].bigData, new _three.MeshPhongMaterial({
                color: highlightColor,
                flatShading: false,
                shininess: 150
            }));
            this.scene.add(this.highlightShape[files[i]]);
            this.objects = new _three.Mesh((0, _bufferGeometryUtilsJs.BufferGeometryUtils).mergeBufferGeometries(geometriesDrawn[files[i]]), defaultMaterial);
            this.scene.add(this.objects);
            this.pickingScene.add(new _three.Mesh((0, _bufferGeometryUtilsJs.BufferGeometryUtils).mergeBufferGeometries(geometriesPicking[files[i]]), pickingMaterial));
        }
        this.duplicated = true;
    }
    cloneFiles(files) {
        for(var i in files){
            var found = (0, _lodashDefault.default).get(this, [
                files[i],
                "children",
                0,
                "children"
            ], null);
            var foundBig = (0, _lodashDefault.default).get(this, [
                files[i] + "Big",
                "children",
                0,
                "children"
            ], null);
            if (found == null || foundBig == null) return null;
        }
        var clones = [];
        for(var i in files){
            var clone = {};
            var currentType = files[i];
            var littleMesh = (0, _lodashDefault.default).get(this, [
                currentType,
                "children",
                0,
                "children"
            ]);
            var hasLittleMesh = littleMesh.find((x)=>x.type == "Mesh");
            if (hasLittleMesh) clone["data"] = littleMesh.find((x)=>x.type == "Mesh").geometry;
            else {
                var hasLittleMeshGroup = littleMesh.find((x)=>x.type == "Group");
                if (hasLittleMeshGroup) {
                    var meshes = [];
                    for(var j = 0; j < hasLittleMeshGroup.children.length; j++){
                        var mesh = hasLittleMeshGroup.children[j].geometry;
                        meshes.push(mesh);
                    }
                    var groupMeshes = (0, _bufferGeometryUtilsJs.BufferGeometryUtils).mergeBufferGeometries(meshes);
                    clone["data"] = groupMeshes;
                }
            }
            var bigMesh = (0, _lodashDefault.default).get(this, [
                currentType + "Big",
                "children",
                0,
                "children"
            ]);
            var hasBigMesh = bigMesh.find((x)=>x.type == "Mesh");
            if (hasBigMesh) clone["bigData"] = bigMesh.find((x)=>x.type == "Mesh").geometry;
            else {
                var hasBigMeshGroup = bigMesh.find((x)=>x.type == "Group");
                if (hasBigMeshGroup) {
                    var meshes = [];
                    for(var j = 0; j < hasBigMeshGroup.children.length; j++){
                        var mesh = hasBigMeshGroup.children[j].geometry;
                        meshes.push(mesh);
                    }
                    var groupMeshes = (0, _bufferGeometryUtilsJs.BufferGeometryUtils).mergeBufferGeometries(meshes);
                    clone["bigData"] = groupMeshes;
                }
            }
            clone["type"] = currentType;
            clones.push(clone);
        }
        return clones;
    }
    pick() {
        //render the picking scene off-screen
        // set the view offset to represent just a single pixel under the mouse
        var mouseX = this.mouse.x;
        var mouseY = this.mouse.y;
        var touchScreen = window.matchMedia("(hover: none)").matches;
        if (touchScreen) {
            mouseX = this.XCenter.replace("px", "");
            mouseY = this.YCenter.replace("px", "");
        }
        this.camera.setViewOffset(this.renderer.domElement.width, this.renderer.domElement.height, mouseX * window.devicePixelRatio | 0, mouseY * window.devicePixelRatio | 0, 1, 1);
        // render the scene
        this.renderer.setRenderTarget(this.pickingTexture);
        this.renderer.render(this.pickingScene, this.camera);
        // clear the view offset so rendering returns to normal
        this.camera.clearViewOffset();
        //create buffer for reading single pixel
        const pixelBuffer = new Uint8Array(4);
        //read the pixel
        this.renderer.readRenderTargetPixels(this.pickingTexture, 0, 0, 1, 1, pixelBuffer);
        //interpret the pixel as an ID
        const id = pixelBuffer[0] << 16 | pixelBuffer[1] << 8 | pixelBuffer[2];
        const data = this.pickingData[id];
        var debugWindow = this.shadowRoot.getElementById("infoText");
        if (id > 0) {
            this.cursorType = "pointer";
            this.infoVisible = "visible";
            if (data.type == "work") {
                this.link = "src/portfolio.html";
                debugWindow.innerHTML = "work portfolio";
            }
            if (data.type == "github") {
                this.link = "https://github.com/herdofsheep";
                debugWindow.innerHTML = "github";
            }
            if (data.type == "que") {
                this.link = "src/what.html";
                debugWindow.innerHTML = "what's this?";
            }
            if (data.type == "math") {
                this.link = "src/art.html";
                debugWindow.innerHTML = "art portfolio";
            }
            this.canClick = true;
        } else this.infoVisible = "hidden";
        if (data && id > 0) //move our highlightShape so that it surrounds the picked object
        {
            if (data.position && data.rotation && data.scale && data.type) {
                this.highlightShape[data.type].position.copy(data.position);
                this.highlightShape[data.type].rotation.copy(data.rotation);
                this.highlightShape[data.type].scale.copy(data.scale).add(this.offset);
                this.highlightShape[data.type].visible = true;
            }
        } else {
            for(var i in this.files)this.highlightShape[this.files[i]].visible = false;
            this.cursorType = "cell";
            this.canClick = false;
        }
    }
    clickLink() {
        if (this.canClick) window.location.href = this.link;
    }
    touchStart() {
        if (this.canClick) this.beganTouching = true;
    }
    touchMove() {
        this.beganTouching = false;
    }
    touchEnd() {
        if (this.canClick && this.beganTouching) window.location.href = this.link;
    }
    applyVertexColors(geometry, color) {
        const position = geometry.attributes.position;
        const colors = [];
        for(let i = 0; i < position.count; i++)colors.push(color.r, color.g, color.b);
        geometry.setAttribute("color", new _three.Float32BufferAttribute(colors, 3));
    }
}
window.customElements.define("ray-cast", RayCast);

},{"three":"ktPTu","three/examples/jsm/controls/TrackballControls.js":"1AMKo","lit-element":"kvK5P","lodash":"3qBDj","three/examples/jsm/loaders/GLTFLoader.js":"dVRsF","three/examples/jsm/utils/BufferGeometryUtils.js":"5o7x9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AMKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrackballControls", ()=>TrackballControls);
var _threeModuleJs = require("../../../build/three.module.js");
var TrackballControls = function(object, domElement) {
    if (domElement === undefined) console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.');
    if (domElement === document) console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
    var scope = this;
    var STATE = {
        NONE: -1,
        ROTATE: 0,
        ZOOM: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_ZOOM_PAN: 4
    };
    this.object = object;
    this.domElement = domElement;
    // API
    this.enabled = true;
    this.screen = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };
    this.rotateSpeed = 1.0;
    this.zoomSpeed = 1.2;
    this.panSpeed = 0.3;
    this.noRotate = false;
    this.noZoom = false;
    this.noPan = false;
    this.staticMoving = false;
    this.dynamicDampingFactor = 0.2;
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.keys = [
        65 /*A*/ ,
        83 /*S*/ ,
        68 /*D*/ 
    ];
    this.mouseButtons = {
        LEFT: (0, _threeModuleJs.MOUSE).ROTATE,
        MIDDLE: (0, _threeModuleJs.MOUSE).ZOOM,
        RIGHT: (0, _threeModuleJs.MOUSE).PAN
    };
    // internals
    this.target = new (0, _threeModuleJs.Vector3)();
    var EPS = 0.000001;
    var lastPosition = new (0, _threeModuleJs.Vector3)();
    var lastZoom = 1;
    var _state = STATE.NONE, _keyState = STATE.NONE, _eye = new (0, _threeModuleJs.Vector3)(), _movePrev = new (0, _threeModuleJs.Vector2)(), _moveCurr = new (0, _threeModuleJs.Vector2)(), _lastAxis = new (0, _threeModuleJs.Vector3)(), _lastAngle = 0, _zoomStart = new (0, _threeModuleJs.Vector2)(), _zoomEnd = new (0, _threeModuleJs.Vector2)(), _touchZoomDistanceStart = 0, _touchZoomDistanceEnd = 0, _panStart = new (0, _threeModuleJs.Vector2)(), _panEnd = new (0, _threeModuleJs.Vector2)();
    // for reset
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.up0 = this.object.up.clone();
    this.zoom0 = this.object.zoom;
    // events
    var changeEvent = {
        type: "change"
    };
    var startEvent = {
        type: "start"
    };
    var endEvent = {
        type: "end"
    };
    // methods
    this.handleResize = function() {
        var box = scope.domElement.getBoundingClientRect();
        // adjustments come from similar code in the jquery offset() function
        var d = scope.domElement.ownerDocument.documentElement;
        scope.screen.left = box.left + window.pageXOffset - d.clientLeft;
        scope.screen.top = box.top + window.pageYOffset - d.clientTop;
        scope.screen.width = box.width;
        scope.screen.height = box.height;
    };
    var getMouseOnScreen = function() {
        var vector = new (0, _threeModuleJs.Vector2)();
        return function getMouseOnScreen(pageX, pageY) {
            vector.set((pageX - scope.screen.left) / scope.screen.width, (pageY - scope.screen.top) / scope.screen.height);
            return vector;
        };
    }();
    var getMouseOnCircle = function() {
        var vector = new (0, _threeModuleJs.Vector2)();
        return function getMouseOnCircle(pageX, pageY) {
            vector.set((pageX - scope.screen.width * 0.5 - scope.screen.left) / (scope.screen.width * 0.5), (scope.screen.height + 2 * (scope.screen.top - pageY)) / scope.screen.width // screen.width intentional
            );
            return vector;
        };
    }();
    this.rotateCamera = function() {
        var axis = new (0, _threeModuleJs.Vector3)(), quaternion = new (0, _threeModuleJs.Quaternion)(), eyeDirection = new (0, _threeModuleJs.Vector3)(), objectUpDirection = new (0, _threeModuleJs.Vector3)(), objectSidewaysDirection = new (0, _threeModuleJs.Vector3)(), moveDirection = new (0, _threeModuleJs.Vector3)(), angle;
        return function rotateCamera() {
            moveDirection.set(_moveCurr.x - _movePrev.x, _moveCurr.y - _movePrev.y, 0);
            angle = moveDirection.length();
            if (angle) {
                _eye.copy(scope.object.position).sub(scope.target);
                eyeDirection.copy(_eye).normalize();
                objectUpDirection.copy(scope.object.up).normalize();
                objectSidewaysDirection.crossVectors(objectUpDirection, eyeDirection).normalize();
                objectUpDirection.setLength(_moveCurr.y - _movePrev.y);
                objectSidewaysDirection.setLength(_moveCurr.x - _movePrev.x);
                moveDirection.copy(objectUpDirection.add(objectSidewaysDirection));
                axis.crossVectors(moveDirection, _eye).normalize();
                angle *= scope.rotateSpeed;
                quaternion.setFromAxisAngle(axis, angle);
                _eye.applyQuaternion(quaternion);
                scope.object.up.applyQuaternion(quaternion);
                _lastAxis.copy(axis);
                _lastAngle = angle;
            } else if (!scope.staticMoving && _lastAngle) {
                _lastAngle *= Math.sqrt(1.0 - scope.dynamicDampingFactor);
                _eye.copy(scope.object.position).sub(scope.target);
                quaternion.setFromAxisAngle(_lastAxis, _lastAngle);
                _eye.applyQuaternion(quaternion);
                scope.object.up.applyQuaternion(quaternion);
            }
            _movePrev.copy(_moveCurr);
        };
    }();
    this.zoomCamera = function() {
        var factor;
        if (_state === STATE.TOUCH_ZOOM_PAN) {
            factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
            _touchZoomDistanceStart = _touchZoomDistanceEnd;
            if (scope.object.isPerspectiveCamera) _eye.multiplyScalar(factor);
            else if (scope.object.isOrthographicCamera) {
                scope.object.zoom *= factor;
                scope.object.updateProjectionMatrix();
            } else console.warn("THREE.TrackballControls: Unsupported camera type");
        } else {
            factor = 1.0 + (_zoomEnd.y - _zoomStart.y) * scope.zoomSpeed;
            if (factor !== 1.0 && factor > 0.0) {
                if (scope.object.isPerspectiveCamera) _eye.multiplyScalar(factor);
                else if (scope.object.isOrthographicCamera) {
                    scope.object.zoom /= factor;
                    scope.object.updateProjectionMatrix();
                } else console.warn("THREE.TrackballControls: Unsupported camera type");
            }
            if (scope.staticMoving) _zoomStart.copy(_zoomEnd);
            else _zoomStart.y += (_zoomEnd.y - _zoomStart.y) * this.dynamicDampingFactor;
        }
    };
    this.panCamera = function() {
        var mouseChange = new (0, _threeModuleJs.Vector2)(), objectUp = new (0, _threeModuleJs.Vector3)(), pan = new (0, _threeModuleJs.Vector3)();
        return function panCamera() {
            mouseChange.copy(_panEnd).sub(_panStart);
            if (mouseChange.lengthSq()) {
                if (scope.object.isOrthographicCamera) {
                    var scale_x = (scope.object.right - scope.object.left) / scope.object.zoom / scope.domElement.clientWidth;
                    var scale_y = (scope.object.top - scope.object.bottom) / scope.object.zoom / scope.domElement.clientWidth;
                    mouseChange.x *= scale_x;
                    mouseChange.y *= scale_y;
                }
                mouseChange.multiplyScalar(_eye.length() * scope.panSpeed);
                pan.copy(_eye).cross(scope.object.up).setLength(mouseChange.x);
                pan.add(objectUp.copy(scope.object.up).setLength(mouseChange.y));
                scope.object.position.add(pan);
                scope.target.add(pan);
                if (scope.staticMoving) _panStart.copy(_panEnd);
                else _panStart.add(mouseChange.subVectors(_panEnd, _panStart).multiplyScalar(scope.dynamicDampingFactor));
            }
        };
    }();
    this.checkDistances = function() {
        if (!scope.noZoom || !scope.noPan) {
            if (_eye.lengthSq() > scope.maxDistance * scope.maxDistance) {
                scope.object.position.addVectors(scope.target, _eye.setLength(scope.maxDistance));
                _zoomStart.copy(_zoomEnd);
            }
            if (_eye.lengthSq() < scope.minDistance * scope.minDistance) {
                scope.object.position.addVectors(scope.target, _eye.setLength(scope.minDistance));
                _zoomStart.copy(_zoomEnd);
            }
        }
    };
    this.update = function() {
        _eye.subVectors(scope.object.position, scope.target);
        if (!scope.noRotate) scope.rotateCamera();
        if (!scope.noZoom) scope.zoomCamera();
        if (!scope.noPan) scope.panCamera();
        scope.object.position.addVectors(scope.target, _eye);
        if (scope.object.isPerspectiveCamera) {
            scope.checkDistances();
            scope.object.lookAt(scope.target);
            if (lastPosition.distanceToSquared(scope.object.position) > EPS) {
                scope.dispatchEvent(changeEvent);
                lastPosition.copy(scope.object.position);
            }
        } else if (scope.object.isOrthographicCamera) {
            scope.object.lookAt(scope.target);
            if (lastPosition.distanceToSquared(scope.object.position) > EPS || lastZoom !== scope.object.zoom) {
                scope.dispatchEvent(changeEvent);
                lastPosition.copy(scope.object.position);
                lastZoom = scope.object.zoom;
            }
        } else console.warn("THREE.TrackballControls: Unsupported camera type");
    };
    this.reset = function() {
        _state = STATE.NONE;
        _keyState = STATE.NONE;
        scope.target.copy(scope.target0);
        scope.object.position.copy(scope.position0);
        scope.object.up.copy(scope.up0);
        scope.object.zoom = scope.zoom0;
        scope.object.updateProjectionMatrix();
        _eye.subVectors(scope.object.position, scope.target);
        scope.object.lookAt(scope.target);
        scope.dispatchEvent(changeEvent);
        lastPosition.copy(scope.object.position);
        lastZoom = scope.object.zoom;
    };
    // listeners
    function onPointerDown(event) {
        if (scope.enabled === false) return;
        switch(event.pointerType){
            case "mouse":
            case "pen":
                onMouseDown(event);
                break;
        }
    }
    function onPointerMove(event) {
        if (scope.enabled === false) return;
        switch(event.pointerType){
            case "mouse":
            case "pen":
                onMouseMove(event);
                break;
        }
    }
    function onPointerUp(event) {
        if (scope.enabled === false) return;
        switch(event.pointerType){
            case "mouse":
            case "pen":
                onMouseUp(event);
                break;
        }
    }
    function keydown(event) {
        if (scope.enabled === false) return;
        window.removeEventListener("keydown", keydown);
        if (_keyState !== STATE.NONE) return;
        else if (event.keyCode === scope.keys[STATE.ROTATE] && !scope.noRotate) _keyState = STATE.ROTATE;
        else if (event.keyCode === scope.keys[STATE.ZOOM] && !scope.noZoom) _keyState = STATE.ZOOM;
        else if (event.keyCode === scope.keys[STATE.PAN] && !scope.noPan) _keyState = STATE.PAN;
    }
    function keyup() {
        if (scope.enabled === false) return;
        _keyState = STATE.NONE;
        window.addEventListener("keydown", keydown, false);
    }
    function onMouseDown(event) {
        event.preventDefault();
        event.stopPropagation();
        if (_state === STATE.NONE) switch(event.button){
            case scope.mouseButtons.LEFT:
                _state = STATE.ROTATE;
                break;
            case scope.mouseButtons.MIDDLE:
                _state = STATE.ZOOM;
                break;
            case scope.mouseButtons.RIGHT:
                _state = STATE.PAN;
                break;
            default:
                _state = STATE.NONE;
        }
        var state = _keyState !== STATE.NONE ? _keyState : _state;
        if (state === STATE.ROTATE && !scope.noRotate) {
            _moveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
            _movePrev.copy(_moveCurr);
        } else if (state === STATE.ZOOM && !scope.noZoom) {
            _zoomStart.copy(getMouseOnScreen(event.pageX, event.pageY));
            _zoomEnd.copy(_zoomStart);
        } else if (state === STATE.PAN && !scope.noPan) {
            _panStart.copy(getMouseOnScreen(event.pageX, event.pageY));
            _panEnd.copy(_panStart);
        }
        scope.domElement.ownerDocument.addEventListener("pointermove", onPointerMove, false);
        scope.domElement.ownerDocument.addEventListener("pointerup", onPointerUp, false);
        scope.dispatchEvent(startEvent);
    }
    function onMouseMove(event) {
        if (scope.enabled === false) return;
        event.preventDefault();
        event.stopPropagation();
        var state = _keyState !== STATE.NONE ? _keyState : _state;
        if (state === STATE.ROTATE && !scope.noRotate) {
            _movePrev.copy(_moveCurr);
            _moveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
        } else if (state === STATE.ZOOM && !scope.noZoom) _zoomEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
        else if (state === STATE.PAN && !scope.noPan) _panEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
    }
    function onMouseUp(event) {
        if (scope.enabled === false) return;
        event.preventDefault();
        event.stopPropagation();
        _state = STATE.NONE;
        scope.domElement.ownerDocument.removeEventListener("pointermove", onPointerMove);
        scope.domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
        scope.dispatchEvent(endEvent);
    }
    function mousewheel(event) {
        if (scope.enabled === false) return;
        if (scope.noZoom === true) return;
        event.preventDefault();
        event.stopPropagation();
        switch(event.deltaMode){
            case 2:
                // Zoom in pages
                _zoomStart.y -= event.deltaY * 0.025;
                break;
            case 1:
                // Zoom in lines
                _zoomStart.y -= event.deltaY * 0.01;
                break;
            default:
                // undefined, 0, assume pixels
                _zoomStart.y -= event.deltaY * 0.00025;
                break;
        }
        scope.dispatchEvent(startEvent);
        scope.dispatchEvent(endEvent);
    }
    function touchstart(event) {
        if (scope.enabled === false) return;
        event.preventDefault();
        switch(event.touches.length){
            case 1:
                _state = STATE.TOUCH_ROTATE;
                _moveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
                _movePrev.copy(_moveCurr);
                break;
            default:
                _state = STATE.TOUCH_ZOOM_PAN;
                var dx = event.touches[0].pageX - event.touches[1].pageX;
                var dy = event.touches[0].pageY - event.touches[1].pageY;
                _touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt(dx * dx + dy * dy);
                var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
                var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
                _panStart.copy(getMouseOnScreen(x, y));
                _panEnd.copy(_panStart);
                break;
        }
        scope.dispatchEvent(startEvent);
    }
    function touchmove(event) {
        if (scope.enabled === false) return;
        event.preventDefault();
        event.stopPropagation();
        switch(event.touches.length){
            case 1:
                _movePrev.copy(_moveCurr);
                _moveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
                break;
            default:
                var dx = event.touches[0].pageX - event.touches[1].pageX;
                var dy = event.touches[0].pageY - event.touches[1].pageY;
                _touchZoomDistanceEnd = Math.sqrt(dx * dx + dy * dy);
                var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
                var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
                _panEnd.copy(getMouseOnScreen(x, y));
                break;
        }
    }
    function touchend(event) {
        if (scope.enabled === false) return;
        switch(event.touches.length){
            case 0:
                _state = STATE.NONE;
                break;
            case 1:
                _state = STATE.TOUCH_ROTATE;
                _moveCurr.copy(getMouseOnCircle(event.touches[0].pageX, event.touches[0].pageY));
                _movePrev.copy(_moveCurr);
                break;
        }
        scope.dispatchEvent(endEvent);
    }
    function contextmenu(event) {
        if (scope.enabled === false) return;
        event.preventDefault();
    }
    this.dispose = function() {
        scope.domElement.removeEventListener("contextmenu", contextmenu, false);
        scope.domElement.removeEventListener("pointerdown", onPointerDown, false);
        scope.domElement.removeEventListener("wheel", mousewheel, false);
        scope.domElement.removeEventListener("touchstart", touchstart, false);
        scope.domElement.removeEventListener("touchend", touchend, false);
        scope.domElement.removeEventListener("touchmove", touchmove, false);
        scope.domElement.ownerDocument.removeEventListener("pointermove", onPointerMove, false);
        scope.domElement.ownerDocument.removeEventListener("pointerup", onPointerUp, false);
        window.removeEventListener("keydown", keydown, false);
        window.removeEventListener("keyup", keyup, false);
    };
    this.domElement.addEventListener("contextmenu", contextmenu, false);
    this.domElement.addEventListener("pointerdown", onPointerDown, false);
    this.domElement.addEventListener("wheel", mousewheel, false);
    this.domElement.addEventListener("touchstart", touchstart, false);
    this.domElement.addEventListener("touchend", touchend, false);
    this.domElement.addEventListener("touchmove", touchmove, false);
    this.domElement.ownerDocument.addEventListener("pointermove", onPointerMove, false);
    this.domElement.ownerDocument.addEventListener("pointerup", onPointerUp, false);
    window.addEventListener("keydown", keydown, false);
    window.addEventListener("keyup", keyup, false);
    this.handleResize();
    // force an update at start
    this.update();
};
TrackballControls.prototype = Object.create((0, _threeModuleJs.EventDispatcher).prototype);
TrackballControls.prototype.constructor = TrackballControls;

},{"../../../build/three.module.js":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5o7x9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BufferGeometryUtils", ()=>BufferGeometryUtils);
var _threeModuleJs = require("../../../build/three.module.js");
var BufferGeometryUtils = {
    computeTangents: function(geometry) {
        var index = geometry.index;
        var attributes = geometry.attributes;
        // based on http://www.terathon.com/code/tangent.html
        // (per vertex tangents)
        if (index === null || attributes.position === undefined || attributes.normal === undefined || attributes.uv === undefined) {
            console.error("THREE.BufferGeometryUtils: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return;
        }
        var indices = index.array;
        var positions = attributes.position.array;
        var normals = attributes.normal.array;
        var uvs = attributes.uv.array;
        var nVertices = positions.length / 3;
        if (attributes.tangent === undefined) geometry.setAttribute("tangent", new (0, _threeModuleJs.BufferAttribute)(new Float32Array(4 * nVertices), 4));
        var tangents = attributes.tangent.array;
        var tan1 = [], tan2 = [];
        for(var i = 0; i < nVertices; i++){
            tan1[i] = new (0, _threeModuleJs.Vector3)();
            tan2[i] = new (0, _threeModuleJs.Vector3)();
        }
        var vA = new (0, _threeModuleJs.Vector3)(), vB = new (0, _threeModuleJs.Vector3)(), vC = new (0, _threeModuleJs.Vector3)(), uvA = new (0, _threeModuleJs.Vector2)(), uvB = new (0, _threeModuleJs.Vector2)(), uvC = new (0, _threeModuleJs.Vector2)(), sdir = new (0, _threeModuleJs.Vector3)(), tdir = new (0, _threeModuleJs.Vector3)();
        function handleTriangle(a, b, c) {
            vA.fromArray(positions, a * 3);
            vB.fromArray(positions, b * 3);
            vC.fromArray(positions, c * 3);
            uvA.fromArray(uvs, a * 2);
            uvB.fromArray(uvs, b * 2);
            uvC.fromArray(uvs, c * 2);
            vB.sub(vA);
            vC.sub(vA);
            uvB.sub(uvA);
            uvC.sub(uvA);
            var r = 1.0 / (uvB.x * uvC.y - uvC.x * uvB.y);
            // silently ignore degenerate uv triangles having coincident or colinear vertices
            if (!isFinite(r)) return;
            sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r);
            tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r);
            tan1[a].add(sdir);
            tan1[b].add(sdir);
            tan1[c].add(sdir);
            tan2[a].add(tdir);
            tan2[b].add(tdir);
            tan2[c].add(tdir);
        }
        var groups = geometry.groups;
        if (groups.length === 0) groups = [
            {
                start: 0,
                count: indices.length
            }
        ];
        for(var i = 0, il = groups.length; i < il; ++i){
            var group = groups[i];
            var start = group.start;
            var count = group.count;
            for(var j = start, jl = start + count; j < jl; j += 3)handleTriangle(indices[j + 0], indices[j + 1], indices[j + 2]);
        }
        var tmp = new (0, _threeModuleJs.Vector3)(), tmp2 = new (0, _threeModuleJs.Vector3)();
        var n = new (0, _threeModuleJs.Vector3)(), n2 = new (0, _threeModuleJs.Vector3)();
        var w, t, test;
        function handleVertex(v) {
            n.fromArray(normals, v * 3);
            n2.copy(n);
            t = tan1[v];
            // Gram-Schmidt orthogonalize
            tmp.copy(t);
            tmp.sub(n.multiplyScalar(n.dot(t))).normalize();
            // Calculate handedness
            tmp2.crossVectors(n2, t);
            test = tmp2.dot(tan2[v]);
            w = test < 0.0 ? -1 : 1.0;
            tangents[v * 4] = tmp.x;
            tangents[v * 4 + 1] = tmp.y;
            tangents[v * 4 + 2] = tmp.z;
            tangents[v * 4 + 3] = w;
        }
        for(var i = 0, il = groups.length; i < il; ++i){
            var group = groups[i];
            var start = group.start;
            var count = group.count;
            for(var j = start, jl = start + count; j < jl; j += 3){
                handleVertex(indices[j + 0]);
                handleVertex(indices[j + 1]);
                handleVertex(indices[j + 2]);
            }
        }
    },
    /**
	 * @param  {Array<BufferGeometry>} geometries
	 * @param  {Boolean} useGroups
	 * @return {BufferGeometry}
	 */ mergeBufferGeometries: function(geometries, useGroups) {
        var isIndexed = geometries[0].index !== null;
        var attributesUsed = new Set(Object.keys(geometries[0].attributes));
        var morphAttributesUsed = new Set(Object.keys(geometries[0].morphAttributes));
        var attributes = {};
        var morphAttributes = {};
        var morphTargetsRelative = geometries[0].morphTargetsRelative;
        var mergedGeometry = new (0, _threeModuleJs.BufferGeometry)();
        var offset = 0;
        for(var i = 0; i < geometries.length; ++i){
            var geometry = geometries[i];
            var attributesCount = 0;
            // ensure that all geometries are indexed, or none
            if (isIndexed !== (geometry.index !== null)) {
                console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + i + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");
                return null;
            }
            // gather attributes, exit early if they're different
            for(var name in geometry.attributes){
                if (!attributesUsed.has(name)) {
                    console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + i + '. All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.');
                    return null;
                }
                if (attributes[name] === undefined) attributes[name] = [];
                attributes[name].push(geometry.attributes[name]);
                attributesCount++;
            }
            // ensure geometries have the same number of attributes
            if (attributesCount !== attributesUsed.size) {
                console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + i + ". Make sure all geometries have the same number of attributes.");
                return null;
            }
            // gather morph attributes, exit early if they're different
            if (morphTargetsRelative !== geometry.morphTargetsRelative) {
                console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + i + ". .morphTargetsRelative must be consistent throughout all geometries.");
                return null;
            }
            for(var name in geometry.morphAttributes){
                if (!morphAttributesUsed.has(name)) {
                    console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + i + ".  .morphAttributes must be consistent throughout all geometries.");
                    return null;
                }
                if (morphAttributes[name] === undefined) morphAttributes[name] = [];
                morphAttributes[name].push(geometry.morphAttributes[name]);
            }
            // gather .userData
            mergedGeometry.userData.mergedUserData = mergedGeometry.userData.mergedUserData || [];
            mergedGeometry.userData.mergedUserData.push(geometry.userData);
            if (useGroups) {
                var count;
                if (isIndexed) count = geometry.index.count;
                else if (geometry.attributes.position !== undefined) count = geometry.attributes.position.count;
                else {
                    console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + i + ". The geometry must have either an index or a position attribute");
                    return null;
                }
                mergedGeometry.addGroup(offset, count, i);
                offset += count;
            }
        }
        // merge indices
        if (isIndexed) {
            var indexOffset = 0;
            var mergedIndex = [];
            for(var i = 0; i < geometries.length; ++i){
                var index = geometries[i].index;
                for(var j = 0; j < index.count; ++j)mergedIndex.push(index.getX(j) + indexOffset);
                indexOffset += geometries[i].attributes.position.count;
            }
            mergedGeometry.setIndex(mergedIndex);
        }
        // merge attributes
        for(var name in attributes){
            var mergedAttribute = this.mergeBufferAttributes(attributes[name]);
            if (!mergedAttribute) {
                console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + name + " attribute.");
                return null;
            }
            mergedGeometry.setAttribute(name, mergedAttribute);
        }
        // merge morph attributes
        for(var name in morphAttributes){
            var numMorphTargets = morphAttributes[name][0].length;
            if (numMorphTargets === 0) break;
            mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
            mergedGeometry.morphAttributes[name] = [];
            for(var i = 0; i < numMorphTargets; ++i){
                var morphAttributesToMerge = [];
                for(var j = 0; j < morphAttributes[name].length; ++j)morphAttributesToMerge.push(morphAttributes[name][j][i]);
                var mergedMorphAttribute = this.mergeBufferAttributes(morphAttributesToMerge);
                if (!mergedMorphAttribute) {
                    console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + name + " morphAttribute.");
                    return null;
                }
                mergedGeometry.morphAttributes[name].push(mergedMorphAttribute);
            }
        }
        return mergedGeometry;
    },
    /**
	 * @param {Array<BufferAttribute>} attributes
	 * @return {BufferAttribute}
	 */ mergeBufferAttributes: function(attributes) {
        var TypedArray;
        var itemSize;
        var normalized;
        var arrayLength = 0;
        for(var i = 0; i < attributes.length; ++i){
            var attribute = attributes[i];
            if (attribute.isInterleavedBufferAttribute) {
                console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported.");
                return null;
            }
            if (TypedArray === undefined) TypedArray = attribute.array.constructor;
            if (TypedArray !== attribute.array.constructor) {
                console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.");
                return null;
            }
            if (itemSize === undefined) itemSize = attribute.itemSize;
            if (itemSize !== attribute.itemSize) {
                console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.");
                return null;
            }
            if (normalized === undefined) normalized = attribute.normalized;
            if (normalized !== attribute.normalized) {
                console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.");
                return null;
            }
            arrayLength += attribute.array.length;
        }
        var array = new TypedArray(arrayLength);
        var offset = 0;
        for(var i = 0; i < attributes.length; ++i){
            array.set(attributes[i].array, offset);
            offset += attributes[i].array.length;
        }
        return new (0, _threeModuleJs.BufferAttribute)(array, itemSize, normalized);
    },
    /**
	 * @param {Array<BufferAttribute>} attributes
	 * @return {Array<InterleavedBufferAttribute>}
	 */ interleaveAttributes: function(attributes) {
        // Interleaves the provided attributes into an InterleavedBuffer and returns
        // a set of InterleavedBufferAttributes for each attribute
        var TypedArray;
        var arrayLength = 0;
        var stride = 0;
        // calculate the the length and type of the interleavedBuffer
        for(var i = 0, l = attributes.length; i < l; ++i){
            var attribute = attributes[i];
            if (TypedArray === undefined) TypedArray = attribute.array.constructor;
            if (TypedArray !== attribute.array.constructor) {
                console.error("AttributeBuffers of different types cannot be interleaved");
                return null;
            }
            arrayLength += attribute.array.length;
            stride += attribute.itemSize;
        }
        // Create the set of buffer attributes
        var interleavedBuffer = new (0, _threeModuleJs.InterleavedBuffer)(new TypedArray(arrayLength), stride);
        var offset = 0;
        var res = [];
        var getters = [
            "getX",
            "getY",
            "getZ",
            "getW"
        ];
        var setters = [
            "setX",
            "setY",
            "setZ",
            "setW"
        ];
        for(var j = 0, l = attributes.length; j < l; j++){
            var attribute = attributes[j];
            var itemSize = attribute.itemSize;
            var count = attribute.count;
            var iba = new (0, _threeModuleJs.InterleavedBufferAttribute)(interleavedBuffer, itemSize, offset, attribute.normalized);
            res.push(iba);
            offset += itemSize;
            // Move the data for each attribute into the new interleavedBuffer
            // at the appropriate offset
            for(var c = 0; c < count; c++)for(var k = 0; k < itemSize; k++)iba[setters[k]](c, attribute[getters[k]](c));
        }
        return res;
    },
    /**
	 * @param {Array<BufferGeometry>} geometry
	 * @return {number}
	 */ estimateBytesUsed: function(geometry) {
        // Return the estimated memory used by this geometry in bytes
        // Calculate using itemSize, count, and BYTES_PER_ELEMENT to account
        // for InterleavedBufferAttributes.
        var mem = 0;
        for(var name in geometry.attributes){
            var attr = geometry.getAttribute(name);
            mem += attr.count * attr.itemSize * attr.array.BYTES_PER_ELEMENT;
        }
        var indices = geometry.getIndex();
        mem += indices ? indices.count * indices.itemSize * indices.array.BYTES_PER_ELEMENT : 0;
        return mem;
    },
    /**
	 * @param {BufferGeometry} geometry
	 * @param {number} tolerance
	 * @return {BufferGeometry>}
	 */ mergeVertices: function(geometry, tolerance = 1e-4) {
        tolerance = Math.max(tolerance, Number.EPSILON);
        // Generate an index buffer if the geometry doesn't have one, or optimize it
        // if it's already available.
        var hashToIndex = {};
        var indices = geometry.getIndex();
        var positions = geometry.getAttribute("position");
        var vertexCount = indices ? indices.count : positions.count;
        // next value for triangle indices
        var nextIndex = 0;
        // attributes and new attribute arrays
        var attributeNames = Object.keys(geometry.attributes);
        var attrArrays = {};
        var morphAttrsArrays = {};
        var newIndices = [];
        var getters = [
            "getX",
            "getY",
            "getZ",
            "getW"
        ];
        // initialize the arrays
        for(var i = 0, l = attributeNames.length; i < l; i++){
            var name = attributeNames[i];
            attrArrays[name] = [];
            var morphAttr = geometry.morphAttributes[name];
            if (morphAttr) morphAttrsArrays[name] = new Array(morphAttr.length).fill().map(()=>[]);
        }
        // convert the error tolerance to an amount of decimal places to truncate to
        var decimalShift = Math.log10(1 / tolerance);
        var shiftMultiplier = Math.pow(10, decimalShift);
        for(var i = 0; i < vertexCount; i++){
            var index = indices ? indices.getX(i) : i;
            // Generate a hash for the vertex attributes at the current index 'i'
            var hash = "";
            for(var j = 0, l = attributeNames.length; j < l; j++){
                var name = attributeNames[j];
                var attribute = geometry.getAttribute(name);
                var itemSize = attribute.itemSize;
                for(var k = 0; k < itemSize; k++)// double tilde truncates the decimal value
                hash += `${~~(attribute[getters[k]](index) * shiftMultiplier)},`;
            }
            // Add another reference to the vertex if it's already
            // used by another index
            if (hash in hashToIndex) newIndices.push(hashToIndex[hash]);
            else {
                // copy data to the new index in the attribute arrays
                for(var j = 0, l = attributeNames.length; j < l; j++){
                    var name = attributeNames[j];
                    var attribute = geometry.getAttribute(name);
                    var morphAttr = geometry.morphAttributes[name];
                    var itemSize = attribute.itemSize;
                    var newarray = attrArrays[name];
                    var newMorphArrays = morphAttrsArrays[name];
                    for(var k = 0; k < itemSize; k++){
                        var getterFunc = getters[k];
                        newarray.push(attribute[getterFunc](index));
                        if (morphAttr) for(var m = 0, ml = morphAttr.length; m < ml; m++)newMorphArrays[m].push(morphAttr[m][getterFunc](index));
                    }
                }
                hashToIndex[hash] = nextIndex;
                newIndices.push(nextIndex);
                nextIndex++;
            }
        }
        // Generate typed arrays from new attribute arrays and update
        // the attributeBuffers
        const result = geometry.clone();
        for(var i = 0, l = attributeNames.length; i < l; i++){
            var name = attributeNames[i];
            var oldAttribute = geometry.getAttribute(name);
            var buffer = new oldAttribute.array.constructor(attrArrays[name]);
            var attribute = new (0, _threeModuleJs.BufferAttribute)(buffer, oldAttribute.itemSize, oldAttribute.normalized);
            result.setAttribute(name, attribute);
            // Update the attribute arrays
            if (name in morphAttrsArrays) for(var j = 0; j < morphAttrsArrays[name].length; j++){
                var oldMorphAttribute = geometry.morphAttributes[name][j];
                var buffer = new oldMorphAttribute.array.constructor(morphAttrsArrays[name][j]);
                var morphAttribute = new (0, _threeModuleJs.BufferAttribute)(buffer, oldMorphAttribute.itemSize, oldMorphAttribute.normalized);
                result.morphAttributes[name][j] = morphAttribute;
            }
        }
        // indices
        result.setIndex(newIndices);
        return result;
    },
    /**
	 * @param {BufferGeometry} geometry
	 * @param {number} drawMode
	 * @return {BufferGeometry>}
	 */ toTrianglesDrawMode: function(geometry, drawMode) {
        if (drawMode === (0, _threeModuleJs.TrianglesDrawMode)) {
            console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
            return geometry;
        }
        if (drawMode === (0, _threeModuleJs.TriangleFanDrawMode) || drawMode === (0, _threeModuleJs.TriangleStripDrawMode)) {
            var index = geometry.getIndex();
            // generate index if not present
            if (index === null) {
                var indices = [];
                var position = geometry.getAttribute("position");
                if (position !== undefined) {
                    for(var i = 0; i < position.count; i++)indices.push(i);
                    geometry.setIndex(indices);
                    index = geometry.getIndex();
                } else {
                    console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
                    return geometry;
                }
            }
            //
            var numberOfTriangles = index.count - 2;
            var newIndices = [];
            if (drawMode === (0, _threeModuleJs.TriangleFanDrawMode)) // gl.TRIANGLE_FAN
            for(var i = 1; i <= numberOfTriangles; i++){
                newIndices.push(index.getX(0));
                newIndices.push(index.getX(i));
                newIndices.push(index.getX(i + 1));
            }
            else {
                // gl.TRIANGLE_STRIP
                for(var i = 0; i < numberOfTriangles; i++)if (i % 2 === 0) {
                    newIndices.push(index.getX(i));
                    newIndices.push(index.getX(i + 1));
                    newIndices.push(index.getX(i + 2));
                } else {
                    newIndices.push(index.getX(i + 2));
                    newIndices.push(index.getX(i + 1));
                    newIndices.push(index.getX(i));
                }
            }
            if (newIndices.length / 3 !== numberOfTriangles) console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
            // build final geometry
            var newGeometry = geometry.clone();
            newGeometry.setIndex(newIndices);
            newGeometry.clearGroups();
            return newGeometry;
        } else {
            console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", drawMode);
            return geometry;
        }
    }
};

},{"../../../build/three.module.js":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gmIOE","7SwCM"], "7SwCM", "parcelRequire26b9")

//# sourceMappingURL=index.f18de3a7.js.map
