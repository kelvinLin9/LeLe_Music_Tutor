import{Z as i,$ as a}from"./index-6bf52aae.js";import{l as n}from"./logInStore-908714a9.js";import{d as u}from"./dataStore-bae4dbfe.js";const C=i("courseCardStore",{state:()=>({courseCardData:[]}),actions:{}}),P=i("paginationStore",{state:()=>({eachPage:[],pageSize:12,page:{totalPage:0,currentPage:1,pageNumBox:[],hasPrevPage:!1,hasNextPage:!1}}),actions:{pagination(e){this.page.totalPage=Math.ceil(e.length/this.pageSize),this.eachPage=[],this.page.currentPage<1&&(this.page.currentPage=1),this.page.currentPage>this.page.totalPage&&(this.page.currentPage=this.page.totalPage),this.page.hasPrevPage=this.page.currentPage>1,this.page.hasNextPage=this.page.currentPage<this.page.totalPage;const t=this.page.currentPage*this.pageSize-this.pageSize+1,s=this.page.currentPage*this.pageSize;e.forEach((o,p)=>{const h=p+1;h>=t&&h<=s&&this.eachPage.push(o)}),this.showPageBox()},showPageBox(){let t=this.page.currentPage-Math.floor(2.5),s=this.page.currentPage+Math.floor(5/2);t<1&&(t=1,s=5),s>this.page.totalPage&&(s=this.page.totalPage,t=this.page.totalPage-(5-1)),this.page.totalPage<5&&(t=1,s=this.page.totalPage),this.page.pageNumBox=[];for(let o=t;o<=s;o++)this.page.pageNumBox.push(o);console.log(this.page.pageNumBox)}}}),r=u(),c=P(),m=i("filterStore",{state:()=>({selectCityName:"",selectCourseCategory:"",selectCourseName:"",courseMethod:["在學生家","在老師家","線上"],selectCourseMethod:"",sortMethod:["依人氣","依新舊","依金額"],selectSortMethod:"依人氣"}),actions:{selectCityNameCancel(){this.selectCourseMethod===""&&(this.selectCityName="")},courseSort(){console.log(this.selectSortMethod),this.selectSortMethod==="依金額"?r.AllCoursesFirebaseData.sort((e,t)=>t.data.price-e.data.price):this.selectSortMethod==="依新舊"?r.AllCoursesFirebaseData.sort((e,t)=>t.createdTime-e.createdTime):this.selectSortMethod==="依人氣"&&r.AllCoursesFirebaseData.sort((e,t)=>t.data.whoBuy.length-e.data.whoBuy.length)}},getters:{filterData(){return console.log("filter"),this.selectCourseMethod===""?r.AllCoursesFirebaseData.filter(e=>e.data.cityName.match(this.selectCityName)&&e.data.courseCategory.match(this.selectCourseCategory)&&e.data.courseName.match(this.selectCourseName)):r.AllCoursesFirebaseData.filter(e=>e.data.cityName.match(this.selectCityName)&&e.data.courseCategory.match(this.selectCourseCategory)&&e.data.courseName.match(this.selectCourseName)&&e.data.courseMethod.includes(this.selectCourseMethod))},currentPageCoursesData(){return c.pagination(this.filterData),c.eachPage}}}),g=n();u();C();const l=m(),B=i("goStore",{actions:{goCoursePage(e){console.log(e),a.push(`/coursePage/${e}`)},goHomePage(){a.push("/")},goLoginPage(){g.logInPage=!0,g.signUpForm.user.name="",g.signUpForm.user.email="",g.signUpForm.user.password="",g.signUpForm.user.confirmation=""},goBeATeacherStep1(){a.push("/CreateCourses/BeATeacherStep1")},goBeATeacherStep2(){a.push("/CreateCourses/BeATeacherStep2")},goBeATeacherStep3(){a.push("/CreateCourses/BeATeacherStep3")},goBeATeacherStep4(){a.push("/CreateCourses/BeATeacherStep4")},goBookmark(){a.push("/MyCourses")},goAllCourses(e){a.push("/AllCourses"),e&&(l.selectCourseCategory=e,l.selectCourseName="")}}});export{C as c,m as f,B as g,P as p};
