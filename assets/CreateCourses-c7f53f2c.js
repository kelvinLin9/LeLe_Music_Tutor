import{B as C}from"./BannerCom-f0dfc00b.js";import{m as h,_ as a,o as c,c as n,d as e,l as B,n as o,b as $,r as t,e as r,F as g}from"./index-ed2a466a.js";import{d}from"./dataStore-3e05d61e.js";import"./bannerStore-4fc6e555.js";const S={computed:{...h(d,["createCourseStep"])},methods:{},created(){}},b={class:"container my-32"},w={class:"row justify-content-center"},y={class:"col-6"},P={class:"progress-container"};function V(s,_,i,p,l,m){return c(),n("div",b,[e("div",w,[e("div",y,[e("div",P,[e("div",{class:"progress",style:B({width:`${(s.createCourseStep-1)*33.3333}%`})},null,4),e("div",{class:o(["circle fs-4 fw-bold",{active:s.createCourseStep>0}])},"1",2),e("div",{class:o(["circle fs-4 fw-bold",{active:s.createCourseStep>1}])},"2",2),e("div",{class:o(["circle fs-4 fw-bold",{active:s.createCourseStep>2}])},"3",2),e("div",{class:o(["circle fs-4 fw-bold",{active:s.createCourseStep>3}])},"4",2)])])])])}const k=a(S,[["render",V],["__scopeId","data-v-44de0b34"]]);const z={components:{BannerCom:C,ProgressBar:k},computed:{},methods:{...$(d,["onAuthStateChanged"])},created(){}};function A(s,_,i,p,l,m){const u=t("BannerCom"),f=t("ProgressBar"),v=t("RouterView");return c(),n(g,null,[r(u),r(f),r(v)],64)}const j=a(z,[["render",A],["__scopeId","data-v-776cfb67"]]);export{j as default};