import{M as e,V as t,a as o,Q as r,E as n,B as i,b as s,I as a,c,T as l,d as u,e as h,L as d,h as p,P as m,S as f,C as g,W as y,A as b,f as v,g as w,G as E,i as x,j,k as T,l as k,m as S,n as A,o as B,F as R}from"./GLTFLoader-d5e55cd7.js";import"./lodash-a1d2dbc5.js";var D=function(){var e=0,t=document.createElement("div");function o(e){return t.appendChild(e.dom),e}function r(o){for(var r=0;r<t.children.length;r++)t.children[r].style.display=r===o?"block":"none";e=o}t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",(function(o){o.preventDefault(),r(++e%t.children.length)}),!1);var n=(performance||Date).now(),i=n,s=0,a=o(new D.Panel("FPS","#0ff","#002")),c=o(new D.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=o(new D.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:t,addPanel:o,showPanel:r,begin:function(){n=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(c.update(e-n,200),e>=i+1e3&&(a.update(1e3*s/(e-i),100),i=e,s=0,l)){var t=performance.memory;l.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){n=this.end()},domElement:t,setMode:r}};D.Panel=function(e,t,o){var r=1/0,n=0,i=Math.round,s=i(window.devicePixelRatio||1),a=80*s,c=48*s,l=3*s,u=2*s,h=3*s,d=15*s,p=74*s,m=30*s,f=document.createElement("canvas");f.width=a,f.height=c,f.style.cssText="width:80px;height:48px";var g=f.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=o,g.fillRect(0,0,a,c),g.fillStyle=t,g.fillText(e,l,u),g.fillRect(h,d,p,m),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(h,d,p,m),{dom:f,update:function(c,y){r=Math.min(r,c),n=Math.max(n,c),g.fillStyle=o,g.globalAlpha=1,g.fillRect(0,0,a,d),g.fillStyle=t,g.fillText(i(c)+" "+e+" ("+i(r)+"-"+i(n)+")",l,u),g.drawImage(f,h+s,d,p-s,m,h,d,p-s,m),g.fillRect(h+p-s,d,s,m),g.fillStyle=o,g.globalAlpha=.9,g.fillRect(h+p-s,d,s,i((1-c/y)*m))}}};var M=function(n,i){void 0===i&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),i===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');var s=this,a=-1,c=0,l=1,u=2,h=3,d=4;this.object=n,this.domElement=i,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.ZOOM,RIGHT:e.PAN},this.target=new t;var p=new t,m=1,f=a,g=a,y=new t,b=new o,v=new o,w=new t,E=0,x=new o,j=new o,T=0,k=0,S=new o,A=new o;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom;var B={type:"change"},R={type:"start"},D={type:"end"};this.handleResize=function(){var e=s.domElement.getBoundingClientRect(),t=s.domElement.ownerDocument.documentElement;s.screen.left=e.left+window.pageXOffset-t.clientLeft,s.screen.top=e.top+window.pageYOffset-t.clientTop,s.screen.width=e.width,s.screen.height=e.height};var M,z,P,L,X,C,G,O,H,Y,U,I=(M=new o,function(e,t){return M.set((e-s.screen.left)/s.screen.width,(t-s.screen.top)/s.screen.height),M}),V=function(){var e=new o;return function(t,o){return e.set((t-.5*s.screen.width-s.screen.left)/(.5*s.screen.width),(s.screen.height+2*(s.screen.top-o))/s.screen.width),e}}();function q(e){if(!1!==s.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(e.preventDefault(),e.stopPropagation(),f===a)switch(e.button){case s.mouseButtons.LEFT:f=c;break;case s.mouseButtons.MIDDLE:f=l;break;case s.mouseButtons.RIGHT:f=u;break;default:f=a}var t=g!==a?g:f;t!==c||s.noRotate?t!==l||s.noZoom?t!==u||s.noPan||(S.copy(I(e.pageX,e.pageY)),A.copy(S)):(x.copy(I(e.pageX,e.pageY)),j.copy(x)):(v.copy(V(e.pageX,e.pageY)),b.copy(v));s.domElement.ownerDocument.addEventListener("pointermove",F,!1),s.domElement.ownerDocument.addEventListener("pointerup",Z,!1),s.dispatchEvent(R)}(e)}}function F(e){if(!1!==s.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===s.enabled)return;e.preventDefault(),e.stopPropagation();var t=g!==a?g:f;t!==c||s.noRotate?t!==l||s.noZoom?t!==u||s.noPan||A.copy(I(e.pageX,e.pageY)):j.copy(I(e.pageX,e.pageY)):(b.copy(v),v.copy(V(e.pageX,e.pageY)))}(e)}}function Z(e){if(!1!==s.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===s.enabled)return;e.preventDefault(),e.stopPropagation(),f=a,s.domElement.ownerDocument.removeEventListener("pointermove",F),s.domElement.ownerDocument.removeEventListener("pointerup",Z),s.dispatchEvent(D)}(e)}}function Q(e){!1!==s.enabled&&(window.removeEventListener("keydown",Q),g===a&&(e.keyCode!==s.keys[c]||s.noRotate?e.keyCode!==s.keys[l]||s.noZoom?e.keyCode!==s.keys[u]||s.noPan||(g=u):g=l:g=c))}function W(){!1!==s.enabled&&(g=a,window.addEventListener("keydown",Q,!1))}function N(e){if(!1!==s.enabled&&!0!==s.noZoom){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:x.y-=.025*e.deltaY;break;case 1:x.y-=.01*e.deltaY;break;default:x.y-=25e-5*e.deltaY}s.dispatchEvent(R),s.dispatchEvent(D)}}function _(e){if(!1!==s.enabled){switch(e.preventDefault(),e.touches.length){case 1:f=h,v.copy(V(e.touches[0].pageX,e.touches[0].pageY)),b.copy(v);break;default:f=d;var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;k=T=Math.sqrt(t*t+o*o);var r=(e.touches[0].pageX+e.touches[1].pageX)/2,n=(e.touches[0].pageY+e.touches[1].pageY)/2;S.copy(I(r,n)),A.copy(S)}s.dispatchEvent(R)}}function $(e){if(!1!==s.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:b.copy(v),v.copy(V(e.touches[0].pageX,e.touches[0].pageY));break;default:var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;k=Math.sqrt(t*t+o*o);var r=(e.touches[0].pageX+e.touches[1].pageX)/2,n=(e.touches[0].pageY+e.touches[1].pageY)/2;A.copy(I(r,n))}}function J(e){if(!1!==s.enabled){switch(e.touches.length){case 0:f=a;break;case 1:f=h,v.copy(V(e.touches[0].pageX,e.touches[0].pageY)),b.copy(v)}s.dispatchEvent(D)}}function K(e){!1!==s.enabled&&e.preventDefault()}this.rotateCamera=(P=new t,L=new r,X=new t,C=new t,G=new t,O=new t,function(){O.set(v.x-b.x,v.y-b.y,0),(z=O.length())?(y.copy(s.object.position).sub(s.target),X.copy(y).normalize(),C.copy(s.object.up).normalize(),G.crossVectors(C,X).normalize(),C.setLength(v.y-b.y),G.setLength(v.x-b.x),O.copy(C.add(G)),P.crossVectors(O,y).normalize(),z*=s.rotateSpeed,L.setFromAxisAngle(P,z),y.applyQuaternion(L),s.object.up.applyQuaternion(L),w.copy(P),E=z):!s.staticMoving&&E&&(E*=Math.sqrt(1-s.dynamicDampingFactor),y.copy(s.object.position).sub(s.target),L.setFromAxisAngle(w,E),y.applyQuaternion(L),s.object.up.applyQuaternion(L)),b.copy(v)}),this.zoomCamera=function(){var e;f===d?(e=T/k,T=k,s.object.isPerspectiveCamera?y.multiplyScalar(e):s.object.isOrthographicCamera?(s.object.zoom*=e,s.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(1!==(e=1+(j.y-x.y)*s.zoomSpeed)&&e>0&&(s.object.isPerspectiveCamera?y.multiplyScalar(e):s.object.isOrthographicCamera?(s.object.zoom/=e,s.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),s.staticMoving?x.copy(j):x.y+=(j.y-x.y)*this.dynamicDampingFactor)},this.panCamera=(H=new o,Y=new t,U=new t,function(){if(H.copy(A).sub(S),H.lengthSq()){if(s.object.isOrthographicCamera){var e=(s.object.right-s.object.left)/s.object.zoom/s.domElement.clientWidth,t=(s.object.top-s.object.bottom)/s.object.zoom/s.domElement.clientWidth;H.x*=e,H.y*=t}H.multiplyScalar(y.length()*s.panSpeed),U.copy(y).cross(s.object.up).setLength(H.x),U.add(Y.copy(s.object.up).setLength(H.y)),s.object.position.add(U),s.target.add(U),s.staticMoving?S.copy(A):S.add(H.subVectors(A,S).multiplyScalar(s.dynamicDampingFactor))}}),this.checkDistances=function(){s.noZoom&&s.noPan||(y.lengthSq()>s.maxDistance*s.maxDistance&&(s.object.position.addVectors(s.target,y.setLength(s.maxDistance)),x.copy(j)),y.lengthSq()<s.minDistance*s.minDistance&&(s.object.position.addVectors(s.target,y.setLength(s.minDistance)),x.copy(j)))},this.update=function(){y.subVectors(s.object.position,s.target),s.noRotate||s.rotateCamera(),s.noZoom||s.zoomCamera(),s.noPan||s.panCamera(),s.object.position.addVectors(s.target,y),s.object.isPerspectiveCamera?(s.checkDistances(),s.object.lookAt(s.target),p.distanceToSquared(s.object.position)>1e-6&&(s.dispatchEvent(B),p.copy(s.object.position))):s.object.isOrthographicCamera?(s.object.lookAt(s.target),(p.distanceToSquared(s.object.position)>1e-6||m!==s.object.zoom)&&(s.dispatchEvent(B),p.copy(s.object.position),m=s.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){f=a,g=a,s.target.copy(s.target0),s.object.position.copy(s.position0),s.object.up.copy(s.up0),s.object.zoom=s.zoom0,s.object.updateProjectionMatrix(),y.subVectors(s.object.position,s.target),s.object.lookAt(s.target),s.dispatchEvent(B),p.copy(s.object.position),m=s.object.zoom},this.dispose=function(){s.domElement.removeEventListener("contextmenu",K,!1),s.domElement.removeEventListener("pointerdown",q,!1),s.domElement.removeEventListener("wheel",N,!1),s.domElement.removeEventListener("touchstart",_,!1),s.domElement.removeEventListener("touchend",J,!1),s.domElement.removeEventListener("touchmove",$,!1),s.domElement.ownerDocument.removeEventListener("pointermove",F,!1),s.domElement.ownerDocument.removeEventListener("pointerup",Z,!1),window.removeEventListener("keydown",Q,!1),window.removeEventListener("keyup",W,!1)},this.domElement.addEventListener("contextmenu",K,!1),this.domElement.addEventListener("pointerdown",q,!1),this.domElement.addEventListener("wheel",N,!1),this.domElement.addEventListener("touchstart",_,!1),this.domElement.addEventListener("touchend",J,!1),this.domElement.addEventListener("touchmove",$,!1),this.domElement.ownerDocument.addEventListener("pointermove",F,!1),this.domElement.ownerDocument.addEventListener("pointerup",Z,!1),window.addEventListener("keydown",Q,!1),window.addEventListener("keyup",W,!1),this.handleResize(),this.update()};(M.prototype=Object.create(n.prototype)).constructor=M;var z={computeTangents:function(e){var r=e.index,n=e.attributes;if(null!==r&&void 0!==n.position&&void 0!==n.normal&&void 0!==n.uv){var s=r.array,a=n.position.array,c=n.normal.array,l=n.uv.array,u=a.length/3;void 0===n.tangent&&e.setAttribute("tangent",new i(new Float32Array(4*u),4));for(var h=n.tangent.array,d=[],p=[],m=0;m<u;m++)d[m]=new t,p[m]=new t;var f=new t,g=new t,y=new t,b=new o,v=new o,w=new o,E=new t,x=new t,j=e.groups;0===j.length&&(j=[{start:0,count:s.length}]);m=0;for(var T=j.length;m<T;++m)for(var k=X=(L=j[m]).start,S=X+L.count;k<S;k+=3)C(s[k+0],s[k+1],s[k+2]);var A,B,R,D=new t,M=new t,z=new t,P=new t;for(m=0,T=j.length;m<T;++m){var L,X;for(k=X=(L=j[m]).start,S=X+L.count;k<S;k+=3)G(s[k+0]),G(s[k+1]),G(s[k+2])}}else console.error("THREE.BufferGeometryUtils: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");function C(e,t,o){f.fromArray(a,3*e),g.fromArray(a,3*t),y.fromArray(a,3*o),b.fromArray(l,2*e),v.fromArray(l,2*t),w.fromArray(l,2*o),g.sub(f),y.sub(f),v.sub(b),w.sub(b);var r=1/(v.x*w.y-w.x*v.y);isFinite(r)&&(E.copy(g).multiplyScalar(w.y).addScaledVector(y,-v.y).multiplyScalar(r),x.copy(y).multiplyScalar(v.x).addScaledVector(g,-w.x).multiplyScalar(r),d[e].add(E),d[t].add(E),d[o].add(E),p[e].add(x),p[t].add(x),p[o].add(x))}function G(e){z.fromArray(c,3*e),P.copy(z),B=d[e],D.copy(B),D.sub(z.multiplyScalar(z.dot(B))).normalize(),M.crossVectors(P,B),R=M.dot(p[e]),A=R<0?-1:1,h[4*e]=D.x,h[4*e+1]=D.y,h[4*e+2]=D.z,h[4*e+3]=A}},mergeBufferGeometries:function(e,t){for(var o=null!==e[0].index,r=new Set(Object.keys(e[0].attributes)),n=new Set(Object.keys(e[0].morphAttributes)),i={},a={},c=e[0].morphTargetsRelative,l=new s,u=0,h=0;h<e.length;++h){var d=e[h],p=0;if(o!==(null!==d.index))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(var m in d.attributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;void 0===i[m]&&(i[m]=[]),i[m].push(d.attributes[m]),p++}if(p!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(c!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(var m in d.morphAttributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;void 0===a[m]&&(a[m]=[]),a[m].push(d.morphAttributes[m])}if(l.userData.mergedUserData=l.userData.mergedUserData||[],l.userData.mergedUserData.push(d.userData),t){var f;if(o)f=d.index.count;else{if(void 0===d.attributes.position)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;f=d.attributes.position.count}l.addGroup(u,f,h),u+=f}}if(o){var g=0,y=[];for(h=0;h<e.length;++h){for(var b=e[h].index,v=0;v<b.count;++v)y.push(b.getX(v)+g);g+=e[h].attributes.position.count}l.setIndex(y)}for(var m in i){var w=this.mergeBufferAttributes(i[m]);if(!w)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+m+" attribute."),null;l.setAttribute(m,w)}for(var m in a){var E=a[m][0].length;if(0===E)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[m]=[];for(h=0;h<E;++h){var x=[];for(v=0;v<a[m].length;++v)x.push(a[m][v][h]);var j=this.mergeBufferAttributes(x);if(!j)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+m+" morphAttribute."),null;l.morphAttributes[m].push(j)}}return l},mergeBufferAttributes:function(e){for(var t,o,r,n=0,s=0;s<e.length;++s){var a=e[s];if(a.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(void 0===t&&(t=a.array.constructor),t!==a.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(void 0===o&&(o=a.itemSize),o!==a.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(void 0===r&&(r=a.normalized),r!==a.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;n+=a.array.length}var c=new t(n),l=0;for(s=0;s<e.length;++s)c.set(e[s].array,l),l+=e[s].array.length;return new i(c,o,r)},interleaveAttributes:function(e){for(var t,o=0,r=0,n=0,i=e.length;n<i;++n){var s=e[n];if(void 0===t&&(t=s.array.constructor),t!==s.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;o+=s.array.length,r+=s.itemSize}var l=new a(new t(o),r),u=0,h=[],d=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"],m=0;for(i=e.length;m<i;m++){var f=(s=e[m]).itemSize,g=s.count,y=new c(l,f,u,s.normalized);h.push(y),u+=f;for(var b=0;b<g;b++)for(var v=0;v<f;v++)y[p[v]](b,s[d[v]](b))}return h},estimateBytesUsed:function(e){var t=0;for(var o in e.attributes){var r=e.getAttribute(o);t+=r.count*r.itemSize*r.array.BYTES_PER_ELEMENT}var n=e.getIndex();return t+=n?n.count*n.itemSize*n.array.BYTES_PER_ELEMENT:0},mergeVertices:function(e,t=1e-4){t=Math.max(t,Number.EPSILON);for(var o={},r=e.getIndex(),n=e.getAttribute("position"),s=r?r.count:n.count,a=0,c=Object.keys(e.attributes),l={},u={},h=[],d=["getX","getY","getZ","getW"],p=0,m=c.length;p<m;p++){l[w=c[p]]=[],(T=e.morphAttributes[w])&&(u[w]=new Array(T.length).fill().map(()=>[]))}var f=Math.log10(1/t),g=Math.pow(10,f);for(p=0;p<s;p++){var y=r?r.getX(p):p,b="",v=0;for(m=c.length;v<m;v++)for(var w=c[v],E=(j=e.getAttribute(w)).itemSize,x=0;x<E;x++)b+=~~(j[d[x]](y)*g)+",";if(b in o)h.push(o[b]);else{for(v=0,m=c.length;v<m;v++){w=c[v];var j=e.getAttribute(w),T=e.morphAttributes[w],k=(E=j.itemSize,l[w]),S=u[w];for(x=0;x<E;x++){var A=d[x];if(k.push(j[A](y)),T)for(var B=0,R=T.length;B<R;B++)S[B].push(T[B][A](y))}}o[b]=a,h.push(a),a++}}const D=e.clone();for(p=0,m=c.length;p<m;p++){w=c[p];var M=e.getAttribute(w),z=new M.array.constructor(l[w]);j=new i(z,M.itemSize,M.normalized);if(D.setAttribute(w,j),w in u)for(v=0;v<u[w].length;v++){var P=e.morphAttributes[w][v],L=(z=new P.array.constructor(u[w][v]),new i(z,P.itemSize,P.normalized));D.morphAttributes[w][v]=L}}return D.setIndex(h),D},toTrianglesDrawMode:function(e,t){if(t===l)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===u||t===h){var o=e.getIndex();if(null===o){var r=[],n=e.getAttribute("position");if(void 0===n)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(var i=0;i<n.count;i++)r.push(i);e.setIndex(r),o=e.getIndex()}var s=o.count-2,a=[];if(t===u)for(i=1;i<=s;i++)a.push(o.getX(0)),a.push(o.getX(i)),a.push(o.getX(i+1));else for(i=0;i<s;i++)i%2==0?(a.push(o.getX(i)),a.push(o.getX(i+1)),a.push(o.getX(i+2))):(a.push(o.getX(i+2)),a.push(o.getX(i+1)),a.push(o.getX(i)));a.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var c=e.clone();return c.setIndex(a),c.clearGroups(),c}return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}};window.customElements.define("ray-cast",class extends d{static get properties(){return{container:{type:Object},stats:{type:Object},camera:{type:Object},controls:{type:Object},scene:{type:Object},renderer:{type:Object},pickingTexture:{type:Object},pickingScene:{type:Object},highlightShape:{type:Object},mouse:{type:Object},mousePosX:{type:Object},mousePosY:{type:Object},offset:{type:Object},pickingData:{type:Object},cursorType:{type:String},canClick:{type:Boolean},link:{type:String},duplicated:{type:Boolean},que:{type:Object}}}constructor(){super(),this.mouse=new o,this.mousePosX="0px",this.mousePosY="0px",this.offset=new t(1,1,1),this.duplicated=!1,this.pickingData=[],this.cursorType="grab",this.canClick=!1,this.link="",this.addEventListener("click",this.clickLink)}render(){return p`<style>:host{cursor:${this.cursorType}}.followMouse{top:${this.mousePosY};left:${this.mousePosX};background:#fff;position:absolute;z-index:10}</style><div id="container"></div>`}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),this.init(),this.animate()}init(){this.container=this.shadowRoot.getElementById("container"),this.camera=new m(70,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.z=1e3,this.scene=new f,this.scene.background=new g(4342338),this.pickingScene=new f,this.pickingTexture=new y(1,1),this.scene.add(new b(5592405));const e=new v(16777215,1.5);e.position.set(0,500,2e4),this.scene.add(e),this.que=this.loadModel("/src/assets/models/gltf/questionmark.glb"),this.thicQue=this.loadModel("/src/assets/models/gltf/questionmarkBig.glb"),this.renderer=new w({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.controls=new M(this.camera,this.renderer.domElement),this.controls.rotateSpeed=-1,this.controls.zoomSpeed=1.2,this.controls.panSpeed=-.8,this.controls.noZoom=!1,this.controls.noPan=!1,this.controls.staticMoving=!0,this.controls.dynamicDampingFactor=.3,this.stats=new D,this.renderer.domElement.addEventListener("mousemove",this.onMouseMove.bind(this))}onMouseMove(e){this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mousePosX=this.mouse.x+15+"px",this.mousePosY=this.mouse.y+15+"px"}loadModel(e){var t=new E,o=new x;return t.load(e,(function(e){e.scene.traverse((function(e){})),o.add(e.scene)})),o}animate(){window.requestAnimationFrame(()=>this.animate()),0==this.duplicated&&this.duplicate(),1==this.duplicated&&(this.threeRender(),this.stats.update())}threeRender(){this.controls.update(),this.pick(),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}duplicate(){var e=_.get(this.que,["children",0,"children"],null),o=_.get(this.thicQue,["children",0,"children"],null);if(e&&o){const e=[],o=[],a=new j,c=new r,l=new g,u=new T({vertexColors:!0}),h=new k({color:16777215,flatShading:!0,vertexColors:!0,shininess:0});var n=this.que.children[0].children.find(e=>"Mesh"==e.type).geometry,i=this.thicQue.children[0].children.find(e=>"Mesh"==e.type).geometry;for(let r=1;r<51;r++){var s=n.clone();const i=new t;i.x=1e4*Math.random()-5e3,i.y=6e3*Math.random()-3e3,i.z=8e3*Math.random()-4e3;const u=new S;u.x=2*Math.random()*Math.PI,u.y=2*Math.random()*Math.PI,u.z=2*Math.random()*Math.PI;const h=new t(50,50,50);c.setFromEuler(u),a.compose(i,c,h),s.applyMatrix4(a),this.applyVertexColors(s,l.setHex(394758)),e.push(s),s=s.clone(),this.applyVertexColors(s,l.setHex(r)),o.push(s),this.pickingData[r]={position:i,rotation:u,scale:h}}this.highlightShape=new A(i,new B({color:16728418})),this.scene.add(this.highlightShape);const d=new A(z.mergeBufferGeometries(e),h);this.scene.add(d),this.pickingScene.add(new A(z.mergeBufferGeometries(o),u)),this.duplicated=!0}}pick(){this.camera.setViewOffset(this.renderer.domElement.width,this.renderer.domElement.height,this.mouse.x*window.devicePixelRatio|0,this.mouse.y*window.devicePixelRatio|0,1,1),this.renderer.setRenderTarget(this.pickingTexture),this.renderer.render(this.pickingScene,this.camera),this.camera.clearViewOffset();const e=new Uint8Array(4);this.renderer.readRenderTargetPixels(this.pickingTexture,0,0,1,1,e);const t=e[0]<<16|e[1]<<8|e[2],o=this.pickingData[t];t>0&&(this.cursorType="pointer",this.link="src/what.html",this.canClick=!0),o&&t>0?o.position&&o.rotation&&o.scale&&(this.highlightShape.position.copy(o.position),this.highlightShape.rotation.copy(o.rotation),this.highlightShape.scale.copy(o.scale).add(this.offset),this.highlightShape.visible=!0):(this.highlightShape.visible=!1,this.cursorType="grab",this.canClick=!1)}clickLink(){this.canClick&&(window.location.href="src/what.html")}applyVertexColors(e,t){const o=e.attributes.position,r=[];for(let e=0;e<o.count;e++)r.push(t.r,t.g,t.b);e.setAttribute("color",new R(r,3))}});
