import{_ as f,a as _,b as n,r as c,o as d,c as m,e as s,w as h,d as e,n as u,f as g}from"./index-fbfce08d.js";import{g as v}from"./goStore-1a6666d2.js";import{d as p}from"./dataStore-9e66dbec.js";import{b as S}from"./bannerStore-b7f8890a.js";import"./logInStore-5901e0a7.js";import"./cartStore-1d70ac00.js";const A={computed:{..._(p,["beATeacherData","teacherData","createCourseStep"])},methods:{...n(p,["uploadPhoto"]),...n(v,["goBeATeacherStep1","goBeATeacherStep3"]),...n(S,["getBannerInfo"])},created(){this.getBannerInfo(new URL("/music_tutor/assets/banner-aea474d0.jpg",self.location).href,"INTRODUCE","課程介紹","分享您的音樂願景，簡單介紹您的課程內容，為學生營造期待感"),this.createCourseStep=2}},T={class:"container mb-5"},y={class:"row justify-content-center mb-3"},B={class:"col-12 col-lg-8"},V=e("label",{for:"courseIntro",class:"form-label"}," 課程介紹： ",-1),w={class:"row justify-content-center mb-3"},C={class:"col-12 col-lg-8 mb-3"},I={class:"row"},D=e("div",{class:"col-auto"},[e("label",{for:"coursePhoto",class:"col-form-label",accept:"image/png, image/jpeg"}," 上傳一張課程封面照： ")],-1),j={class:"col-5"},k={class:"col-3"},$=["src"],E={class:"row justify-content-center"},F={class:"col-12 col-lg-8 d-flex justify-content-between"},N=e("button",{type:"submit",class:"btn btn-primary col-5 col-md-3"}," 下一步 ",-1);function P(t,o,U,q,M,R){const l=c("VField"),i=c("ErrorMessage"),b=c("VForm");return d(),m("div",T,[s(b,{onSubmit:o[3]||(o[3]=r=>t.goBeATeacherStep3())},{default:h(({errors:r})=>[e("div",y,[e("div",B,[V,s(l,{name:"課程介紹",class:u(["form-control",{"is-invalid":r.課程介紹}]),id:"courseIntro",as:"textarea",rows:"5",rules:"required|max:500",placeholder:"限定500字元內",modelValue:t.beATeacherData.courseIntro,"onUpdate:modelValue":o[0]||(o[0]=a=>t.beATeacherData.courseIntro=a)},null,8,["class","modelValue"]),s(i,{class:"invalid-feedback",name:"課程介紹"})])]),e("div",w,[e("div",C,[e("div",I,[D,e("div",j,[s(l,{name:"課程封面",type:"file",id:"coursePhoto",class:u(["form-control",{"is-invalid":r.課程封面}]),rules:"required",onChange:o[1]||(o[1]=a=>t.uploadPhoto("course",a))},null,8,["class"]),s(i,{class:"invalid-feedback",name:"課程封面"})]),e("div",k,[t.beATeacherData.courseImg?(d(),m("img",{key:0,class:"img-fluid",src:t.beATeacherData.courseImg,alt:"課程封面照"},null,8,$)):g("",!0)])])])]),e("div",E,[e("div",F,[e("button",{type:"button",class:"btn btn-outline-primary col-5 col-md-3",onClick:o[2]||(o[2]=a=>t.goBeATeacherStep1())}," 上一步 "),N])])]),_:1})])}const H=f(A,[["render",P]]);export{H as default};
