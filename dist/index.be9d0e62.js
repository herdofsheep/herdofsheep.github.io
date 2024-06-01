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
})({"bCpBk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "684a7905be9d0e62";
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

},{}],"1AMKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrackballControls", ()=>TrackballControls);
var _three = require("three");
const _changeEvent = {
    type: "change"
};
const _startEvent = {
    type: "start"
};
const _endEvent = {
    type: "end"
};
class TrackballControls extends (0, _three.EventDispatcher) {
    constructor(object, domElement){
        super();
        if (domElement === undefined) console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.');
        if (domElement === document) console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
        const scope = this;
        const STATE = {
            NONE: -1,
            ROTATE: 0,
            ZOOM: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_ZOOM_PAN: 4
        };
        this.object = object;
        this.domElement = domElement;
        this.domElement.style.touchAction = "none"; // disable touch scroll
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
            "KeyA" /*A*/ ,
            "KeyS" /*S*/ ,
            "KeyD" /*D*/ 
        ];
        this.mouseButtons = {
            LEFT: (0, _three.MOUSE).ROTATE,
            MIDDLE: (0, _three.MOUSE).DOLLY,
            RIGHT: (0, _three.MOUSE).PAN
        };
        // internals
        this.target = new (0, _three.Vector3)();
        const EPS = 0.000001;
        const lastPosition = new (0, _three.Vector3)();
        let lastZoom = 1;
        let _state = STATE.NONE, _keyState = STATE.NONE, _touchZoomDistanceStart = 0, _touchZoomDistanceEnd = 0, _lastAngle = 0;
        const _eye = new (0, _three.Vector3)(), _movePrev = new (0, _three.Vector2)(), _moveCurr = new (0, _three.Vector2)(), _lastAxis = new (0, _three.Vector3)(), _zoomStart = new (0, _three.Vector2)(), _zoomEnd = new (0, _three.Vector2)(), _panStart = new (0, _three.Vector2)(), _panEnd = new (0, _three.Vector2)(), _pointers = [], _pointerPositions = {};
        // for reset
        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();
        this.up0 = this.object.up.clone();
        this.zoom0 = this.object.zoom;
        // methods
        this.handleResize = function() {
            const box = scope.domElement.getBoundingClientRect();
            // adjustments come from similar code in the jquery offset() function
            const d = scope.domElement.ownerDocument.documentElement;
            scope.screen.left = box.left + window.pageXOffset - d.clientLeft;
            scope.screen.top = box.top + window.pageYOffset - d.clientTop;
            scope.screen.width = box.width;
            scope.screen.height = box.height;
        };
        const getMouseOnScreen = function() {
            const vector = new (0, _three.Vector2)();
            return function getMouseOnScreen(pageX, pageY) {
                vector.set((pageX - scope.screen.left) / scope.screen.width, (pageY - scope.screen.top) / scope.screen.height);
                return vector;
            };
        }();
        const getMouseOnCircle = function() {
            const vector = new (0, _three.Vector2)();
            return function getMouseOnCircle(pageX, pageY) {
                vector.set((pageX - scope.screen.width * 0.5 - scope.screen.left) / (scope.screen.width * 0.5), (scope.screen.height + 2 * (scope.screen.top - pageY)) / scope.screen.width // screen.width intentional
                );
                return vector;
            };
        }();
        this.rotateCamera = function() {
            const axis = new (0, _three.Vector3)(), quaternion = new (0, _three.Quaternion)(), eyeDirection = new (0, _three.Vector3)(), objectUpDirection = new (0, _three.Vector3)(), objectSidewaysDirection = new (0, _three.Vector3)(), moveDirection = new (0, _three.Vector3)();
            return function rotateCamera() {
                moveDirection.set(_moveCurr.x - _movePrev.x, _moveCurr.y - _movePrev.y, 0);
                let angle = moveDirection.length();
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
            let factor;
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
            const mouseChange = new (0, _three.Vector2)(), objectUp = new (0, _three.Vector3)(), pan = new (0, _three.Vector3)();
            return function panCamera() {
                mouseChange.copy(_panEnd).sub(_panStart);
                if (mouseChange.lengthSq()) {
                    if (scope.object.isOrthographicCamera) {
                        const scale_x = (scope.object.right - scope.object.left) / scope.object.zoom / scope.domElement.clientWidth;
                        const scale_y = (scope.object.top - scope.object.bottom) / scope.object.zoom / scope.domElement.clientWidth;
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
                    scope.dispatchEvent(_changeEvent);
                    lastPosition.copy(scope.object.position);
                }
            } else if (scope.object.isOrthographicCamera) {
                scope.object.lookAt(scope.target);
                if (lastPosition.distanceToSquared(scope.object.position) > EPS || lastZoom !== scope.object.zoom) {
                    scope.dispatchEvent(_changeEvent);
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
            scope.dispatchEvent(_changeEvent);
            lastPosition.copy(scope.object.position);
            lastZoom = scope.object.zoom;
        };
        // listeners
        function onPointerDown(event) {
            if (scope.enabled === false) return;
            if (_pointers.length === 0) {
                scope.domElement.ownerDocument.addEventListener("pointermove", onPointerMove);
                scope.domElement.ownerDocument.addEventListener("pointerup", onPointerUp);
            }
            //
            addPointer(event);
            if (event.pointerType === "touch") onTouchStart(event);
            else onMouseDown(event);
        }
        function onPointerMove(event) {
            if (scope.enabled === false) return;
            if (event.pointerType === "touch") onTouchMove(event);
            else onMouseMove(event);
        }
        function onPointerUp(event) {
            if (scope.enabled === false) return;
            if (event.pointerType === "touch") onTouchEnd(event);
            else onMouseUp();
            //
            removePointer(event);
            if (_pointers.length === 0) {
                scope.domElement.ownerDocument.removeEventListener("pointermove", onPointerMove);
                scope.domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
            }
        }
        function onPointerCancel(event) {
            removePointer(event);
        }
        function keydown(event) {
            if (scope.enabled === false) return;
            window.removeEventListener("keydown", keydown);
            if (_keyState !== STATE.NONE) return;
            else if (event.code === scope.keys[STATE.ROTATE] && !scope.noRotate) _keyState = STATE.ROTATE;
            else if (event.code === scope.keys[STATE.ZOOM] && !scope.noZoom) _keyState = STATE.ZOOM;
            else if (event.code === scope.keys[STATE.PAN] && !scope.noPan) _keyState = STATE.PAN;
        }
        function keyup() {
            if (scope.enabled === false) return;
            _keyState = STATE.NONE;
            window.addEventListener("keydown", keydown);
        }
        function onMouseDown(event) {
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
            const state = _keyState !== STATE.NONE ? _keyState : _state;
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
            scope.domElement.ownerDocument.addEventListener("pointermove", onPointerMove);
            scope.domElement.ownerDocument.addEventListener("pointerup", onPointerUp);
            scope.dispatchEvent(_startEvent);
        }
        function onMouseMove(event) {
            const state = _keyState !== STATE.NONE ? _keyState : _state;
            if (state === STATE.ROTATE && !scope.noRotate) {
                _movePrev.copy(_moveCurr);
                _moveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
            } else if (state === STATE.ZOOM && !scope.noZoom) _zoomEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
            else if (state === STATE.PAN && !scope.noPan) _panEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
        }
        function onMouseUp() {
            _state = STATE.NONE;
            scope.domElement.ownerDocument.removeEventListener("pointermove", onPointerMove);
            scope.domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
            scope.dispatchEvent(_endEvent);
        }
        function onMouseWheel(event) {
            if (scope.enabled === false) return;
            if (scope.noZoom === true) return;
            event.preventDefault();
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
            scope.dispatchEvent(_startEvent);
            scope.dispatchEvent(_endEvent);
        }
        function onTouchStart(event) {
            trackPointer(event);
            switch(_pointers.length){
                case 1:
                    _state = STATE.TOUCH_ROTATE;
                    _moveCurr.copy(getMouseOnCircle(_pointers[0].pageX, _pointers[0].pageY));
                    _movePrev.copy(_moveCurr);
                    break;
                default:
                    _state = STATE.TOUCH_ZOOM_PAN;
                    const dx = _pointers[0].pageX - _pointers[1].pageX;
                    const dy = _pointers[0].pageY - _pointers[1].pageY;
                    _touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt(dx * dx + dy * dy);
                    const x = (_pointers[0].pageX + _pointers[1].pageX) / 2;
                    const y = (_pointers[0].pageY + _pointers[1].pageY) / 2;
                    _panStart.copy(getMouseOnScreen(x, y));
                    _panEnd.copy(_panStart);
                    break;
            }
            scope.dispatchEvent(_startEvent);
        }
        function onTouchMove(event) {
            trackPointer(event);
            switch(_pointers.length){
                case 1:
                    _movePrev.copy(_moveCurr);
                    _moveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
                    break;
                default:
                    const position = getSecondPointerPosition(event);
                    const dx = event.pageX - position.x;
                    const dy = event.pageY - position.y;
                    _touchZoomDistanceEnd = Math.sqrt(dx * dx + dy * dy);
                    const x = (event.pageX + position.x) / 2;
                    const y = (event.pageY + position.y) / 2;
                    _panEnd.copy(getMouseOnScreen(x, y));
                    break;
            }
        }
        function onTouchEnd(event) {
            switch(_pointers.length){
                case 0:
                    _state = STATE.NONE;
                    break;
                case 1:
                    _state = STATE.TOUCH_ROTATE;
                    _moveCurr.copy(getMouseOnCircle(event.pageX, event.pageY));
                    _movePrev.copy(_moveCurr);
                    break;
            }
            scope.dispatchEvent(_endEvent);
        }
        function contextmenu(event) {
            if (scope.enabled === false) return;
            event.preventDefault();
        }
        function addPointer(event) {
            _pointers.push(event);
        }
        function removePointer(event) {
            delete _pointerPositions[event.pointerId];
            for(let i = 0; i < _pointers.length; i++)if (_pointers[i].pointerId == event.pointerId) {
                _pointers.splice(i, 1);
                return;
            }
        }
        function trackPointer(event) {
            let position = _pointerPositions[event.pointerId];
            if (position === undefined) {
                position = new (0, _three.Vector2)();
                _pointerPositions[event.pointerId] = position;
            }
            position.set(event.pageX, event.pageY);
        }
        function getSecondPointerPosition(event) {
            const pointer = event.pointerId === _pointers[0].pointerId ? _pointers[1] : _pointers[0];
            return _pointerPositions[pointer.pointerId];
        }
        this.dispose = function() {
            scope.domElement.removeEventListener("contextmenu", contextmenu);
            scope.domElement.removeEventListener("pointerdown", onPointerDown);
            scope.domElement.removeEventListener("pointercancel", onPointerCancel);
            scope.domElement.removeEventListener("wheel", onMouseWheel);
            window.removeEventListener("keydown", keydown);
            window.removeEventListener("keyup", keyup);
        };
        this.domElement.addEventListener("contextmenu", contextmenu);
        this.domElement.addEventListener("pointerdown", onPointerDown);
        this.domElement.addEventListener("pointercancel", onPointerCancel);
        this.domElement.addEventListener("wheel", onMouseWheel, {
            passive: false
        });
        window.addEventListener("keydown", keydown);
        window.addEventListener("keyup", keyup);
        this.handleResize();
        // force an update at start
        this.update();
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bCpBk"], null, "parcelRequire26b9")

//# sourceMappingURL=index.be9d0e62.js.map
