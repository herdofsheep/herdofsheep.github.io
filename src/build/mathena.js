import{L as e,h as t}from"./lit-element-61c1989f.js";import{S as i,P as n,aj as a,l as s,ak as r,d as o,f as d,c as h,G as m}from"./three.module-98a4b09c.js";import{G as c}from"./GLTFLoader.js";import{O as w}from"./OrbitControls.js";window.customElements.define("mathena-3d",class extends e{static get properties(){return{container:{type:Object},camera:{type:Object},controls:{type:Object},scene:{type:Object},renderer:{type:Object},mathena:{type:Object},kitty:{type:String}}}constructor(){super(),this.init(),this.animate()}render(){return t`<p>template content</p>${this.kitty}`}init(){this.container=document.getElementById("container"),this.scene=new i,this.camera=new n(45,window.innerWidth/window.innerHeight,.1,500),this.camera.position.set(0,0,2);var e=new a(12303359,4473890);e.position.set(0,1,0),this.scene.add(e);var t=(new s).load("assets/images/planets.jpg"),m=new r(1.3847*15,4.5),c=new o({map:t}),p=new d(m,c);p.material.depthTest=!1,p.material.depthWrite=!1,this.scene.add(p),this.mathena=this.loadModel("assets/models/gltf/mathena.gltf"),this.scene.add(this.mathena),this.renderer=new h({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.gammaOutput=!0,this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize.bind(this),!1),this.controls=new w(this.camera,this.renderer.domElement),this.controls.update()}loadModel(e){var t=new c,i=new m;return t.load(e,(function(e){e.scene.traverse((function(e){})),i.add(e.scene)})),i}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){window.requestAnimationFrame((()=>this.animate())),this.render()}render(){var e=5e-4*Date.now();this.mathena.rotation.x=2*e,this.mathena.rotation.y=e;var t=9*Math.cos(.1*e);this.mathena.position.setX(t),this.camera.position.set(t,0,3),this.camera.lookAt(this.mathena.position),this.renderer.render(this.scene,this.camera)}});