import{_ as g,m as f,a as b,b as m,o as a,c as s,d as e,f as _,g as y,t as i,n as c,i as l,l as v,F as n,k as h,p as T,j as k}from"./index-fbfce08d.js";import{l as D}from"./logInStore-5901e0a7.js";import{d as p}from"./dataStore-9e66dbec.js";import{_ as w}from"./預設大頭貼-17961667.js";import"./cartStore-1d70ac00.js";const x={data(){return{uid:"",defaultCkeditorImg:"https://i.imgur.com/EjLcauL.jpg"}},computed:{...f(p,["user","isMember","otherTeacherData"]),...b(p,[])},methods:{...m(D,["signOut"]),...m(p,["onAuthStateChanged","getOneTeacherFirebaseData"])},created(){this.onAuthStateChanged(),this.uid=this.$route.params.TeacherPageId,this.getOneTeacherFirebaseData(this.uid)}},d=t=>(T("data-v-504fc6b2"),t=t(),k(),t),I={class:"container"},S={class:"row my-16"},C={class:"col-12 col-lg-3 d-flex flex-column align-items-center mb-32 py-32 shadow h-100"},L={class:"user-photo position-relative mb-16"},$=["src"],j={key:1,src:w,alt:"預設大頭照"},F={class:"mb-8 fs-3 fw-bold position-relative"},M={class:"my-8 w-100"},N=d(()=>e("p",{class:"ps-8 fw-bold"},"關於我：",-1)),A={class:"fs-7 p-8"},B={class:"d-flex justify-content-around w-50 ms-auto mb-8"},O=["href"],P=["href"],V=["href"],z={class:"col-12 col-lg-9"},E=["innerHTML"],H={class:"my-16"},W={class:"shadow p-16"},q={class:"row d-flex align-items-center mb-16"},G=d(()=>e("p",{class:"col-auto fw-bold"},"音樂風格：",-1)),J={class:"col-9"},K={class:"row d-flex align-items-center mb-16"},Q=d(()=>e("p",{class:"col-auto fw-bold"},"擅長領域：",-1)),R={class:"col-9"},U={class:"row d-flex align-items-center mb-16"},X=d(()=>e("p",{class:"col-auto fw-bold"},"教學語言：",-1)),Y={class:"col-9"};function Z(t,r,ee,te,u,ae){return a(),s("div",I,[e("div",S,[e("div",C,[e("div",L,[t.otherTeacherData.teacherImg?(a(),s("img",{key:0,src:t.otherTeacherData.teacherImg,alt:"大頭照"},null,8,$)):_("",!0),t.otherTeacherData.teacherImg?_("",!0):(a(),s("img",j))]),e("div",F,[y(i(t.otherTeacherData.displayName)+" ",1),e("i",{class:c(t.otherTeacherData.gender)},null,2)]),e("div",M,[N,e("p",A,i(t.otherTeacherData.teacherIntro),1)]),e("div",B,[e("a",{href:t.otherTeacherData.facebook,target:"_black",onClick:r[0]||(r[0]=l(()=>{},["prevent"]))},[e("i",{class:c(["bi bi-facebook fs-3 text-secondary",{"text-blue":t.otherTeacherData.facebook}])},null,2)],8,O),e("a",{href:t.otherTeacherData.instagram,target:"_black",onClick:r[1]||(r[1]=l(()=>{},["prevent"]))},[e("i",{class:c(["bi bi-instagram fs-3 text-secondary",{"text-danger":t.otherTeacherData.instagram}])},null,2)],8,P),e("a",{href:t.otherTeacherData.discord,target:"_black",onClick:r[2]||(r[2]=l(()=>{},["prevent"]))},[e("i",{class:c(["bi bi-discord fs-3 text-secondary",{"text-purple":t.otherTeacherData.discord}])},null,2)],8,V)])]),e("div",z,[e("div",{class:"ckeditor-img position-relative shadow",style:v({"background-image":`url(${t.otherTeacherData.ckeditorImg||u.defaultCkeditorImg})`})},null,4),e("div",{innerHTML:t.otherTeacherData.ckeditor,class:"border p-16 shadow"},null,8,E),e("div",H,[e("div",W,[e("div",q,[G,e("div",J,[(a(!0),s(n,null,h(t.otherTeacherData.musicStyle,o=>(a(),s("span",{class:"badge rounded-pill text-bg-primary text-white fs-6 py-8 mx-4 px-16 my-4",key:o},i(o),1))),128))])]),e("div",K,[Q,e("div",R,[(a(!0),s(n,null,h(t.otherTeacherData.expertise,o=>(a(),s("span",{class:"badge rounded-pill text-bg-primary text-white fs-6 py-8 mx-4 px-16 my-4",key:o},i(o),1))),128))])]),e("div",U,[X,e("div",Y,[(a(!0),s(n,null,h(t.otherTeacherData.language,o=>(a(),s("span",{class:"badge rounded-pill text-bg-primary text-white fs-6 py-8 mx-4 px-16 my-4",key:o},i(o),1))),128))])])])])])])])}const de=g(x,[["render",Z],["__scopeId","data-v-504fc6b2"]]);export{de as default};
