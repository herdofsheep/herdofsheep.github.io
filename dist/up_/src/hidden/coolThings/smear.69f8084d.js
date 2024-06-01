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
})({"5QAGb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "53fca31169f8084d";
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

},{}],"4n0f9":[function(require,module,exports) {
(function() {
    "use strict";
    var root = this;
    var has_require = true;
    var THREE = root.THREE || has_require && require("a464209eac991673");
    if (!THREE) throw new Error("MeshLine requires three.js");
    class MeshLine extends THREE.BufferGeometry {
        constructor(){
            super();
            this.isMeshLine = true;
            this.type = "MeshLine";
            this.positions = [];
            this.previous = [];
            this.next = [];
            this.side = [];
            this.width = [];
            this.indices_array = [];
            this.uvs = [];
            this.counters = [];
            this._points = [];
            this._geom = null;
            this.widthCallback = null;
            // Used to raycast
            this.matrixWorld = new THREE.Matrix4();
            Object.defineProperties(this, {
                // this is now a bufferGeometry
                // add getter to support previous api
                geometry: {
                    enumerable: true,
                    get: function() {
                        return this;
                    }
                },
                geom: {
                    enumerable: true,
                    get: function() {
                        return this._geom;
                    },
                    set: function(value) {
                        this.setGeometry(value, this.widthCallback);
                    }
                },
                // for declaritive architectures
                // to return the same value that sets the points
                // eg. this.points = points
                // console.log(this.points) -> points
                points: {
                    enumerable: true,
                    get: function() {
                        return this._points;
                    },
                    set: function(value) {
                        this.setPoints(value, this.widthCallback);
                    }
                }
            });
        }
    }
    MeshLine.prototype.setMatrixWorld = function(matrixWorld) {
        this.matrixWorld = matrixWorld;
    };
    // setting via a geometry is rather superfluous
    // as you're creating a unecessary geometry just to throw away
    // but exists to support previous api
    MeshLine.prototype.setGeometry = function(g, c) {
        // as the input geometry are mutated we store them
        // for later retreival when necessary (declaritive architectures)
        this._geometry = g;
        this.setPoints(g.getAttribute("position").array, c);
    };
    MeshLine.prototype.setPoints = function(points, wcb) {
        if (!(points instanceof Float32Array) && !(points instanceof Array)) {
            console.error("ERROR: The BufferArray of points is not instancied correctly.");
            return;
        }
        // as the points are mutated we store them
        // for later retreival when necessary (declaritive architectures)
        this._points = points;
        this.widthCallback = wcb;
        this.positions = [];
        this.counters = [];
        if (points.length && points[0] instanceof THREE.Vector3) // could transform Vector3 array into the array used below
        // but this approach will only loop through the array once
        // and is more performant
        for(var j = 0; j < points.length; j++){
            var p = points[j];
            var c = j / points.length;
            this.positions.push(p.x, p.y, p.z);
            this.positions.push(p.x, p.y, p.z);
            this.counters.push(c);
            this.counters.push(c);
        }
        else for(var j = 0; j < points.length; j += 3){
            var c = j / points.length;
            this.positions.push(points[j], points[j + 1], points[j + 2]);
            this.positions.push(points[j], points[j + 1], points[j + 2]);
            this.counters.push(c);
            this.counters.push(c);
        }
        this.process();
    };
    function MeshLineRaycast(raycaster, intersects) {
        var inverseMatrix = new THREE.Matrix4();
        var ray = new THREE.Ray();
        var sphere = new THREE.Sphere();
        var interRay = new THREE.Vector3();
        var geometry = this.geometry;
        // Checking boundingSphere distance to ray
        if (!geometry.boundingSphere) geometry.computeBoundingSphere();
        sphere.copy(geometry.boundingSphere);
        sphere.applyMatrix4(this.matrixWorld);
        if (raycaster.ray.intersectSphere(sphere, interRay) === false) return;
        inverseMatrix.copy(this.matrixWorld).invert();
        ray.copy(raycaster.ray).applyMatrix4(inverseMatrix);
        var vStart = new THREE.Vector3();
        var vEnd = new THREE.Vector3();
        var interSegment = new THREE.Vector3();
        var step = this instanceof THREE.LineSegments ? 2 : 1;
        var index = geometry.index;
        var attributes = geometry.attributes;
        if (index !== null) {
            var indices = index.array;
            var positions = attributes.position.array;
            var widths = attributes.width.array;
            for(var i = 0, l = indices.length - 1; i < l; i += step){
                var a = indices[i];
                var b = indices[i + 1];
                vStart.fromArray(positions, a * 3);
                vEnd.fromArray(positions, b * 3);
                var width = widths[Math.floor(i / 3)] !== undefined ? widths[Math.floor(i / 3)] : 1;
                var precision = raycaster.params.Line.threshold + this.material.lineWidth * width / 2;
                var precisionSq = precision * precision;
                var distSq = ray.distanceSqToSegment(vStart, vEnd, interRay, interSegment);
                if (distSq > precisionSq) continue;
                interRay.applyMatrix4(this.matrixWorld) //Move back to world space for distance calculation
                ;
                var distance = raycaster.ray.origin.distanceTo(interRay);
                if (distance < raycaster.near || distance > raycaster.far) continue;
                intersects.push({
                    distance: distance,
                    // What do we want? intersection point on the ray or on the segment??
                    // point: raycaster.ray.at( distance ),
                    point: interSegment.clone().applyMatrix4(this.matrixWorld),
                    index: i,
                    face: null,
                    faceIndex: null,
                    object: this
                });
                // make event only fire once
                i = l;
            }
        }
    }
    MeshLine.prototype.raycast = MeshLineRaycast;
    MeshLine.prototype.compareV3 = function(a, b) {
        var aa = a * 6;
        var ab = b * 6;
        return this.positions[aa] === this.positions[ab] && this.positions[aa + 1] === this.positions[ab + 1] && this.positions[aa + 2] === this.positions[ab + 2];
    };
    MeshLine.prototype.copyV3 = function(a) {
        var aa = a * 6;
        return [
            this.positions[aa],
            this.positions[aa + 1],
            this.positions[aa + 2]
        ];
    };
    MeshLine.prototype.process = function() {
        var l = this.positions.length / 6;
        this.previous = [];
        this.next = [];
        this.side = [];
        this.width = [];
        this.indices_array = [];
        this.uvs = [];
        var w;
        var v;
        // initial previous points
        if (this.compareV3(0, l - 1)) v = this.copyV3(l - 2);
        else v = this.copyV3(0);
        this.previous.push(v[0], v[1], v[2]);
        this.previous.push(v[0], v[1], v[2]);
        for(var j = 0; j < l; j++){
            // sides
            this.side.push(1);
            this.side.push(-1);
            // widths
            if (this.widthCallback) w = this.widthCallback(j / (l - 1));
            else w = 1;
            this.width.push(w);
            this.width.push(w);
            // uvs
            this.uvs.push(j / (l - 1), 0);
            this.uvs.push(j / (l - 1), 1);
            if (j < l - 1) {
                // points previous to poisitions
                v = this.copyV3(j);
                this.previous.push(v[0], v[1], v[2]);
                this.previous.push(v[0], v[1], v[2]);
                // indices
                var n = j * 2;
                this.indices_array.push(n, n + 1, n + 2);
                this.indices_array.push(n + 2, n + 1, n + 3);
            }
            if (j > 0) {
                // points after poisitions
                v = this.copyV3(j);
                this.next.push(v[0], v[1], v[2]);
                this.next.push(v[0], v[1], v[2]);
            }
        }
        // last next point
        if (this.compareV3(l - 1, 0)) v = this.copyV3(1);
        else v = this.copyV3(l - 1);
        this.next.push(v[0], v[1], v[2]);
        this.next.push(v[0], v[1], v[2]);
        // redefining the attribute seems to prevent range errors
        // if the user sets a differing number of vertices
        if (!this._attributes || this._attributes.position.count !== this.positions.length) this._attributes = {
            position: new THREE.BufferAttribute(new Float32Array(this.positions), 3),
            previous: new THREE.BufferAttribute(new Float32Array(this.previous), 3),
            next: new THREE.BufferAttribute(new Float32Array(this.next), 3),
            side: new THREE.BufferAttribute(new Float32Array(this.side), 1),
            width: new THREE.BufferAttribute(new Float32Array(this.width), 1),
            uv: new THREE.BufferAttribute(new Float32Array(this.uvs), 2),
            index: new THREE.BufferAttribute(new Uint16Array(this.indices_array), 1),
            counters: new THREE.BufferAttribute(new Float32Array(this.counters), 1)
        };
        else {
            this._attributes.position.copyArray(new Float32Array(this.positions));
            this._attributes.position.needsUpdate = true;
            this._attributes.previous.copyArray(new Float32Array(this.previous));
            this._attributes.previous.needsUpdate = true;
            this._attributes.next.copyArray(new Float32Array(this.next));
            this._attributes.next.needsUpdate = true;
            this._attributes.side.copyArray(new Float32Array(this.side));
            this._attributes.side.needsUpdate = true;
            this._attributes.width.copyArray(new Float32Array(this.width));
            this._attributes.width.needsUpdate = true;
            this._attributes.uv.copyArray(new Float32Array(this.uvs));
            this._attributes.uv.needsUpdate = true;
            this._attributes.index.copyArray(new Uint16Array(this.indices_array));
            this._attributes.index.needsUpdate = true;
        }
        this.setAttribute("position", this._attributes.position);
        this.setAttribute("previous", this._attributes.previous);
        this.setAttribute("next", this._attributes.next);
        this.setAttribute("side", this._attributes.side);
        this.setAttribute("width", this._attributes.width);
        this.setAttribute("uv", this._attributes.uv);
        this.setAttribute("counters", this._attributes.counters);
        this.setIndex(this._attributes.index);
        this.computeBoundingSphere();
        this.computeBoundingBox();
    };
    function memcpy(src, srcOffset, dst, dstOffset, length) {
        var i;
        src = src.subarray || src.slice ? src : src.buffer;
        dst = dst.subarray || dst.slice ? dst : dst.buffer;
        src = srcOffset ? src.subarray ? src.subarray(srcOffset, length && srcOffset + length) : src.slice(srcOffset, length && srcOffset + length) : src;
        if (dst.set) dst.set(src, dstOffset);
        else for(i = 0; i < src.length; i++)dst[i + dstOffset] = src[i];
        return dst;
    }
    /**
   * Fast method to advance the line by one position.  The oldest position is removed.
   * @param position
   */ MeshLine.prototype.advance = function(position) {
        var positions = this._attributes.position.array;
        var previous = this._attributes.previous.array;
        var next = this._attributes.next.array;
        var l = positions.length;
        // PREVIOUS
        memcpy(positions, 0, previous, 0, l);
        // POSITIONS
        memcpy(positions, 6, positions, 0, l - 6);
        positions[l - 6] = position.x;
        positions[l - 5] = position.y;
        positions[l - 4] = position.z;
        positions[l - 3] = position.x;
        positions[l - 2] = position.y;
        positions[l - 1] = position.z;
        // NEXT
        memcpy(positions, 6, next, 0, l - 6);
        next[l - 6] = position.x;
        next[l - 5] = position.y;
        next[l - 4] = position.z;
        next[l - 3] = position.x;
        next[l - 2] = position.y;
        next[l - 1] = position.z;
        this._attributes.position.needsUpdate = true;
        this._attributes.previous.needsUpdate = true;
        this._attributes.next.needsUpdate = true;
    };
    THREE.ShaderChunk["meshline_vert"] = [
        "",
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        THREE.ShaderChunk.fog_pars_vertex,
        "",
        "attribute vec3 previous;",
        "attribute vec3 next;",
        "attribute float side;",
        "attribute float width;",
        "attribute float counters;",
        "",
        "uniform vec2 resolution;",
        "uniform float lineWidth;",
        "uniform vec3 color;",
        "uniform float opacity;",
        "uniform float sizeAttenuation;",
        "",
        "varying vec2 vUV;",
        "varying vec4 vColor;",
        "varying float vCounters;",
        "",
        "vec2 fix( vec4 i, float aspect ) {",
        "",
        "    vec2 res = i.xy / i.w;",
        "    res.x *= aspect;",
        "	 vCounters = counters;",
        "    return res;",
        "",
        "}",
        "",
        "void main() {",
        "",
        "    float aspect = resolution.x / resolution.y;",
        "",
        "    vColor = vec4( color, opacity );",
        "    vUV = uv;",
        "",
        "    mat4 m = projectionMatrix * modelViewMatrix;",
        "    vec4 finalPosition = m * vec4( position, 1.0 );",
        "    vec4 prevPos = m * vec4( previous, 1.0 );",
        "    vec4 nextPos = m * vec4( next, 1.0 );",
        "",
        "    vec2 currentP = fix( finalPosition, aspect );",
        "    vec2 prevP = fix( prevPos, aspect );",
        "    vec2 nextP = fix( nextPos, aspect );",
        "",
        "    float w = lineWidth * width;",
        "",
        "    vec2 dir;",
        "    if( nextP == currentP ) dir = normalize( currentP - prevP );",
        "    else if( prevP == currentP ) dir = normalize( nextP - currentP );",
        "    else {",
        "        vec2 dir1 = normalize( currentP - prevP );",
        "        vec2 dir2 = normalize( nextP - currentP );",
        "        dir = normalize( dir1 + dir2 );",
        "",
        "        vec2 perp = vec2( -dir1.y, dir1.x );",
        "        vec2 miter = vec2( -dir.y, dir.x );",
        "        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );",
        "",
        "    }",
        "",
        "    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;",
        "    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );",
        "    normal.xy *= .5 * w;",
        "    normal *= projectionMatrix;",
        "    if( sizeAttenuation == 0. ) {",
        "        normal.xy *= finalPosition.w;",
        "        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;",
        "    }",
        "",
        "    finalPosition.xy += normal.xy * side;",
        "",
        "    gl_Position = finalPosition;",
        "",
        THREE.ShaderChunk.logdepthbuf_vertex,
        THREE.ShaderChunk.fog_vertex && "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        THREE.ShaderChunk.fog_vertex,
        "}"
    ].join("\n");
    THREE.ShaderChunk["meshline_frag"] = [
        "",
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "",
        "uniform sampler2D map;",
        "uniform sampler2D alphaMap;",
        "uniform float useMap;",
        "uniform float useAlphaMap;",
        "uniform float useDash;",
        "uniform float dashArray;",
        "uniform float dashOffset;",
        "uniform float dashRatio;",
        "uniform float visibility;",
        "uniform float alphaTest;",
        "uniform vec2 repeat;",
        "",
        "varying vec2 vUV;",
        "varying vec4 vColor;",
        "varying float vCounters;",
        "",
        "void main() {",
        "",
        THREE.ShaderChunk.logdepthbuf_fragment,
        "",
        "    vec4 c = vColor;",
        "    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );",
        "    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;",
        "    if( c.a < alphaTest ) discard;",
        "    if( useDash == 1. ){",
        "        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));",
        "    }",
        "    gl_FragColor = c;",
        "    gl_FragColor.a *= step(vCounters, visibility);",
        "",
        THREE.ShaderChunk.fog_fragment,
        "}"
    ].join("\n");
    class MeshLineMaterial extends THREE.ShaderMaterial {
        constructor(parameters){
            super({
                uniforms: Object.assign({}, THREE.UniformsLib.fog, {
                    lineWidth: {
                        value: 1
                    },
                    map: {
                        value: null
                    },
                    useMap: {
                        value: 0
                    },
                    alphaMap: {
                        value: null
                    },
                    useAlphaMap: {
                        value: 0
                    },
                    color: {
                        value: new THREE.Color(0xffffff)
                    },
                    opacity: {
                        value: 1
                    },
                    resolution: {
                        value: new THREE.Vector2(1, 1)
                    },
                    sizeAttenuation: {
                        value: 1
                    },
                    dashArray: {
                        value: 0
                    },
                    dashOffset: {
                        value: 0
                    },
                    dashRatio: {
                        value: 0.5
                    },
                    useDash: {
                        value: 0
                    },
                    visibility: {
                        value: 1
                    },
                    alphaTest: {
                        value: 0
                    },
                    repeat: {
                        value: new THREE.Vector2(1, 1)
                    }
                }),
                vertexShader: THREE.ShaderChunk.meshline_vert,
                fragmentShader: THREE.ShaderChunk.meshline_frag
            });
            this.isMeshLineMaterial = true;
            this.type = "MeshLineMaterial";
            Object.defineProperties(this, {
                lineWidth: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.lineWidth.value;
                    },
                    set: function(value) {
                        this.uniforms.lineWidth.value = value;
                    }
                },
                map: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.map.value;
                    },
                    set: function(value) {
                        this.uniforms.map.value = value;
                    }
                },
                useMap: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.useMap.value;
                    },
                    set: function(value) {
                        this.uniforms.useMap.value = value;
                    }
                },
                alphaMap: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.alphaMap.value;
                    },
                    set: function(value) {
                        this.uniforms.alphaMap.value = value;
                    }
                },
                useAlphaMap: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.useAlphaMap.value;
                    },
                    set: function(value) {
                        this.uniforms.useAlphaMap.value = value;
                    }
                },
                color: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.color.value;
                    },
                    set: function(value) {
                        this.uniforms.color.value = value;
                    }
                },
                opacity: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.opacity.value;
                    },
                    set: function(value) {
                        this.uniforms.opacity.value = value;
                    }
                },
                resolution: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.resolution.value;
                    },
                    set: function(value) {
                        this.uniforms.resolution.value.copy(value);
                    }
                },
                sizeAttenuation: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.sizeAttenuation.value;
                    },
                    set: function(value) {
                        this.uniforms.sizeAttenuation.value = value;
                    }
                },
                dashArray: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.dashArray.value;
                    },
                    set: function(value) {
                        this.uniforms.dashArray.value = value;
                        this.useDash = value !== 0 ? 1 : 0;
                    }
                },
                dashOffset: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.dashOffset.value;
                    },
                    set: function(value) {
                        this.uniforms.dashOffset.value = value;
                    }
                },
                dashRatio: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.dashRatio.value;
                    },
                    set: function(value) {
                        this.uniforms.dashRatio.value = value;
                    }
                },
                useDash: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.useDash.value;
                    },
                    set: function(value) {
                        this.uniforms.useDash.value = value;
                    }
                },
                visibility: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.visibility.value;
                    },
                    set: function(value) {
                        this.uniforms.visibility.value = value;
                    }
                },
                alphaTest: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.alphaTest.value;
                    },
                    set: function(value) {
                        this.uniforms.alphaTest.value = value;
                    }
                },
                repeat: {
                    enumerable: true,
                    get: function() {
                        return this.uniforms.repeat.value;
                    },
                    set: function(value) {
                        this.uniforms.repeat.value.copy(value);
                    }
                }
            });
            this.setValues(parameters);
        }
    }
    MeshLineMaterial.prototype.copy = function(source) {
        THREE.ShaderMaterial.prototype.copy.call(this, source);
        this.lineWidth = source.lineWidth;
        this.map = source.map;
        this.useMap = source.useMap;
        this.alphaMap = source.alphaMap;
        this.useAlphaMap = source.useAlphaMap;
        this.color.copy(source.color);
        this.opacity = source.opacity;
        this.resolution.copy(source.resolution);
        this.sizeAttenuation = source.sizeAttenuation;
        this.dashArray.copy(source.dashArray);
        this.dashOffset.copy(source.dashOffset);
        this.dashRatio.copy(source.dashRatio);
        this.useDash = source.useDash;
        this.visibility = source.visibility;
        this.alphaTest = source.alphaTest;
        this.repeat.copy(source.repeat);
        return this;
    };
    if (0, module.exports) exports = module.exports = {
        MeshLine: MeshLine,
        MeshLineMaterial: MeshLineMaterial,
        MeshLineRaycast: MeshLineRaycast
    };
    exports.MeshLine = MeshLine;
    exports.MeshLineMaterial = MeshLineMaterial;
    exports.MeshLineRaycast = MeshLineRaycast;
}).call(this);

},{"a464209eac991673":"ktPTu"}]},["5QAGb"], null, "parcelRequire26b9")

//# sourceMappingURL=smear.69f8084d.js.map
