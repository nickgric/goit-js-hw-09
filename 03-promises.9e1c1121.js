var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=r);var n=r("iQIUW");n.Notify.init({success:{background:"#000000",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(0,0,0,0.2)"},failure:{background:"#000000",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"}});const l=document.querySelector('[name="delay"]'),i=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]'),s=(document.querySelector("button"),document.querySelector("form"));function f(e,o){const t=Math.random()>.3;return new Promise(((r,n)=>{setTimeout((()=>{t?r({position:e,delay:o}):n({position:e,delay:o})}),o)}))}s.addEventListener("submit",(function(e){if(e.preventDefault(),+l.value<=0||+i.value<=0||+a.value<=0)return void n.Notify.failure("Select values more than zero please!");let o=+l.value;for(let e=1;e<=+a.value;e+=1)f(e,o).then((({position:e,delay:o})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o+=+i.value;s.reset()}));
//# sourceMappingURL=03-promises.9e1c1121.js.map