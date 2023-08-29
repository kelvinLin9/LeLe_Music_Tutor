import{S as N,a as P}from"./navigation-d063622b.js";import{m as S,b as m,_ as w,r as v,o as d,c as f,e as E,w as k,F as L,k as B,h as g,d as a,l as j,g as n,t as l,n as r,i as p,a as A,f as _,q as M,p as I,j as O}from"./index-6bb7e108.js";import{d as h}from"./dataStore-982b75c9.js";import{g as T}from"./goStore-6ae1ffbb.js";import{C as V}from"./CoursesLoading-eb6f3da2.js";import{w as z}from"./windowStore-50bb8d76.js";import"./logInStore-d7507738.js";const F={components:{Swiper:N,SwiperSlide:P},setup(){return{}},computed:{...S(h,["coursesData","bookmarkState","top6courses"])},methods:{...m(h,["toggleBookmark","getOneCoursesFirebaseData"]),...m(T,["goCoursePage"])},created(){}},R={class:"course-card"},D=["onClick"],H={class:"details d-flex flex-column"},q={class:"fs-6"},U=a("i",{class:"bi bi-tags me-6"},null,-1),W={class:"mt-auto ms-auto fs-5"},Q=["onClick"],G=["onClick"],J={class:"fs-5 fw-bold d-flex"},K={class:"fs-6"},X={class:"d-flex align-items-center"},Y=a("span",{class:"material-symbols-outlined fs-6 me-4"},"timer",-1),Z=a("span",{class:"material-symbols-outlined fs-6 ms-8 me-4"},"map",-1),aa=a("span",{class:"material-symbols-outlined fs-6 ms-8 me-4"},"group",-1),ea={class:"px-16 pb-16 mt-auto"},sa={class:"fs-5 fw-bold"};function ta(e,t,y,x,C,$){const u=v("SwiperSlide"),b=v("swiper");return d(),f("div",null,[E(b,{loop:!0,slidesPerView:1,spaceBetween:20,freeMode:!0,pagination:{clickable:!0},navigation:"",scrollbar:{draggable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:26},992:{slidesPerView:3,spaceBetween:26},1200:{slidesPerView:4,spaceBetween:26}},class:"mySwiper px-24"},{default:k(()=>[(d(!0),f(L,null,B(e.top6courses,s=>(d(),g(u,{key:s.id,class:"mb-32"},{default:k(()=>[a("div",R,[a("div",{class:"meta cursor-pointer",onClick:i=>e.goCoursePage(s.id)},[a("div",{class:"photo",style:j({backgroundImage:`url(${s.data.courseImg})`})},null,4),a("ul",H,[a("li",q,[U,n(" "+l(s.data.courseCategory),1)]),a("li",W,[a("i",{class:r(["",e.bookmarkState(s.id)]),onClick:p(i=>e.toggleBookmark(s.id),["stop"]),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"加入 / 移除收藏"},null,10,Q)])])],8,D),a("div",{class:"description cursor-pointer",onClick:i=>e.goCoursePage(s.id)},[a("h2",J,l(s.data.courseName),1),a("h3",K,"by "+l(s.data.displayName),1),a("p",X,[Y,n(" "+l(s.data.time)+" ",1),Z,n(" "+l(s.data.cityName||"線上")+" ",1),aa,n(" "+l(s.data.whoBuy.length),1)])],8,G),a("div",ea,[a("span",sa,"NT$ "+l(e.$filters.currency(s.data.price)),1)])])]),_:2},1024))),128))]),_:1})])}const ca=w(F,[["render",ta]]);const oa={computed:{...A(z,["homeLoading"])},methods:{scrollStop(){const e=function(t){t.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",e,!1)},scrollMove(){const e=function(t){t.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",e,!1)}},mounted(){this.homeLoading=!0,this.scrollStop(),setTimeout(()=>{this.scrollMove(),this.homeLoading=!1},3500)}},da={key:0,class:"home-loading position-fixed"},la={version:"1.1",id:"lion-dashed",xmlns:"http://www.w3.org/2000/svg",class:"animal-svg animal-svg--dashed","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"-150 -50 1920 1080",style:{"enable-background":"new 0 0 1920 1080"},"xml:space":"preserve"};function ia(e,t,y,x,C,$){return e.homeLoading?(d(),f("div",da,[(d(),f("svg",la,[a("g",null,[a("g",null,[a("path",{id:"lion--dashed--path",class:r(["st0",{"draw-animation":!0}]),d:`M664.64,587.46c-10,7.78-18.67,11.67-26.01,11.67c-4.89,0-16.67-2.81-35.34-8.43\r
          c-7.78-2.38-14.78-3.57-21-3.57h-6.67c8.67-13.34,15.22-30.56,19.67-51.68c23.34,0,43.51-9.5,60.51-28.51\r
          c17-19,25.51-41.18,25.51-66.52c0-14.45-3.12-25.89-9.34-34.34c-6.23-8.44-14.78-12.67-25.67-12.67\r
          c-21.12,0-38.46,15.45-52.01,46.34c-6.45,14.67-13.23,38.46-20.34,71.35c-3.33-0.89-6.62-1.94-9.84-3.17\r
          c-3.23-1.22-8.84-3.5-16.84-6.83l-5-2.67l-5.33-2c-1.78,4-2.67,9-2.67,15c0,4.23,1.72,7.62,5.17,10.17\r
          c3.44,2.56,10.28,5.5,20.5,8.84l9.34,2.67c-4.45,18.52-7.83,31.52-10.17,38.99c-2.33,7.48-4.62,13.22-6.83,17.23\r
          c-13.56,1.79-23.23,4.02-29.01,6.69c-10,4.69-15,12.27-15,22.76c0,2.01,0.44,3.34,1.33,4.02c0.67,0.44,2.22,0.67,4.67,0.67\r
          c7.78,0,15.72-1.36,23.84-4.08c8.11-2.72,17.17-7.14,27.17-13.26c4.89,0.89,15.89,4.33,33.01,10.34c13.34,4.67,24.56,7,33.67,7\r
          c15.11,0,36.12-12,63.02-36.01v-28.34C682.31,572.02,672.2,581.46,664.64,587.46z M644.64,417.42c8.22,0,12.34,7.12,12.34,21.34\r
          c0,18.9-5,35.57-15,50.01c-10.89,15.56-24.34,23.34-40.34,23.34C614.07,448.99,628.41,417.42,644.64,417.42z`})]),a("g",null,[a("path",{id:"lion--dashed--path",class:r(["st0",{"draw-animation":!0}]),d:`M747.66,602.46c-7.78,0-13.45-3.44-17-10.34c-2.45-4.67-3.67-10.78-3.67-18.34v-1.33l7-3\r
          c18.45-7.55,31.78-14.34,40.01-20.34c15.56-11.34,23.34-24.56,23.34-39.68c0-16.89-8.89-25.34-26.67-25.34\r
          c-18.89,0-35.57,9.39-50.01,28.17c-14.45,18.79-21.67,40.29-21.67,64.52c0,12.23,3.05,23.17,9.17,32.84\r
          c6.11,9.67,15.06,14.5,26.84,14.5c32.23,0,65.46-12.34,99.69-37.01v-28.01c-17.56,15.34-33.12,26.4-46.68,33.17\r
          C774.45,599.08,761,602.46,747.66,602.46z M745.66,518.61c7.55-9,15-13.5,22.34-13.5c5.11,0,7.67,2.45,7.67,7.34\r
          c0,6.67-4.12,13.39-12.34,20.17c-8.23,6.78-19.23,12.73-33.01,17.84C732.99,538.23,738.1,527.61,745.66,518.61z`})]),a("g",null,[a("path",{class:r(["st0",{"draw-animation":!0}]),d:`M916.7,589.13c-13.56,7.78-24.79,11.67-33.67,11.67c-10.45,0-15.67-8-15.67-24l1.67-20.34\r
          c15.11-18,27.12-33.23,36.01-45.68c12.45-17.11,21.78-32.34,28.01-45.68c7.33-15.56,11-29.67,11-42.34\r
          c0-8.44-2.22-15.5-6.67-21.17c-4.45-5.67-9.89-8.5-16.34-8.5c-8,0-16,3.89-24.01,11.67c-14.23,15.56-27.56,43.01-40.01,82.35\r
          c-11.56,36.68-17.34,66.57-17.34,89.69c0,13.34,2.33,24,7,32.01c5.55,9.78,14.34,14.67,26.34,14.67s24.22-2.72,36.68-8.17\r
          c12.45-5.44,27.22-14.72,44.34-27.84v-28.34C942.71,571.35,930.26,581.35,916.7,589.13z M890.36,464.1\r
          c10.89-32.01,20-48.01,27.34-48.01c4,0,6,3.78,6,11.34c0,8-2.06,16.73-6.17,26.17c-4.12,9.45-10.17,20.4-18.17,32.84\r
          c-4.67,7.33-13.23,19.79-25.67,37.34C877.03,507.11,882.58,487.22,890.36,464.1z`})]),a("g",null,[a("path",{id:"lion--dashed--path",class:r(["st0",{"draw-animation":!0}]),d:`M1047.4,592.3c-13.56,6.78-27.01,10.17-40.34,10.17c-7.78,0-13.45-3.44-17-10.34\r
          c-2.45-4.67-3.67-10.78-3.67-18.34v-1.33l7-3c18.45-7.55,31.78-14.34,40.01-20.34c15.56-11.34,23.34-24.56,23.34-39.68\r
          c0-16.89-8.89-25.34-26.67-25.34c-18.9,0-35.57,9.39-50.01,28.17c-14.45,18.79-21.67,40.29-21.67,64.52\r
          c0,12.23,3.05,23.17,9.17,32.84c6.11,9.67,15.06,14.5,26.84,14.5c32.23,0,65.46-12.34,99.69-37.01v-28.01\r
          C1076.52,574.46,1060.96,585.52,1047.4,592.3z M1005.06,518.61c7.55-9,15-13.5,22.34-13.5c5.11,0,7.67,2.45,7.67,7.34\r
          c0,6.67-4.12,13.39-12.34,20.17c-8.23,6.78-19.23,12.73-33.01,17.84C992.39,538.23,997.5,527.61,1005.06,518.61z`,stroke:"#fff","stroke-miterlimit":"10",fill:"none"})])])]))])):_("",!0)}const na=w(oa,[["render",ia],["__scopeId","data-v-1e25c23a"]]),o="/music_tutor/assets/banner-aea474d0.jpg";const ra={components:{FeaturedCourses:ca,CoursesLoading:V,HomeLoading:na},computed:{...S(h,["loading"])},methods:{...m(h,["onAuthStateChanged"]),...m(T,["goAllCourses"])},created(){this.onAuthStateChanged()}},c=e=>(I("data-v-e4374f3c"),e=e(),O(),e),pa={class:"header d-flex flex-column justify-content-center"},va={class:"container"},fa={class:"row align-items-center"},ma={class:"col-12 col-lg-6"},ha={class:"blockquote px-32"},ua=c(()=>a("h2",{class:"fs-2 text-white mb-3"}," 找尋像好友一樣的音樂導師 ",-1)),ba=c(()=>a("h3",{class:"fs-6 text-white mb-24"}," 在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。 ",-1)),ga=c(()=>a("div",{class:"mb-8"},[a("input",{class:"form-control mt-0",list:"datalistOptions",id:"exampleDataList",placeholder:"我想學習..."})],-1)),_a={class:"home-pills"},wa=c(()=>a("span",{class:"badge rounded-pill text-bg-primary text-white me-8"},"鋼琴",-1)),ya=[wa],xa=c(()=>a("span",{class:"badge rounded-pill text-bg-primary text-white me-8"},"編曲",-1)),Ca=[xa],$a=c(()=>a("span",{class:"badge rounded-pill text-bg-primary text-white me-8"},"流行歌唱",-1)),ka=[$a],Sa=c(()=>a("span",{class:"badge rounded-pill text-bg-primary text-white me-8"},"木吉他",-1)),Ea=[Sa],La=M('<section data-v-e4374f3c><div class="container text-center py-48" data-v-e4374f3c><h2 class="fw-bold lh-base mb-32" data-v-e4374f3c>和音樂共舞。<br data-v-e4374f3c>尋找心中的旋律。</h2><h2 class="fw-bolder mb-64" data-v-e4374f3c>Lele Music Tutor</h2><p class="lh-lg fw-lighter" data-v-e4374f3c>歡迎來到樂樂音樂家教媒合平台！<br data-v-e4374f3c> 我們深知音樂對於心靈的滋養和生活的豐富意義。<br data-v-e4374f3c> 我們的使命是連結那些渴望學習音樂的您，與充滿熱情且專業的音樂家教師。<br data-v-e4374f3c><br data-v-e4374f3c><br data-v-e4374f3c> 無論您是初學者抑或已有經驗，樂樂致力於為您找到最合適的音樂導師<br data-v-e4374f3c> 讓學習音樂成為一段充滿樂趣與成長的旅程<br data-v-e4374f3c></p></div></section><section data-v-e4374f3c><img class="" src="'+o+'" alt="" style="height:300px;" data-v-e4374f3c></section><section data-v-e4374f3c><div class="container py-48" data-v-e4374f3c><h2 class="letter-spacing-12 fs-1 fw-bolder" data-v-e4374f3c>SERVE</h2><h2 class="letter-spacing-8 fs-6 mb-48" data-v-e4374f3c>我們的服務</h2><div class="row align-items-center" data-v-e4374f3c><div class="col-md-6 mb-3" data-v-e4374f3c><h3 class="lh-base mb-3 mb-md-4" data-v-e4374f3c>奏響夢想的旋律。<br data-v-e4374f3c> 從這裡開始。</h3><p class="fs-14 fw-light lh-lg" data-v-e4374f3c>在尋找音樂之道的路上，樂樂音樂家教媒合平台將您與充滿熱情的音樂老師相結合。<br data-v-e4374f3c>無論您是剛起步或已有經驗，我們靈活的課程時間安排讓您自由展現對音樂的想像和熱愛。<br data-v-e4374f3c>一同探索音符的世界，實現心中的音樂夢想。<br data-v-e4374f3c>在這裡，旋律不僅被演奏，更被細心呵護成成長的足跡。</p></div><div class="col-md-6" data-v-e4374f3c><img class="img-fluid" src="'+o+'" alt="" data-v-e4374f3c></div></div><div class="row py-5 flex-row-reverse align-items-center" data-v-e4374f3c><div class="col-md-6 mb-3" data-v-e4374f3c><h3 class="lh-base mb-3 mb-md-4" data-v-e4374f3c>將音符化為人生的篇章。</h3><p class="fs-14 fw-light lh-lg" data-v-e4374f3c>音樂家的才華在樂樂音樂家教媒合平台綻放，歡迎您將空閑時間轉化為珍貴的教學時光。<br data-v-e4374f3c>與學生分享您的音樂造詣，同時獲得寶貴的報酬。<br data-v-e4374f3c>這是您與學生共同書寫音符、創造人生旋律的地方。<br data-v-e4374f3c>在這裡，您不僅成為指導者，更是啟發夢想、播撒希望的音樂使者。</p></div><div class="col-md-6" data-v-e4374f3c><img class="img-fluid" src="'+o+'" alt="" data-v-e4374f3c></div></div></div></section><section class="bg-light" data-v-e4374f3c><div class="container py-48" data-v-e4374f3c><h2 class="letter-spacing-12 fs-1 fw-bolder" data-v-e4374f3c>PROCESS</h2><h2 class="letter-spacing-8 fs-6 mb-48" data-v-e4374f3c>簡易的開課流程</h2><p class="fs-14 fw-light lh-lg mb-48" data-v-e4374f3c> 輕鬆開始您的音樂教學之旅！我們的老師只需簡單的四步驟，即可開展線上課程。<br data-v-e4374f3c>將您的音樂才華轉化為寶貴的報酬，無壓力、無煩惱。讓音符為您譜寫充實人生的新篇章。 </p><div class="row row-cols-2 row-cols-md-4 mb-48 gx-0 gy-3" data-v-e4374f3c><div class="col d-flex justify-content-center align-items-center" data-v-e4374f3c><div class="step rounded-circle bg-light shadow position-relative d-flex flex-column align-items-center justify-content-center" data-v-e4374f3c><span class="fs-3 position-absolute top-0 start-50 translate-middle" data-v-e4374f3c>01</span><span class="material-symbols-outlined fs-1 mb-16 text-primary" data-v-e4374f3c>edit_document</span><p class="fw-bolder" data-v-e4374f3c>INFORMATION</p><p class="text-secondary fw-light" data-v-e4374f3c>填寫資訊</p></div></div><div class="col d-flex justify-content-center align-items-center" data-v-e4374f3c><div class="step rounded-circle bg-light shadow position-relative d-flex flex-column align-items-center justify-content-center" data-v-e4374f3c><span class="fs-3 position-absolute top-0 start-50 translate-middle" data-v-e4374f3c>02</span><span class="material-symbols-outlined fs-1 mb-16 text-primary" data-v-e4374f3c>contract_edit</span><p class="fw-bolder" data-v-e4374f3c>INTRODUCE</p><p class="text-secondary fw-light" data-v-e4374f3c>課程介紹</p></div></div><div class="col d-flex justify-content-center align-items-center" data-v-e4374f3c><div class="step rounded-circle bg-light shadow position-relative d-flex flex-column align-items-center justify-content-center" data-v-e4374f3c><span class="fs-3 position-absolute top-0 start-50 translate-middle" data-v-e4374f3c>03</span><span class="material-symbols-outlined fs-1 mb-16 text-primary" data-v-e4374f3c>preview</span><p class="fw-bolder" data-v-e4374f3c>PREVIEW</p><p class="text-secondary fw-light" data-v-e4374f3c>預覽</p></div></div><div class="col d-flex justify-content-center align-items-center" data-v-e4374f3c><div class="step rounded-circle bg-light shadow position-relative d-flex flex-column align-items-center justify-content-center" data-v-e4374f3c><span class="fs-3 position-absolute top-0 start-50 translate-middle" data-v-e4374f3c>04</span><span class="material-symbols-outlined fs-1 mb-16 text-primary" data-v-e4374f3c>task_alt</span><p class="fw-bolder" data-v-e4374f3c>COMPLETE</p><p class="text-secondary fw-light" data-v-e4374f3c>完成！</p></div></div></div><button type="button" class="btn btn-outline-primary border-0 d-block mx-auto w-75 w-md-55 w-lg-40 mt-32 shadow fw-bolder fs-14 letter-spacing-8 py-16" data-v-e4374f3c> 製作課程 </button></div></section>',4),Ma={class:"container py-48"},Ta=c(()=>a("h2",{class:"letter-spacing-12 fs-1 fw-bolder"},"COURSE",-1)),Na=c(()=>a("h2",{class:"letter-spacing-8 fs-6 mb-48"},"精選課程",-1)),Pa=c(()=>a("p",{class:"fs-14 fw-light lh-lg mb-7 mb-48"},[n("音樂是靈魂的共鳴，而我們的課程精選優美。踏上專業音樂之旅，探索熱門精選課程，逐步揭開音樂的神秘面紗。這裡，我們致力於將音樂"),a("br"),n("的藝術帶入您的生活，以專業指導和獨特教學方法，激發您的音樂熱情。")],-1)),Ba=c(()=>a("button",{type:"button",class:"btn btn-outline-primary border-0 d-block mx-auto w-75 w-md-55 w-lg-40 mt-32 shadow fw-bolder fs-14 letter-spacing-8 py-16"}," 更多課程 ",-1)),ja=M('<section class="bg-light" data-v-e4374f3c><div class="container py-48" data-v-e4374f3c><h2 class="letter-spacing-12 fs-1 fw-bolder" data-v-e4374f3c>FAQ</h2><h2 class="letter-spacing-8 fs-6 mb-48" data-v-e4374f3c>常見問題</h2><div class="accordion" id="accordionExample" data-v-e4374f3c><div class="accordion-item" data-v-e4374f3c><h3 class="accordion-header" data-v-e4374f3c><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-v-e4374f3c> Ｑ 這個平台如何確保音樂家教的品質？ </button></h3><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" data-v-e4374f3c><div class="accordion-body" data-v-e4374f3c> 我們精心篩選並核實每位音樂家教的專業背景和教學經驗。我們採用嚴格的審核標準，確保教師具備高水準的音樂技能和教學能力，從而為學生提供優質的學習體驗。 </div></div></div><div class="accordion-item" data-v-e4374f3c><h3 class="accordion-header" data-v-e4374f3c><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-v-e4374f3c> Ｑ 我需要擁有昂貴的樂器嗎？ </button></h3><div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-e4374f3c><div class="accordion-body" data-v-e4374f3c> 不必。我們的音樂家教能夠根據您的需求和預算，提供適合的建議和方案。無論您是初學者還是有經驗的音樂人，我們都會確保您得到適合的指導，而且您可以根據自己的情況選擇是否購買樂器。 </div></div></div><div class="accordion-item" data-v-e4374f3c><h3 class="accordion-header" data-v-e4374f3c><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" data-v-e4374f3c> Ｑ 如何安排教學時間？ </button></h3><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-e4374f3c><div class="accordion-body" data-v-e4374f3c> 我們的平台提供靈活的教學時間選擇，讓您和音樂家教共同商討最合適的上課時間。您可以在平台上瀏覽教師的時間表，選擇符合您日程的時間段，確保教學時間的便利性和彈性。 </div></div></div><div class="accordion-item" data-v-e4374f3c><h3 class="accordion-header" data-v-e4374f3c><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" data-v-e4374f3c> Ｑ 我可以隨時取消或改變教學計劃嗎？ </button></h3><div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-e4374f3c><div class="accordion-body" data-v-e4374f3c> 是的，我們理解您的時間可能會有變動。您可以提前與您的音樂家教溝通，根據需要進行教學計劃的調整。請確保您在取消或更改計劃時遵循我們的相關政策。 </div></div></div><div class="accordion-item" data-v-e4374f3c><h3 class="accordion-header" data-v-e4374f3c><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5" data-v-e4374f3c> Ｑ 是否有免費試教？ </button></h3><div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-e4374f3c><div class="accordion-body" data-v-e4374f3c> 是的，我們的部分音樂家教提供免費試教，讓您有機會評估教學風格和師生配合是否適合。您可以在平台上查找提供免費試教的教師，並預約試教課程。 </div></div></div><div class="accordion-item" data-v-e4374f3c><h3 class="accordion-header" data-v-e4374f3c><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6" data-v-e4374f3c> Ｑ 我需要具備多少音樂基礎才能開始學習？ </button></h3><div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#accordionExample" data-v-e4374f3c><div class="accordion-body" data-v-e4374f3c> 我們歡迎各個程度的學生，無論您是初學者還是有經驗的音樂人。我們的音樂家教將根據您的現有知識和技能，量身定制教學計劃，從基礎教學到高級技巧，都能找到適合您的課程內容。 </div></div></div></div></div></section><section data-v-e4374f3c><div class="container my-48" data-v-e4374f3c><h2 class="letter-spacing-12 fs-1 fw-bolder" data-v-e4374f3c>PARTNER</h2><h2 class="letter-spacing-8 fs-6 mb-48" data-v-e4374f3c>我們的合作夥伴</h2><p class="fs-14 fw-light lh-lg mb-48" data-v-e4374f3c>與知名品牌攜手合作，為您提供更廣闊的音樂學習視野，豐富您的音樂旅程。</p><div class="row row-cols-2 row-cols-md-4" data-v-e4374f3c><div class="col" data-v-e4374f3c><img src="'+o+'" alt="合作夥伴圖片" data-v-e4374f3c></div><div class="col" data-v-e4374f3c><img src="'+o+'" alt="合作夥伴圖片" data-v-e4374f3c></div><div class="col" data-v-e4374f3c><img src="'+o+'" alt="合作夥伴圖片" data-v-e4374f3c></div><div class="col" data-v-e4374f3c><img src="'+o+'" alt="合作夥伴圖片" data-v-e4374f3c></div><div class="col" data-v-e4374f3c><img src="'+o+'" alt="合作夥伴圖片" data-v-e4374f3c></div><div class="col" data-v-e4374f3c><img src="'+o+'" alt="合作夥伴圖片" data-v-e4374f3c></div></div></div></section>',2);function Aa(e,t,y,x,C,$){const u=v("home-loading"),b=v("CoursesLoading"),s=v("FeaturedCourses");return d(),f(L,null,[E(u),a("section",pa,[a("div",va,[a("div",fa,[a("div",ma,[a("div",ha,[ua,ba,ga,a("div",_a,[a("a",{href:"#",onClick:t[0]||(t[0]=p(i=>e.goAllCourses("鋼琴"),["prevent"]))},ya),a("a",{href:"#",onClick:t[1]||(t[1]=p(i=>e.goAllCourses("編曲"),["prevent"]))},Ca),a("a",{href:"#",onClick:t[2]||(t[2]=p(i=>e.goAllCourses("流行歌唱"),["prevent"]))},ka),a("a",{href:"#",onClick:t[3]||(t[3]=p(i=>e.goAllCourses("木吉他"),["prevent"]))},Ea)])])])])])]),La,a("section",null,[a("div",Ma,[Ta,Na,Pa,e.loading?(d(),g(b,{key:0})):_("",!0),e.loading?_("",!0):(d(),g(s,{key:1})),Ba])]),ja],64)}const Ha=w(ra,[["render",Aa],["__scopeId","data-v-e4374f3c"]]);export{Ha as default};
