/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {});
}(this, function(t) {
    "use strict";
    const e = "130", n = 100, i = 300, r = 301, s = 302, a = 303, o = 304, l = 306, c = 307, h = 1e3, u = 1001, d = 1002, p = 1003, m = 1004, f = 1005, g = 1006, v = 1007, y = 1008, x = 1009, _ = 1012, b = 1014, M = 1015, w = 1016, S = 1020, T = 1022, E = 1023, A = 1026, L = 1027, R = 33776, C = 33777, P = 33778, D = 33779, I = 35840, N = 35841, B = 35842, z = 35843, F = 37492, O = 37496, H = 2300, U = 2301, G = 2302, k = 2400, V = 2401, W = 2402, j = 2500, q = 2501, X = 3e3, Y = 3001, J = 3007, Z = 3002, Q = 3004, K = 3005, $ = 3006, tt = 7680, et = 35044, nt = 35048, it = "300 es";
    class rt {
        addEventListener(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
        }
        hasEventListener(t, e) {
            if (void 0 === this._listeners) return !1;
            const n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e);
        }
        removeEventListener(t, e) {
            if (void 0 === this._listeners) return;
            const n = this._listeners[t];
            if (void 0 !== n) {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1);
            }
        }
        dispatchEvent(t) {
            if (void 0 === this._listeners) return;
            const e = this._listeners[t.type];
            if (void 0 !== e) {
                t.target = this;
                const n = e.slice(0);
                for(let e = 0, i = n.length; e < i; e++)n[e].call(this, t);
                t.target = null;
            }
        }
    }
    const st = [];
    for(let t = 0; t < 256; t++)st[t] = (t < 16 ? "0" : "") + t.toString(16);
    let at = 1234567;
    const ot = Math.PI / 180, lt = 180 / Math.PI;
    function ct() {
        const t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
        return (st[255 & t] + st[t >> 8 & 255] + st[t >> 16 & 255] + st[t >> 24 & 255] + "-" + st[255 & e] + st[e >> 8 & 255] + "-" + st[e >> 16 & 15 | 64] + st[e >> 24 & 255] + "-" + st[63 & n | 128] + st[n >> 8 & 255] + "-" + st[n >> 16 & 255] + st[n >> 24 & 255] + st[255 & i] + st[i >> 8 & 255] + st[i >> 16 & 255] + st[i >> 24 & 255]).toUpperCase();
    }
    function ht(t, e, n) {
        return Math.max(e, Math.min(n, t));
    }
    function ut(t, e) {
        return (t % e + e) % e;
    }
    function dt(t, e, n) {
        return (1 - n) * t + n * e;
    }
    function pt(t) {
        return 0 == (t & t - 1) && 0 !== t;
    }
    function mt(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    }
    function ft(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
    }
    var gt = Object.freeze({
        __proto__: null,
        DEG2RAD: ot,
        RAD2DEG: lt,
        generateUUID: ct,
        clamp: ht,
        euclideanModulo: ut,
        mapLinear: function(t, e, n, i, r) {
            return i + (t - e) * (r - i) / (n - e);
        },
        inverseLerp: function(t, e, n) {
            return t !== e ? (n - t) / (e - t) : 0;
        },
        lerp: dt,
        damp: function(t, e, n, i) {
            return dt(t, e, 1 - Math.exp(-n * i));
        },
        pingpong: function(t, e = 1) {
            return e - Math.abs(ut(t, 2 * e) - e);
        },
        smoothstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
        },
        smootherstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1));
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t);
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random());
        },
        seededRandom: function(t) {
            return void 0 !== t && (at = t % 2147483647), at = 16807 * at % 2147483647, (at - 1) / 2147483646;
        },
        degToRad: function(t) {
            return t * ot;
        },
        radToDeg: function(t) {
            return t * lt;
        },
        isPowerOfTwo: pt,
        ceilPowerOfTwo: mt,
        floorPowerOfTwo: ft,
        setQuaternionFromProperEuler: function(t, e, n, i, r) {
            const s = Math.cos, a = Math.sin, o = s(n / 2), l = a(n / 2), c = s((e + i) / 2), h = a((e + i) / 2), u = s((e - i) / 2), d = a((e - i) / 2), p = s((i - e) / 2), m = a((i - e) / 2);
            switch(r){
                case "XYX":
                    t.set(o * h, l * u, l * d, o * c);
                    break;
                case "YZY":
                    t.set(l * d, o * h, l * u, o * c);
                    break;
                case "ZXZ":
                    t.set(l * u, l * d, o * h, o * c);
                    break;
                case "XZX":
                    t.set(o * h, l * m, l * p, o * c);
                    break;
                case "YXY":
                    t.set(l * p, o * h, l * m, o * c);
                    break;
                case "ZYZ":
                    t.set(l * m, l * p, o * h, o * c);
                    break;
                default:
                    console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
            }
        }
    });
    class vt {
        constructor(t = 0, e = 0){
            this.x = t, this.y = e;
        }
        get width() {
            return this.x;
        }
        set width(t) {
            this.x = t;
        }
        get height() {
            return this.y;
        }
        set height(t) {
            this.y = t;
        }
        set(t, e) {
            return this.x = t, this.y = e, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this);
        }
        addScalar(t) {
            return this.x += t, this.y += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this);
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this;
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
            const e = this.x, n = this.y, i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y;
        }
        cross(t) {
            return this.x * t.y - this.y * t.x;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, n = this.y - t.y;
            return e * e + n * n;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t;
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this;
        }
        rotateAround(t, e) {
            const n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, s = this.y - t.y;
            return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
    }
    vt.prototype.isVector2 = !0;
    class yt {
        constructor(){
            this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t, e, n, i, r, s, a, o, l) {
            const c = this.elements;
            return c[0] = t, c[1] = i, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
            const e = this.elements, n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
        }
        extractBasis(t, e, n) {
            return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t) {
            return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const n = t.elements, i = e.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l = n[1], c = n[4], h = n[7], u = n[2], d = n[5], p = n[8], m = i[0], f = i[3], g = i[6], v = i[1], y = i[4], x = i[7], _ = i[2], b = i[5], M = i[8];
            return r[0] = s * m + a * v + o * _, r[3] = s * f + a * y + o * b, r[6] = s * g + a * x + o * M, r[1] = l * m + c * v + h * _, r[4] = l * f + c * y + h * b, r[7] = l * g + c * x + h * M, r[2] = u * m + d * v + p * _, r[5] = u * f + d * y + p * b, r[8] = u * g + d * x + p * M, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8];
            return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o;
        }
        invert() {
            const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8], h = c * s - a * l, u = a * o - c * r, d = l * r - s * o, p = e * h + n * u + i * d;
            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t[0] = h * m, t[1] = (i * l - c * n) * m, t[2] = (a * n - i * s) * m, t[3] = u * m, t[4] = (c * e - i * o) * m, t[5] = (i * r - a * e) * m, t[6] = d * m, t[7] = (n * o - l * e) * m, t[8] = (s * e - n * r) * m, this;
        }
        transpose() {
            let t;
            const e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
        }
        setUvTransform(t, e, n, i, r, s, a) {
            const o = Math.cos(r), l = Math.sin(r);
            return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this;
        }
        scale(t, e) {
            const n = this.elements;
            return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this;
        }
        rotate(t) {
            const e = Math.cos(t), n = Math.sin(t), i = this.elements, r = i[0], s = i[3], a = i[6], o = i[1], l = i[4], c = i[7];
            return i[0] = e * r + n * o, i[3] = e * s + n * l, i[6] = e * a + n * c, i[1] = -n * r + e * o, i[4] = -n * s + e * l, i[7] = -n * a + e * c, this;
        }
        translate(t, e) {
            const n = this.elements;
            return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this;
        }
        equals(t) {
            const e = this.elements, n = t.elements;
            for(let t = 0; t < 9; t++)if (e[t] !== n[t]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let n = 0; n < 9; n++)this.elements[n] = t[n + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
        }
        clone() {
            return (new this.constructor).fromArray(this.elements);
        }
    }
    let xt;
    yt.prototype.isMatrix3 = !0;
    class _t {
        static getDataURL(t) {
            if (/^data:/i.test(t.src)) return t.src;
            if ("undefined" == typeof HTMLCanvasElement) return t.src;
            let e;
            if (t instanceof HTMLCanvasElement) e = t;
            else {
                void 0 === xt && (xt = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), xt.width = t.width, xt.height = t.height;
                const n = xt.getContext("2d");
                t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = xt;
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png");
        }
    }
    let bt = 0;
    class Mt extends rt {
        constructor(t = Mt.DEFAULT_IMAGE, e = Mt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = 1, c = 3e3){
            super(), Object.defineProperty(this, "id", {
                value: bt++
            }), this.uuid = ct(), this.name = "", this.image = t, this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new vt(0, 0), this.repeat = new vt(1, 1), this.center = new vt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new yt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.version = 0, this.onUpdate = null;
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this;
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                const i = this.image;
                if (void 0 === i.uuid && (i.uuid = ct()), !e && void 0 === t.images[i.uuid]) {
                    let e;
                    if (Array.isArray(i)) {
                        e = [];
                        for(let t = 0, n = i.length; t < n; t++)i[t].isDataTexture ? e.push(wt(i[t].image)) : e.push(wt(i[t]));
                    } else e = wt(i);
                    t.images[i.uuid] = {
                        uuid: i.uuid,
                        url: e
                    };
                }
                n.image = i.uuid;
            }
            return e || (t.textures[this.uuid] = n), n;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(t) {
            if (this.mapping !== i) return t;
            if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch(this.wrapS){
                case h:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case u:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case d:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
            }
            if (t.y < 0 || t.y > 1) switch(this.wrapT){
                case h:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case u:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case d:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
            }
            return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
    }
    function wt(t) {
        return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? _t.getDataURL(t) : t.data ? {
            data: Array.prototype.slice.call(t.data),
            width: t.width,
            height: t.height,
            type: t.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    Mt.DEFAULT_IMAGE = void 0, Mt.DEFAULT_MAPPING = i, Mt.prototype.isTexture = !0;
    class St {
        constructor(t = 0, e = 0, n = 0, i = 1){
            this.x = t, this.y = e, this.z = n, this.w = i;
        }
        get width() {
            return this.z;
        }
        set width(t) {
            this.z = t;
        }
        get height() {
            return this.w;
        }
        set height(t) {
            this.w = t;
        }
        set(t, e, n, i) {
            return this.x = t, this.y = e, this.z = n, this.w = i, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setZ(t) {
            return this.z = t, this;
        }
        setW(t) {
            return this.w = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
        }
        applyMatrix4(t) {
            const e = this.x, n = this.y, i = this.z, r = this.w, s = t.elements;
            return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, n, i, r;
            const s = .01, a = .1, o = t.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], p = o[9], m = o[2], f = o[6], g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                const t = (l + 1) / 2, o = (d + 1) / 2, v = (g + 1) / 2, y = (c + u) / 4, x = (h + m) / 4, _ = (p + f) / 4;
                return t > o && t > v ? t < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = y / n, r = x / n) : o > v ? o < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = y / i, r = _ / i) : v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = x / r, i = _ / r), this.set(n, i, r, e), this;
            }
            let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
            return Math.abs(v) < .001 && (v = 1), this.x = (f - p) / v, this.y = (h - m) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
    }
    St.prototype.isVector4 = !0;
    class Tt extends rt {
        constructor(t, e, n = {}){
            super(), this.width = t, this.height = e, this.depth = 1, this.scissor = new St(0, 0, t, e), this.scissorTest = !1, this.viewport = new St(0, 0, t, e), this.texture = new Mt(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {
                width: t,
                height: e,
                depth: 1
            }, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : g, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null;
        }
        setTexture(t) {
            t.image = {
                width: this.width,
                height: this.height,
                depth: this.depth
            }, this.texture = t;
        }
        setSize(t, e, n = 1) {
            this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.image = {
                ...this.texture.image
            }, this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    Tt.prototype.isWebGLRenderTarget = !0;
    class Et extends Tt {
        constructor(t, e, n){
            super(t, e);
            const i = this.texture;
            this.texture = [];
            for(let t = 0; t < n; t++)this.texture[t] = i.clone();
        }
        setSize(t, e, n = 1) {
            if (this.width !== t || this.height !== e || this.depth !== n) {
                this.width = t, this.height = e, this.depth = n;
                for(let i = 0, r = this.texture.length; i < r; i++)this.texture[i].image.width = t, this.texture[i].image.height = e, this.texture[i].image.depth = n;
                this.dispose();
            }
            return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this;
        }
        copy(t) {
            this.dispose(), this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this.texture.length = 0;
            for(let e = 0, n = t.texture.length; e < n; e++)this.texture[e] = t.texture[e].clone();
            return this;
        }
    }
    Et.prototype.isWebGLMultipleRenderTargets = !0;
    class At extends Tt {
        constructor(t, e, n){
            super(t, e, n), this.samples = 4;
        }
        copy(t) {
            return super.copy.call(this, t), this.samples = t.samples, this;
        }
    }
    At.prototype.isWebGLMultisampleRenderTarget = !0;
    class Lt {
        constructor(t = 0, e = 0, n = 0, i = 1){
            this._x = t, this._y = e, this._z = n, this._w = i;
        }
        static slerp(t, e, n, i) {
            return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t, e, i);
        }
        static slerpFlat(t, e, n, i, r, s, a) {
            let o = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3];
            const u = r[s + 0], d = r[s + 1], p = r[s + 2], m = r[s + 3];
            if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void (t[e + 3] = h);
            if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void (t[e + 3] = m);
            if (h !== m || o !== u || l !== d || c !== p) {
                let t = 1 - a;
                const e = o * u + l * d + c * p + h * m, n = e >= 0 ? 1 : -1, i = 1 - e * e;
                if (i > Number.EPSILON) {
                    const r = Math.sqrt(i), s = Math.atan2(r, e * n);
                    t = Math.sin(t * s) / r, a = Math.sin(a * s) / r;
                }
                const r = a * n;
                if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + m * r, t === 1 - a) {
                    const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= t, l *= t, c *= t, h *= t;
                }
            }
            t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h;
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, s) {
            const a = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], h = r[s], u = r[s + 1], d = r[s + 2], p = r[s + 3];
            return t[e] = a * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - a * d, t[e + 2] = l * p + c * d + a * u - o * h, t[e + 3] = c * p - a * h - o * u - l * d, t;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(t) {
            this._w = t, this._onChangeCallback();
        }
        set(t, e, n, i) {
            return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
        }
        setFromEuler(t, e) {
            if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const n = t._x, i = t._y, r = t._z, s = t._order, a = Math.cos, o = Math.sin, l = a(n / 2), c = a(i / 2), h = a(r / 2), u = o(n / 2), d = o(i / 2), p = o(r / 2);
            switch(s){
                case "XYZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "YXZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "ZXY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "ZYX":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "YZX":
                    this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "XZY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
            }
            return !1 !== e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
            const n = e / 2, i = Math.sin(n);
            return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t) {
            const e = t.elements, n = e[0], i = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10], u = n + a + h;
            if (u > 0) {
                const t = .5 / Math.sqrt(u + 1);
                this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (s - i) * t;
            } else if (n > a && n > h) {
                const t = 2 * Math.sqrt(1 + n - a - h);
                this._w = (c - o) / t, this._x = .25 * t, this._y = (i + s) / t, this._z = (r + l) / t;
            } else if (a > h) {
                const t = 2 * Math.sqrt(1 + a - n - h);
                this._w = (r - l) / t, this._x = (i + s) / t, this._y = .25 * t, this._z = (o + c) / t;
            } else {
                const t = 2 * Math.sqrt(1 + h - n - a);
                this._w = (s - i) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
            let n = t.dot(e) + 1;
            return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(ht(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
            const n = this.angleTo(t);
            if (0 === n) return this;
            const i = Math.min(1, e / n);
            return this.slerp(t, i), this;
        }
        identity() {
            return this.set(0, 0, 0, 1);
        }
        invert() {
            return this.conjugate();
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
        }
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
            const n = t._x, i = t._y, r = t._z, s = t._w, a = e._x, o = e._y, l = e._z, c = e._w;
            return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this;
        }
        slerp(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            const n = this._x, i = this._y, r = this._z, s = this._w;
            let a = s * t._w + n * t._x + i * t._y + r * t._z;
            if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t = 1 - e;
                return this._w = t * s + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
            }
            const l = Math.sqrt(o), c = Math.atan2(l, a), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l;
            return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
        }
        slerpQuaternions(t, e, n) {
            this.copy(t).slerp(e, n);
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
        }
        fromArray(t, e = 0) {
            return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
        }
        fromBufferAttribute(t, e) {
            return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
    }
    Lt.prototype.isQuaternion = !0;
    class Rt {
        constructor(t = 0, e = 0, n = 0){
            this.x = t, this.y = e, this.z = n;
        }
        set(t, e, n) {
            return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setZ(t) {
            return this.z = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this;
        }
        multiplyVectors(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
        }
        applyEuler(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Pt.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(Pt.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
            const e = this.x, n = this.y, i = this.z, r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
            const e = this.x, n = this.y, i = this.z, r = t.elements, s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this;
        }
        applyQuaternion(t) {
            const e = this.x, n = this.y, i = this.z, r = t.x, s = t.y, a = t.z, o = t.w, l = o * e + s * i - a * n, c = o * n + a * e - r * i, h = o * i + r * n - s * e, u = -r * e - s * n - a * i;
            return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this;
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
        }
        transformDirection(t) {
            const e = this.x, n = this.y, i = this.z, r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
        }
        cross(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
        }
        crossVectors(t, e) {
            const n = t.x, i = t.y, r = t.z, s = e.x, a = e.y, o = e.z;
            return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (0 === e) return this.set(0, 0, 0);
            const n = t.dot(this) / e;
            return this.copy(t).multiplyScalar(n);
        }
        projectOnPlane(t) {
            return Ct.copy(this).projectOnVector(t), this.sub(Ct);
        }
        reflect(t) {
            return this.sub(Ct.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e) return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos(ht(n, -1, 1));
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
            return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
        }
        setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, n) {
            const i = Math.sin(e) * t;
            return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
        }
        setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, n) {
            return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this;
        }
        setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = n, this.z = i, this;
        }
        setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, 4 * e);
        }
        setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, 3 * e);
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
    }
    Rt.prototype.isVector3 = !0;
    const Ct = new Rt, Pt = new Lt;
    class Dt {
        constructor(t = new Rt(1 / 0, 1 / 0, 1 / 0), e = new Rt(-1 / 0, -1 / 0, -1 / 0)){
            this.min = t, this.max = e;
        }
        set(t, e) {
            return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
            let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t.length; o < l; o += 3){
                const l = t[o], c = t[o + 1], h = t[o + 2];
                l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromBufferAttribute(t) {
            let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t.count; o < l; o++){
                const l = t.getX(o), c = t.getY(o), h = t.getZ(o);
                l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromPoints(t) {
            this.makeEmpty();
            for(let e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]);
            return this;
        }
        setFromCenterAndSize(t, e) {
            const n = Nt.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        setFromObject(t) {
            return this.makeEmpty(), this.expandByObject(t);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t) {
            t.updateWorldMatrix(!1, !1);
            const e = t.geometry;
            void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Bt.copy(e.boundingBox), Bt.applyMatrix4(t.matrixWorld), this.union(Bt));
            const n = t.children;
            for(let t = 0, e = n.length; t < e; t++)this.expandByObject(n[t]);
            return this;
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
        }
        intersectsSphere(t) {
            return this.clampPoint(t.center, Nt), Nt.distanceToSquared(t.center) <= t.radius * t.radius;
        }
        intersectsPlane(t) {
            let e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
        }
        intersectsTriangle(t) {
            if (this.isEmpty()) return !1;
            this.getCenter(kt), Vt.subVectors(this.max, kt), zt.subVectors(t.a, kt), Ft.subVectors(t.b, kt), Ot.subVectors(t.c, kt), Ht.subVectors(Ft, zt), Ut.subVectors(Ot, Ft), Gt.subVectors(zt, Ot);
            let e = [
                0,
                -Ht.z,
                Ht.y,
                0,
                -Ut.z,
                Ut.y,
                0,
                -Gt.z,
                Gt.y,
                Ht.z,
                0,
                -Ht.x,
                Ut.z,
                0,
                -Ut.x,
                Gt.z,
                0,
                -Gt.x,
                -Ht.y,
                Ht.x,
                0,
                -Ut.y,
                Ut.x,
                0,
                -Gt.y,
                Gt.x,
                0
            ];
            return !!qt(e, zt, Ft, Ot, Vt) && (e = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], !!qt(e, zt, Ft, Ot, Vt) && (Wt.crossVectors(Ht, Ut), e = [
                Wt.x,
                Wt.y,
                Wt.z
            ], qt(e, zt, Ft, Ot, Vt)));
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
            return Nt.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        getBoundingSphere(t) {
            return this.getCenter(t.center), t.radius = .5 * this.getSize(Nt).length(), t;
        }
        intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t) {
            return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
            return this.isEmpty() || (It[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), It[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), It[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), It[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), It[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), It[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), It[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), It[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(It)), this;
        }
        translate(t) {
            return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max);
        }
    }
    Dt.prototype.isBox3 = !0;
    const It = [
        new Rt,
        new Rt,
        new Rt,
        new Rt,
        new Rt,
        new Rt,
        new Rt,
        new Rt
    ], Nt = new Rt, Bt = new Dt, zt = new Rt, Ft = new Rt, Ot = new Rt, Ht = new Rt, Ut = new Rt, Gt = new Rt, kt = new Rt, Vt = new Rt, Wt = new Rt, jt = new Rt;
    function qt(t, e, n, i, r) {
        for(let s = 0, a = t.length - 3; s <= a; s += 3){
            jt.fromArray(t, s);
            const a = r.x * Math.abs(jt.x) + r.y * Math.abs(jt.y) + r.z * Math.abs(jt.z), o = e.dot(jt), l = n.dot(jt), c = i.dot(jt);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
        }
        return !0;
    }
    const Xt = new Dt, Yt = new Rt, Jt = new Rt, Zt = new Rt;
    class Qt {
        constructor(t = new Rt, e = -1){
            this.center = t, this.radius = e;
        }
        set(t, e) {
            return this.center.copy(t), this.radius = e, this;
        }
        setFromPoints(t, e) {
            const n = this.center;
            void 0 !== e ? n.copy(e) : Xt.setFromPoints(t).getCenter(n);
            let i = 0;
            for(let e = 0, r = t.length; e < r; e++)i = Math.max(i, n.distanceToSquared(t[e]));
            return this.radius = Math.sqrt(i), this;
        }
        copy(t) {
            return this.center.copy(t.center), this.radius = t.radius, this;
        }
        isEmpty() {
            return this.radius < 0;
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this;
        }
        containsPoint(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
            return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
            const e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
            return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
            const n = this.center.distanceToSquared(t);
            return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
        }
        getBoundingBox(t) {
            return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
        }
        applyMatrix4(t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
        }
        translate(t) {
            return this.center.add(t), this;
        }
        expandByPoint(t) {
            Zt.subVectors(t, this.center);
            const e = Zt.lengthSq();
            if (e > this.radius * this.radius) {
                const t = Math.sqrt(e), n = .5 * (t - this.radius);
                this.center.add(Zt.multiplyScalar(n / t)), this.radius += n;
            }
            return this;
        }
        union(t) {
            return Jt.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(Yt.copy(t.center).add(Jt)), this.expandByPoint(Yt.copy(t.center).sub(Jt)), this;
        }
        equals(t) {
            return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const Kt = new Rt, $t = new Rt, te = new Rt, ee = new Rt, ne = new Rt, ie = new Rt, re = new Rt;
    class se {
        constructor(t = new Rt, e = new Rt(0, 0, -1)){
            this.origin = t, this.direction = e;
        }
        set(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
        }
        at(t, e) {
            return e.copy(this.direction).multiplyScalar(t).add(this.origin);
        }
        lookAt(t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
            return this.origin.copy(this.at(t, Kt)), this;
        }
        closestPointToPoint(t, e) {
            e.subVectors(t, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
        }
        distanceToPoint(t) {
            return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
            const e = Kt.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (Kt.copy(this.direction).multiplyScalar(e).add(this.origin), Kt.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, n, i) {
            $t.copy(t).add(e).multiplyScalar(.5), te.copy(e).sub(t).normalize(), ee.copy(this.origin).sub($t);
            const r = .5 * t.distanceTo(e), s = -this.direction.dot(te), a = ee.dot(this.direction), o = -ee.dot(te), l = ee.lengthSq(), c = Math.abs(1 - s * s);
            let h, u, d, p;
            if (c > 0) {
                if (h = s * o - a, u = s * a - o, p = r * c, h >= 0) {
                    if (u >= -p) {
                        if (u <= p) {
                            const t = 1 / c;
                            h *= t, u *= t, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
                        } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                    } else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                } else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
            } else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
            return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(te).multiplyScalar(u).add($t), d;
        }
        intersectSphere(t, e) {
            Kt.subVectors(t.center, this.origin);
            const n = Kt.dot(this.direction), i = Kt.dot(Kt) - n * n, r = t.radius * t.radius;
            if (i > r) return null;
            const s = Math.sqrt(r - i), a = n - s, o = n + s;
            return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
        }
        intersectsSphere(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
            const e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            const n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null;
        }
        intersectPlane(t, e) {
            const n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e);
        }
        intersectsPlane(t) {
            const e = t.distanceToPoint(this.origin);
            if (0 === e) return !0;
            return t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
            let n, i, r, s, a, o;
            const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
            return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, s = (t.min.y - u.y) * c), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
        }
        intersectsBox(t) {
            return null !== this.intersectBox(t, Kt);
        }
        intersectTriangle(t, e, n, i, r) {
            ne.subVectors(e, t), ie.subVectors(n, t), re.crossVectors(ne, ie);
            let s, a = this.direction.dot(re);
            if (a > 0) {
                if (i) return null;
                s = 1;
            } else {
                if (!(a < 0)) return null;
                s = -1, a = -a;
            }
            ee.subVectors(this.origin, t);
            const o = s * this.direction.dot(ie.crossVectors(ee, ie));
            if (o < 0) return null;
            const l = s * this.direction.dot(ne.cross(ee));
            if (l < 0) return null;
            if (o + l > a) return null;
            const c = -s * ee.dot(re);
            return c < 0 ? null : this.at(c / a, r);
        }
        applyMatrix4(t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
        }
        equals(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class ae {
        constructor(){
            this.elements = [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
            const g = this.elements;
            return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return (new ae).fromArray(this.elements);
        }
        copy(t) {
            const e = this.elements, n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
        }
        copyPosition(t) {
            const e = this.elements, n = t.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
        }
        setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t, e, n) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t) {
            const e = this.elements, n = t.elements, i = 1 / oe.setFromMatrixColumn(t, 0).length(), r = 1 / oe.setFromMatrixColumn(t, 1).length(), s = 1 / oe.setFromMatrixColumn(t, 2).length();
            return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            const e = this.elements, n = t.x, i = t.y, r = t.z, s = Math.cos(n), a = Math.sin(n), o = Math.cos(i), l = Math.sin(i), c = Math.cos(r), h = Math.sin(r);
            if ("XYZ" === t.order) {
                const t = s * c, n = s * h, i = a * c, r = a * h;
                e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = i + n * l, e[10] = s * o;
            } else if ("YXZ" === t.order) {
                const t = o * c, n = o * h, i = l * c, r = l * h;
                e[0] = t + r * a, e[4] = i * a - n, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = n * a - i, e[6] = r + t * a, e[10] = s * o;
            } else if ("ZXY" === t.order) {
                const t = o * c, n = o * h, i = l * c, r = l * h;
                e[0] = t - r * a, e[4] = -s * h, e[8] = i + n * a, e[1] = n + i * a, e[5] = s * c, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
            } else if ("ZYX" === t.order) {
                const t = s * c, n = s * h, i = a * c, r = a * h;
                e[0] = o * c, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, e[9] = n * l - i, e[2] = -l, e[6] = a * o, e[10] = s * o;
            } else if ("YZX" === t.order) {
                const t = s * o, n = s * l, i = a * o, r = a * l;
                e[0] = o * c, e[4] = r - t * h, e[8] = i * h + n, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = n * h + i, e[10] = t - r * h;
            } else if ("XZY" === t.order) {
                const t = s * o, n = s * l, i = a * o, r = a * l;
                e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = s * c, e[9] = n * h - i, e[2] = i * h - n, e[6] = a * c, e[10] = r * h + t;
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t) {
            return this.compose(ce, t, he);
        }
        lookAt(t, e, n) {
            const i = this.elements;
            return pe.subVectors(t, e), 0 === pe.lengthSq() && (pe.z = 1), pe.normalize(), ue.crossVectors(n, pe), 0 === ue.lengthSq() && (1 === Math.abs(n.z) ? pe.x += 1e-4 : pe.z += 1e-4, pe.normalize(), ue.crossVectors(n, pe)), ue.normalize(), de.crossVectors(pe, ue), i[0] = ue.x, i[4] = de.x, i[8] = pe.x, i[1] = ue.y, i[5] = de.y, i[9] = pe.y, i[2] = ue.z, i[6] = de.z, i[10] = pe.z, this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const n = t.elements, i = e.elements, r = this.elements, s = n[0], a = n[4], o = n[8], l = n[12], c = n[1], h = n[5], u = n[9], d = n[13], p = n[2], m = n[6], f = n[10], g = n[14], v = n[3], y = n[7], x = n[11], _ = n[15], b = i[0], M = i[4], w = i[8], S = i[12], T = i[1], E = i[5], A = i[9], L = i[13], R = i[2], C = i[6], P = i[10], D = i[14], I = i[3], N = i[7], B = i[11], z = i[15];
            return r[0] = s * b + a * T + o * R + l * I, r[4] = s * M + a * E + o * C + l * N, r[8] = s * w + a * A + o * P + l * B, r[12] = s * S + a * L + o * D + l * z, r[1] = c * b + h * T + u * R + d * I, r[5] = c * M + h * E + u * C + d * N, r[9] = c * w + h * A + u * P + d * B, r[13] = c * S + h * L + u * D + d * z, r[2] = p * b + m * T + f * R + g * I, r[6] = p * M + m * E + f * C + g * N, r[10] = p * w + m * A + f * P + g * B, r[14] = p * S + m * L + f * D + g * z, r[3] = v * b + y * T + x * R + _ * I, r[7] = v * M + y * E + x * C + _ * N, r[11] = v * w + y * A + x * P + _ * B, r[15] = v * S + y * L + x * D + _ * z, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], s = t[1], a = t[5], o = t[9], l = t[13], c = t[2], h = t[6], u = t[10], d = t[14];
            return t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c);
        }
        transpose() {
            const t = this.elements;
            let e;
            return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
        }
        setPosition(t, e, n) {
            const i = this.elements;
            return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
        }
        invert() {
            const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8], h = t[9], u = t[10], d = t[11], p = t[12], m = t[13], f = t[14], g = t[15], v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g, y = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g, x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g, _ = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f, b = e * v + n * y + i * x + r * _;
            if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const M = 1 / b;
            return t[0] = v * M, t[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * M, t[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * M, t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * M, t[4] = y * M, t[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * M, t[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * M, t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * M, t[8] = x * M, t[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * M, t[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * M, t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * M, t[12] = _ * M, t[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * M, t[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * M, t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * M, this;
        }
        scale(t) {
            const e = this.elements, n = t.x, i = t.y, r = t.z;
            return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
        }
        getMaxScaleOnAxis() {
            const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t, e) {
            const n = Math.cos(e), i = Math.sin(e), r = 1 - n, s = t.x, a = t.y, o = t.z, l = r * s, c = r * a;
            return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
        }
        makeScale(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, n, i, r, s) {
            return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, n) {
            const i = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l = r + r, c = s + s, h = a + a, u = r * l, d = r * c, p = r * h, m = s * c, f = s * h, g = a * h, v = o * l, y = o * c, x = o * h, _ = n.x, b = n.y, M = n.z;
            return i[0] = (1 - (m + g)) * _, i[1] = (d + x) * _, i[2] = (p - y) * _, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (u + g)) * b, i[6] = (f + v) * b, i[7] = 0, i[8] = (p + y) * M, i[9] = (f - v) * M, i[10] = (1 - (u + m)) * M, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
        }
        decompose(t, e, n) {
            const i = this.elements;
            let r = oe.set(i[0], i[1], i[2]).length();
            const s = oe.set(i[4], i[5], i[6]).length(), a = oe.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], le.copy(this);
            const o = 1 / r, l = 1 / s, c = 1 / a;
            return le.elements[0] *= o, le.elements[1] *= o, le.elements[2] *= o, le.elements[4] *= l, le.elements[5] *= l, le.elements[6] *= l, le.elements[8] *= c, le.elements[9] *= c, le.elements[10] *= c, e.setFromRotationMatrix(le), n.x = r, n.y = s, n.z = a, this;
        }
        makePerspective(t, e, n, i, r, s) {
            void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            const a = this.elements, o = 2 * r / (e - t), l = 2 * r / (n - i), c = (e + t) / (e - t), h = (n + i) / (n - i), u = -(s + r) / (s - r), d = -2 * s * r / (s - r);
            return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
        }
        makeOrthographic(t, e, n, i, r, s) {
            const a = this.elements, o = 1 / (e - t), l = 1 / (n - i), c = 1 / (s - r), h = (e + t) * o, u = (n + i) * l, d = (s + r) * c;
            return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
        }
        equals(t) {
            const e = this.elements, n = t.elements;
            for(let t = 0; t < 16; t++)if (e[t] !== n[t]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let n = 0; n < 16; n++)this.elements[n] = t[n + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
        }
    }
    ae.prototype.isMatrix4 = !0;
    const oe = new Rt, le = new ae, ce = new Rt(0, 0, 0), he = new Rt(1, 1, 1), ue = new Rt, de = new Rt, pe = new Rt, me = new ae, fe = new Lt;
    class ge {
        constructor(t = 0, e = 0, n = 0, i = ge.DefaultOrder){
            this._x = t, this._y = e, this._z = n, this._order = i;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(t) {
            this._order = t, this._onChangeCallback();
        }
        set(t, e, n, i = this._order) {
            return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t, e = this._order, n = !0) {
            const i = t.elements, r = i[0], s = i[4], a = i[8], o = i[1], l = i[5], c = i[9], h = i[2], u = i[6], d = i[10];
            switch(e){
                case "XYZ":
                    this._y = Math.asin(ht(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-ht(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(ht(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-ht(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
                    break;
                case "YZX":
                    this._z = Math.asin(ht(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-ht(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return this._order = e, !0 === n && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, n) {
            return me.makeRotationFromQuaternion(t), this.setFromRotationMatrix(me, e, n);
        }
        setFromVector3(t, e = this._order) {
            return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
            return fe.setFromEuler(this), this.setFromQuaternion(fe, t);
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
        }
        fromArray(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
        }
        toVector3(t) {
            return t ? t.set(this._x, this._y, this._z) : new Rt(this._x, this._y, this._z);
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
    }
    ge.prototype.isEuler = !0, ge.DefaultOrder = "XYZ", ge.RotationOrders = [
        "XYZ",
        "YZX",
        "ZXY",
        "XZY",
        "YXZ",
        "ZYX"
    ];
    class ve {
        constructor(){
            this.mask = 1;
        }
        set(t) {
            this.mask = 1 << t | 0;
        }
        enable(t) {
            this.mask |= 1 << t | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(t) {
            this.mask ^= 1 << t | 0;
        }
        disable(t) {
            this.mask &= ~(1 << t | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(t) {
            return 0 != (this.mask & t.mask);
        }
    }
    let ye = 0;
    const xe = new Rt, _e = new Lt, be = new ae, Me = new Rt, we = new Rt, Se = new Rt, Te = new Lt, Ee = new Rt(1, 0, 0), Ae = new Rt(0, 1, 0), Le = new Rt(0, 0, 1), Re = {
        type: "added"
    }, Ce = {
        type: "removed"
    };
    class Pe extends rt {
        constructor(){
            super(), Object.defineProperty(this, "id", {
                value: ye++
            }), this.uuid = ct(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Pe.DefaultUp.clone();
            const t = new Rt, e = new ge, n = new Lt, i = new Rt(1, 1, 1);
            e._onChange(function() {
                n.setFromEuler(e, !1);
            }), n._onChange(function() {
                e.setFromQuaternion(n, void 0, !1);
            }), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                modelViewMatrix: {
                    value: new ae
                },
                normalMatrix: {
                    value: new yt
                }
            }), this.matrix = new ae, this.matrixWorld = new ae, this.matrixAutoUpdate = Pe.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new ve, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
            return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
            this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
            this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
            this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
            this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
            return _e.setFromAxisAngle(t, e), this.quaternion.multiply(_e), this;
        }
        rotateOnWorldAxis(t, e) {
            return _e.setFromAxisAngle(t, e), this.quaternion.premultiply(_e), this;
        }
        rotateX(t) {
            return this.rotateOnAxis(Ee, t);
        }
        rotateY(t) {
            return this.rotateOnAxis(Ae, t);
        }
        rotateZ(t) {
            return this.rotateOnAxis(Le, t);
        }
        translateOnAxis(t, e) {
            return xe.copy(t).applyQuaternion(this.quaternion), this.position.add(xe.multiplyScalar(e)), this;
        }
        translateX(t) {
            return this.translateOnAxis(Ee, t);
        }
        translateY(t) {
            return this.translateOnAxis(Ae, t);
        }
        translateZ(t) {
            return this.translateOnAxis(Le, t);
        }
        localToWorld(t) {
            return t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
            return t.applyMatrix4(be.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, n) {
            t.isVector3 ? Me.copy(t) : Me.set(t, e, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1), we.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? be.lookAt(we, Me, this.up) : be.lookAt(Me, we, this.up), this.quaternion.setFromRotationMatrix(be), i && (be.extractRotation(i.matrixWorld), _e.setFromRotationMatrix(be), this.quaternion.premultiply(_e.invert()));
        }
        add(t) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
                return this;
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Re)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
        }
        remove(t) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.remove(arguments[t]);
                return this;
            }
            const e = this.children.indexOf(t);
            return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Ce)), this;
        }
        removeFromParent() {
            const t = this.parent;
            return null !== t && t.remove(this), this;
        }
        clear() {
            for(let t = 0; t < this.children.length; t++){
                const e = this.children[t];
                e.parent = null, e.dispatchEvent(Ce);
            }
            return this.children.length = 0, this;
        }
        attach(t) {
            return this.updateWorldMatrix(!0, !1), be.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), be.multiply(t.parent.matrixWorld)), t.applyMatrix4(be), this.add(t), t.updateWorldMatrix(!1, !0), this;
        }
        getObjectById(t) {
            return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
            return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
            if (this[t] === e) return this;
            for(let n = 0, i = this.children.length; n < i; n++){
                const i = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== i) return i;
            }
        }
        getWorldPosition(t) {
            return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(we, t, Se), t;
        }
        getWorldScale(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(we, Te, t), t;
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
            t(this);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].traverse(t);
        }
        traverseVisible(t) {
            if (!1 === this.visible) return;
            t(this);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].traverseVisible(t);
        }
        traverseAncestors(t) {
            const e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].updateMatrixWorld(t);
        }
        updateWorldMatrix(t, e) {
            const n = this.parent;
            if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
                const t = this.children;
                for(let e = 0, n = t.length; e < n; e++)t[e].updateWorldMatrix(!1, !0);
            }
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t, n = {};
            e && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {}
            }, n.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const i = {};
            function r(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
            }
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(t).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                i.geometry = r(t.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const n = e.shapes;
                    if (Array.isArray(n)) for(let e = 0, i = n.length; e < i; e++){
                        const i = n[e];
                        r(t.shapes, i);
                    }
                    else r(t.shapes, n);
                }
            }
            if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
                if (Array.isArray(this.material)) {
                    const e = [];
                    for(let n = 0, i = this.material.length; n < i; n++)e.push(r(t.materials, this.material[n]));
                    i.material = e;
                } else i.material = r(t.materials, this.material);
            }
            if (this.children.length > 0) {
                i.children = [];
                for(let e = 0; e < this.children.length; e++)i.children.push(this.children[e].toJSON(t).object);
            }
            if (this.animations.length > 0) {
                i.animations = [];
                for(let e = 0; e < this.animations.length; e++){
                    const n = this.animations[e];
                    i.animations.push(r(t.animations, n));
                }
            }
            if (e) {
                const e = s(t.geometries), i = s(t.materials), r = s(t.textures), a = s(t.images), o = s(t.shapes), l = s(t.skeletons), c = s(t.animations);
                e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c);
            }
            return n.object = i, n;
            function s(t) {
                const e = [];
                for(const n in t){
                    const i = t[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
        }
        clone(t) {
            return (new this.constructor).copy(this, t);
        }
        copy(t, e = !0) {
            if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for(let e = 0; e < t.children.length; e++){
                const n = t.children[e];
                this.add(n.clone());
            }
            return this;
        }
    }
    Pe.DefaultUp = new Rt(0, 1, 0), Pe.DefaultMatrixAutoUpdate = !0, Pe.prototype.isObject3D = !0;
    const De = new Rt, Ie = new Rt, Ne = new Rt, Be = new Rt, ze = new Rt, Fe = new Rt, Oe = new Rt, He = new Rt, Ue = new Rt, Ge = new Rt;
    class ke {
        constructor(t = new Rt, e = new Rt, n = new Rt){
            this.a = t, this.b = e, this.c = n;
        }
        static getNormal(t, e, n, i) {
            i.subVectors(n, e), De.subVectors(t, e), i.cross(De);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
        }
        static getBarycoord(t, e, n, i, r) {
            De.subVectors(i, e), Ie.subVectors(n, e), Ne.subVectors(t, e);
            const s = De.dot(De), a = De.dot(Ie), o = De.dot(Ne), l = Ie.dot(Ie), c = Ie.dot(Ne), h = s * l - a * a;
            if (0 === h) return r.set(-2, -1, -1);
            const u = 1 / h, d = (l * o - a * c) * u, p = (s * c - a * o) * u;
            return r.set(1 - d - p, p, d);
        }
        static containsPoint(t, e, n, i) {
            return this.getBarycoord(t, e, n, i, Be), Be.x >= 0 && Be.y >= 0 && Be.x + Be.y <= 1;
        }
        static getUV(t, e, n, i, r, s, a, o) {
            return this.getBarycoord(t, e, n, i, Be), o.set(0, 0), o.addScaledVector(r, Be.x), o.addScaledVector(s, Be.y), o.addScaledVector(a, Be.z), o;
        }
        static isFrontFacing(t, e, n, i) {
            return De.subVectors(n, e), Ie.subVectors(t, e), De.cross(Ie).dot(i) < 0;
        }
        set(t, e, n) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t, e, n, i) {
            return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
            return De.subVectors(this.c, this.b), Ie.subVectors(this.a, this.b), .5 * De.cross(Ie).length();
        }
        getMidpoint(t) {
            return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        }
        getNormal(t) {
            return ke.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
            return t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
            return ke.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getUV(t, e, n, i, r) {
            return ke.getUV(t, this.a, this.b, this.c, e, n, i, r);
        }
        containsPoint(t) {
            return ke.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
            return ke.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
            return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
            const n = this.a, i = this.b, r = this.c;
            let s, a;
            ze.subVectors(i, n), Fe.subVectors(r, n), He.subVectors(t, n);
            const o = ze.dot(He), l = Fe.dot(He);
            if (o <= 0 && l <= 0) return e.copy(n);
            Ue.subVectors(t, i);
            const c = ze.dot(Ue), h = Fe.dot(Ue);
            if (c >= 0 && h <= c) return e.copy(i);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(n).addScaledVector(ze, s);
            Ge.subVectors(t, r);
            const d = ze.dot(Ge), p = Fe.dot(Ge);
            if (p >= 0 && d <= p) return e.copy(r);
            const m = d * l - o * p;
            if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector(Fe, a);
            const f = c * p - d * h;
            if (f <= 0 && h - c >= 0 && d - p >= 0) return Oe.subVectors(r, i), a = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(Oe, a);
            const g = 1 / (f + m + u);
            return s = m * g, a = u * g, e.copy(n).addScaledVector(ze, s).addScaledVector(Fe, a);
        }
        equals(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
    }
    let Ve = 0;
    class We extends rt {
        constructor(){
            super(), Object.defineProperty(this, "id", {
                value: Ve++
            }), this.uuid = ct(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = n, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = tt, this.stencilZFail = tt, this.stencilZPass = tt, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
        }
        onBuild() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(t) {
            if (void 0 !== t) for(const e in t){
                const n = t[e];
                if (void 0 === n) {
                    console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    continue;
                }
                if ("shading" === e) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
                    continue;
                }
                const i = this[e];
                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
            }
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            e && (t = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function i(t) {
                const e = [];
                for(const n in t){
                    const i = t[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
                const e = i(t.textures), r = i(t.images);
                e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
            }
            return n;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
            const e = t.clippingPlanes;
            let n = null;
            if (null !== e) {
                const t = e.length;
                n = new Array(t);
                for(let i = 0; i !== t; ++i)n[i] = e[i].clone();
            }
            return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
    }
    We.prototype.isMaterial = !0;
    const je = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, qe = {
        h: 0,
        s: 0,
        l: 0
    }, Xe = {
        h: 0,
        s: 0,
        l: 0
    };
    function Ye(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
    }
    function Je(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
    }
    function Ze(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
    }
    class Qe {
        constructor(t, e, n){
            return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
        }
        set(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this;
        }
        setScalar(t) {
            return this.r = t, this.g = t, this.b = t, this;
        }
        setHex(t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this;
        }
        setRGB(t, e, n) {
            return this.r = t, this.g = e, this.b = n, this;
        }
        setHSL(t, e, n) {
            if (t = ut(t, 1), e = ht(e, 0, 1), n = ht(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
            else {
                const i = n <= .5 ? n * (1 + e) : n + e - n * e, r = 2 * n - i;
                this.r = Ye(r, i, t + 1 / 3), this.g = Ye(r, i, t), this.b = Ye(r, i, t - 1 / 3);
            }
            return this;
        }
        setStyle(t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
            }
            let n;
            if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
                let t;
                const i = n[1], r = n[2];
                switch(i){
                    case "rgb":
                    case "rgba":
                        if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, e(t[4]), this;
                        if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, e(t[4]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                            const n = parseFloat(t[1]) / 360, i = parseInt(t[2], 10) / 100, r = parseInt(t[3], 10) / 100;
                            return e(t[4]), this.setHSL(n, i, r);
                        }
                }
            } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                const t = n[1], e = t.length;
                if (3 === e) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, this;
                if (6 === e) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, this;
            }
            return t && t.length > 0 ? this.setColorName(t) : this;
        }
        setColorName(t) {
            const e = je[t.toLowerCase()];
            return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this;
        }
        copyGammaToLinear(t, e = 2) {
            return this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this;
        }
        copyLinearToGamma(t, e = 2) {
            const n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this;
        }
        convertGammaToLinear(t) {
            return this.copyGammaToLinear(this, t), this;
        }
        convertLinearToGamma(t) {
            return this.copyLinearToGamma(this, t), this;
        }
        copySRGBToLinear(t) {
            return this.r = Je(t.r), this.g = Je(t.g), this.b = Je(t.b), this;
        }
        copyLinearToSRGB(t) {
            return this.r = Ze(t.r), this.g = Ze(t.g), this.b = Ze(t.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
        }
        getHexString() {
            return ("000000" + this.getHex().toString(16)).slice(-6);
        }
        getHSL(t) {
            const e = this.r, n = this.g, i = this.b, r = Math.max(e, n, i), s = Math.min(e, n, i);
            let a, o;
            const l = (s + r) / 2;
            if (s === r) a = 0, o = 0;
            else {
                const t = r - s;
                switch(o = l <= .5 ? t / (r + s) : t / (2 - r - s), r){
                    case e:
                        a = (n - i) / t + (n < i ? 6 : 0);
                        break;
                    case n:
                        a = (i - e) / t + 2;
                        break;
                    case i:
                        a = (e - n) / t + 4;
                }
                a /= 6;
            }
            return t.h = a, t.s = o, t.l = l, t;
        }
        getStyle() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
        }
        offsetHSL(t, e, n) {
            return this.getHSL(qe), qe.h += t, qe.s += e, qe.l += n, this.setHSL(qe.h, qe.s, qe.l), this;
        }
        add(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this;
        }
        addColors(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
        }
        addScalar(t) {
            return this.r += t, this.g += t, this.b += t, this;
        }
        sub(t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
        }
        multiply(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
        }
        multiplyScalar(t) {
            return this.r *= t, this.g *= t, this.b *= t, this;
        }
        lerp(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
        }
        lerpColors(t, e, n) {
            return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
        }
        lerpHSL(t, e) {
            this.getHSL(qe), t.getHSL(Xe);
            const n = dt(qe.h, Xe.h, e), i = dt(qe.s, Xe.s, e), r = dt(qe.l, Xe.l, e);
            return this.setHSL(n, i, r), this;
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
            return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
        }
        fromBufferAttribute(t, e) {
            return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
        }
        toJSON() {
            return this.getHex();
        }
    }
    Qe.NAMES = je, Qe.prototype.isColor = !0, Qe.prototype.r = 1, Qe.prototype.g = 1, Qe.prototype.b = 1;
    class Ke extends We {
        constructor(t){
            super(), this.type = "MeshBasicMaterial", this.color = new Qe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.morphTargets = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this;
        }
    }
    Ke.prototype.isMeshBasicMaterial = !0;
    const $e = new Rt, tn = new vt;
    class en {
        constructor(t, e, n){
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = et, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0;
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setUsage(t) {
            return this.usage = t, this;
        }
        copy(t) {
            return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
        }
        copyAt(t, e, n) {
            t *= this.itemSize, n *= e.itemSize;
            for(let i = 0, r = this.itemSize; i < r; i++)this.array[t + i] = e.array[n + i];
            return this;
        }
        copyArray(t) {
            return this.array.set(t), this;
        }
        copyColorsArray(t) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t.length; i < r; i++){
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new Qe), e[n++] = r.r, e[n++] = r.g, e[n++] = r.b;
            }
            return this;
        }
        copyVector2sArray(t) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t.length; i < r; i++){
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new vt), e[n++] = r.x, e[n++] = r.y;
            }
            return this;
        }
        copyVector3sArray(t) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t.length; i < r; i++){
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new Rt), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z;
            }
            return this;
        }
        copyVector4sArray(t) {
            const e = this.array;
            let n = 0;
            for(let i = 0, r = t.length; i < r; i++){
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new St), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z, e[n++] = r.w;
            }
            return this;
        }
        applyMatrix3(t) {
            if (2 === this.itemSize) for(let e = 0, n = this.count; e < n; e++)tn.fromBufferAttribute(this, e), tn.applyMatrix3(t), this.setXY(e, tn.x, tn.y);
            else if (3 === this.itemSize) for(let e = 0, n = this.count; e < n; e++)$e.fromBufferAttribute(this, e), $e.applyMatrix3(t), this.setXYZ(e, $e.x, $e.y, $e.z);
            return this;
        }
        applyMatrix4(t) {
            for(let e = 0, n = this.count; e < n; e++)$e.x = this.getX(e), $e.y = this.getY(e), $e.z = this.getZ(e), $e.applyMatrix4(t), this.setXYZ(e, $e.x, $e.y, $e.z);
            return this;
        }
        applyNormalMatrix(t) {
            for(let e = 0, n = this.count; e < n; e++)$e.x = this.getX(e), $e.y = this.getY(e), $e.z = this.getZ(e), $e.applyNormalMatrix(t), this.setXYZ(e, $e.x, $e.y, $e.z);
            return this;
        }
        transformDirection(t) {
            for(let e = 0, n = this.count; e < n; e++)$e.x = this.getX(e), $e.y = this.getY(e), $e.z = this.getZ(e), $e.transformDirection(t), this.setXYZ(e, $e.x, $e.y, $e.z);
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        getX(t) {
            return this.array[t * this.itemSize];
        }
        setX(t, e) {
            return this.array[t * this.itemSize] = e, this;
        }
        getY(t) {
            return this.array[t * this.itemSize + 1];
        }
        setY(t, e) {
            return this.array[t * this.itemSize + 1] = e, this;
        }
        getZ(t) {
            return this.array[t * this.itemSize + 2];
        }
        setZ(t, e) {
            return this.array[t * this.itemSize + 2] = e, this;
        }
        getW(t) {
            return this.array[t * this.itemSize + 3];
        }
        setW(t, e) {
            return this.array[t * this.itemSize + 3] = e, this;
        }
        setXY(t, e, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this;
        }
        setXYZ(t, e, n, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
        }
        setXYZW(t, e, n, i, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
        }
        onUpload(t) {
            return this.onUploadCallback = t, this;
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
            const t = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            };
            return "" !== this.name && (t.name = this.name), this.usage !== et && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t;
        }
    }
    en.prototype.isBufferAttribute = !0;
    class nn extends en {
        constructor(t, e, n){
            super(new Int8Array(t), e, n);
        }
    }
    class rn extends en {
        constructor(t, e, n){
            super(new Uint8Array(t), e, n);
        }
    }
    class sn extends en {
        constructor(t, e, n){
            super(new Uint8ClampedArray(t), e, n);
        }
    }
    class an extends en {
        constructor(t, e, n){
            super(new Int16Array(t), e, n);
        }
    }
    class on extends en {
        constructor(t, e, n){
            super(new Uint16Array(t), e, n);
        }
    }
    class ln extends en {
        constructor(t, e, n){
            super(new Int32Array(t), e, n);
        }
    }
    class cn extends en {
        constructor(t, e, n){
            super(new Uint32Array(t), e, n);
        }
    }
    class hn extends en {
        constructor(t, e, n){
            super(new Uint16Array(t), e, n);
        }
    }
    hn.prototype.isFloat16BufferAttribute = !0;
    class un extends en {
        constructor(t, e, n){
            super(new Float32Array(t), e, n);
        }
    }
    class dn extends en {
        constructor(t, e, n){
            super(new Float64Array(t), e, n);
        }
    }
    function pn(t) {
        if (0 === t.length) return -1 / 0;
        let e = t[0];
        for(let n = 1, i = t.length; n < i; ++n)t[n] > e && (e = t[n]);
        return e;
    }
    const mn = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: Uint8ClampedArray,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    function fn(t, e) {
        return new mn[t](e);
    }
    let gn = 0;
    const vn = new ae, yn = new Pe, xn = new Rt, _n = new Dt, bn = new Dt, Mn = new Rt;
    class wn extends rt {
        constructor(){
            super(), Object.defineProperty(this, "id", {
                value: gn++
            }), this.uuid = ct(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {};
        }
        getIndex() {
            return this.index;
        }
        setIndex(t) {
            return Array.isArray(t) ? this.index = new (pn(t) > 65535 ? cn : on)(t, 1) : this.index = t, this;
        }
        getAttribute(t) {
            return this.attributes[t];
        }
        setAttribute(t, e) {
            return this.attributes[t] = e, this;
        }
        deleteAttribute(t) {
            return delete this.attributes[t], this;
        }
        hasAttribute(t) {
            return void 0 !== this.attributes[t];
        }
        addGroup(t, e, n = 0) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: n
            });
        }
        clearGroups() {
            this.groups = [];
        }
        setDrawRange(t, e) {
            this.drawRange.start = t, this.drawRange.count = e;
        }
        applyMatrix4(t) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
            const n = this.attributes.normal;
            if (void 0 !== n) {
                const e = (new yt).getNormalMatrix(t);
                n.applyNormalMatrix(e), n.needsUpdate = !0;
            }
            const i = this.attributes.tangent;
            return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
        }
        applyQuaternion(t) {
            return vn.makeRotationFromQuaternion(t), this.applyMatrix4(vn), this;
        }
        rotateX(t) {
            return vn.makeRotationX(t), this.applyMatrix4(vn), this;
        }
        rotateY(t) {
            return vn.makeRotationY(t), this.applyMatrix4(vn), this;
        }
        rotateZ(t) {
            return vn.makeRotationZ(t), this.applyMatrix4(vn), this;
        }
        translate(t, e, n) {
            return vn.makeTranslation(t, e, n), this.applyMatrix4(vn), this;
        }
        scale(t, e, n) {
            return vn.makeScale(t, e, n), this.applyMatrix4(vn), this;
        }
        lookAt(t) {
            return yn.lookAt(t), yn.updateMatrix(), this.applyMatrix4(yn.matrix), this;
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(xn).negate(), this.translate(xn.x, xn.y, xn.z), this;
        }
        setFromPoints(t) {
            const e = [];
            for(let n = 0, i = t.length; n < i; n++){
                const i = t[n];
                e.push(i.x, i.y, i.z || 0);
            }
            return this.setAttribute("position", new un(e, 3)), this;
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new Dt);
            const t = this.attributes.position, e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new Rt(-1 / 0, -1 / 0, -1 / 0), new Rt(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== t) {
                if (this.boundingBox.setFromBufferAttribute(t), e) for(let t = 0, n = e.length; t < n; t++){
                    const n = e[t];
                    _n.setFromBufferAttribute(n), this.morphTargetsRelative ? (Mn.addVectors(this.boundingBox.min, _n.min), this.boundingBox.expandByPoint(Mn), Mn.addVectors(this.boundingBox.max, _n.max), this.boundingBox.expandByPoint(Mn)) : (this.boundingBox.expandByPoint(_n.min), this.boundingBox.expandByPoint(_n.max));
                }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new Qt);
            const t = this.attributes.position, e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new Rt, 1 / 0);
            if (t) {
                const n = this.boundingSphere.center;
                if (_n.setFromBufferAttribute(t), e) for(let t = 0, n = e.length; t < n; t++){
                    const n = e[t];
                    bn.setFromBufferAttribute(n), this.morphTargetsRelative ? (Mn.addVectors(_n.min, bn.min), _n.expandByPoint(Mn), Mn.addVectors(_n.max, bn.max), _n.expandByPoint(Mn)) : (_n.expandByPoint(bn.min), _n.expandByPoint(bn.max));
                }
                _n.getCenter(n);
                let i = 0;
                for(let e = 0, r = t.count; e < r; e++)Mn.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(Mn));
                if (e) for(let r = 0, s = e.length; r < s; r++){
                    const s = e[r], a = this.morphTargetsRelative;
                    for(let e = 0, r = s.count; e < r; e++)Mn.fromBufferAttribute(s, e), a && (xn.fromBufferAttribute(t, e), Mn.add(xn)), i = Math.max(i, n.distanceToSquared(Mn));
                }
                this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        }
        computeFaceNormals() {}
        computeTangents() {
            const t = this.index, e = this.attributes;
            if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const n = t.array, i = e.position.array, r = e.normal.array, s = e.uv.array, a = i.length / 3;
            void 0 === e.tangent && this.setAttribute("tangent", new en(new Float32Array(4 * a), 4));
            const o = e.tangent.array, l = [], c = [];
            for(let t = 0; t < a; t++)l[t] = new Rt, c[t] = new Rt;
            const h = new Rt, u = new Rt, d = new Rt, p = new vt, m = new vt, f = new vt, g = new Rt, v = new Rt;
            function y(t, e, n) {
                h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), m.fromArray(s, 2 * e), f.fromArray(s, 2 * n), u.sub(h), d.sub(h), m.sub(p), f.sub(p);
                const r = 1 / (m.x * f.y - f.x * m.y);
                isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(v), c[e].add(v), c[n].add(v));
            }
            let x = this.groups;
            0 === x.length && (x = [
                {
                    start: 0,
                    count: n.length
                }
            ]);
            for(let t = 0, e = x.length; t < e; ++t){
                const e = x[t], i = e.start;
                for(let t = i, r = i + e.count; t < r; t += 3)y(n[t + 0], n[t + 1], n[t + 2]);
            }
            const _ = new Rt, b = new Rt, M = new Rt, w = new Rt;
            function S(t) {
                M.fromArray(r, 3 * t), w.copy(M);
                const e = l[t];
                _.copy(e), _.sub(M.multiplyScalar(M.dot(e))).normalize(), b.crossVectors(w, e);
                const n = b.dot(c[t]) < 0 ? -1 : 1;
                o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = n;
            }
            for(let t = 0, e = x.length; t < e; ++t){
                const e = x[t], i = e.start;
                for(let t = i, r = i + e.count; t < r; t += 3)S(n[t + 0]), S(n[t + 1]), S(n[t + 2]);
            }
        }
        computeVertexNormals() {
            const t = this.index, e = this.getAttribute("position");
            if (void 0 !== e) {
                let n = this.getAttribute("normal");
                if (void 0 === n) n = new en(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
                else for(let t = 0, e = n.count; t < e; t++)n.setXYZ(t, 0, 0, 0);
                const i = new Rt, r = new Rt, s = new Rt, a = new Rt, o = new Rt, l = new Rt, c = new Rt, h = new Rt;
                if (t) for(let u = 0, d = t.count; u < d; u += 3){
                    const d = t.getX(u + 0), p = t.getX(u + 1), m = t.getX(u + 2);
                    i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), a.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, m), a.add(c), o.add(c), l.add(c), n.setXYZ(d, a.x, a.y, a.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z);
                }
                else for(let t = 0, a = e.count; t < a; t += 3)i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), n.setXYZ(t + 0, c.x, c.y, c.z), n.setXYZ(t + 1, c.x, c.y, c.z), n.setXYZ(t + 2, c.x, c.y, c.z);
                this.normalizeNormals(), n.needsUpdate = !0;
            }
        }
        merge(t, e) {
            if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const n = this.attributes;
            for(const i in n){
                if (void 0 === t.attributes[i]) continue;
                const r = n[i].array, s = t.attributes[i], a = s.array, o = s.itemSize * e, l = Math.min(a.length, r.length - o);
                for(let t = 0, e = o; t < l; t++, e++)r[e] = a[t];
            }
            return this;
        }
        normalizeNormals() {
            const t = this.attributes.normal;
            for(let e = 0, n = t.count; e < n; e++)Mn.fromBufferAttribute(t, e), Mn.normalize(), t.setXYZ(e, Mn.x, Mn.y, Mn.z);
        }
        toNonIndexed() {
            function t(t, e) {
                const n = t.array, i = t.itemSize, r = t.normalized, s = new n.constructor(e.length * i);
                let a = 0, o = 0;
                for(let r = 0, l = e.length; r < l; r++){
                    a = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
                    for(let t = 0; t < i; t++)s[o++] = n[a++];
                }
                return new en(s, i, r);
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e = new wn, n = this.index.array, i = this.attributes;
            for(const r in i){
                const s = t(i[r], n);
                e.setAttribute(r, s);
            }
            const r = this.morphAttributes;
            for(const i in r){
                const s = [], a = r[i];
                for(let e = 0, i = a.length; e < i; e++){
                    const i = t(a[e], n);
                    s.push(i);
                }
                e.morphAttributes[i] = s;
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const s = this.groups;
            for(let t = 0, n = s.length; t < n; t++){
                const n = s[t];
                e.addGroup(n.start, n.count, n.materialIndex);
            }
            return e;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
                const e = this.parameters;
                for(const n in e)void 0 !== e[n] && (t[n] = e[n]);
                return t;
            }
            t.data = {
                attributes: {}
            };
            const e = this.index;
            null !== e && (t.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const n = this.attributes;
            for(const e in n){
                const i = n[e];
                t.data.attributes[e] = i.toJSON(t.data);
            }
            const i = {};
            let r = !1;
            for(const e in this.morphAttributes){
                const n = this.morphAttributes[e], s = [];
                for(let e = 0, i = n.length; e < i; e++){
                    const i = n[e];
                    s.push(i.toJSON(t.data));
                }
                s.length > 0 && (i[e] = s, r = !0);
            }
            r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
            const s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            const a = this.boundingSphere;
            return null !== a && (t.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius
            }), t;
        }
        clone() {
            return (new wn).copy(this);
        }
        copy(t) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const e = {};
            this.name = t.name;
            const n = t.index;
            null !== n && this.setIndex(n.clone(e));
            const i = t.attributes;
            for(const t in i){
                const n = i[t];
                this.setAttribute(t, n.clone(e));
            }
            const r = t.morphAttributes;
            for(const t in r){
                const n = [], i = r[t];
                for(let t = 0, r = i.length; t < r; t++)n.push(i[t].clone(e));
                this.morphAttributes[t] = n;
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            const s = t.groups;
            for(let t = 0, e = s.length; t < e; t++){
                const e = s[t];
                this.addGroup(e.start, e.count, e.materialIndex);
            }
            const a = t.boundingBox;
            null !== a && (this.boundingBox = a.clone());
            const o = t.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    wn.prototype.isBufferGeometry = !0;
    const Sn = new ae, Tn = new se, En = new Qt, An = new Rt, Ln = new Rt, Rn = new Rt, Cn = new Rt, Pn = new Rt, Dn = new Rt, In = new Rt, Nn = new Rt, Bn = new Rt, zn = new vt, Fn = new vt, On = new vt, Hn = new Rt, Un = new Rt;
    class Gn extends Pe {
        constructor(t = new wn, e = new Ke){
            super(), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t) {
            return super.copy(t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes, n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for(let e = 0, n = t.length; e < n; e++){
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e;
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
        raycast(t, e) {
            const n = this.geometry, i = this.material, r = this.matrixWorld;
            if (void 0 === i) return;
            if (null === n.boundingSphere && n.computeBoundingSphere(), En.copy(n.boundingSphere), En.applyMatrix4(r), !1 === t.ray.intersectsSphere(En)) return;
            if (Sn.copy(r).invert(), Tn.copy(t.ray).applyMatrix4(Sn), null !== n.boundingBox && !1 === Tn.intersectsBox(n.boundingBox)) return;
            let s;
            if (n.isBufferGeometry) {
                const r = n.index, a = n.attributes.position, o = n.morphAttributes.position, l = n.morphTargetsRelative, c = n.attributes.uv, h = n.attributes.uv2, u = n.groups, d = n.drawRange;
                if (null !== r) {
                    if (Array.isArray(i)) for(let n = 0, p = u.length; n < p; n++){
                        const p = u[n], m = i[p.materialIndex];
                        for(let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3){
                            const i = r.getX(n), u = r.getX(n + 1), d = r.getX(n + 2);
                            s = kn(this, m, t, Tn, a, o, l, c, h, i, u, d), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = p.materialIndex, e.push(s));
                        }
                    }
                    else for(let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3){
                        const u = r.getX(n), d = r.getX(n + 1), p = r.getX(n + 2);
                        s = kn(this, i, t, Tn, a, o, l, c, h, u, d, p), s && (s.faceIndex = Math.floor(n / 3), e.push(s));
                    }
                } else if (void 0 !== a) {
                    if (Array.isArray(i)) for(let n = 0, r = u.length; n < r; n++){
                        const r = u[n], p = i[r.materialIndex];
                        for(let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3)s = kn(this, p, t, Tn, a, o, l, c, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = r.materialIndex, e.push(s));
                    }
                    else for(let n = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); n < r; n += 3)s = kn(this, i, t, Tn, a, o, l, c, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), e.push(s));
                }
            } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
    function kn(t, e, n, i, r, s, a, o, l, c, h, u) {
        An.fromBufferAttribute(r, c), Ln.fromBufferAttribute(r, h), Rn.fromBufferAttribute(r, u);
        const d = t.morphTargetInfluences;
        if (e.morphTargets && s && d) {
            In.set(0, 0, 0), Nn.set(0, 0, 0), Bn.set(0, 0, 0);
            for(let t = 0, e = s.length; t < e; t++){
                const e = d[t], n = s[t];
                0 !== e && (Cn.fromBufferAttribute(n, c), Pn.fromBufferAttribute(n, h), Dn.fromBufferAttribute(n, u), a ? (In.addScaledVector(Cn, e), Nn.addScaledVector(Pn, e), Bn.addScaledVector(Dn, e)) : (In.addScaledVector(Cn.sub(An), e), Nn.addScaledVector(Pn.sub(Ln), e), Bn.addScaledVector(Dn.sub(Rn), e)));
            }
            An.add(In), Ln.add(Nn), Rn.add(Bn);
        }
        t.isSkinnedMesh && (t.boneTransform(c, An), t.boneTransform(h, Ln), t.boneTransform(u, Rn));
        const p = function(t, e, n, i, r, s, a, o) {
            let l;
            if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o), null === l) return null;
            Un.copy(o), Un.applyMatrix4(t.matrixWorld);
            const c = n.ray.origin.distanceTo(Un);
            return c < n.near || c > n.far ? null : {
                distance: c,
                point: Un.clone(),
                object: t
            };
        }(t, e, n, i, An, Ln, Rn, Hn);
        if (p) {
            o && (zn.fromBufferAttribute(o, c), Fn.fromBufferAttribute(o, h), On.fromBufferAttribute(o, u), p.uv = ke.getUV(Hn, An, Ln, Rn, zn, Fn, On, new vt)), l && (zn.fromBufferAttribute(l, c), Fn.fromBufferAttribute(l, h), On.fromBufferAttribute(l, u), p.uv2 = ke.getUV(Hn, An, Ln, Rn, zn, Fn, On, new vt));
            const t = {
                a: c,
                b: h,
                c: u,
                normal: new Rt,
                materialIndex: 0
            };
            ke.getNormal(An, Ln, Rn, t.normal), p.face = t;
        }
        return p;
    }
    Gn.prototype.isMesh = !0;
    class Vn extends wn {
        constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1){
            super(), this.type = "BoxGeometry", this.parameters = {
                width: t,
                height: e,
                depth: n,
                widthSegments: i,
                heightSegments: r,
                depthSegments: s
            };
            const a = this;
            i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
            const o = [], l = [], c = [], h = [];
            let u = 0, d = 0;
            function p(t, e, n, i, r, s, p, m, f, g, v) {
                const y = s / f, x = p / g, _ = s / 2, b = p / 2, M = m / 2, w = f + 1, S = g + 1;
                let T = 0, E = 0;
                const A = new Rt;
                for(let s = 0; s < S; s++){
                    const a = s * x - b;
                    for(let o = 0; o < w; o++){
                        const u = o * y - _;
                        A[t] = u * i, A[e] = a * r, A[n] = M, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = m > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(o / f), h.push(1 - s / g), T += 1;
                    }
                }
                for(let t = 0; t < g; t++)for(let e = 0; e < f; e++){
                    const n = u + e + w * t, i = u + e + w * (t + 1), r = u + (e + 1) + w * (t + 1), s = u + (e + 1) + w * t;
                    o.push(n, i, s), o.push(i, r, s), E += 6;
                }
                a.addGroup(d, E, v), d += E, u += T;
            }
            p("z", "y", "x", -1, -1, n, e, t, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, s, 2), p("x", "z", "y", 1, -1, t, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new un(l, 3)), this.setAttribute("normal", new un(c, 3)), this.setAttribute("uv", new un(h, 2));
        }
        static fromJSON(t) {
            return new Vn(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
        }
    }
    function Wn(t) {
        const e = {};
        for(const n in t){
            e[n] = {};
            for(const i in t[n]){
                const r = t[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r;
            }
        }
        return e;
    }
    function jn(t) {
        const e = {};
        for(let n = 0; n < t.length; n++){
            const i = Wn(t[n]);
            for(const t in i)e[t] = i[t];
        }
        return e;
    }
    const qn = {
        clone: Wn,
        merge: jn
    };
    class Xn extends We {
        constructor(t){
            super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            }, this.defaultAttributeValues = {
                color: [
                    1,
                    1,
                    1
                ],
                uv: [
                    0,
                    0
                ],
                uv2: [
                    0,
                    0
                ]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t));
        }
        copy(t) {
            return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Wn(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            e.glslVersion = this.glslVersion, e.uniforms = {};
            for(const n in this.uniforms){
                const i = this.uniforms[n].value;
                i && i.isTexture ? e.uniforms[n] = {
                    type: "t",
                    value: i.toJSON(t).uuid
                } : i && i.isColor ? e.uniforms[n] = {
                    type: "c",
                    value: i.getHex()
                } : i && i.isVector2 ? e.uniforms[n] = {
                    type: "v2",
                    value: i.toArray()
                } : i && i.isVector3 ? e.uniforms[n] = {
                    type: "v3",
                    value: i.toArray()
                } : i && i.isVector4 ? e.uniforms[n] = {
                    type: "v4",
                    value: i.toArray()
                } : i && i.isMatrix3 ? e.uniforms[n] = {
                    type: "m3",
                    value: i.toArray()
                } : i && i.isMatrix4 ? e.uniforms[n] = {
                    type: "m4",
                    value: i.toArray()
                } : e.uniforms[n] = {
                    value: i
                };
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
            const n = {};
            for(const t in this.extensions)!0 === this.extensions[t] && (n[t] = !0);
            return Object.keys(n).length > 0 && (e.extensions = n), e;
        }
    }
    Xn.prototype.isShaderMaterial = !0;
    class Yn extends Pe {
        constructor(){
            super(), this.type = "Camera", this.matrixWorldInverse = new ae, this.projectionMatrix = new ae, this.projectionMatrixInverse = new ae;
        }
        copy(t, e) {
            return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize();
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t, e) {
            super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    Yn.prototype.isCamera = !0;
    class Jn extends Yn {
        constructor(t = 50, e = 1, n = .1, i = 2e3){
            super(), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
        }
        copy(t, e) {
            return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
        }
        setFocalLength(t) {
            const e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * lt * Math.atan(e), this.updateProjectionMatrix();
        }
        getFocalLength() {
            const t = Math.tan(.5 * ot * this.fov);
            return .5 * this.getFilmHeight() / t;
        }
        getEffectiveFOV() {
            return 2 * lt * Math.atan(Math.tan(.5 * ot * this.fov) / this.zoom);
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t, e, n, i, r, s) {
            this.aspect = t / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = this.near;
            let e = t * Math.tan(.5 * ot * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
            const s = this.view;
            if (null !== this.view && this.view.enabled) {
                const t = s.fullWidth, a = s.fullHeight;
                r += s.offsetX * i / t, e -= s.offsetY * n / a, i *= s.width / t, n *= s.height / a;
            }
            const a = this.filmOffset;
            0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
        }
    }
    Jn.prototype.isPerspectiveCamera = !0;
    const Zn = 90;
    class Qn extends Pe {
        constructor(t, e, n){
            if (super(), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            this.renderTarget = n;
            const i = new Jn(Zn, 1, t, e);
            i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new Rt(1, 0, 0)), this.add(i);
            const r = new Jn(Zn, 1, t, e);
            r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new Rt(-1, 0, 0)), this.add(r);
            const s = new Jn(Zn, 1, t, e);
            s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new Rt(0, 1, 0)), this.add(s);
            const a = new Jn(Zn, 1, t, e);
            a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new Rt(0, -1, 0)), this.add(a);
            const o = new Jn(Zn, 1, t, e);
            o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new Rt(0, 0, 1)), this.add(o);
            const l = new Jn(Zn, 1, t, e);
            l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new Rt(0, 0, -1)), this.add(l);
        }
        update(t, e) {
            null === this.parent && this.updateMatrixWorld();
            const n = this.renderTarget, [i, r, s, a, o, l] = this.children, c = t.xr.enabled, h = t.getRenderTarget();
            t.xr.enabled = !1;
            const u = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, a), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = u, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(h), t.xr.enabled = c;
        }
    }
    class Kn extends Mt {
        constructor(t, e, n, i, s, a, o, l, c, h){
            super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : r, n, i, s, a, o = void 0 !== o ? o : T, l, c, h), this._needsFlipEnvMap = !0, this.flipY = !1;
        }
        get images() {
            return this.image;
        }
        set images(t) {
            this.image = t;
        }
    }
    Kn.prototype.isCubeTexture = !0;
    class $n extends Tt {
        constructor(t, e, n){
            Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), super(t, t, e), e = e || {}, this.texture = new Kn(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : g, this.texture._needsFlipEnvMap = !1;
        }
        fromEquirectangularTexture(t, e) {
            this.texture.type = e.type, this.texture.format = E, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
            const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
                fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
            }, i = new Vn(5, 5, 5), r = new Xn({
                name: "CubemapFromEquirect",
                uniforms: Wn(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: 1,
                blending: 0
            });
            r.uniforms.tEquirect.value = e;
            const s = new Gn(i, r), a = e.minFilter;
            e.minFilter === y && (e.minFilter = g);
            return new Qn(1, 10, this).update(t, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
        }
        clear(t, e, n, i) {
            const r = t.getRenderTarget();
            for(let r = 0; r < 6; r++)t.setRenderTarget(this, r), t.clear(e, n, i);
            t.setRenderTarget(r);
        }
    }
    $n.prototype.isWebGLCubeRenderTarget = !0;
    const ti = new Rt, ei = new Rt, ni = new yt;
    class ii {
        constructor(t = new Rt(1, 0, 0), e = 0){
            this.normal = t, this.constant = e;
        }
        set(t, e) {
            return this.normal.copy(t), this.constant = e, this;
        }
        setComponents(t, e, n, i) {
            return this.normal.set(t, e, n), this.constant = i, this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
        }
        setFromCoplanarPoints(t, e, n) {
            const i = ti.subVectors(n, e).cross(ei.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t), this;
        }
        copy(t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this;
        }
        normalize() {
            const t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this;
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this;
        }
        distanceToPoint(t) {
            return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
            return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
            return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
        }
        intersectLine(t, e) {
            const n = t.delta(ti), i = this.normal.dot(n);
            if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
            const r = -(t.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
        }
        intersectsLine(t) {
            const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0;
        }
        intersectsBox(t) {
            return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
            return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
            return t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
            const n = e || ni.getNormalMatrix(t), i = this.coplanarPoint(ti).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r), this;
        }
        translate(t) {
            return this.constant -= t.dot(this.normal), this;
        }
        equals(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    ii.prototype.isPlane = !0;
    const ri = new Qt, si = new Rt;
    class ai {
        constructor(t = new ii, e = new ii, n = new ii, i = new ii, r = new ii, s = new ii){
            this.planes = [
                t,
                e,
                n,
                i,
                r,
                s
            ];
        }
        set(t, e, n, i, r, s) {
            const a = this.planes;
            return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
        }
        copy(t) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)e[n].copy(t.planes[n]);
            return this;
        }
        setFromProjectionMatrix(t) {
            const e = this.planes, n = t.elements, i = n[0], r = n[1], s = n[2], a = n[3], o = n[4], l = n[5], c = n[6], h = n[7], u = n[8], d = n[9], p = n[10], m = n[11], f = n[12], g = n[13], v = n[14], y = n[15];
            return e[0].setComponents(a - i, h - o, m - u, y - f).normalize(), e[1].setComponents(a + i, h + o, m + u, y + f).normalize(), e[2].setComponents(a + r, h + l, m + d, y + g).normalize(), e[3].setComponents(a - r, h - l, m - d, y - g).normalize(), e[4].setComponents(a - s, h - c, m - p, y - v).normalize(), e[5].setComponents(a + s, h + c, m + p, y + v).normalize(), this;
        }
        intersectsObject(t) {
            const e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(ri);
        }
        intersectsSprite(t) {
            return ri.center.set(0, 0, 0), ri.radius = .7071067811865476, ri.applyMatrix4(t.matrixWorld), this.intersectsSphere(ri);
        }
        intersectsSphere(t) {
            const e = this.planes, n = t.center, i = -t.radius;
            for(let t = 0; t < 6; t++){
                if (e[t].distanceToPoint(n) < i) return !1;
            }
            return !0;
        }
        intersectsBox(t) {
            const e = this.planes;
            for(let n = 0; n < 6; n++){
                const i = e[n];
                if (si.x = i.normal.x > 0 ? t.max.x : t.min.x, si.y = i.normal.y > 0 ? t.max.y : t.min.y, si.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(si) < 0) return !1;
            }
            return !0;
        }
        containsPoint(t) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)if (e[n].distanceToPoint(t) < 0) return !1;
            return !0;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    function oi() {
        let t = null, e = !1, n = null, i = null;
        function r(e, s) {
            n(e, s), i = t.requestAnimationFrame(r);
        }
        return {
            start: function() {
                !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0);
            },
            stop: function() {
                t.cancelAnimationFrame(i), e = !1;
            },
            setAnimationLoop: function(t) {
                n = t;
            },
            setContext: function(e) {
                t = e;
            }
        };
    }
    function li(t, e) {
        const n = e.isWebGL2, i = new WeakMap;
        return {
            get: function(t) {
                return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
            },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const n = i.get(e);
                n && (t.deleteBuffer(n.buffer), i.delete(e));
            },
            update: function(e, r) {
                if (e.isGLBufferAttribute) {
                    const t = i.get(e);
                    return void ((!t || t.version < e.version) && i.set(e, {
                        buffer: e.buffer,
                        type: e.type,
                        bytesPerElement: e.elementSize,
                        version: e.version
                    }));
                }
                e.isInterleavedBufferAttribute && (e = e.data);
                const s = i.get(e);
                void 0 === s ? i.set(e, function(e, i) {
                    const r = e.array, s = e.usage, a = t.createBuffer();
                    t.bindBuffer(i, a), t.bufferData(i, r, s), e.onUploadCallback();
                    let o = 5126;
                    return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? o = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : (r instanceof Uint8Array || r instanceof Uint8ClampedArray) && (o = 5121), {
                        buffer: a,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    };
                }(e, r)) : s.version < e.version && (!function(e, i, r) {
                    const s = i.array, a = i.updateRange;
                    t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1);
                }(s.buffer, e, r), s.version = e.version);
            }
        };
    }
    class ci extends wn {
        constructor(t = 1, e = 1, n = 1, i = 1){
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: n,
                heightSegments: i
            };
            const r = t / 2, s = e / 2, a = Math.floor(n), o = Math.floor(i), l = a + 1, c = o + 1, h = t / a, u = e / o, d = [], p = [], m = [], f = [];
            for(let t = 0; t < c; t++){
                const e = t * u - s;
                for(let n = 0; n < l; n++){
                    const i = n * h - r;
                    p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t / o);
                }
            }
            for(let t = 0; t < o; t++)for(let e = 0; e < a; e++){
                const n = e + l * t, i = e + l * (t + 1), r = e + 1 + l * (t + 1), s = e + 1 + l * t;
                d.push(n, i, s), d.push(i, r, s);
            }
            this.setIndex(d), this.setAttribute("position", new un(p, 3)), this.setAttribute("normal", new un(m, 3)), this.setAttribute("uv", new un(f, 2));
        }
        static fromJSON(t) {
            return new ci(t.width, t.height, t.widthSegments, t.heightSegments);
        }
    }
    const hi = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	return vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n#else\n	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n	}\n	return 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotVH ) {\n	float fresnel = exp2( ( -5.55473 * dotVH - 6.98316 ) * dotVH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n	return Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + viewDir );\n	float dotNL = saturate( dot( normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n	return specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n	vec3 FssEss = F * brdf.x + brdf.y;\n	float Ess = brdf.x + brdf.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n	float invAlpha = 1.0 / roughness;\n	float cos2h = NoH * NoH;\n	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n	vec3 N = geometry.normal;\n	vec3 V = geometry.viewDir;\n	vec3 H = normalize( V + L );\n	float dotNH = saturate( dot( N, H ) );\n	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
        color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
        color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
        common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_maxMipLevel 8.0\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_maxTileSize 256.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n		vec2 f = fract( uv );\n		uv += 0.5 - f;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		if ( mipInt < cubeUV_maxMipLevel ) {\n			uv.y += 2.0 * cubeUV_maxTileSize;\n		}\n		uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n		uv *= texelSize;\n		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n		uv.x += texelSize;\n		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n		uv.y += texelSize;\n		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n		uv.x -= texelSize;\n		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n		vec3 tm = mix( tl, tr, f.x );\n		vec3 bm = mix( bl, br, f.x );\n		return mix( tm, bm, f.y );\n	}\n	#define r0 1.0\n	#define v0 0.339\n	#define m0 - 2.0\n	#define r1 0.8\n	#define v1 0.276\n	#define m1 - 1.0\n	#define r4 0.4\n	#define v4 0.046\n	#define m4 2.0\n	#define r5 0.305\n	#define v5 0.016\n	#define m5 3.0\n	#define r6 0.21\n	#define v6 0.0038\n	#define m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= r1 ) {\n			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n		} else if ( roughness >= r4 ) {\n			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n		} else if ( roughness >= r5 ) {\n			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n		} else if ( roughness >= r6 ) {\n			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n	float maxComponent = max( max( value.r, value.g ), value.b );\n	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.r, max( value.g, value.b ) );\n	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n	M = ceil( M * 255.0 ) / 255.0;\n	return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.r, max( value.g, value.b ) );\n	float D = max( maxRange / maxRGB, 1.0 );\n	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n	vec4 vResult;\n	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n	vResult.w = fract( Le );\n	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n	return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n	float Le = value.z * 255.0 + value.w;\n	vec3 Xp_Y_XYZp;\n	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n	return vec4( max( vRGB, 0.0 ), 1.0 );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifndef ENVMAP_TYPE_CUBE_UV\n		envColor = envMapTexelToLinear( envColor );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform int maxMipLevel;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	#ifdef ENVMAP_MODE_REFRACTION\n		uniform float refractionRatio;\n	#endif\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float sigma = PI * roughness * roughness / ( 1.0 + roughness );\n		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n		#else\n			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n		#endif\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n	fogDepth = - mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n	varying float fogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float fogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return texture2D( gradientMap, coord ).rgb;\n	#else\n		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n	#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		directLight.color = pointLight.color;\n		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n		directLight.visible = ( directLight.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( angleCos > spotLight.coneCos ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheen;\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float specularRoughness;\n	vec3 specularColor;\n#ifdef CLEARCOAT\n	float clearcoat;\n	float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	vec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.specularRoughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(		0, 1,		0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifdef CLEARCOAT\n		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = ccDotNL * directLight.color;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			ccIrradiance *= PI;\n		#endif\n		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n	#else\n		float clearcoatDHR = 0.0;\n	#endif\n	#ifdef USE_SHEEN\n		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n			material.specularRoughness,\n			directLight.direction,\n			geometry,\n			material.sheenColor\n		);\n	#else\n		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n	#endif\n	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef CLEARCOAT\n		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n		float ccDotNL = ccDotNV;\n		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n	#else\n		float clearcoatDHR = 0.0;\n	#endif\n	float clearcoatInv = 1.0 - clearcoatDHR;\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n	#ifdef CLEARCOAT\n		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n	#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	vec4 mapTexel = texture2D( map, uv );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifndef USE_MORPHNORMALS\n		uniform float morphTargetInfluences[ 8 ];\n	#else\n		uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n	transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n	transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n	transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n		transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n		transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n		transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n		transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n	#endif\n#endif",
        normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n							f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n							f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform highp sampler2D boneTexture;\n		uniform int boneTextureSize;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureSize ) );\n			float y = floor( j / float( boneTextureSize ) );\n			float dx = 1.0 / float( boneTextureSize );\n			float dy = 1.0 / float( boneTextureSize );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,	1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
        transmission_fragment: "#ifdef USE_TRANSMISSION\n	float transmissionFactor = transmission;\n	float thicknessFactor = thickness;\n	#ifdef USE_TRANSMISSIONMAP\n		transmissionFactor *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSNMAP\n		thicknessFactor *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition.xyz / vWorldPosition.w;\n	vec3 v = normalize( cameraPosition - pos );\n	float ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );\n	vec3 transmission = transmissionFactor * getIBLVolumeRefraction(\n		normal, v, roughnessFactor, material.diffuseColor, totalSpecular,\n		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n		attenuationColor, attenuationDistance );\n	totalDiffuse = mix( totalDiffuse, transmission, transmissionFactor );\n#endif",
        transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec4 vWorldPosition;\n	vec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {\n		vec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);\n		vec3 modelScale;\n		modelScale.x = length(vec3(modelMatrix[0].xyz));\n		modelScale.y = length(vec3(modelMatrix[1].xyz));\n		modelScale.z = length(vec3(modelMatrix[2].xyz));\n		return normalize(refractionVector) * thickness * modelScale;\n	}\n	float applyIorToRoughness(float roughness, float ior) {\n		return roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);\n	}\n	vec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {\n		float framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);\n		return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;\n	}\n	vec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {\n		if (attenuationDistance == 0.0) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;\n			vec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);			return transmittance * radiance;\n		}\n	}\n	vec3 getIBLVolumeRefraction(vec3 n, vec3 v, float perceptualRoughness, vec3 baseColor, vec3 specularColor,\n		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,\n		vec3 attenuationColor, float attenuationDistance) {\n		vec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);\n		vec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);\n		return (1.0 - specularColor) * attenuatedColor * baseColor;\n	}\n#endif",
        uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
        uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	gl_FragColor = mapTexelToLinear( texColor );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	vec4 texColor = texture2D( tEquirect, sampleUV );\n	gl_FragColor = mapTexelToLinear( texColor );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n	\n		vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n		matcapColor = matcapTexelToLinear( matcapColor );\n	#else\n		vec4 matcapColor = vec4( 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#ifndef FLAT_SHADED\n		vNormal = normalize( transformedNormal );\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define REFLECTIVITY\n	#define CLEARCOAT\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform vec3 attenuationColor;\n	uniform float attenuationDistance;\n#endif\n#ifdef REFLECTIVITY\n	uniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <transmission_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#ifdef USE_TRANSMISSION\n	varying vec4 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition;\n#endif\n}",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}"
    }, ui = {
        common: {
            diffuse: {
                value: new Qe(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new yt
            },
            uv2Transform: {
                value: new yt
            },
            alphaMap: {
                value: null
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new vt(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Qe(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new Qe(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new yt
            }
        },
        sprite: {
            diffuse: {
                value: new Qe(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new vt(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            uvTransform: {
                value: new yt
            }
        }
    }, di = {
        basic: {
            uniforms: jn([
                ui.common,
                ui.specularmap,
                ui.envmap,
                ui.aomap,
                ui.lightmap,
                ui.fog
            ]),
            vertexShader: hi.meshbasic_vert,
            fragmentShader: hi.meshbasic_frag
        },
        lambert: {
            uniforms: jn([
                ui.common,
                ui.specularmap,
                ui.envmap,
                ui.aomap,
                ui.lightmap,
                ui.emissivemap,
                ui.fog,
                ui.lights,
                {
                    emissive: {
                        value: new Qe(0)
                    }
                }
            ]),
            vertexShader: hi.meshlambert_vert,
            fragmentShader: hi.meshlambert_frag
        },
        phong: {
            uniforms: jn([
                ui.common,
                ui.specularmap,
                ui.envmap,
                ui.aomap,
                ui.lightmap,
                ui.emissivemap,
                ui.bumpmap,
                ui.normalmap,
                ui.displacementmap,
                ui.fog,
                ui.lights,
                {
                    emissive: {
                        value: new Qe(0)
                    },
                    specular: {
                        value: new Qe(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }
            ]),
            vertexShader: hi.meshphong_vert,
            fragmentShader: hi.meshphong_frag
        },
        standard: {
            uniforms: jn([
                ui.common,
                ui.envmap,
                ui.aomap,
                ui.lightmap,
                ui.emissivemap,
                ui.bumpmap,
                ui.normalmap,
                ui.displacementmap,
                ui.roughnessmap,
                ui.metalnessmap,
                ui.fog,
                ui.lights,
                {
                    emissive: {
                        value: new Qe(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: hi.meshphysical_vert,
            fragmentShader: hi.meshphysical_frag
        },
        toon: {
            uniforms: jn([
                ui.common,
                ui.aomap,
                ui.lightmap,
                ui.emissivemap,
                ui.bumpmap,
                ui.normalmap,
                ui.displacementmap,
                ui.gradientmap,
                ui.fog,
                ui.lights,
                {
                    emissive: {
                        value: new Qe(0)
                    }
                }
            ]),
            vertexShader: hi.meshtoon_vert,
            fragmentShader: hi.meshtoon_frag
        },
        matcap: {
            uniforms: jn([
                ui.common,
                ui.bumpmap,
                ui.normalmap,
                ui.displacementmap,
                ui.fog,
                {
                    matcap: {
                        value: null
                    }
                }
            ]),
            vertexShader: hi.meshmatcap_vert,
            fragmentShader: hi.meshmatcap_frag
        },
        points: {
            uniforms: jn([
                ui.points,
                ui.fog
            ]),
            vertexShader: hi.points_vert,
            fragmentShader: hi.points_frag
        },
        dashed: {
            uniforms: jn([
                ui.common,
                ui.fog,
                {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }
            ]),
            vertexShader: hi.linedashed_vert,
            fragmentShader: hi.linedashed_frag
        },
        depth: {
            uniforms: jn([
                ui.common,
                ui.displacementmap
            ]),
            vertexShader: hi.depth_vert,
            fragmentShader: hi.depth_frag
        },
        normal: {
            uniforms: jn([
                ui.common,
                ui.bumpmap,
                ui.normalmap,
                ui.displacementmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: hi.normal_vert,
            fragmentShader: hi.normal_frag
        },
        sprite: {
            uniforms: jn([
                ui.sprite,
                ui.fog
            ]),
            vertexShader: hi.sprite_vert,
            fragmentShader: hi.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new yt
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: hi.background_vert,
            fragmentShader: hi.background_frag
        },
        cube: {
            uniforms: jn([
                ui.envmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: hi.cube_vert,
            fragmentShader: hi.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: hi.equirect_vert,
            fragmentShader: hi.equirect_frag
        },
        distanceRGBA: {
            uniforms: jn([
                ui.common,
                ui.displacementmap,
                {
                    referencePosition: {
                        value: new Rt
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }
            ]),
            vertexShader: hi.distanceRGBA_vert,
            fragmentShader: hi.distanceRGBA_frag
        },
        shadow: {
            uniforms: jn([
                ui.lights,
                ui.fog,
                {
                    color: {
                        value: new Qe(0)
                    },
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: hi.shadow_vert,
            fragmentShader: hi.shadow_frag
        }
    };
    function pi(t, e, n, i, r) {
        const s = new Qe(0);
        let a, o, c = 0, h = null, u = 0, d = null;
        function p(t, e) {
            n.buffers.color.setClear(t.r, t.g, t.b, e, r);
        }
        return {
            getClearColor: function() {
                return s;
            },
            setClearColor: function(t, e = 1) {
                s.set(t), c = e, p(s, c);
            },
            getClearAlpha: function() {
                return c;
            },
            setClearAlpha: function(t) {
                c = t, p(s, c);
            },
            render: function(n, r) {
                let m = !1, f = !0 === r.isScene ? r.background : null;
                f && f.isTexture && (f = e.get(f));
                const g = t.xr, v = g.getSession && g.getSession();
                v && "additive" === v.environmentBlendMode && (f = null), null === f ? p(s, c) : f && f.isColor && (p(f, 1), m = !0), (t.autoClear || m) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), f && (f.isCubeTexture || f.mapping === l) ? (void 0 === o && (o = new Gn(new Vn(1, 1, 1), new Xn({
                    name: "BackgroundCubeMaterial",
                    uniforms: Wn(di.cube.uniforms),
                    vertexShader: di.cube.vertexShader,
                    fragmentShader: di.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), o.geometry.deleteAttribute("normal"), o.geometry.deleteAttribute("uv"), o.onBeforeRender = function(t, e, n) {
                    this.matrixWorld.copyPosition(n.matrixWorld);
                }, Object.defineProperty(o.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value;
                    }
                }), i.update(o)), o.material.uniforms.envMap.value = f, o.material.uniforms.flipEnvMap.value = f.isCubeTexture && f._needsFlipEnvMap ? -1 : 1, h === f && u === f.version && d === t.toneMapping || (o.material.needsUpdate = !0, h = f, u = f.version, d = t.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null)) : f && f.isTexture && (void 0 === a && (a = new Gn(new ci(2, 2), new Xn({
                    name: "BackgroundMaterial",
                    uniforms: Wn(di.background.uniforms),
                    vertexShader: di.background.vertexShader,
                    fragmentShader: di.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), a.geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value;
                    }
                }), i.update(a)), a.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), a.material.uniforms.uvTransform.value.copy(f.matrix), h === f && u === f.version && d === t.toneMapping || (a.material.needsUpdate = !0, h = f, u = f.version, d = t.toneMapping), n.unshift(a, a.geometry, a.material, 0, 0, null));
            }
        };
    }
    function mi(t, e, n, i) {
        const r = t.getParameter(34921), s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = i.isWebGL2 || null !== s, o = {}, l = d(null);
        let c = l;
        function h(e) {
            return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e);
        }
        function u(e) {
            return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
        }
        function d(t) {
            const e = [], n = [], i = [];
            for(let t = 0; t < r; t++)e[t] = 0, n[t] = 0, i[t] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: e,
                enabledAttributes: n,
                attributeDivisors: i,
                object: t,
                attributes: {},
                index: null
            };
        }
        function p() {
            const t = c.newAttributes;
            for(let e = 0, n = t.length; e < n; e++)t[e] = 0;
        }
        function m(t) {
            f(t, 0);
        }
        function f(n, r) {
            const s = c.newAttributes, a = c.enabledAttributes, o = c.attributeDivisors;
            if (s[n] = 1, 0 === a[n] && (t.enableVertexAttribArray(n), a[n] = 1), o[n] !== r) (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r;
        }
        function g() {
            const e = c.newAttributes, n = c.enabledAttributes;
            for(let i = 0, r = n.length; i < r; i++)n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0);
        }
        function v(e, n, r, s, a, o) {
            !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o);
        }
        function y() {
            x(), c !== l && (c = l, h(c.object));
        }
        function x() {
            l.geometry = null, l.program = null, l.wireframe = !1;
        }
        return {
            setup: function(r, l, u, y, x) {
                let _ = !1;
                if (a) {
                    const e = function(e, n, r) {
                        const a = !0 === r.wireframe;
                        let l = o[e.id];
                        void 0 === l && (l = {}, o[e.id] = l);
                        let c = l[n.id];
                        void 0 === c && (c = {}, l[n.id] = c);
                        let h = c[a];
                        void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), c[a] = h);
                        return h;
                    }(y, u, l);
                    c !== e && (c = e, h(c.object)), _ = function(t, e) {
                        const n = c.attributes, i = t.attributes;
                        let r = 0;
                        for(const t in i){
                            const e = n[t], s = i[t];
                            if (void 0 === e) return !0;
                            if (e.attribute !== s) return !0;
                            if (e.data !== s.data) return !0;
                            r++;
                        }
                        return c.attributesNum !== r || c.index !== e;
                    }(y, x), _ && function(t, e) {
                        const n = {}, i = t.attributes;
                        let r = 0;
                        for(const t in i){
                            const e = i[t], s = {};
                            s.attribute = e, e.data && (s.data = e.data), n[t] = s, r++;
                        }
                        c.attributes = n, c.attributesNum = r, c.index = e;
                    }(y, x);
                } else {
                    const t = !0 === l.wireframe;
                    c.geometry === y.id && c.program === u.id && c.wireframe === t || (c.geometry = y.id, c.program = u.id, c.wireframe = t, _ = !0);
                }
                !0 === r.isInstancedMesh && (_ = !0), null !== x && n.update(x, 34963), _ && (!function(r, s, a, o) {
                    if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                    p();
                    const l = o.attributes, c = a.getAttributes(), h = s.defaultAttributeValues;
                    for(const e in c){
                        const i = c[e];
                        if (i >= 0) {
                            const s = l[e];
                            if (void 0 !== s) {
                                const e = s.normalized, r = s.itemSize, a = n.get(s);
                                if (void 0 === a) continue;
                                const l = a.buffer, c = a.type, h = a.bytesPerElement;
                                if (s.isInterleavedBufferAttribute) {
                                    const n = s.data, a = n.stride, u = s.offset;
                                    n && n.isInstancedInterleavedBuffer ? (f(i, n.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)) : m(i), t.bindBuffer(34962, l), v(i, r, c, e, a * h, u * h);
                                } else s.isInstancedBufferAttribute ? (f(i, s.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)) : m(i), t.bindBuffer(34962, l), v(i, r, c, e, 0, 0);
                            } else if ("instanceMatrix" === e) {
                                const e = n.get(r.instanceMatrix);
                                if (void 0 === e) continue;
                                const s = e.buffer, a = e.type;
                                f(i + 0, 1), f(i + 1, 1), f(i + 2, 1), f(i + 3, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(i + 0, 4, a, !1, 64, 0), t.vertexAttribPointer(i + 1, 4, a, !1, 64, 16), t.vertexAttribPointer(i + 2, 4, a, !1, 64, 32), t.vertexAttribPointer(i + 3, 4, a, !1, 64, 48);
                            } else if ("instanceColor" === e) {
                                const e = n.get(r.instanceColor);
                                if (void 0 === e) continue;
                                const s = e.buffer, a = e.type;
                                f(i, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(i, 3, a, !1, 12, 0);
                            } else if (void 0 !== h) {
                                const n = h[e];
                                if (void 0 !== n) switch(n.length){
                                    case 2:
                                        t.vertexAttrib2fv(i, n);
                                        break;
                                    case 3:
                                        t.vertexAttrib3fv(i, n);
                                        break;
                                    case 4:
                                        t.vertexAttrib4fv(i, n);
                                        break;
                                    default:
                                        t.vertexAttrib1fv(i, n);
                                }
                            }
                        }
                    }
                    g();
                }(r, l, u, y), null !== x && t.bindBuffer(34963, n.get(x).buffer));
            },
            reset: y,
            resetDefaultState: x,
            dispose: function() {
                y();
                for(const t in o){
                    const e = o[t];
                    for(const t in e){
                        const n = e[t];
                        for(const t in n)u(n[t].object), delete n[t];
                        delete e[t];
                    }
                    delete o[t];
                }
            },
            releaseStatesOfGeometry: function(t) {
                if (void 0 === o[t.id]) return;
                const e = o[t.id];
                for(const t in e){
                    const n = e[t];
                    for(const t in n)u(n[t].object), delete n[t];
                    delete e[t];
                }
                delete o[t.id];
            },
            releaseStatesOfProgram: function(t) {
                for(const e in o){
                    const n = o[e];
                    if (void 0 === n[t.id]) continue;
                    const i = n[t.id];
                    for(const t in i)u(i[t].object), delete i[t];
                    delete n[t.id];
                }
            },
            initAttributes: p,
            enableAttribute: m,
            disableUnusedAttributes: g
        };
    }
    function fi(t, e, n, i) {
        const r = i.isWebGL2;
        let s;
        this.setMode = function(t) {
            s = t;
        }, this.render = function(e, i) {
            t.drawArrays(s, e, i), n.update(i, s, 1);
        }, this.renderInstances = function(i, a, o) {
            if (0 === o) return;
            let l, c;
            if (r) l = t, c = "drawArraysInstanced";
            else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](s, i, a, o), n.update(a, s, o);
        };
    }
    function gi(t, e, n) {
        let i;
        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                e = "mediump";
            }
            return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
        }
        const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
        let a = void 0 !== n.precision ? n.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
        const l = s || e.has("WEBGL_draw_buffers"), c = !0 === n.logarithmicDepthBuffer, h = t.getParameter(34930), u = t.getParameter(35660), d = t.getParameter(3379), p = t.getParameter(34076), m = t.getParameter(34921), f = t.getParameter(36347), g = t.getParameter(36348), v = t.getParameter(36349), y = u > 0, x = s || e.has("OES_texture_float");
        return {
            isWebGL2: s,
            drawBuffers: l,
            getMaxAnisotropy: function() {
                if (void 0 !== i) return i;
                if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                    const n = e.get("EXT_texture_filter_anisotropic");
                    i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                } else i = 0;
                return i;
            },
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: m,
            maxVertexUniforms: f,
            maxVaryings: g,
            maxFragmentUniforms: v,
            vertexTextures: y,
            floatFragmentTextures: x,
            floatVertexTextures: y && x,
            maxSamples: s ? t.getParameter(36183) : 0
        };
    }
    function vi(t) {
        const e = this;
        let n = null, i = 0, r = !1, s = !1;
        const a = new ii, o = new yt, l = {
            value: null,
            needsUpdate: !1
        };
        function c() {
            l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
        }
        function h(t, n, i, r) {
            const s = null !== t ? t.length : 0;
            let c = null;
            if (0 !== s) {
                if (c = l.value, !0 !== r || null === c) {
                    const e = i + 4 * s, r = n.matrixWorldInverse;
                    o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                    for(let e = 0, n = i; e !== s; ++e, n += 4)a.copy(t[e]).applyMatrix4(r, o), a.normal.toArray(c, n), c[n + 3] = a.constant;
                }
                l.value = c, l.needsUpdate = !0;
            }
            return e.numPlanes = s, e.numIntersection = 0, c;
        }
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, s) {
            const a = 0 !== t.length || e || 0 !== i || r;
            return r = e, n = h(t, s, 0), i = t.length, a;
        }, this.beginShadows = function() {
            s = !0, h(null);
        }, this.endShadows = function() {
            s = !1, c();
        }, this.setState = function(e, a, o) {
            const u = e.clippingPlanes, d = e.clipIntersection, p = e.clipShadows, m = t.get(e);
            if (!r || null === u || 0 === u.length || s && !p) s ? h(null) : c();
            else {
                const t = s ? 0 : i, e = 4 * t;
                let r = m.clippingState || null;
                l.value = r, r = h(u, a, e, o);
                for(let t = 0; t !== e; ++t)r[t] = n[t];
                m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t;
            }
        };
    }
    function yi(t) {
        let e = new WeakMap;
        function n(t, e) {
            return e === a ? t.mapping = r : e === o && (t.mapping = s), t;
        }
        function i(t) {
            const n = t.target;
            n.removeEventListener("dispose", i);
            const r = e.get(n);
            void 0 !== r && (e.delete(n), r.dispose());
        }
        return {
            get: function(r) {
                if (r && r.isTexture) {
                    const s = r.mapping;
                    if (s === a || s === o) {
                        if (e.has(r)) return n(e.get(r).texture, r.mapping);
                        {
                            const s = r.image;
                            if (s && s.height > 0) {
                                const a = t.getRenderTarget(), o = new $n(s.height / 2);
                                return o.fromEquirectangularTexture(t, r), e.set(r, o), t.setRenderTarget(a), r.addEventListener("dispose", i), n(o.texture, r.mapping);
                            }
                            return null;
                        }
                    }
                }
                return r;
            },
            dispose: function() {
                e = new WeakMap;
            }
        };
    }
    function xi(t) {
        const e = {};
        function n(n) {
            if (void 0 !== e[n]) return e[n];
            let i;
            switch(n){
                case "WEBGL_depth_texture":
                    i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    i = t.getExtension(n);
            }
            return e[n] = i, i;
        }
        return {
            has: function(t) {
                return null !== n(t);
            },
            init: function(t) {
                t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float");
            },
            get: function(t) {
                const e = n(t);
                return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e;
            }
        };
    }
    function _i(t, e, n, i) {
        const r = {}, s = new WeakMap;
        function a(t) {
            const o = t.target;
            null !== o.index && e.remove(o.index);
            for(const t in o.attributes)e.remove(o.attributes[t]);
            o.removeEventListener("dispose", a), delete r[o.id];
            const l = s.get(o);
            l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--;
        }
        function o(t) {
            const n = [], i = t.index, r = t.attributes.position;
            let a = 0;
            if (null !== i) {
                const t = i.array;
                a = i.version;
                for(let e = 0, i = t.length; e < i; e += 3){
                    const i = t[e + 0], r = t[e + 1], s = t[e + 2];
                    n.push(i, r, r, s, s, i);
                }
            } else {
                const t = r.array;
                a = r.version;
                for(let e = 0, i = t.length / 3 - 1; e < i; e += 3){
                    const t = e + 0, i = e + 1, r = e + 2;
                    n.push(t, i, i, r, r, t);
                }
            }
            const o = new (pn(n) > 65535 ? cn : on)(n, 1);
            o.version = a;
            const l = s.get(t);
            l && e.remove(l), s.set(t, o);
        }
        return {
            get: function(t, e) {
                return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, n.memory.geometries++), e;
            },
            update: function(t) {
                const n = t.attributes;
                for(const t in n)e.update(n[t], 34962);
                const i = t.morphAttributes;
                for(const t in i){
                    const n = i[t];
                    for(let t = 0, i = n.length; t < i; t++)e.update(n[t], 34962);
                }
            },
            getWireframeAttribute: function(t) {
                const e = s.get(t);
                if (e) {
                    const n = t.index;
                    null !== n && e.version < n.version && o(t);
                } else o(t);
                return s.get(t);
            }
        };
    }
    function bi(t, e, n, i) {
        const r = i.isWebGL2;
        let s, a, o;
        this.setMode = function(t) {
            s = t;
        }, this.setIndex = function(t) {
            a = t.type, o = t.bytesPerElement;
        }, this.render = function(e, i) {
            t.drawElements(s, i, a, e * o), n.update(i, s, 1);
        }, this.renderInstances = function(i, l, c) {
            if (0 === c) return;
            let h, u;
            if (r) h = t, u = "drawElementsInstanced";
            else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](s, l, a, i * o, c), n.update(l, s, c);
        };
    }
    function Mi(t) {
        const e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
            },
            update: function(t, n, i) {
                switch(e.calls++, n){
                    case 4:
                        e.triangles += i * (t / 3);
                        break;
                    case 1:
                        e.lines += i * (t / 2);
                        break;
                    case 3:
                        e.lines += i * (t - 1);
                        break;
                    case 2:
                        e.lines += i * t;
                        break;
                    case 0:
                        e.points += i * t;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", n);
                }
            }
        };
    }
    function wi(t, e) {
        return t[0] - e[0];
    }
    function Si(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1]);
    }
    function Ti(t) {
        const e = {}, n = new Float32Array(8), i = [];
        for(let t = 0; t < 8; t++)i[t] = [
            t,
            0
        ];
        return {
            update: function(r, s, a, o) {
                const l = r.morphTargetInfluences, c = void 0 === l ? 0 : l.length;
                let h = e[s.id];
                if (void 0 === h || h.length !== c) {
                    h = [];
                    for(let t = 0; t < c; t++)h[t] = [
                        t,
                        0
                    ];
                    e[s.id] = h;
                }
                for(let t = 0; t < c; t++){
                    const e = h[t];
                    e[0] = t, e[1] = l[t];
                }
                h.sort(Si);
                for(let t = 0; t < 8; t++)t < c && h[t][1] ? (i[t][0] = h[t][0], i[t][1] = h[t][1]) : (i[t][0] = Number.MAX_SAFE_INTEGER, i[t][1] = 0);
                i.sort(wi);
                const u = a.morphTargets && s.morphAttributes.position, d = a.morphNormals && s.morphAttributes.normal;
                let p = 0;
                for(let t = 0; t < 8; t++){
                    const e = i[t], r = e[0], a = e[1];
                    r !== Number.MAX_SAFE_INTEGER && a ? (u && s.getAttribute("morphTarget" + t) !== u[r] && s.setAttribute("morphTarget" + t, u[r]), d && s.getAttribute("morphNormal" + t) !== d[r] && s.setAttribute("morphNormal" + t, d[r]), n[t] = a, p += a) : (u && !0 === s.hasAttribute("morphTarget" + t) && s.deleteAttribute("morphTarget" + t), d && !0 === s.hasAttribute("morphNormal" + t) && s.deleteAttribute("morphNormal" + t), n[t] = 0);
                }
                const m = s.morphTargetsRelative ? 1 : 1 - p;
                o.getUniforms().setValue(t, "morphTargetBaseInfluence", m), o.getUniforms().setValue(t, "morphTargetInfluences", n);
            }
        };
    }
    function Ei(t, e, n, i) {
        let r = new WeakMap;
        function s(t) {
            const e = t.target;
            e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor);
        }
        return {
            update: function(t) {
                const a = i.render.frame, o = t.geometry, l = e.get(t, o);
                return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l;
            },
            dispose: function() {
                r = new WeakMap;
            }
        };
    }
    di.physical = {
        uniforms: jn([
            di.standard.uniforms,
            {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatNormalScale: {
                    value: new vt(1, 1)
                },
                clearcoatNormalMap: {
                    value: null
                },
                sheen: {
                    value: new Qe(0)
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionSamplerSize: {
                    value: new vt
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new Qe(0)
                }
            }
        ]),
        vertexShader: hi.meshphysical_vert,
        fragmentShader: hi.meshphysical_frag
    };
    class Ai extends Mt {
        constructor(t = null, e = 1, n = 1, i = 1){
            super(null), this.image = {
                data: t,
                width: e,
                height: n,
                depth: i
            }, this.magFilter = p, this.minFilter = p, this.wrapR = u, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
        }
    }
    Ai.prototype.isDataTexture2DArray = !0;
    class Li extends Mt {
        constructor(t = null, e = 1, n = 1, i = 1){
            super(null), this.image = {
                data: t,
                width: e,
                height: n,
                depth: i
            }, this.magFilter = p, this.minFilter = p, this.wrapR = u, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
        }
    }
    Li.prototype.isDataTexture3D = !0;
    const Ri = new Mt, Ci = new Ai, Pi = new Li, Di = new Kn, Ii = [], Ni = [], Bi = new Float32Array(16), zi = new Float32Array(9), Fi = new Float32Array(4);
    function Oi(t, e, n) {
        const i = t[0];
        if (i <= 0 || i > 0) return t;
        const r = e * n;
        let s = Ii[r];
        if (void 0 === s && (s = new Float32Array(r), Ii[r] = s), 0 !== e) {
            i.toArray(s, 0);
            for(let i = 1, r = 0; i !== e; ++i)r += n, t[i].toArray(s, r);
        }
        return s;
    }
    function Hi(t, e) {
        if (t.length !== e.length) return !1;
        for(let n = 0, i = t.length; n < i; n++)if (t[n] !== e[n]) return !1;
        return !0;
    }
    function Ui(t, e) {
        for(let n = 0, i = e.length; n < i; n++)t[n] = e[n];
    }
    function Gi(t, e) {
        let n = Ni[e];
        void 0 === n && (n = new Int32Array(e), Ni[e] = n);
        for(let i = 0; i !== e; ++i)n[i] = t.allocateTextureUnit();
        return n;
    }
    function ki(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e);
    }
    function Vi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
        else {
            if (Hi(n, e)) return;
            t.uniform2fv(this.addr, e), Ui(n, e);
        }
    }
    function Wi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
        else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
        else {
            if (Hi(n, e)) return;
            t.uniform3fv(this.addr, e), Ui(n, e);
        }
    }
    function ji(t, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
        else {
            if (Hi(n, e)) return;
            t.uniform4fv(this.addr, e), Ui(n, e);
        }
    }
    function qi(t, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (Hi(n, e)) return;
            t.uniformMatrix2fv(this.addr, !1, e), Ui(n, e);
        } else {
            if (Hi(n, i)) return;
            Fi.set(i), t.uniformMatrix2fv(this.addr, !1, Fi), Ui(n, i);
        }
    }
    function Xi(t, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (Hi(n, e)) return;
            t.uniformMatrix3fv(this.addr, !1, e), Ui(n, e);
        } else {
            if (Hi(n, i)) return;
            zi.set(i), t.uniformMatrix3fv(this.addr, !1, zi), Ui(n, i);
        }
    }
    function Yi(t, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (Hi(n, e)) return;
            t.uniformMatrix4fv(this.addr, !1, e), Ui(n, e);
        } else {
            if (Hi(n, i)) return;
            Bi.set(i), t.uniformMatrix4fv(this.addr, !1, Bi), Ui(n, i);
        }
    }
    function Ji(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e);
    }
    function Zi(t, e) {
        const n = this.cache;
        Hi(n, e) || (t.uniform2iv(this.addr, e), Ui(n, e));
    }
    function Qi(t, e) {
        const n = this.cache;
        Hi(n, e) || (t.uniform3iv(this.addr, e), Ui(n, e));
    }
    function Ki(t, e) {
        const n = this.cache;
        Hi(n, e) || (t.uniform4iv(this.addr, e), Ui(n, e));
    }
    function $i(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e);
    }
    function tr(t, e) {
        const n = this.cache;
        Hi(n, e) || (t.uniform2uiv(this.addr, e), Ui(n, e));
    }
    function er(t, e) {
        const n = this.cache;
        Hi(n, e) || (t.uniform3uiv(this.addr, e), Ui(n, e));
    }
    function nr(t, e) {
        const n = this.cache;
        Hi(n, e) || (t.uniform4uiv(this.addr, e), Ui(n, e));
    }
    function ir(t, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || Ri, r);
    }
    function rr(t, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Pi, r);
    }
    function sr(t, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || Di, r);
    }
    function ar(t, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || Ci, r);
    }
    function or(t, e) {
        t.uniform1fv(this.addr, e);
    }
    function lr(t, e) {
        const n = Oi(e, this.size, 2);
        t.uniform2fv(this.addr, n);
    }
    function cr(t, e) {
        const n = Oi(e, this.size, 3);
        t.uniform3fv(this.addr, n);
    }
    function hr(t, e) {
        const n = Oi(e, this.size, 4);
        t.uniform4fv(this.addr, n);
    }
    function ur(t, e) {
        const n = Oi(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n);
    }
    function dr(t, e) {
        const n = Oi(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n);
    }
    function pr(t, e) {
        const n = Oi(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n);
    }
    function mr(t, e) {
        t.uniform1iv(this.addr, e);
    }
    function fr(t, e) {
        t.uniform2iv(this.addr, e);
    }
    function gr(t, e) {
        t.uniform3iv(this.addr, e);
    }
    function vr(t, e) {
        t.uniform4iv(this.addr, e);
    }
    function yr(t, e) {
        t.uniform1uiv(this.addr, e);
    }
    function xr(t, e) {
        t.uniform2uiv(this.addr, e);
    }
    function _r(t, e) {
        t.uniform3uiv(this.addr, e);
    }
    function br(t, e) {
        t.uniform4uiv(this.addr, e);
    }
    function Mr(t, e, n) {
        const i = e.length, r = Gi(n, i);
        t.uniform1iv(this.addr, r);
        for(let t = 0; t !== i; ++t)n.safeSetTexture2D(e[t] || Ri, r[t]);
    }
    function wr(t, e, n) {
        const i = e.length, r = Gi(n, i);
        t.uniform1iv(this.addr, r);
        for(let t = 0; t !== i; ++t)n.safeSetTextureCube(e[t] || Di, r[t]);
    }
    function Sr(t, e, n) {
        this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
            switch(t){
                case 5126:
                    return ki;
                case 35664:
                    return Vi;
                case 35665:
                    return Wi;
                case 35666:
                    return ji;
                case 35674:
                    return qi;
                case 35675:
                    return Xi;
                case 35676:
                    return Yi;
                case 5124:
                case 35670:
                    return Ji;
                case 35667:
                case 35671:
                    return Zi;
                case 35668:
                case 35672:
                    return Qi;
                case 35669:
                case 35673:
                    return Ki;
                case 5125:
                    return $i;
                case 36294:
                    return tr;
                case 36295:
                    return er;
                case 36296:
                    return nr;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return ir;
                case 35679:
                case 36299:
                case 36307:
                    return rr;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return sr;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return ar;
            }
        }(e.type);
    }
    function Tr(t, e, n) {
        this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
            switch(t){
                case 5126:
                    return or;
                case 35664:
                    return lr;
                case 35665:
                    return cr;
                case 35666:
                    return hr;
                case 35674:
                    return ur;
                case 35675:
                    return dr;
                case 35676:
                    return pr;
                case 5124:
                case 35670:
                    return mr;
                case 35667:
                case 35671:
                    return fr;
                case 35668:
                case 35672:
                    return gr;
                case 35669:
                case 35673:
                    return vr;
                case 5125:
                    return yr;
                case 36294:
                    return xr;
                case 36295:
                    return _r;
                case 36296:
                    return br;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return Mr;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return wr;
            }
        }(e.type);
    }
    function Er(t) {
        this.id = t, this.seq = [], this.map = {};
    }
    Tr.prototype.updateCache = function(t) {
        const e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Ui(e, t);
    }, Er.prototype.setValue = function(t, e, n) {
        const i = this.seq;
        for(let r = 0, s = i.length; r !== s; ++r){
            const s = i[r];
            s.setValue(t, e[s.id], n);
        }
    };
    const Ar = /(\w+)(\])?(\[|\.)?/g;
    function Lr(t, e) {
        t.seq.push(e), t.map[e.id] = e;
    }
    function Rr(t, e, n) {
        const i = t.name, r = i.length;
        for(Ar.lastIndex = 0;;){
            const s = Ar.exec(i), a = Ar.lastIndex;
            let o = s[1];
            const l = "]" === s[2], c = s[3];
            if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
                Lr(n, void 0 === c ? new Sr(o, t, e) : new Tr(o, t, e));
                break;
            }
            {
                let t = n.map[o];
                void 0 === t && (t = new Er(o), Lr(n, t)), n = t;
            }
        }
    }
    function Cr(t, e) {
        this.seq = [], this.map = {};
        const n = t.getProgramParameter(e, 35718);
        for(let i = 0; i < n; ++i){
            const n = t.getActiveUniform(e, i);
            Rr(n, t.getUniformLocation(e, n.name), this);
        }
    }
    function Pr(t, e, n) {
        const i = t.createShader(e);
        return t.shaderSource(i, n), t.compileShader(i), i;
    }
    Cr.prototype.setValue = function(t, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t, n, i);
    }, Cr.prototype.setOptional = function(t, e, n) {
        const i = e[n];
        void 0 !== i && this.setValue(t, n, i);
    }, Cr.upload = function(t, e, n, i) {
        for(let r = 0, s = e.length; r !== s; ++r){
            const s = e[r], a = n[s.id];
            !1 !== a.needsUpdate && s.setValue(t, a.value, i);
        }
    }, Cr.seqWithValue = function(t, e) {
        const n = [];
        for(let i = 0, r = t.length; i !== r; ++i){
            const r = t[i];
            r.id in e && n.push(r);
        }
        return n;
    };
    let Dr = 0;
    function Ir(t) {
        switch(t){
            case X:
                return [
                    "Linear",
                    "( value )"
                ];
            case Y:
                return [
                    "sRGB",
                    "( value )"
                ];
            case Z:
                return [
                    "RGBE",
                    "( value )"
                ];
            case Q:
                return [
                    "RGBM",
                    "( value, 7.0 )"
                ];
            case K:
                return [
                    "RGBM",
                    "( value, 16.0 )"
                ];
            case $:
                return [
                    "RGBD",
                    "( value, 256.0 )"
                ];
            case J:
                return [
                    "Gamma",
                    "( value, float( GAMMA_FACTOR ) )"
                ];
            case 3003:
                return [
                    "LogLuv",
                    "( value )"
                ];
            default:
                return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), [
                    "Linear",
                    "( value )"
                ];
        }
    }
    function Nr(t, e, n) {
        const i = t.getShaderParameter(e, 35713), r = t.getShaderInfoLog(e).trim();
        if (i && "" === r) return "";
        return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(t) {
            const e = t.split("\n");
            for(let t = 0; t < e.length; t++)e[t] = t + 1 + ": " + e[t];
            return e.join("\n");
        }(t.getShaderSource(e));
    }
    function Br(t, e) {
        const n = Ir(e);
        return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
    }
    function zr(t, e) {
        const n = Ir(e);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
    }
    function Fr(t, e) {
        let n;
        switch(e){
            case 1:
                n = "Linear";
                break;
            case 2:
                n = "Reinhard";
                break;
            case 3:
                n = "OptimizedCineon";
                break;
            case 4:
                n = "ACESFilmic";
                break;
            case 5:
                n = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
        }
        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
    }
    function Or(t) {
        return "" !== t;
    }
    function Hr(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
    }
    function Ur(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
    }
    const Gr = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function kr(t) {
        return t.replace(Gr, Vr);
    }
    function Vr(t, e) {
        const n = hi[e];
        if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
        return kr(n);
    }
    const Wr = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, jr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function qr(t) {
        return t.replace(jr, Yr).replace(Wr, Xr);
    }
    function Xr(t, e, n, i) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Yr(t, e, n, i);
    }
    function Yr(t, e, n, i) {
        let r = "";
        for(let t = parseInt(e); t < parseInt(n); t++)r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
        return r;
    }
    function Jr(t) {
        let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
        return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e;
    }
    function Zr(t, e, n, i) {
        const a = t.getContext(), o = n.defines;
        let h = n.vertexShader, u = n.fragmentShader;
        const d = function(t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
        }(n), p = function(t) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t.envMap) switch(t.envMapMode){
                case r:
                case s:
                    e = "ENVMAP_TYPE_CUBE";
                    break;
                case l:
                case c:
                    e = "ENVMAP_TYPE_CUBE_UV";
            }
            return e;
        }(n), m = function(t) {
            let e = "ENVMAP_MODE_REFLECTION";
            if (t.envMap) switch(t.envMapMode){
                case s:
                case c:
                    e = "ENVMAP_MODE_REFRACTION";
            }
            return e;
        }(n), f = function(t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap) switch(t.combine){
                case 0:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    e = "ENVMAP_BLENDING_ADD";
            }
            return e;
        }(n), g = t.gammaFactor > 0 ? t.gammaFactor : 1, v = n.isWebGL2 ? "" : function(t) {
            return [
                t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "",
                (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
                t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
                (t.extensionShaderTextureLOD || t.envMap || t.transmission > 0) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
            ].filter(Or).join("\n");
        }(n), y = function(t) {
            const e = [];
            for(const n in t){
                const i = t[n];
                !1 !== i && e.push("#define " + n + " " + i);
            }
            return e.join("\n");
        }(o), x = a.createProgram();
        let _, b, M = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
        n.isRawShaderMaterial ? (_ = [
            y
        ].filter(Or).join("\n"), _.length > 0 && (_ += "\n"), b = [
            v,
            y
        ].filter(Or).join("\n"), b.length > 0 && (b += "\n")) : (_ = [
            Jr(n),
            "#define SHADER_NAME " + n.shaderName,
            y,
            n.instancing ? "#define USE_INSTANCING" : "",
            n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
            n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
            "#define GAMMA_FACTOR " + g,
            "#define MAX_BONES " + n.maxBones,
            n.useFog && n.fog ? "#define USE_FOG" : "",
            n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
            n.map ? "#define USE_MAP" : "",
            n.envMap ? "#define USE_ENVMAP" : "",
            n.envMap ? "#define " + m : "",
            n.lightMap ? "#define USE_LIGHTMAP" : "",
            n.aoMap ? "#define USE_AOMAP" : "",
            n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            n.bumpMap ? "#define USE_BUMPMAP" : "",
            n.normalMap ? "#define USE_NORMALMAP" : "",
            n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
            n.specularMap ? "#define USE_SPECULARMAP" : "",
            n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            n.metalnessMap ? "#define USE_METALNESSMAP" : "",
            n.alphaMap ? "#define USE_ALPHAMAP" : "",
            n.transmission ? "#define USE_TRANSMISSION" : "",
            n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            n.vertexTangents ? "#define USE_TANGENT" : "",
            n.vertexColors ? "#define USE_COLOR" : "",
            n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            n.vertexUvs ? "#define USE_UV" : "",
            n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            n.flatShading ? "#define FLAT_SHADED" : "",
            n.skinning ? "#define USE_SKINNING" : "",
            n.useVertexTexture ? "#define BONE_TEXTURE" : "",
            n.morphTargets ? "#define USE_MORPHTARGETS" : "",
            n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "",
            n.doubleSided ? "#define DOUBLE_SIDED" : "",
            n.flipSided ? "#define FLIP_SIDED" : "",
            n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            n.shadowMapEnabled ? "#define " + d : "",
            n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            "#ifdef USE_INSTANCING",
            "	attribute mat4 instanceMatrix;",
            "#endif",
            "#ifdef USE_INSTANCING_COLOR",
            "	attribute vec3 instanceColor;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_TANGENT",
            "	attribute vec4 tangent;",
            "#endif",
            "#if defined( USE_COLOR_ALPHA )",
            "	attribute vec4 color;",
            "#elif defined( USE_COLOR )",
            "	attribute vec3 color;",
            "#endif",
            "#ifdef USE_MORPHTARGETS",
            "	attribute vec3 morphTarget0;",
            "	attribute vec3 morphTarget1;",
            "	attribute vec3 morphTarget2;",
            "	attribute vec3 morphTarget3;",
            "	#ifdef USE_MORPHNORMALS",
            "		attribute vec3 morphNormal0;",
            "		attribute vec3 morphNormal1;",
            "		attribute vec3 morphNormal2;",
            "		attribute vec3 morphNormal3;",
            "	#else",
            "		attribute vec3 morphTarget4;",
            "		attribute vec3 morphTarget5;",
            "		attribute vec3 morphTarget6;",
            "		attribute vec3 morphTarget7;",
            "	#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            "\n"
        ].filter(Or).join("\n"), b = [
            v,
            Jr(n),
            "#define SHADER_NAME " + n.shaderName,
            y,
            n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "",
            "#define GAMMA_FACTOR " + g,
            n.useFog && n.fog ? "#define USE_FOG" : "",
            n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
            n.map ? "#define USE_MAP" : "",
            n.matcap ? "#define USE_MATCAP" : "",
            n.envMap ? "#define USE_ENVMAP" : "",
            n.envMap ? "#define " + p : "",
            n.envMap ? "#define " + m : "",
            n.envMap ? "#define " + f : "",
            n.lightMap ? "#define USE_LIGHTMAP" : "",
            n.aoMap ? "#define USE_AOMAP" : "",
            n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            n.bumpMap ? "#define USE_BUMPMAP" : "",
            n.normalMap ? "#define USE_NORMALMAP" : "",
            n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            n.specularMap ? "#define USE_SPECULARMAP" : "",
            n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            n.metalnessMap ? "#define USE_METALNESSMAP" : "",
            n.alphaMap ? "#define USE_ALPHAMAP" : "",
            n.sheen ? "#define USE_SHEEN" : "",
            n.transmission ? "#define USE_TRANSMISSION" : "",
            n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            n.vertexTangents ? "#define USE_TANGENT" : "",
            n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
            n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            n.vertexUvs ? "#define USE_UV" : "",
            n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            n.gradientMap ? "#define USE_GRADIENTMAP" : "",
            n.flatShading ? "#define FLAT_SHADED" : "",
            n.doubleSided ? "#define DOUBLE_SIDED" : "",
            n.flipSided ? "#define FLIP_SIDED" : "",
            n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            n.shadowMapEnabled ? "#define " + d : "",
            n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
            n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
            0 !== n.toneMapping ? hi.tonemapping_pars_fragment : "",
            0 !== n.toneMapping ? Fr("toneMapping", n.toneMapping) : "",
            n.dithering ? "#define DITHERING" : "",
            hi.encodings_pars_fragment,
            n.map ? Br("mapTexelToLinear", n.mapEncoding) : "",
            n.matcap ? Br("matcapTexelToLinear", n.matcapEncoding) : "",
            n.envMap ? Br("envMapTexelToLinear", n.envMapEncoding) : "",
            n.emissiveMap ? Br("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "",
            n.lightMap ? Br("lightMapTexelToLinear", n.lightMapEncoding) : "",
            zr("linearToOutputTexel", n.outputEncoding),
            n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
            "\n"
        ].filter(Or).join("\n")), h = kr(h), h = Hr(h, n), h = Ur(h, n), u = kr(u), u = Hr(u, n), u = Ur(u, n), h = qr(h), u = qr(u), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (M = "#version 300 es\n", _ = [
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"
        ].join("\n") + "\n" + _, b = [
            "#define varying in",
            n.glslVersion === it ? "" : "out highp vec4 pc_fragColor;",
            n.glslVersion === it ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"
        ].join("\n") + "\n" + b);
        const w = M + b + u, S = Pr(a, 35633, M + _ + h), T = Pr(a, 35632, w);
        if (a.attachShader(x, S), a.attachShader(x, T), void 0 !== n.index0AttributeName ? a.bindAttribLocation(x, 0, n.index0AttributeName) : !0 === n.morphTargets && a.bindAttribLocation(x, 0, "position"), a.linkProgram(x), t.debug.checkShaderErrors) {
            const t = a.getProgramInfoLog(x).trim(), e = a.getShaderInfoLog(S).trim(), n = a.getShaderInfoLog(T).trim();
            let i = !0, r = !0;
            if (!1 === a.getProgramParameter(x, 35714)) {
                i = !1;
                const e = Nr(a, S, "vertex"), n = Nr(a, T, "fragment");
                console.error("THREE.WebGLProgram: shader error: ", a.getError(), "35715", a.getProgramParameter(x, 35715), "gl.getProgramInfoLog", t, e, n);
            } else "" !== t ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t) : "" !== e && "" !== n || (r = !1);
            r && (this.diagnostics = {
                runnable: i,
                programLog: t,
                vertexShader: {
                    log: e,
                    prefix: _
                },
                fragmentShader: {
                    log: n,
                    prefix: b
                }
            });
        }
        let E, A;
        return a.deleteShader(S), a.deleteShader(T), this.getUniforms = function() {
            return void 0 === E && (E = new Cr(a, x)), E;
        }, this.getAttributes = function() {
            return void 0 === A && (A = function(t, e) {
                const n = {}, i = t.getProgramParameter(e, 35721);
                for(let r = 0; r < i; r++){
                    const i = t.getActiveAttrib(e, r).name;
                    n[i] = t.getAttribLocation(e, i);
                }
                return n;
            }(a, x)), A;
        }, this.destroy = function() {
            i.releaseStatesOfProgram(this), a.deleteProgram(x), this.program = void 0;
        }, this.name = n.shaderName, this.id = Dr++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = S, this.fragmentShader = T, this;
    }
    function Qr(t, e, n, i, r, s) {
        const a = [], o = i.isWebGL2, h = i.logarithmicDepthBuffer, u = i.floatVertexTextures, d = i.maxVertexUniforms, p = i.vertexTextures;
        let m = i.precision;
        const f = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        }, g = [
            "precision",
            "isWebGL2",
            "supportsVertexTextures",
            "outputEncoding",
            "instancing",
            "instancingColor",
            "map",
            "mapEncoding",
            "matcap",
            "matcapEncoding",
            "envMap",
            "envMapMode",
            "envMapEncoding",
            "envMapCubeUV",
            "lightMap",
            "lightMapEncoding",
            "aoMap",
            "emissiveMap",
            "emissiveMapEncoding",
            "bumpMap",
            "normalMap",
            "objectSpaceNormalMap",
            "tangentSpaceNormalMap",
            "clearcoatMap",
            "clearcoatRoughnessMap",
            "clearcoatNormalMap",
            "displacementMap",
            "specularMap",
            "roughnessMap",
            "metalnessMap",
            "gradientMap",
            "alphaMap",
            "combine",
            "vertexColors",
            "vertexAlphas",
            "vertexTangents",
            "vertexUvs",
            "uvsVertexOnly",
            "fog",
            "useFog",
            "fogExp2",
            "flatShading",
            "sizeAttenuation",
            "logarithmicDepthBuffer",
            "skinning",
            "maxBones",
            "useVertexTexture",
            "morphTargets",
            "morphNormals",
            "premultipliedAlpha",
            "numDirLights",
            "numPointLights",
            "numSpotLights",
            "numHemiLights",
            "numRectAreaLights",
            "numDirLightShadows",
            "numPointLightShadows",
            "numSpotLightShadows",
            "shadowMapEnabled",
            "shadowMapType",
            "toneMapping",
            "physicallyCorrectLights",
            "alphaTest",
            "doubleSided",
            "flipSided",
            "numClippingPlanes",
            "numClipIntersection",
            "depthPacking",
            "dithering",
            "sheen",
            "transmission",
            "transmissionMap",
            "thicknessMap"
        ];
        function v(t) {
            let e;
            return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = X, e;
        }
        return {
            getParameters: function(r, a, g, y, x) {
                const _ = y.fog, b = r.isMeshStandardMaterial ? y.environment : null, M = e.get(r.envMap || b), w = f[r.type], S = x.isSkinnedMesh ? function(t) {
                    const e = t.skeleton.bones;
                    if (u) return 1024;
                    {
                        const t = d, n = Math.floor((t - 20) / 4), i = Math.min(n, e.length);
                        return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."), 0) : i;
                    }
                }(x) : 0;
                let T, E;
                if (null !== r.precision && (m = i.getMaxPrecision(r.precision), m !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", m, "instead.")), w) {
                    const t = di[w];
                    T = t.vertexShader, E = t.fragmentShader;
                } else T = r.vertexShader, E = r.fragmentShader;
                const A = t.getRenderTarget();
                return {
                    isWebGL2: o,
                    shaderID: w,
                    shaderName: r.type,
                    vertexShader: T,
                    fragmentShader: E,
                    defines: r.defines,
                    isRawShaderMaterial: !0 === r.isRawShaderMaterial,
                    glslVersion: r.glslVersion,
                    precision: m,
                    instancing: !0 === x.isInstancedMesh,
                    instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
                    supportsVertexTextures: p,
                    outputEncoding: null !== A ? v(A.texture) : t.outputEncoding,
                    map: !!r.map,
                    mapEncoding: v(r.map),
                    matcap: !!r.matcap,
                    matcapEncoding: v(r.matcap),
                    envMap: !!M,
                    envMapMode: M && M.mapping,
                    envMapEncoding: v(M),
                    envMapCubeUV: !!M && (M.mapping === l || M.mapping === c),
                    lightMap: !!r.lightMap,
                    lightMapEncoding: v(r.lightMap),
                    aoMap: !!r.aoMap,
                    emissiveMap: !!r.emissiveMap,
                    emissiveMapEncoding: v(r.emissiveMap),
                    bumpMap: !!r.bumpMap,
                    normalMap: !!r.normalMap,
                    objectSpaceNormalMap: 1 === r.normalMapType,
                    tangentSpaceNormalMap: 0 === r.normalMapType,
                    clearcoatMap: !!r.clearcoatMap,
                    clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
                    clearcoatNormalMap: !!r.clearcoatNormalMap,
                    displacementMap: !!r.displacementMap,
                    roughnessMap: !!r.roughnessMap,
                    metalnessMap: !!r.metalnessMap,
                    specularMap: !!r.specularMap,
                    alphaMap: !!r.alphaMap,
                    gradientMap: !!r.gradientMap,
                    sheen: !!r.sheen,
                    transmission: !!r.transmission,
                    transmissionMap: !!r.transmissionMap,
                    thicknessMap: !!r.thicknessMap,
                    combine: r.combine,
                    vertexTangents: r.normalMap && r.vertexTangents,
                    vertexColors: r.vertexColors,
                    vertexAlphas: !0 === r.vertexColors && x.geometry && x.geometry.attributes.color && 4 === x.geometry.attributes.color.itemSize,
                    vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap || r.thicknessMap),
                    uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmission || r.transmissionMap || r.thicknessMap || !r.displacementMap),
                    fog: !!_,
                    useFog: r.fog,
                    fogExp2: _ && _.isFogExp2,
                    flatShading: !!r.flatShading,
                    sizeAttenuation: r.sizeAttenuation,
                    logarithmicDepthBuffer: h,
                    skinning: !0 === x.isSkinnedMesh && S > 0,
                    maxBones: S,
                    useVertexTexture: u,
                    morphTargets: r.morphTargets,
                    morphNormals: r.morphNormals,
                    numDirLights: a.directional.length,
                    numPointLights: a.point.length,
                    numSpotLights: a.spot.length,
                    numRectAreaLights: a.rectArea.length,
                    numHemiLights: a.hemi.length,
                    numDirLightShadows: a.directionalShadowMap.length,
                    numPointLightShadows: a.pointShadowMap.length,
                    numSpotLightShadows: a.spotShadowMap.length,
                    numClippingPlanes: s.numPlanes,
                    numClipIntersection: s.numIntersection,
                    dithering: r.dithering,
                    shadowMapEnabled: t.shadowMap.enabled && g.length > 0,
                    shadowMapType: t.shadowMap.type,
                    toneMapping: r.toneMapped ? t.toneMapping : 0,
                    physicallyCorrectLights: t.physicallyCorrectLights,
                    premultipliedAlpha: r.premultipliedAlpha,
                    alphaTest: r.alphaTest,
                    doubleSided: 2 === r.side,
                    flipSided: 1 === r.side,
                    depthPacking: void 0 !== r.depthPacking && r.depthPacking,
                    index0AttributeName: r.index0AttributeName,
                    extensionDerivatives: r.extensions && r.extensions.derivatives,
                    extensionFragDepth: r.extensions && r.extensions.fragDepth,
                    extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
                    extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
                    rendererExtensionFragDepth: o || n.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: o || n.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: o || n.has("EXT_shader_texture_lod"),
                    customProgramCacheKey: r.customProgramCacheKey()
                };
            },
            getProgramCacheKey: function(e) {
                const n = [];
                if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines) for(const t in e.defines)n.push(t), n.push(e.defines[t]);
                if (!1 === e.isRawShaderMaterial) {
                    for(let t = 0; t < g.length; t++)n.push(e[g[t]]);
                    n.push(t.outputEncoding), n.push(t.gammaFactor);
                }
                return n.push(e.customProgramCacheKey), n.join();
            },
            getUniforms: function(t) {
                const e = f[t.type];
                let n;
                if (e) {
                    const t = di[e];
                    n = qn.clone(t.uniforms);
                } else n = t.uniforms;
                return n;
            },
            acquireProgram: function(e, n) {
                let i;
                for(let t = 0, e = a.length; t < e; t++){
                    const e = a[t];
                    if (e.cacheKey === n) {
                        i = e, ++i.usedTimes;
                        break;
                    }
                }
                return void 0 === i && (i = new Zr(t, n, e, r), a.push(i)), i;
            },
            releaseProgram: function(t) {
                if (0 == --t.usedTimes) {
                    const e = a.indexOf(t);
                    a[e] = a[a.length - 1], a.pop(), t.destroy();
                }
            },
            programs: a
        };
    }
    function Kr() {
        let t = new WeakMap;
        return {
            get: function(e) {
                let n = t.get(e);
                return void 0 === n && (n = {}, t.set(e, n)), n;
            },
            remove: function(e) {
                t.delete(e);
            },
            update: function(e, n, i) {
                t.get(e)[n] = i;
            },
            dispose: function() {
                t = new WeakMap;
            }
        };
    }
    function $r(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
    }
    function ts(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
    }
    function es(t) {
        const e = [];
        let n = 0;
        const i = [], r = [], s = [], a = {
            id: -1
        };
        function o(i, r, s, o, l, c) {
            let h = e[n];
            const u = t.get(s);
            return void 0 === h ? (h = {
                id: i.id,
                object: i,
                geometry: r,
                material: s,
                program: u.program || a,
                groupOrder: o,
                renderOrder: i.renderOrder,
                z: l,
                group: c
            }, e[n] = h) : (h.id = i.id, h.object = i, h.geometry = r, h.material = s, h.program = u.program || a, h.groupOrder = o, h.renderOrder = i.renderOrder, h.z = l, h.group = c), n++, h;
        }
        return {
            opaque: i,
            transmissive: r,
            transparent: s,
            init: function() {
                n = 0, i.length = 0, r.length = 0, s.length = 0;
            },
            push: function(t, e, n, a, l, c) {
                const h = o(t, e, n, a, l, c);
                n.transmission > 0 ? r.push(h) : !0 === n.transparent ? s.push(h) : i.push(h);
            },
            unshift: function(t, e, n, a, l, c) {
                const h = o(t, e, n, a, l, c);
                n.transmission > 0 ? r.unshift(h) : !0 === n.transparent ? s.unshift(h) : i.unshift(h);
            },
            finish: function() {
                for(let t = n, i = e.length; t < i; t++){
                    const n = e[t];
                    if (null === n.id) break;
                    n.id = null, n.object = null, n.geometry = null, n.material = null, n.program = null, n.group = null;
                }
            },
            sort: function(t, e) {
                i.length > 1 && i.sort(t || $r), r.length > 1 && r.sort(e || ts), s.length > 1 && s.sort(e || ts);
            }
        };
    }
    function ns(t) {
        let e = new WeakMap;
        return {
            get: function(n, i) {
                let r;
                return !1 === e.has(n) ? (r = new es(t), e.set(n, [
                    r
                ])) : i >= e.get(n).length ? (r = new es(t), e.get(n).push(r)) : r = e.get(n)[i], r;
            },
            dispose: function() {
                e = new WeakMap;
            }
        };
    }
    function is() {
        const t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let n;
                switch(e.type){
                    case "DirectionalLight":
                        n = {
                            direction: new Rt,
                            color: new Qe
                        };
                        break;
                    case "SpotLight":
                        n = {
                            position: new Rt,
                            direction: new Rt,
                            color: new Qe,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        n = {
                            position: new Rt,
                            color: new Qe,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        n = {
                            direction: new Rt,
                            skyColor: new Qe,
                            groundColor: new Qe
                        };
                        break;
                    case "RectAreaLight":
                        n = {
                            color: new Qe,
                            position: new Rt,
                            halfWidth: new Rt,
                            halfHeight: new Rt
                        };
                }
                return t[e.id] = n, n;
            }
        };
    }
    let rs = 0;
    function ss(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
    }
    function as(t, e) {
        const n = new is, i = function() {
            const t = {};
            return {
                get: function(e) {
                    if (void 0 !== t[e.id]) return t[e.id];
                    let n;
                    switch(e.type){
                        case "DirectionalLight":
                        case "SpotLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new vt
                            };
                            break;
                        case "PointLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new vt,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            };
                    }
                    return t[e.id] = n, n;
                }
            };
        }(), r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
        for(let t = 0; t < 9; t++)r.probe.push(new Rt);
        const s = new Rt, a = new ae, o = new ae;
        return {
            setup: function(s) {
                let a = 0, o = 0, l = 0;
                for(let t = 0; t < 9; t++)r.probe[t].set(0, 0, 0);
                let c = 0, h = 0, u = 0, d = 0, p = 0, m = 0, f = 0, g = 0;
                s.sort(ss);
                for(let t = 0, e = s.length; t < e; t++){
                    const e = s[t], v = e.color, y = e.intensity, x = e.distance, _ = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                    if (e.isAmbientLight) a += v.r * y, o += v.g * y, l += v.b * y;
                    else if (e.isLightProbe) for(let t = 0; t < 9; t++)r.probe[t].addScaledVector(e.sh.coefficients[t], y);
                    else if (e.isDirectionalLight) {
                        const t = n.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity), e.castShadow) {
                            const t = e.shadow, n = i.get(e);
                            n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[c] = n, r.directionalShadowMap[c] = _, r.directionalShadowMatrix[c] = e.shadow.matrix, m++;
                        }
                        r.directional[c] = t, c++;
                    } else if (e.isSpotLight) {
                        const t = n.get(e);
                        if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(v).multiplyScalar(y), t.distance = x, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) {
                            const t = e.shadow, n = i.get(e);
                            n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.spotShadow[u] = n, r.spotShadowMap[u] = _, r.spotShadowMatrix[u] = e.shadow.matrix, g++;
                        }
                        r.spot[u] = t, u++;
                    } else if (e.isRectAreaLight) {
                        const t = n.get(e);
                        t.color.copy(v).multiplyScalar(y), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[d] = t, d++;
                    } else if (e.isPointLight) {
                        const t = n.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                            const t = e.shadow, n = i.get(e);
                            n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[h] = n, r.pointShadowMap[h] = _, r.pointShadowMatrix[h] = e.shadow.matrix, f++;
                        }
                        r.point[h] = t, h++;
                    } else if (e.isHemisphereLight) {
                        const t = n.get(e);
                        t.skyColor.copy(e.color).multiplyScalar(y), t.groundColor.copy(e.groundColor).multiplyScalar(y), r.hemi[p] = t, p++;
                    }
                }
                d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ui.LTC_FLOAT_1, r.rectAreaLTC2 = ui.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = ui.LTC_HALF_1, r.rectAreaLTC2 = ui.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = l;
                const v = r.hash;
                v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === m && v.numPointShadows === f && v.numSpotShadows === g || (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = h, r.hemi.length = p, r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = f, r.pointShadowMap.length = f, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = f, r.spotShadowMatrix.length = g, v.directionalLength = c, v.pointLength = h, v.spotLength = u, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = m, v.numPointShadows = f, v.numSpotShadows = g, r.version = rs++);
            },
            setupView: function(t, e) {
                let n = 0, i = 0, l = 0, c = 0, h = 0;
                const u = e.matrixWorldInverse;
                for(let e = 0, d = t.length; e < d; e++){
                    const d = t[e];
                    if (d.isDirectionalLight) {
                        const t = r.directional[n];
                        t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), n++;
                    } else if (d.isSpotLight) {
                        const t = r.spot[l];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), l++;
                    } else if (d.isRectAreaLight) {
                        const t = r.rectArea[c];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), c++;
                    } else if (d.isPointLight) {
                        const t = r.point[i];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++;
                    } else if (d.isHemisphereLight) {
                        const t = r.hemi[h];
                        t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), t.direction.normalize(), h++;
                    }
                }
            },
            state: r
        };
    }
    function os(t, e) {
        const n = new as(t, e), i = [], r = [];
        return {
            init: function() {
                i.length = 0, r.length = 0;
            },
            state: {
                lightsArray: i,
                shadowsArray: r,
                lights: n
            },
            setupLights: function() {
                n.setup(i);
            },
            setupLightsView: function(t) {
                n.setupView(i, t);
            },
            pushLight: function(t) {
                i.push(t);
            },
            pushShadow: function(t) {
                r.push(t);
            }
        };
    }
    function ls(t, e) {
        let n = new WeakMap;
        return {
            get: function(i, r = 0) {
                let s;
                return !1 === n.has(i) ? (s = new os(t, e), n.set(i, [
                    s
                ])) : r >= n.get(i).length ? (s = new os(t, e), n.get(i).push(s)) : s = n.get(i)[r], s;
            },
            dispose: function() {
                n = new WeakMap;
            }
        };
    }
    class cs extends We {
        constructor(t){
            super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.depthPacking = t.depthPacking, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
        }
    }
    cs.prototype.isMeshDepthMaterial = !0;
    class hs extends We {
        constructor(t){
            super(), this.type = "MeshDistanceMaterial", this.referencePosition = new Rt, this.nearDistance = 1, this.farDistance = 1e3, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
        }
    }
    hs.prototype.isMeshDistanceMaterial = !0;
    function us(t, e, n) {
        let i = new ai;
        const r = new vt, s = new vt, a = new St, o = [], l = [], c = {}, h = n.maxTextureSize, u = {
            0: 1,
            1: 0,
            2: 2
        }, d = new Xn({
            defines: {
                SAMPLE_RATE: 2 / 8,
                HALF_SAMPLE_RATE: 1 / 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new vt
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean * HALF_SAMPLE_RATE;\n	squared_mean = squared_mean * HALF_SAMPLE_RATE;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        }), m = d.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const f = new wn;
        f.setAttribute("position", new en(new Float32Array([
            -1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5
        ]), 3));
        const v = new Gn(f, d), y = this;
        function x(n, i) {
            const r = e.update(v);
            d.uniforms.shadow_pass.value = n.map.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, d, v, null), m.uniforms.shadow_pass.value = n.mapPass.texture, m.uniforms.resolution.value = n.mapSize, m.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, m, v, null);
        }
        function _(t) {
            const e = t << 0;
            let n = o[e];
            return void 0 === n && (n = new cs({
                depthPacking: 3201,
                morphTargets: t
            }), o[e] = n), n;
        }
        function b(t) {
            const e = t << 0;
            let n = l[e];
            return void 0 === n && (n = new hs({
                morphTargets: t
            }), l[e] = n), n;
        }
        function M(e, n, i, r, s, a, o) {
            let l = null, h = _, d = e.customDepthMaterial;
            if (!0 === r.isPointLight && (h = b, d = e.customDistanceMaterial), void 0 === d) {
                let t = !1;
                !0 === i.morphTargets && (t = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0), l = h(t);
            } else l = d;
            if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
                const t = l.uuid, e = i.uuid;
                let n = c[t];
                void 0 === n && (n = {}, c[t] = n);
                let r = n[e];
                void 0 === r && (r = l.clone(), n[e] = r), l = r;
            }
            return l.visible = i.visible, l.wireframe = i.wireframe, l.side = 3 === o ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u[i.side], l.clipShadows = i.clipShadows, l.clippingPlanes = i.clippingPlanes, l.clipIntersection = i.clipIntersection, l.wireframeLinewidth = i.wireframeLinewidth, l.linewidth = i.linewidth, !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), l.nearDistance = s, l.farDistance = a), l;
        }
        function w(n, r, s, a, o) {
            if (!1 === n.visible) return;
            if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
                n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
                const i = e.update(n), r = n.material;
                if (Array.isArray(r)) {
                    const e = i.groups;
                    for(let l = 0, c = e.length; l < c; l++){
                        const c = e[l], h = r[c.materialIndex];
                        if (h && h.visible) {
                            const e = M(n, i, h, a, s.near, s.far, o);
                            t.renderBufferDirect(s, null, i, e, n, c);
                        }
                    }
                } else if (r.visible) {
                    const e = M(n, i, r, a, s.near, s.far, o);
                    t.renderBufferDirect(s, null, i, e, n, null);
                }
            }
            const l = n.children;
            for(let t = 0, e = l.length; t < e; t++)w(l[t], r, s, a, o);
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, n, o) {
            if (!1 === y.enabled) return;
            if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
            if (0 === e.length) return;
            const l = t.getRenderTarget(), c = t.getActiveCubeFace(), u = t.getActiveMipmapLevel(), d = t.state;
            d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
            for(let l = 0, c = e.length; l < c; l++){
                const c = e[l], u = c.shadow;
                if (void 0 === u) {
                    console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                    continue;
                }
                if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
                r.copy(u.mapSize);
                const m = u.getFrameExtents();
                if (r.multiply(m), s.copy(u.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / m.x), r.x = s.x * m.x, u.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / m.y), r.y = s.y * m.y, u.mapSize.y = s.y)), null === u.map && !u.isPointLightShadow && 3 === this.type) {
                    const t = {
                        minFilter: g,
                        magFilter: g,
                        format: E
                    };
                    u.map = new Tt(r.x, r.y, t), u.map.texture.name = c.name + ".shadowMap", u.mapPass = new Tt(r.x, r.y, t), u.camera.updateProjectionMatrix();
                }
                if (null === u.map) {
                    const t = {
                        minFilter: p,
                        magFilter: p,
                        format: E
                    };
                    u.map = new Tt(r.x, r.y, t), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix();
                }
                t.setRenderTarget(u.map), t.clear();
                const f = u.getViewportCount();
                for(let t = 0; t < f; t++){
                    const e = u.getViewport(t);
                    a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), d.viewport(a), u.updateMatrices(c, t), i = u.getFrustum(), w(n, o, u.camera, c, this.type);
                }
                u.isPointLightShadow || 3 !== this.type || x(u, o), u.needsUpdate = !1;
            }
            y.needsUpdate = !1, t.setRenderTarget(l, c, u);
        };
    }
    function ds(t, e, i) {
        const r = i.isWebGL2;
        const s = new function() {
            let e = !1;
            const n = new St;
            let i = null;
            const r = new St(0, 0, 0, 0);
            return {
                setMask: function(n) {
                    i === n || e || (t.colorMask(n, n, n, n), i = n);
                },
                setLocked: function(t) {
                    e = t;
                },
                setClear: function(e, i, s, a, o) {
                    !0 === o && (e *= a, i *= a, s *= a), n.set(e, i, s, a), !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n));
                },
                reset: function() {
                    e = !1, i = null, r.set(-1, 0, 0, 0);
                }
            };
        }, a = new function() {
            let e = !1, n = null, i = null, r = null;
            return {
                setTest: function(t) {
                    t ? O(2929) : H(2929);
                },
                setMask: function(i) {
                    n === i || e || (t.depthMask(i), n = i);
                },
                setFunc: function(e) {
                    if (i !== e) {
                        if (e) switch(e){
                            case 0:
                                t.depthFunc(512);
                                break;
                            case 1:
                                t.depthFunc(519);
                                break;
                            case 2:
                                t.depthFunc(513);
                                break;
                            case 3:
                                t.depthFunc(515);
                                break;
                            case 4:
                                t.depthFunc(514);
                                break;
                            case 5:
                                t.depthFunc(518);
                                break;
                            case 6:
                                t.depthFunc(516);
                                break;
                            case 7:
                                t.depthFunc(517);
                                break;
                            default:
                                t.depthFunc(515);
                        }
                        else t.depthFunc(515);
                        i = e;
                    }
                },
                setLocked: function(t) {
                    e = t;
                },
                setClear: function(e) {
                    r !== e && (t.clearDepth(e), r = e);
                },
                reset: function() {
                    e = !1, n = null, i = null, r = null;
                }
            };
        }, o = new function() {
            let e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null;
            return {
                setTest: function(t) {
                    e || (t ? O(2960) : H(2960));
                },
                setMask: function(i) {
                    n === i || e || (t.stencilMask(i), n = i);
                },
                setFunc: function(e, n, a) {
                    i === e && r === n && s === a || (t.stencilFunc(e, n, a), i = e, r = n, s = a);
                },
                setOp: function(e, n, i) {
                    a === e && o === n && l === i || (t.stencilOp(e, n, i), a = e, o = n, l = i);
                },
                setLocked: function(t) {
                    e = t;
                },
                setClear: function(e) {
                    c !== e && (t.clearStencil(e), c = e);
                },
                reset: function() {
                    e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null;
                }
            };
        };
        let l = {}, c = null, h = {}, u = null, d = !1, p = null, m = null, f = null, g = null, v = null, y = null, x = null, _ = !1, b = null, M = null, w = null, S = null, T = null;
        const E = t.getParameter(35661);
        let A = !1, L = 0;
        const R = t.getParameter(7938);
        -1 !== R.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(R)[1]), A = L >= 1) : -1 !== R.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]), A = L >= 2);
        let C = null, P = {};
        const D = t.getParameter(3088), I = t.getParameter(2978), N = (new St).fromArray(D), B = (new St).fromArray(I);
        function z(e, n, i) {
            const r = new Uint8Array(4), s = t.createTexture();
            t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
            for(let e = 0; e < i; e++)t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return s;
        }
        const F = {};
        function O(e) {
            !0 !== l[e] && (t.enable(e), l[e] = !0);
        }
        function H(e) {
            !1 !== l[e] && (t.disable(e), l[e] = !1);
        }
        F[3553] = z(3553, 3553, 1), F[34067] = z(34067, 34069, 6), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), O(2929), a.setFunc(3), V(!1), W(1), O(2884), k(0);
        const U = {
            [n]: 32774,
            101: 32778,
            102: 32779
        };
        if (r) U[103] = 32775, U[104] = 32776;
        else {
            const t = e.get("EXT_blend_minmax");
            null !== t && (U[103] = t.MIN_EXT, U[104] = t.MAX_EXT);
        }
        const G = {
            200: 0,
            201: 1,
            202: 768,
            204: 770,
            210: 776,
            208: 774,
            206: 772,
            203: 769,
            205: 771,
            209: 775,
            207: 773
        };
        function k(e, i, r, s, a, o, l, c) {
            if (0 !== e) {
                if (!1 === d && (O(3042), d = !0), 5 === e) a = a || i, o = o || r, l = l || s, i === m && a === v || (t.blendEquationSeparate(U[i], U[a]), m = i, v = a), r === f && s === g && o === y && l === x || (t.blendFuncSeparate(G[r], G[s], G[o], G[l]), f = r, g = s, y = o, x = l), p = e, _ = null;
                else if (e !== p || c !== _) {
                    if (m === n && v === n || (t.blendEquation(32774), m = n, v = n), c) switch(e){
                        case 1:
                            t.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            t.blendFunc(1, 1);
                            break;
                        case 3:
                            t.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case 4:
                            t.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    else switch(e){
                        case 1:
                            t.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            t.blendFunc(770, 1);
                            break;
                        case 3:
                            t.blendFunc(0, 769);
                            break;
                        case 4:
                            t.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    f = null, g = null, y = null, x = null, p = e, _ = c;
                }
            } else !0 === d && (H(3042), d = !1);
        }
        function V(e) {
            b !== e && (e ? t.frontFace(2304) : t.frontFace(2305), b = e);
        }
        function W(e) {
            0 !== e ? (O(2884), e !== M && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : H(2884), M = e;
        }
        function j(e, n, i) {
            e ? (O(32823), S === n && T === i || (t.polygonOffset(n, i), S = n, T = i)) : H(32823);
        }
        function q(e) {
            void 0 === e && (e = 33984 + E - 1), C !== e && (t.activeTexture(e), C = e);
        }
        return {
            buffers: {
                color: s,
                depth: a,
                stencil: o
            },
            enable: O,
            disable: H,
            bindFramebuffer: function(e, n) {
                return null === n && null !== c && (n = c), h[e] !== n && (t.bindFramebuffer(e, n), h[e] = n, r && (36009 === e && (h[36160] = n), 36160 === e && (h[36009] = n)), !0);
            },
            bindXRFramebuffer: function(e) {
                e !== c && (t.bindFramebuffer(36160, e), c = e);
            },
            useProgram: function(e) {
                return u !== e && (t.useProgram(e), u = e, !0);
            },
            setBlending: k,
            setMaterial: function(t, e) {
                2 === t.side ? H(2884) : O(2884);
                let n = 1 === t.side;
                e && (n = !n), V(n), 1 === t.blending && !1 === t.transparent ? k(0) : k(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), s.setMask(t.colorWrite);
                const i = t.stencilWrite;
                o.setTest(i), i && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), j(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? O(32926) : H(32926);
            },
            setFlipSided: V,
            setCullFace: W,
            setLineWidth: function(e) {
                e !== w && (A && t.lineWidth(e), w = e);
            },
            setPolygonOffset: j,
            setScissorTest: function(t) {
                t ? O(3089) : H(3089);
            },
            activeTexture: q,
            bindTexture: function(e, n) {
                null === C && q();
                let i = P[C];
                void 0 === i && (i = {
                    type: void 0,
                    texture: void 0
                }, P[C] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || F[e]), i.type = e, i.texture = n);
            },
            unbindTexture: function() {
                const e = P[C];
                void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
            },
            compressedTexImage2D: function() {
                try {
                    t.compressedTexImage2D.apply(t, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texImage2D: function() {
                try {
                    t.texImage2D.apply(t, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texImage3D: function() {
                try {
                    t.texImage3D.apply(t, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            scissor: function(e) {
                !1 === N.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), N.copy(e));
            },
            viewport: function(e) {
                !1 === B.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), B.copy(e));
            },
            reset: function() {
                t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === r && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), l = {}, C = null, P = {}, c = null, h = {}, u = null, d = !1, p = null, m = null, f = null, g = null, v = null, y = null, x = null, _ = !1, b = null, M = null, w = null, S = null, T = null, N.set(0, 0, t.canvas.width, t.canvas.height), B.set(0, 0, t.canvas.width, t.canvas.height), s.reset(), a.reset(), o.reset();
            }
        };
    }
    function ps(t, e, n, i, r, s, a) {
        const o = r.isWebGL2, l = r.maxTextures, c = r.maxCubemapSize, x = r.maxTextureSize, R = r.maxSamples, C = new WeakMap;
        let P, D = !1;
        try {
            D = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (t) {}
        function I(t, e) {
            return D ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        }
        function N(t, e, n, i) {
            let r = 1;
            if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                    const i = e ? ft : Math.floor, s = i(r * t.width), a = i(r * t.height);
                    void 0 === P && (P = I(s, a));
                    const o = n ? I(s, a) : P;
                    o.width = s, o.height = a;
                    return o.getContext("2d").drawImage(t, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."), o;
                }
                return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
            }
            return t;
        }
        function B(t) {
            return pt(t.width) && pt(t.height);
        }
        function z(t, e) {
            return t.generateMipmaps && e && t.minFilter !== p && t.minFilter !== g;
        }
        function F(e, n, r, s, a = 1) {
            t.generateMipmap(e);
            i.get(n).__maxMipLevel = Math.log2(Math.max(r, s, a));
        }
        function O(n, i, r) {
            if (!1 === o) return i;
            if (null !== n) {
                if (void 0 !== t[n]) return t[n];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
            }
            let s = i;
            return 6403 === i && (5126 === r && (s = 33326), 5131 === r && (s = 33325), 5121 === r && (s = 33321)), 6407 === i && (5126 === r && (s = 34837), 5131 === r && (s = 34843), 5121 === r && (s = 32849)), 6408 === i && (5126 === r && (s = 34836), 5131 === r && (s = 34842), 5121 === r && (s = 32856)), 33325 !== s && 33326 !== s && 34842 !== s && 34836 !== s || e.get("EXT_color_buffer_float"), s;
        }
        function H(t) {
            return t === p || t === m || t === f ? 9728 : 9729;
        }
        function U(e) {
            const n = e.target;
            n.removeEventListener("dispose", U), function(e) {
                const n = i.get(e);
                if (void 0 === n.__webglInit) return;
                t.deleteTexture(n.__webglTexture), i.remove(e);
            }(n), n.isVideoTexture && C.delete(n), a.memory.textures--;
        }
        function G(e) {
            const n = e.target;
            n.removeEventListener("dispose", G), function(e) {
                const n = e.texture, r = i.get(e), s = i.get(n);
                if (!e) return;
                void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), a.memory.textures--);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLCubeRenderTarget) for(let e = 0; e < 6; e++)t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
                else t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                if (e.isWebGLMultipleRenderTargets) for(let e = 0, r = n.length; e < r; e++){
                    const r = i.get(n[e]);
                    r.__webglTexture && (t.deleteTexture(r.__webglTexture), a.memory.textures--), i.remove(n[e]);
                }
                i.remove(n), i.remove(e);
            }(n);
        }
        let k = 0;
        function V(t, e) {
            const r = i.get(t);
            if (t.isVideoTexture && function(t) {
                const e = a.render.frame;
                C.get(t) !== e && (C.set(t, e), t.update());
            }(t), t.version > 0 && r.__version !== t.version) {
                const n = t.image;
                if (void 0 === n) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== n.complete) return void J(r, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                }
            }
            n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
        }
        function W(e, r) {
            const a = i.get(e);
            e.version > 0 && a.__version !== e.version ? function(e, i, r) {
                if (6 !== i.image.length) return;
                Y(e, i), n.activeTexture(33984 + r), n.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);
                const a = i && (i.isCompressedTexture || i.image[0].isCompressedTexture), l = i.image[0] && i.image[0].isDataTexture, h = [];
                for(let t = 0; t < 6; t++)h[t] = a || l ? l ? i.image[t].image : i.image[t] : N(i.image[t], !1, !0, c);
                const u = h[0], d = B(u) || o, p = s.convert(i.format), m = s.convert(i.type), f = O(i.internalFormat, p, m);
                let g;
                if (X(34067, i, d), a) {
                    for(let t = 0; t < 6; t++){
                        g = h[t].mipmaps;
                        for(let e = 0; e < g.length; e++){
                            const r = g[e];
                            i.format !== E && i.format !== T ? null !== p ? n.compressedTexImage2D(34069 + t, e, f, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + t, e, f, r.width, r.height, 0, p, m, r.data);
                        }
                    }
                    e.__maxMipLevel = g.length - 1;
                } else {
                    g = i.mipmaps;
                    for(let t = 0; t < 6; t++)if (l) {
                        n.texImage2D(34069 + t, 0, f, h[t].width, h[t].height, 0, p, m, h[t].data);
                        for(let e = 0; e < g.length; e++){
                            const i = g[e].image[t].image;
                            n.texImage2D(34069 + t, e + 1, f, i.width, i.height, 0, p, m, i.data);
                        }
                    } else {
                        n.texImage2D(34069 + t, 0, f, p, m, h[t]);
                        for(let e = 0; e < g.length; e++){
                            const i = g[e];
                            n.texImage2D(34069 + t, e + 1, f, p, m, i.image[t]);
                        }
                    }
                    e.__maxMipLevel = g.length;
                }
                z(i, d) && F(34067, i, u.width, u.height);
                e.__version = i.version, i.onUpdate && i.onUpdate(i);
            }(a, e, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, a.__webglTexture));
        }
        const j = {
            [h]: 10497,
            [u]: 33071,
            [d]: 33648
        }, q = {
            [p]: 9728,
            [m]: 9984,
            [f]: 9986,
            [g]: 9729,
            [v]: 9985,
            [y]: 9987
        };
        function X(n, s, a) {
            if (a ? (t.texParameteri(n, 10242, j[s.wrapS]), t.texParameteri(n, 10243, j[s.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, j[s.wrapR]), t.texParameteri(n, 10240, q[s.magFilter]), t.texParameteri(n, 10241, q[s.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), s.wrapS === u && s.wrapT === u || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, H(s.magFilter)), t.texParameteri(n, 10241, H(s.minFilter)), s.minFilter !== p && s.minFilter !== g && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
                const a = e.get("EXT_texture_filter_anisotropic");
                if (s.type === M && !1 === e.has("OES_texture_float_linear")) return;
                if (!1 === o && s.type === w && !1 === e.has("OES_texture_half_float_linear")) return;
                (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy);
            }
        }
        function Y(e, n) {
            void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", U), e.__webglTexture = t.createTexture(), a.memory.textures++);
        }
        function J(e, i, r) {
            let a = 3553;
            i.isDataTexture2DArray && (a = 35866), i.isDataTexture3D && (a = 32879), Y(e, i), n.activeTexture(33984 + r), n.bindTexture(a, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);
            const l = function(t) {
                return !o && (t.wrapS !== u || t.wrapT !== u || t.minFilter !== p && t.minFilter !== g);
            }(i) && !1 === B(i.image), c = N(i.image, l, !1, x), h = B(c) || o, d = s.convert(i.format);
            let m, f = s.convert(i.type), v = O(i.internalFormat, d, f);
            X(a, i, h);
            const y = i.mipmaps;
            if (i.isDepthTexture) v = 6402, o ? v = i.type === M ? 36012 : i.type === b ? 33190 : i.type === S ? 35056 : 33189 : i.type === M && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === A && 6402 === v && i.type !== _ && i.type !== b && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = _, f = s.convert(i.type)), i.format === L && 6402 === v && (v = 34041, i.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = S, f = s.convert(i.type))), n.texImage2D(3553, 0, v, c.width, c.height, 0, d, f, null);
            else if (i.isDataTexture) {
                if (y.length > 0 && h) {
                    for(let t = 0, e = y.length; t < e; t++)m = y[t], n.texImage2D(3553, t, v, m.width, m.height, 0, d, f, m.data);
                    i.generateMipmaps = !1, e.__maxMipLevel = y.length - 1;
                } else n.texImage2D(3553, 0, v, c.width, c.height, 0, d, f, c.data), e.__maxMipLevel = 0;
            } else if (i.isCompressedTexture) {
                for(let t = 0, e = y.length; t < e; t++)m = y[t], i.format !== E && i.format !== T ? null !== d ? n.compressedTexImage2D(3553, t, v, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, t, v, m.width, m.height, 0, d, f, m.data);
                e.__maxMipLevel = y.length - 1;
            } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, v, c.width, c.height, c.depth, 0, d, f, c.data), e.__maxMipLevel = 0;
            else if (i.isDataTexture3D) n.texImage3D(32879, 0, v, c.width, c.height, c.depth, 0, d, f, c.data), e.__maxMipLevel = 0;
            else if (y.length > 0 && h) {
                for(let t = 0, e = y.length; t < e; t++)m = y[t], n.texImage2D(3553, t, v, d, f, m);
                i.generateMipmaps = !1, e.__maxMipLevel = y.length - 1;
            } else n.texImage2D(3553, 0, v, d, f, c), e.__maxMipLevel = 0;
            z(i, h) && F(a, i, c.width, c.height), e.__version = i.version, i.onUpdate && i.onUpdate(i);
        }
        function Z(e, r, a, o, l) {
            const c = s.convert(a.format), h = s.convert(a.type), u = O(a.internalFormat, c, h);
            32879 === l || 35866 === l ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null), n.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0), n.bindFramebuffer(36160, null);
        }
        function Q(e, n, i) {
            if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
                let r = 33189;
                if (i) {
                    const e = n.depthTexture;
                    e && e.isDepthTexture && (e.type === M ? r = 36012 : e.type === b && (r = 33190));
                    const i = $(n);
                    t.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
                } else t.renderbufferStorage(36161, r, n.width, n.height);
                t.framebufferRenderbuffer(36160, 36096, 36161, e);
            } else if (n.depthBuffer && n.stencilBuffer) {
                if (i) {
                    const e = $(n);
                    t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height);
                } else t.renderbufferStorage(36161, 34041, n.width, n.height);
                t.framebufferRenderbuffer(36160, 33306, 36161, e);
            } else {
                const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture, r = s.convert(e.format), a = s.convert(e.type), o = O(e.internalFormat, r, a);
                if (i) {
                    const e = $(n);
                    t.renderbufferStorageMultisample(36161, e, o, n.width, n.height);
                } else t.renderbufferStorage(36161, o, n.width, n.height);
            }
            t.bindRenderbuffer(36161, null);
        }
        function K(e) {
            const r = i.get(e), s = !0 === e.isWebGLCubeRenderTarget;
            if (e.depthTexture) {
                if (s) throw new Error("target.depthTexture not supported in Cube render targets");
                !function(e, r) {
                    if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                    if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), V(r.depthTexture, 0);
                    const s = i.get(r.depthTexture).__webglTexture;
                    if (r.depthTexture.format === A) t.framebufferTexture2D(36160, 36096, 3553, s, 0);
                    else {
                        if (r.depthTexture.format !== L) throw new Error("Unknown depthTexture format");
                        t.framebufferTexture2D(36160, 33306, 3553, s, 0);
                    }
                }(r.__webglFramebuffer, e);
            } else if (s) {
                r.__webglDepthbuffer = [];
                for(let i = 0; i < 6; i++)n.bindFramebuffer(36160, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t.createRenderbuffer(), Q(r.__webglDepthbuffer[i], e, !1);
            } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), Q(r.__webglDepthbuffer, e, !1);
            n.bindFramebuffer(36160, null);
        }
        function $(t) {
            return o && t.isWebGLMultisampleRenderTarget ? Math.min(R, t.samples) : 0;
        }
        let tt = !1, et = !1;
        this.allocateTextureUnit = function() {
            const t = k;
            return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), k += 1, t;
        }, this.resetTextureUnits = function() {
            k = 0;
        }, this.setTexture2D = V, this.setTexture2DArray = function(t, e) {
            const r = i.get(t);
            t.version > 0 && r.__version !== t.version ? J(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture));
        }, this.setTexture3D = function(t, e) {
            const r = i.get(t);
            t.version > 0 && r.__version !== t.version ? J(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture));
        }, this.setTextureCube = W, this.setupRenderTarget = function(e) {
            const l = e.texture, c = i.get(e), h = i.get(l);
            e.addEventListener("dispose", G), !0 !== e.isWebGLMultipleRenderTargets && (h.__webglTexture = t.createTexture(), h.__version = l.version, a.memory.textures++);
            const u = !0 === e.isWebGLCubeRenderTarget, d = !0 === e.isWebGLMultipleRenderTargets, p = !0 === e.isWebGLMultisampleRenderTarget, m = l.isDataTexture3D || l.isDataTexture2DArray, f = B(e) || o;
            if (!o || l.format !== T || l.type !== M && l.type !== w || (l.format = E, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), u) {
                c.__webglFramebuffer = [];
                for(let e = 0; e < 6; e++)c.__webglFramebuffer[e] = t.createFramebuffer();
            } else if (c.__webglFramebuffer = t.createFramebuffer(), d) {
                if (r.drawBuffers) {
                    const n = e.texture;
                    for(let e = 0, r = n.length; e < r; e++){
                        const r = i.get(n[e]);
                        void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), a.memory.textures++);
                    }
                } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            } else if (p) {
                if (o) {
                    c.__webglMultisampledFramebuffer = t.createFramebuffer(), c.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, c.__webglColorRenderbuffer);
                    const i = s.convert(l.format), r = s.convert(l.type), a = O(l.internalFormat, i, r), o = $(e);
                    t.renderbufferStorageMultisample(36161, o, a, e.width, e.height), n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, c.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t.createRenderbuffer(), Q(c.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null);
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            }
            if (u) {
                n.bindTexture(34067, h.__webglTexture), X(34067, l, f);
                for(let t = 0; t < 6; t++)Z(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
                z(l, f) && F(34067, l, e.width, e.height), n.bindTexture(34067, null);
            } else if (d) {
                const t = e.texture;
                for(let r = 0, s = t.length; r < s; r++){
                    const s = t[r], a = i.get(s);
                    n.bindTexture(3553, a.__webglTexture), X(3553, s, f), Z(c.__webglFramebuffer, e, s, 36064 + r, 3553), z(s, f) && F(3553, s, e.width, e.height);
                }
                n.bindTexture(3553, null);
            } else {
                let t = 3553;
                if (m) {
                    if (o) t = l.isDataTexture3D ? 32879 : 35866;
                    else console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");
                }
                n.bindTexture(t, h.__webglTexture), X(t, l, f), Z(c.__webglFramebuffer, e, l, 36064, t), z(l, f) && F(t, l, e.width, e.height, e.depth), n.bindTexture(t, null);
            }
            e.depthBuffer && K(e);
        }, this.updateRenderTargetMipmap = function(t) {
            const e = B(t) || o, r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [
                t.texture
            ];
            for(let s = 0, a = r.length; s < a; s++){
                const a = r[s];
                if (z(a, e)) {
                    const e = t.isWebGLCubeRenderTarget ? 34067 : 3553, r = i.get(a).__webglTexture;
                    n.bindTexture(e, r), F(e, a, t.width, t.height), n.bindTexture(e, null);
                }
            }
        }, this.updateMultisampleRenderTarget = function(e) {
            if (e.isWebGLMultisampleRenderTarget) {
                if (o) {
                    const r = e.width, s = e.height;
                    let a = 16384;
                    e.depthBuffer && (a |= 256), e.stencilBuffer && (a |= 1024);
                    const o = i.get(e);
                    n.bindFramebuffer(36008, o.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, o.__webglFramebuffer), t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728), n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, o.__webglMultisampledFramebuffer);
                } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            }
        }, this.safeSetTexture2D = function(t, e) {
            t && t.isWebGLRenderTarget && (!1 === tt && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), tt = !0), t = t.texture), V(t, e);
        }, this.safeSetTextureCube = function(t, e) {
            t && t.isWebGLCubeRenderTarget && (!1 === et && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), et = !0), t = t.texture), W(t, e);
        };
    }
    function ms(t, e, n) {
        const i = n.isWebGL2;
        return {
            convert: function(t) {
                let n;
                if (t === x) return 5121;
                if (1017 === t) return 32819;
                if (1018 === t) return 32820;
                if (1019 === t) return 33635;
                if (1010 === t) return 5120;
                if (1011 === t) return 5122;
                if (t === _) return 5123;
                if (1013 === t) return 5124;
                if (t === b) return 5125;
                if (t === M) return 5126;
                if (t === w) return i ? 5131 : (n = e.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null);
                if (1021 === t) return 6406;
                if (t === T) return 6407;
                if (t === E) return 6408;
                if (1024 === t) return 6409;
                if (1025 === t) return 6410;
                if (t === A) return 6402;
                if (t === L) return 34041;
                if (1028 === t) return 6403;
                if (1029 === t) return 36244;
                if (1030 === t) return 33319;
                if (1031 === t) return 33320;
                if (1032 === t) return 36248;
                if (1033 === t) return 36249;
                if (t === R || t === C || t === P || t === D) {
                    if (n = e.get("WEBGL_compressed_texture_s3tc"), null === n) return null;
                    if (t === R) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (t === C) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (t === P) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (t === D) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                }
                if (t === I || t === N || t === B || t === z) {
                    if (n = e.get("WEBGL_compressed_texture_pvrtc"), null === n) return null;
                    if (t === I) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (t === N) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (t === B) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (t === z) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                }
                if (36196 === t) return n = e.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
                if ((t === F || t === O) && (n = e.get("WEBGL_compressed_texture_etc"), null !== n)) {
                    if (t === F) return n.COMPRESSED_RGB8_ETC2;
                    if (t === O) return n.COMPRESSED_RGBA8_ETC2_EAC;
                }
                return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"), null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"), null !== n ? t : null) : t === S ? i ? 34042 : (n = e.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0;
            }
        };
    }
    class fs extends Jn {
        constructor(t = []){
            super(), this.cameras = t;
        }
    }
    fs.prototype.isArrayCamera = !0;
    class gs extends Pe {
        constructor(){
            super(), this.type = "Group";
        }
    }
    gs.prototype.isGroup = !0;
    const vs = {
        type: "move"
    };
    class ys {
        constructor(){
            this._targetRay = null, this._grip = null, this._hand = null;
        }
        getHandSpace() {
            return null === this._hand && (this._hand = new gs, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand;
        }
        getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new gs, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new Rt, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new Rt), this._targetRay;
        }
        getGripSpace() {
            return null === this._grip && (this._grip = new gs, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new Rt, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new Rt), this._grip;
        }
        dispatchEvent(t) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this;
        }
        disconnect(t) {
            return this.dispatchEvent({
                type: "disconnected",
                data: t
            }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
        }
        update(t, e, n) {
            let i = null, r = null, s = null;
            const a = this._targetRay, o = this._grip, l = this._hand;
            if (t && "visible-blurred" !== e.session.visibilityState) {
                if (null !== a && (i = e.getPose(t.targetRaySpace, n), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(vs))), l && t.hand) {
                    s = !0;
                    for (const i of t.hand.values()){
                        const t = e.getJointPose(i, n);
                        if (void 0 === l.joints[i.jointName]) {
                            const t = new gs;
                            t.matrixAutoUpdate = !1, t.visible = !1, l.joints[i.jointName] = t, l.add(t);
                        }
                        const r = l.joints[i.jointName];
                        null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t;
                    }
                    const i = l.joints["index-finger-tip"], r = l.joints["thumb-tip"], a = i.position.distanceTo(r.position), o = .02, c = .005;
                    l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: t.handedness,
                        target: this
                    })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: t.handedness,
                        target: this
                    }));
                } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
            }
            return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
        }
    }
    class xs extends rt {
        constructor(t, e){
            super();
            const n = this, i = t.state;
            let r = null, s = 1, a = null, o = "local-floor", l = null, c = null, h = null, u = null;
            const d = [], p = new Map, m = new Jn;
            m.layers.enable(1), m.viewport = new St;
            const f = new Jn;
            f.layers.enable(2), f.viewport = new St;
            const g = [
                m,
                f
            ], v = new fs;
            v.layers.enable(1), v.layers.enable(2);
            let y = null, x = null;
            function _(t) {
                const e = p.get(t.inputSource);
                e && e.dispatchEvent({
                    type: t.type,
                    data: t.inputSource
                });
            }
            function b() {
                p.forEach(function(t, e) {
                    t.disconnect(e);
                }), p.clear(), y = null, x = null, i.bindXRFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), A.stop(), n.isPresenting = !1, n.dispatchEvent({
                    type: "sessionend"
                });
            }
            function M(t) {
                const e = r.inputSources;
                for(let t = 0; t < d.length; t++)p.set(e[t], d[t]);
                for(let e = 0; e < t.removed.length; e++){
                    const n = t.removed[e], i = p.get(n);
                    i && (i.dispatchEvent({
                        type: "disconnected",
                        data: n
                    }), p.delete(n));
                }
                for(let e = 0; e < t.added.length; e++){
                    const n = t.added[e], i = p.get(n);
                    i && i.dispatchEvent({
                        type: "connected",
                        data: n
                    });
                }
            }
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
                let e = d[t];
                return void 0 === e && (e = new ys, d[t] = e), e.getTargetRaySpace();
            }, this.getControllerGrip = function(t) {
                let e = d[t];
                return void 0 === e && (e = new ys, d[t] = e), e.getGripSpace();
            }, this.getHand = function(t) {
                let e = d[t];
                return void 0 === e && (e = new ys, d[t] = e), e.getHandSpace();
            }, this.setFramebufferScaleFactor = function(t) {
                s = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
            }, this.setReferenceSpaceType = function(t) {
                o = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
            }, this.getReferenceSpace = function() {
                return a;
            }, this.getSession = function() {
                return r;
            }, this.setSession = async function(t) {
                if (r = t, null !== r) {
                    r.addEventListener("select", _), r.addEventListener("selectstart", _), r.addEventListener("selectend", _), r.addEventListener("squeeze", _), r.addEventListener("squeezestart", _), r.addEventListener("squeezeend", _), r.addEventListener("end", b), r.addEventListener("inputsourceschange", M);
                    const t = e.getContextAttributes();
                    if (!0 !== t.xrCompatible && await e.makeXRCompatible(), void 0 === r.renderState.layers) {
                        const n = {
                            antialias: t.antialias,
                            alpha: t.alpha,
                            depth: t.depth,
                            stencil: t.stencil,
                            framebufferScaleFactor: s
                        }, i = new XRWebGLLayer(r, e, n);
                        r.updateRenderState({
                            baseLayer: i
                        });
                    } else {
                        let n = 0;
                        t.depth && (n = t.stencil ? 34041 : 6402);
                        const i = {
                            colorFormat: t.alpha ? 6408 : 6407,
                            depthFormat: n,
                            scaleFactor: s
                        };
                        c = new XRWebGLBinding(r, e), u = c.createProjectionLayer(i), h = e.createFramebuffer(), r.updateRenderState({
                            layers: [
                                u
                            ]
                        });
                    }
                    a = await r.requestReferenceSpace(o), A.setContext(r), A.start(), n.isPresenting = !0, n.dispatchEvent({
                        type: "sessionstart"
                    });
                }
            };
            const w = new Rt, S = new Rt;
            function T(t, e) {
                null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert();
            }
            this.updateCamera = function(t) {
                if (null === r) return;
                v.near = f.near = m.near = t.near, v.far = f.far = m.far = t.far, y === v.near && x === v.far || (r.updateRenderState({
                    depthNear: v.near,
                    depthFar: v.far
                }), y = v.near, x = v.far);
                const e = t.parent, n = v.cameras;
                T(v, e);
                for(let t = 0; t < n.length; t++)T(n[t], e);
                v.matrixWorld.decompose(v.position, v.quaternion, v.scale), t.position.copy(v.position), t.quaternion.copy(v.quaternion), t.scale.copy(v.scale), t.matrix.copy(v.matrix), t.matrixWorld.copy(v.matrixWorld);
                const i = t.children;
                for(let t = 0, e = i.length; t < e; t++)i[t].updateMatrixWorld(!0);
                2 === n.length ? function(t, e, n) {
                    w.setFromMatrixPosition(e.matrixWorld), S.setFromMatrixPosition(n.matrixWorld);
                    const i = w.distanceTo(S), r = e.projectionMatrix.elements, s = n.projectionMatrix.elements, a = r[14] / (r[10] - 1), o = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5], h = (r[8] - 1) / r[0], u = (s[8] + 1) / s[0], d = a * h, p = a * u, m = i / (-h + u), f = m * -h;
                    e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(f), t.translateZ(m), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
                    const g = a + m, v = o + m, y = d - f, x = p + (i - f), _ = l * o / v * g, b = c * o / v * g;
                    t.projectionMatrix.makePerspective(y, x, _, b, g, v);
                }(v, m, f) : v.projectionMatrix.copy(m.projectionMatrix);
            }, this.getCamera = function() {
                return v;
            };
            let E = null;
            const A = new oi;
            A.setAnimationLoop(function(t, n) {
                if (l = n.getViewerPose(a), null !== l) {
                    const t = l.views, n = r.renderState.baseLayer;
                    void 0 === r.renderState.layers && i.bindXRFramebuffer(n.framebuffer);
                    let s = !1;
                    t.length !== v.cameras.length && (v.cameras.length = 0, s = !0);
                    for(let a = 0; a < t.length; a++){
                        const o = t[a];
                        let l = null;
                        if (void 0 === r.renderState.layers) l = n.getViewport(o);
                        else {
                            const t = c.getViewSubImage(u, o);
                            i.bindXRFramebuffer(h), e.framebufferTexture2D(36160, 36064, 3553, t.colorTexture, 0), void 0 !== t.depthStencilTexture && e.framebufferTexture2D(36160, 36096, 3553, t.depthStencilTexture, 0), l = t.viewport;
                        }
                        const d = g[a];
                        d.matrix.fromArray(o.transform.matrix), d.projectionMatrix.fromArray(o.projectionMatrix), d.viewport.set(l.x, l.y, l.width, l.height), 0 === a && v.matrix.copy(d.matrix), !0 === s && v.cameras.push(d);
                    }
                }
                const s = r.inputSources;
                for(let t = 0; t < d.length; t++){
                    const e = d[t], i = s[t];
                    e.update(i, n, a);
                }
                E && E(t, n);
            }), this.setAnimationLoop = function(t) {
                E = t;
            }, this.dispose = function() {};
        }
    }
    function _s(t) {
        function e(e, n) {
            e.opacity.value = n.opacity, n.color && e.diffuse.value.copy(n.color), n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.specularMap && (e.specularMap.value = n.specularMap);
            const i = t.get(n).envMap;
            if (i) {
                e.envMap.value = i, e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1, e.reflectivity.value = n.reflectivity, e.refractionRatio.value = n.refractionRatio;
                const r = t.get(i).__maxMipLevel;
                void 0 !== r && (e.maxMipLevel.value = r);
            }
            let r, s;
            n.lightMap && (e.lightMap.value = n.lightMap, e.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (e.aoMap.value = n.aoMap, e.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)), n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), e.uv2Transform.value.copy(s.matrix));
        }
        function n(e, n) {
            e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap), n.metalnessMap && (e.metalnessMap.value = n.metalnessMap), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias);
            t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
        }
        return {
            refreshFogUniforms: function(t, e) {
                t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density);
            },
            refreshMaterialUniforms: function(t, i, r, s, a) {
                i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i), function(t, e) {
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                }(t, i)) : i.isMeshToonMaterial ? (e(t, i), function(t, e) {
                    e.gradientMap && (t.gradientMap.value = e.gradientMap);
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                    e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                    e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                }(t, i)) : i.isMeshPhongMaterial ? (e(t, i), function(t, e) {
                    t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
                    e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                    e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                }(t, i)) : i.isMeshStandardMaterial ? (e(t, i), i.isMeshPhysicalMaterial ? function(t, e, i) {
                    n(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
                    e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
                    e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
                    e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate());
                    t.transmission.value = e.transmission, e.transmissionMap && (t.transmissionMap.value = e.transmissionMap);
                    e.transmission > 0 && (t.transmissionSamplerMap.value = i.texture, t.transmissionSamplerSize.value.set(i.width, i.height));
                    t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap);
                    t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor);
                }(t, i, a) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i), function(t, e) {
                    e.matcap && (t.matcap.value = e.matcap);
                    e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                    e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                }(t, i)) : i.isMeshDepthMaterial ? (e(t, i), function(t, e) {
                    e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i), function(t, e) {
                    e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                    t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance;
                }(t, i)) : i.isMeshNormalMaterial ? (e(t, i), function(t, e) {
                    e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
                    e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
                    e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
                }(t, i)) : i.isLineBasicMaterial ? (function(t, e) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity;
                }(t, i), i.isLineDashedMaterial && function(t, e) {
                    t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale;
                }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    let r;
                    e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                    void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
                }(t, i, r, s) : i.isSpriteMaterial ? function(t, e) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    let n;
                    e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                    void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
                }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
            }
        };
    }
    function bs(t = {}) {
        const e = void 0 !== t.canvas ? t.canvas : function() {
            const t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            return t.style.display = "block", t;
        }(), n = void 0 !== t.context ? t.context : null, i = void 0 !== t.alpha && t.alpha, r = void 0 === t.depth || t.depth, s = void 0 === t.stencil || t.stencil, a = void 0 !== t.antialias && t.antialias, o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha, l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer, c = void 0 !== t.powerPreference ? t.powerPreference : "default", h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
        let d = null, m = null;
        const f = [], g = [];
        this.domElement = e, this.debug = {
            checkShaderErrors: !0
        }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = X, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
        const v = this;
        let _ = !1, b = 0, S = 0, T = null, A = -1, L = null;
        const R = new St, C = new St;
        let P = null, D = e.width, I = e.height, N = 1, B = null, z = null;
        const F = new St(0, 0, D, I), O = new St(0, 0, D, I);
        let H = !1;
        const U = [], G = new ai;
        let k = !1, V = !1, W = null;
        const j = new ae, q = new Rt, Y = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function J() {
            return null === T ? N : 1;
        }
        let Z, Q, K, $, tt, et, nt, it, rt, st, at, ot, lt, ct, ht, ut, dt, pt, mt, ft, gt, vt, yt = n;
        function xt(t, n) {
            for(let i = 0; i < t.length; i++){
                const r = t[i], s = e.getContext(r, n);
                if (null !== s) return s;
            }
            return null;
        }
        try {
            const t = {
                alpha: i,
                depth: r,
                stencil: s,
                antialias: a,
                premultipliedAlpha: o,
                preserveDrawingBuffer: l,
                powerPreference: c,
                failIfMajorPerformanceCaveat: h
            };
            if (e.addEventListener("webglcontextlost", Mt, !1), e.addEventListener("webglcontextrestored", wt, !1), null === yt) {
                const e = [
                    "webgl2",
                    "webgl",
                    "experimental-webgl"
                ];
                if (!0 === v.isWebGL1Renderer && e.shift(), yt = xt(e, t), null === yt) throw xt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            }
            void 0 === yt.getShaderPrecisionFormat && (yt.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                };
            });
        } catch (t) {
            throw console.error("THREE.WebGLRenderer: " + t.message), t;
        }
        function _t() {
            Z = new xi(yt), Q = new gi(yt, Z, t), Z.init(Q), gt = new ms(yt, Z, Q), K = new ds(yt, Z, Q), U[0] = 1029, $ = new Mi(yt), tt = new Kr, et = new ps(yt, Z, K, tt, Q, gt, $), nt = new yi(v), it = new li(yt, Q), vt = new mi(yt, Z, it, Q), rt = new _i(yt, it, $, vt), st = new Ei(yt, rt, it, $), pt = new Ti(yt), ht = new vi(tt), at = new Qr(v, nt, Z, Q, vt, ht), ot = new _s(tt), lt = new ns(tt), ct = new ls(Z, Q), dt = new pi(v, nt, K, st, o), ut = new us(v, st, Q), mt = new fi(yt, Z, $, Q), ft = new bi(yt, Z, $, Q), $.programs = at.programs, v.capabilities = Q, v.extensions = Z, v.properties = tt, v.renderLists = lt, v.shadowMap = ut, v.state = K, v.info = $;
        }
        _t();
        const bt = new xs(v, yt);
        function Mt(t) {
            t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _ = !0;
        }
        function wt() {
            console.log("THREE.WebGLRenderer: Context Restored."), _ = !1;
            const t = $.autoReset, e = ut.enabled, n = ut.autoUpdate, i = ut.needsUpdate, r = ut.type;
            _t(), $.autoReset = t, ut.enabled = e, ut.autoUpdate = n, ut.needsUpdate = i, ut.type = r;
        }
        function Et(t) {
            const e = t.target;
            e.removeEventListener("dispose", Et), function(t) {
                (function(t) {
                    const e = tt.get(t).programs;
                    void 0 !== e && e.forEach(function(t) {
                        at.releaseProgram(t);
                    });
                })(t), tt.remove(t);
            }(e);
        }
        this.xr = bt, this.getContext = function() {
            return yt;
        }, this.getContextAttributes = function() {
            return yt.getContextAttributes();
        }, this.forceContextLoss = function() {
            const t = Z.get("WEBGL_lose_context");
            t && t.loseContext();
        }, this.forceContextRestore = function() {
            const t = Z.get("WEBGL_lose_context");
            t && t.restoreContext();
        }, this.getPixelRatio = function() {
            return N;
        }, this.setPixelRatio = function(t) {
            void 0 !== t && (N = t, this.setSize(D, I, !1));
        }, this.getSize = function(t) {
            return t.set(D, I);
        }, this.setSize = function(t, n, i) {
            bt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (D = t, I = n, e.width = Math.floor(t * N), e.height = Math.floor(n * N), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n));
        }, this.getDrawingBufferSize = function(t) {
            return t.set(D * N, I * N).floor();
        }, this.setDrawingBufferSize = function(t, n, i) {
            D = t, I = n, N = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n);
        }, this.getCurrentViewport = function(t) {
            return t.copy(R);
        }, this.getViewport = function(t) {
            return t.copy(F);
        }, this.setViewport = function(t, e, n, i) {
            t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i), K.viewport(R.copy(F).multiplyScalar(N).floor());
        }, this.getScissor = function(t) {
            return t.copy(O);
        }, this.setScissor = function(t, e, n, i) {
            t.isVector4 ? O.set(t.x, t.y, t.z, t.w) : O.set(t, e, n, i), K.scissor(C.copy(O).multiplyScalar(N).floor());
        }, this.getScissorTest = function() {
            return H;
        }, this.setScissorTest = function(t) {
            K.setScissorTest(H = t);
        }, this.setOpaqueSort = function(t) {
            B = t;
        }, this.setTransparentSort = function(t) {
            z = t;
        }, this.getClearColor = function(t) {
            return t.copy(dt.getClearColor());
        }, this.setClearColor = function() {
            dt.setClearColor.apply(dt, arguments);
        }, this.getClearAlpha = function() {
            return dt.getClearAlpha();
        }, this.setClearAlpha = function() {
            dt.setClearAlpha.apply(dt, arguments);
        }, this.clear = function(t, e, n) {
            let i = 0;
            (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), yt.clear(i);
        }, this.clearColor = function() {
            this.clear(!0, !1, !1);
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1);
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0);
        }, this.dispose = function() {
            e.removeEventListener("webglcontextlost", Mt, !1), e.removeEventListener("webglcontextrestored", wt, !1), lt.dispose(), ct.dispose(), tt.dispose(), nt.dispose(), st.dispose(), vt.dispose(), bt.dispose(), bt.removeEventListener("sessionstart", Ct), bt.removeEventListener("sessionend", Pt), W && (W.dispose(), W = null), Dt.stop();
        }, this.renderBufferImmediate = function(t, e) {
            vt.initAttributes();
            const n = tt.get(t);
            t.hasPositions && !n.position && (n.position = yt.createBuffer()), t.hasNormals && !n.normal && (n.normal = yt.createBuffer()), t.hasUvs && !n.uv && (n.uv = yt.createBuffer()), t.hasColors && !n.color && (n.color = yt.createBuffer());
            const i = e.getAttributes();
            t.hasPositions && (yt.bindBuffer(34962, n.position), yt.bufferData(34962, t.positionArray, 35048), vt.enableAttribute(i.position), yt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (yt.bindBuffer(34962, n.normal), yt.bufferData(34962, t.normalArray, 35048), vt.enableAttribute(i.normal), yt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (yt.bindBuffer(34962, n.uv), yt.bufferData(34962, t.uvArray, 35048), vt.enableAttribute(i.uv), yt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (yt.bindBuffer(34962, n.color), yt.bufferData(34962, t.colorArray, 35048), vt.enableAttribute(i.color), yt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), vt.disableUnusedAttributes(), yt.drawArrays(4, 0, t.count), t.count = 0;
        }, this.renderBufferDirect = function(t, e, n, i, r, s) {
            null === e && (e = Y);
            const a = r.isMesh && r.matrixWorld.determinant() < 0, o = Ot(t, e, i, r);
            K.setMaterial(i, a);
            let l = n.index;
            const c = n.attributes.position;
            if (null === l) {
                if (void 0 === c || 0 === c.count) return;
            } else if (0 === l.count) return;
            let h, u = 1;
            !0 === i.wireframe && (l = rt.getWireframeAttribute(n), u = 2), (i.morphTargets || i.morphNormals) && pt.update(r, n, i, o), vt.setup(r, i, o, n, l);
            let d = mt;
            null !== l && (h = it.get(l), d = ft, d.setIndex(h));
            const p = null !== l ? l.count : c.count, m = n.drawRange.start * u, f = n.drawRange.count * u, g = null !== s ? s.start * u : 0, v = null !== s ? s.count * u : 1 / 0, y = Math.max(m, g), x = Math.min(p, m + f, g + v) - 1, _ = Math.max(0, x - y + 1);
            if (0 !== _) {
                if (r.isMesh) !0 === i.wireframe ? (K.setLineWidth(i.wireframeLinewidth * J()), d.setMode(1)) : d.setMode(4);
                else if (r.isLine) {
                    let t = i.linewidth;
                    void 0 === t && (t = 1), K.setLineWidth(t * J()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3);
                } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
                if (r.isInstancedMesh) d.renderInstances(y, _, r.count);
                else if (n.isInstancedBufferGeometry) {
                    const t = Math.min(n.instanceCount, n._maxInstanceCount);
                    d.renderInstances(y, _, t);
                } else d.render(y, _);
            }
        }, this.compile = function(t, e) {
            m = ct.get(t), m.init(), t.traverseVisible(function(t) {
                t.isLight && t.layers.test(e.layers) && (m.pushLight(t), t.castShadow && m.pushShadow(t));
            }), m.setupLights(), t.traverse(function(e) {
                const n = e.material;
                if (n) {
                    if (Array.isArray(n)) for(let i = 0; i < n.length; i++)zt(n[i], t, e);
                    else zt(n, t, e);
                }
            });
        };
        let Lt = null;
        function Ct() {
            Dt.stop();
        }
        function Pt() {
            Dt.start();
        }
        const Dt = new oi;
        function It(t, e, n, i) {
            if (!1 === t.visible) return;
            if (t.layers.test(e.layers)) {
                if (t.isGroup) n = t.renderOrder;
                else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
                else if (t.isLight) m.pushLight(t), t.castShadow && m.pushShadow(t);
                else if (t.isSprite) {
                    if (!t.frustumCulled || G.intersectsSprite(t)) {
                        i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j);
                        const e = st.update(t), r = t.material;
                        r.visible && d.push(t, e, r, n, q.z, null);
                    }
                } else if (t.isImmediateRenderObject) i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j), d.push(t, null, t.material, n, q.z, null);
                else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== $.render.frame && (t.skeleton.update(), t.skeleton.frame = $.render.frame), !t.frustumCulled || G.intersectsObject(t))) {
                    i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j);
                    const e = st.update(t), r = t.material;
                    if (Array.isArray(r)) {
                        const i = e.groups;
                        for(let s = 0, a = i.length; s < a; s++){
                            const a = i[s], o = r[a.materialIndex];
                            o && o.visible && d.push(t, e, o, n, q.z, a);
                        }
                    } else r.visible && d.push(t, e, r, n, q.z, null);
                }
            }
            const r = t.children;
            for(let t = 0, s = r.length; t < s; t++)It(r[t], e, n, i);
        }
        function Nt(t, e, n) {
            const i = !0 === e.isScene ? e.overrideMaterial : null;
            for(let r = 0, s = t.length; r < s; r++){
                const s = t[r], a = s.object, o = s.geometry, l = null === i ? s.material : i, c = s.group;
                if (n.isArrayCamera) {
                    const t = n.cameras;
                    for(let n = 0, i = t.length; n < i; n++){
                        const i = t[n];
                        a.layers.test(i.layers) && (K.viewport(R.copy(i.viewport)), m.setupLightsView(i), Bt(a, e, i, o, l, c));
                    }
                } else Bt(a, e, n, o, l, c);
            }
        }
        function Bt(t, e, n, i, r, s) {
            if (t.onBeforeRender(v, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                const i = Ot(n, e, r, t);
                K.setMaterial(r), vt.reset(), function(t, e) {
                    t.render(function(t) {
                        v.renderBufferImmediate(t, e);
                    });
                }(t, i);
            } else !0 === r.transparent && 2 === r.side ? (r.side = 1, r.needsUpdate = !0, v.renderBufferDirect(n, e, i, r, t, s), r.side = 0, r.needsUpdate = !0, v.renderBufferDirect(n, e, i, r, t, s), r.side = 2) : v.renderBufferDirect(n, e, i, r, t, s);
            t.onAfterRender(v, e, n, i, r, s);
        }
        function zt(t, e, n) {
            !0 !== e.isScene && (e = Y);
            const i = tt.get(t), r = m.state.lights, s = m.state.shadowsArray, a = r.state.version, o = at.getParameters(t, r.state, s, e, n), l = at.getProgramCacheKey(o);
            let c = i.programs;
            i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = nt.get(t.envMap || i.environment), void 0 === c && (t.addEventListener("dispose", Et), c = new Map, i.programs = c);
            let h = c.get(l);
            if (void 0 !== h) {
                if (i.currentProgram === h && i.lightsStateVersion === a) return Ft(t, o), h;
            } else o.uniforms = at.getUniforms(t), t.onBuild(o, v), t.onBeforeCompile(o, v), h = at.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;
            const u = i.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = ht.uniform), Ft(t, o), i.needsLights = function(t) {
                return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights;
            }(t), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
            const d = h.getUniforms(), p = Cr.seqWithValue(d.seq, u);
            return i.currentProgram = h, i.uniformsList = p, h;
        }
        function Ft(t, e) {
            const n = tt.get(t);
            n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas;
        }
        function Ot(t, e, n, i) {
            !0 !== e.isScene && (e = Y), et.resetTextureUnits();
            const r = e.fog, s = n.isMeshStandardMaterial ? e.environment : null, a = null === T ? v.outputEncoding : T.texture.encoding, o = nt.get(n.envMap || s), l = !0 === n.vertexColors && i.geometry && i.geometry.attributes.color && 4 === i.geometry.attributes.color.itemSize, c = tt.get(n), h = m.state.lights;
            if (!0 === k && (!0 === V || t !== L)) {
                const e = t === L && n.id === A;
                ht.setState(n, t, e);
            }
            let u = !1;
            n.version === c.__version ? c.needsLights && c.lightsStateVersion !== h.state.version || c.outputEncoding !== a || i.isInstancedMesh && !1 === c.instancing ? u = !0 : i.isInstancedMesh || !0 !== c.instancing ? i.isSkinnedMesh && !1 === c.skinning ? u = !0 : i.isSkinnedMesh || !0 !== c.skinning ? c.envMap !== o || n.fog && c.fog !== r ? u = !0 : void 0 === c.numClippingPlanes || c.numClippingPlanes === ht.numPlanes && c.numIntersection === ht.numIntersection ? c.vertexAlphas !== l && (u = !0) : u = !0 : u = !0 : u = !0 : (u = !0, c.__version = n.version);
            let d = c.currentProgram;
            !0 === u && (d = zt(n, e, i));
            let p = !1, f = !1, g = !1;
            const y = d.getUniforms(), x = c.uniforms;
            if (K.useProgram(d.program) && (p = !0, f = !0, g = !0), n.id !== A && (A = n.id, f = !0), p || L !== t) {
                if (y.setValue(yt, "projectionMatrix", t.projectionMatrix), Q.logarithmicDepthBuffer && y.setValue(yt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), L !== t && (L = t, f = !0, g = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                    const e = y.map.cameraPosition;
                    void 0 !== e && e.setValue(yt, q.setFromMatrixPosition(t.matrixWorld));
                }
                (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && y.setValue(yt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || i.isSkinnedMesh) && y.setValue(yt, "viewMatrix", t.matrixWorldInverse);
            }
            if (i.isSkinnedMesh) {
                y.setOptional(yt, i, "bindMatrix"), y.setOptional(yt, i, "bindMatrixInverse");
                const t = i.skeleton;
                t && (Q.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), y.setValue(yt, "boneTexture", t.boneTexture, et), y.setValue(yt, "boneTextureSize", t.boneTextureSize)) : y.setOptional(yt, t, "boneMatrices"));
            }
            var _, b;
            return (f || c.receiveShadow !== i.receiveShadow) && (c.receiveShadow = i.receiveShadow, y.setValue(yt, "receiveShadow", i.receiveShadow)), f && (y.setValue(yt, "toneMappingExposure", v.toneMappingExposure), c.needsLights && (b = g, (_ = x).ambientLightColor.needsUpdate = b, _.lightProbe.needsUpdate = b, _.directionalLights.needsUpdate = b, _.directionalLightShadows.needsUpdate = b, _.pointLights.needsUpdate = b, _.pointLightShadows.needsUpdate = b, _.spotLights.needsUpdate = b, _.spotLightShadows.needsUpdate = b, _.rectAreaLights.needsUpdate = b, _.hemisphereLights.needsUpdate = b), r && n.fog && ot.refreshFogUniforms(x, r), ot.refreshMaterialUniforms(x, n, N, I, W), Cr.upload(yt, c.uniformsList, x, et)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Cr.upload(yt, c.uniformsList, x, et), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && y.setValue(yt, "center", i.center), y.setValue(yt, "modelViewMatrix", i.modelViewMatrix), y.setValue(yt, "normalMatrix", i.normalMatrix), y.setValue(yt, "modelMatrix", i.matrixWorld), d;
        }
        Dt.setAnimationLoop(function(t) {
            Lt && Lt(t);
        }), "undefined" != typeof window && Dt.setContext(window), this.setAnimationLoop = function(t) {
            Lt = t, bt.setAnimationLoop(t), null === t ? Dt.stop() : Dt.start();
        }, bt.addEventListener("sessionstart", Ct), bt.addEventListener("sessionend", Pt), this.render = function(t, e) {
            if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (!0 === _) return;
            !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === bt.enabled && !0 === bt.isPresenting && (!0 === bt.cameraAutoUpdate && bt.updateCamera(e), e = bt.getCamera()), !0 === t.isScene && t.onBeforeRender(v, t, e, T), m = ct.get(t, g.length), m.init(), g.push(m), j.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), G.setFromProjectionMatrix(j), V = this.localClippingEnabled, k = ht.init(this.clippingPlanes, V, e), d = lt.get(t, f.length), d.init(), f.push(d), It(t, e, 0, v.sortObjects), d.finish(), !0 === v.sortObjects && d.sort(B, z), !0 === k && ht.beginShadows();
            const n = m.state.shadowsArray;
            ut.render(n, t, e), m.setupLights(), m.setupLightsView(e), !0 === k && ht.endShadows(), !0 === this.info.autoReset && this.info.reset(), dt.render(d, t);
            const i = d.opaque, r = d.transmissive, s = d.transparent;
            i.length > 0 && Nt(i, t, e), r.length > 0 && function(t, e, n, i) {
                if (null === W) {
                    const t = !0 === a && !0 === Q.isWebGL2;
                    W = new (t ? At : Tt)(1024, 1024, {
                        generateMipmaps: !0,
                        type: null !== gt.convert(w) ? w : x,
                        minFilter: y,
                        magFilter: p,
                        wrapS: u,
                        wrapT: u
                    });
                }
                const r = v.getRenderTarget();
                v.setRenderTarget(W), v.clear();
                const s = v.toneMapping;
                v.toneMapping = 0, Nt(t, n, i), v.toneMapping = s, et.updateMultisampleRenderTarget(W), et.updateRenderTargetMipmap(W), v.setRenderTarget(r), Nt(e, n, i);
            }(i, r, t, e), s.length > 0 && Nt(s, t, e), null !== T && (et.updateMultisampleRenderTarget(T), et.updateRenderTargetMipmap(T)), !0 === t.isScene && t.onAfterRender(v, t, e), K.buffers.depth.setTest(!0), K.buffers.depth.setMask(!0), K.buffers.color.setMask(!0), K.setPolygonOffset(!1), vt.resetDefaultState(), A = -1, L = null, g.pop(), m = g.length > 0 ? g[g.length - 1] : null, f.pop(), d = f.length > 0 ? f[f.length - 1] : null;
        }, this.getActiveCubeFace = function() {
            return b;
        }, this.getActiveMipmapLevel = function() {
            return S;
        }, this.getRenderTarget = function() {
            return T;
        }, this.setRenderTarget = function(t, e = 0, n = 0) {
            T = t, b = e, S = n, t && void 0 === tt.get(t).__webglFramebuffer && et.setupRenderTarget(t);
            let i = null, r = !1, s = !1;
            if (t) {
                const n = t.texture;
                (n.isDataTexture3D || n.isDataTexture2DArray) && (s = !0);
                const a = tt.get(t).__webglFramebuffer;
                t.isWebGLCubeRenderTarget ? (i = a[e], r = !0) : i = t.isWebGLMultisampleRenderTarget ? tt.get(t).__webglMultisampledFramebuffer : a, R.copy(t.viewport), C.copy(t.scissor), P = t.scissorTest;
            } else R.copy(F).multiplyScalar(N).floor(), C.copy(O).multiplyScalar(N).floor(), P = H;
            if (K.bindFramebuffer(36160, i) && Q.drawBuffers) {
                let e = !1;
                if (t) {
                    if (t.isWebGLMultipleRenderTargets) {
                        const n = t.texture;
                        if (U.length !== n.length || 36064 !== U[0]) {
                            for(let t = 0, e = n.length; t < e; t++)U[t] = 36064 + t;
                            U.length = n.length, e = !0;
                        }
                    } else 1 === U.length && 36064 === U[0] || (U[0] = 36064, U.length = 1, e = !0);
                } else 1 === U.length && 1029 === U[0] || (U[0] = 1029, U.length = 1, e = !0);
                e && (Q.isWebGL2 ? yt.drawBuffers(U) : Z.get("WEBGL_draw_buffers").drawBuffersWEBGL(U));
            }
            if (K.viewport(R), K.scissor(C), K.setScissorTest(P), r) {
                const i = tt.get(t.texture);
                yt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n);
            } else if (s) {
                const i = tt.get(t.texture), r = e || 0;
                yt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
            }
        }, this.readRenderTargetPixels = function(t, e, n, i, r, s, a) {
            if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let o = tt.get(t).__webglFramebuffer;
            if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
                K.bindFramebuffer(36160, o);
                try {
                    const a = t.texture, o = a.format, l = a.type;
                    if (o !== E && gt.convert(o) !== yt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    const c = l === w && (Z.has("EXT_color_buffer_half_float") || Q.isWebGL2 && Z.has("EXT_color_buffer_float"));
                    if (!(l === x || gt.convert(l) === yt.getParameter(35738) || l === M && (Q.isWebGL2 || Z.has("OES_texture_float") || Z.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    36053 === yt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && yt.readPixels(e, n, i, r, gt.convert(o), gt.convert(l), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
                } finally{
                    const t = null !== T ? tt.get(T).__webglFramebuffer : null;
                    K.bindFramebuffer(36160, t);
                }
            }
        }, this.copyFramebufferToTexture = function(t, e, n = 0) {
            const i = Math.pow(2, -n), r = Math.floor(e.image.width * i), s = Math.floor(e.image.height * i);
            let a = gt.convert(e.format);
            Q.isWebGL2 && (6407 === a && (a = 32849), 6408 === a && (a = 32856)), et.setTexture2D(e, 0), yt.copyTexImage2D(3553, n, a, t.x, t.y, r, s, 0), K.unbindTexture();
        }, this.copyTextureToTexture = function(t, e, n, i = 0) {
            const r = e.image.width, s = e.image.height, a = gt.convert(n.format), o = gt.convert(n.type);
            et.setTexture2D(n, 0), yt.pixelStorei(37440, n.flipY), yt.pixelStorei(37441, n.premultiplyAlpha), yt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? yt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? yt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : yt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image), 0 === i && n.generateMipmaps && yt.generateMipmap(3553), K.unbindTexture();
        }, this.copyTextureToTexture3D = function(t, e, n, i, r = 0) {
            if (v.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            const s = t.max.x - t.min.x + 1, a = t.max.y - t.min.y + 1, o = t.max.z - t.min.z + 1, l = gt.convert(i.format), c = gt.convert(i.type);
            let h;
            if (i.isDataTexture3D) et.setTexture3D(i, 0), h = 32879;
            else {
                if (!i.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                et.setTexture2DArray(i, 0), h = 35866;
            }
            yt.pixelStorei(37440, i.flipY), yt.pixelStorei(37441, i.premultiplyAlpha), yt.pixelStorei(3317, i.unpackAlignment);
            const u = yt.getParameter(3314), d = yt.getParameter(32878), p = yt.getParameter(3316), m = yt.getParameter(3315), f = yt.getParameter(32877), g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
            yt.pixelStorei(3314, g.width), yt.pixelStorei(32878, g.height), yt.pixelStorei(3316, t.min.x), yt.pixelStorei(3315, t.min.y), yt.pixelStorei(32877, t.min.z), n.isDataTexture || n.isDataTexture3D ? yt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), yt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, g.data)) : yt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g), yt.pixelStorei(3314, u), yt.pixelStorei(32878, d), yt.pixelStorei(3316, p), yt.pixelStorei(3315, m), yt.pixelStorei(32877, f), 0 === r && i.generateMipmaps && yt.generateMipmap(h), K.unbindTexture();
        }, this.initTexture = function(t) {
            et.setTexture2D(t, 0), K.unbindTexture();
        }, this.resetState = function() {
            b = 0, S = 0, T = null, K.reset(), vt.reset();
        }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    class Ms extends bs {
    }
    Ms.prototype.isWebGL1Renderer = !0;
    class ws {
        constructor(t, e = 25e-5){
            this.name = "", this.color = new Qe(t), this.density = e;
        }
        clone() {
            return new ws(this.color, this.density);
        }
        toJSON() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            };
        }
    }
    ws.prototype.isFogExp2 = !0;
    class Ss {
        constructor(t, e = 1, n = 1e3){
            this.name = "", this.color = new Qe(t), this.near = e, this.far = n;
        }
        clone() {
            return new Ss(this.color, this.near, this.far);
        }
        toJSON() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            };
        }
    }
    Ss.prototype.isFog = !0;
    class Ts extends Pe {
        constructor(){
            super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        copy(t, e) {
            return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
        }
    }
    Ts.prototype.isScene = !0;
    class Es {
        constructor(t, e){
            this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = et, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0, this.uuid = ct();
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setUsage(t) {
            return this.usage = t, this;
        }
        copy(t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
        }
        copyAt(t, e, n) {
            t *= this.stride, n *= e.stride;
            for(let i = 0, r = this.stride; i < r; i++)this.array[t + i] = e.array[n + i];
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        clone(t) {
            void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ct()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
            return n.setUsage(this.usage), n;
        }
        onUpload(t) {
            return this.onUploadCallback = t, this;
        }
        toJSON(t) {
            return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ct()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            };
        }
    }
    Es.prototype.isInterleavedBuffer = !0;
    const As = new Rt;
    class Ls {
        constructor(t, e, n, i = !1){
            this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i;
        }
        get count() {
            return this.data.count;
        }
        get array() {
            return this.data.array;
        }
        set needsUpdate(t) {
            this.data.needsUpdate = t;
        }
        applyMatrix4(t) {
            for(let e = 0, n = this.data.count; e < n; e++)As.x = this.getX(e), As.y = this.getY(e), As.z = this.getZ(e), As.applyMatrix4(t), this.setXYZ(e, As.x, As.y, As.z);
            return this;
        }
        applyNormalMatrix(t) {
            for(let e = 0, n = this.count; e < n; e++)As.x = this.getX(e), As.y = this.getY(e), As.z = this.getZ(e), As.applyNormalMatrix(t), this.setXYZ(e, As.x, As.y, As.z);
            return this;
        }
        transformDirection(t) {
            for(let e = 0, n = this.count; e < n; e++)As.x = this.getX(e), As.y = this.getY(e), As.z = this.getZ(e), As.transformDirection(t), this.setXYZ(e, As.x, As.y, As.z);
            return this;
        }
        setX(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this;
        }
        setY(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this;
        }
        setZ(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this;
        }
        setW(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this;
        }
        getX(t) {
            return this.data.array[t * this.data.stride + this.offset];
        }
        getY(t) {
            return this.data.array[t * this.data.stride + this.offset + 1];
        }
        getZ(t) {
            return this.data.array[t * this.data.stride + this.offset + 2];
        }
        getW(t) {
            return this.data.array[t * this.data.stride + this.offset + 3];
        }
        setXY(t, e, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
        }
        setXYZ(t, e, n, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
        }
        setXYZW(t, e, n, i, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this;
        }
        clone(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for(let e = 0; e < this.count; e++){
                    const n = e * this.data.stride + this.offset;
                    for(let e = 0; e < this.itemSize; e++)t.push(this.data.array[n + e]);
                }
                return new en(new this.array.constructor(t), this.itemSize, this.normalized);
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Ls(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
        }
        toJSON(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for(let e = 0; e < this.count; e++){
                    const n = e * this.data.stride + this.offset;
                    for(let e = 0; e < this.itemSize; e++)t.push(this.data.array[n + e]);
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: t,
                    normalized: this.normalized
                };
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            };
        }
    }
    Ls.prototype.isInterleavedBufferAttribute = !0;
    class Rs extends We {
        constructor(t){
            super(), this.type = "SpriteMaterial", this.color = new Qe(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this;
        }
    }
    let Cs;
    Rs.prototype.isSpriteMaterial = !0;
    const Ps = new Rt, Ds = new Rt, Is = new Rt, Ns = new vt, Bs = new vt, zs = new ae, Fs = new Rt, Os = new Rt, Hs = new Rt, Us = new vt, Gs = new vt, ks = new vt;
    class Vs extends Pe {
        constructor(t){
            if (super(), this.type = "Sprite", void 0 === Cs) {
                Cs = new wn;
                const t = new Float32Array([
                    -0.5,
                    -0.5,
                    0,
                    0,
                    0,
                    .5,
                    -0.5,
                    0,
                    1,
                    0,
                    .5,
                    .5,
                    0,
                    1,
                    1,
                    -0.5,
                    .5,
                    0,
                    0,
                    1
                ]), e = new Es(t, 5);
                Cs.setIndex([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]), Cs.setAttribute("position", new Ls(e, 3, 0, !1)), Cs.setAttribute("uv", new Ls(e, 2, 3, !1));
            }
            this.geometry = Cs, this.material = void 0 !== t ? t : new Rs, this.center = new vt(.5, .5);
        }
        raycast(t, e) {
            null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ds.setFromMatrixScale(this.matrixWorld), zs.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Is.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Ds.multiplyScalar(-Is.z);
            const n = this.material.rotation;
            let i, r;
            0 !== n && (r = Math.cos(n), i = Math.sin(n));
            const s = this.center;
            Ws(Fs.set(-0.5, -0.5, 0), Is, s, Ds, i, r), Ws(Os.set(.5, -0.5, 0), Is, s, Ds, i, r), Ws(Hs.set(.5, .5, 0), Is, s, Ds, i, r), Us.set(0, 0), Gs.set(1, 0), ks.set(1, 1);
            let a = t.ray.intersectTriangle(Fs, Os, Hs, !1, Ps);
            if (null === a && (Ws(Os.set(-0.5, .5, 0), Is, s, Ds, i, r), Gs.set(0, 1), a = t.ray.intersectTriangle(Fs, Hs, Os, !1, Ps), null === a)) return;
            const o = t.ray.origin.distanceTo(Ps);
            o < t.near || o > t.far || e.push({
                distance: o,
                point: Ps.clone(),
                uv: ke.getUV(Ps, Fs, Os, Hs, Us, Gs, ks, new vt),
                face: null,
                object: this
            });
        }
        copy(t) {
            return super.copy(t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this;
        }
    }
    function Ws(t, e, n, i, r, s) {
        Ns.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (Bs.x = s * Ns.x - r * Ns.y, Bs.y = r * Ns.x + s * Ns.y) : Bs.copy(Ns), t.copy(e), t.x += Bs.x, t.y += Bs.y, t.applyMatrix4(zs);
    }
    Vs.prototype.isSprite = !0;
    const js = new Rt, qs = new Rt;
    class Xs extends Pe {
        constructor(){
            super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                },
                isLOD: {
                    value: !0
                }
            }), this.autoUpdate = !0;
        }
        copy(t) {
            super.copy(t, !1);
            const e = t.levels;
            for(let t = 0, n = e.length; t < n; t++){
                const n = e[t];
                this.addLevel(n.object.clone(), n.distance);
            }
            return this.autoUpdate = t.autoUpdate, this;
        }
        addLevel(t, e = 0) {
            e = Math.abs(e);
            const n = this.levels;
            let i;
            for(i = 0; i < n.length && !(e < n[i].distance); i++);
            return n.splice(i, 0, {
                distance: e,
                object: t
            }), this.add(t), this;
        }
        getCurrentLevel() {
            return this._currentLevel;
        }
        getObjectForDistance(t) {
            const e = this.levels;
            if (e.length > 0) {
                let n, i;
                for(n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
                return e[n - 1].object;
            }
            return null;
        }
        raycast(t, e) {
            if (this.levels.length > 0) {
                js.setFromMatrixPosition(this.matrixWorld);
                const n = t.ray.origin.distanceTo(js);
                this.getObjectForDistance(n).raycast(t, e);
            }
        }
        update(t) {
            const e = this.levels;
            if (e.length > 1) {
                js.setFromMatrixPosition(t.matrixWorld), qs.setFromMatrixPosition(this.matrixWorld);
                const n = js.distanceTo(qs) / t.zoom;
                let i, r;
                for(e[0].object.visible = !0, i = 1, r = e.length; i < r && n >= e[i].distance; i++)e[i - 1].object.visible = !1, e[i].object.visible = !0;
                for(this._currentLevel = i - 1; i < r; i++)e[i].object.visible = !1;
            }
        }
        toJSON(t) {
            const e = super.toJSON(t);
            !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
            const n = this.levels;
            for(let t = 0, i = n.length; t < i; t++){
                const i = n[t];
                e.object.levels.push({
                    object: i.object.uuid,
                    distance: i.distance
                });
            }
            return e;
        }
    }
    const Ys = new Rt, Js = new St, Zs = new St, Qs = new Rt, Ks = new ae;
    class $s extends Gn {
        constructor(t, e){
            super(t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ae, this.bindMatrixInverse = new ae;
        }
        copy(t) {
            return super.copy(t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this;
        }
        bind(t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
            this.skeleton.pose();
        }
        normalizeSkinWeights() {
            const t = new St, e = this.geometry.attributes.skinWeight;
            for(let n = 0, i = e.count; n < i; n++){
                t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.w = e.getW(n);
                const i = 1 / t.manhattanLength();
                i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
            }
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
        boneTransform(t, e) {
            const n = this.skeleton, i = this.geometry;
            Js.fromBufferAttribute(i.attributes.skinIndex, t), Zs.fromBufferAttribute(i.attributes.skinWeight, t), Ys.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
            for(let t = 0; t < 4; t++){
                const i = Zs.getComponent(t);
                if (0 !== i) {
                    const r = Js.getComponent(t);
                    Ks.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(Qs.copy(Ys).applyMatrix4(Ks), i);
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse);
        }
    }
    $s.prototype.isSkinnedMesh = !0;
    class ta extends Pe {
        constructor(){
            super(), this.type = "Bone";
        }
    }
    ta.prototype.isBone = !0;
    class ea extends Mt {
        constructor(t = null, e = 1, n = 1, i, r, s, a, o, l = 1003, c = 1003, h, u){
            super(null, s, a, o, l, c, i, r, h, u), this.image = {
                data: t,
                width: e,
                height: n
            }, this.magFilter = l, this.minFilter = c, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
        }
    }
    ea.prototype.isDataTexture = !0;
    const na = new ae, ia = new ae;
    class ra {
        constructor(t = [], e = []){
            this.uuid = ct(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
        }
        init() {
            const t = this.bones, e = this.boneInverses;
            if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
            else if (t.length !== e.length) {
                console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
                for(let t = 0, e = this.bones.length; t < e; t++)this.boneInverses.push(new ae);
            }
        }
        calculateInverses() {
            this.boneInverses.length = 0;
            for(let t = 0, e = this.bones.length; t < e; t++){
                const e = new ae;
                this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e);
            }
        }
        pose() {
            for(let t = 0, e = this.bones.length; t < e; t++){
                const e = this.bones[t];
                e && e.matrixWorld.copy(this.boneInverses[t]).invert();
            }
            for(let t = 0, e = this.bones.length; t < e; t++){
                const e = this.bones[t];
                e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
            }
        }
        update() {
            const t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
            for(let i = 0, r = t.length; i < r; i++){
                const r = t[i] ? t[i].matrixWorld : ia;
                na.multiplyMatrices(r, e[i]), na.toArray(n, 16 * i);
            }
            null !== i && (i.needsUpdate = !0);
        }
        clone() {
            return new ra(this.bones, this.boneInverses);
        }
        computeBoneTexture() {
            let t = Math.sqrt(4 * this.bones.length);
            t = mt(t), t = Math.max(t, 4);
            const e = new Float32Array(t * t * 4);
            e.set(this.boneMatrices);
            const n = new ea(e, t, t, E, M);
            return this.boneMatrices = e, this.boneTexture = n, this.boneTextureSize = t, this;
        }
        getBoneByName(t) {
            for(let e = 0, n = this.bones.length; e < n; e++){
                const n = this.bones[e];
                if (n.name === t) return n;
            }
        }
        dispose() {
            null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
        }
        fromJSON(t, e) {
            this.uuid = t.uuid;
            for(let n = 0, i = t.bones.length; n < i; n++){
                const i = t.bones[n];
                let r = e[i];
                void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new ta), this.bones.push(r), this.boneInverses.push((new ae).fromArray(t.boneInverses[n]));
            }
            return this.init(), this;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "Skeleton",
                    generator: "Skeleton.toJSON"
                },
                bones: [],
                boneInverses: []
            };
            t.uuid = this.uuid;
            const e = this.bones, n = this.boneInverses;
            for(let i = 0, r = e.length; i < r; i++){
                const r = e[i];
                t.bones.push(r.uuid);
                const s = n[i];
                t.boneInverses.push(s.toArray());
            }
            return t;
        }
    }
    const sa = new ae, aa = new ae, oa = [], la = new Gn;
    class ca extends Gn {
        constructor(t, e, n){
            super(t, e), this.instanceMatrix = new en(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
        }
        copy(t) {
            return super.copy(t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this;
        }
        getColorAt(t, e) {
            e.fromArray(this.instanceColor.array, 3 * t);
        }
        getMatrixAt(t, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t);
        }
        raycast(t, e) {
            const n = this.matrixWorld, i = this.count;
            if (la.geometry = this.geometry, la.material = this.material, void 0 !== la.material) for(let r = 0; r < i; r++){
                this.getMatrixAt(r, sa), aa.multiplyMatrices(n, sa), la.matrixWorld = aa, la.raycast(t, oa);
                for(let t = 0, n = oa.length; t < n; t++){
                    const n = oa[t];
                    n.instanceId = r, n.object = this, e.push(n);
                }
                oa.length = 0;
            }
        }
        setColorAt(t, e) {
            null === this.instanceColor && (this.instanceColor = new en(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t);
        }
        setMatrixAt(t, e) {
            e.toArray(this.instanceMatrix.array, 16 * t);
        }
        updateMorphTargets() {}
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    ca.prototype.isInstancedMesh = !0;
    class ha extends We {
        constructor(t){
            super(), this.type = "LineBasicMaterial", this.color = new Qe(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.morphTargets = t.morphTargets, this;
        }
    }
    ha.prototype.isLineBasicMaterial = !0;
    const ua = new Rt, da = new Rt, pa = new ae, ma = new se, fa = new Qt;
    class ga extends Pe {
        constructor(t = new wn, e = new ha){
            super(), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t) {
            return super.copy(t), this.material = t.material, this.geometry = t.geometry, this;
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                if (null === t.index) {
                    const e = t.attributes.position, n = [
                        0
                    ];
                    for(let t = 1, i = e.count; t < i; t++)ua.fromBufferAttribute(e, t - 1), da.fromBufferAttribute(e, t), n[t] = n[t - 1], n[t] += ua.distanceTo(da);
                    t.setAttribute("lineDistance", new un(n, 1));
                } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            } else t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this;
        }
        raycast(t, e) {
            const n = this.geometry, i = this.matrixWorld, r = t.params.Line.threshold, s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(), fa.copy(n.boundingSphere), fa.applyMatrix4(i), fa.radius += r, !1 === t.ray.intersectsSphere(fa)) return;
            pa.copy(i).invert(), ma.copy(t.ray).applyMatrix4(pa);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = new Rt, c = new Rt, h = new Rt, u = new Rt, d = this.isLineSegments ? 2 : 1;
            if (n.isBufferGeometry) {
                const i = n.index, r = n.attributes.position;
                if (null !== i) for(let n = Math.max(0, s.start), a = Math.min(i.count, s.start + s.count) - 1; n < a; n += d){
                    const s = i.getX(n), a = i.getX(n + 1);
                    l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, a);
                    if (ma.distanceSqToSegment(l, c, u, h) > o) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const d = t.ray.origin.distanceTo(u);
                    d < t.near || d > t.far || e.push({
                        distance: d,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n,
                        face: null,
                        faceIndex: null,
                        object: this
                    });
                }
                else for(let n = Math.max(0, s.start), i = Math.min(r.count, s.start + s.count) - 1; n < i; n += d){
                    l.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1);
                    if (ma.distanceSqToSegment(l, c, u, h) > o) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const i = t.ray.origin.distanceTo(u);
                    i < t.near || i > t.far || e.push({
                        distance: i,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: n,
                        face: null,
                        faceIndex: null,
                        object: this
                    });
                }
            } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes, n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for(let e = 0, n = t.length; e < n; e++){
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e;
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
    }
    ga.prototype.isLine = !0;
    const va = new Rt, ya = new Rt;
    class xa extends ga {
        constructor(t, e){
            super(t, e), this.type = "LineSegments";
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                if (null === t.index) {
                    const e = t.attributes.position, n = [];
                    for(let t = 0, i = e.count; t < i; t += 2)va.fromBufferAttribute(e, t), ya.fromBufferAttribute(e, t + 1), n[t] = 0 === t ? 0 : n[t - 1], n[t + 1] = n[t] + va.distanceTo(ya);
                    t.setAttribute("lineDistance", new un(n, 1));
                } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            } else t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            return this;
        }
    }
    xa.prototype.isLineSegments = !0;
    class _a extends ga {
        constructor(t, e){
            super(t, e), this.type = "LineLoop";
        }
    }
    _a.prototype.isLineLoop = !0;
    class ba extends We {
        constructor(t){
            super(), this.type = "PointsMaterial", this.color = new Qe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this;
        }
    }
    ba.prototype.isPointsMaterial = !0;
    const Ma = new ae, wa = new se, Sa = new Qt, Ta = new Rt;
    class Ea extends Pe {
        constructor(t = new wn, e = new ba){
            super(), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t) {
            return super.copy(t), this.material = t.material, this.geometry = t.geometry, this;
        }
        raycast(t, e) {
            const n = this.geometry, i = this.matrixWorld, r = t.params.Points.threshold, s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(), Sa.copy(n.boundingSphere), Sa.applyMatrix4(i), Sa.radius += r, !1 === t.ray.intersectsSphere(Sa)) return;
            Ma.copy(i).invert(), wa.copy(t.ray).applyMatrix4(Ma);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a;
            if (n.isBufferGeometry) {
                const r = n.index, a = n.attributes.position;
                if (null !== r) for(let n = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); n < l; n++){
                    const s = r.getX(n);
                    Ta.fromBufferAttribute(a, s), Aa(Ta, s, o, i, t, e, this);
                }
                else for(let n = Math.max(0, s.start), r = Math.min(a.count, s.start + s.count); n < r; n++)Ta.fromBufferAttribute(a, n), Aa(Ta, n, o, i, t, e, this);
            } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes, n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for(let e = 0, n = t.length; e < n; e++){
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e;
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
            }
        }
    }
    function Aa(t, e, n, i, r, s, a) {
        const o = wa.distanceSqToPoint(t);
        if (o < n) {
            const n = new Rt;
            wa.closestPointToPoint(t, n), n.applyMatrix4(i);
            const l = r.ray.origin.distanceTo(n);
            if (l < r.near || l > r.far) return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(o),
                point: n,
                index: e,
                face: null,
                object: a
            });
        }
    }
    Ea.prototype.isPoints = !0;
    class La extends Mt {
        constructor(t, e, n, i, r, s, a, o, l){
            super(t, e, n, i, r, s, a, o, l), this.format = void 0 !== a ? a : T, this.minFilter = void 0 !== s ? s : g, this.magFilter = void 0 !== r ? r : g, this.generateMipmaps = !1;
            const c = this;
            "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(function e() {
                c.needsUpdate = !0, t.requestVideoFrameCallback(e);
            });
        }
        clone() {
            return new this.constructor(this.image).copy(this);
        }
        update() {
            const t = this.image;
            !1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
        }
    }
    La.prototype.isVideoTexture = !0;
    class Ra extends Mt {
        constructor(t, e, n, i, r, s, a, o, l, c, h, u){
            super(null, s, a, o, l, c, i, r, h, u), this.image = {
                width: e,
                height: n
            }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    Ra.prototype.isCompressedTexture = !0;
    class Ca extends Mt {
        constructor(t, e, n, i, r, s, a, o, l){
            super(t, e, n, i, r, s, a, o, l), this.needsUpdate = !0;
        }
    }
    Ca.prototype.isCanvasTexture = !0;
    class Pa extends Mt {
        constructor(t, e, n, i, r, s, a, o, l, c){
            if ((c = void 0 !== c ? c : A) !== A && c !== L) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === n && c === A && (n = _), void 0 === n && c === L && (n = S), super(null, i, r, s, a, o, c, n, l), this.image = {
                width: t,
                height: e
            }, this.magFilter = void 0 !== a ? a : p, this.minFilter = void 0 !== o ? o : p, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    Pa.prototype.isDepthTexture = !0;
    class Da extends wn {
        constructor(t = 1, e = 8, n = 0, i = 2 * Math.PI){
            super(), this.type = "CircleGeometry", this.parameters = {
                radius: t,
                segments: e,
                thetaStart: n,
                thetaLength: i
            }, e = Math.max(3, e);
            const r = [], s = [], a = [], o = [], l = new Rt, c = new vt;
            s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);
            for(let r = 0, h = 3; r <= e; r++, h += 3){
                const u = n + r / e * i;
                l.x = t * Math.cos(u), l.y = t * Math.sin(u), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[h] / t + 1) / 2, c.y = (s[h + 1] / t + 1) / 2, o.push(c.x, c.y);
            }
            for(let t = 1; t <= e; t++)r.push(t, t + 1, 0);
            this.setIndex(r), this.setAttribute("position", new un(s, 3)), this.setAttribute("normal", new un(a, 3)), this.setAttribute("uv", new un(o, 2));
        }
        static fromJSON(t) {
            return new Da(t.radius, t.segments, t.thetaStart, t.thetaLength);
        }
    }
    class Ia extends wn {
        constructor(t = 1, e = 1, n = 1, i = 8, r = 1, s = !1, a = 0, o = 2 * Math.PI){
            super(), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: n,
                radialSegments: i,
                heightSegments: r,
                openEnded: s,
                thetaStart: a,
                thetaLength: o
            };
            const l = this;
            i = Math.floor(i), r = Math.floor(r);
            const c = [], h = [], u = [], d = [];
            let p = 0;
            const m = [], f = n / 2;
            let g = 0;
            function v(n) {
                const r = p, s = new vt, m = new Rt;
                let v = 0;
                const y = !0 === n ? t : e, x = !0 === n ? 1 : -1;
                for(let t = 1; t <= i; t++)h.push(0, f * x, 0), u.push(0, x, 0), d.push(.5, .5), p++;
                const _ = p;
                for(let t = 0; t <= i; t++){
                    const e = t / i * o + a, n = Math.cos(e), r = Math.sin(e);
                    m.x = y * r, m.y = f * x, m.z = y * n, h.push(m.x, m.y, m.z), u.push(0, x, 0), s.x = .5 * n + .5, s.y = .5 * r * x + .5, d.push(s.x, s.y), p++;
                }
                for(let t = 0; t < i; t++){
                    const e = r + t, i = _ + t;
                    !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), v += 3;
                }
                l.addGroup(g, v, !0 === n ? 1 : 2), g += v;
            }
            !function() {
                const s = new Rt, v = new Rt;
                let y = 0;
                const x = (e - t) / n;
                for(let l = 0; l <= r; l++){
                    const c = [], g = l / r, y = g * (e - t) + t;
                    for(let t = 0; t <= i; t++){
                        const e = t / i, r = e * o + a, l = Math.sin(r), m = Math.cos(r);
                        v.x = y * l, v.y = -g * n + f, v.z = y * m, h.push(v.x, v.y, v.z), s.set(l, x, m).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), c.push(p++);
                    }
                    m.push(c);
                }
                for(let t = 0; t < i; t++)for(let e = 0; e < r; e++){
                    const n = m[e][t], i = m[e + 1][t], r = m[e + 1][t + 1], s = m[e][t + 1];
                    c.push(n, i, s), c.push(i, r, s), y += 6;
                }
                l.addGroup(g, y, 0), g += y;
            }(), !1 === s && (t > 0 && v(!0), e > 0 && v(!1)), this.setIndex(c), this.setAttribute("position", new un(h, 3)), this.setAttribute("normal", new un(u, 3)), this.setAttribute("uv", new un(d, 2));
        }
        static fromJSON(t) {
            return new Ia(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
        }
    }
    class Na extends Ia {
        constructor(t = 1, e = 1, n = 8, i = 1, r = !1, s = 0, a = 2 * Math.PI){
            super(0, t, e, n, i, r, s, a), this.type = "ConeGeometry", this.parameters = {
                radius: t,
                height: e,
                radialSegments: n,
                heightSegments: i,
                openEnded: r,
                thetaStart: s,
                thetaLength: a
            };
        }
        static fromJSON(t) {
            return new Na(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
        }
    }
    class Ba extends wn {
        constructor(t, e, n = 1, i = 0){
            super(), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: t,
                indices: e,
                radius: n,
                detail: i
            };
            const r = [], s = [];
            function a(t, e, n, i) {
                const r = i + 1, s = [];
                for(let i = 0; i <= r; i++){
                    s[i] = [];
                    const a = t.clone().lerp(n, i / r), o = e.clone().lerp(n, i / r), l = r - i;
                    for(let t = 0; t <= l; t++)s[i][t] = 0 === t && i === r ? a : a.clone().lerp(o, t / l);
                }
                for(let t = 0; t < r; t++)for(let e = 0; e < 2 * (r - t) - 1; e++){
                    const n = Math.floor(e / 2);
                    e % 2 == 0 ? (o(s[t][n + 1]), o(s[t + 1][n]), o(s[t][n])) : (o(s[t][n + 1]), o(s[t + 1][n + 1]), o(s[t + 1][n]));
                }
            }
            function o(t) {
                r.push(t.x, t.y, t.z);
            }
            function l(e, n) {
                const i = 3 * e;
                n.x = t[i + 0], n.y = t[i + 1], n.z = t[i + 2];
            }
            function c(t, e, n, i) {
                i < 0 && 1 === t.x && (s[e] = t.x - 1), 0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + .5);
            }
            function h(t) {
                return Math.atan2(t.z, -t.x);
            }
            !function(t) {
                const n = new Rt, i = new Rt, r = new Rt;
                for(let s = 0; s < e.length; s += 3)l(e[s + 0], n), l(e[s + 1], i), l(e[s + 2], r), a(n, i, r, t);
            }(i), function(t) {
                const e = new Rt;
                for(let n = 0; n < r.length; n += 3)e.x = r[n + 0], e.y = r[n + 1], e.z = r[n + 2], e.normalize().multiplyScalar(t), r[n + 0] = e.x, r[n + 1] = e.y, r[n + 2] = e.z;
            }(n), function() {
                const t = new Rt;
                for(let n = 0; n < r.length; n += 3){
                    t.x = r[n + 0], t.y = r[n + 1], t.z = r[n + 2];
                    const i = h(t) / 2 / Math.PI + .5, a = (e = t, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
                    s.push(i, 1 - a);
                }
                var e;
                (function() {
                    const t = new Rt, e = new Rt, n = new Rt, i = new Rt, a = new vt, o = new vt, l = new vt;
                    for(let u = 0, d = 0; u < r.length; u += 9, d += 6){
                        t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), n.set(r[u + 6], r[u + 7], r[u + 8]), a.set(s[d + 0], s[d + 1]), o.set(s[d + 2], s[d + 3]), l.set(s[d + 4], s[d + 5]), i.copy(t).add(e).add(n).divideScalar(3);
                        const p = h(i);
                        c(a, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
                    }
                })(), function() {
                    for(let t = 0; t < s.length; t += 6){
                        const e = s[t + 0], n = s[t + 2], i = s[t + 4], r = Math.max(e, n, i), a = Math.min(e, n, i);
                        r > .9 && a < .1 && (e < .2 && (s[t + 0] += 1), n < .2 && (s[t + 2] += 1), i < .2 && (s[t + 4] += 1));
                    }
                }();
            }(), this.setAttribute("position", new un(r, 3)), this.setAttribute("normal", new un(r.slice(), 3)), this.setAttribute("uv", new un(s, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals();
        }
        static fromJSON(t) {
            return new Ba(t.vertices, t.indices, t.radius, t.details);
        }
    }
    class za extends Ba {
        constructor(t = 1, e = 0){
            const n = (1 + Math.sqrt(5)) / 2, i = 1 / n;
            super([
                -1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                1,
                1,
                1,
                0,
                -i,
                -n,
                0,
                -i,
                n,
                0,
                i,
                -n,
                0,
                i,
                n,
                -i,
                -n,
                0,
                -i,
                n,
                0,
                i,
                -n,
                0,
                i,
                n,
                0,
                -n,
                0,
                -i,
                n,
                0,
                -i,
                -n,
                0,
                i,
                n,
                0,
                i
            ], [
                3,
                11,
                7,
                3,
                7,
                15,
                3,
                15,
                13,
                7,
                19,
                17,
                7,
                17,
                6,
                7,
                6,
                15,
                17,
                4,
                8,
                17,
                8,
                10,
                17,
                10,
                6,
                8,
                0,
                16,
                8,
                16,
                2,
                8,
                2,
                10,
                0,
                12,
                1,
                0,
                1,
                18,
                0,
                18,
                16,
                6,
                10,
                2,
                6,
                2,
                13,
                6,
                13,
                15,
                2,
                16,
                18,
                2,
                18,
                3,
                2,
                3,
                13,
                18,
                1,
                9,
                18,
                9,
                11,
                18,
                11,
                3,
                4,
                14,
                12,
                4,
                12,
                0,
                4,
                0,
                8,
                11,
                9,
                5,
                11,
                5,
                19,
                11,
                19,
                7,
                19,
                5,
                14,
                19,
                14,
                4,
                19,
                4,
                17,
                1,
                12,
                14,
                1,
                14,
                5,
                1,
                5,
                9
            ], t, e), this.type = "DodecahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new za(t.radius, t.detail);
        }
    }
    const Fa = new Rt, Oa = new Rt, Ha = new Rt, Ua = new ke;
    class Ga extends wn {
        constructor(t, e){
            if (super(), this.type = "EdgesGeometry", this.parameters = {
                thresholdAngle: e
            }, e = void 0 !== e ? e : 1, !0 === t.isGeometry) return void console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            const n = Math.pow(10, 4), i = Math.cos(ot * e), r = t.getIndex(), s = t.getAttribute("position"), a = r ? r.count : s.count, o = [
                0,
                0,
                0
            ], l = [
                "a",
                "b",
                "c"
            ], c = new Array(3), h = {}, u = [];
            for(let t = 0; t < a; t += 3){
                r ? (o[0] = r.getX(t), o[1] = r.getX(t + 1), o[2] = r.getX(t + 2)) : (o[0] = t, o[1] = t + 1, o[2] = t + 2);
                const { a: e, b: a, c: d } = Ua;
                if (e.fromBufferAttribute(s, o[0]), a.fromBufferAttribute(s, o[1]), d.fromBufferAttribute(s, o[2]), Ua.getNormal(Ha), c[0] = `${Math.round(e.x * n)},${Math.round(e.y * n)},${Math.round(e.z * n)}`, c[1] = `${Math.round(a.x * n)},${Math.round(a.y * n)},${Math.round(a.z * n)}`, c[2] = `${Math.round(d.x * n)},${Math.round(d.y * n)},${Math.round(d.z * n)}`, c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0]) for(let t = 0; t < 3; t++){
                    const e = (t + 1) % 3, n = c[t], r = c[e], s = Ua[l[t]], a = Ua[l[e]], d = `${n}_${r}`, p = `${r}_${n}`;
                    p in h && h[p] ? (Ha.dot(h[p].normal) <= i && (u.push(s.x, s.y, s.z), u.push(a.x, a.y, a.z)), h[p] = null) : d in h || (h[d] = {
                        index0: o[t],
                        index1: o[e],
                        normal: Ha.clone()
                    });
                }
            }
            for(const t in h)if (h[t]) {
                const { index0: e, index1: n } = h[t];
                Fa.fromBufferAttribute(s, e), Oa.fromBufferAttribute(s, n), u.push(Fa.x, Fa.y, Fa.z), u.push(Oa.x, Oa.y, Oa.z);
            }
            this.setAttribute("position", new un(u, 3));
        }
    }
    class ka {
        constructor(){
            this.type = "Curve", this.arcLengthDivisions = 200;
        }
        getPoint() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null;
        }
        getPointAt(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getPoint(n, e);
        }
        getPoints(t = 5) {
            const e = [];
            for(let n = 0; n <= t; n++)e.push(this.getPoint(n / t));
            return e;
        }
        getSpacedPoints(t = 5) {
            const e = [];
            for(let n = 0; n <= t; n++)e.push(this.getPointAt(n / t));
            return e;
        }
        getLength() {
            const t = this.getLengths();
            return t[t.length - 1];
        }
        getLengths(t = this.arcLengthDivisions) {
            if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            const e = [];
            let n, i = this.getPoint(0), r = 0;
            e.push(0);
            for(let s = 1; s <= t; s++)n = this.getPoint(s / t), r += n.distanceTo(i), e.push(r), i = n;
            return this.cacheArcLengths = e, e;
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.getLengths();
        }
        getUtoTmapping(t, e) {
            const n = this.getLengths();
            let i = 0;
            const r = n.length;
            let s;
            s = e || t * n[r - 1];
            let a, o = 0, l = r - 1;
            for(; o <= l;)if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;
            else {
                if (!(a > 0)) {
                    l = i;
                    break;
                }
                l = i - 1;
            }
            if (i = l, n[i] === s) return i / (r - 1);
            const c = n[i];
            return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
        }
        getTangent(t, e) {
            const n = 1e-4;
            let i = t - n, r = t + n;
            i < 0 && (i = 0), r > 1 && (r = 1);
            const s = this.getPoint(i), a = this.getPoint(r), o = e || (s.isVector2 ? new vt : new Rt);
            return o.copy(a).sub(s).normalize(), o;
        }
        getTangentAt(t, e) {
            const n = this.getUtoTmapping(t);
            return this.getTangent(n, e);
        }
        computeFrenetFrames(t, e) {
            const n = new Rt, i = [], r = [], s = [], a = new Rt, o = new ae;
            for(let e = 0; e <= t; e++){
                const n = e / t;
                i[e] = this.getTangentAt(n, new Rt), i[e].normalize();
            }
            r[0] = new Rt, s[0] = new Rt;
            let l = Number.MAX_VALUE;
            const c = Math.abs(i[0].x), h = Math.abs(i[0].y), u = Math.abs(i[0].z);
            c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
            for(let e = 1; e <= t; e++){
                if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(i[e - 1], i[e]), a.length() > Number.EPSILON) {
                    a.normalize();
                    const t = Math.acos(ht(i[e - 1].dot(i[e]), -1, 1));
                    r[e].applyMatrix4(o.makeRotationAxis(a, t));
                }
                s[e].crossVectors(i[e], r[e]);
            }
            if (!0 === e) {
                let e = Math.acos(ht(r[0].dot(r[t]), -1, 1));
                e /= t, i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
                for(let n = 1; n <= t; n++)r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n]);
            }
            return {
                tangents: i,
                normals: r,
                binormals: s
            };
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
        }
        fromJSON(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this;
        }
    }
    class Va extends ka {
        constructor(t = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0){
            super(), this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
        }
        getPoint(t, e) {
            const n = e || new vt, i = 2 * Math.PI;
            let r = this.aEndAngle - this.aStartAngle;
            const s = Math.abs(r) < Number.EPSILON;
            for(; r < 0;)r += i;
            for(; r > i;)r -= i;
            r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
            const a = this.aStartAngle + t * r;
            let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                const t = Math.cos(this.aRotation), e = Math.sin(this.aRotation), n = o - this.aX, i = l - this.aY;
                o = n * t - i * e + this.aX, l = n * e + i * t + this.aY;
            }
            return n.set(o, l);
        }
        copy(t) {
            return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
        }
    }
    Va.prototype.isEllipseCurve = !0;
    class Wa extends Va {
        constructor(t, e, n, i, r, s){
            super(t, e, n, n, i, r, s), this.type = "ArcCurve";
        }
    }
    function ja() {
        let t = 0, e = 0, n = 0, i = 0;
        function r(r, s, a, o) {
            t = r, e = a, n = -3 * r + 3 * s - 2 * a - o, i = 2 * r - 2 * s + a + o;
        }
        return {
            initCatmullRom: function(t, e, n, i, s) {
                r(e, n, s * (n - t), s * (i - e));
            },
            initNonuniformCatmullRom: function(t, e, n, i, s, a, o) {
                let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a, c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
                l *= a, c *= a, r(e, n, l, c);
            },
            calc: function(r) {
                const s = r * r;
                return t + e * r + n * s + i * (s * r);
            }
        };
    }
    Wa.prototype.isArcCurve = !0;
    const qa = new Rt, Xa = new ja, Ya = new ja, Ja = new ja;
    class Za extends ka {
        constructor(t = [], e = !1, n = "centripetal", i = .5){
            super(), this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i;
        }
        getPoint(t, e = new Rt) {
            const n = e, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * t;
            let a, o, l = Math.floor(s), c = s - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (qa.subVectors(i[0], i[1]).add(i[0]), a = qa);
            const h = i[l % r], u = i[(l + 1) % r];
            if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (qa.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = qa), "centripetal" === this.curveType || "chordal" === this.curveType) {
                const t = "chordal" === this.curveType ? .5 : .25;
                let e = Math.pow(a.distanceToSquared(h), t), n = Math.pow(h.distanceToSquared(u), t), i = Math.pow(u.distanceToSquared(o), t);
                n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), Xa.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i), Ya.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i), Ja.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i);
            } else "catmullrom" === this.curveType && (Xa.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), Ya.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), Ja.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return n.set(Xa.calc(c), Ya.calc(c), Ja.calc(c)), n;
        }
        copy(t) {
            super.copy(t), this.points = [];
            for(let e = 0, n = t.points.length; e < n; e++){
                const n = t.points[e];
                this.points.push(n.clone());
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for(let e = 0, n = this.points.length; e < n; e++){
                const n = this.points[e];
                t.points.push(n.toArray());
            }
            return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.points = [];
            for(let e = 0, n = t.points.length; e < n; e++){
                const n = t.points[e];
                this.points.push((new Rt).fromArray(n));
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
        }
    }
    function Qa(t, e, n, i, r) {
        const s = .5 * (i - e), a = .5 * (r - n), o = t * t;
        return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n;
    }
    function Ka(t, e, n, i) {
        return function(t, e) {
            const n = 1 - t;
            return n * n * e;
        }(t, e) + function(t, e) {
            return 2 * (1 - t) * t * e;
        }(t, n) + function(t, e) {
            return t * t * e;
        }(t, i);
    }
    function $a(t, e, n, i, r) {
        return function(t, e) {
            const n = 1 - t;
            return n * n * n * e;
        }(t, e) + function(t, e) {
            const n = 1 - t;
            return 3 * n * n * t * e;
        }(t, n) + function(t, e) {
            return 3 * (1 - t) * t * t * e;
        }(t, i) + function(t, e) {
            return t * t * t * e;
        }(t, r);
    }
    Za.prototype.isCatmullRomCurve3 = !0;
    class to extends ka {
        constructor(t = new vt, e = new vt, n = new vt, i = new vt){
            super(), this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
        }
        getPoint(t, e = new vt) {
            const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return n.set($a(t, i.x, r.x, s.x, a.x), $a(t, i.y, r.y, s.y, a.y)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
        }
    }
    to.prototype.isCubicBezierCurve = !0;
    class eo extends ka {
        constructor(t = new Rt, e = new Rt, n = new Rt, i = new Rt){
            super(), this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
        }
        getPoint(t, e = new Rt) {
            const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return n.set($a(t, i.x, r.x, s.x, a.x), $a(t, i.y, r.y, s.y, a.y), $a(t, i.z, r.z, s.z, a.z)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
        }
    }
    eo.prototype.isCubicBezierCurve3 = !0;
    class no extends ka {
        constructor(t = new vt, e = new vt){
            super(), this.type = "LineCurve", this.v1 = t, this.v2 = e;
        }
        getPoint(t, e = new vt) {
            const n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
        }
        getPointAt(t, e) {
            return this.getPoint(t, e);
        }
        getTangent(t, e) {
            const n = e || new vt;
            return n.copy(this.v2).sub(this.v1).normalize(), n;
        }
        copy(t) {
            return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    no.prototype.isLineCurve = !0;
    class io extends ka {
        constructor(t = new Rt, e = new Rt){
            super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = t, this.v2 = e;
        }
        getPoint(t, e = new Rt) {
            const n = e;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
        }
        getPointAt(t, e) {
            return this.getPoint(t, e);
        }
        copy(t) {
            return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    class ro extends ka {
        constructor(t = new vt, e = new vt, n = new vt){
            super(), this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
        }
        getPoint(t, e = new vt) {
            const n = e, i = this.v0, r = this.v1, s = this.v2;
            return n.set(Ka(t, i.x, r.x, s.x), Ka(t, i.y, r.y, s.y)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    ro.prototype.isQuadraticBezierCurve = !0;
    class so extends ka {
        constructor(t = new Rt, e = new Rt, n = new Rt){
            super(), this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
        }
        getPoint(t, e = new Rt) {
            const n = e, i = this.v0, r = this.v1, s = this.v2;
            return n.set(Ka(t, i.x, r.x, s.x), Ka(t, i.y, r.y, s.y), Ka(t, i.z, r.z, s.z)), n;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    so.prototype.isQuadraticBezierCurve3 = !0;
    class ao extends ka {
        constructor(t = []){
            super(), this.type = "SplineCurve", this.points = t;
        }
        getPoint(t, e = new vt) {
            const n = e, i = this.points, r = (i.length - 1) * t, s = Math.floor(r), a = r - s, o = i[0 === s ? s : s - 1], l = i[s], c = i[s > i.length - 2 ? i.length - 1 : s + 1], h = i[s > i.length - 3 ? i.length - 1 : s + 2];
            return n.set(Qa(a, o.x, l.x, c.x, h.x), Qa(a, o.y, l.y, c.y, h.y)), n;
        }
        copy(t) {
            super.copy(t), this.points = [];
            for(let e = 0, n = t.points.length; e < n; e++){
                const n = t.points[e];
                this.points.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for(let e = 0, n = this.points.length; e < n; e++){
                const n = this.points[e];
                t.points.push(n.toArray());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.points = [];
            for(let e = 0, n = t.points.length; e < n; e++){
                const n = t.points[e];
                this.points.push((new vt).fromArray(n));
            }
            return this;
        }
    }
    ao.prototype.isSplineCurve = !0;
    var oo = Object.freeze({
        __proto__: null,
        ArcCurve: Wa,
        CatmullRomCurve3: Za,
        CubicBezierCurve: to,
        CubicBezierCurve3: eo,
        EllipseCurve: Va,
        LineCurve: no,
        LineCurve3: io,
        QuadraticBezierCurve: ro,
        QuadraticBezierCurve3: so,
        SplineCurve: ao
    });
    const lo = function(t, e, n = 2) {
        const i = e && e.length, r = i ? e[0] * n : t.length;
        let s = co(t, 0, r, n, !0);
        const a = [];
        if (!s || s.next === s.prev) return a;
        let o, l, c, h, u, d, p;
        if (i && (s = function(t, e, n, i) {
            const r = [];
            let s, a, o, l, c;
            for(s = 0, a = e.length; s < a; s++)o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t.length, c = co(t, o, l, i, !1), c === c.next && (c.steiner = !0), r.push(bo(c));
            for(r.sort(vo), s = 0; s < r.length; s++)yo(r[s], n), n = ho(n, n.next);
            return n;
        }(t, e, s, n)), t.length > 80 * n) {
            o = c = t[0], l = h = t[1];
            for(let e = n; e < r; e += n)u = t[e], d = t[e + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
            p = Math.max(c - o, h - l), p = 0 !== p ? 1 / p : 0;
        }
        return uo(s, a, n, o, l, p), a;
    };
    function co(t, e, n, i, r) {
        let s, a;
        if (r === function(t, e, n, i) {
            let r = 0;
            for(let s = e, a = n - i; s < n; s += i)r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s;
            return r;
        }(t, e, n, i) > 0) for(s = e; s < n; s += i)a = Po(s, t[s], t[s + 1], a);
        else for(s = n - i; s >= e; s -= i)a = Po(s, t[s], t[s + 1], a);
        return a && To(a, a.next) && (Do(a), a = a.next), a;
    }
    function ho(t, e) {
        if (!t) return t;
        e || (e = t);
        let n, i = t;
        do if (n = !1, i.steiner || !To(i, i.next) && 0 !== So(i.prev, i, i.next)) i = i.next;
        else {
            if (Do(i), i = e = i.prev, i === i.next) break;
            n = !0;
        }
        while (n || i !== e);
        return e;
    }
    function uo(t, e, n, i, r, s, a) {
        if (!t) return;
        !a && s && function(t, e, n, i) {
            let r = t;
            do null === r.z && (r.z = _o(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
            while (r !== t);
            r.prevZ.nextZ = null, r.prevZ = null, function(t) {
                let e, n, i, r, s, a, o, l, c = 1;
                do {
                    for(n = t, t = null, s = null, a = 0; n;){
                        for(a++, i = n, o = 0, e = 0; e < c && (o++, i = i.nextZ, i); e++);
                        for(l = c; o > 0 || l > 0 && i;)0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
                        n = i;
                    }
                    s.nextZ = null, c *= 2;
                }while (a > 1);
            }(r);
        }(t, i, r, s);
        let o, l, c = t;
        for(; t.prev !== t.next;)if (o = t.prev, l = t.next, s ? mo(t, i, r, s) : po(t)) e.push(o.i / n), e.push(t.i / n), e.push(l.i / n), Do(t), t = l.next, c = l.next;
        else if ((t = l) === c) {
            a ? 1 === a ? uo(t = fo(ho(t), e, n), e, n, i, r, s, 2) : 2 === a && go(t, e, n, i, r, s) : uo(ho(t), e, n, i, r, s, 1);
            break;
        }
    }
    function po(t) {
        const e = t.prev, n = t, i = t.next;
        if (So(e, n, i) >= 0) return !1;
        let r = t.next.next;
        for(; r !== t.prev;){
            if (Mo(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && So(r.prev, r, r.next) >= 0) return !1;
            r = r.next;
        }
        return !0;
    }
    function mo(t, e, n, i) {
        const r = t.prev, s = t, a = t.next;
        if (So(r, s, a) >= 0) return !1;
        const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x, l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y, c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x, h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y, u = _o(o, l, e, n, i), d = _o(c, h, e, n, i);
        let p = t.prevZ, m = t.nextZ;
        for(; p && p.z >= u && m && m.z <= d;){
            if (p !== t.prev && p !== t.next && Mo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && So(p.prev, p, p.next) >= 0) return !1;
            if (p = p.prevZ, m !== t.prev && m !== t.next && Mo(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && So(m.prev, m, m.next) >= 0) return !1;
            m = m.nextZ;
        }
        for(; p && p.z >= u;){
            if (p !== t.prev && p !== t.next && Mo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && So(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ;
        }
        for(; m && m.z <= d;){
            if (m !== t.prev && m !== t.next && Mo(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && So(m.prev, m, m.next) >= 0) return !1;
            m = m.nextZ;
        }
        return !0;
    }
    function fo(t, e, n) {
        let i = t;
        do {
            const r = i.prev, s = i.next.next;
            !To(r, s) && Eo(r, i, i.next, s) && Ro(r, s) && Ro(s, r) && (e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), Do(i), Do(i.next), i = t = s), i = i.next;
        }while (i !== t);
        return ho(i);
    }
    function go(t, e, n, i, r, s) {
        let a = t;
        do {
            let t = a.next.next;
            for(; t !== a.prev;){
                if (a.i !== t.i && wo(a, t)) {
                    let o = Co(a, t);
                    return a = ho(a, a.next), o = ho(o, o.next), uo(a, e, n, i, r, s), void uo(o, e, n, i, r, s);
                }
                t = t.next;
            }
            a = a.next;
        }while (a !== t);
    }
    function vo(t, e) {
        return t.x - e.x;
    }
    function yo(t, e) {
        if (e = function(t, e) {
            let n = e;
            const i = t.x, r = t.y;
            let s, a = -1 / 0;
            do {
                if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                    const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                    if (t <= i && t > a) {
                        if (a = t, t === i) {
                            if (r === n.y) return n;
                            if (r === n.next.y) return n.next;
                        }
                        s = n.x < n.next.x ? n : n.next;
                    }
                }
                n = n.next;
            }while (n !== e);
            if (!s) return null;
            if (i === a) return s;
            const o = s, l = s.x, c = s.y;
            let h, u = 1 / 0;
            n = s;
            do i >= n.x && n.x >= l && i !== n.x && Mo(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), Ro(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && xo(s, n))) && (s = n, u = h)), n = n.next;
            while (n !== o);
            return s;
        }(t, e)) {
            const n = Co(e, t);
            ho(e, e.next), ho(n, n.next);
        }
    }
    function xo(t, e) {
        return So(t.prev, t, e.prev) < 0 && So(e.next, t, t.next) < 0;
    }
    function _o(t, e, n, i, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
    }
    function bo(t) {
        let e = t, n = t;
        do (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
        while (e !== t);
        return n;
    }
    function Mo(t, e, n, i, r, s, a, o) {
        return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0;
    }
    function wo(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
            let n = t;
            do {
                if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Eo(n, n.next, t, e)) return !0;
                n = n.next;
            }while (n !== t);
            return !1;
        }(t, e) && (Ro(t, e) && Ro(e, t) && function(t, e) {
            let n = t, i = !1;
            const r = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
            do n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
            while (n !== t);
            return i;
        }(t, e) && (So(t.prev, t, e.prev) || So(t, e.prev, e)) || To(t, e) && So(t.prev, t, t.next) > 0 && So(e.prev, e, e.next) > 0);
    }
    function So(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
    }
    function To(t, e) {
        return t.x === e.x && t.y === e.y;
    }
    function Eo(t, e, n, i) {
        const r = Lo(So(t, e, n)), s = Lo(So(t, e, i)), a = Lo(So(n, i, t)), o = Lo(So(n, i, e));
        return r !== s && a !== o || !(0 !== r || !Ao(t, n, e)) || !(0 !== s || !Ao(t, i, e)) || !(0 !== a || !Ao(n, t, i)) || !(0 !== o || !Ao(n, e, i));
    }
    function Ao(t, e, n) {
        return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
    }
    function Lo(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
    }
    function Ro(t, e) {
        return So(t.prev, t, t.next) < 0 ? So(t, e, t.next) >= 0 && So(t, t.prev, e) >= 0 : So(t, e, t.prev) < 0 || So(t, t.next, e) < 0;
    }
    function Co(t, e) {
        const n = new Io(t.i, t.x, t.y), i = new Io(e.i, e.x, e.y), r = t.next, s = e.prev;
        return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
    }
    function Po(t, e, n, i) {
        const r = new Io(t, e, n);
        return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
    }
    function Do(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function Io(t, e, n) {
        this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    class No {
        static area(t) {
            const e = t.length;
            let n = 0;
            for(let i = e - 1, r = 0; r < e; i = r++)n += t[i].x * t[r].y - t[r].x * t[i].y;
            return .5 * n;
        }
        static isClockWise(t) {
            return No.area(t) < 0;
        }
        static triangulateShape(t, e) {
            const n = [], i = [], r = [];
            Bo(t), zo(n, t);
            let s = t.length;
            e.forEach(Bo);
            for(let t = 0; t < e.length; t++)i.push(s), s += e[t].length, zo(n, e[t]);
            const a = lo(n, i);
            for(let t = 0; t < a.length; t += 3)r.push(a.slice(t, t + 3));
            return r;
        }
    }
    function Bo(t) {
        const e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop();
    }
    function zo(t, e) {
        for(let n = 0; n < e.length; n++)t.push(e[n].x), t.push(e[n].y);
    }
    class Fo extends wn {
        constructor(t, e){
            super(), this.type = "ExtrudeGeometry", this.parameters = {
                shapes: t,
                options: e
            }, t = Array.isArray(t) ? t : [
                t
            ];
            const n = this, i = [], r = [];
            for(let e = 0, n = t.length; e < n; e++)s(t[e]);
            function s(t) {
                const s = [], a = void 0 !== e.curveSegments ? e.curveSegments : 12, o = void 0 !== e.steps ? e.steps : 1;
                let l = void 0 !== e.depth ? e.depth : 100, c = void 0 === e.bevelEnabled || e.bevelEnabled, h = void 0 !== e.bevelThickness ? e.bevelThickness : 6, u = void 0 !== e.bevelSize ? e.bevelSize : h - 2, d = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
                const m = e.extrudePath, f = void 0 !== e.UVGenerator ? e.UVGenerator : Oo;
                void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = e.amount);
                let g, v, y, x, _, b = !1;
                m && (g = m.getSpacedPoints(o), b = !0, c = !1, v = m.computeFrenetFrames(o, !1), y = new Rt, x = new Rt, _ = new Rt), c || (p = 0, h = 0, u = 0, d = 0);
                const M = t.extractPoints(a);
                let w = M.shape;
                const S = M.holes;
                if (!No.isClockWise(w)) {
                    w = w.reverse();
                    for(let t = 0, e = S.length; t < e; t++){
                        const e = S[t];
                        No.isClockWise(e) && (S[t] = e.reverse());
                    }
                }
                const T = No.triangulateShape(w, S), E = w;
                for(let t = 0, e = S.length; t < e; t++){
                    const e = S[t];
                    w = w.concat(e);
                }
                function A(t, e, n) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t);
                }
                const L = w.length, R = T.length;
                function C(t, e, n) {
                    let i, r, s;
                    const a = t.x - e.x, o = t.y - e.y, l = n.x - t.x, c = n.y - t.y, h = a * a + o * o, u = a * c - o * l;
                    if (Math.abs(u) > Number.EPSILON) {
                        const u = Math.sqrt(h), d = Math.sqrt(l * l + c * c), p = e.x - o / u, m = e.y + a / u, f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (a * c - o * l);
                        i = p + a * f - t.x, r = m + o * f - t.y;
                        const g = i * i + r * r;
                        if (g <= 2) return new vt(i, r);
                        s = Math.sqrt(g / 2);
                    } else {
                        let t = !1;
                        a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0), t ? (i = -o, r = a, s = Math.sqrt(h)) : (i = a, r = o, s = Math.sqrt(h / 2));
                    }
                    return new vt(i / s, r / s);
                }
                const P = [];
                for(let t = 0, e = E.length, n = e - 1, i = t + 1; t < e; t++, n++, i++)n === e && (n = 0), i === e && (i = 0), P[t] = C(E[t], E[n], E[i]);
                const D = [];
                let I, N = P.concat();
                for(let t = 0, e = S.length; t < e; t++){
                    const e = S[t];
                    I = [];
                    for(let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++)i === n && (i = 0), r === n && (r = 0), I[t] = C(e[t], e[i], e[r]);
                    D.push(I), N = N.concat(I);
                }
                for(let t = 0; t < p; t++){
                    const e = t / p, n = h * Math.cos(e * Math.PI / 2), i = u * Math.sin(e * Math.PI / 2) + d;
                    for(let t = 0, e = E.length; t < e; t++){
                        const e = A(E[t], P[t], i);
                        F(e.x, e.y, -n);
                    }
                    for(let t = 0, e = S.length; t < e; t++){
                        const e = S[t];
                        I = D[t];
                        for(let t = 0, r = e.length; t < r; t++){
                            const r = A(e[t], I[t], i);
                            F(r.x, r.y, -n);
                        }
                    }
                }
                const B = u + d;
                for(let t = 0; t < L; t++){
                    const e = c ? A(w[t], N[t], B) : w[t];
                    b ? (x.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g[0]).add(x).add(y), F(_.x, _.y, _.z)) : F(e.x, e.y, 0);
                }
                for(let t = 1; t <= o; t++)for(let e = 0; e < L; e++){
                    const n = c ? A(w[e], N[e], B) : w[e];
                    b ? (x.copy(v.normals[t]).multiplyScalar(n.x), y.copy(v.binormals[t]).multiplyScalar(n.y), _.copy(g[t]).add(x).add(y), F(_.x, _.y, _.z)) : F(n.x, n.y, l / o * t);
                }
                for(let t = p - 1; t >= 0; t--){
                    const e = t / p, n = h * Math.cos(e * Math.PI / 2), i = u * Math.sin(e * Math.PI / 2) + d;
                    for(let t = 0, e = E.length; t < e; t++){
                        const e = A(E[t], P[t], i);
                        F(e.x, e.y, l + n);
                    }
                    for(let t = 0, e = S.length; t < e; t++){
                        const e = S[t];
                        I = D[t];
                        for(let t = 0, r = e.length; t < r; t++){
                            const r = A(e[t], I[t], i);
                            b ? F(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : F(r.x, r.y, l + n);
                        }
                    }
                }
                function z(t, e) {
                    let n = t.length;
                    for(; --n >= 0;){
                        const i = n;
                        let r = n - 1;
                        r < 0 && (r = t.length - 1);
                        for(let t = 0, n = o + 2 * p; t < n; t++){
                            const n = L * t, s = L * (t + 1);
                            H(e + i + n, e + r + n, e + r + s, e + i + s);
                        }
                    }
                }
                function F(t, e, n) {
                    s.push(t), s.push(e), s.push(n);
                }
                function O(t, e, r) {
                    U(t), U(e), U(r);
                    const s = i.length / 3, a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
                    G(a[0]), G(a[1]), G(a[2]);
                }
                function H(t, e, r, s) {
                    U(t), U(e), U(s), U(e), U(r), U(s);
                    const a = i.length / 3, o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                    G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]);
                }
                function U(t) {
                    i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]);
                }
                function G(t) {
                    r.push(t.x), r.push(t.y);
                }
                !function() {
                    const t = i.length / 3;
                    if (c) {
                        let t = 0, e = L * t;
                        for(let t = 0; t < R; t++){
                            const n = T[t];
                            O(n[2] + e, n[1] + e, n[0] + e);
                        }
                        t = o + 2 * p, e = L * t;
                        for(let t = 0; t < R; t++){
                            const n = T[t];
                            O(n[0] + e, n[1] + e, n[2] + e);
                        }
                    } else {
                        for(let t = 0; t < R; t++){
                            const e = T[t];
                            O(e[2], e[1], e[0]);
                        }
                        for(let t = 0; t < R; t++){
                            const e = T[t];
                            O(e[0] + L * o, e[1] + L * o, e[2] + L * o);
                        }
                    }
                    n.addGroup(t, i.length / 3 - t, 0);
                }(), function() {
                    const t = i.length / 3;
                    let e = 0;
                    z(E, e), e += E.length;
                    for(let t = 0, n = S.length; t < n; t++){
                        const n = S[t];
                        z(n, e), e += n.length;
                    }
                    n.addGroup(t, i.length / 3 - t, 1);
                }();
            }
            this.setAttribute("position", new un(i, 3)), this.setAttribute("uv", new un(r, 2)), this.computeVertexNormals();
        }
        toJSON() {
            const t = super.toJSON();
            return function(t, e, n) {
                if (n.shapes = [], Array.isArray(t)) for(let e = 0, i = t.length; e < i; e++){
                    const i = t[e];
                    n.shapes.push(i.uuid);
                }
                else n.shapes.push(t.uuid);
                void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
                return n;
            }(this.parameters.shapes, this.parameters.options, t);
        }
        static fromJSON(t, e) {
            const n = [];
            for(let i = 0, r = t.shapes.length; i < r; i++){
                const r = e[t.shapes[i]];
                n.push(r);
            }
            const i = t.options.extrudePath;
            return void 0 !== i && (t.options.extrudePath = (new oo[i.type]).fromJSON(i)), new Fo(n, t.options);
        }
    }
    const Oo = {
        generateTopUV: function(t, e, n, i, r) {
            const s = e[3 * n], a = e[3 * n + 1], o = e[3 * i], l = e[3 * i + 1], c = e[3 * r], h = e[3 * r + 1];
            return [
                new vt(s, a),
                new vt(o, l),
                new vt(c, h)
            ];
        },
        generateSideWallUV: function(t, e, n, i, r, s) {
            const a = e[3 * n], o = e[3 * n + 1], l = e[3 * n + 2], c = e[3 * i], h = e[3 * i + 1], u = e[3 * i + 2], d = e[3 * r], p = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], v = e[3 * s + 2];
            return Math.abs(o - h) < Math.abs(a - c) ? [
                new vt(a, 1 - l),
                new vt(c, 1 - u),
                new vt(d, 1 - m),
                new vt(f, 1 - v)
            ] : [
                new vt(o, 1 - l),
                new vt(h, 1 - u),
                new vt(p, 1 - m),
                new vt(g, 1 - v)
            ];
        }
    };
    class Ho extends Ba {
        constructor(t = 1, e = 0){
            const n = (1 + Math.sqrt(5)) / 2;
            super([
                -1,
                n,
                0,
                1,
                n,
                0,
                -1,
                -n,
                0,
                1,
                -n,
                0,
                0,
                -1,
                n,
                0,
                1,
                n,
                0,
                -1,
                -n,
                0,
                1,
                -n,
                n,
                0,
                -1,
                n,
                0,
                1,
                -n,
                0,
                -1,
                -n,
                0,
                1
            ], [
                0,
                11,
                5,
                0,
                5,
                1,
                0,
                1,
                7,
                0,
                7,
                10,
                0,
                10,
                11,
                1,
                5,
                9,
                5,
                11,
                4,
                11,
                10,
                2,
                10,
                7,
                6,
                7,
                1,
                8,
                3,
                9,
                4,
                3,
                4,
                2,
                3,
                2,
                6,
                3,
                6,
                8,
                3,
                8,
                9,
                4,
                9,
                5,
                2,
                4,
                11,
                6,
                2,
                10,
                8,
                6,
                7,
                9,
                8,
                1
            ], t, e), this.type = "IcosahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new Ho(t.radius, t.detail);
        }
    }
    class Uo extends wn {
        constructor(t, e = 12, n = 0, i = 2 * Math.PI){
            super(), this.type = "LatheGeometry", this.parameters = {
                points: t,
                segments: e,
                phiStart: n,
                phiLength: i
            }, e = Math.floor(e), i = ht(i, 0, 2 * Math.PI);
            const r = [], s = [], a = [], o = 1 / e, l = new Rt, c = new vt;
            for(let r = 0; r <= e; r++){
                const h = n + r * o * i, u = Math.sin(h), d = Math.cos(h);
                for(let n = 0; n <= t.length - 1; n++)l.x = t[n].x * u, l.y = t[n].y, l.z = t[n].x * d, s.push(l.x, l.y, l.z), c.x = r / e, c.y = n / (t.length - 1), a.push(c.x, c.y);
            }
            for(let n = 0; n < e; n++)for(let e = 0; e < t.length - 1; e++){
                const i = e + n * t.length, s = i, a = i + t.length, o = i + t.length + 1, l = i + 1;
                r.push(s, a, l), r.push(a, o, l);
            }
            if (this.setIndex(r), this.setAttribute("position", new un(s, 3)), this.setAttribute("uv", new un(a, 2)), this.computeVertexNormals(), i === 2 * Math.PI) {
                const n = this.attributes.normal.array, i = new Rt, r = new Rt, s = new Rt, a = e * t.length * 3;
                for(let e = 0, o = 0; e < t.length; e++, o += 3)i.x = n[o + 0], i.y = n[o + 1], i.z = n[o + 2], r.x = n[a + o + 0], r.y = n[a + o + 1], r.z = n[a + o + 2], s.addVectors(i, r).normalize(), n[o + 0] = n[a + o + 0] = s.x, n[o + 1] = n[a + o + 1] = s.y, n[o + 2] = n[a + o + 2] = s.z;
            }
        }
        static fromJSON(t) {
            return new Uo(t.points, t.segments, t.phiStart, t.phiLength);
        }
    }
    class Go extends Ba {
        constructor(t = 1, e = 0){
            super([
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1
            ], [
                0,
                2,
                4,
                0,
                4,
                3,
                0,
                3,
                5,
                0,
                5,
                2,
                1,
                2,
                5,
                1,
                5,
                3,
                1,
                3,
                4,
                1,
                4,
                2
            ], t, e), this.type = "OctahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new Go(t.radius, t.detail);
        }
    }
    class ko extends wn {
        constructor(t, e, n){
            super(), this.type = "ParametricGeometry", this.parameters = {
                func: t,
                slices: e,
                stacks: n
            };
            const i = [], r = [], s = [], a = [], o = 1e-5, l = new Rt, c = new Rt, h = new Rt, u = new Rt, d = new Rt;
            t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
            const p = e + 1;
            for(let i = 0; i <= n; i++){
                const p = i / n;
                for(let n = 0; n <= e; n++){
                    const i = n / e;
                    t(i, p, c), r.push(c.x, c.y, c.z), i - o >= 0 ? (t(i - o, p, h), u.subVectors(c, h)) : (t(i + o, p, h), u.subVectors(h, c)), p - o >= 0 ? (t(i, p - o, h), d.subVectors(c, h)) : (t(i, p + o, h), d.subVectors(h, c)), l.crossVectors(u, d).normalize(), s.push(l.x, l.y, l.z), a.push(i, p);
                }
            }
            for(let t = 0; t < n; t++)for(let n = 0; n < e; n++){
                const e = t * p + n, r = t * p + n + 1, s = (t + 1) * p + n + 1, a = (t + 1) * p + n;
                i.push(e, r, a), i.push(r, s, a);
            }
            this.setIndex(i), this.setAttribute("position", new un(r, 3)), this.setAttribute("normal", new un(s, 3)), this.setAttribute("uv", new un(a, 2));
        }
    }
    class Vo extends wn {
        constructor(t = .5, e = 1, n = 8, i = 1, r = 0, s = 2 * Math.PI){
            super(), this.type = "RingGeometry", this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: n,
                phiSegments: i,
                thetaStart: r,
                thetaLength: s
            }, n = Math.max(3, n);
            const a = [], o = [], l = [], c = [];
            let h = t;
            const u = (e - t) / (i = Math.max(1, i)), d = new Rt, p = new vt;
            for(let t = 0; t <= i; t++){
                for(let t = 0; t <= n; t++){
                    const i = r + t / n * s;
                    d.x = h * Math.cos(i), d.y = h * Math.sin(i), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, c.push(p.x, p.y);
                }
                h += u;
            }
            for(let t = 0; t < i; t++){
                const e = t * (n + 1);
                for(let t = 0; t < n; t++){
                    const i = t + e, r = i, s = i + n + 1, o = i + n + 2, l = i + 1;
                    a.push(r, s, l), a.push(s, o, l);
                }
            }
            this.setIndex(a), this.setAttribute("position", new un(o, 3)), this.setAttribute("normal", new un(l, 3)), this.setAttribute("uv", new un(c, 2));
        }
        static fromJSON(t) {
            return new Vo(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
        }
    }
    class Wo extends wn {
        constructor(t, e = 12){
            super(), this.type = "ShapeGeometry", this.parameters = {
                shapes: t,
                curveSegments: e
            };
            const n = [], i = [], r = [], s = [];
            let a = 0, o = 0;
            if (!1 === Array.isArray(t)) l(t);
            else for(let e = 0; e < t.length; e++)l(t[e]), this.addGroup(a, o, e), a += o, o = 0;
            function l(t) {
                const a = i.length / 3, l = t.extractPoints(e);
                let c = l.shape;
                const h = l.holes;
                !1 === No.isClockWise(c) && (c = c.reverse());
                for(let t = 0, e = h.length; t < e; t++){
                    const e = h[t];
                    !0 === No.isClockWise(e) && (h[t] = e.reverse());
                }
                const u = No.triangulateShape(c, h);
                for(let t = 0, e = h.length; t < e; t++){
                    const e = h[t];
                    c = c.concat(e);
                }
                for(let t = 0, e = c.length; t < e; t++){
                    const e = c[t];
                    i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
                }
                for(let t = 0, e = u.length; t < e; t++){
                    const e = u[t], i = e[0] + a, r = e[1] + a, s = e[2] + a;
                    n.push(i, r, s), o += 3;
                }
            }
            this.setIndex(n), this.setAttribute("position", new un(i, 3)), this.setAttribute("normal", new un(r, 3)), this.setAttribute("uv", new un(s, 2));
        }
        toJSON() {
            const t = super.toJSON();
            return function(t, e) {
                if (e.shapes = [], Array.isArray(t)) for(let n = 0, i = t.length; n < i; n++){
                    const i = t[n];
                    e.shapes.push(i.uuid);
                }
                else e.shapes.push(t.uuid);
                return e;
            }(this.parameters.shapes, t);
        }
        static fromJSON(t, e) {
            const n = [];
            for(let i = 0, r = t.shapes.length; i < r; i++){
                const r = e[t.shapes[i]];
                n.push(r);
            }
            return new Wo(n, t.curveSegments);
        }
    }
    class jo extends wn {
        constructor(t = 1, e = 8, n = 6, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI){
            super(), this.type = "SphereGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: n,
                phiStart: i,
                phiLength: r,
                thetaStart: s,
                thetaLength: a
            }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
            const o = Math.min(s + a, Math.PI);
            let l = 0;
            const c = [], h = new Rt, u = new Rt, d = [], p = [], m = [], f = [];
            for(let d = 0; d <= n; d++){
                const g = [], v = d / n;
                let y = 0;
                0 == d && 0 == s ? y = .5 / e : d == n && o == Math.PI && (y = -0.5 / e);
                for(let n = 0; n <= e; n++){
                    const o = n / e;
                    h.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a), h.y = t * Math.cos(s + v * a), h.z = t * Math.sin(i + o * r) * Math.sin(s + v * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), m.push(u.x, u.y, u.z), f.push(o + y, 1 - v), g.push(l++);
                }
                c.push(g);
            }
            for(let t = 0; t < n; t++)for(let i = 0; i < e; i++){
                const e = c[t][i + 1], r = c[t][i], a = c[t + 1][i], l = c[t + 1][i + 1];
                (0 !== t || s > 0) && d.push(e, r, l), (t !== n - 1 || o < Math.PI) && d.push(r, a, l);
            }
            this.setIndex(d), this.setAttribute("position", new un(p, 3)), this.setAttribute("normal", new un(m, 3)), this.setAttribute("uv", new un(f, 2));
        }
        static fromJSON(t) {
            return new jo(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
        }
    }
    class qo extends Ba {
        constructor(t = 1, e = 0){
            super([
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                1,
                -1,
                -1
            ], [
                2,
                1,
                0,
                0,
                3,
                2,
                1,
                3,
                0,
                2,
                3,
                1
            ], t, e), this.type = "TetrahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new qo(t.radius, t.detail);
        }
    }
    class Xo extends Fo {
        constructor(t, e = {}){
            const n = e.font;
            if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new wn;
            const i = n.generateShapes(t, e.size);
            e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), super(i, e), this.type = "TextGeometry";
        }
    }
    class Yo extends wn {
        constructor(t = 1, e = .4, n = 8, i = 6, r = 2 * Math.PI){
            super(), this.type = "TorusGeometry", this.parameters = {
                radius: t,
                tube: e,
                radialSegments: n,
                tubularSegments: i,
                arc: r
            }, n = Math.floor(n), i = Math.floor(i);
            const s = [], a = [], o = [], l = [], c = new Rt, h = new Rt, u = new Rt;
            for(let s = 0; s <= n; s++)for(let d = 0; d <= i; d++){
                const p = d / i * r, m = s / n * Math.PI * 2;
                h.x = (t + e * Math.cos(m)) * Math.cos(p), h.y = (t + e * Math.cos(m)) * Math.sin(p), h.z = e * Math.sin(m), a.push(h.x, h.y, h.z), c.x = t * Math.cos(p), c.y = t * Math.sin(p), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(d / i), l.push(s / n);
            }
            for(let t = 1; t <= n; t++)for(let e = 1; e <= i; e++){
                const n = (i + 1) * t + e - 1, r = (i + 1) * (t - 1) + e - 1, a = (i + 1) * (t - 1) + e, o = (i + 1) * t + e;
                s.push(n, r, o), s.push(r, a, o);
            }
            this.setIndex(s), this.setAttribute("position", new un(a, 3)), this.setAttribute("normal", new un(o, 3)), this.setAttribute("uv", new un(l, 2));
        }
        static fromJSON(t) {
            return new Yo(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
        }
    }
    class Jo extends wn {
        constructor(t = 1, e = .4, n = 64, i = 8, r = 2, s = 3){
            super(), this.type = "TorusKnotGeometry", this.parameters = {
                radius: t,
                tube: e,
                tubularSegments: n,
                radialSegments: i,
                p: r,
                q: s
            }, n = Math.floor(n), i = Math.floor(i);
            const a = [], o = [], l = [], c = [], h = new Rt, u = new Rt, d = new Rt, p = new Rt, m = new Rt, f = new Rt, g = new Rt;
            for(let a = 0; a <= n; ++a){
                const y = a / n * r * Math.PI * 2;
                v(y, r, s, t, d), v(y + .01, r, s, t, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
                for(let t = 0; t <= i; ++t){
                    const r = t / i * Math.PI * 2, s = -e * Math.cos(r), p = e * Math.sin(r);
                    h.x = d.x + (s * g.x + p * m.x), h.y = d.y + (s * g.y + p * m.y), h.z = d.z + (s * g.z + p * m.z), o.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l.push(u.x, u.y, u.z), c.push(a / n), c.push(t / i);
                }
            }
            for(let t = 1; t <= n; t++)for(let e = 1; e <= i; e++){
                const n = (i + 1) * (t - 1) + (e - 1), r = (i + 1) * t + (e - 1), s = (i + 1) * t + e, o = (i + 1) * (t - 1) + e;
                a.push(n, r, o), a.push(r, s, o);
            }
            function v(t, e, n, i, r) {
                const s = Math.cos(t), a = Math.sin(t), o = n / e * t, l = Math.cos(o);
                r.x = i * (2 + l) * .5 * s, r.y = i * (2 + l) * a * .5, r.z = i * Math.sin(o) * .5;
            }
            this.setIndex(a), this.setAttribute("position", new un(o, 3)), this.setAttribute("normal", new un(l, 3)), this.setAttribute("uv", new un(c, 2));
        }
        static fromJSON(t) {
            return new Jo(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
        }
    }
    class Zo extends wn {
        constructor(t, e = 64, n = 1, i = 8, r = !1){
            super(), this.type = "TubeGeometry", this.parameters = {
                path: t,
                tubularSegments: e,
                radius: n,
                radialSegments: i,
                closed: r
            };
            const s = t.computeFrenetFrames(e, r);
            this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
            const a = new Rt, o = new Rt, l = new vt;
            let c = new Rt;
            const h = [], u = [], d = [], p = [];
            function m(r) {
                c = t.getPointAt(r / e, c);
                const l = s.normals[r], d = s.binormals[r];
                for(let t = 0; t <= i; t++){
                    const e = t / i * Math.PI * 2, r = Math.sin(e), s = -Math.cos(e);
                    o.x = s * l.x + r * d.x, o.y = s * l.y + r * d.y, o.z = s * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), a.x = c.x + n * o.x, a.y = c.y + n * o.y, a.z = c.z + n * o.z, h.push(a.x, a.y, a.z);
                }
            }
            !function() {
                for(let t = 0; t < e; t++)m(t);
                m(!1 === r ? e : 0), function() {
                    for(let t = 0; t <= e; t++)for(let n = 0; n <= i; n++)l.x = t / e, l.y = n / i, d.push(l.x, l.y);
                }(), function() {
                    for(let t = 1; t <= e; t++)for(let e = 1; e <= i; e++){
                        const n = (i + 1) * (t - 1) + (e - 1), r = (i + 1) * t + (e - 1), s = (i + 1) * t + e, a = (i + 1) * (t - 1) + e;
                        p.push(n, r, a), p.push(r, s, a);
                    }
                }();
            }(), this.setIndex(p), this.setAttribute("position", new un(h, 3)), this.setAttribute("normal", new un(u, 3)), this.setAttribute("uv", new un(d, 2));
        }
        toJSON() {
            const t = super.toJSON();
            return t.path = this.parameters.path.toJSON(), t;
        }
        static fromJSON(t) {
            return new Zo((new oo[t.path.type]).fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
        }
    }
    class Qo extends wn {
        constructor(t){
            if (super(), this.type = "WireframeGeometry", !0 === t.isGeometry) return void console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
            const e = [], n = [
                0,
                0
            ], i = {}, r = new Rt;
            if (null !== t.index) {
                const s = t.attributes.position, a = t.index;
                let o = t.groups;
                0 === o.length && (o = [
                    {
                        start: 0,
                        count: a.count,
                        materialIndex: 0
                    }
                ]);
                for(let t = 0, e = o.length; t < e; ++t){
                    const e = o[t], r = e.start;
                    for(let t = r, s = r + e.count; t < s; t += 3)for(let e = 0; e < 3; e++){
                        const r = a.getX(t + e), s = a.getX(t + (e + 1) % 3);
                        n[0] = Math.min(r, s), n[1] = Math.max(r, s);
                        const o = n[0] + "," + n[1];
                        void 0 === i[o] && (i[o] = {
                            index1: n[0],
                            index2: n[1]
                        });
                    }
                }
                for(const t in i){
                    const n = i[t];
                    r.fromBufferAttribute(s, n.index1), e.push(r.x, r.y, r.z), r.fromBufferAttribute(s, n.index2), e.push(r.x, r.y, r.z);
                }
            } else {
                const n = t.attributes.position;
                for(let t = 0, i = n.count / 3; t < i; t++)for(let i = 0; i < 3; i++){
                    const s = 3 * t + i;
                    r.fromBufferAttribute(n, s), e.push(r.x, r.y, r.z);
                    const a = 3 * t + (i + 1) % 3;
                    r.fromBufferAttribute(n, a), e.push(r.x, r.y, r.z);
                }
            }
            this.setAttribute("position", new un(e, 3));
        }
    }
    var Ko = Object.freeze({
        __proto__: null,
        BoxGeometry: Vn,
        BoxBufferGeometry: Vn,
        CircleGeometry: Da,
        CircleBufferGeometry: Da,
        ConeGeometry: Na,
        ConeBufferGeometry: Na,
        CylinderGeometry: Ia,
        CylinderBufferGeometry: Ia,
        DodecahedronGeometry: za,
        DodecahedronBufferGeometry: za,
        EdgesGeometry: Ga,
        ExtrudeGeometry: Fo,
        ExtrudeBufferGeometry: Fo,
        IcosahedronGeometry: Ho,
        IcosahedronBufferGeometry: Ho,
        LatheGeometry: Uo,
        LatheBufferGeometry: Uo,
        OctahedronGeometry: Go,
        OctahedronBufferGeometry: Go,
        ParametricGeometry: ko,
        ParametricBufferGeometry: ko,
        PlaneGeometry: ci,
        PlaneBufferGeometry: ci,
        PolyhedronGeometry: Ba,
        PolyhedronBufferGeometry: Ba,
        RingGeometry: Vo,
        RingBufferGeometry: Vo,
        ShapeGeometry: Wo,
        ShapeBufferGeometry: Wo,
        SphereGeometry: jo,
        SphereBufferGeometry: jo,
        TetrahedronGeometry: qo,
        TetrahedronBufferGeometry: qo,
        TextGeometry: Xo,
        TextBufferGeometry: Xo,
        TorusGeometry: Yo,
        TorusBufferGeometry: Yo,
        TorusKnotGeometry: Jo,
        TorusKnotBufferGeometry: Jo,
        TubeGeometry: Zo,
        TubeBufferGeometry: Zo,
        WireframeGeometry: Qo
    });
    class $o extends We {
        constructor(t){
            super(), this.type = "ShadowMaterial", this.color = new Qe(0), this.transparent = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this;
        }
    }
    $o.prototype.isShadowMaterial = !0;
    class tl extends Xn {
        constructor(t){
            super(t), this.type = "RawShaderMaterial";
        }
    }
    tl.prototype.isRawShaderMaterial = !0;
    class el extends We {
        constructor(t){
            super(), this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new Qe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Qe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new vt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: ""
            }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this.vertexTangents = t.vertexTangents, this;
        }
    }
    el.prototype.isMeshStandardMaterial = !0;
    class nl extends el {
        constructor(t){
            super(), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new vt(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", {
                get: function() {
                    return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity);
                },
                set: function(t) {
                    this.reflectivity = ht(2.5 * (t - 1) / (t + 1), 0, 1);
                }
            }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.thickness = .01, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new Qe(1, 1, 1), this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new Qe).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this;
        }
    }
    nl.prototype.isMeshPhysicalMaterial = !0;
    class il extends We {
        constructor(t){
            super(), this.type = "MeshPhongMaterial", this.color = new Qe(16777215), this.specular = new Qe(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Qe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new vt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
        }
    }
    il.prototype.isMeshPhongMaterial = !0;
    class rl extends We {
        constructor(t){
            super(), this.defines = {
                TOON: ""
            }, this.type = "MeshToonMaterial", this.color = new Qe(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Qe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new vt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.morphTargets = !1, this.morphNormals = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
        }
    }
    rl.prototype.isMeshToonMaterial = !0;
    class sl extends We {
        constructor(t){
            super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new vt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
        }
    }
    sl.prototype.isMeshNormalMaterial = !0;
    class al extends We {
        constructor(t){
            super(), this.type = "MeshLambertMaterial", this.color = new Qe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Qe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.morphTargets = !1, this.morphNormals = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
        }
    }
    al.prototype.isMeshLambertMaterial = !0;
    class ol extends We {
        constructor(t){
            super(), this.defines = {
                MATCAP: ""
            }, this.type = "MeshMatcapMaterial", this.color = new Qe(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new vt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                MATCAP: ""
            }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
        }
    }
    ol.prototype.isMeshMatcapMaterial = !0;
    class ll extends ha {
        constructor(t){
            super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
        }
    }
    ll.prototype.isLineDashedMaterial = !0;
    var cl = Object.freeze({
        __proto__: null,
        ShadowMaterial: $o,
        SpriteMaterial: Rs,
        RawShaderMaterial: tl,
        ShaderMaterial: Xn,
        PointsMaterial: ba,
        MeshPhysicalMaterial: nl,
        MeshStandardMaterial: el,
        MeshPhongMaterial: il,
        MeshToonMaterial: rl,
        MeshNormalMaterial: sl,
        MeshLambertMaterial: al,
        MeshDepthMaterial: cs,
        MeshDistanceMaterial: hs,
        MeshBasicMaterial: Ke,
        MeshMatcapMaterial: ol,
        LineDashedMaterial: ll,
        LineBasicMaterial: ha,
        Material: We
    });
    const hl = {
        arraySlice: function(t, e, n) {
            return hl.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
        },
        convertArray: function(t, e, n) {
            return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView);
        },
        getKeyframeOrder: function(t) {
            const e = t.length, n = new Array(e);
            for(let t = 0; t !== e; ++t)n[t] = t;
            return n.sort(function(e, n) {
                return t[e] - t[n];
            }), n;
        },
        sortedArray: function(t, e, n) {
            const i = t.length, r = new t.constructor(i);
            for(let s = 0, a = 0; a !== i; ++s){
                const i = n[s] * e;
                for(let n = 0; n !== e; ++n)r[a++] = t[i + n];
            }
            return r;
        },
        flattenJSON: function(t, e, n, i) {
            let r = 1, s = t[0];
            for(; void 0 !== s && void 0 === s[i];)s = t[r++];
            if (void 0 === s) return;
            let a = s[i];
            if (void 0 !== a) {
                if (Array.isArray(a)) do a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t[r++];
                while (void 0 !== s);
                else if (void 0 !== a.toArray) do a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t[r++];
                while (void 0 !== s);
                else do a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t[r++];
                while (void 0 !== s);
            }
        },
        subclip: function(t, e, n, i, r = 30) {
            const s = t.clone();
            s.name = e;
            const a = [];
            for(let t = 0; t < s.tracks.length; ++t){
                const e = s.tracks[t], o = e.getValueSize(), l = [], c = [];
                for(let t = 0; t < e.times.length; ++t){
                    const s = e.times[t] * r;
                    if (!(s < n || s >= i)) {
                        l.push(e.times[t]);
                        for(let n = 0; n < o; ++n)c.push(e.values[t * o + n]);
                    }
                }
                0 !== l.length && (e.times = hl.convertArray(l, e.times.constructor), e.values = hl.convertArray(c, e.values.constructor), a.push(e));
            }
            s.tracks = a;
            let o = 1 / 0;
            for(let t = 0; t < s.tracks.length; ++t)o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
            for(let t = 0; t < s.tracks.length; ++t)s.tracks[t].shift(-1 * o);
            return s.resetDuration(), s;
        },
        makeClipAdditive: function(t, e = 0, n = t, i = 30) {
            i <= 0 && (i = 30);
            const r = n.tracks.length, s = e / i;
            for(let e = 0; e < r; ++e){
                const i = n.tracks[e], r = i.ValueTypeName;
                if ("bool" === r || "string" === r) continue;
                const a = t.tracks.find(function(t) {
                    return t.name === i.name && t.ValueTypeName === r;
                });
                if (void 0 === a) continue;
                let o = 0;
                const l = i.getValueSize();
                i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
                let c = 0;
                const h = a.getValueSize();
                a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
                const u = i.times.length - 1;
                let d;
                if (s <= i.times[0]) {
                    const t = o, e = l - o;
                    d = hl.arraySlice(i.values, t, e);
                } else if (s >= i.times[u]) {
                    const t = u * l + o, e = t + l - o;
                    d = hl.arraySlice(i.values, t, e);
                } else {
                    const t = i.createInterpolant(), e = o, n = l - o;
                    t.evaluate(s), d = hl.arraySlice(t.resultBuffer, e, n);
                }
                if ("quaternion" === r) (new Lt).fromArray(d).normalize().conjugate().toArray(d);
                const p = a.times.length;
                for(let t = 0; t < p; ++t){
                    const e = t * h + c;
                    if ("quaternion" === r) Lt.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                    else {
                        const t = h - 2 * c;
                        for(let n = 0; n < t; ++n)a.values[e + n] -= d[n];
                    }
                }
            }
            return t.blendMode = q, t;
        }
    };
    class ul {
        constructor(t, e, n, i){
            this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
        }
        evaluate(t) {
            const e = this.parameterPositions;
            let n = this._cachedIndex, i = e[n], r = e[n - 1];
            t: {
                e: {
                    let s;
                    n: {
                        i: if (!(t < i)) {
                            for(let s = n + 2;;){
                                if (void 0 === i) {
                                    if (t < r) break i;
                                    return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r);
                                }
                                if (n === s) break;
                                if (r = i, i = e[++n], t < i) break e;
                            }
                            s = e.length;
                            break n;
                        }
                        if (t >= r) break t;
                        {
                            const a = e[1];
                            t < a && (n = 2, r = a);
                            for(let s = n - 2;;){
                                if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                                if (n === s) break;
                                if (i = r, r = e[--n - 1], t >= r) break e;
                            }
                            s = n, n = 0;
                        }
                    }
                    for(; n < s;){
                        const i = n + s >>> 1;
                        t < e[i] ? s = i : n = i + 1;
                    }
                    if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                    if (void 0 === i) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, t);
                }
                this._cachedIndex = n, this.intervalChanged_(n, r, i);
            }
            return this.interpolate_(n, r, t, i);
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t) {
            const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i;
            for(let t = 0; t !== i; ++t)e[t] = n[r + t];
            return e;
        }
        interpolate_() {
            throw new Error("call to abstract method");
        }
        intervalChanged_() {}
    }
    ul.prototype.beforeStart_ = ul.prototype.copySampleValue_, ul.prototype.afterEnd_ = ul.prototype.copySampleValue_;
    class dl extends ul {
        constructor(t, e, n, i){
            super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
                endingStart: k,
                endingEnd: k
            };
        }
        intervalChanged_(t, e, n) {
            const i = this.parameterPositions;
            let r = t - 2, s = t + 1, a = i[r], o = i[s];
            if (void 0 === a) switch(this.getSettings_().endingStart){
                case V:
                    r = t, a = 2 * e - n;
                    break;
                case W:
                    r = i.length - 2, a = e + i[r] - i[r + 1];
                    break;
                default:
                    r = t, a = n;
            }
            if (void 0 === o) switch(this.getSettings_().endingEnd){
                case V:
                    s = t, o = 2 * n - e;
                    break;
                case W:
                    s = 1, o = n + i[1] - i[0];
                    break;
                default:
                    s = t - 1, o = e;
            }
            const l = .5 * (n - e), c = this.valueSize;
            this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (n - e) / (i - e), m = p * p, f = m * p, g = -u * f + 2 * u * m - u * p, v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1, y = (-1 - d) * f + (1.5 + d) * m + .5 * p, x = d * f - d * m;
            for(let t = 0; t !== a; ++t)r[t] = g * s[c + t] + v * s[l + t] + y * s[o + t] + x * s[h + t];
            return r;
        }
    }
    class pl extends ul {
        constructor(t, e, n, i){
            super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a, c = (n - e) / (i - e), h = 1 - c;
            for(let t = 0; t !== a; ++t)r[t] = s[l + t] * h + s[o + t] * c;
            return r;
        }
    }
    class ml extends ul {
        constructor(t, e, n, i){
            super(t, e, n, i);
        }
        interpolate_(t) {
            return this.copySampleValue_(t - 1);
        }
    }
    class fl {
        constructor(t, e, n, i){
            if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            this.name = t, this.times = hl.convertArray(e, this.TimeBufferType), this.values = hl.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
        }
        static toJSON(t) {
            const e = t.constructor;
            let n;
            if (e.toJSON !== this.toJSON) n = e.toJSON(t);
            else {
                n = {
                    name: t.name,
                    times: hl.convertArray(t.times, Array),
                    values: hl.convertArray(t.values, Array)
                };
                const e = t.getInterpolation();
                e !== t.DefaultInterpolation && (n.interpolation = e);
            }
            return n.type = t.ValueTypeName, n;
        }
        InterpolantFactoryMethodDiscrete(t) {
            return new ml(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodLinear(t) {
            return new pl(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodSmooth(t) {
            return new dl(this.times, this.values, this.getValueSize(), t);
        }
        setInterpolation(t) {
            let e;
            switch(t){
                case H:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case U:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case G:
                    e = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === e) {
                const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw new Error(e);
                    this.setInterpolation(this.DefaultInterpolation);
                }
                return console.warn("THREE.KeyframeTrack:", e), this;
            }
            return this.createInterpolant = e, this;
        }
        getInterpolation() {
            switch(this.createInterpolant){
                case this.InterpolantFactoryMethodDiscrete:
                    return H;
                case this.InterpolantFactoryMethodLinear:
                    return U;
                case this.InterpolantFactoryMethodSmooth:
                    return G;
            }
        }
        getValueSize() {
            return this.values.length / this.times.length;
        }
        shift(t) {
            if (0 !== t) {
                const e = this.times;
                for(let n = 0, i = e.length; n !== i; ++n)e[n] += t;
            }
            return this;
        }
        scale(t) {
            if (1 !== t) {
                const e = this.times;
                for(let n = 0, i = e.length; n !== i; ++n)e[n] *= t;
            }
            return this;
        }
        trim(t, e) {
            const n = this.times, i = n.length;
            let r = 0, s = i - 1;
            for(; r !== i && n[r] < t;)++r;
            for(; -1 !== s && n[s] > e;)--s;
            if (++s, 0 !== r || s !== i) {
                r >= s && (s = Math.max(s, 1), r = s - 1);
                const t = this.getValueSize();
                this.times = hl.arraySlice(n, r, s), this.values = hl.arraySlice(this.values, r * t, s * t);
            }
            return this;
        }
        validate() {
            let t = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
            const n = this.times, i = this.values, r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
            let s = null;
            for(let e = 0; e !== r; e++){
                const i = n[e];
                if ("number" == typeof i && isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t = !1;
                    break;
                }
                if (null !== s && s > i) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), t = !1;
                    break;
                }
                s = i;
            }
            if (void 0 !== i && hl.isTypedArray(i)) for(let e = 0, n = i.length; e !== n; ++e){
                const n = i[e];
                if (isNaN(n)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t = !1;
                    break;
                }
            }
            return t;
        }
        optimize() {
            const t = hl.arraySlice(this.times), e = hl.arraySlice(this.values), n = this.getValueSize(), i = this.getInterpolation() === G, r = t.length - 1;
            let s = 1;
            for(let a = 1; a < r; ++a){
                let r = !1;
                const o = t[a];
                if (o !== t[a + 1] && (1 !== a || o !== t[0])) {
                    if (i) r = !0;
                    else {
                        const t = a * n, i = t - n, s = t + n;
                        for(let a = 0; a !== n; ++a){
                            const n = e[t + a];
                            if (n !== e[i + a] || n !== e[s + a]) {
                                r = !0;
                                break;
                            }
                        }
                    }
                }
                if (r) {
                    if (a !== s) {
                        t[s] = t[a];
                        const i = a * n, r = s * n;
                        for(let t = 0; t !== n; ++t)e[r + t] = e[i + t];
                    }
                    ++s;
                }
            }
            if (r > 0) {
                t[s] = t[r];
                for(let t = r * n, i = s * n, a = 0; a !== n; ++a)e[i + a] = e[t + a];
                ++s;
            }
            return s !== t.length ? (this.times = hl.arraySlice(t, 0, s), this.values = hl.arraySlice(e, 0, s * n)) : (this.times = t, this.values = e), this;
        }
        clone() {
            const t = hl.arraySlice(this.times, 0), e = hl.arraySlice(this.values, 0), n = new this.constructor(this.name, t, e);
            return n.createInterpolant = this.createInterpolant, n;
        }
    }
    fl.prototype.TimeBufferType = Float32Array, fl.prototype.ValueBufferType = Float32Array, fl.prototype.DefaultInterpolation = U;
    class gl extends fl {
    }
    gl.prototype.ValueTypeName = "bool", gl.prototype.ValueBufferType = Array, gl.prototype.DefaultInterpolation = H, gl.prototype.InterpolantFactoryMethodLinear = void 0, gl.prototype.InterpolantFactoryMethodSmooth = void 0;
    class vl extends fl {
    }
    vl.prototype.ValueTypeName = "color";
    class yl extends fl {
    }
    yl.prototype.ValueTypeName = "number";
    class xl extends ul {
        constructor(t, e, n, i){
            super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - e) / (i - e);
            let l = t * a;
            for(let t = l + a; l !== t; l += 4)Lt.slerpFlat(r, 0, s, l - a, s, l, o);
            return r;
        }
    }
    class _l extends fl {
        InterpolantFactoryMethodLinear(t) {
            return new xl(this.times, this.values, this.getValueSize(), t);
        }
    }
    _l.prototype.ValueTypeName = "quaternion", _l.prototype.DefaultInterpolation = U, _l.prototype.InterpolantFactoryMethodSmooth = void 0;
    class bl extends fl {
    }
    bl.prototype.ValueTypeName = "string", bl.prototype.ValueBufferType = Array, bl.prototype.DefaultInterpolation = H, bl.prototype.InterpolantFactoryMethodLinear = void 0, bl.prototype.InterpolantFactoryMethodSmooth = void 0;
    class Ml extends fl {
    }
    Ml.prototype.ValueTypeName = "vector";
    class wl {
        constructor(t, e = -1, n, i = 2500){
            this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = ct(), this.duration < 0 && this.resetDuration();
        }
        static parse(t) {
            const e = [], n = t.tracks, i = 1 / (t.fps || 1);
            for(let t = 0, r = n.length; t !== r; ++t)e.push(Sl(n[t]).scale(i));
            const r = new this(t.name, t.duration, e, t.blendMode);
            return r.uuid = t.uuid, r;
        }
        static toJSON(t) {
            const e = [], n = t.tracks, i = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid,
                blendMode: t.blendMode
            };
            for(let t = 0, i = n.length; t !== i; ++t)e.push(fl.toJSON(n[t]));
            return i;
        }
        static CreateFromMorphTargetSequence(t, e, n, i) {
            const r = e.length, s = [];
            for(let t = 0; t < r; t++){
                let a = [], o = [];
                a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
                const l = hl.getKeyframeOrder(a);
                a = hl.sortedArray(a, 1, l), o = hl.sortedArray(o, 1, l), i || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new yl(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / n));
            }
            return new this(t, -1, s);
        }
        static findByName(t, e) {
            let n = t;
            if (!Array.isArray(t)) {
                const e = t;
                n = e.geometry && e.geometry.animations || e.animations;
            }
            for(let t = 0; t < n.length; t++)if (n[t].name === e) return n[t];
            return null;
        }
        static CreateClipsFromMorphTargetSequences(t, e, n) {
            const i = {}, r = /^([\w-]*?)([\d]+)$/;
            for(let e = 0, n = t.length; e < n; e++){
                const n = t[e], s = n.name.match(r);
                if (s && s.length > 1) {
                    const t = s[1];
                    let e = i[t];
                    e || (i[t] = e = []), e.push(n);
                }
            }
            const s = [];
            for(const t in i)s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
            return s;
        }
        static parseAnimation(t, e) {
            if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            const n = function(t, e, n, i, r) {
                if (0 !== n.length) {
                    const s = [], a = [];
                    hl.flattenJSON(n, s, a, i), 0 !== s.length && r.push(new t(e, s, a));
                }
            }, i = [], r = t.name || "default", s = t.fps || 30, a = t.blendMode;
            let o = t.length || -1;
            const l = t.hierarchy || [];
            for(let t = 0; t < l.length; t++){
                const r = l[t].keys;
                if (r && 0 !== r.length) {
                    if (r[0].morphTargets) {
                        const t = {};
                        let e;
                        for(e = 0; e < r.length; e++)if (r[e].morphTargets) for(let n = 0; n < r[e].morphTargets.length; n++)t[r[e].morphTargets[n]] = -1;
                        for(const n in t){
                            const t = [], s = [];
                            for(let i = 0; i !== r[e].morphTargets.length; ++i){
                                const i = r[e];
                                t.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
                            }
                            i.push(new yl(".morphTargetInfluence[" + n + "]", t, s));
                        }
                        o = t.length * (s || 1);
                    } else {
                        const s = ".bones[" + e[t].name + "]";
                        n(Ml, s + ".position", r, "pos", i), n(_l, s + ".quaternion", r, "rot", i), n(Ml, s + ".scale", r, "scl", i);
                    }
                }
            }
            if (0 === i.length) return null;
            return new this(r, o, i, a);
        }
        resetDuration() {
            let t = 0;
            for(let e = 0, n = this.tracks.length; e !== n; ++e){
                const n = this.tracks[e];
                t = Math.max(t, n.times[n.times.length - 1]);
            }
            return this.duration = t, this;
        }
        trim() {
            for(let t = 0; t < this.tracks.length; t++)this.tracks[t].trim(0, this.duration);
            return this;
        }
        validate() {
            let t = !0;
            for(let e = 0; e < this.tracks.length; e++)t = t && this.tracks[e].validate();
            return t;
        }
        optimize() {
            for(let t = 0; t < this.tracks.length; t++)this.tracks[t].optimize();
            return this;
        }
        clone() {
            const t = [];
            for(let e = 0; e < this.tracks.length; e++)t.push(this.tracks[e].clone());
            return new this.constructor(this.name, this.duration, t, this.blendMode);
        }
        toJSON() {
            return this.constructor.toJSON(this);
        }
    }
    function Sl(t) {
        if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = function(t) {
            switch(t.toLowerCase()){
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return yl;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return Ml;
                case "color":
                    return vl;
                case "quaternion":
                    return _l;
                case "bool":
                case "boolean":
                    return gl;
                case "string":
                    return bl;
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
        }(t.type);
        if (void 0 === t.times) {
            const e = [], n = [];
            hl.flattenJSON(t.keys, e, n, "value"), t.times = e, t.values = n;
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation);
    }
    const Tl = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            !1 !== this.enabled && (this.files[t] = e);
        },
        get: function(t) {
            if (!1 !== this.enabled) return this.files[t];
        },
        remove: function(t) {
            delete this.files[t];
        },
        clear: function() {
            this.files = {};
        }
    };
    class El {
        constructor(t, e, n){
            const i = this;
            let r, s = !1, a = 0, o = 0;
            const l = [];
            this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
                o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), s = !0;
            }, this.itemEnd = function(t) {
                a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && (s = !1, void 0 !== i.onLoad && i.onLoad());
            }, this.itemError = function(t) {
                void 0 !== i.onError && i.onError(t);
            }, this.resolveURL = function(t) {
                return r ? r(t) : t;
            }, this.setURLModifier = function(t) {
                return r = t, this;
            }, this.addHandler = function(t, e) {
                return l.push(t, e), this;
            }, this.removeHandler = function(t) {
                const e = l.indexOf(t);
                return -1 !== e && l.splice(e, 2), this;
            }, this.getHandler = function(t) {
                for(let e = 0, n = l.length; e < n; e += 2){
                    const n = l[e], i = l[e + 1];
                    if (n.global && (n.lastIndex = 0), n.test(t)) return i;
                }
                return null;
            };
        }
    }
    const Al = new El;
    class Ll {
        constructor(t){
            this.manager = void 0 !== t ? t : Al, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(t, e) {
            const n = this;
            return new Promise(function(i, r) {
                n.load(t, i, e, r);
            });
        }
        parse() {}
        setCrossOrigin(t) {
            return this.crossOrigin = t, this;
        }
        setWithCredentials(t) {
            return this.withCredentials = t, this;
        }
        setPath(t) {
            return this.path = t, this;
        }
        setResourcePath(t) {
            return this.resourcePath = t, this;
        }
        setRequestHeader(t) {
            return this.requestHeader = t, this;
        }
    }
    const Rl = {};
    class Cl extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            const r = this, s = Tl.get(t);
            if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function() {
                e && e(s), r.manager.itemEnd(t);
            }, 0), s;
            if (void 0 !== Rl[t]) return void Rl[t].push({
                onLoad: e,
                onProgress: n,
                onError: i
            });
            const a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
            let o;
            if (a) {
                const n = a[1], s = !!a[2];
                let o = a[3];
                o = decodeURIComponent(o), s && (o = atob(o));
                try {
                    let i;
                    const s = (this.responseType || "").toLowerCase();
                    switch(s){
                        case "arraybuffer":
                        case "blob":
                            const t1 = new Uint8Array(o.length);
                            for(let e = 0; e < o.length; e++)t1[e] = o.charCodeAt(e);
                            i = "blob" === s ? new Blob([
                                t1.buffer
                            ], {
                                type: n
                            }) : t1.buffer;
                            break;
                        case "document":
                            const e1 = new DOMParser;
                            i = e1.parseFromString(o, n);
                            break;
                        case "json":
                            i = JSON.parse(o);
                            break;
                        default:
                            i = o;
                    }
                    setTimeout(function() {
                        e && e(i), r.manager.itemEnd(t);
                    }, 0);
                } catch (e) {
                    setTimeout(function() {
                        i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
                    }, 0);
                }
            } else {
                Rl[t] = [], Rl[t].push({
                    onLoad: e,
                    onProgress: n,
                    onError: i
                }), o = new XMLHttpRequest, o.open("GET", t, !0), o.addEventListener("load", function(e) {
                    const n = this.response, i = Rl[t];
                    if (delete Rl[t], 200 === this.status || 0 === this.status) {
                        0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), Tl.add(t, n);
                        for(let t = 0, e = i.length; t < e; t++){
                            const e = i[t];
                            e.onLoad && e.onLoad(n);
                        }
                        r.manager.itemEnd(t);
                    } else {
                        for(let t = 0, n = i.length; t < n; t++){
                            const n = i[t];
                            n.onError && n.onError(e);
                        }
                        r.manager.itemError(t), r.manager.itemEnd(t);
                    }
                }, !1), o.addEventListener("progress", function(e) {
                    const n = Rl[t];
                    for(let t = 0, i = n.length; t < i; t++){
                        const i = n[t];
                        i.onProgress && i.onProgress(e);
                    }
                }, !1), o.addEventListener("error", function(e) {
                    const n = Rl[t];
                    delete Rl[t];
                    for(let t = 0, i = n.length; t < i; t++){
                        const i = n[t];
                        i.onError && i.onError(e);
                    }
                    r.manager.itemError(t), r.manager.itemEnd(t);
                }, !1), o.addEventListener("abort", function(e) {
                    const n = Rl[t];
                    delete Rl[t];
                    for(let t = 0, i = n.length; t < i; t++){
                        const i = n[t];
                        i.onError && i.onError(e);
                    }
                    r.manager.itemError(t), r.manager.itemEnd(t);
                }, !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                for(const t in this.requestHeader)o.setRequestHeader(t, this.requestHeader[t]);
                o.send(null);
            }
            return r.manager.itemStart(t), o;
        }
        setResponseType(t) {
            return this.responseType = t, this;
        }
        setMimeType(t) {
            return this.mimeType = t, this;
        }
    }
    class Pl extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            const r = this, s = Tl.get(t);
            if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function() {
                e && e(s), r.manager.itemEnd(t);
            }, 0), s;
            const a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            function o() {
                a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), Tl.add(t, this), e && e(this), r.manager.itemEnd(t);
            }
            function l(e) {
                a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
            }
            return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a;
        }
    }
    class Dl extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            const r = new Kn, s = new Pl(this.manager);
            s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
            let a = 0;
            function o(n) {
                s.load(t[n], function(t) {
                    r.images[n] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r));
                }, void 0, i);
            }
            for(let e = 0; e < t.length; ++e)o(e);
            return r;
        }
    }
    class Il extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            const r = this, s = new ea, a = new Cl(this.manager);
            return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t, function(t) {
                const n = r.parse(t);
                n && (void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width, s.image.height = n.height, s.image.data = n.data), s.wrapS = void 0 !== n.wrapS ? n.wrapS : u, s.wrapT = void 0 !== n.wrapT ? n.wrapT : u, s.magFilter = void 0 !== n.magFilter ? n.magFilter : g, s.minFilter = void 0 !== n.minFilter ? n.minFilter : g, s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.encoding && (s.encoding = n.encoding), void 0 !== n.flipY && (s.flipY = n.flipY), void 0 !== n.format && (s.format = n.format), void 0 !== n.type && (s.type = n.type), void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps, s.minFilter = y), 1 === n.mipmapCount && (s.minFilter = g), void 0 !== n.generateMipmaps && (s.generateMipmaps = n.generateMipmaps), s.needsUpdate = !0, e && e(s, n));
            }, n, i), s;
        }
    }
    class Nl extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            const r = new Mt, s = new Pl(this.manager);
            return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, function(n) {
                r.image = n;
                const i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                r.format = i ? T : E, r.needsUpdate = !0, void 0 !== e && e(r);
            }, n, i), r;
        }
    }
    class Bl extends ka {
        constructor(){
            super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
        }
        add(t) {
            this.curves.push(t);
        }
        closePath() {
            const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new no(e, t));
        }
        getPoint(t) {
            const e = t * this.getLength(), n = this.getCurveLengths();
            let i = 0;
            for(; i < n.length;){
                if (n[i] >= e) {
                    const t = n[i] - e, r = this.curves[i], s = r.getLength(), a = 0 === s ? 0 : 1 - t / s;
                    return r.getPointAt(a);
                }
                i++;
            }
            return null;
        }
        getLength() {
            const t = this.getCurveLengths();
            return t[t.length - 1];
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
        }
        getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            const t = [];
            let e = 0;
            for(let n = 0, i = this.curves.length; n < i; n++)e += this.curves[n].getLength(), t.push(e);
            return this.cacheLengths = t, t;
        }
        getSpacedPoints(t = 40) {
            const e = [];
            for(let n = 0; n <= t; n++)e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]), e;
        }
        getPoints(t = 12) {
            const e = [];
            let n;
            for(let i = 0, r = this.curves; i < r.length; i++){
                const s = r[i], a = s && s.isEllipseCurve ? 2 * t : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? t * s.points.length : t, o = s.getPoints(a);
                for(let t = 0; t < o.length; t++){
                    const i = o[t];
                    n && n.equals(i) || (e.push(i), n = i);
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
        }
        copy(t) {
            super.copy(t), this.curves = [];
            for(let e = 0, n = t.curves.length; e < n; e++){
                const n = t.curves[e];
                this.curves.push(n.clone());
            }
            return this.autoClose = t.autoClose, this;
        }
        toJSON() {
            const t = super.toJSON();
            t.autoClose = this.autoClose, t.curves = [];
            for(let e = 0, n = this.curves.length; e < n; e++){
                const n = this.curves[e];
                t.curves.push(n.toJSON());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
            for(let e = 0, n = t.curves.length; e < n; e++){
                const n = t.curves[e];
                this.curves.push((new oo[n.type]).fromJSON(n));
            }
            return this;
        }
    }
    class zl extends Bl {
        constructor(t){
            super(), this.type = "Path", this.currentPoint = new vt, t && this.setFromPoints(t);
        }
        setFromPoints(t) {
            this.moveTo(t[0].x, t[0].y);
            for(let e = 1, n = t.length; e < n; e++)this.lineTo(t[e].x, t[e].y);
            return this;
        }
        moveTo(t, e) {
            return this.currentPoint.set(t, e), this;
        }
        lineTo(t, e) {
            const n = new no(this.currentPoint.clone(), new vt(t, e));
            return this.curves.push(n), this.currentPoint.set(t, e), this;
        }
        quadraticCurveTo(t, e, n, i) {
            const r = new ro(this.currentPoint.clone(), new vt(t, e), new vt(n, i));
            return this.curves.push(r), this.currentPoint.set(n, i), this;
        }
        bezierCurveTo(t, e, n, i, r, s) {
            const a = new to(this.currentPoint.clone(), new vt(t, e), new vt(n, i), new vt(r, s));
            return this.curves.push(a), this.currentPoint.set(r, s), this;
        }
        splineThru(t) {
            const e = [
                this.currentPoint.clone()
            ].concat(t), n = new ao(e);
            return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
        }
        arc(t, e, n, i, r, s) {
            const a = this.currentPoint.x, o = this.currentPoint.y;
            return this.absarc(t + a, e + o, n, i, r, s), this;
        }
        absarc(t, e, n, i, r, s) {
            return this.absellipse(t, e, n, n, i, r, s), this;
        }
        ellipse(t, e, n, i, r, s, a, o) {
            const l = this.currentPoint.x, c = this.currentPoint.y;
            return this.absellipse(t + l, e + c, n, i, r, s, a, o), this;
        }
        absellipse(t, e, n, i, r, s, a, o) {
            const l = new Va(t, e, n, i, r, s, a, o);
            if (this.curves.length > 0) {
                const t = l.getPoint(0);
                t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
            }
            this.curves.push(l);
            const c = l.getPoint(1);
            return this.currentPoint.copy(c), this;
        }
        copy(t) {
            return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.currentPoint = this.currentPoint.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
        }
    }
    class Fl extends zl {
        constructor(t){
            super(t), this.uuid = ct(), this.type = "Shape", this.holes = [];
        }
        getPointsHoles(t) {
            const e = [];
            for(let n = 0, i = this.holes.length; n < i; n++)e[n] = this.holes[n].getPoints(t);
            return e;
        }
        extractPoints(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            };
        }
        copy(t) {
            super.copy(t), this.holes = [];
            for(let e = 0, n = t.holes.length; e < n; e++){
                const n = t.holes[e];
                this.holes.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t = super.toJSON();
            t.uuid = this.uuid, t.holes = [];
            for(let e = 0, n = this.holes.length; e < n; e++){
                const n = this.holes[e];
                t.holes.push(n.toJSON());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
            for(let e = 0, n = t.holes.length; e < n; e++){
                const n = t.holes[e];
                this.holes.push((new zl).fromJSON(n));
            }
            return this;
        }
    }
    class Ol extends Pe {
        constructor(t, e = 1){
            super(), this.type = "Light", this.color = new Qe(t), this.intensity = e;
        }
        dispose() {}
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.intensity = t.intensity, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
        }
    }
    Ol.prototype.isLight = !0;
    class Hl extends Ol {
        constructor(t, e, n){
            super(t, n), this.type = "HemisphereLight", this.position.copy(Pe.DefaultUp), this.updateMatrix(), this.groundColor = new Qe(e);
        }
        copy(t) {
            return Ol.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this;
        }
    }
    Hl.prototype.isHemisphereLight = !0;
    const Ul = new ae, Gl = new Rt, kl = new Rt;
    class Vl {
        constructor(t){
            this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new vt(512, 512), this.map = null, this.mapPass = null, this.matrix = new ae, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ai, this._frameExtents = new vt(1, 1), this._viewportCount = 1, this._viewports = [
                new St(0, 0, 1, 1)
            ];
        }
        getViewportCount() {
            return this._viewportCount;
        }
        getFrustum() {
            return this._frustum;
        }
        updateMatrices(t) {
            const e = this.camera, n = this.matrix;
            Gl.setFromMatrixPosition(t.matrixWorld), e.position.copy(Gl), kl.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(kl), e.updateMatrixWorld(), Ul.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ul), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse);
        }
        getViewport(t) {
            return this._viewports[t];
        }
        getFrameExtents() {
            return this._frameExtents;
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t = {};
            return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
        }
    }
    class Wl extends Vl {
        constructor(){
            super(new Jn(50, 1, .5, 500)), this.focus = 1;
        }
        updateMatrices(t) {
            const e = this.camera, n = 2 * lt * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = t.distance || e.far;
            n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t);
        }
        copy(t) {
            return super.copy(t), this.focus = t.focus, this;
        }
    }
    Wl.prototype.isSpotLightShadow = !0;
    class jl extends Ol {
        constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 1){
            super(t, e), this.type = "SpotLight", this.position.copy(Pe.DefaultUp), this.updateMatrix(), this.target = new Pe, this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.shadow = new Wl;
        }
        get power() {
            return this.intensity * Math.PI;
        }
        set power(t) {
            this.intensity = t / Math.PI;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
    }
    jl.prototype.isSpotLight = !0;
    const ql = new ae, Xl = new Rt, Yl = new Rt;
    class Jl extends Vl {
        constructor(){
            super(new Jn(90, 1, .5, 500)), this._frameExtents = new vt(4, 2), this._viewportCount = 6, this._viewports = [
                new St(2, 1, 1, 1),
                new St(0, 1, 1, 1),
                new St(3, 1, 1, 1),
                new St(1, 1, 1, 1),
                new St(3, 0, 1, 1),
                new St(1, 0, 1, 1)
            ], this._cubeDirections = [
                new Rt(1, 0, 0),
                new Rt(-1, 0, 0),
                new Rt(0, 0, 1),
                new Rt(0, 0, -1),
                new Rt(0, 1, 0),
                new Rt(0, -1, 0)
            ], this._cubeUps = [
                new Rt(0, 1, 0),
                new Rt(0, 1, 0),
                new Rt(0, 1, 0),
                new Rt(0, 1, 0),
                new Rt(0, 0, 1),
                new Rt(0, 0, -1)
            ];
        }
        updateMatrices(t, e = 0) {
            const n = this.camera, i = this.matrix, r = t.distance || n.far;
            r !== n.far && (n.far = r, n.updateProjectionMatrix()), Xl.setFromMatrixPosition(t.matrixWorld), n.position.copy(Xl), Yl.copy(n.position), Yl.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Yl), n.updateMatrixWorld(), i.makeTranslation(-Xl.x, -Xl.y, -Xl.z), ql.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ql);
        }
    }
    Jl.prototype.isPointLightShadow = !0;
    class Zl extends Ol {
        constructor(t, e, n = 0, i = 1){
            super(t, e), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Jl;
        }
        get power() {
            return 4 * this.intensity * Math.PI;
        }
        set power(t) {
            this.intensity = t / (4 * Math.PI);
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
        }
    }
    Zl.prototype.isPointLight = !0;
    class Ql extends Yn {
        constructor(t = -1, e = 1, n = 1, i = -1, r = .1, s = 2e3){
            super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
        }
        copy(t, e) {
            return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this;
        }
        setViewOffset(t, e, n, i, r, s) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
            let r = n - t, s = n + t, a = i + e, o = i - e;
            if (null !== this.view && this.view.enabled) {
                const t = (this.right - this.left) / this.view.fullWidth / this.zoom, e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += t * this.view.offsetX, s = r + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height;
            }
            this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
        }
    }
    Ql.prototype.isOrthographicCamera = !0;
    class Kl extends Vl {
        constructor(){
            super(new Ql(-5, 5, 5, -5, .5, 500));
        }
    }
    Kl.prototype.isDirectionalLightShadow = !0;
    class $l extends Ol {
        constructor(t, e){
            super(t, e), this.type = "DirectionalLight", this.position.copy(Pe.DefaultUp), this.updateMatrix(), this.target = new Pe, this.shadow = new Kl;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
    }
    $l.prototype.isDirectionalLight = !0;
    class tc extends Ol {
        constructor(t, e){
            super(t, e), this.type = "AmbientLight";
        }
    }
    tc.prototype.isAmbientLight = !0;
    class ec extends Ol {
        constructor(t, e, n = 10, i = 10){
            super(t, e), this.type = "RectAreaLight", this.width = n, this.height = i;
        }
        copy(t) {
            return super.copy(t), this.width = t.width, this.height = t.height, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.width = this.width, e.object.height = this.height, e;
        }
    }
    ec.prototype.isRectAreaLight = !0;
    class nc {
        constructor(){
            this.coefficients = [];
            for(let t = 0; t < 9; t++)this.coefficients.push(new Rt);
        }
        set(t) {
            for(let e = 0; e < 9; e++)this.coefficients[e].copy(t[e]);
            return this;
        }
        zero() {
            for(let t = 0; t < 9; t++)this.coefficients[t].set(0, 0, 0);
            return this;
        }
        getAt(t, e) {
            const n = t.x, i = t.y, r = t.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e;
        }
        getIrradianceAt(t, e) {
            const n = t.x, i = t.y, r = t.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e;
        }
        add(t) {
            for(let e = 0; e < 9; e++)this.coefficients[e].add(t.coefficients[e]);
            return this;
        }
        addScaledSH(t, e) {
            for(let n = 0; n < 9; n++)this.coefficients[n].addScaledVector(t.coefficients[n], e);
            return this;
        }
        scale(t) {
            for(let e = 0; e < 9; e++)this.coefficients[e].multiplyScalar(t);
            return this;
        }
        lerp(t, e) {
            for(let n = 0; n < 9; n++)this.coefficients[n].lerp(t.coefficients[n], e);
            return this;
        }
        equals(t) {
            for(let e = 0; e < 9; e++)if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
            return !0;
        }
        copy(t) {
            return this.set(t.coefficients);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        fromArray(t, e = 0) {
            const n = this.coefficients;
            for(let i = 0; i < 9; i++)n[i].fromArray(t, e + 3 * i);
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.coefficients;
            for(let i = 0; i < 9; i++)n[i].toArray(t, e + 3 * i);
            return t;
        }
        static getBasisAt(t, e) {
            const n = t.x, i = t.y, r = t.z;
            e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i);
        }
    }
    nc.prototype.isSphericalHarmonics3 = !0;
    class ic extends Ol {
        constructor(t = new nc, e = 1){
            super(void 0, e), this.sh = t;
        }
        copy(t) {
            return super.copy(t), this.sh.copy(t.sh), this;
        }
        fromJSON(t) {
            return this.intensity = t.intensity, this.sh.fromArray(t.sh), this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.sh = this.sh.toArray(), e;
        }
    }
    ic.prototype.isLightProbe = !0;
    class rc extends Ll {
        constructor(t){
            super(t), this.textures = {};
        }
        load(t, e, n, i) {
            const r = this, s = new Cl(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function(n) {
                try {
                    e(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t);
                }
            }, n, i);
        }
        parse(t) {
            const e = this.textures;
            function n(t) {
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t];
            }
            const i = new cl[t.type];
            if (void 0 !== t.uuid && (i.uuid = t.uuid), void 0 !== t.name && (i.name = t.name), void 0 !== t.color && void 0 !== i.color && i.color.setHex(t.color), void 0 !== t.roughness && (i.roughness = t.roughness), void 0 !== t.metalness && (i.metalness = t.metalness), void 0 !== t.sheen && (i.sheen = (new Qe).setHex(t.sheen)), void 0 !== t.emissive && void 0 !== i.emissive && i.emissive.setHex(t.emissive), void 0 !== t.specular && void 0 !== i.specular && i.specular.setHex(t.specular), void 0 !== t.shininess && (i.shininess = t.shininess), void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.transmission && (i.transmission = t.transmission), void 0 !== t.thickness && (i.thickness = t.thickness), void 0 !== t.attenuationDistance && (i.attenuationDistance = t.attenuationDistance), void 0 !== t.attenuationColor && void 0 !== i.attenuationColor && i.attenuationColor.setHex(t.attenuationColor), void 0 !== t.fog && (i.fog = t.fog), void 0 !== t.flatShading && (i.flatShading = t.flatShading), void 0 !== t.blending && (i.blending = t.blending), void 0 !== t.combine && (i.combine = t.combine), void 0 !== t.side && (i.side = t.side), void 0 !== t.shadowSide && (i.shadowSide = t.shadowSide), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.transparent && (i.transparent = t.transparent), void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest), void 0 !== t.depthTest && (i.depthTest = t.depthTest), void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (i.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (i.rotation = t.rotation), 1 !== t.linewidth && (i.linewidth = t.linewidth), void 0 !== t.dashSize && (i.dashSize = t.dashSize), void 0 !== t.gapSize && (i.gapSize = t.gapSize), void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals), void 0 !== t.dithering && (i.dithering = t.dithering), void 0 !== t.alphaToCoverage && (i.alphaToCoverage = t.alphaToCoverage), void 0 !== t.premultipliedAlpha && (i.premultipliedAlpha = t.premultipliedAlpha), void 0 !== t.vertexTangents && (i.vertexTangents = t.vertexTangents), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors), void 0 !== t.uniforms) for(const e in t.uniforms){
                const r = t.uniforms[e];
                switch(i.uniforms[e] = {}, r.type){
                    case "t":
                        i.uniforms[e].value = n(r.value);
                        break;
                    case "c":
                        i.uniforms[e].value = (new Qe).setHex(r.value);
                        break;
                    case "v2":
                        i.uniforms[e].value = (new vt).fromArray(r.value);
                        break;
                    case "v3":
                        i.uniforms[e].value = (new Rt).fromArray(r.value);
                        break;
                    case "v4":
                        i.uniforms[e].value = (new St).fromArray(r.value);
                        break;
                    case "m3":
                        i.uniforms[e].value = (new yt).fromArray(r.value);
                        break;
                    case "m4":
                        i.uniforms[e].value = (new ae).fromArray(r.value);
                        break;
                    default:
                        i.uniforms[e].value = r.value;
                }
            }
            if (void 0 !== t.defines && (i.defines = t.defines), void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader), void 0 !== t.extensions) for(const e in t.extensions)i.extensions[e] = t.extensions[e];
            if (void 0 !== t.shading && (i.flatShading = 1 === t.shading), void 0 !== t.size && (i.size = t.size), void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (i.map = n(t.map)), void 0 !== t.matcap && (i.matcap = n(t.matcap)), void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)), void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale), void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
                let e = t.normalScale;
                !1 === Array.isArray(e) && (e = [
                    e,
                    e
                ]), i.normalScale = (new vt).fromArray(e);
            }
            return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)), void 0 !== t.envMap && (i.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)), void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = (new vt).fromArray(t.clearcoatNormalScale)), void 0 !== t.transmissionMap && (i.transmissionMap = n(t.transmissionMap)), void 0 !== t.thicknessMap && (i.thicknessMap = n(t.thicknessMap)), i;
        }
        setTextures(t) {
            return this.textures = t, this;
        }
    }
    class sc {
        static decodeText(t) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
            let e = "";
            for(let n = 0, i = t.length; n < i; n++)e += String.fromCharCode(t[n]);
            try {
                return decodeURIComponent(escape(e));
            } catch (t) {
                return e;
            }
        }
        static extractUrlBase(t) {
            const e = t.lastIndexOf("/");
            return -1 === e ? "./" : t.substr(0, e + 1);
        }
    }
    class ac extends wn {
        constructor(){
            super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
        }
        copy(t) {
            return super.copy(t), this.instanceCount = t.instanceCount, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t = super.toJSON(this);
            return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
        }
    }
    ac.prototype.isInstancedBufferGeometry = !0;
    class oc extends en {
        constructor(t, e, n, i = 1){
            "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t, e, n), this.meshPerAttribute = i;
        }
        copy(t) {
            return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
        }
    }
    oc.prototype.isInstancedBufferAttribute = !0;
    class lc extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            const r = this, s = new Cl(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function(n) {
                try {
                    e(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t);
                }
            }, n, i);
        }
        parse(t) {
            const e = {}, n = {};
            function i(t, i) {
                if (void 0 !== e[i]) return e[i];
                const r = t.interleavedBuffers[i], s = function(t, e) {
                    if (void 0 !== n[e]) return n[e];
                    const i = t.arrayBuffers[e], r = new Uint32Array(i).buffer;
                    return n[e] = r, r;
                }(t, r.buffer), a = fn(r.type, s), o = new Es(a, r.stride);
                return o.uuid = r.uuid, e[i] = o, o;
            }
            const r = t.isInstancedBufferGeometry ? new ac : new wn, s = t.data.index;
            if (void 0 !== s) {
                const t = fn(s.type, s.array);
                r.setIndex(new en(t, 1));
            }
            const a = t.data.attributes;
            for(const e in a){
                const n = a[e];
                let s;
                if (n.isInterleavedBufferAttribute) {
                    const e = i(t.data, n.data);
                    s = new Ls(e, n.itemSize, n.offset, n.normalized);
                } else {
                    const t = fn(n.type, n.array);
                    s = new (n.isInstancedBufferAttribute ? oc : en)(t, n.itemSize, n.normalized);
                }
                void 0 !== n.name && (s.name = n.name), void 0 !== n.usage && s.setUsage(n.usage), void 0 !== n.updateRange && (s.updateRange.offset = n.updateRange.offset, s.updateRange.count = n.updateRange.count), r.setAttribute(e, s);
            }
            const o = t.data.morphAttributes;
            if (o) for(const e in o){
                const n = o[e], s = [];
                for(let e = 0, r = n.length; e < r; e++){
                    const r = n[e];
                    let a;
                    if (r.isInterleavedBufferAttribute) {
                        const e = i(t.data, r.data);
                        a = new Ls(e, r.itemSize, r.offset, r.normalized);
                    } else {
                        const t = fn(r.type, r.array);
                        a = new en(t, r.itemSize, r.normalized);
                    }
                    void 0 !== r.name && (a.name = r.name), s.push(a);
                }
                r.morphAttributes[e] = s;
            }
            t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
            const l = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== l) for(let t = 0, e = l.length; t !== e; ++t){
                const e = l[t];
                r.addGroup(e.start, e.count, e.materialIndex);
            }
            const c = t.data.boundingSphere;
            if (void 0 !== c) {
                const t = new Rt;
                void 0 !== c.center && t.fromArray(c.center), r.boundingSphere = new Qt(t, c.radius);
            }
            return t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r;
        }
    }
    const cc = {
        UVMapping: i,
        CubeReflectionMapping: r,
        CubeRefractionMapping: s,
        EquirectangularReflectionMapping: a,
        EquirectangularRefractionMapping: o,
        CubeUVReflectionMapping: l,
        CubeUVRefractionMapping: c
    }, hc = {
        RepeatWrapping: h,
        ClampToEdgeWrapping: u,
        MirroredRepeatWrapping: d
    }, uc = {
        NearestFilter: p,
        NearestMipmapNearestFilter: m,
        NearestMipmapLinearFilter: f,
        LinearFilter: g,
        LinearMipmapNearestFilter: v,
        LinearMipmapLinearFilter: y
    };
    class dc extends Ll {
        constructor(t){
            super(t), "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
                premultiplyAlpha: "none"
            };
        }
        setOptions(t) {
            return this.options = t, this;
        }
        load(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            const r = this, s = Tl.get(t);
            if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function() {
                e && e(s), r.manager.itemEnd(t);
            }, 0), s;
            const a = {};
            a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then(function(t) {
                return t.blob();
            }).then(function(t) {
                return createImageBitmap(t, Object.assign(r.options, {
                    colorSpaceConversion: "none"
                }));
            }).then(function(n) {
                Tl.add(t, n), e && e(n), r.manager.itemEnd(t);
            }).catch(function(e) {
                i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
            }), r.manager.itemStart(t);
        }
    }
    dc.prototype.isImageBitmapLoader = !0;
    class pc {
        constructor(){
            this.type = "ShapePath", this.color = new Qe, this.subPaths = [], this.currentPath = null;
        }
        moveTo(t, e) {
            return this.currentPath = new zl, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
        }
        lineTo(t, e) {
            return this.currentPath.lineTo(t, e), this;
        }
        quadraticCurveTo(t, e, n, i) {
            return this.currentPath.quadraticCurveTo(t, e, n, i), this;
        }
        bezierCurveTo(t, e, n, i, r, s) {
            return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this;
        }
        splineThru(t) {
            return this.currentPath.splineThru(t), this;
        }
        toShapes(t, e) {
            function n(t) {
                const e = [];
                for(let n = 0, i = t.length; n < i; n++){
                    const i = t[n], r = new Fl;
                    r.curves = i.curves, e.push(r);
                }
                return e;
            }
            function i(t, e) {
                const n = e.length;
                let i = !1;
                for(let r = n - 1, s = 0; s < n; r = s++){
                    let n = e[r], a = e[s], o = a.x - n.x, l = a.y - n.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (l < 0 && (n = e[s], o = -o, a = e[r], l = -l), t.y < n.y || t.y > a.y) continue;
                        if (t.y === n.y) {
                            if (t.x === n.x) return !0;
                        } else {
                            const e = l * (t.x - n.x) - o * (t.y - n.y);
                            if (0 === e) return !0;
                            if (e < 0) continue;
                            i = !i;
                        }
                    } else {
                        if (t.y !== n.y) continue;
                        if (a.x <= t.x && t.x <= n.x || n.x <= t.x && t.x <= a.x) return !0;
                    }
                }
                return i;
            }
            const r = No.isClockWise, s = this.subPaths;
            if (0 === s.length) return [];
            if (!0 === e) return n(s);
            let a, o, l;
            const c = [];
            if (1 === s.length) return o = s[0], l = new Fl, l.curves = o.curves, c.push(l), c;
            let h = !r(s[0].getPoints());
            h = t ? !h : h;
            const u = [], d = [];
            let p, m, f = [], g = 0;
            d[g] = void 0, f[g] = [];
            for(let e = 0, n = s.length; e < n; e++)o = s[e], p = o.getPoints(), a = r(p), a = t ? !a : a, a ? (!h && d[g] && g++, d[g] = {
                s: new Fl,
                p: p
            }, d[g].s.curves = o.curves, h && g++, f[g] = []) : f[g].push({
                h: o,
                p: p[0]
            });
            if (!d[0]) return n(s);
            if (d.length > 1) {
                let t = !1;
                const e = [];
                for(let t = 0, e = d.length; t < e; t++)u[t] = [];
                for(let n = 0, r = d.length; n < r; n++){
                    const r = f[n];
                    for(let s = 0; s < r.length; s++){
                        const a = r[s];
                        let o = !0;
                        for(let r = 0; r < d.length; r++)i(a.p, d[r].p) && (n !== r && e.push({
                            froms: n,
                            tos: r,
                            hole: s
                        }), o ? (o = !1, u[r].push(a)) : t = !0);
                        o && u[n].push(a);
                    }
                }
                e.length > 0 && (t || (f = u));
            }
            for(let t = 0, e = d.length; t < e; t++){
                l = d[t].s, c.push(l), m = f[t];
                for(let t = 0, e = m.length; t < e; t++)l.holes.push(m[t].h);
            }
            return c;
        }
    }
    class mc {
        constructor(t){
            this.type = "Font", this.data = t;
        }
        generateShapes(t, e = 100) {
            const n = [], i = function(t, e, n) {
                const i = Array.from(t), r = e / n.resolution, s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r, a = [];
                let o = 0, l = 0;
                for(let t = 0; t < i.length; t++){
                    const e = i[t];
                    if ("\n" === e) o = 0, l -= s;
                    else {
                        const t = fc(e, r, o, l, n);
                        o += t.offsetX, a.push(t.path);
                    }
                }
                return a;
            }(t, e, this.data);
            for(let t = 0, e = i.length; t < e; t++)Array.prototype.push.apply(n, i[t].toShapes());
            return n;
        }
    }
    function fc(t, e, n, i, r) {
        const s = r.glyphs[t] || r.glyphs["?"];
        if (!s) return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".");
        const a = new pc;
        let o, l, c, h, u, d, p, m;
        if (s.o) {
            const t = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
            for(let r = 0, s = t.length; r < s;)switch(t[r++]){
                case "m":
                    o = t[r++] * e + n, l = t[r++] * e + i, a.moveTo(o, l);
                    break;
                case "l":
                    o = t[r++] * e + n, l = t[r++] * e + i, a.lineTo(o, l);
                    break;
                case "q":
                    c = t[r++] * e + n, h = t[r++] * e + i, u = t[r++] * e + n, d = t[r++] * e + i, a.quadraticCurveTo(u, d, c, h);
                    break;
                case "b":
                    c = t[r++] * e + n, h = t[r++] * e + i, u = t[r++] * e + n, d = t[r++] * e + i, p = t[r++] * e + n, m = t[r++] * e + i, a.bezierCurveTo(u, d, p, m, c, h);
            }
        }
        return {
            offsetX: s.ha * e,
            path: a
        };
    }
    mc.prototype.isFont = !0;
    let gc;
    const vc = {
        getContext: function() {
            return void 0 === gc && (gc = new (window.AudioContext || window.webkitAudioContext)), gc;
        },
        setContext: function(t) {
            gc = t;
        }
    };
    class yc extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            const r = this, s = new Cl(this.manager);
            s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, function(n) {
                try {
                    const t = n.slice(0);
                    vc.getContext().decodeAudioData(t, function(t) {
                        e(t);
                    });
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t);
                }
            }, n, i);
        }
    }
    class xc extends ic {
        constructor(t, e, n = 1){
            super(void 0, n);
            const i = (new Qe).set(t), r = (new Qe).set(e), s = new Rt(i.r, i.g, i.b), a = new Rt(r.r, r.g, r.b), o = Math.sqrt(Math.PI), l = o * Math.sqrt(.75);
            this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
        }
    }
    xc.prototype.isHemisphereLightProbe = !0;
    class _c extends ic {
        constructor(t, e = 1){
            super(void 0, e);
            const n = (new Qe).set(t);
            this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
        }
    }
    _c.prototype.isAmbientLightProbe = !0;
    const bc = new ae, Mc = new ae;
    class wc {
        constructor(t = !0){
            this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
        }
        start() {
            this.startTime = Sc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
        }
        stop() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1;
        }
        getElapsedTime() {
            return this.getDelta(), this.elapsedTime;
        }
        getDelta() {
            let t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                const e = Sc();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
            }
            return t;
        }
    }
    function Sc() {
        return ("undefined" == typeof performance ? Date : performance).now();
    }
    const Tc = new Rt, Ec = new Lt, Ac = new Rt, Lc = new Rt;
    class Rc extends Pe {
        constructor(t){
            super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
        }
        getOutput() {
            return this.gain;
        }
        setNodeSource(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this;
        }
        setMediaElementSource(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
        }
        setMediaStreamSource(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
        }
        setBuffer(t) {
            return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
        }
        play(t = 0) {
            if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t;
            const e = this.context.createBufferSource();
            return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
        }
        pause() {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        stop() {
            if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        connect() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for(let t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput());
            } else this.source.connect(this.getOutput());
            return this._connected = !0, this;
        }
        disconnect() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for(let t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput());
            } else this.source.disconnect(this.getOutput());
            return this._connected = !1, this;
        }
        getFilters() {
            return this.filters;
        }
        setFilters(t) {
            return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
        }
        setDetune(t) {
            if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
        }
        getDetune() {
            return this.detune;
        }
        getFilter() {
            return this.getFilters()[0];
        }
        setFilter(t) {
            return this.setFilters(t ? [
                t
            ] : []);
        }
        setPlaybackRate(t) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        getPlaybackRate() {
            return this.playbackRate;
        }
        onEnded() {
            this.isPlaying = !1;
        }
        getLoop() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
        }
        setLoop(t) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        setLoopStart(t) {
            return this.loopStart = t, this;
        }
        setLoopEnd(t) {
            return this.loopEnd = t, this;
        }
        getVolume() {
            return this.gain.gain.value;
        }
        setVolume(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
        }
    }
    const Cc = new Rt, Pc = new Lt, Dc = new Rt, Ic = new Rt;
    class Nc {
        constructor(t, e = 2048){
            this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser);
        }
        getFrequencyData() {
            return this.analyser.getByteFrequencyData(this.data), this.data;
        }
        getAverageFrequency() {
            let t = 0;
            const e = this.getFrequencyData();
            for(let n = 0; n < e.length; n++)t += e[n];
            return t / e.length;
        }
    }
    class Bc {
        constructor(t, e, n){
            let i, r, s;
            switch(this.binding = t, this.valueSize = n, e){
                case "quaternion":
                    i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
                    break;
                case "string":
                case "bool":
                    i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
                    break;
                default:
                    i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
            }
            this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
        }
        accumulate(t, e) {
            const n = this.buffer, i = this.valueSize, r = t * i + i;
            let s = this.cumulativeWeight;
            if (0 === s) {
                for(let t = 0; t !== i; ++t)n[r + t] = n[t];
                s = e;
            } else {
                s += e;
                const t = e / s;
                this._mixBufferRegion(n, r, 0, t, i);
            }
            this.cumulativeWeight = s;
        }
        accumulateAdditive(t) {
            const e = this.buffer, n = this.valueSize, i = n * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t;
        }
        apply(t) {
            const e = this.valueSize, n = this.buffer, i = t * e + e, r = this.cumulativeWeight, s = this.cumulativeWeightAdditive, a = this.binding;
            if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
                const t = e * this._origIndex;
                this._mixBufferRegion(n, i, t, 1 - r, e);
            }
            s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
            for(let t = e, r = e + e; t !== r; ++t)if (n[t] !== n[t + e]) {
                a.setValue(n, i);
                break;
            }
        }
        saveOriginalState() {
            const t = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex;
            t.getValue(e, i);
            for(let t = n, r = i; t !== r; ++t)e[t] = e[i + t % n];
            this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
        }
        restoreOriginalState() {
            const t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t);
        }
        _setAdditiveIdentityNumeric() {
            const t = this._addIndex * this.valueSize, e = t + this.valueSize;
            for(let n = t; n < e; n++)this.buffer[n] = 0;
        }
        _setAdditiveIdentityQuaternion() {
            this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
        }
        _setAdditiveIdentityOther() {
            const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
            for(let n = 0; n < this.valueSize; n++)this.buffer[e + n] = this.buffer[t + n];
        }
        _select(t, e, n, i, r) {
            if (i >= .5) for(let i = 0; i !== r; ++i)t[e + i] = t[n + i];
        }
        _slerp(t, e, n, i) {
            Lt.slerpFlat(t, e, t, e, t, n, i);
        }
        _slerpAdditive(t, e, n, i, r) {
            const s = this._workIndex * r;
            Lt.multiplyQuaternionsFlat(t, s, t, e, t, n), Lt.slerpFlat(t, e, t, e, t, s, i);
        }
        _lerp(t, e, n, i, r) {
            const s = 1 - i;
            for(let a = 0; a !== r; ++a){
                const r = e + a;
                t[r] = t[r] * s + t[n + a] * i;
            }
        }
        _lerpAdditive(t, e, n, i, r) {
            for(let s = 0; s !== r; ++s){
                const r = e + s;
                t[r] = t[r] + t[n + s] * i;
            }
        }
    }
    const zc = "\\[\\]\\.:\\/", Fc = new RegExp("[\\[\\]\\.:\\/]", "g"), Oc = "[^\\[\\]\\.:\\/]", Hc = "[^" + zc.replace("\\.", "") + "]", Uc = /((?:WC+[\/:])*)/.source.replace("WC", Oc), Gc = /(WCOD+)?/.source.replace("WCOD", Hc), kc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Oc), Vc = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Oc), Wc = new RegExp("^" + Uc + Gc + kc + Vc + "$"), jc = [
        "material",
        "materials",
        "bones"
    ];
    class qc {
        constructor(t, e, n){
            this.path = e, this.parsedPath = n || qc.parseTrackName(e), this.node = qc.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
        static create(t, e, n) {
            return t && t.isAnimationObjectGroup ? new qc.Composite(t, e, n) : new qc(t, e, n);
        }
        static sanitizeNodeName(t) {
            return t.replace(/\s/g, "_").replace(Fc, "");
        }
        static parseTrackName(t) {
            const e = Wc.exec(t);
            if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            const n = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }, i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
                const t = n.nodeName.substring(i + 1);
                -1 !== jc.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t);
            }
            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return n;
        }
        static findNode(t, e) {
            if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
                const n = t.skeleton.getBoneByName(e);
                if (void 0 !== n) return n;
            }
            if (t.children) {
                const n = function(t) {
                    for(let i = 0; i < t.length; i++){
                        const r = t[i];
                        if (r.name === e || r.uuid === e) return r;
                        const s = n(r.children);
                        if (s) return s;
                    }
                    return null;
                }, i = n(t.children);
                if (i) return i;
            }
            return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
            t[e] = this.node[this.propertyName];
        }
        _getValue_array(t, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)t[e++] = n[i];
        }
        _getValue_arrayElement(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t, e) {
            this.resolvedProperty.toArray(t, e);
        }
        _setValue_direct(t, e) {
            this.targetObject[this.propertyName] = t[e];
        }
        _setValue_direct_setNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_array(t, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t[e++];
        }
        _setValue_array_setNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t[e++];
            this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_fromArray(t, e) {
            this.resolvedProperty.fromArray(t, e);
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _getValue_unbound(t, e) {
            this.bind(), this.getValue(t, e);
        }
        _setValue_unbound(t, e) {
            this.bind(), this.setValue(t, e);
        }
        bind() {
            let t = this.node;
            const e = this.parsedPath, n = e.objectName, i = e.propertyName;
            let r = e.propertyIndex;
            if (t || (t = qc.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            if (n) {
                let i = e.objectIndex;
                switch(n){
                    case "materials":
                        if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t = t.skeleton.bones;
                        for(let e = 0; e < t.length; e++)if (t[e].name === i) {
                            i = e;
                            break;
                        }
                        break;
                    default:
                        if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t = t[n];
                }
                if (void 0 !== i) {
                    if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                    t = t[i];
                }
            }
            const s = t[i];
            if (void 0 === s) {
                const n = e.nodeName;
                return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t);
            }
            let a = this.Versioning.None;
            this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
            let o = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === i) {
                    if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                    if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
                }
                o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
        }
        unbind() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
    }
    qc.Composite = class {
        constructor(t, e, n){
            const i = n || qc.parseTrackName(e);
            this._targetGroup = t, this._bindings = t.subscribe_(e, i);
        }
        getValue(t, e) {
            this.bind();
            const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
            void 0 !== i && i.getValue(t, e);
        }
        setValue(t, e) {
            const n = this._bindings;
            for(let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)n[i].setValue(t, e);
        }
        bind() {
            const t = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].bind();
        }
        unbind() {
            const t = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].unbind();
        }
    }, qc.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    }, qc.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    }, qc.prototype.GetterByBindingType = [
        qc.prototype._getValue_direct,
        qc.prototype._getValue_array,
        qc.prototype._getValue_arrayElement,
        qc.prototype._getValue_toArray
    ], qc.prototype.SetterByBindingTypeAndVersioning = [
        [
            qc.prototype._setValue_direct,
            qc.prototype._setValue_direct_setNeedsUpdate,
            qc.prototype._setValue_direct_setMatrixWorldNeedsUpdate
        ],
        [
            qc.prototype._setValue_array,
            qc.prototype._setValue_array_setNeedsUpdate,
            qc.prototype._setValue_array_setMatrixWorldNeedsUpdate
        ],
        [
            qc.prototype._setValue_arrayElement,
            qc.prototype._setValue_arrayElement_setNeedsUpdate,
            qc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
        ],
        [
            qc.prototype._setValue_fromArray,
            qc.prototype._setValue_fromArray_setNeedsUpdate,
            qc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
        ]
    ];
    class Xc {
        constructor(){
            this.uuid = ct(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            const t = {};
            this._indicesByUUID = t;
            for(let e = 0, n = arguments.length; e !== n; ++e)t[arguments[e].uuid] = e;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            const e = this;
            this.stats = {
                objects: {
                    get total () {
                        return e._objects.length;
                    },
                    get inUse () {
                        return this.total - e.nCachedObjects_;
                    }
                },
                get bindingsPerObject () {
                    return e._bindings.length;
                }
            };
        }
        add() {
            const t = this._objects, e = this._indicesByUUID, n = this._paths, i = this._parsedPaths, r = this._bindings, s = r.length;
            let a, o = t.length, l = this.nCachedObjects_;
            for(let c = 0, h = arguments.length; c !== h; ++c){
                const h = arguments[c], u = h.uuid;
                let d = e[u];
                if (void 0 === d) {
                    d = o++, e[u] = d, t.push(h);
                    for(let t = 0, e = s; t !== e; ++t)r[t].push(new qc(h, n[t], i[t]));
                } else if (d < l) {
                    a = t[d];
                    const o = --l, c = t[o];
                    e[c.uuid] = d, t[d] = c, e[u] = o, t[o] = h;
                    for(let t = 0, e = s; t !== e; ++t){
                        const e = r[t], s = e[o];
                        let a = e[d];
                        e[d] = s, void 0 === a && (a = new qc(h, n[t], i[t])), e[o] = a;
                    }
                } else t[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
            }
            this.nCachedObjects_ = l;
        }
        remove() {
            const t = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
            let r = this.nCachedObjects_;
            for(let s = 0, a = arguments.length; s !== a; ++s){
                const a = arguments[s], o = a.uuid, l = e[o];
                if (void 0 !== l && l >= r) {
                    const s = r++, c = t[s];
                    e[c.uuid] = l, t[l] = c, e[o] = s, t[s] = a;
                    for(let t = 0, e = i; t !== e; ++t){
                        const e = n[t], i = e[s], r = e[l];
                        e[l] = i, e[s] = r;
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        uncache() {
            const t = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
            let r = this.nCachedObjects_, s = t.length;
            for(let a = 0, o = arguments.length; a !== o; ++a){
                const o = arguments[a].uuid, l = e[o];
                if (void 0 !== l) {
                    if (delete e[o], l < r) {
                        const a = --r, o = t[a], c = --s, h = t[c];
                        e[o.uuid] = l, t[l] = o, e[h.uuid] = a, t[a] = h, t.pop();
                        for(let t = 0, e = i; t !== e; ++t){
                            const e = n[t], i = e[a], r = e[c];
                            e[l] = i, e[a] = r, e.pop();
                        }
                    } else {
                        const r = --s, a = t[r];
                        r > 0 && (e[a.uuid] = l), t[l] = a, t.pop();
                        for(let t = 0, e = i; t !== e; ++t){
                            const e = n[t];
                            e[l] = e[r], e.pop();
                        }
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        subscribe_(t, e) {
            const n = this._bindingsIndicesByPath;
            let i = n[t];
            const r = this._bindings;
            if (void 0 !== i) return r[i];
            const s = this._paths, a = this._parsedPaths, o = this._objects, l = o.length, c = this.nCachedObjects_, h = new Array(l);
            i = r.length, n[t] = i, s.push(t), a.push(e), r.push(h);
            for(let n = c, i = o.length; n !== i; ++n){
                const i = o[n];
                h[n] = new qc(i, t, e);
            }
            return h;
        }
        unsubscribe_(t) {
            const e = this._bindingsIndicesByPath, n = e[t];
            if (void 0 !== n) {
                const i = this._paths, r = this._parsedPaths, s = this._bindings, a = s.length - 1, o = s[a];
                e[t[a]] = n, s[n] = o, s.pop(), r[n] = r[a], r.pop(), i[n] = i[a], i.pop();
            }
        }
    }
    Xc.prototype.isAnimationObjectGroup = !0;
    class Yc {
        constructor(t, e, n = null, i = e.blendMode){
            this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
            const r = e.tracks, s = r.length, a = new Array(s), o = {
                endingStart: k,
                endingEnd: k
            };
            for(let t = 0; t !== s; ++t){
                const e = r[t].createInterpolant(null);
                a[t] = e, e.settings = o;
            }
            this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
        }
        play() {
            return this._mixer._activateAction(this), this;
        }
        stop() {
            return this._mixer._deactivateAction(this), this.reset();
        }
        reset() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
        }
        isRunning() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
        }
        isScheduled() {
            return this._mixer._isActiveAction(this);
        }
        startAt(t) {
            return this._startTime = t, this;
        }
        setLoop(t, e) {
            return this.loop = t, this.repetitions = e, this;
        }
        setEffectiveWeight(t) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
        }
        getEffectiveWeight() {
            return this._effectiveWeight;
        }
        fadeIn(t) {
            return this._scheduleFading(t, 0, 1);
        }
        fadeOut(t) {
            return this._scheduleFading(t, 1, 0);
        }
        crossFadeFrom(t, e, n) {
            if (t.fadeOut(e), this.fadeIn(e), n) {
                const n = this._clip.duration, i = t._clip.duration, r = i / n, s = n / i;
                t.warp(1, r, e), this.warp(s, 1, e);
            }
            return this;
        }
        crossFadeTo(t, e, n) {
            return t.crossFadeFrom(this, e, n);
        }
        stopFading() {
            const t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
        }
        setEffectiveTimeScale(t) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
        }
        getEffectiveTimeScale() {
            return this._effectiveTimeScale;
        }
        setDuration(t) {
            return this.timeScale = this._clip.duration / t, this.stopWarping();
        }
        syncWith(t) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
        }
        halt(t) {
            return this.warp(this._effectiveTimeScale, 0, t);
        }
        warp(t, e, n) {
            const i = this._mixer, r = i.time, s = this.timeScale;
            let a = this._timeScaleInterpolant;
            null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
            const o = a.parameterPositions, l = a.sampleValues;
            return o[0] = r, o[1] = r + n, l[0] = t / s, l[1] = e / s, this;
        }
        stopWarping() {
            const t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
        }
        getMixer() {
            return this._mixer;
        }
        getClip() {
            return this._clip;
        }
        getRoot() {
            return this._localRoot || this._mixer._root;
        }
        _update(t, e, n, i) {
            if (!this.enabled) return void this._updateWeight(t);
            const r = this._startTime;
            if (null !== r) {
                const i = (t - r) * n;
                if (i < 0 || 0 === n) return;
                this._startTime = null, e = n * i;
            }
            e *= this._updateTimeScale(t);
            const s = this._updateTime(e), a = this._updateWeight(t);
            if (a > 0) {
                const t = this._interpolants, e = this._propertyBindings;
                switch(this.blendMode){
                    case q:
                        for(let n = 0, i = t.length; n !== i; ++n)t[n].evaluate(s), e[n].accumulateAdditive(a);
                        break;
                    case j:
                    default:
                        for(let n = 0, r = t.length; n !== r; ++n)t[n].evaluate(s), e[n].accumulate(i, a);
                }
            }
        }
        _updateWeight(t) {
            let e = 0;
            if (this.enabled) {
                e = this.weight;
                const n = this._weightInterpolant;
                if (null !== n) {
                    const i = n.evaluate(t)[0];
                    e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1));
                }
            }
            return this._effectiveWeight = e, e;
        }
        _updateTimeScale(t) {
            let e = 0;
            if (!this.paused) {
                e = this.timeScale;
                const n = this._timeScaleInterpolant;
                if (null !== n) e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
            }
            return this._effectiveTimeScale = e, e;
        }
        _updateTime(t) {
            const e = this._clip.duration, n = this.loop;
            let i = this.time + t, r = this._loopCount;
            const s = 2202 === n;
            if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
            if (2200 === n) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t: {
                    if (i >= e) i = e;
                    else {
                        if (!(i < 0)) {
                            this.time = i;
                            break t;
                        }
                        i = 0;
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    });
                }
            } else {
                if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
                    const n = Math.floor(i / e);
                    i -= e * n, r += Math.abs(n);
                    const a = this.repetitions - r;
                    if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t > 0 ? 1 : -1
                    });
                    else {
                        if (1 === a) {
                            const e = t < 0;
                            this._setEndings(e, !e, s);
                        } else this._setEndings(!1, !1, s);
                        this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: n
                        });
                    }
                } else this.time = i;
                if (s && 1 == (1 & r)) return e - i;
            }
            return i;
        }
        _setEndings(t, e, n) {
            const i = this._interpolantSettings;
            n ? (i.endingStart = V, i.endingEnd = V) : (i.endingStart = t ? this.zeroSlopeAtStart ? V : k : W, i.endingEnd = e ? this.zeroSlopeAtEnd ? V : k : W);
        }
        _scheduleFading(t, e, n) {
            const i = this._mixer, r = i.time;
            let s = this._weightInterpolant;
            null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
            const a = s.parameterPositions, o = s.sampleValues;
            return a[0] = r, o[0] = e, a[1] = r + t, o[1] = n, this;
        }
    }
    class Jc extends rt {
        constructor(t){
            super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
        }
        _bindAction(t, e) {
            const n = t._localRoot || this._root, i = t._clip.tracks, r = i.length, s = t._propertyBindings, a = t._interpolants, o = n.uuid, l = this._bindingsByRootAndName;
            let c = l[o];
            void 0 === c && (c = {}, l[o] = c);
            for(let t = 0; t !== r; ++t){
                const r = i[t], l = r.name;
                let h = c[l];
                if (void 0 !== h) s[t] = h;
                else {
                    if (h = s[t], void 0 !== h) {
                        null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
                        continue;
                    }
                    const i = e && e._propertyBindings[t].binding.parsedPath;
                    h = new Bc(qc.create(n, l, i), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), s[t] = h;
                }
                a[t].resultBuffer = h.buffer;
            }
        }
        _activateAction(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    const e = (t._localRoot || this._root).uuid, n = t._clip.uuid, i = this._actionsByClip[n];
                    this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e);
                }
                const e = t._propertyBindings;
                for(let t = 0, n = e.length; t !== n; ++t){
                    const n = e[t];
                    0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
                }
                this._lendAction(t);
            }
        }
        _deactivateAction(t) {
            if (this._isActiveAction(t)) {
                const e = t._propertyBindings;
                for(let t = 0, n = e.length; t !== n; ++t){
                    const n = e[t];
                    0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n));
                }
                this._takeBackAction(t);
            }
        }
        _initMemoryManager() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            const t = this;
            this.stats = {
                actions: {
                    get total () {
                        return t._actions.length;
                    },
                    get inUse () {
                        return t._nActiveActions;
                    }
                },
                bindings: {
                    get total () {
                        return t._bindings.length;
                    },
                    get inUse () {
                        return t._nActiveBindings;
                    }
                },
                controlInterpolants: {
                    get total () {
                        return t._controlInterpolants.length;
                    },
                    get inUse () {
                        return t._nActiveControlInterpolants;
                    }
                }
            };
        }
        _isActiveAction(t) {
            const e = t._cacheIndex;
            return null !== e && e < this._nActiveActions;
        }
        _addInactiveAction(t, e, n) {
            const i = this._actions, r = this._actionsByClip;
            let s = r[e];
            if (void 0 === s) s = {
                knownActions: [
                    t
                ],
                actionByRoot: {}
            }, t._byClipCacheIndex = 0, r[e] = s;
            else {
                const e = s.knownActions;
                t._byClipCacheIndex = e.length, e.push(t);
            }
            t._cacheIndex = i.length, i.push(t), s.actionByRoot[n] = t;
        }
        _removeInactiveAction(t) {
            const e = this._actions, n = e[e.length - 1], i = t._cacheIndex;
            n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
            const r = t._clip.uuid, s = this._actionsByClip, a = s[r], o = a.knownActions, l = o[o.length - 1], c = t._byClipCacheIndex;
            l._byClipCacheIndex = c, o[c] = l, o.pop(), t._byClipCacheIndex = null;
            delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t);
        }
        _removeInactiveBindingsForAction(t) {
            const e = t._propertyBindings;
            for(let t = 0, n = e.length; t !== n; ++t){
                const n = e[t];
                0 == --n.referenceCount && this._removeInactiveBinding(n);
            }
        }
        _lendAction(t) {
            const e = this._actions, n = t._cacheIndex, i = this._nActiveActions++, r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
        }
        _takeBackAction(t) {
            const e = this._actions, n = t._cacheIndex, i = --this._nActiveActions, r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
        }
        _addInactiveBinding(t, e, n) {
            const i = this._bindingsByRootAndName, r = this._bindings;
            let s = i[e];
            void 0 === s && (s = {}, i[e] = s), s[n] = t, t._cacheIndex = r.length, r.push(t);
        }
        _removeInactiveBinding(t) {
            const e = this._bindings, n = t.binding, i = n.rootNode.uuid, r = n.path, s = this._bindingsByRootAndName, a = s[i], o = e[e.length - 1], l = t._cacheIndex;
            o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i];
        }
        _lendBinding(t) {
            const e = this._bindings, n = t._cacheIndex, i = this._nActiveBindings++, r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
        }
        _takeBackBinding(t) {
            const e = this._bindings, n = t._cacheIndex, i = --this._nActiveBindings, r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
        }
        _lendControlInterpolant() {
            const t = this._controlInterpolants, e = this._nActiveControlInterpolants++;
            let n = t[e];
            return void 0 === n && (n = new pl(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n;
        }
        _takeBackControlInterpolant(t) {
            const e = this._controlInterpolants, n = t.__cacheIndex, i = --this._nActiveControlInterpolants, r = e[i];
            t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r;
        }
        clipAction(t, e, n) {
            const i = e || this._root, r = i.uuid;
            let s = "string" == typeof t ? wl.findByName(i, t) : t;
            const a = null !== s ? s.uuid : t, o = this._actionsByClip[a];
            let l = null;
            if (void 0 === n && (n = null !== s ? s.blendMode : j), void 0 !== o) {
                const t = o.actionByRoot[r];
                if (void 0 !== t && t.blendMode === n) return t;
                l = o.knownActions[0], null === s && (s = l._clip);
            }
            if (null === s) return null;
            const c = new Yc(this, s, e, n);
            return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
        }
        existingAction(t, e) {
            const n = e || this._root, i = n.uuid, r = "string" == typeof t ? wl.findByName(n, t) : t, s = r ? r.uuid : t, a = this._actionsByClip[s];
            return void 0 !== a && a.actionByRoot[i] || null;
        }
        stopAllAction() {
            const t = this._actions;
            for(let e = this._nActiveActions - 1; e >= 0; --e)t[e].stop();
            return this;
        }
        update(t) {
            t *= this.timeScale;
            const e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), s = this._accuIndex ^= 1;
            for(let a = 0; a !== n; ++a)e[a]._update(i, t, r, s);
            const a = this._bindings, o = this._nActiveBindings;
            for(let t = 0; t !== o; ++t)a[t].apply(s);
            return this;
        }
        setTime(t) {
            this.time = 0;
            for(let t = 0; t < this._actions.length; t++)this._actions[t].time = 0;
            return this.update(t);
        }
        getRoot() {
            return this._root;
        }
        uncacheClip(t) {
            const e = this._actions, n = t.uuid, i = this._actionsByClip, r = i[n];
            if (void 0 !== r) {
                const t = r.knownActions;
                for(let n = 0, i = t.length; n !== i; ++n){
                    const i = t[n];
                    this._deactivateAction(i);
                    const r = i._cacheIndex, s = e[e.length - 1];
                    i._cacheIndex = null, i._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(i);
                }
                delete i[n];
            }
        }
        uncacheRoot(t) {
            const e = t.uuid, n = this._actionsByClip;
            for(const t in n){
                const i = n[t].actionByRoot[e];
                void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
            }
            const i = this._bindingsByRootAndName[e];
            if (void 0 !== i) for(const t in i){
                const e = i[t];
                e.restoreOriginalState(), this._removeInactiveBinding(e);
            }
        }
        uncacheAction(t, e) {
            const n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
        }
    }
    Jc.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
    class Zc {
        constructor(t){
            "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t;
        }
        clone() {
            return new Zc(void 0 === this.value.clone ? this.value : this.value.clone());
        }
    }
    class Qc extends Es {
        constructor(t, e, n = 1){
            super(t, e), this.meshPerAttribute = n;
        }
        copy(t) {
            return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
        }
        clone(t) {
            const e = super.clone(t);
            return e.meshPerAttribute = this.meshPerAttribute, e;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
        }
    }
    Qc.prototype.isInstancedInterleavedBuffer = !0;
    class Kc {
        constructor(t, e, n, i, r){
            this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0;
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setBuffer(t) {
            return this.buffer = t, this;
        }
        setType(t, e) {
            return this.type = t, this.elementSize = e, this;
        }
        setItemSize(t) {
            return this.itemSize = t, this;
        }
        setCount(t) {
            return this.count = t, this;
        }
    }
    Kc.prototype.isGLBufferAttribute = !0;
    function $c(t, e) {
        return t.distance - e.distance;
    }
    function th(t, e, n, i) {
        if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
            const i = t.children;
            for(let t = 0, r = i.length; t < r; t++)th(i[t], e, n, !0);
        }
    }
    const eh = new vt;
    class nh {
        constructor(t = new vt(1 / 0, 1 / 0), e = new vt(-1 / 0, -1 / 0)){
            this.min = t, this.max = e;
        }
        set(t, e) {
            return this.min.copy(t), this.max.copy(e), this;
        }
        setFromPoints(t) {
            this.makeEmpty();
            for(let e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]);
            return this;
        }
        setFromCenterAndSize(t, e) {
            const n = eh.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y;
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
            return eh.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this;
        }
        union(t) {
            return this.min.min(t.min), this.max.max(t.max), this;
        }
        translate(t) {
            return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max);
        }
    }
    nh.prototype.isBox2 = !0;
    const ih = new Rt, rh = new Rt;
    class sh {
        constructor(t = new Rt, e = new Rt){
            this.start = t, this.end = e;
        }
        set(t, e) {
            return this.start.copy(t), this.end.copy(e), this;
        }
        copy(t) {
            return this.start.copy(t.start), this.end.copy(t.end), this;
        }
        getCenter(t) {
            return t.addVectors(this.start, this.end).multiplyScalar(.5);
        }
        delta(t) {
            return t.subVectors(this.end, this.start);
        }
        distanceSq() {
            return this.start.distanceToSquared(this.end);
        }
        distance() {
            return this.start.distanceTo(this.end);
        }
        at(t, e) {
            return this.delta(e).multiplyScalar(t).add(this.start);
        }
        closestPointToPointParameter(t, e) {
            ih.subVectors(t, this.start), rh.subVectors(this.end, this.start);
            const n = rh.dot(rh);
            let i = rh.dot(ih) / n;
            return e && (i = ht(i, 0, 1)), i;
        }
        closestPointToPoint(t, e, n) {
            const i = this.closestPointToPointParameter(t, e);
            return this.delta(n).multiplyScalar(i).add(this.start);
        }
        applyMatrix4(t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
        }
        equals(t) {
            return t.start.equals(this.start) && t.end.equals(this.end);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class ah extends Pe {
        constructor(t){
            super(), this.material = t, this.render = function() {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0;
        }
    }
    ah.prototype.isImmediateRenderObject = !0;
    const oh = new Rt;
    const lh = new Rt, ch = new ae, hh = new ae;
    class uh extends xa {
        constructor(t){
            const e = dh(t), n = new wn, i = [], r = [], s = new Qe(0, 0, 1), a = new Qe(0, 1, 0);
            for(let t = 0; t < e.length; t++){
                const n = e[t];
                n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
            }
            n.setAttribute("position", new un(i, 3)), n.setAttribute("color", new un(r, 3));
            super(n, new ha({
                vertexColors: !0,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1,
                transparent: !0
            })), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
        }
        updateMatrixWorld(t) {
            const e = this.bones, n = this.geometry, i = n.getAttribute("position");
            hh.copy(this.root.matrixWorld).invert();
            for(let t = 0, n = 0; t < e.length; t++){
                const r = e[t];
                r.parent && r.parent.isBone && (ch.multiplyMatrices(hh, r.matrixWorld), lh.setFromMatrixPosition(ch), i.setXYZ(n, lh.x, lh.y, lh.z), ch.multiplyMatrices(hh, r.parent.matrixWorld), lh.setFromMatrixPosition(ch), i.setXYZ(n + 1, lh.x, lh.y, lh.z), n += 2);
            }
            n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t);
        }
    }
    function dh(t) {
        const e = [];
        t && t.isBone && e.push(t);
        for(let n = 0; n < t.children.length; n++)e.push.apply(e, dh(t.children[n]));
        return e;
    }
    const ph = new Rt, mh = new Qe, fh = new Qe;
    class gh extends xa {
        constructor(t = 10, e = 10, n = 4473924, i = 8947848){
            n = new Qe(n), i = new Qe(i);
            const r = e / 2, s = t / e, a = t / 2, o = [], l = [];
            for(let t = 0, c = 0, h = -a; t <= e; t++, h += s){
                o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
                const e = t === r ? n : i;
                e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3;
            }
            const c = new wn;
            c.setAttribute("position", new un(o, 3)), c.setAttribute("color", new un(l, 3));
            super(c, new ha({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "GridHelper";
        }
    }
    const vh = new Rt, yh = new Rt, xh = new Rt;
    const _h = new Rt, bh = new Yn;
    function Mh(t, e, n, i, r, s, a) {
        _h.set(r, s, a).unproject(i);
        const o = e[t];
        if (void 0 !== o) {
            const t = n.getAttribute("position");
            for(let e = 0, n = o.length; e < n; e++)t.setXYZ(o[e], _h.x, _h.y, _h.z);
        }
    }
    const wh = new Dt;
    class Sh extends xa {
        constructor(t, e = 16776960){
            const n = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), i = new Float32Array(24), r = new wn;
            r.setIndex(new en(n, 1)), r.setAttribute("position", new en(i, 3)), super(r, new ha({
                color: e,
                toneMapped: !1
            })), this.object = t, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
        }
        update(t) {
            if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && wh.setFromObject(this.object), wh.isEmpty()) return;
            const e = wh.min, n = wh.max, i = this.geometry.attributes.position, r = i.array;
            r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
        }
        setFromObject(t) {
            return this.object = t, this.update(), this;
        }
        copy(t) {
            return xa.prototype.copy.call(this, t), this.object = t.object, this;
        }
    }
    const Th = new Rt;
    let Eh, Ah;
    class Lh extends xa {
        constructor(t = 1){
            const e = [
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                0,
                t
            ], n = new wn;
            n.setAttribute("position", new un(e, 3)), n.setAttribute("color", new un([
                1,
                0,
                0,
                1,
                .6,
                0,
                0,
                1,
                0,
                .6,
                1,
                0,
                0,
                0,
                1,
                0,
                .6,
                1
            ], 3));
            super(n, new ha({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "AxesHelper";
        }
        setColors(t, e, n) {
            const i = new Qe, r = this.geometry.attributes.color.array;
            return i.set(t), i.toArray(r, 0), i.toArray(r, 3), i.set(e), i.toArray(r, 6), i.toArray(r, 9), i.set(n), i.toArray(r, 12), i.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }
    const Rh = new Float32Array(1), Ch = new Int32Array(Rh.buffer);
    const Ph = Math.pow(2, 8), Dh = [
        .125,
        .215,
        .35,
        .446,
        .526,
        .582
    ], Ih = 5 + Dh.length, Nh = 20, Bh = {
        [X]: 0,
        [Y]: 1,
        [Z]: 2,
        [Q]: 3,
        [K]: 4,
        [$]: 5,
        [J]: 6
    }, zh = new Ke({
        side: 1,
        depthWrite: !1,
        depthTest: !1
    }), Fh = new Gn(new Vn, zh), Oh = new Ql, { _lodPlanes: Hh, _sizeLods: Uh, _sigmas: Gh } = Jh(), kh = new Qe;
    let Vh = null;
    const Wh = (1 + Math.sqrt(5)) / 2, jh = 1 / Wh, qh = [
        new Rt(1, 1, 1),
        new Rt(-1, 1, 1),
        new Rt(1, 1, -1),
        new Rt(-1, 1, -1),
        new Rt(0, Wh, jh),
        new Rt(0, Wh, -jh),
        new Rt(jh, 0, Wh),
        new Rt(-jh, 0, Wh),
        new Rt(Wh, jh, 0),
        new Rt(-Wh, jh, 0)
    ];
    function Xh(t) {
        const e = Math.max(t.r, t.g, t.b), n = Math.min(Math.max(Math.ceil(Math.log2(e)), -128), 127);
        t.multiplyScalar(Math.pow(2, -n));
        return (n + 128) / 255;
    }
    function Yh(t) {
        return void 0 !== t && t.type === x && (t.encoding === X || t.encoding === Y || t.encoding === J);
    }
    function Jh() {
        const t = [], e = [], n = [];
        let i = 8;
        for(let r = 0; r < Ih; r++){
            const s = Math.pow(2, i);
            e.push(s);
            let a = 1 / s;
            r > 4 ? a = Dh[r - 8 + 4 - 1] : 0 == r && (a = 0), n.push(a);
            const o = 1 / (s - 1), l = -o / 2, c = 1 + o / 2, h = [
                l,
                l,
                c,
                l,
                c,
                c,
                l,
                l,
                c,
                c,
                l,
                c
            ], u = 6, d = 6, p = 3, m = 2, f = 1, g = new Float32Array(p * d * u), v = new Float32Array(m * d * u), y = new Float32Array(f * d * u);
            for(let t = 0; t < u; t++){
                const e = t % 3 * 2 / 3 - 1, n = t > 2 ? 0 : -1, i = [
                    e,
                    n,
                    0,
                    e + 2 / 3,
                    n,
                    0,
                    e + 2 / 3,
                    n + 1,
                    0,
                    e,
                    n,
                    0,
                    e + 2 / 3,
                    n + 1,
                    0,
                    e,
                    n + 1,
                    0
                ];
                g.set(i, p * d * t), v.set(h, m * d * t);
                const r = [
                    t,
                    t,
                    t,
                    t,
                    t,
                    t
                ];
                y.set(r, f * d * t);
            }
            const x = new wn;
            x.setAttribute("position", new en(g, p)), x.setAttribute("uv", new en(v, m)), x.setAttribute("faceIndex", new en(y, f)), t.push(x), i > 4 && i--;
        }
        return {
            _lodPlanes: t,
            _sizeLods: e,
            _sigmas: n
        };
    }
    function Zh(t) {
        const e = new Tt(3 * Ph, 3 * Ph, t);
        return e.texture.mapping = l, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e;
    }
    function Qh(t, e, n, i, r) {
        t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
    }
    function Kh() {
        const t = new vt(1, 1);
        return new tl({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                texelSize: {
                    value: t
                },
                inputEncoding: {
                    value: Bh[3e3]
                },
                outputEncoding: {
                    value: Bh[3e3]
                }
            },
            vertexShader: tu(),
            fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t${eu()}\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function $h() {
        return new tl({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                inputEncoding: {
                    value: Bh[3e3]
                },
                outputEncoding: {
                    value: Bh[3e3]
                }
            },
            vertexShader: tu(),
            fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t${eu()}\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function tu() {
        return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute vec3 position;\n		attribute vec2 uv;\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
    }
    function eu() {
        return "\n\n		uniform int inputEncoding;\n		uniform int outputEncoding;\n\n		#include <encodings_pars_fragment>\n\n		vec4 inputTexelToLinear( vec4 value ) {\n\n			if ( inputEncoding == 0 ) {\n\n				return value;\n\n			} else if ( inputEncoding == 1 ) {\n\n				return sRGBToLinear( value );\n\n			} else if ( inputEncoding == 2 ) {\n\n				return RGBEToLinear( value );\n\n			} else if ( inputEncoding == 3 ) {\n\n				return RGBMToLinear( value, 7.0 );\n\n			} else if ( inputEncoding == 4 ) {\n\n				return RGBMToLinear( value, 16.0 );\n\n			} else if ( inputEncoding == 5 ) {\n\n				return RGBDToLinear( value, 256.0 );\n\n			} else {\n\n				return GammaToLinear( value, 2.2 );\n\n			}\n\n		}\n\n		vec4 linearToOutputTexel( vec4 value ) {\n\n			if ( outputEncoding == 0 ) {\n\n				return value;\n\n			} else if ( outputEncoding == 1 ) {\n\n				return LinearTosRGB( value );\n\n			} else if ( outputEncoding == 2 ) {\n\n				return LinearToRGBE( value );\n\n			} else if ( outputEncoding == 3 ) {\n\n				return LinearToRGBM( value, 7.0 );\n\n			} else if ( outputEncoding == 4 ) {\n\n				return LinearToRGBM( value, 16.0 );\n\n			} else if ( outputEncoding == 5 ) {\n\n				return LinearToRGBD( value, 256.0 );\n\n			} else {\n\n				return LinearToGamma( value, 2.2 );\n\n			}\n\n		}\n\n		vec4 envMapTexelToLinear( vec4 color ) {\n\n			return inputTexelToLinear( color );\n\n		}\n	";
    }
    ka.create = function(t, e) {
        return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(ka.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t;
    }, zl.prototype.fromPoints = function(t) {
        return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t);
    }, gh.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
    }, uh.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
    }, Ll.prototype.extractUrlBase = function(t) {
        return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), sc.extractUrlBase(t);
    }, Ll.Handlers = {
        add: function() {
            console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
        },
        get: function() {
            console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
        }
    }, nh.prototype.center = function(t) {
        return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t);
    }, nh.prototype.empty = function() {
        return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }, nh.prototype.isIntersectionBox = function(t) {
        return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
    }, nh.prototype.size = function(t) {
        return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t);
    }, Dt.prototype.center = function(t) {
        return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t);
    }, Dt.prototype.empty = function() {
        return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }, Dt.prototype.isIntersectionBox = function(t) {
        return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
    }, Dt.prototype.isIntersectionSphere = function(t) {
        return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
    }, Dt.prototype.size = function(t) {
        return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t);
    }, Qt.prototype.empty = function() {
        return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
    }, ai.prototype.setFromMatrix = function(t) {
        return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t);
    }, sh.prototype.center = function(t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t);
    }, yt.prototype.flattenToArrayOffset = function(t, e) {
        return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
    }, yt.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
    }, yt.prototype.multiplyVector3Array = function() {
        console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    }, yt.prototype.applyToBufferAttribute = function(t) {
        return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
    }, yt.prototype.applyToVector3Array = function() {
        console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    }, yt.prototype.getInverse = function(t) {
        return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
    }, ae.prototype.extractPosition = function(t) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t);
    }, ae.prototype.flattenToArrayOffset = function(t, e) {
        return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
    }, ae.prototype.getPosition = function() {
        return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new Rt).setFromMatrixColumn(this, 3);
    }, ae.prototype.setRotationFromQuaternion = function(t) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t);
    }, ae.prototype.multiplyToArray = function() {
        console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    }, ae.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    }, ae.prototype.multiplyVector4 = function(t) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    }, ae.prototype.multiplyVector3Array = function() {
        console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    }, ae.prototype.rotateAxis = function(t) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this);
    }, ae.prototype.crossVector = function(t) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    }, ae.prototype.translate = function() {
        console.error("THREE.Matrix4: .translate() has been removed.");
    }, ae.prototype.rotateX = function() {
        console.error("THREE.Matrix4: .rotateX() has been removed.");
    }, ae.prototype.rotateY = function() {
        console.error("THREE.Matrix4: .rotateY() has been removed.");
    }, ae.prototype.rotateZ = function() {
        console.error("THREE.Matrix4: .rotateZ() has been removed.");
    }, ae.prototype.rotateByAxis = function() {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    }, ae.prototype.applyToBufferAttribute = function(t) {
        return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
    }, ae.prototype.applyToVector3Array = function() {
        console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    }, ae.prototype.makeFrustum = function(t, e, n, i, r, s) {
        return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, s);
    }, ae.prototype.getInverse = function(t) {
        return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
    }, ii.prototype.isIntersectionLine = function(t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t);
    }, Lt.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this);
    }, Lt.prototype.inverse = function() {
        return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
    }, se.prototype.isIntersectionBox = function(t) {
        return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
    }, se.prototype.isIntersectionPlane = function(t) {
        return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t);
    }, se.prototype.isIntersectionSphere = function(t) {
        return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
    }, ke.prototype.area = function() {
        return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
    }, ke.prototype.barycoordFromPoint = function(t, e) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e);
    }, ke.prototype.midpoint = function(t) {
        return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t);
    }, ke.prototypenormal = function(t) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t);
    }, ke.prototype.plane = function(t) {
        return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t);
    }, ke.barycoordFromPoint = function(t, e, n, i, r) {
        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), ke.getBarycoord(t, e, n, i, r);
    }, ke.normal = function(t, e, n, i) {
        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), ke.getNormal(t, e, n, i);
    }, Fl.prototype.extractAllPoints = function(t) {
        return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t);
    }, Fl.prototype.extrude = function(t) {
        return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Fo(this, t);
    }, Fl.prototype.makeGeometry = function(t) {
        return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Wo(this, t);
    }, vt.prototype.fromAttribute = function(t, e, n) {
        return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
    }, vt.prototype.distanceToManhattan = function(t) {
        return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
    }, vt.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }, Rt.prototype.setEulerFromRotationMatrix = function() {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
    }, Rt.prototype.setEulerFromQuaternion = function() {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
    }, Rt.prototype.getPositionFromMatrix = function(t) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t);
    }, Rt.prototype.getScaleFromMatrix = function(t) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t);
    }, Rt.prototype.getColumnFromMatrix = function(t, e) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t);
    }, Rt.prototype.applyProjection = function(t) {
        return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t);
    }, Rt.prototype.fromAttribute = function(t, e, n) {
        return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
    }, Rt.prototype.distanceToManhattan = function(t) {
        return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
    }, Rt.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }, St.prototype.fromAttribute = function(t, e, n) {
        return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
    }, St.prototype.lengthManhattan = function() {
        return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
    }, Pe.prototype.getChildByName = function(t) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t);
    }, Pe.prototype.renderDepth = function() {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
    }, Pe.prototype.translate = function(t, e) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t);
    }, Pe.prototype.getWorldRotation = function() {
        console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
    }, Pe.prototype.applyMatrix = function(t) {
        return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
    }, Object.defineProperties(Pe.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t;
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
            }
        }
    }), Gn.prototype.setDrawMode = function() {
        console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }, Object.defineProperties(Gn.prototype, {
        drawMode: {
            get: function() {
                return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
            },
            set: function() {
                console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
            }
        }
    }), $s.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.");
    }, Jn.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t);
    }, Object.defineProperties(Ol.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.");
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t;
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t;
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t;
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t;
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t;
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t;
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t;
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t;
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.");
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t;
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t;
            }
        }
    }), Object.defineProperties(en.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
            }
        },
        dynamic: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === nt;
            },
            set: function() {
                console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(nt);
            }
        }
    }), en.prototype.setDynamic = function(t) {
        return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? nt : et), this;
    }, en.prototype.copyIndicesArray = function() {
        console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
    }, en.prototype.setArray = function() {
        console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }, wn.prototype.addIndex = function(t) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t);
    }, wn.prototype.addAttribute = function(t, e) {
        return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new en(arguments[1], arguments[2])));
    }, wn.prototype.addDrawCall = function(t, e, n) {
        void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e);
    }, wn.prototype.clearDrawCalls = function() {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
    }, wn.prototype.computeOffsets = function() {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    }, wn.prototype.removeAttribute = function(t) {
        return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t);
    }, wn.prototype.applyMatrix = function(t) {
        return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
    }, Object.defineProperties(wn.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
            }
        }
    }), Es.prototype.setDynamic = function(t) {
        return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? nt : et), this;
    }, Es.prototype.setArray = function() {
        console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }, Fo.prototype.getArrays = function() {
        console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
    }, Fo.prototype.addShapeList = function() {
        console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
    }, Fo.prototype.addShape = function() {
        console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
    }, Ts.prototype.dispose = function() {
        console.error("THREE.Scene: .dispose() has been removed.");
    }, Zc.prototype.onUpdate = function() {
        return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
    }, Object.defineProperties(We.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.");
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.");
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.");
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.");
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."), new Qe;
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t;
            }
        },
        stencilMask: {
            get: function() {
                return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t;
            }
        }
    }), Object.defineProperties(Xn.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t;
            }
        }
    }), bs.prototype.clearTarget = function(t, e, n, i) {
        console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i);
    }, bs.prototype.animate = function(t) {
        console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t);
    }, bs.prototype.getCurrentRenderTarget = function() {
        return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
    }, bs.prototype.getMaxAnisotropy = function() {
        return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
    }, bs.prototype.getPrecision = function() {
        return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
    }, bs.prototype.resetGLState = function() {
        return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
    }, bs.prototype.supportsFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
    }, bs.prototype.supportsHalfFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
    }, bs.prototype.supportsStandardDerivatives = function() {
        return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
    }, bs.prototype.supportsCompressedTextureS3TC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
    }, bs.prototype.supportsCompressedTexturePVRTC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
    }, bs.prototype.supportsBlendMinMax = function() {
        return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
    }, bs.prototype.supportsVertexTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
    }, bs.prototype.supportsInstancedArrays = function() {
        return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
    }, bs.prototype.enableScissorTest = function(t) {
        console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t);
    }, bs.prototype.initMaterial = function() {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    }, bs.prototype.addPrePlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    }, bs.prototype.addPostPlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    }, bs.prototype.updateShadowMap = function() {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    }, bs.prototype.setFaceCulling = function() {
        console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    }, bs.prototype.allocTextureUnit = function() {
        console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
    }, bs.prototype.setTexture = function() {
        console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
    }, bs.prototype.setTexture2D = function() {
        console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
    }, bs.prototype.setTextureCube = function() {
        console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
    }, bs.prototype.getActiveMipMapLevel = function() {
        return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
    }, Object.defineProperties(bs.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t;
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t;
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
            }
        },
        context: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
            }
        },
        vr: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
            }
        },
        gammaInput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
            }
        },
        gammaOutput: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? Y : X;
            }
        },
        toneMappingWhitePoint: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
            }
        }
    }), Object.defineProperties(us.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
            }
        }
    }), Object.defineProperties(Tt.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t;
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t;
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t;
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t;
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t;
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t;
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t;
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t;
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t;
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t;
            }
        }
    }), Rc.prototype.load = function(t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        const e = this;
        return (new yc).load(t, function(t) {
            e.setBuffer(t);
        }), this;
    }, Nc.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
    }, Qn.prototype.updateCubeMap = function(t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e);
    }, Qn.prototype.clear = function(t, e, n, i) {
        return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i);
    }, _t.crossOrigin = void 0, _t.loadTexture = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        const r = new Nl;
        r.setCrossOrigin(this.crossOrigin);
        const s = r.load(t, n, void 0, i);
        return e && (s.mapping = e), s;
    }, _t.loadTextureCube = function(t, e, n, i) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        const r = new Dl;
        r.setCrossOrigin(this.crossOrigin);
        const s = r.load(t, n, void 0, i);
        return e && (s.mapping = e), s;
    }, _t.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
    }, _t.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
    };
    const nu = {
        createMultiMaterialObject: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
        },
        detach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
        },
        attach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
        }
    };
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: e
        }
    })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e), t.ACESFilmicToneMapping = 4, t.AddEquation = n, t.AddOperation = 2, t.AdditiveAnimationBlendMode = q, t.AdditiveBlending = 2, t.AlphaFormat = 1021, t.AlwaysDepth = 1, t.AlwaysStencilFunc = 519, t.AmbientLight = tc, t.AmbientLightProbe = _c, t.AnimationClip = wl, t.AnimationLoader = class extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            const r = this, s = new Cl(this.manager);
            s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, function(n) {
                try {
                    e(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t);
                }
            }, n, i);
        }
        parse(t) {
            const e = [];
            for(let n = 0; n < t.length; n++){
                const i = wl.parse(t[n]);
                e.push(i);
            }
            return e;
        }
    }, t.AnimationMixer = Jc, t.AnimationObjectGroup = Xc, t.AnimationUtils = hl, t.ArcCurve = Wa, t.ArrayCamera = fs, t.ArrowHelper = class extends Pe {
        constructor(t = new Rt(0, 0, 1), e = new Rt(0, 0, 0), n = 1, i = 16776960, r = .2 * n, s = .2 * r){
            super(), this.type = "ArrowHelper", void 0 === Eh && (Eh = new wn, Eh.setAttribute("position", new un([
                0,
                0,
                0,
                0,
                1,
                0
            ], 3)), Ah = new Ia(0, .5, 1, 5, 1), Ah.translate(0, -0.5, 0)), this.position.copy(e), this.line = new ga(Eh, new ha({
                color: i,
                toneMapped: !1
            })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Gn(Ah, new Ke({
                color: i,
                toneMapped: !1
            })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, s);
        }
        setDirection(t) {
            if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);
            else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
            else {
                Th.set(t.z, 0, -t.x).normalize();
                const e = Math.acos(t.y);
                this.quaternion.setFromAxisAngle(Th, e);
            }
        }
        setLength(t, e = .2 * t, n = .2 * e) {
            this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
        }
        setColor(t) {
            this.line.material.color.set(t), this.cone.material.color.set(t);
        }
        copy(t) {
            return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
        }
    }, t.Audio = Rc, t.AudioAnalyser = Nc, t.AudioContext = vc, t.AudioListener = class extends Pe {
        constructor(){
            super(), this.type = "AudioListener", this.context = vc.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new wc;
        }
        getInput() {
            return this.gain;
        }
        removeFilter() {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
        }
        getFilter() {
            return this.filter;
        }
        setFilter(t) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
        }
        getMasterVolume() {
            return this.gain.gain.value;
        }
        setMasterVolume(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t);
            const e = this.context.listener, n = this.up;
            if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Tc, Ec, Ac), Lc.set(0, 0, -1).applyQuaternion(Ec), e.positionX) {
                const t = this.context.currentTime + this.timeDelta;
                e.positionX.linearRampToValueAtTime(Tc.x, t), e.positionY.linearRampToValueAtTime(Tc.y, t), e.positionZ.linearRampToValueAtTime(Tc.z, t), e.forwardX.linearRampToValueAtTime(Lc.x, t), e.forwardY.linearRampToValueAtTime(Lc.y, t), e.forwardZ.linearRampToValueAtTime(Lc.z, t), e.upX.linearRampToValueAtTime(n.x, t), e.upY.linearRampToValueAtTime(n.y, t), e.upZ.linearRampToValueAtTime(n.z, t);
            } else e.setPosition(Tc.x, Tc.y, Tc.z), e.setOrientation(Lc.x, Lc.y, Lc.z, n.x, n.y, n.z);
        }
    }, t.AudioLoader = yc, t.AxesHelper = Lh, t.AxisHelper = function(t) {
        return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new Lh(t);
    }, t.BackSide = 1, t.BasicDepthPacking = 3200, t.BasicShadowMap = 0, t.BinaryTextureLoader = function(t) {
        return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new Il(t);
    }, t.Bone = ta, t.BooleanKeyframeTrack = gl, t.BoundingBoxHelper = function(t, e) {
        return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new Sh(t, e);
    }, t.Box2 = nh, t.Box3 = Dt, t.Box3Helper = class extends xa {
        constructor(t, e = 16776960){
            const n = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), i = new wn;
            i.setIndex(new en(n, 1)), i.setAttribute("position", new un([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                -1
            ], 3)), super(i, new ha({
                color: e,
                toneMapped: !1
            })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
        }
        updateMatrixWorld(t) {
            const e = this.box;
            e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(t));
        }
    }, t.BoxBufferGeometry = Vn, t.BoxGeometry = Vn, t.BoxHelper = Sh, t.BufferAttribute = en, t.BufferGeometry = wn, t.BufferGeometryLoader = lc, t.ByteType = 1010, t.Cache = Tl, t.Camera = Yn, t.CameraHelper = class extends xa {
        constructor(t){
            const e = new wn, n = new ha({
                color: 16777215,
                vertexColors: !0,
                toneMapped: !1
            }), i = [], r = [], s = {}, a = new Qe(16755200), o = new Qe(16711680), l = new Qe(43775), c = new Qe(16777215), h = new Qe(3355443);
            function u(t, e, n) {
                d(t, n), d(e, n);
            }
            function d(t, e) {
                i.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(i.length / 3 - 1);
            }
            u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", o), u("p", "n2", o), u("p", "n3", o), u("p", "n4", o), u("u1", "u2", l), u("u2", "u3", l), u("u3", "u1", l), u("c", "t", c), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), e.setAttribute("position", new un(i, 3)), e.setAttribute("color", new un(r, 3)), super(e, n), this.type = "CameraHelper", this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update();
        }
        update() {
            const t = this.geometry, e = this.pointMap;
            bh.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), Mh("c", e, t, bh, 0, 0, -1), Mh("t", e, t, bh, 0, 0, 1), Mh("n1", e, t, bh, -1, -1, -1), Mh("n2", e, t, bh, 1, -1, -1), Mh("n3", e, t, bh, -1, 1, -1), Mh("n4", e, t, bh, 1, 1, -1), Mh("f1", e, t, bh, -1, -1, 1), Mh("f2", e, t, bh, 1, -1, 1), Mh("f3", e, t, bh, -1, 1, 1), Mh("f4", e, t, bh, 1, 1, 1), Mh("u1", e, t, bh, .7, 1.1, -1), Mh("u2", e, t, bh, -0.7, 1.1, -1), Mh("u3", e, t, bh, 0, 2, -1), Mh("cf1", e, t, bh, -1, 0, 1), Mh("cf2", e, t, bh, 1, 0, 1), Mh("cf3", e, t, bh, 0, -1, 1), Mh("cf4", e, t, bh, 0, 1, 1), Mh("cn1", e, t, bh, -1, 0, -1), Mh("cn2", e, t, bh, 1, 0, -1), Mh("cn3", e, t, bh, 0, -1, -1), Mh("cn4", e, t, bh, 0, 1, -1), t.getAttribute("position").needsUpdate = !0;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been removed");
    }, t.CanvasTexture = Ca, t.CatmullRomCurve3 = Za, t.CineonToneMapping = 3, t.CircleBufferGeometry = Da, t.CircleGeometry = Da, t.ClampToEdgeWrapping = u, t.Clock = wc, t.Color = Qe, t.ColorKeyframeTrack = vl, t.CompressedTexture = Ra, t.CompressedTextureLoader = class extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            const r = this, s = [], a = new Ra, o = new Cl(this.manager);
            o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
            let l = 0;
            function c(c) {
                o.load(t[c], function(t) {
                    const n = r.parse(t, !0);
                    s[c] = {
                        width: n.width,
                        height: n.height,
                        format: n.format,
                        mipmaps: n.mipmaps
                    }, l += 1, 6 === l && (1 === n.mipmapCount && (a.minFilter = g), a.image = s, a.format = n.format, a.needsUpdate = !0, e && e(a));
                }, n, i);
            }
            if (Array.isArray(t)) for(let e = 0, n = t.length; e < n; ++e)c(e);
            else o.load(t, function(t) {
                const n = r.parse(t, !0);
                if (n.isCubemap) {
                    const t = n.mipmaps.length / n.mipmapCount;
                    for(let e = 0; e < t; e++){
                        s[e] = {
                            mipmaps: []
                        };
                        for(let t = 0; t < n.mipmapCount; t++)s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]), s[e].format = n.format, s[e].width = n.width, s[e].height = n.height;
                    }
                    a.image = s;
                } else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (a.minFilter = g), a.format = n.format, a.needsUpdate = !0, e && e(a);
            }, n, i);
            return a;
        }
    }, t.ConeBufferGeometry = Na, t.ConeGeometry = Na, t.CubeCamera = Qn, t.CubeReflectionMapping = r, t.CubeRefractionMapping = s, t.CubeTexture = Kn, t.CubeTextureLoader = Dl, t.CubeUVReflectionMapping = l, t.CubeUVRefractionMapping = c, t.CubicBezierCurve = to, t.CubicBezierCurve3 = eo, t.CubicInterpolant = dl, t.CullFaceBack = 1, t.CullFaceFront = 2, t.CullFaceFrontBack = 3, t.CullFaceNone = 0, t.Curve = ka, t.CurvePath = Bl, t.CustomBlending = 5, t.CustomToneMapping = 5, t.CylinderBufferGeometry = Ia, t.CylinderGeometry = Ia, t.Cylindrical = class {
        constructor(t = 1, e = 0, n = 0){
            return this.radius = t, this.theta = e, this.y = n, this;
        }
        set(t, e, n) {
            return this.radius = t, this.theta = e, this.y = n, this;
        }
        copy(t) {
            return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this;
        }
        setFromVector3(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z);
        }
        setFromCartesianCoords(t, e, n) {
            return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t.DataTexture = ea, t.DataTexture2DArray = Ai, t.DataTexture3D = Li, t.DataTextureLoader = Il, t.DataUtils = class {
        static toHalfFloat(t) {
            Rh[0] = t;
            const e = Ch[0];
            let n = e >> 16 & 32768, i = e >> 12 & 2047;
            const r = e >> 23 & 255;
            return r < 103 ? n : r > 142 ? (n |= 31744, n |= (255 == r ? 0 : 1) && 8388607 & e, n) : r < 113 ? (i |= 2048, n |= (i >> 114 - r) + (i >> 113 - r & 1), n) : (n |= r - 112 << 10 | i >> 1, n += 1 & i, n);
        }
    }, t.DecrementStencilOp = 7683, t.DecrementWrapStencilOp = 34056, t.DefaultLoadingManager = Al, t.DepthFormat = A, t.DepthStencilFormat = L, t.DepthTexture = Pa, t.DirectionalLight = $l, t.DirectionalLightHelper = class extends Pe {
        constructor(t, e, n){
            super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1);
            let i = new wn;
            i.setAttribute("position", new un([
                -e,
                e,
                0,
                e,
                e,
                0,
                e,
                -e,
                0,
                -e,
                -e,
                0,
                -e,
                e,
                0
            ], 3));
            const r = new ha({
                fog: !1,
                toneMapped: !1
            });
            this.lightPlane = new ga(i, r), this.add(this.lightPlane), i = new wn, i.setAttribute("position", new un([
                0,
                0,
                0,
                0,
                0,
                1
            ], 3)), this.targetLine = new ga(i, r), this.add(this.targetLine), this.update();
        }
        dispose() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
        }
        update() {
            vh.setFromMatrixPosition(this.light.matrixWorld), yh.setFromMatrixPosition(this.light.target.matrixWorld), xh.subVectors(yh, vh), this.lightPlane.lookAt(yh), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(yh), this.targetLine.scale.z = xh.length();
        }
    }, t.DiscreteInterpolant = ml, t.DodecahedronBufferGeometry = za, t.DodecahedronGeometry = za, t.DoubleSide = 2, t.DstAlphaFactor = 206, t.DstColorFactor = 208, t.DynamicBufferAttribute = function(t, e) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."), new en(t, e).setUsage(nt);
    }, t.DynamicCopyUsage = 35050, t.DynamicDrawUsage = nt, t.DynamicReadUsage = 35049, t.EdgesGeometry = Ga, t.EdgesHelper = function(t, e) {
        return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new xa(new Ga(t.geometry), new ha({
            color: void 0 !== e ? e : 16777215
        }));
    }, t.EllipseCurve = Va, t.EqualDepth = 4, t.EqualStencilFunc = 514, t.EquirectangularReflectionMapping = a, t.EquirectangularRefractionMapping = o, t.Euler = ge, t.EventDispatcher = rt, t.ExtrudeBufferGeometry = Fo, t.ExtrudeGeometry = Fo, t.FaceColors = 1, t.FileLoader = Cl, t.FlatShading = 1, t.Float16BufferAttribute = hn, t.Float32Attribute = function(t, e) {
        return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new un(t, e);
    }, t.Float32BufferAttribute = un, t.Float64Attribute = function(t, e) {
        return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new dn(t, e);
    }, t.Float64BufferAttribute = dn, t.FloatType = M, t.Fog = Ss, t.FogExp2 = ws, t.Font = mc, t.FontLoader = class extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            const r = this, s = new Cl(this.manager);
            s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function(t) {
                let n;
                try {
                    n = JSON.parse(t);
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2));
                }
                const i = r.parse(n);
                e && e(i);
            }, n, i);
        }
        parse(t) {
            return new mc(t);
        }
    }, t.FrontSide = 0, t.Frustum = ai, t.GLBufferAttribute = Kc, t.GLSL1 = "100", t.GLSL3 = it, t.GammaEncoding = J, t.GreaterDepth = 6, t.GreaterEqualDepth = 5, t.GreaterEqualStencilFunc = 518, t.GreaterStencilFunc = 516, t.GridHelper = gh, t.Group = gs, t.HalfFloatType = w, t.HemisphereLight = Hl, t.HemisphereLightHelper = class extends Pe {
        constructor(t, e, n){
            super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
            const i = new Go(e);
            i.rotateY(.5 * Math.PI), this.material = new Ke({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            }), void 0 === this.color && (this.material.vertexColors = !0);
            const r = i.getAttribute("position"), s = new Float32Array(3 * r.count);
            i.setAttribute("color", new en(s, 3)), this.add(new Gn(i, this.material)), this.update();
        }
        dispose() {
            this.children[0].geometry.dispose(), this.children[0].material.dispose();
        }
        update() {
            const t = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                const e = t.geometry.getAttribute("color");
                mh.copy(this.light.color), fh.copy(this.light.groundColor);
                for(let t = 0, n = e.count; t < n; t++){
                    const i = t < n / 2 ? mh : fh;
                    e.setXYZ(t, i.r, i.g, i.b);
                }
                e.needsUpdate = !0;
            }
            t.lookAt(ph.setFromMatrixPosition(this.light.matrixWorld).negate());
        }
    }, t.HemisphereLightProbe = xc, t.IcosahedronBufferGeometry = Ho, t.IcosahedronGeometry = Ho, t.ImageBitmapLoader = dc, t.ImageLoader = Pl, t.ImageUtils = _t, t.ImmediateRenderObject = ah, t.IncrementStencilOp = 7682, t.IncrementWrapStencilOp = 34055, t.InstancedBufferAttribute = oc, t.InstancedBufferGeometry = ac, t.InstancedInterleavedBuffer = Qc, t.InstancedMesh = ca, t.Int16Attribute = function(t, e) {
        return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new an(t, e);
    }, t.Int16BufferAttribute = an, t.Int32Attribute = function(t, e) {
        return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new ln(t, e);
    }, t.Int32BufferAttribute = ln, t.Int8Attribute = function(t, e) {
        return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new nn(t, e);
    }, t.Int8BufferAttribute = nn, t.IntType = 1013, t.InterleavedBuffer = Es, t.InterleavedBufferAttribute = Ls, t.Interpolant = ul, t.InterpolateDiscrete = H, t.InterpolateLinear = U, t.InterpolateSmooth = G, t.InvertStencilOp = 5386, t.JSONLoader = function() {
        console.error("THREE.JSONLoader has been removed.");
    }, t.KeepStencilOp = tt, t.KeyframeTrack = fl, t.LOD = Xs, t.LatheBufferGeometry = Uo, t.LatheGeometry = Uo, t.Layers = ve, t.LensFlare = function() {
        console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");
    }, t.LessDepth = 2, t.LessEqualDepth = 3, t.LessEqualStencilFunc = 515, t.LessStencilFunc = 513, t.Light = Ol, t.LightProbe = ic, t.Line = ga, t.Line3 = sh, t.LineBasicMaterial = ha, t.LineCurve = no, t.LineCurve3 = io, t.LineDashedMaterial = ll, t.LineLoop = _a, t.LinePieces = 1, t.LineSegments = xa, t.LineStrip = 0, t.LinearEncoding = X, t.LinearFilter = g, t.LinearInterpolant = pl, t.LinearMipMapLinearFilter = 1008, t.LinearMipMapNearestFilter = 1007, t.LinearMipmapLinearFilter = y, t.LinearMipmapNearestFilter = v, t.LinearToneMapping = 1, t.Loader = Ll, t.LoaderUtils = sc, t.LoadingManager = El, t.LogLuvEncoding = 3003, t.LoopOnce = 2200, t.LoopPingPong = 2202, t.LoopRepeat = 2201, t.LuminanceAlphaFormat = 1025, t.LuminanceFormat = 1024, t.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    }, t.Material = We, t.MaterialLoader = rc, t.Math = gt, t.MathUtils = gt, t.Matrix3 = yt, t.Matrix4 = ae, t.MaxEquation = 104, t.Mesh = Gn, t.MeshBasicMaterial = Ke, t.MeshDepthMaterial = cs, t.MeshDistanceMaterial = hs, t.MeshFaceMaterial = function(t) {
        return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t;
    }, t.MeshLambertMaterial = al, t.MeshMatcapMaterial = ol, t.MeshNormalMaterial = sl, t.MeshPhongMaterial = il, t.MeshPhysicalMaterial = nl, t.MeshStandardMaterial = el, t.MeshToonMaterial = rl, t.MinEquation = 103, t.MirroredRepeatWrapping = d, t.MixOperation = 1, t.MultiMaterial = function(t = []) {
        return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function() {
            return t.slice();
        }, t;
    }, t.MultiplyBlending = 4, t.MultiplyOperation = 0, t.NearestFilter = p, t.NearestMipMapLinearFilter = 1005, t.NearestMipMapNearestFilter = 1004, t.NearestMipmapLinearFilter = f, t.NearestMipmapNearestFilter = m, t.NeverDepth = 0, t.NeverStencilFunc = 512, t.NoBlending = 0, t.NoColors = 0, t.NoToneMapping = 0, t.NormalAnimationBlendMode = j, t.NormalBlending = 1, t.NotEqualDepth = 7, t.NotEqualStencilFunc = 517, t.NumberKeyframeTrack = yl, t.Object3D = Pe, t.ObjectLoader = class extends Ll {
        constructor(t){
            super(t);
        }
        load(t, e, n, i) {
            const r = this, s = "" === this.path ? sc.extractUrlBase(t) : this.path;
            this.resourcePath = this.resourcePath || s;
            const a = new Cl(this.manager);
            a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, function(n) {
                let s = null;
                try {
                    s = JSON.parse(n);
                } catch (e) {
                    return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message);
                }
                const a = s.metadata;
                void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e) : console.error("THREE.ObjectLoader: Can't load " + t);
            }, n, i);
        }
        async loadAsync(t, e) {
            const n = "" === this.path ? sc.extractUrlBase(t) : this.path;
            this.resourcePath = this.resourcePath || n;
            const i = new Cl(this.manager);
            i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials);
            const r = await i.loadAsync(t, e), s = JSON.parse(r), a = s.metadata;
            if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) throw new Error("THREE.ObjectLoader: Can't load " + t);
            return await this.parseAsync(s);
        }
        parse(t, e) {
            const n = this.parseAnimations(t.animations), i = this.parseShapes(t.shapes), r = this.parseGeometries(t.geometries, i), s = this.parseImages(t.images, function() {
                void 0 !== e && e(l);
            }), a = this.parseTextures(t.textures, s), o = this.parseMaterials(t.materials, a), l = this.parseObject(t.object, r, o, a, n), c = this.parseSkeletons(t.skeletons, l);
            if (this.bindSkeletons(l, c), void 0 !== e) {
                let t = !1;
                for(const e in s)if (s[e] instanceof HTMLImageElement) {
                    t = !0;
                    break;
                }
                !1 === t && e(l);
            }
            return l;
        }
        async parseAsync(t) {
            const e = this.parseAnimations(t.animations), n = this.parseShapes(t.shapes), i = this.parseGeometries(t.geometries, n), r = await this.parseImagesAsync(t.images), s = this.parseTextures(t.textures, r), a = this.parseMaterials(t.materials, s), o = this.parseObject(t.object, i, a, s, e), l = this.parseSkeletons(t.skeletons, o);
            return this.bindSkeletons(o, l), o;
        }
        parseShapes(t) {
            const e = {};
            if (void 0 !== t) for(let n = 0, i = t.length; n < i; n++){
                const i = (new Fl).fromJSON(t[n]);
                e[i.uuid] = i;
            }
            return e;
        }
        parseSkeletons(t, e) {
            const n = {}, i = {};
            if (e.traverse(function(t) {
                t.isBone && (i[t.uuid] = t);
            }), void 0 !== t) for(let e = 0, r = t.length; e < r; e++){
                const r = (new ra).fromJSON(t[e], i);
                n[r.uuid] = r;
            }
            return n;
        }
        parseGeometries(t, e) {
            const n = {};
            if (void 0 !== t) {
                const i = new lc;
                for(let r = 0, s = t.length; r < s; r++){
                    let s;
                    const a = t[r];
                    switch(a.type){
                        case "BufferGeometry":
                        case "InstancedBufferGeometry":
                            s = i.parse(a);
                            break;
                        case "Geometry":
                            console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");
                            break;
                        default:
                            a.type in Ko ? s = Ko[a.type].fromJSON(a, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`);
                    }
                    s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), !0 === s.isBufferGeometry && void 0 !== a.userData && (s.userData = a.userData), n[a.uuid] = s;
                }
            }
            return n;
        }
        parseMaterials(t, e) {
            const n = {}, i = {};
            if (void 0 !== t) {
                const r = new rc;
                r.setTextures(e);
                for(let e = 0, s = t.length; e < s; e++){
                    const s = t[e];
                    if ("MultiMaterial" === s.type) {
                        const t = [];
                        for(let e = 0; e < s.materials.length; e++){
                            const i = s.materials[e];
                            void 0 === n[i.uuid] && (n[i.uuid] = r.parse(i)), t.push(n[i.uuid]);
                        }
                        i[s.uuid] = t;
                    } else void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)), i[s.uuid] = n[s.uuid];
                }
            }
            return i;
        }
        parseAnimations(t) {
            const e = {};
            if (void 0 !== t) for(let n = 0; n < t.length; n++){
                const i = t[n], r = wl.parse(i);
                e[r.uuid] = r;
            }
            return e;
        }
        parseImages(t, e) {
            const n = this, i = {};
            let r;
            function s(t) {
                if ("string" == typeof t) {
                    const e = t;
                    return function(t) {
                        return n.manager.itemStart(t), r.load(t, function() {
                            n.manager.itemEnd(t);
                        }, void 0, function() {
                            n.manager.itemError(t), n.manager.itemEnd(t);
                        });
                    }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e);
                }
                return t.data ? {
                    data: fn(t.type, t.data),
                    width: t.width,
                    height: t.height
                } : null;
            }
            if (void 0 !== t && t.length > 0) {
                const n = new El(e);
                r = new Pl(n), r.setCrossOrigin(this.crossOrigin);
                for(let e = 0, n = t.length; e < n; e++){
                    const n = t[e], r = n.url;
                    if (Array.isArray(r)) {
                        i[n.uuid] = [];
                        for(let t = 0, e = r.length; t < e; t++){
                            const e = s(r[t]);
                            null !== e && (e instanceof HTMLImageElement ? i[n.uuid].push(e) : i[n.uuid].push(new ea(e.data, e.width, e.height)));
                        }
                    } else {
                        const t = s(n.url);
                        null !== t && (i[n.uuid] = t);
                    }
                }
            }
            return i;
        }
        async parseImagesAsync(t) {
            const e = this, n = {};
            let i;
            async function r(t) {
                if ("string" == typeof t) {
                    const n = t, r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : e.resourcePath + n;
                    return await i.loadAsync(r);
                }
                return t.data ? {
                    data: fn(t.type, t.data),
                    width: t.width,
                    height: t.height
                } : null;
            }
            if (void 0 !== t && t.length > 0) {
                i = new Pl(this.manager), i.setCrossOrigin(this.crossOrigin);
                for(let e = 0, i = t.length; e < i; e++){
                    const i = t[e], s = i.url;
                    if (Array.isArray(s)) {
                        n[i.uuid] = [];
                        for(let t = 0, e = s.length; t < e; t++){
                            const e = s[t], a = await r(e);
                            null !== a && (a instanceof HTMLImageElement ? n[i.uuid].push(a) : n[i.uuid].push(new ea(a.data, a.width, a.height)));
                        }
                    } else {
                        const t = await r(i.url);
                        null !== t && (n[i.uuid] = t);
                    }
                }
            }
            return n;
        }
        parseTextures(t, e) {
            function n(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]);
            }
            const i = {};
            if (void 0 !== t) for(let r = 0, s = t.length; r < s; r++){
                const s = t[r];
                let a;
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                const o = e[s.image];
                Array.isArray(o) ? (a = new Kn(o), 6 === o.length && (a.needsUpdate = !0)) : (a = o && o.data ? new ea(o.data, o.width, o.height) : new Mt(o), o && (a.needsUpdate = !0)), a.uuid = s.uuid, void 0 !== s.name && (a.name = s.name), void 0 !== s.mapping && (a.mapping = n(s.mapping, cc)), void 0 !== s.offset && a.offset.fromArray(s.offset), void 0 !== s.repeat && a.repeat.fromArray(s.repeat), void 0 !== s.center && a.center.fromArray(s.center), void 0 !== s.rotation && (a.rotation = s.rotation), void 0 !== s.wrap && (a.wrapS = n(s.wrap[0], hc), a.wrapT = n(s.wrap[1], hc)), void 0 !== s.format && (a.format = s.format), void 0 !== s.type && (a.type = s.type), void 0 !== s.encoding && (a.encoding = s.encoding), void 0 !== s.minFilter && (a.minFilter = n(s.minFilter, uc)), void 0 !== s.magFilter && (a.magFilter = n(s.magFilter, uc)), void 0 !== s.anisotropy && (a.anisotropy = s.anisotropy), void 0 !== s.flipY && (a.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (a.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (a.unpackAlignment = s.unpackAlignment), i[s.uuid] = a;
            }
            return i;
        }
        parseObject(t, e, n, i, r) {
            let s, a, o;
            function l(t) {
                return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t];
            }
            function c(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        const e = [];
                        for(let i = 0, r = t.length; i < r; i++){
                            const r = t[i];
                            void 0 === n[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(n[r]);
                        }
                        return e;
                    }
                    return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t];
                }
            }
            function h(t) {
                return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined texture", t), i[t];
            }
            switch(t.type){
                case "Scene":
                    s = new Ts, void 0 !== t.background && (Number.isInteger(t.background) ? s.background = new Qe(t.background) : s.background = h(t.background)), void 0 !== t.environment && (s.environment = h(t.environment)), void 0 !== t.fog && ("Fog" === t.fog.type ? s.fog = new Ss(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (s.fog = new ws(t.fog.color, t.fog.density)));
                    break;
                case "PerspectiveCamera":
                    s = new Jn(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (s.focus = t.focus), void 0 !== t.zoom && (s.zoom = t.zoom), void 0 !== t.filmGauge && (s.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (s.filmOffset = t.filmOffset), void 0 !== t.view && (s.view = Object.assign({}, t.view));
                    break;
                case "OrthographicCamera":
                    s = new Ql(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (s.zoom = t.zoom), void 0 !== t.view && (s.view = Object.assign({}, t.view));
                    break;
                case "AmbientLight":
                    s = new tc(t.color, t.intensity);
                    break;
                case "DirectionalLight":
                    s = new $l(t.color, t.intensity);
                    break;
                case "PointLight":
                    s = new Zl(t.color, t.intensity, t.distance, t.decay);
                    break;
                case "RectAreaLight":
                    s = new ec(t.color, t.intensity, t.width, t.height);
                    break;
                case "SpotLight":
                    s = new jl(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                    break;
                case "HemisphereLight":
                    s = new Hl(t.color, t.groundColor, t.intensity);
                    break;
                case "LightProbe":
                    s = (new ic).fromJSON(t);
                    break;
                case "SkinnedMesh":
                    a = l(t.geometry), o = c(t.material), s = new $s(a, o), void 0 !== t.bindMode && (s.bindMode = t.bindMode), void 0 !== t.bindMatrix && s.bindMatrix.fromArray(t.bindMatrix), void 0 !== t.skeleton && (s.skeleton = t.skeleton);
                    break;
                case "Mesh":
                    a = l(t.geometry), o = c(t.material), s = new Gn(a, o);
                    break;
                case "InstancedMesh":
                    a = l(t.geometry), o = c(t.material);
                    const e1 = t.count, n1 = t.instanceMatrix, i1 = t.instanceColor;
                    s = new ca(a, o, e1), s.instanceMatrix = new en(new Float32Array(n1.array), 16), void 0 !== i1 && (s.instanceColor = new en(new Float32Array(i1.array), i1.itemSize));
                    break;
                case "LOD":
                    s = new Xs;
                    break;
                case "Line":
                    s = new ga(l(t.geometry), c(t.material));
                    break;
                case "LineLoop":
                    s = new _a(l(t.geometry), c(t.material));
                    break;
                case "LineSegments":
                    s = new xa(l(t.geometry), c(t.material));
                    break;
                case "PointCloud":
                case "Points":
                    s = new Ea(l(t.geometry), c(t.material));
                    break;
                case "Sprite":
                    s = new Vs(c(t.material));
                    break;
                case "Group":
                    s = new gs;
                    break;
                case "Bone":
                    s = new ta;
                    break;
                default:
                    s = new Pe;
            }
            if (s.uuid = t.uuid, void 0 !== t.name && (s.name = t.name), void 0 !== t.matrix ? (s.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (s.matrixAutoUpdate = t.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t.position && s.position.fromArray(t.position), void 0 !== t.rotation && s.rotation.fromArray(t.rotation), void 0 !== t.quaternion && s.quaternion.fromArray(t.quaternion), void 0 !== t.scale && s.scale.fromArray(t.scale)), void 0 !== t.castShadow && (s.castShadow = t.castShadow), void 0 !== t.receiveShadow && (s.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (s.shadow.bias = t.shadow.bias), void 0 !== t.shadow.normalBias && (s.shadow.normalBias = t.shadow.normalBias), void 0 !== t.shadow.radius && (s.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && s.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (s.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (s.visible = t.visible), void 0 !== t.frustumCulled && (s.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (s.renderOrder = t.renderOrder), void 0 !== t.userData && (s.userData = t.userData), void 0 !== t.layers && (s.layers.mask = t.layers), void 0 !== t.children) {
                const a = t.children;
                for(let t = 0; t < a.length; t++)s.add(this.parseObject(a[t], e, n, i, r));
            }
            if (void 0 !== t.animations) {
                const e = t.animations;
                for(let t = 0; t < e.length; t++){
                    const n = e[t];
                    s.animations.push(r[n]);
                }
            }
            if ("LOD" === t.type) {
                void 0 !== t.autoUpdate && (s.autoUpdate = t.autoUpdate);
                const e = t.levels;
                for(let t = 0; t < e.length; t++){
                    const n = e[t], i = s.getObjectByProperty("uuid", n.object);
                    void 0 !== i && s.addLevel(i, n.distance);
                }
            }
            return s;
        }
        bindSkeletons(t, e) {
            0 !== Object.keys(e).length && t.traverse(function(t) {
                if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
                    const n = e[t.skeleton];
                    void 0 === n ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(n, t.bindMatrix);
                }
            });
        }
        setTexturePath(t) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t);
        }
    }, t.ObjectSpaceNormalMap = 1, t.OctahedronBufferGeometry = Go, t.OctahedronGeometry = Go, t.OneFactor = 201, t.OneMinusDstAlphaFactor = 207, t.OneMinusDstColorFactor = 209, t.OneMinusSrcAlphaFactor = 205, t.OneMinusSrcColorFactor = 203, t.OrthographicCamera = Ql, t.PCFShadowMap = 1, t.PCFSoftShadowMap = 2, t.PMREMGenerator = class {
        constructor(t){
            this._renderer = t, this._pingPongRenderTarget = null, this._blurMaterial = function(t) {
                const e = new Float32Array(t), n = new Rt(0, 1, 0);
                return new tl({
                    name: "SphericalGaussianBlur",
                    defines: {
                        n: t
                    },
                    uniforms: {
                        envMap: {
                            value: null
                        },
                        samples: {
                            value: 1
                        },
                        weights: {
                            value: e
                        },
                        latitudinal: {
                            value: !1
                        },
                        dTheta: {
                            value: 0
                        },
                        mipInt: {
                            value: 0
                        },
                        poleAxis: {
                            value: n
                        },
                        inputEncoding: {
                            value: Bh[3e3]
                        },
                        outputEncoding: {
                            value: Bh[3e3]
                        }
                    },
                    vertexShader: tu(),
                    fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t${eu()}\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
                    blending: 0,
                    depthTest: !1,
                    depthWrite: !1
                });
            }(Nh), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
        }
        fromScene(t, e = 0, n = .1, i = 100) {
            Vh = this._renderer.getRenderTarget();
            const r = this._allocateTargets();
            return this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
        }
        fromEquirectangular(t) {
            return this._fromTexture(t);
        }
        fromCubemap(t) {
            return this._fromTexture(t);
        }
        compileCubemapShader() {
            null === this._cubemapShader && (this._cubemapShader = $h(), this._compileMaterial(this._cubemapShader));
        }
        compileEquirectangularShader() {
            null === this._equirectShader && (this._equirectShader = Kh(), this._compileMaterial(this._equirectShader));
        }
        dispose() {
            this._blurMaterial.dispose(), null !== this._cubemapShader && this._cubemapShader.dispose(), null !== this._equirectShader && this._equirectShader.dispose();
            for(let t = 0; t < Hh.length; t++)Hh[t].dispose();
        }
        _cleanup(t) {
            this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(Vh), t.scissorTest = !1, Qh(t, 0, 0, t.width, t.height);
        }
        _fromTexture(t) {
            Vh = this._renderer.getRenderTarget();
            const e = this._allocateTargets(t);
            return this._textureToCubeUV(t, e), this._applyPMREM(e), this._cleanup(e), e;
        }
        _allocateTargets(t) {
            const e = {
                magFilter: p,
                minFilter: p,
                generateMipmaps: !1,
                type: x,
                format: 1023,
                encoding: Yh(t) ? t.encoding : Z,
                depthBuffer: !1
            }, n = Zh(e);
            return n.depthBuffer = !t, this._pingPongRenderTarget = Zh(e), n;
        }
        _compileMaterial(t) {
            const e = new Gn(Hh[0], t);
            this._renderer.compile(e, Oh);
        }
        _sceneToCubeUV(t, e, n, i) {
            const r = new Jn(90, 1, e, n), s = [
                1,
                -1,
                1,
                1,
                1,
                1
            ], a = [
                1,
                1,
                1,
                -1,
                -1,
                -1
            ], o = this._renderer, l = o.autoClear, c = o.outputEncoding, h = o.toneMapping;
            o.getClearColor(kh), o.toneMapping = 0, o.outputEncoding = X, o.autoClear = !1;
            let u = !1;
            const d = t.background;
            if (d) {
                if (d.isColor) {
                    zh.color.copy(d).convertSRGBToLinear(), t.background = null;
                    const e = Xh(zh.color);
                    zh.opacity = e, u = !0;
                }
            } else {
                zh.color.copy(kh).convertSRGBToLinear();
                const t = Xh(zh.color);
                zh.opacity = t, u = !0;
            }
            for(let e = 0; e < 6; e++){
                const n = e % 3;
                0 == n ? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0)) : 1 == n ? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e])), Qh(i, n * Ph, e > 2 ? Ph : 0, Ph, Ph), o.setRenderTarget(i), u && o.render(Fh, r), o.render(t, r);
            }
            o.toneMapping = h, o.outputEncoding = c, o.autoClear = l;
        }
        _textureToCubeUV(t, e) {
            const n = this._renderer;
            t.isCubeTexture ? null == this._cubemapShader && (this._cubemapShader = $h()) : null == this._equirectShader && (this._equirectShader = Kh());
            const i = t.isCubeTexture ? this._cubemapShader : this._equirectShader, r = new Gn(Hh[0], i), s = i.uniforms;
            s.envMap.value = t, t.isCubeTexture || s.texelSize.value.set(1 / t.image.width, 1 / t.image.height), s.inputEncoding.value = Bh[t.encoding], s.outputEncoding.value = Bh[e.texture.encoding], Qh(e, 0, 0, 3 * Ph, 2 * Ph), n.setRenderTarget(e), n.render(r, Oh);
        }
        _applyPMREM(t) {
            const e = this._renderer, n = e.autoClear;
            e.autoClear = !1;
            for(let e = 1; e < Ih; e++){
                const n = Math.sqrt(Gh[e] * Gh[e] - Gh[e - 1] * Gh[e - 1]), i = qh[(e - 1) % qh.length];
                this._blur(t, e - 1, e, n, i);
            }
            e.autoClear = n;
        }
        _blur(t, e, n, i, r) {
            const s = this._pingPongRenderTarget;
            this._halfBlur(t, s, e, n, i, "latitudinal", r), this._halfBlur(s, t, n, n, i, "longitudinal", r);
        }
        _halfBlur(t, e, n, i, r, s, a) {
            const o = this._renderer, l = this._blurMaterial;
            "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
            const c = new Gn(Hh[i], l), h = l.uniforms, u = Uh[n] - 1, d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39, p = r / d, m = isFinite(r) ? 1 + Math.floor(3 * p) : Nh;
            m > Nh && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
            const f = [];
            let g = 0;
            for(let t = 0; t < Nh; ++t){
                const e = t / p, n = Math.exp(-e * e / 2);
                f.push(n), 0 == t ? g += n : t < m && (g += 2 * n);
            }
            for(let t = 0; t < f.length; t++)f[t] = f[t] / g;
            h.envMap.value = t.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a), h.dTheta.value = d, h.mipInt.value = 8 - n, h.inputEncoding.value = Bh[t.texture.encoding], h.outputEncoding.value = Bh[t.texture.encoding];
            const v = Uh[i];
            Qh(e, 3 * Math.max(0, Ph - 2 * v), (0 === i ? 0 : 2 * Ph) + 2 * v * (i > 4 ? i - 8 + 4 : 0), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c, Oh);
        }
    }, t.ParametricBufferGeometry = ko, t.ParametricGeometry = ko, t.Particle = function(t) {
        return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Vs(t);
    }, t.ParticleBasicMaterial = function(t) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new ba(t);
    }, t.ParticleSystem = function(t, e) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new Ea(t, e);
    }, t.ParticleSystemMaterial = function(t) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new ba(t);
    }, t.Path = zl, t.PerspectiveCamera = Jn, t.Plane = ii, t.PlaneBufferGeometry = ci, t.PlaneGeometry = ci, t.PlaneHelper = class extends ga {
        constructor(t, e = 1, n = 16776960){
            const i = n, r = new wn;
            r.setAttribute("position", new un([
                1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                1,
                0,
                0,
                1,
                0,
                0,
                0
            ], 3)), r.computeBoundingSphere(), super(r, new ha({
                color: i,
                toneMapped: !1
            })), this.type = "PlaneHelper", this.plane = t, this.size = e;
            const s = new wn;
            s.setAttribute("position", new un([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1
            ], 3)), s.computeBoundingSphere(), this.add(new Gn(s, new Ke({
                color: i,
                opacity: .2,
                transparent: !0,
                depthWrite: !1,
                toneMapped: !1
            })));
        }
        updateMatrixWorld(t) {
            let e = -this.plane.constant;
            Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), super.updateMatrixWorld(t);
        }
    }, t.PointCloud = function(t, e) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new Ea(t, e);
    }, t.PointCloudMaterial = function(t) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new ba(t);
    }, t.PointLight = Zl, t.PointLightHelper = class extends Gn {
        constructor(t, e, n){
            super(new jo(e, 4, 2), new Ke({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            })), this.light = t, this.light.updateMatrixWorld(), this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
        update() {
            void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
        }
    }, t.Points = Ea, t.PointsMaterial = ba, t.PolarGridHelper = class extends xa {
        constructor(t = 10, e = 16, n = 8, i = 64, r = 4473924, s = 8947848){
            r = new Qe(r), s = new Qe(s);
            const a = [], o = [];
            for(let n = 0; n <= e; n++){
                const i = n / e * (2 * Math.PI), l = Math.sin(i) * t, c = Math.cos(i) * t;
                a.push(0, 0, 0), a.push(l, 0, c);
                const h = 1 & n ? r : s;
                o.push(h.r, h.g, h.b), o.push(h.r, h.g, h.b);
            }
            for(let e = 0; e <= n; e++){
                const l = 1 & e ? r : s, c = t - t / n * e;
                for(let t = 0; t < i; t++){
                    let e = t / i * (2 * Math.PI), n = Math.sin(e) * c, r = Math.cos(e) * c;
                    a.push(n, 0, r), o.push(l.r, l.g, l.b), e = (t + 1) / i * (2 * Math.PI), n = Math.sin(e) * c, r = Math.cos(e) * c, a.push(n, 0, r), o.push(l.r, l.g, l.b);
                }
            }
            const l = new wn;
            l.setAttribute("position", new un(a, 3)), l.setAttribute("color", new un(o, 3));
            super(l, new ha({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "PolarGridHelper";
        }
    }, t.PolyhedronBufferGeometry = Ba, t.PolyhedronGeometry = Ba, t.PositionalAudio = class extends Rc {
        constructor(t){
            super(t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
        }
        getOutput() {
            return this.panner;
        }
        getRefDistance() {
            return this.panner.refDistance;
        }
        setRefDistance(t) {
            return this.panner.refDistance = t, this;
        }
        getRolloffFactor() {
            return this.panner.rolloffFactor;
        }
        setRolloffFactor(t) {
            return this.panner.rolloffFactor = t, this;
        }
        getDistanceModel() {
            return this.panner.distanceModel;
        }
        setDistanceModel(t) {
            return this.panner.distanceModel = t, this;
        }
        getMaxDistance() {
            return this.panner.maxDistance;
        }
        setMaxDistance(t) {
            return this.panner.maxDistance = t, this;
        }
        setDirectionalCone(t, e, n) {
            return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
        }
        updateMatrixWorld(t) {
            if (super.updateMatrixWorld(t), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
            this.matrixWorld.decompose(Cc, Pc, Dc), Ic.set(0, 0, 1).applyQuaternion(Pc);
            const e = this.panner;
            if (e.positionX) {
                const t = this.context.currentTime + this.listener.timeDelta;
                e.positionX.linearRampToValueAtTime(Cc.x, t), e.positionY.linearRampToValueAtTime(Cc.y, t), e.positionZ.linearRampToValueAtTime(Cc.z, t), e.orientationX.linearRampToValueAtTime(Ic.x, t), e.orientationY.linearRampToValueAtTime(Ic.y, t), e.orientationZ.linearRampToValueAtTime(Ic.z, t);
            } else e.setPosition(Cc.x, Cc.y, Cc.z), e.setOrientation(Ic.x, Ic.y, Ic.z);
        }
    }, t.PropertyBinding = qc, t.PropertyMixer = Bc, t.QuadraticBezierCurve = ro, t.QuadraticBezierCurve3 = so, t.Quaternion = Lt, t.QuaternionKeyframeTrack = _l, t.QuaternionLinearInterpolant = xl, t.REVISION = e, t.RGBADepthPacking = 3201, t.RGBAFormat = E, t.RGBAIntegerFormat = 1033, t.RGBA_ASTC_10x10_Format = 37819, t.RGBA_ASTC_10x5_Format = 37816, t.RGBA_ASTC_10x6_Format = 37817, t.RGBA_ASTC_10x8_Format = 37818, t.RGBA_ASTC_12x10_Format = 37820, t.RGBA_ASTC_12x12_Format = 37821, t.RGBA_ASTC_4x4_Format = 37808, t.RGBA_ASTC_5x4_Format = 37809, t.RGBA_ASTC_5x5_Format = 37810, t.RGBA_ASTC_6x5_Format = 37811, t.RGBA_ASTC_6x6_Format = 37812, t.RGBA_ASTC_8x5_Format = 37813, t.RGBA_ASTC_8x6_Format = 37814, t.RGBA_ASTC_8x8_Format = 37815, t.RGBA_BPTC_Format = 36492, t.RGBA_ETC2_EAC_Format = O, t.RGBA_PVRTC_2BPPV1_Format = z, t.RGBA_PVRTC_4BPPV1_Format = B, t.RGBA_S3TC_DXT1_Format = C, t.RGBA_S3TC_DXT3_Format = P, t.RGBA_S3TC_DXT5_Format = D, t.RGBDEncoding = $, t.RGBEEncoding = Z, t.RGBEFormat = 1023, t.RGBFormat = T, t.RGBIntegerFormat = 1032, t.RGBM16Encoding = K, t.RGBM7Encoding = Q, t.RGB_ETC1_Format = 36196, t.RGB_ETC2_Format = F, t.RGB_PVRTC_2BPPV1_Format = N, t.RGB_PVRTC_4BPPV1_Format = I, t.RGB_S3TC_DXT1_Format = R, t.RGFormat = 1030, t.RGIntegerFormat = 1031, t.RawShaderMaterial = tl, t.Ray = se, t.Raycaster = class {
        constructor(t, e, n = 0, i = 1 / 0){
            this.ray = new se(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new ve, this.params = {
                Mesh: {},
                Line: {
                    threshold: 1
                },
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            };
        }
        set(t, e) {
            this.ray.set(t, e);
        }
        setFromCamera(t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
        }
        intersectObject(t, e = !1, n = []) {
            return th(t, this, n, e), n.sort($c), n;
        }
        intersectObjects(t, e = !1, n = []) {
            for(let i = 0, r = t.length; i < r; i++)th(t[i], this, n, e);
            return n.sort($c), n;
        }
    }, t.RectAreaLight = ec, t.RedFormat = 1028, t.RedIntegerFormat = 1029, t.ReinhardToneMapping = 2, t.RepeatWrapping = h, t.ReplaceStencilOp = 7681, t.ReverseSubtractEquation = 102, t.RingBufferGeometry = Vo, t.RingGeometry = Vo, t.SRGB8_ALPHA8_ASTC_10x10_Format = 37851, t.SRGB8_ALPHA8_ASTC_10x5_Format = 37848, t.SRGB8_ALPHA8_ASTC_10x6_Format = 37849, t.SRGB8_ALPHA8_ASTC_10x8_Format = 37850, t.SRGB8_ALPHA8_ASTC_12x10_Format = 37852, t.SRGB8_ALPHA8_ASTC_12x12_Format = 37853, t.SRGB8_ALPHA8_ASTC_4x4_Format = 37840, t.SRGB8_ALPHA8_ASTC_5x4_Format = 37841, t.SRGB8_ALPHA8_ASTC_5x5_Format = 37842, t.SRGB8_ALPHA8_ASTC_6x5_Format = 37843, t.SRGB8_ALPHA8_ASTC_6x6_Format = 37844, t.SRGB8_ALPHA8_ASTC_8x5_Format = 37845, t.SRGB8_ALPHA8_ASTC_8x6_Format = 37846, t.SRGB8_ALPHA8_ASTC_8x8_Format = 37847, t.Scene = Ts, t.SceneUtils = nu, t.ShaderChunk = hi, t.ShaderLib = di, t.ShaderMaterial = Xn, t.ShadowMaterial = $o, t.Shape = Fl, t.ShapeBufferGeometry = Wo, t.ShapeGeometry = Wo, t.ShapePath = pc, t.ShapeUtils = No, t.ShortType = 1011, t.Skeleton = ra, t.SkeletonHelper = uh, t.SkinnedMesh = $s, t.SmoothShading = 2, t.Sphere = Qt, t.SphereBufferGeometry = jo, t.SphereGeometry = jo, t.Spherical = class {
        constructor(t = 1, e = 0, n = 0){
            return this.radius = t, this.phi = e, this.theta = n, this;
        }
        set(t, e, n) {
            return this.radius = t, this.phi = e, this.theta = n, this;
        }
        copy(t) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
        }
        makeSafe() {
            const t = 1e-6;
            return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this;
        }
        setFromVector3(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z);
        }
        setFromCartesianCoords(t, e, n) {
            return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ht(e / this.radius, -1, 1))), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t.SphericalHarmonics3 = nc, t.SplineCurve = ao, t.SpotLight = jl, t.SpotLightHelper = class extends Pe {
        constructor(t, e){
            super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
            const n = new wn, i = [
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                1,
                0,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                0,
                0,
                0,
                -1,
                1
            ];
            for(let t = 0, e = 1, n = 32; t < n; t++, e++){
                const r = t / n * Math.PI * 2, s = e / n * Math.PI * 2;
                i.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1);
            }
            n.setAttribute("position", new un(i, 3));
            const r = new ha({
                fog: !1,
                toneMapped: !1
            });
            this.cone = new xa(n, r), this.add(this.cone), this.update();
        }
        dispose() {
            this.cone.geometry.dispose(), this.cone.material.dispose();
        }
        update() {
            this.light.updateMatrixWorld();
            const t = this.light.distance ? this.light.distance : 1e3, e = t * Math.tan(this.light.angle);
            this.cone.scale.set(e, e, t), oh.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(oh), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
        }
    }, t.Sprite = Vs, t.SpriteMaterial = Rs, t.SrcAlphaFactor = 204, t.SrcAlphaSaturateFactor = 210, t.SrcColorFactor = 202, t.StaticCopyUsage = 35046, t.StaticDrawUsage = et, t.StaticReadUsage = 35045, t.StereoCamera = class {
        constructor(){
            this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Jn, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Jn, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
                focus: null,
                fov: null,
                aspect: null,
                near: null,
                far: null,
                zoom: null,
                eyeSep: null
            };
        }
        update(t) {
            const e = this._cache;
            if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
                e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;
                const n = t.projectionMatrix.clone(), i = e.eyeSep / 2, r = i * e.near / e.focus, s = e.near * Math.tan(ot * e.fov * .5) / e.zoom;
                let a, o;
                Mc.elements[12] = -i, bc.elements[12] = i, a = -s * e.aspect + r, o = s * e.aspect + r, n.elements[0] = 2 * e.near / (o - a), n.elements[8] = (o + a) / (o - a), this.cameraL.projectionMatrix.copy(n), a = -s * e.aspect - r, o = s * e.aspect - r, n.elements[0] = 2 * e.near / (o - a), n.elements[8] = (o + a) / (o - a), this.cameraR.projectionMatrix.copy(n);
            }
            this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Mc), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(bc);
        }
    }, t.StreamCopyUsage = 35042, t.StreamDrawUsage = 35040, t.StreamReadUsage = 35041, t.StringKeyframeTrack = bl, t.SubtractEquation = 101, t.SubtractiveBlending = 3, t.TOUCH = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    }, t.TangentSpaceNormalMap = 0, t.TetrahedronBufferGeometry = qo, t.TetrahedronGeometry = qo, t.TextBufferGeometry = Xo, t.TextGeometry = Xo, t.Texture = Mt, t.TextureLoader = Nl, t.TorusBufferGeometry = Yo, t.TorusGeometry = Yo, t.TorusKnotBufferGeometry = Jo, t.TorusKnotGeometry = Jo, t.Triangle = ke, t.TriangleFanDrawMode = 2, t.TriangleStripDrawMode = 1, t.TrianglesDrawMode = 0, t.TubeBufferGeometry = Zo, t.TubeGeometry = Zo, t.UVMapping = i, t.Uint16Attribute = function(t, e) {
        return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new on(t, e);
    }, t.Uint16BufferAttribute = on, t.Uint32Attribute = function(t, e) {
        return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new cn(t, e);
    }, t.Uint32BufferAttribute = cn, t.Uint8Attribute = function(t, e) {
        return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new rn(t, e);
    }, t.Uint8BufferAttribute = rn, t.Uint8ClampedAttribute = function(t, e) {
        return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new sn(t, e);
    }, t.Uint8ClampedBufferAttribute = sn, t.Uniform = Zc, t.UniformsLib = ui, t.UniformsUtils = qn, t.UnsignedByteType = x, t.UnsignedInt248Type = S, t.UnsignedIntType = b, t.UnsignedShort4444Type = 1017, t.UnsignedShort5551Type = 1018, t.UnsignedShort565Type = 1019, t.UnsignedShortType = _, t.VSMShadowMap = 3, t.Vector2 = vt, t.Vector3 = Rt, t.Vector4 = St, t.VectorKeyframeTrack = Ml, t.Vertex = function(t, e, n) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new Rt(t, e, n);
    }, t.VertexColors = 2, t.VideoTexture = La, t.WebGL1Renderer = Ms, t.WebGLCubeRenderTarget = $n, t.WebGLMultipleRenderTargets = Et, t.WebGLMultisampleRenderTarget = At, t.WebGLRenderTarget = Tt, t.WebGLRenderTargetCube = function(t, e, n) {
        return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."), new $n(t, n);
    }, t.WebGLRenderer = bs, t.WebGLUtils = ms, t.WireframeGeometry = Qo, t.WireframeHelper = function(t, e) {
        return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new xa(new Qo(t.geometry), new ha({
            color: void 0 !== e ? e : 16777215
        }));
    }, t.WrapAroundEnding = W, t.XHRLoader = function(t) {
        return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new Cl(t);
    }, t.ZeroCurvatureEnding = k, t.ZeroFactor = 200, t.ZeroSlopeEnding = V, t.ZeroStencilOp = 0, t.sRGBEncoding = Y, Object.defineProperty(t, "__esModule", {
        value: !0
    });
});

//# sourceMappingURL=shape.193183b7.js.map
