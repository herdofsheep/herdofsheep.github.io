import{a as t,L as e,j as r,G as n,v as i,F as a,s,r as o,q as l,e as h,x as u,H as c,f as p,S as d,C as f,P as g,c as m,A as v}from"./three.module-98a4b09c.js";import"./lodash-a1d2dbc5.js";import{O as b}from"./OrbitControls.js";var w={value:()=>{}};function y(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new x(n)}function x(t){this._=t}function j(t,e){return t.trim().split(/^|\s+/).map((function(t){var r="",n=t.indexOf(".");if(n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}}))}function k(t,e){for(var r,n=0,i=t.length;n<i;++n)if((r=t[n]).name===e)return r.value}function N(t,e,r){for(var n=0,i=t.length;n<i;++n)if(t[n].name===e){t[n]=w,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}function M(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function E(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function V(){}x.prototype=y.prototype={constructor:x,on:function(t,e){var r,n=this._,i=j(t+"",n),a=-1,s=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<s;)if(r=(t=i[a]).type)n[r]=N(n[r],t.name,e);else if(null==e)for(r in n)n[r]=N(n[r],t.name,null);return this}for(;++a<s;)if((r=(t=i[a]).type)&&(r=k(n[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new x(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,i=new Array(r),a=0;a<r;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,r=(n=this._[t]).length;a<r;++a)n[a].value.apply(e,i)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],i=0,a=n.length;i<a;++i)n[i].value.apply(e,r)}};var I=1/.7,z="\\s*([+-]?\\d+)\\s*",F="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",L="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",A=/^#([0-9a-f]{3,8})$/,C=new RegExp("^rgb\\("+[z,z,z]+"\\)$"),O=new RegExp("^rgb\\("+[L,L,L]+"\\)$"),_=new RegExp("^rgba\\("+[z,z,z,F]+"\\)$"),U=new RegExp("^rgba\\("+[L,L,L,F]+"\\)$"),q=new RegExp("^hsl\\("+[F,L,L]+"\\)$"),P=new RegExp("^hsla\\("+[F,L,L,F]+"\\)$"),R={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function H(){return this.rgb().formatHex()}function S(){return this.rgb().formatRgb()}function G(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=A.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?B(e):3===r?new W(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?D(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?D(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=C.exec(t))?new W(e[1],e[2],e[3],1):(e=O.exec(t))?new W(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=_.exec(t))?D(e[1],e[2],e[3],e[4]):(e=U.exec(t))?D(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=q.exec(t))?Q(e[1],e[2]/100,e[3]/100,1):(e=P.exec(t))?Q(e[1],e[2]/100,e[3]/100,e[4]):R.hasOwnProperty(t)?B(R[t]):"transparent"===t?new W(NaN,NaN,NaN,0):null}function B(t){return new W(t>>16&255,t>>8&255,255&t,1)}function D(t,e,r,n){return n<=0&&(t=e=r=NaN),new W(t,e,r,n)}function T(t){return t instanceof V||(t=G(t)),t?new W((t=t.rgb()).r,t.g,t.b,t.opacity):new W}function W(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function J(){return"#"+K(this.r)+K(this.g)+K(this.b)}function Z(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function K(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Q(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new Y(t,e,r,n)}function X(t){if(t instanceof Y)return new Y(t.h,t.s,t.l,t.opacity);if(t instanceof V||(t=G(t)),!t)return new Y;if(t instanceof Y)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,i=Math.min(e,r,n),a=Math.max(e,r,n),s=NaN,o=a-i,l=(a+i)/2;return o?(s=e===a?(r-n)/o+6*(r<n):r===a?(n-e)/o+2:(e-r)/o+4,o/=l<.5?a+i:2-a-i,s*=60):o=l>0&&l<1?0:s,new Y(s,o,l,t.opacity)}function Y(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function tt(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}M(V,G,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:H,formatHex:H,formatHsl:function(){return X(this).formatHsl()},formatRgb:S,toString:S}),M(W,(function(t,e,r,n){return 1===arguments.length?T(t):new W(t,e,r,null==n?1:n)}),E(V,{brighter:function(t){return t=null==t?I:Math.pow(I,t),new W(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new W(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:J,formatHex:J,formatRgb:Z,toString:Z})),M(Y,(function(t,e,r,n){return 1===arguments.length?X(t):new Y(t,e,r,null==n?1:n)}),E(V,{brighter:function(t){return t=null==t?I:Math.pow(I,t),new Y(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Y(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new W(tt(t>=240?t-240:t+120,i,n),tt(t,i,n),tt(t<120?t+240:t-120,i,n),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));const et=Math.PI/180,rt=180/Math.PI;var nt=-.14861,it=1.78277,at=-.29227,st=-.90649,ot=1.97294,lt=ot*st,ht=ot*it,ut=it*at-st*nt;function ct(t){if(t instanceof dt)return new dt(t.h,t.s,t.l,t.opacity);t instanceof W||(t=T(t));var e=t.r/255,r=t.g/255,n=t.b/255,i=(ut*n+lt*e-ht*r)/(ut+lt-ht),a=n-i,s=(ot*(r-i)-at*a)/st,o=Math.sqrt(s*s+a*a)/(ot*i*(1-i)),l=o?Math.atan2(s,a)*rt-120:NaN;return new dt(l<0?l+360:l,o,i,t.opacity)}function pt(t,e,r,n){return 1===arguments.length?ct(t):new dt(t,e,r,null==n?1:n)}function dt(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}M(dt,pt,E(V,{brighter:function(t){return t=null==t?I:Math.pow(I,t),new dt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new dt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*et,e=+this.l,r=isNaN(this.s)?0:this.s*e*(1-e),n=Math.cos(t),i=Math.sin(t);return new W(255*(e+r*(nt*n+it*i)),255*(e+r*(at*n+st*i)),255*(e+r*(ot*n)),this.opacity)}}));var ft=t=>()=>t;function gt(t,e){return function(r){return t+r*e}}function mt(t,e){var r=e-t;return r?gt(t,r):ft(isNaN(t)?e:t)}function vt(t){return function e(r){function n(e,n){var i=t((e=pt(e)).h,(n=pt(n)).h),a=mt(e.s,n.s),s=mt(e.l,n.l),o=mt(e.opacity,n.opacity);return function(t){return e.h=i(t),e.s=a(t),e.l=s(Math.pow(t,r)),e.opacity=o(t),e+""}}return r=+r,n.gamma=e,n}(1)}vt((function(t,e){var r=e-t;return r?gt(t,r>180||r<-180?r-360*Math.round(r/360):r):ft(isNaN(t)?e:t)}));var bt=vt(mt),wt=(y("start","end","cancel","interrupt"),bt(pt(-100,.75,.35),pt(80,1.5,.8)),bt(pt(260,.75,.35),pt(80,1.5,.8))),yt=(pt(),function(){var d=/^[og]\s*(.+)?/,f=/^mtllib /,g=/^usemtl /,m=/^usemap /,v=new t,b=new t,w=new t,y=new t,x=new t;function j(){var t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=t,void(this.object.fromDeclaration=!1!==e);var r=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:!1!==e,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(t,e){var r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);var n={index:this.materials.length,name:t||"",mtllib:Array.isArray(e)&&e.length>0?e[e.length-1]:"",smooth:void 0!==r?r.smooth:this.smooth,groupStart:void 0!==r?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(t){var e={index:"number"==typeof t?t:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return e.clone=this.clone.bind(e),e}};return this.materials.push(n),n},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(t){var e=this.currentMaterial();if(e&&-1===e.groupEnd&&(e.groupEnd=this.geometry.vertices.length/3,e.groupCount=e.groupEnd-e.groupStart,e.inherited=!1),t&&this.materials.length>1)for(var r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return t&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),e}},r&&r.name&&"function"==typeof r.clone){var n=r.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(t,e){var r=parseInt(t,10);return 3*(r>=0?r-1:r+e/3)},parseNormalIndex:function(t,e){var r=parseInt(t,10);return 3*(r>=0?r-1:r+e/3)},parseUVIndex:function(t,e){var r=parseInt(t,10);return 2*(r>=0?r-1:r+e/2)},addVertex:function(t,e,r){var n=this.vertices,i=this.object.geometry.vertices;i.push(n[t+0],n[t+1],n[t+2]),i.push(n[e+0],n[e+1],n[e+2]),i.push(n[r+0],n[r+1],n[r+2])},addVertexPoint:function(t){var e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){var e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,r){var n=this.normals,i=this.object.geometry.normals;i.push(n[t+0],n[t+1],n[t+2]),i.push(n[e+0],n[e+1],n[e+2]),i.push(n[r+0],n[r+1],n[r+2])},addFaceNormal:function(t,e,r){var n=this.vertices,i=this.object.geometry.normals;v.fromArray(n,t),b.fromArray(n,e),w.fromArray(n,r),x.subVectors(w,b),y.subVectors(v,b),x.cross(y),x.normalize(),i.push(x.x,x.y,x.z),i.push(x.x,x.y,x.z),i.push(x.x,x.y,x.z)},addColor:function(t,e,r){var n=this.colors,i=this.object.geometry.colors;void 0!==n[t]&&i.push(n[t+0],n[t+1],n[t+2]),void 0!==n[e]&&i.push(n[e+0],n[e+1],n[e+2]),void 0!==n[r]&&i.push(n[r+0],n[r+1],n[r+2])},addUV:function(t,e,r){var n=this.uvs,i=this.object.geometry.uvs;i.push(n[t+0],n[t+1]),i.push(n[e+0],n[e+1]),i.push(n[r+0],n[r+1])},addDefaultUV:function(){var t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){var e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,r,n,i,a,s,o,l){var h=this.vertices.length,u=this.parseVertexIndex(t,h),c=this.parseVertexIndex(e,h),p=this.parseVertexIndex(r,h);if(this.addVertex(u,c,p),this.addColor(u,c,p),void 0!==s&&""!==s){var d=this.normals.length;u=this.parseNormalIndex(s,d),c=this.parseNormalIndex(o,d),p=this.parseNormalIndex(l,d),this.addNormal(u,c,p)}else this.addFaceNormal(u,c,p);if(void 0!==n&&""!==n){var f=this.uvs.length;u=this.parseUVIndex(n,f),c=this.parseUVIndex(i,f),p=this.parseUVIndex(a,f),this.addUV(u,c,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";for(var e=this.vertices.length,r=0,n=t.length;r<n;r++){var i=this.parseVertexIndex(t[r],e);this.addVertexPoint(i),this.addColor(i)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";for(var r=this.vertices.length,n=this.uvs.length,i=0,a=t.length;i<a;i++)this.addVertexLine(this.parseVertexIndex(t[i],r));var s=0;for(a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],n))}};return t.startObject("",!1),t}function k(t){e.call(this,t),this.materials=null}return k.prototype=Object.assign(Object.create(e.prototype),{constructor:k,load:function(t,e,n,i){var a=this,s=new r(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(r){try{e(a.parse(r))}catch(e){i?i(e):console.error(e),a.manager.itemError(t)}}),n,i)},setMaterials:function(t){return this.materials=t,this},parse:function(t){var e=new j;-1!==t.indexOf("\r\n")&&(t=t.replace(/\r\n/g,"\n")),-1!==t.indexOf("\\\n")&&(t=t.replace(/\\\n/g,""));for(var r=t.split("\n"),v="",b="",w=[],y="function"==typeof"".trimLeft,x=0,k=r.length;x<k;x++)if(v=r[x],0!==(v=y?v.trimLeft():v.trim()).length&&"#"!==(b=v.charAt(0)))if("v"===b){var N=v.split(/\s+/);switch(N[0]){case"v":e.vertices.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),N.length>=7?e.colors.push(parseFloat(N[4]),parseFloat(N[5]),parseFloat(N[6])):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3]));break;case"vt":e.uvs.push(parseFloat(N[1]),parseFloat(N[2]))}}else if("f"===b){for(var M=v.substr(1).trim().split(/\s+/),E=[],V=0,I=M.length;V<I;V++){var z=M[V];if(z.length>0){var F=z.split("/");E.push(F)}}var L=E[0];for(V=1,I=E.length-1;V<I;V++){var A=E[V],C=E[V+1];e.addFace(L[0],A[0],C[0],L[1],A[1],C[1],L[2],A[2],C[2])}}else if("l"===b){var O=v.substring(1).trim().split(" "),_=[],U=[];if(-1===v.indexOf("/"))_=O;else for(var q=0,P=O.length;q<P;q++){var R=O[q].split("/");""!==R[0]&&_.push(R[0]),""!==R[1]&&U.push(R[1])}e.addLineGeometry(_,U)}else if("p"===b){var H=v.substr(1).trim().split(" ");e.addPointGeometry(H)}else if(null!==(w=d.exec(v))){var S=(" "+w[0].substr(1).trim()).substr(1);e.startObject(S)}else if(g.test(v))e.object.startMaterial(v.substring(7).trim(),e.materialLibraries);else if(f.test(v))e.materialLibraries.push(v.substring(7).trim());else if(m.test(v))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===b){if((w=v.split(" ")).length>1){var $=w[1].trim().toLowerCase();e.object.smooth="0"!==$&&"off"!==$}else e.object.smooth=!0;(et=e.object.currentMaterial())&&(et.smooth=e.object.smooth)}else{if("\0"===v)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+v+'"')}e.finalize();var G=new n;if(G.materialLibraries=[].concat(e.materialLibraries),!0===!(1===e.objects.length&&0===e.objects[0].geometry.vertices.length))for(x=0,k=e.objects.length;x<k;x++){var B=e.objects[x],D=B.geometry,T=B.materials,W="Line"===D.type,J="Points"===D.type,Z=!1;if(0!==D.vertices.length){(at=new i).setAttribute("position",new a(D.vertices,3)),D.normals.length>0&&at.setAttribute("normal",new a(D.normals,3)),D.colors.length>0&&(Z=!0,at.setAttribute("color",new a(D.colors,3))),!0===D.hasUVIndices&&at.setAttribute("uv",new a(D.uvs,2));for(var K,Q=[],X=0,Y=T.length;X<Y;X++){var tt=(it=T[X]).name+"_"+it.smooth+"_"+Z,et=e.materials[tt];if(null!==this.materials)if(et=this.materials.create(it.name),!W||!et||et instanceof s){if(J&&et&&!(et instanceof l)){var rt=new l({size:10,sizeAttenuation:!1});o.prototype.copy.call(rt,et),rt.color.copy(et.color),rt.map=et.map,et=rt}}else{var nt=new s;o.prototype.copy.call(nt,et),nt.color.copy(et.color),et=nt}void 0===et&&((et=W?new s:J?new l({size:1,sizeAttenuation:!1}):new h).name=it.name,et.flatShading=!it.smooth,et.vertexColors=Z,e.materials[tt]=et),Q.push(et)}if(Q.length>1){for(X=0,Y=T.length;X<Y;X++){var it=T[X];at.addGroup(it.groupStart,it.groupCount,X)}K=W?new u(at,Q):J?new c(at,Q):new p(at,Q)}else K=W?new u(at,Q[0]):J?new c(at,Q[0]):new p(at,Q[0]);K.name=B.name,G.add(K)}}else if(e.vertices.length>0){var at;et=new l({size:1,sizeAttenuation:!1});(at=new i).setAttribute("position",new a(e.vertices,3)),e.colors.length>0&&(at.setAttribute("color",new a(e.colors,3)),et.vertexColors=!0);var st=new c(at,et);G.add(st)}return G}}),k}());let xt,jt,kt,Nt,Mt,Et,Vt,It;function zt(){$.get("./../../assets/data/f80bd6d9-9a6d-4f4d-8f23-ef63b2c851d4_sun.ill",(function(t){Ft(t,"values")})),$.get("./../../assets/data/f80bd6d9-9a6d-4f4d-8f23-ef63b2c851d4.pts",(function(t){Ft(t,"points")}))}function Ft(t,e){"values"==e&&(Et=t),"points"==e&&(Mt=t),null!=Mt&&null!=Et&&function(){var t=Mt.split(/\r\n|\n|\r/);t=t.filter((t=>t.length>0)),Vt=[];for(var e=0;e<t.length;e+=1){o=(o=t[e].split(" ")).filter((t=>t.length>0));var r={};r.x=o[0],r.y=o[1],r.z=o[2],Vt.push(r)}var n=Et.split(/\r\n|\n|\r/),s=n.slice(14,n.length);s=s.filter((t=>t.length>0)),It=[];for(e=0;e<s.length;e+=1){var o;o=(o=s[e].split(" ")).filter((t=>t.length>0));for(var h=0,u=0;u<o.length;u+=1)h+=parseFloat(o[u]);var p=h/o.length;It.push(p)}!function(){for(var t=[],e=0;e<Vt.length;e+=1){var r=parseFloat(Vt[e].x),n=parseFloat(Vt[e].y),s=parseFloat(Vt[e].z),o=4;t.push(r*o,n*o,s*o)}const h=[],u=new f;for(e=0;e<t.length;e++){var p=wt(It[e]/Math.max(...It)),d=p.substring(4,p.length-1).replace(/ /g,"").split(","),g=parseFloat(d[0])/255,m=parseFloat(d[1])/255,v=parseFloat(d[2])/255;u.setRGB(g,m,v),h.push(u.r,u.g,u.b)}const b=new i;b.setAttribute("position",new a(t,3)),b.setAttribute("color",new a(h,3)),b.computeBoundingSphere();const w=new l({size:3,vertexColors:!0});var y=new c(b,w);xt.add(y),Lt()}()}()}function Lt(){kt.render(xt,jt),requestAnimationFrame(Lt)}window.addEventListener("load",(function(){xt=new d,xt.background=new f(16777215),jt=new g(75,window.innerWidth/window.innerHeight,.1,1e3),jt.position.z=40,Nt=document.getElementById("container"),kt=new m,kt.setSize(window.innerWidth,window.innerHeight),Nt.appendChild(kt.domElement);new b(jt,kt.domElement).enableZoom=!1,xt.add(new v(4210752)),zt();new yt;document.body.appendChild(kt.domElement),zt()}));