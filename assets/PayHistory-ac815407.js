import{_ as C,m as D,b as m,r as c,o as e,c as o,e as _,d as t,h as k,f as l,w,F as d,k as h,t as i}from"./index-70c5111d.js";import{B}from"./BannerCom-566be6e7.js";import{C as L}from"./CoursesLoadingList-a4125856.js";import{d as y}from"./dataStore-94d1a8b1.js";import{b as v}from"./bannerStore-685523b4.js";const S={components:{BannerCom:B,CoursesLoadingList:L},computed:{...D(y,["studentData","user","userCartCourses","couponData","loading"])},methods:{...m(y,["onAuthStateChanged"]),...m(v,["getBannerInfo"]),ss(){console.log(this.studentData.payHistory);const u=["Danny","Danny","Jack","Sam","Danny"].reduce((a,n)=>(n in a?a[n]++:a[n]=1,a),{});console.log(u)}},created(){this.onAuthStateChanged(),this.getBannerInfo(new URL("/music_tutor/assets/banner-fefbe1a0.jpg",self.location).href,"購買紀錄","History","詳盡紀錄，金流一目了然"),this.ss()}},$={class:"container my-32"},H={key:1,class:"text-center mt-48"},N=t("p",{class:"fs-2 fw-bold"},"無任何購買紀錄",-1),x=t("button",{type:"button",class:"btn btn-outline-primary mt-16"}," 前往購買 ",-1),A={key:2,class:"card shadow-sm"},Y={class:"card-body"},R={class:"table-responsive"},V={class:"table table-hover"},F=t("thead",{class:"border-bottom-3 fw-bold"},[t("tr",{class:"align-middle"},[t("th",{class:"text-nowrap"},"購買時間"),t("th",{class:"text-nowrap"},"購買品項"),t("th",{class:"text-nowrap"},"購買金額")])],-1),I={class:"text-nowrap"},M={class:"text-nowrap"},T={class:"list-unstyled"},E={class:"text-nowrap"};function J(s,u,a,n,P,U){const f=c("BannerCom"),g=c("CoursesLoadingList"),b=c("RouterLink");return e(),o(d,null,[_(f),t("div",$,[s.loading?(e(),k(g,{key:0})):l("",!0),s.studentData.payHistory.length===0&&!s.loading?(e(),o("div",H,[N,_(b,{to:"/AllCourses"},{default:w(()=>[x]),_:1})])):l("",!0),s.studentData.payHistory.length!==0&&!s.loading?(e(),o("div",A,[t("div",Y,[t("div",R,[t("table",V,[F,t("tbody",null,[(e(!0),o(d,null,h(s.studentData.payHistory,r=>(e(),o("tr",{key:r},[t("td",I,i(this.$moment(r.timestamp).format("YYYY-MM-DD")),1),t("td",M,[t("ul",T,[(e(!0),o(d,null,h(r.payData.payData,p=>(e(),o("li",{key:p},i(p.courseName),1))),128))])]),t("td",E,"NT$"+i(s.$filters.currency(r.payData.finalTotal)),1)]))),128))])])])])])):l("",!0)])],64)}const Q=C(S,[["render",J]]);export{Q as default};
