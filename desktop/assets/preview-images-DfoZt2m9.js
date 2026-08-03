const v=n;(function(a,e){const x=n,t=a();for(;;)try{if(-parseInt(x(155))/1*(-parseInt(x(166))/2)+parseInt(x(159))/3*(-parseInt(x(158))/4)+parseInt(x(145))/5*(-parseInt(x(148))/6)+parseInt(x(143))/7+parseInt(x(152))/8*(-parseInt(x(139))/9)+parseInt(x(151))/10*(-parseInt(x(147))/11)+parseInt(x(138))/12===e)break;t.push(t.shift())}catch{t.push(t.shift())}})(d,660167);const g=(a,e=g,x=e.f||(e.f=["./index-BBkNVUpC.js","./vue-vendor-Cji_bMVs.js","./typescript-Bp3YSIOJ.js","./event-D9sDSs7C.js","./use-global-config-BK-XlOTO.js","./index-mC5UljNp.js","./raf-BQk0oQqW.js","./index-55Gw64cD.js","./css-BVsIiJEO.js","./css-BnlPYOH9.css","./base-BhyKBIh7.css"]))=>a[v(165)](t=>x[t]);function d(){const a=["DhjPBq","nJy2mZyWmvvSC1jJsG","CMvTB3zL","nZa1nta1EfLlzvzZ","yxbWzw5Kq2HPBgq","nZDZy01WwMu","ndjmq09JENG","DxjS","AgvHza","mte4otG2mhbUrxD2sW","oePQAe9iCa","C3r5Bgu","BwLU","nwDbuKzuDG","C3rYAw5N","Bwf4","ne9vA29zvW","mZuYmduXoeDMt2Hkta","y3jLyxrLrwXLBwvUDa","BgvUz3rO","yM9KEq","z2v0rwXLBwvUDej5swq","zgvZA3rVCa","BwfW","mJmXnJy0yMPpt3j6","mJu1mZKYndbOu3jPtKW","ndu4mtLnrK1Psu4","Dgv4DenVBNrLBNq","Bg9MlwLTywDLlxbYzxzPzxC"];return d=function(){return a},d()}import{i as I,_}from"./index-C3UCXKBt.js";import{A as y,a_ as h}from"./vue-vendor-Cji_bMVs.js";const b="lof-image-preview-fix";function j(a){const e=v;return a[e(165)](x=>typeof x==e(156)?x[e(142)]():x&&typeof x=="object"&&x.url?String(x[e(149)]).trim():"").filter(Boolean)}function n(a,e){a=a-138;const x=d();let t=x[a];if(n.cJVydG===void 0){var s=function(u){const r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";let c="",l="";for(let o=0,p,m,B=0;m=u.charAt(B++);~m&&(p=o%4?p*64+m:m,o++%4)?c+=String.fromCharCode(255&p>>(-2*o&6)):0)m=r.indexOf(m);for(let o=0,p=c.length;o<p;o++)l+="%"+("00"+c.charCodeAt(o).toString(16)).slice(-2);return decodeURIComponent(l)};n.qwANXq=s,n.psexRw={},n.cJVydG=!0}const w=x[0],f=a+w,i=n.psexRw[f];return i?t=i:(t=n.qwANXq(t),n.psexRw[f]=t),t}function C(){const a=v;if(typeof document>"u"||document[a(163)](b))return;const e=document[a(160)](a(153));e.id=b,e[a(140)]=`
.van-image-preview {
  width: 100vw !important;
  max-width: 100vw !important;
  left: 0 !important;
  right: 0 !important;
  box-sizing: border-box !important;
}
.van-image-preview .van-swipe,
.van-image-preview__swipe {
  width: 100% !important;
  height: 100% !important;
}
.van-image-preview .van-swipe-item,
.van-image-preview__swipe-item {
  width: 100vw !important;
  box-sizing: border-box !important;
}
.van-image-preview__image,
.van-image-preview__image-wrap {
  width: 100% !important;
  max-width: 100vw !important;
}
.van-image-preview .van-image,
.van-image-preview .van-image__img {
  max-width: 100vw !important;
  max-height: 100vh !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
}
`,document[a(150)][a(146)](e)}async function D(a,e=0){const x=v,t=j(a);if(!t[x(161)])return;const s=Math[x(154)](Math[x(157)](0,e),t.length-1),w="desktop";if(w==="mobile"||w!==x(164)&&I()){C();const{showImagePreview:r}=await _(async()=>{const{showImagePreview:c}=await import("./empty-module-FTO8YWRQ.js");return{showImagePreview:c}},[],import.meta.url);await _(()=>import("./empty-module-FTO8YWRQ.js"),[],import.meta.url),r({images:t,startPosition:s,closeable:!0,teleport:x(162),className:x(141)});return}const{ElImageViewer:f}=await _(async()=>{const{ElImageViewer:r}=await import("./index-BBkNVUpC.js");return{ElImageViewer:r}},g([0,1,2,3,4,5,6,7]),import.meta.url);await _(()=>import("./css-BVsIiJEO.js"),g([8,9,10]),import.meta.url);const i=document.createElement("div");document.body[x(146)](i);const u=y(f,{urlList:t,initialIndex:s,teleported:!0,onClose:()=>{const r=x;h(null,i),i[r(144)]()}});h(u,i)}export{D as p};
