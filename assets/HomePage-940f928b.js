import{S as T,a as I}from"./navigation-55d02feb.js";import{m as R,b as h,_ as w,r as c,o as l,c as v,e as d,w as n,F as j,k as H,h as C,d as a,l as J,g as p,t as r,n as m,i as u,a as z,f as A,q as W,v as E,s as O,p as K,j as Z,u as M}from"./index-6bf52aae.js";import{d as _}from"./dataStore-bae4dbfe.js";import{g as L,f as F}from"./goStore-063187de.js";import{C as B}from"./CoursesLoading-042ae435.js";import{w as $}from"./windowStore-03bdf125.js";import"./sweetalert2-a2985e93.js";import"./logInStore-908714a9.js";const V={components:{Swiper:T,SwiperSlide:I},setup(){return{}},computed:{...R(_,["coursesData","bookmarkState","top6courses"])},methods:{...h(_,["toggleBookmark","getOneCoursesFirebaseData"]),...h(L,["goCoursePage"])},created(){}},D={class:"course-card"},P=["onClick"],Y={class:"details d-flex flex-column"},G={class:"fs-6"},U=a("i",{class:"bi bi-tags me-6"},null,-1),Q={class:"mt-auto ms-auto fs-5"},q=["onClick"],X=["onClick"],aa={class:"fs-5 fw-bold d-flex"},ta={class:"fs-6"},sa={class:"d-flex align-items-center"},ea=a("span",{class:"material-symbols-outlined fs-6 me-4"},"timer",-1),oa=a("span",{class:"material-symbols-outlined fs-6 ms-8 me-4"},"map",-1),ca=a("span",{class:"material-symbols-outlined fs-6 ms-8 me-4"},"group",-1),da={class:"px-16 pb-16 mt-auto"},la={class:"fs-5 fw-bold"};function na(t,e,y,k,S,x){const i=c("SwiperSlide"),f=c("swiper");return l(),v("div",null,[d(f,{loop:!0,slidesPerView:1,spaceBetween:20,freeMode:!0,pagination:{clickable:!0},navigation:"",scrollbar:{draggable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:26},992:{slidesPerView:3,spaceBetween:26},1200:{slidesPerView:4,spaceBetween:26}},class:"mySwiper px-24"},{default:n(()=>[(l(!0),v(j,null,H(t.top6courses,s=>(l(),C(i,{key:s.id,class:"mb-32"},{default:n(()=>[a("div",D,[a("div",{class:"meta cursor-pointer",onClick:g=>t.goCoursePage(s.id)},[a("div",{class:"photo",style:J({backgroundImage:`url(${s.data.courseImg})`})},null,4),a("ul",Y,[a("li",G,[U,p(" "+r(s.data.courseCategory),1)]),a("li",Q,[a("i",{class:m(["",t.bookmarkState(s.id)]),onClick:u(g=>t.toggleBookmark(s.id),["stop"]),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"加入 / 移除收藏"},null,10,q)])])],8,P),a("div",{class:"description cursor-pointer",onClick:g=>t.goCoursePage(s.id)},[a("h2",aa,r(s.data.courseName),1),a("h3",ta,"by "+r(s.data.displayName),1),a("p",sa,[ea,p(" "+r(s.data.time)+" ",1),oa,p(" "+r(s.data.cityName||"線上")+" ",1),ca,p(" "+r(s.data.whoBuy.length),1)])],8,X),a("div",da,[a("span",la,"NT$ "+r(t.$filters.currency(s.data.price)),1)])])]),_:2},1024))),128))]),_:1})])}const ia=w(V,[["render",na]]);const ra={computed:{...z($,["homeLoading"])},methods:{scrollStop(){const t=function(e){e.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",t,!1)},scrollMove(){const t=function(e){e.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",t,!1)}},mounted(){this.homeLoading=!0,this.scrollStop(),setTimeout(()=>{this.scrollMove(),this.homeLoading=!1},3500)}},pa={key:0,class:"home-loading position-fixed"},va={version:"1.1",id:"lion-dashed",xmlns:"http://www.w3.org/2000/svg",class:"animal-svg animal-svg--dashed","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"-150 -50 1920 1080",style:{"enable-background":"new 0 0 1920 1080"},"xml:space":"preserve"};function fa(t,e,y,k,S,x){return t.homeLoading?(l(),v("div",pa,[(l(),v("svg",va,[a("g",null,[a("g",null,[a("path",{id:"lion--dashed--path",class:m(["st0",{"draw-animation":!0}]),d:`M664.64,587.46c-10,7.78-18.67,11.67-26.01,11.67c-4.89,0-16.67-2.81-35.34-8.43\r
          c-7.78-2.38-14.78-3.57-21-3.57h-6.67c8.67-13.34,15.22-30.56,19.67-51.68c23.34,0,43.51-9.5,60.51-28.51\r
          c17-19,25.51-41.18,25.51-66.52c0-14.45-3.12-25.89-9.34-34.34c-6.23-8.44-14.78-12.67-25.67-12.67\r
          c-21.12,0-38.46,15.45-52.01,46.34c-6.45,14.67-13.23,38.46-20.34,71.35c-3.33-0.89-6.62-1.94-9.84-3.17\r
          c-3.23-1.22-8.84-3.5-16.84-6.83l-5-2.67l-5.33-2c-1.78,4-2.67,9-2.67,15c0,4.23,1.72,7.62,5.17,10.17\r
          c3.44,2.56,10.28,5.5,20.5,8.84l9.34,2.67c-4.45,18.52-7.83,31.52-10.17,38.99c-2.33,7.48-4.62,13.22-6.83,17.23\r
          c-13.56,1.79-23.23,4.02-29.01,6.69c-10,4.69-15,12.27-15,22.76c0,2.01,0.44,3.34,1.33,4.02c0.67,0.44,2.22,0.67,4.67,0.67\r
          c7.78,0,15.72-1.36,23.84-4.08c8.11-2.72,17.17-7.14,27.17-13.26c4.89,0.89,15.89,4.33,33.01,10.34c13.34,4.67,24.56,7,33.67,7\r
          c15.11,0,36.12-12,63.02-36.01v-28.34C682.31,572.02,672.2,581.46,664.64,587.46z M644.64,417.42c8.22,0,12.34,7.12,12.34,21.34\r
          c0,18.9-5,35.57-15,50.01c-10.89,15.56-24.34,23.34-40.34,23.34C614.07,448.99,628.41,417.42,644.64,417.42z`})]),a("g",null,[a("path",{id:"lion--dashed--path",class:m(["st0",{"draw-animation":!0}]),d:`M747.66,602.46c-7.78,0-13.45-3.44-17-10.34c-2.45-4.67-3.67-10.78-3.67-18.34v-1.33l7-3\r
          c18.45-7.55,31.78-14.34,40.01-20.34c15.56-11.34,23.34-24.56,23.34-39.68c0-16.89-8.89-25.34-26.67-25.34\r
          c-18.89,0-35.57,9.39-50.01,28.17c-14.45,18.79-21.67,40.29-21.67,64.52c0,12.23,3.05,23.17,9.17,32.84\r
          c6.11,9.67,15.06,14.5,26.84,14.5c32.23,0,65.46-12.34,99.69-37.01v-28.01c-17.56,15.34-33.12,26.4-46.68,33.17\r
          C774.45,599.08,761,602.46,747.66,602.46z M745.66,518.61c7.55-9,15-13.5,22.34-13.5c5.11,0,7.67,2.45,7.67,7.34\r
          c0,6.67-4.12,13.39-12.34,20.17c-8.23,6.78-19.23,12.73-33.01,17.84C732.99,538.23,738.1,527.61,745.66,518.61z`})]),a("g",null,[a("path",{class:m(["st0",{"draw-animation":!0}]),d:`M916.7,589.13c-13.56,7.78-24.79,11.67-33.67,11.67c-10.45,0-15.67-8-15.67-24l1.67-20.34\r
          c15.11-18,27.12-33.23,36.01-45.68c12.45-17.11,21.78-32.34,28.01-45.68c7.33-15.56,11-29.67,11-42.34\r
          c0-8.44-2.22-15.5-6.67-21.17c-4.45-5.67-9.89-8.5-16.34-8.5c-8,0-16,3.89-24.01,11.67c-14.23,15.56-27.56,43.01-40.01,82.35\r
          c-11.56,36.68-17.34,66.57-17.34,89.69c0,13.34,2.33,24,7,32.01c5.55,9.78,14.34,14.67,26.34,14.67s24.22-2.72,36.68-8.17\r
          c12.45-5.44,27.22-14.72,44.34-27.84v-28.34C942.71,571.35,930.26,581.35,916.7,589.13z M890.36,464.1\r
          c10.89-32.01,20-48.01,27.34-48.01c4,0,6,3.78,6,11.34c0,8-2.06,16.73-6.17,26.17c-4.12,9.45-10.17,20.4-18.17,32.84\r
          c-4.67,7.33-13.23,19.79-25.67,37.34C877.03,507.11,882.58,487.22,890.36,464.1z`})]),a("g",null,[a("path",{id:"lion--dashed--path",class:m(["st0",{"draw-animation":!0}]),d:`M1047.4,592.3c-13.56,6.78-27.01,10.17-40.34,10.17c-7.78,0-13.45-3.44-17-10.34\r
          c-2.45-4.67-3.67-10.78-3.67-18.34v-1.33l7-3c18.45-7.55,31.78-14.34,40.01-20.34c15.56-11.34,23.34-24.56,23.34-39.68\r
          c0-16.89-8.89-25.34-26.67-25.34c-18.9,0-35.57,9.39-50.01,28.17c-14.45,18.79-21.67,40.29-21.67,64.52\r
          c0,12.23,3.05,23.17,9.17,32.84c6.11,9.67,15.06,14.5,26.84,14.5c32.23,0,65.46-12.34,99.69-37.01v-28.01\r
          C1076.52,574.46,1060.96,585.52,1047.4,592.3z M1005.06,518.61c7.55-9,15-13.5,22.34-13.5c5.11,0,7.67,2.45,7.67,7.34\r
          c0,6.67-4.12,13.39-12.34,20.17c-8.23,6.78-19.23,12.73-33.01,17.84C992.39,538.23,997.5,527.61,1005.06,518.61z`,stroke:"#fff","stroke-miterlimit":"10",fill:"none"})])])]))])):A("",!0)}const ma=w(ra,[["render",fa],["__scopeId","data-v-1e25c23a"]]);const ua={components:{Swiper:T,SwiperSlide:I},computed:{...z(F,["selectCourseName"])},methods:{...h(L,["goAllCourses"])}},o=t=>(K("data-v-431d3668"),t=t(),Z(),t),ha={class:""},ba=o(()=>a("div",{class:"header-bg-1"},null,-1)),ga=o(()=>a("div",{class:"header-bg-2"},null,-1)),_a=o(()=>a("div",{class:"header-bg-3"},null,-1)),wa={class:"container"},ya={class:"blockquote px-16 px-md-32 position-absolute rounded-4"},ka=o(()=>a("h2",{class:"fs-36 fs-sm-48 text-dark mb-16"}," 找尋像好友一樣的音樂導師 ",-1)),Sa=o(()=>a("h3",{class:"fs-6 text-dark mb-24"}," 在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。 ",-1)),xa={class:"mb-8 position-relative"},Ca=o(()=>a("span",{class:"material-symbols-outlined align-middle text-gray-600 cursor-pointer lh-lg"},"search",-1)),Aa=[Ca],Ma={class:"home-pills"},La=o(()=>a("span",{class:"badge rounded-pill text-bg-primary text-white me-8 fw-normal"},"鋼琴",-1)),Ta=[La],Ia=o(()=>a("span",{class:"badge rounded-pill text-bg-primary text-white me-8 fw-normal"},"編曲",-1)),Ra=[Ia],ja=o(()=>a("span",{class:"badge rounded-pill text-bg-primary text-white me-8 fw-normal"},"流行歌唱",-1)),za=[ja],Ka=o(()=>a("span",{class:"badge rounded-pill text-bg-primary text-white me-8 fw-normal"},"木吉他",-1)),Za=[Ka];function Na(t,e,y,k,S,x){const i=c("SwiperSlide"),f=c("Swiper");return l(),v("div",ha,[d(f,{loop:!0,speed:1500,effect:"fade","pagination-clickable":!0,pagination:!0,navigation:!1,autoplay:{delay:2e3},class:"mySwiper position-relative"},{default:n(()=>[d(i,null,{default:n(()=>[ba]),_:1}),d(i,null,{default:n(()=>[ga]),_:1}),d(i,null,{default:n(()=>[_a]),_:1}),a("div",wa,[a("div",ya,[ka,Sa,a("div",xa,[W(a("input",{class:"form-control form-control-lg",list:"datalistOptions",id:"homeInput",placeholder:"我想學習...","onUpdate:modelValue":e[0]||(e[0]=s=>t.selectCourseName=s),onKeyup:e[1]||(e[1]=O(s=>t.goAllCourses(),["enter"]))},null,544),[[E,t.selectCourseName]]),a("label",{for:"homeInput",class:"position-absolute home-input d-flex align-items-center",onClick:e[2]||(e[2]=s=>t.goAllCourses())},Aa)]),a("div",Ma,[a("a",{href:"#",onClick:e[3]||(e[3]=u(s=>t.goAllCourses("鋼琴"),["prevent"]))},Ta),a("a",{href:"#",onClick:e[4]||(e[4]=u(s=>t.goAllCourses("編曲"),["prevent"]))},Ra),a("a",{href:"#",onClick:e[5]||(e[5]=u(s=>t.goAllCourses("流行歌唱"),["prevent"]))},za),a("a",{href:"#",onClick:e[6]||(e[6]=u(s=>t.goAllCourses("木吉他"),["prevent"]))},Za)])])])]),_:1})])}const Ha=w(ua,[["render",Na],["__scopeId","data-v-431d3668"]]),Ja="/LeLe_Music_Tutor/assets/home-serve-1-8a56a94e.jpg",Wa="/LeLe_Music_Tutor/assets/home-serve-2-5baabf8a.jpg",Ea="/LeLe_Music_Tutor/assets/brand-1-c0ee7914.svg",Oa="/LeLe_Music_Tutor/assets/brand-2-fb180426.png",Fa="/LeLe_Music_Tutor/assets/brand-3-6a1b17f8.png",Ba="/LeLe_Music_Tutor/assets/brand-4-5b3088ef.webp",$a="/LeLe_Music_Tutor/assets/brand-5-8d259dc0.webp",Va="data:image/png;base64,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";const Da={components:{FeaturedCourses:ia,CoursesLoading:B,HomeLoading:ma,HomeHeader:Ha},computed:{...R(_,["loading"])},methods:{...h(_,["onAuthStateChanged"]),...h(L,["goAllCourses"])},created(){this.onAuthStateChanged()}},b=t=>(K("data-v-ca10f976"),t=t(),Z(),t),Pa=M('<section data-v-ca10f976><div class="container text-center py-48" data-v-ca10f976><h2 class="fw-bold lh-base mb-32" data-aos="fade-up" data-v-ca10f976>和音樂共舞。<br data-v-ca10f976>尋找心中的旋律。</h2><h2 class="fw-bolder mb-64" data-aos="fade-up" data-v-ca10f976>LeLe Music Tutor</h2><p class="lh-lg fw-lighter" data-aos="fade-up" data-v-ca10f976>歡迎來到樂樂音樂家教媒合平台！<br data-v-ca10f976> 我們深知音樂對於心靈的滋養和生活的豐富意義。<br data-v-ca10f976> 我們的使命是連結那些渴望學習音樂的您，與充滿熱情且專業的音樂家教師。<br data-v-ca10f976><br data-v-ca10f976><br data-v-ca10f976> 無論您是初學者抑或已有經驗，樂樂致力於為您找到最合適的音樂導師<br data-v-ca10f976> 讓學習音樂成為一段充滿樂趣與成長的旅程<br data-v-ca10f976></p></div></section><section class="home-section2 position-relative" data-v-ca10f976><div class="home-section2-bg" data-v-ca10f976></div></section><section data-v-ca10f976><div class="container py-48" data-v-ca10f976><h2 class="letter-spacing-12 fs-1 fw-bolder" data-v-ca10f976>SERVE</h2><h2 class="letter-spacing-8 fs-6 mb-48" data-v-ca10f976>我們的服務</h2><div class="row align-items-center mb-48" data-v-ca10f976><div class="col-md-6 mb-3" data-v-ca10f976><h3 class="lh-base mb-3 mb-md-4" data-v-ca10f976>奏響夢想的旋律。<br data-v-ca10f976> 從這裡開始。</h3><p class="fs-14 fw-light lh-lg" data-v-ca10f976>在尋找音樂之道的路上，樂樂音樂家教媒合平台將您與充滿熱情的音樂老師相結合。<br data-v-ca10f976>無論您是剛起步或已有經驗，我們靈活的課程時間安排讓您自由展現對音樂的想像和熱愛。<br data-v-ca10f976>一同探索音符的世界，實現心中的音樂夢想。<br data-v-ca10f976>在這裡，旋律不僅被演奏，更被細心呵護成成長的足跡。</p></div><div class="col-md-6" data-v-ca10f976><div class="home-serve" data-aos="fade-up" data-v-ca10f976><img src="'+Ja+'" alt="home-serve-1" class="rounded-4" data-v-ca10f976></div></div></div><div class="row py-5 flex-row-reverse align-items-center" data-v-ca10f976><div class="col-md-6 mb-3" data-v-ca10f976><h3 class="lh-base mb-3 mb-md-4" data-v-ca10f976>將音符化為人生的篇章。</h3><p class="fs-14 fw-light lh-lg" data-v-ca10f976>音樂家的才華在樂樂音樂家教媒合平台綻放，歡迎您將空閑時間轉化為珍貴的教學時光。<br data-v-ca10f976>與學生分享您的音樂造詣，同時獲得寶貴的報酬。<br data-v-ca10f976>這是您與學生共同書寫音符、創造人生旋律的地方。<br data-v-ca10f976>在這裡，您不僅成為指導者，更是啟發夢想、播撒希望的音樂使者。</p></div><div class="col-md-6" data-v-ca10f976><div class="home-serve" data-aos="fade-up" data-v-ca10f976><img src="'+Wa+'" alt="home-serve-2" class="rounded-4" data-v-ca10f976></div></div></div></div></section>',3),Ya={class:"bg-light"},Ga={class:"container py-48"},Ua=M('<h2 class="letter-spacing-12 fs-1 fw-bolder" data-v-ca10f976>PROCESS</h2><h2 class="letter-spacing-8 fs-6 mb-48" data-v-ca10f976>簡易的開課流程</h2><p class="fs-14 fw-light lh-lg mb-48" data-v-ca10f976> 輕鬆開始您的音樂教學之旅！我們的老師只需簡單的四步驟，即可開展線上課程。<br data-v-ca10f976>將您的音樂才華轉化為寶貴的報酬，無壓力、無煩惱。讓音符為您譜寫充實人生的新篇章。 </p><div class="row row-cols-2 row-cols-md-4 mb-48 gx-0 gy-24" data-v-ca10f976><div class="col d-flex justify-content-center align-items-center" data-aos="fade-up" data-v-ca10f976><div class="step rounded-circle bg-light shadow position-relative d-flex flex-column align-items-center justify-content-center" data-v-ca10f976><span class="fs-3 position-absolute top-0 start-50 translate-middle" data-v-ca10f976>01</span><span class="material-symbols-outlined fs-1 mb-16 text-primary" data-v-ca10f976>edit_document</span><p class="fw-bolder" data-v-ca10f976>INFORMATION</p><p class="text-secondary fw-light" data-v-ca10f976>填寫資訊</p></div></div><div class="col d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300" data-v-ca10f976><div class="step rounded-circle bg-light shadow position-relative d-flex flex-column align-items-center justify-content-center" data-v-ca10f976><span class="fs-3 position-absolute top-0 start-50 translate-middle" data-v-ca10f976>02</span><span class="material-symbols-outlined fs-1 mb-16 text-primary" data-v-ca10f976>contract_edit</span><p class="fw-bolder" data-v-ca10f976>INTRODUCE</p><p class="text-secondary fw-light" data-v-ca10f976>課程介紹</p></div></div><div class="col d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="600" data-v-ca10f976><div class="step rounded-circle bg-light shadow position-relative d-flex flex-column align-items-center justify-content-center" data-v-ca10f976><span class="fs-3 position-absolute top-0 start-50 translate-middle" data-v-ca10f976>03</span><span class="material-symbols-outlined fs-1 mb-16 text-primary" data-v-ca10f976>preview</span><p class="fw-bolder" data-v-ca10f976>PREVIEW</p><p class="text-secondary fw-light" data-v-ca10f976>預覽</p></div></div><div class="col d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="900" data-v-ca10f976><div class="step rounded-circle bg-light shadow position-relative d-flex flex-column align-items-center justify-content-center" data-v-ca10f976><span class="fs-3 position-absolute top-0 start-50 translate-middle" data-v-ca10f976>04</span><span class="material-symbols-outlined fs-1 mb-16 text-primary" data-v-ca10f976>task_alt</span><p class="fw-bolder" data-v-ca10f976>COMPLETE</p><p class="text-secondary fw-light" data-v-ca10f976>完成！</p></div></div></div>',4),Qa=b(()=>a("button",{type:"button",class:"btn btn-outline-primary border-0 d-block mx-auto w-75 w-md-55 w-lg-40 mt-32 shadow fw-bolder fs-14 letter-spacing-8 py-16"}," 製作課程 ",-1)),qa={class:"container py-48"},Xa=b(()=>a("h2",{class:"letter-spacing-12 fs-1 fw-bolder"},"COURSE",-1)),at=b(()=>a("h2",{class:"letter-spacing-8 fs-6 mb-48"},"精選課程",-1)),tt=b(()=>a("p",{class:"fs-14 fw-light lh-lg mb-7 mb-48"},[p("音樂是靈魂的共鳴，而我們的課程精選優美。踏上專業音樂之旅，探索熱門精選課程，逐步揭開音樂的神秘面紗。這裡，我們致力於將音樂"),a("br"),p("的藝術帶入您的生活，以專業指導和獨特教學方法，激發您的音樂熱情。")],-1)),st=b(()=>a("button",{type:"button",class:"btn btn-outline-primary border-0 d-block mx-auto w-75 w-md-55 w-lg-40 mt-32 shadow fw-bolder fs-14 letter-spacing-8 py-16"}," 更多課程 ",-1)),et=M('<section class="bg-light" data-v-ca10f976><div class="container py-48" data-v-ca10f976><h2 class="letter-spacing-12 fs-1 fw-bolder" data-v-ca10f976>FAQ</h2><h2 class="letter-spacing-8 fs-6 mb-48" data-v-ca10f976>常見問題</h2><div class="accordion" id="accordionExample" data-v-ca10f976><div class="accordion-item" data-v-ca10f976><h3 class="accordion-header" data-v-ca10f976><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-v-ca10f976> Ｑ 這個平台如何確保音樂家教的品質？ </button></h3><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" data-v-ca10f976><div class="accordion-body" data-v-ca10f976> 我們精心篩選並核實每位音樂家教的專業背景和教學經驗。我們採用嚴格的審核標準，確保教師具備高水準的音樂技能和教學能力，從而為學生提供優質的學習體驗。 </div></div></div><div class="accordion-item" data-v-ca10f976><h3 class="accordion-header" data-v-ca10f976><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-v-ca10f976> Ｑ 我需要擁有昂貴的樂器嗎？ </button></h3><div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-ca10f976><div class="accordion-body" data-v-ca10f976> 不必。我們的音樂家教能夠根據您的需求和預算，提供適合的建議和方案。無論您是初學者還是有經驗的音樂人，我們都會確保您得到適合的指導，而且您可以根據自己的情況選擇是否購買樂器。 </div></div></div><div class="accordion-item" data-v-ca10f976><h3 class="accordion-header" data-v-ca10f976><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" data-v-ca10f976> Ｑ 如何安排教學時間？ </button></h3><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-ca10f976><div class="accordion-body" data-v-ca10f976> 我們的平台提供靈活的教學時間選擇，讓您和音樂家教共同商討最合適的上課時間。您可以在平台上瀏覽教師的時間表，選擇符合您日程的時間段，確保教學時間的便利性和彈性。 </div></div></div><div class="accordion-item" data-v-ca10f976><h3 class="accordion-header" data-v-ca10f976><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" data-v-ca10f976> Ｑ 我可以隨時取消或改變教學計劃嗎？ </button></h3><div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-ca10f976><div class="accordion-body" data-v-ca10f976> 是的，我們理解您的時間可能會有變動。您可以提前與您的音樂家教溝通，根據需要進行教學計劃的調整。請確保您在取消或更改計劃時遵循我們的相關政策。 </div></div></div><div class="accordion-item" data-v-ca10f976><h3 class="accordion-header" data-v-ca10f976><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5" data-v-ca10f976> Ｑ 是否有免費試教？ </button></h3><div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-ca10f976><div class="accordion-body" data-v-ca10f976> 是的，我們的部分音樂家教提供免費試教，讓您有機會評估教學風格和師生配合是否適合。您可以在平台上查找提供免費試教的教師，並預約試教課程。 </div></div></div><div class="accordion-item" data-v-ca10f976><h3 class="accordion-header" data-v-ca10f976><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6" data-v-ca10f976> Ｑ 我需要具備多少音樂基礎才能開始學習？ </button></h3><div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-ca10f976><div class="accordion-body" data-v-ca10f976> 我們歡迎各個程度的學生，無論您是初學者還是有經驗的音樂人。我們的音樂家教將根據您的現有知識和技能，量身定制教學計劃，從基礎教學到高級技巧，都能找到適合您的課程內容。 </div></div></div></div></div></section><section data-v-ca10f976><div class="container my-48" data-v-ca10f976><h2 class="letter-spacing-12 fs-1 fw-bolder" data-v-ca10f976>PARTNER</h2><h2 class="letter-spacing-8 fs-6 mb-48" data-v-ca10f976>我們的合作夥伴</h2><p class="fs-14 fw-light lh-lg mb-48" data-v-ca10f976>與知名品牌攜手合作，為您提供更廣闊的音樂學習視野，豐富您的音樂旅程。</p><div class="row row-cols-2 row-cols-md-4 g-24" data-v-ca10f976><div class="partner-img col d-flex justify-content-center align-items-center" data-v-ca10f976><img src="'+Ea+'" alt="合作夥伴圖片" data-v-ca10f976></div><div class="partner-img col d-flex justify-content-center align-items-center" data-v-ca10f976><img src="'+Oa+'" alt="合作夥伴圖片" data-v-ca10f976></div><div class="partner-img col d-flex justify-content-center align-items-center" data-v-ca10f976><img src="'+Fa+'" alt="合作夥伴圖片" data-v-ca10f976></div><div class="partner-img col d-flex justify-content-center align-items-center" data-v-ca10f976><img src="'+Ba+'" alt="合作夥伴圖片" data-v-ca10f976></div><div class="partner-img col d-flex justify-content-center align-items-center" data-v-ca10f976><img src="'+$a+'" alt="合作夥伴圖片" data-v-ca10f976></div><div class="partner-img col d-flex justify-content-center align-items-center" data-v-ca10f976><img src="'+Va+'" alt="合作夥伴圖片" data-v-ca10f976></div></div></div></section>',2);function ot(t,e,y,k,S,x){const i=c("home-loading"),f=c("home-header"),s=c("RouterLink"),g=c("CoursesLoading"),N=c("FeaturedCourses");return l(),v(j,null,[d(i),d(f),Pa,a("section",Ya,[a("div",Ga,[Ua,d(s,{to:"/CreateCourses/BeATeacherStep1"},{default:n(()=>[Qa]),_:1})])]),a("section",null,[a("div",qa,[Xa,at,tt,t.loading?(l(),C(g,{key:0})):A("",!0),t.loading?A("",!0):(l(),C(N,{key:1})),d(s,{to:"/AllCourses",class:"nav-link"},{default:n(()=>[st]),_:1})])]),et],64)}const ft=w(Da,[["render",ot],["__scopeId","data-v-ca10f976"]]);export{ft as default};
