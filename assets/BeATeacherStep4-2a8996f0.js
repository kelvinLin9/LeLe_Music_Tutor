import{_ as o,a as r,b as t,o as s,c as a}from"./index-6bf52aae.js";import{d as n}from"./dataStore-bae4dbfe.js";import{g as c}from"./goStore-063187de.js";import{b as i}from"./bannerStore-6782d8e8.js";import"./sweetalert2-a2985e93.js";import"./logInStore-908714a9.js";const p={computed:{...r(n,["createCourseStep"])},methods:{...t(c,["goHomePage","goBeATeacherStep1"]),...t(i,["getBannerInfo"])},created(){this.getBannerInfo(new URL("/LeLe_Music_Tutor/assets/banner-fefbe1a0.jpg",self.location).href,"完成","COMPLETE","準備好了!您的課程將準備好在平台上展示。"),this.createCourseStep=4},mounted(){this.$swal.fire({title:"<h1>恭喜完成開課</h1>",icon:"success",text:"課程審核需要2~3個工作天",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"回到首頁",confirmButtonText:"繼續開課",confirmButtonColor:"#ff715f"}).then(e=>{e.isConfirmed?this.$router.push("/CreateCourses/BeATeacherStep1"):this.$router.push("/")})}},u={class:"container"};function _(e,f,m,h,d,l){return s(),a("div",u)}const x=o(p,[["render",_],["__scopeId","data-v-e40b0e8c"]]);export{x as default};
