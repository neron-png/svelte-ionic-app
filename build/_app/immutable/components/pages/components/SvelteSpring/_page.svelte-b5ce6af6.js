import{S as Ce,i as De,s as He,a as N,v as Pe,I as Me,h as r,c as I,w as Ue,b as Z,x as qe,f as Ae,t as ke,y as ze,P as we,k as l,q as y,ab as Ne,l as i,m as f,r as E,ac as Ie,K as M,n as c,p as Oe,L as e,ad as Q,N as U,u as Be,R as je,ae as Le}from"../../../../chunks/singletons-834fc638.js";import{I as We,S as Ke}from"../../../../chunks/IonPage-8ee9f8db.js";import{s as Re}from"../../../../chunks/index-7e81538c.js";function Ve(o){let h,n,p,a,u,m,S,z,q,j,C,t,A,ee,O,te,ne,se,ae,re,oe,le,ie,T,B,L,ue,D=o[0].stiffness+"",W,ce,fe,g,he,R,P,pe,H=o[0].damping+"",K,me,_e,v,de,$,b,V,X,w,ge,be;return S=new Ke({props:{name:"SvelteSpring"}}),{c(){h=l("ion-header"),n=l("ion-toolbar"),p=l("ion-buttons"),a=l("ion-menu-button"),u=N(),m=l("ion-buttons"),Pe(S.$$.fragment),z=N(),q=l("ion-title"),j=y("Svelte Spring"),C=N(),t=l("ion-content"),A=l("p"),ee=y(`Svelte spring is part of Svelte's nifty runtime features to easily add animation to DOM\r
			elements.This code comes from the Svelte Tutorial on `),O=l("a"),te=y("https://svelte.dev/tutorial/spring"),ne=y(`\r
		"The spring function is an alternative to tweened that often works better for values that are frequently\r
		changing. In this example we have two stores \u2014 one representing the circle's coordinates, and one\r
		representing its size. Let's convert them to springs."\r
		`),se=l("br"),ae=l("br"),re=y(`Waggle your mouse around, and try dragging the sliders to get a feel for how they\r
		affect the spring's behaviour. Notice that you can adjust the values while the spring is still\r
		in motion.\r
		`),oe=l("br"),le=l("br"),ie=N(),T=l("div"),B=l("label"),L=l("h3"),ue=y("stiffness ("),W=y(D),ce=y(")"),fe=N(),g=l("input"),he=N(),R=l("label"),P=l("h3"),pe=y("damping ("),K=y(H),me=y(")"),_e=N(),v=l("input"),de=N(),$=Ne("svg"),b=Ne("circle"),this.h()},l(s){h=i(s,"ION-HEADER",{translucent:!0});var _=f(h);n=i(_,"ION-TOOLBAR",{});var k=f(n);p=i(k,"ION-BUTTONS",{slot:!0});var ye=f(p);a=i(ye,"ION-MENU-BUTTON",{}),f(a).forEach(r),ye.forEach(r),u=I(k),m=i(k,"ION-BUTTONS",{slot:!0});var Ee=f(m);Ue(S.$$.fragment,Ee),Ee.forEach(r),z=I(k),q=i(k,"ION-TITLE",{});var Se=f(q);j=E(Se,"Svelte Spring"),Se.forEach(r),k.forEach(r),_.forEach(r),C=I(s),t=i(s,"ION-CONTENT",{fullscreen:!0,class:!0});var d=f(t);A=i(d,"P",{});var ve=f(A);ee=E(ve,`Svelte spring is part of Svelte's nifty runtime features to easily add animation to DOM\r
			elements.This code comes from the Svelte Tutorial on `),O=i(ve,"A",{href:!0,target:!0});var Te=f(O);te=E(Te,"https://svelte.dev/tutorial/spring"),Te.forEach(r),ve.forEach(r),ne=E(d,`\r
		"The spring function is an alternative to tweened that often works better for values that are frequently\r
		changing. In this example we have two stores \u2014 one representing the circle's coordinates, and one\r
		representing its size. Let's convert them to springs."\r
		`),se=i(d,"BR",{}),ae=i(d,"BR",{}),re=E(d,`Waggle your mouse around, and try dragging the sliders to get a feel for how they\r
		affect the spring's behaviour. Notice that you can adjust the values while the spring is still\r
		in motion.\r
		`),oe=i(d,"BR",{}),le=i(d,"BR",{}),ie=I(d),T=i(d,"DIV",{style:!0});var Y=f(T);B=i(Y,"LABEL",{});var x=f(B);L=i(x,"H3",{});var F=f(L);ue=E(F,"stiffness ("),W=E(F,D),ce=E(F,")"),F.forEach(r),fe=I(x),g=i(x,"INPUT",{type:!0,min:!0,max:!0,step:!0}),x.forEach(r),he=I(Y),R=i(Y,"LABEL",{});var G=f(R);P=i(G,"H3",{});var J=f(P);pe=E(J,"damping ("),K=E(J,H),me=E(J,")"),J.forEach(r),_e=I(G),v=i(G,"INPUT",{type:!0,min:!0,max:!0,step:!0}),G.forEach(r),Y.forEach(r),de=I(d),$=Ie(d,"svg",{class:!0});var $e=f($);b=Ie($e,"circle",{cx:!0,cy:!0,r:!0,class:!0}),f(b).forEach(r),$e.forEach(r),d.forEach(r),this.h()},h(){M(p,"slot","start"),M(m,"slot","end"),M(h,"translucent","true"),c(O,"href","https://svelte.dev/tutorial/spring"),c(O,"target","_blank"),c(g,"type","range"),c(g,"min","0"),c(g,"max","1"),c(g,"step","0.01"),c(v,"type","range"),c(v,"min","0"),c(v,"max","1"),c(v,"step","0.01"),Oe(T,"position","absolute"),Oe(T,"right","1em"),c(b,"cx",V=o[1].x),c(b,"cy",X=o[1].y),c(b,"r",o[2]),c(b,"class","svelte-h2t6l5"),c($,"class","svelte-h2t6l5"),M(t,"fullscreen",""),M(t,"class","ion-padding")},m(s,_){Z(s,h,_),e(h,n),e(n,p),e(p,a),e(n,u),e(n,m),qe(S,m,null),e(n,z),e(n,q),e(q,j),Z(s,C,_),Z(s,t,_),e(t,A),e(A,ee),e(A,O),e(O,te),e(t,ne),e(t,se),e(t,ae),e(t,re),e(t,oe),e(t,le),e(t,ie),e(t,T),e(T,B),e(B,L),e(L,ue),e(L,W),e(L,ce),e(B,fe),e(B,g),Q(g,o[0].stiffness),e(T,he),e(T,R),e(R,P),e(P,pe),e(P,K),e(P,me),e(R,_e),e(R,v),Q(v,o[0].damping),e(t,de),e(t,$),e($,b),w=!0,ge||(be=[U(g,"change",o[4]),U(g,"input",o[4]),U(v,"change",o[5]),U(v,"input",o[5]),U($,"mousemove",o[6]),U($,"mousedown",o[7]),U($,"mouseup",o[8])],ge=!0)},p(s,_){(!w||_&1)&&D!==(D=s[0].stiffness+"")&&Be(W,D),_&1&&Q(g,s[0].stiffness),(!w||_&1)&&H!==(H=s[0].damping+"")&&Be(K,H),_&1&&Q(v,s[0].damping),(!w||_&2&&V!==(V=s[1].x))&&c(b,"cx",V),(!w||_&2&&X!==(X=s[1].y))&&c(b,"cy",X),(!w||_&4)&&c(b,"r",s[2])},i(s){w||(Ae(S.$$.fragment,s),w=!0)},o(s){ke(S.$$.fragment,s),w=!1},d(s){s&&r(h),ze(S),s&&r(C),s&&r(t),ge=!1,je(be)}}}function Xe(o){let h,n,p;return n=new We({props:{$$slots:{default:[Ve]},$$scope:{ctx:o}}}),{c(){h=N(),Pe(n.$$.fragment),this.h()},l(a){Me('[data-svelte="svelte-855y2t"]',document.head).forEach(r),h=I(a),Ue(n.$$.fragment,a),this.h()},h(){document.title="Ionic Companion - Svelte Spring"},m(a,u){Z(a,h,u),qe(n,a,u),p=!0},p(a,[u]){const m={};u&519&&(m.$$scope={dirty:u,ctx:a}),n.$set(m)},i(a){p||(Ae(n.$$.fragment,a),p=!0)},o(a){ke(n.$$.fragment,a),p=!1},d(a){a&&r(h),ze(n,a)}}}function Ye(o,h,n){let p,a,u=Re({x:50,y:50},{stiffness:.1,damping:.25});we(o,u,t=>n(1,p=t));let m=Re(10);we(o,m,t=>n(2,a=t));function S(){u.stiffness=Le(this.value),n(0,u)}function z(){u.damping=Le(this.value),n(0,u)}return[u,p,a,m,S,z,t=>{console.log("Coords",t),u.set({x:t.clientX,y:t.clientY})},()=>m.set(30),()=>m.set(10)]}class Je extends Ce{constructor(h){super(),De(this,h,Ye,Xe,He,{})}}export{Je as default};