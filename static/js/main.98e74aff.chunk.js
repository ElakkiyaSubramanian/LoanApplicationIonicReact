(this.webpackJsonploan=this.webpackJsonploan||[]).push([[1],{59:function(e,n,t){var r={"./ion-action-sheet.entry.js":[84,5],"./ion-alert.entry.js":[85,6],"./ion-app_8.entry.js":[86,7],"./ion-avatar_3.entry.js":[87,17],"./ion-back-button.entry.js":[88,18],"./ion-backdrop.entry.js":[89,43],"./ion-button_2.entry.js":[90,19],"./ion-card_5.entry.js":[91,20],"./ion-checkbox.entry.js":[92,21],"./ion-chip.entry.js":[93,22],"./ion-col_3.entry.js":[94,44],"./ion-datetime_3.entry.js":[95,10],"./ion-fab_3.entry.js":[96,23],"./ion-img.entry.js":[97,45],"./ion-infinite-scroll_2.entry.js":[98,46],"./ion-input.entry.js":[99,24],"./ion-item-option_3.entry.js":[100,25],"./ion-item_8.entry.js":[101,26],"./ion-loading.entry.js":[102,27],"./ion-menu_3.entry.js":[103,28],"./ion-modal.entry.js":[104,8],"./ion-nav_2.entry.js":[105,14],"./ion-popover.entry.js":[106,9],"./ion-progress-bar.entry.js":[107,29],"./ion-radio_2.entry.js":[108,30],"./ion-range.entry.js":[109,31],"./ion-refresher_2.entry.js":[110,11],"./ion-reorder_2.entry.js":[111,16],"./ion-ripple-effect.entry.js":[112,47],"./ion-route_4.entry.js":[113,32],"./ion-searchbar.entry.js":[114,33],"./ion-segment_2.entry.js":[115,34],"./ion-select_3.entry.js":[116,35],"./ion-slide_2.entry.js":[117,48],"./ion-spinner.entry.js":[118,13],"./ion-split-pane.entry.js":[119,49],"./ion-tab-bar_2.entry.js":[120,36],"./ion-tab_2.entry.js":[121,15],"./ion-text.entry.js":[122,37],"./ion-textarea.entry.js":[123,38],"./ion-toast.entry.js":[124,39],"./ion-toggle.entry.js":[125,12],"./ion-virtual-scroll.entry.js":[126,50]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=59,e.exports=o},61:function(e,n,t){var r={"./ion-icon.entry.js":[127,57]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=61,e.exports=o},69:function(e,n,t){},81:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(28),c=t.n(i),s=t(22),a=t(2),j=t(48),l=t(26),u=t(13),d=(t(69),t(3)),b=function(){var e=Object(r.useState)(0),n=Object(u.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(0),c=Object(u.a)(i,2),s=c[0],j=c[1],b=Object(r.useState)(0),h=Object(u.a)(b,2),O=h[0],p=h[1],y=Object(r.useState)(0),f=Object(u.a)(y,2),x=f[0],g=f[1],m=Object(r.useState)(0),v=Object(u.a)(m,2),_=(v[0],v[1]),k=Object(r.useState)([]),w=Object(u.a)(k,2),I=w[0],C=w[1],L=Object(r.useState)(!1),P=Object(u.a)(L,2),S=P[0],M=P[1],E=Object(r.useState)(""),B=Object(u.a)(E,2),D=B[0],F=B[1];return Object(d.jsxs)(a.m,{id:"home-page",children:[Object(d.jsx)(a.g,{children:Object(d.jsx)(a.t,{children:Object(d.jsx)(a.s,{class:"ion-text-center",children:"Loan Repayment Calculator"})})}),Object(d.jsxs)(a.e,{fullscreen:!0,children:[Object(d.jsx)(a.n,{slot:"fixed",onIonRefresh:function(e){setTimeout((function(){e.detail.complete()}),3e3)},children:Object(d.jsx)(a.o,{})}),Object(d.jsx)(a.g,{collapse:"condense",children:Object(d.jsx)(a.t,{children:Object(d.jsx)(a.s,{size:"large",children:"Loan Payment"})})}),D&&Object(d.jsx)(a.a,{isOpen:!!D,message:D,buttons:[{text:"Ok",handler:function(){F("")}}]}),S?Object(d.jsxs)("div",{children:[Object(d.jsxs)(a.f,{children:[Object(d.jsxs)(a.r,{class:"ion-margin",children:[Object(d.jsx)(a.d,{children:"Payment No."}),Object(d.jsx)(a.d,{children:"Payment Amount"}),Object(d.jsx)(a.d,{children:"Principal Amount Paid"}),Object(d.jsx)(a.d,{children:"Interest Amount Paid"}),Object(d.jsx)(a.d,{children:"Loan Outstanding balance"})]}),I.map((function(e,n){return Object(d.jsxs)(a.r,{class:"ion-margin",children:[Object(d.jsx)(a.d,{children:n+1}),Object(d.jsx)(a.d,{children:e.payment}),Object(d.jsx)(a.d,{children:e.pp}),Object(d.jsx)(a.d,{children:e.int}),Object(d.jsx)(a.d,{children:e.loanBalance})]},n)})),Object(d.jsx)(a.r,{})]}),Object(d.jsx)(a.c,{class:"calculate",onClick:function(){M(!1),C([]),p(0),_(0),g(0),j(0),o(0)},children:"Back"})]}):Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(a.l,{class:"form",children:[Object(d.jsx)(a.j,{}),Object(d.jsxs)(a.i,{class:"ion-margin",children:[Object(d.jsx)(a.k,{position:"floating",children:"Loan Amount"}),Object(d.jsx)(a.h,{type:"number",placeholder:"",onIonChange:function(e){return p(e.target.value)},clearInput:!0,required:!0})]}),Object(d.jsxs)(a.i,{class:"ion-margin",children:[Object(d.jsx)(a.k,{position:"floating",children:"Rate of Interest"}),Object(d.jsx)(a.h,{type:"number",onIonChange:function(e){return g(e.target.value)},required:!0})]}),Object(d.jsxs)(a.i,{class:"ion-margin",children:[Object(d.jsx)(a.k,{position:"floating",children:"Loan Period(years)"}),Object(d.jsx)(a.h,{type:"number",placeholder:"Enter Loan period in years",onIonChange:function(e){return o(e.target.value)},clearInput:!0,required:!0})]}),Object(d.jsx)(a.j,{class:"ion-margin-start",children:"Or"}),".",Object(d.jsxs)(a.i,{class:"ion-margin",children:[Object(d.jsx)(a.k,{position:"floating",children:"Loan Period(months)"}),Object(d.jsx)(a.h,{type:"number",placeholder:"Enter Loan period in Months",onIonChange:function(e){return j(e.target.value)},clearInput:!0,required:!0})]}),Object(d.jsx)(a.i,{class:"ion-margin",children:Object(d.jsx)(a.c,{class:"calculate",onClick:function(e){return function(e){if(e.preventDefault(),0===O)F("please enter amount");else if(0===x)F("please enter rate of interest");else if(0==t&&0==s)F("please enter Loan Period");else{var n,r=0;console.log(typeof t,t,typeof s,s),r=0!=t&&0!=s?parseInt((12*t).toString())+parseInt(s.toString()):0!=t?12*t:s,console.log(typeof r,r,typeof t,t,typeof s,s),r=parseInt(r.toString()),console.log(typeof r);var o=function(){var e=O*x/1200*Math.pow(1+x/1200,r)/(Math.pow(1+x/1200,r)-1),t=e*Math.pow(1+x/1200,n-1-r),o=e-t,i=o/(x/1200)-t;console.log(e);var c={payment:Math.round(100*e)/100,pp:Math.round(100*t)/100,int:Math.round(100*o)/100,loanBalance:Math.round(100*i)/100};console.log(c),C((function(e){return[].concat(Object(l.a)(e),[c])}))};for(n=1;n<=r;n++)o();M(!0)}}(e)},type:"submit",children:"Calculate"})})]})})]})]})},h=(t(71),t(72),t(73),t(74),t(75),t(76),t(77),t(78),t(79),t(80),t(81),function(){return Object(d.jsx)(a.b,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)(a.q,{children:[Object(d.jsx)(s.b,{path:"/",exact:!0,children:Object(d.jsx)(s.a,{to:"/loan"})}),Object(d.jsx)(s.b,{path:"/loan",exact:!0,children:Object(d.jsx)(b,{})})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,144)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),O()}},[[82,3,4]]]);
//# sourceMappingURL=main.98e74aff.chunk.js.map