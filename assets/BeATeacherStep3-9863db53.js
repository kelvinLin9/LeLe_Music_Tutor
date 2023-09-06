import{_ as p,m,a as u,b as r,o as n,c as l,d as s,t as o,g as i,f as _,F as h,k as b,p as f,j as g}from"./index-ca9666ff.js";import{d}from"./dataStore-899c082e.js";import{g as v}from"./goStore-34497f8b.js";import{b as y}from"./bannerStore-e2bc6bd2.js";import"./logInStore-79c9f840.js";import"./cartStore-87158f16.js";const w={computed:{...m(d,["beATeacherData","teacherData"]),...u(d,["createCourseStep"])},methods:{...r(v,["goBeATeacherStep2","goBeATeacherStep4"]),...r(d,["SetFirebaseCourseData"]),...r(y,["getBannerInfo"])},created(){this.getBannerInfo(new URL("/music_tutor/assets/banner-16dac52d.jpg",self.location).href,"PREVIEW","頁面預覽 ","一探學習體驗，預覽您的課程頁面，確保效果完美呈現"),this.createCourseStep=3}},t=e=>(f("data-v-a7a8bf95"),e=e(),g(),e),D={class:"container mt-32"},T={class:"row"},S={class:"col-12 col-lg-8"},A={class:"pe-xl-48"},k=["src"],B={class:"col-12 col-lg-4 d-flex flex-column"},I={class:"fs-2 fw-bold"},$={class:"mt-16 text-delete"},x={class:"container mt-32"},C={class:"row align-items-start"},N={class:"col-12 col-lg-8"},j={class:"col-auto cursor-pointer"},F=["src"],V={class:"col-auto fs-2 cursor-pointer"},E={class:"row my-3"},L={class:"col-12 col-lg-10"},R=t(()=>s("p",{class:"fs-4 mb-8 fw-bold"},"關於課程",-1)),W={class:"row row-cols-2 my-3 g-3"},M={class:"col-auto"},O={class:"d-flex align-items-center"},P=t(()=>s("span",{class:"material-symbols-outlined fs-1 me-8"},"timer",-1)),U={class:"text-delete fs-7"},q=t(()=>s("br",null,null,-1)),z={class:"fs-6 text-dark fw-bold"},G={class:"col-auto"},H={class:"d-flex align-items-center"},J=t(()=>s("span",{class:"material-symbols-outlined fs-1 me-8"},"group",-1)),K={key:0,class:"text-delete fs-7"},Q=t(()=>s("br",null,null,-1)),X={class:"fs-6 text-dark fw-bold"},Y={key:0,class:"col-auto"},Z={class:"d-flex align-items-center"},ss=t(()=>s("span",{class:"material-symbols-outlined fs-1 me-8"},"map",-1)),es={class:"text-delete fs-7"},ts=t(()=>s("br",null,null,-1)),os={class:"fs-6 text-dark fw-bold"},as={class:"col-12 col-xl-auto"},cs={class:"d-flex align-items-center"},ns=t(()=>s("span",{class:"material-symbols-outlined fs-1 me-8"},"school",-1)),ls=t(()=>s("span",{class:"text-delete fs-7"}," 上課方式 ",-1)),is=t(()=>s("br",null,null,-1)),rs={class:"col-12 col-lg-4 p-32 border sticky-course-page rounded-4"},ds=t(()=>s("h4",{class:"border-bottom pb-24 mb-24"},"購買單堂課程",-1)),_s={class:"mb-3"},hs=t(()=>s("span",{class:"fs-5 me-16"},"售價",-1)),ps={class:"fs-1"},ms=t(()=>s("div",{class:"d-flex justify-content-between"},[s("button",{type:"button",class:"btn btn-outline-primary w-75"}," 立即購買 "),s("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"加入購物車"},[s("span",{class:"material-symbols-outlined fs-3 align-middle"},"shopping_cart")])],-1)),us={class:"row justify-content-center mt-16 mb-32"},bs={class:"col-12 d-flex justify-content-between"};function fs(e,a,gs,vs,ys,ws){return n(),l(h,null,[s("div",D,[s("div",T,[s("div",S,[s("div",A,[s("img",{src:e.beATeacherData.courseImg,alt:"課程圖片",class:"course-photo rounded-4"},null,8,k)])]),s("div",B,[s("h1",I,o(e.beATeacherData.courseName),1),s("p",$,o(e.beATeacherData.courseIntro),1)])])]),s("div",x,[s("div",C,[s("div",N,[s("div",{class:"row align-items-center",onClick:a[0]||(a[0]=c=>e.getOneTeacherFirebaseData(e.teacherData.uid))},[s("div",j,[s("img",{src:e.teacherData.teacherImg,alt:"老師照片",class:"user-photo"},null,8,F)]),s("div",V,o(e.teacherData.displayName),1)]),s("div",E,[s("div",L,o(e.teacherData.teacherIntro),1)]),R,s("div",W,[s("div",M,[s("div",O,[P,s("span",U,[i(" 課程時長"),q,s("span",z,o(e.beATeacherData.time)+"分鐘",1)])])]),s("div",G,[s("div",H,[J,e.beATeacherData.whoBuy?(n(),l("span",K,[i(" 已被購買 "),Q,i(),s("span",X,o(e.beATeacherData.whoBuy.length||0)+" 次",1)])):_("",!0)])]),e.beATeacherData.cityName?(n(),l("div",Y,[s("div",Z,[ss,s("span",es,[i(" 上課地點"),ts,i(),s("span",os,o(e.beATeacherData.cityName),1)])])])):_("",!0),s("div",as,[s("div",cs,[ns,s("div",null,[ls,is,(n(!0),l(h,null,b(e.beATeacherData.courseMethod,c=>(n(),l("span",{class:"fs-6 bg-primary rounded px-2 text-dark fw-bold me-8",key:c},o(c),1))),128))])])])])]),s("div",rs,[ds,s("div",_s,[hs,s("span",ps,"NT$"+o(e.$filters.currency(e.beATeacherData.price)),1)]),ms])]),s("div",us,[s("div",bs,[s("button",{type:"button",class:"btn btn-outline-primary px-48",onClick:a[1]||(a[1]=c=>e.goBeATeacherStep2())}," 上一步 "),s("button",{type:"button",class:"btn btn-primary px-48",onClick:a[2]||(a[2]=c=>(e.goBeATeacherStep4(),e.SetFirebaseCourseData()))}," 下一步 ")])])])],64)}const Is=p(w,[["render",fs],["__scopeId","data-v-a7a8bf95"]]);export{Is as default};
