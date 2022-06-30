"use strict";(self.webpackChunkBOOST=self.webpackChunkBOOST||[]).push([[892],{8892:(A,g,i)=>{i.r(g),i.d(g,{TrainingCoursesModule:()=>x});var a=i(9808),n=i(1223),C=i(8202),u=i(4723),d=i(4461),p=i(2834);function O(e,o){1&e&&(n.TgZ(0,"div",5)(1,"div",6)(2,"button",7),n._uU(3,"About Us"),n.qZA()(),n.TgZ(4,"div",8)(5,"button",7),n._uU(6,"our services"),n.qZA()()())}let _=(()=>{class e{constructor(t,r){this.breadcrumbs=t,this.device=r}ngOnInit(){this.breadcrumbs.setBreadcrumbsHeader("TRAINING COURSES")}get isTheDeviceSmallScreen(){return this.device.isTheDeviceSmallScreen()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(C.d),n.Y36(u.w))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-training-courses-breadcrumbs-wrapper"]],decls:6,vars:3,consts:[[1,"breadcrumbs-parent",3,"defaultImage","lazyLoad"],[1,"container","p-0"],[1,"row"],[1,"col-md-9","col-12"],["class","col-md-3 col-12 row m-0 p-0 breadcrumbs-buttons align-items-end",4,"ngIf"],[1,"col-md-3","col-12","row","m-0","p-0","breadcrumbs-buttons","align-items-end"],[1,"col-4","p-0"],[1,"btn"],[1,"col-8"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),n._UZ(4,"app-breadcrumbs"),n.qZA(),n.YNc(5,O,7,0,"div",4),n.qZA()()()),2&t&&(n.Q6J("defaultImage","assets/features/about-us/trees-lazy.png")("lazyLoad","assets/features/about-us/trees.png"),n.xp6(5),n.Q6J("ngIf",!r.isTheDeviceSmallScreen))},directives:[d.z1,p.n,a.O5],styles:[".breadcrumbs-parent[_ngcontent-%COMP%]{font-size:1rem;width:100%;height:150px;display:flex;align-items:center;background-repeat:no-repeat;background-size:cover;background-position:center center;margin-top:var(--nav-bar-height)}.breadcrumbs-parent[_ngcontent-%COMP%]   .breadcrumbs-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#0000004d;color:#ffffffe6;height:35px;width:100%;font-size:.75em;font-weight:700;letter-spacing:.15em;text-transform:uppercase}.breadcrumbs-parent[_ngcontent-%COMP%]   .breadcrumbs-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#00000080}@media (max-width: 768px){.breadcrumbs-parent[_ngcontent-%COMP%]{margin-top:0}}"]}),e})();var m=i(520);let h=(()=>{class e{constructor(t){this.http=t}getEnglishTrainingCourses(){return this.http.get("assets/jsonFiles/training-courses/training-courses-english.json")}getArabicTrainingCourses(){return this.http.get("assets/jsonFiles/training-courses/training-courses-arabic.json")}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(m.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var c=i(2382);function M(e,o){if(1&e&&(n.TgZ(0,"option",26),n._uU(1),n.qZA()),2&e){const t=o.$implicit;n.s9C("value",t),n.xp6(1),n.Oqu(t)}}function b(e,o){if(1&e&&(n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.TgZ(11,"td"),n._uU(12),n.qZA()()),2&e){const t=o.$implicit;n.xp6(2),n.Oqu(t.Code||t["Code "]),n.xp6(2),n.Oqu(t["Course Title"]||t["Course Title "]),n.xp6(2),n.Oqu(t.Duration||t["Duration "]),n.xp6(2),n.Oqu(t.Date||t["Date "]),n.xp6(2),n.Oqu(t.Location||t["Location "]),n.xp6(2),n.Oqu(t.Fees||t["Fees "])}}let P=(()=>{class e{constructor(t){this.courses=t,this.allTrainingCategories=[],this.trainingCourses=[],this.trainingCoursesSectors=[],this.selectedSector=""}ngOnInit(){this.getAllEnglishCourses()}get getTrainingCourses(){return this.trainingCourses}getAllEnglishCourses(){this.courses.getEnglishTrainingCourses().subscribe({next:t=>{console.log(t),this.allTrainingCategories=t,this.trainingCourses=this.allTrainingCategories[Object.keys(this.allTrainingCategories)[0]],this.trainingCoursesSectors=Object.keys(this.allTrainingCategories),this.selectedSector=""},error:t=>{console.log(t)}})}getAllArabicCourses(){this.courses.getArabicTrainingCourses().subscribe({next:t=>{this.allTrainingCategories=t,this.trainingCourses=this.allTrainingCategories[Object.keys(this.allTrainingCategories)[0]],this.trainingCoursesSectors=Object.keys(this.allTrainingCategories),this.selectedSector=""},error:t=>{console.log(t)}})}updateTrainingCourses(){console.log(this.selectedSector),this.trainingCourses=this.allTrainingCategories[this.selectedSector]}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(h))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-training-courses-all-courses"]],decls:49,vars:5,consts:[[1,"parent-container"],[1,"container","p-0"],[1,"row"],[1,"col-md-6","col-12"],[1,"texts-parent"],[1,"text1"],[1,"text2"],[1,"col-md-6","col-12","ps-2"],[1,"d-flex","buttons-container"],[1,"col-6","pe-3"],[1,"btn","english",3,"click"],[1,"col-6","ps-1"],[1,"btn","arabic",3,"click"],[1,"row","mt-4"],[1,"form-control-container"],["name","trainingCoursesSectors","id","trainingCoursesSectors",1,"form-control",3,"ngModel","ngModelChange","change"],["value","","disabled","","selected","","hidden","",1,"hiddenSelect"],[3,"value",4,"ngFor","ngForOf"],[1,"left-icon"],["src","assets/icons/list-icon.png","alt",""],[1,"right-icon"],["src","assets/icons/burger-menu.png","alt",""],[1,"fields-number"],[1,"table-container"],[1,"table"],[4,"ngFor","ngForOf"],[3,"value"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n._uU(6," The most bespoke and flexible training courses "),n.qZA(),n.TgZ(7,"div",6),n._uU(8," TRAINING COURSES TABLE EN/AR "),n.qZA()()(),n.TgZ(9,"div",7)(10,"div",8)(11,"div",9)(12,"button",10),n.NdJ("click",function(){return r.getAllEnglishCourses()}),n._uU(13," English Training Courses "),n.qZA()(),n.TgZ(14,"div",11)(15,"button",12),n.NdJ("click",function(){return r.getAllArabicCourses()}),n._uU(16," Arabic Training Courses "),n.qZA()()()()(),n.TgZ(17,"div",13)(18,"div",3)(19,"div",14)(20,"select",15),n.NdJ("ngModelChange",function(Z){return r.selectedSector=Z})("change",function(){return r.updateTrainingCourses()}),n.TgZ(21,"option",16),n._uU(22,"sector name choose here"),n.qZA(),n.YNc(23,M,2,2,"option",17),n.qZA(),n.TgZ(24,"div",18),n._UZ(25,"img",19),n.qZA(),n.TgZ(26,"div",20),n._UZ(27,"img",21),n.qZA()()(),n.TgZ(28,"div",3)(29,"div",22),n._uU(30),n.qZA()()(),n.TgZ(31,"div",23)(32,"table",24)(33,"thead")(34,"tr")(35,"td"),n._uU(36,"Code"),n.qZA(),n.TgZ(37,"td"),n._uU(38,"Course Name"),n.qZA(),n.TgZ(39,"td"),n._uU(40,"Duration"),n.qZA(),n.TgZ(41,"td"),n._uU(42,"Date"),n.qZA(),n.TgZ(43,"td"),n._uU(44,"Location"),n.qZA(),n.TgZ(45,"td"),n._uU(46,"Fees"),n.qZA()()(),n.TgZ(47,"tbody"),n.YNc(48,b,13,6,"tr",25),n.qZA()()()()()),2&t&&(n.xp6(20),n.Q6J("ngModel",r.selectedSector),n.xp6(3),n.Q6J("ngForOf",r.trainingCoursesSectors),n.xp6(7),n.AsE(" Showing ",r.getTrainingCourses.length," of ",r.getTrainingCourses.length," Items "),n.xp6(18),n.Q6J("ngForOf",r.getTrainingCourses))},directives:[c.EJ,c.JJ,c.On,c.YN,c.Kr,a.sg],styles:[".parent-container[_ngcontent-%COMP%]{width:100%;font-size:1rem;margin-top:55px;margin-bottom:40px}.parent-container[_ngcontent-%COMP%]   .texts-parent[_ngcontent-%COMP%]{border-bottom:3px solid #555555;height:100%;width:100%}.parent-container[_ngcontent-%COMP%]   .texts-parent[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]{font-size:.75em;color:#9c9c9c;font-weight:400}.parent-container[_ngcontent-%COMP%]   .texts-parent[_ngcontent-%COMP%]   .text2[_ngcontent-%COMP%]{font-size:1em;color:#494949;font-weight:900;margin-top:5px;letter-spacing:.11em}.parent-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{height:60px}.parent-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{height:100%;width:100%;font-size:.82em;text-align:center;font-weight:700;color:#fff;border-radius:4px;letter-spacing:.06em}.parent-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .english[_ngcontent-%COMP%]{background-color:#1b6fad}.parent-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .arabic[_ngcontent-%COMP%]{background-color:#61be66}.parent-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .english[_ngcontent-%COMP%]:hover{background-color:#11629c}.parent-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .arabic[_ngcontent-%COMP%]:hover{background-color:#50ae55}.parent-container[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]{width:100%;position:relative;height:45px}.parent-container[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:100%;background-color:#cf4238;color:#fffc;border:0;padding:0 25px 0 50px;font-size:.82em;line-height:45px;text-transform:uppercase;letter-spacing:.1em}.parent-container[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #d9dde240}.parent-container[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#fffc}.parent-container[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   .left-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:15px;transform:translateY(-50%)}.parent-container[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   .right-icon[_ngcontent-%COMP%]{position:absolute;top:50%;right:15px;transform:translateY(-50%)}.parent-container[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{color:#000000b3;background-color:#f5f5f5!important;margin:5px 0}.parent-container[_ngcontent-%COMP%]   .fields-number[_ngcontent-%COMP%]{font-weight:900;font-size:.82em;color:#000;line-height:45px;text-align:end;letter-spacing:.1em}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]{margin-top:20px}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:900;font-size:.82em;color:#000;text-transform:uppercase;letter-spacing:.1em;padding:0}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){width:120px}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){width:100px}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){width:250px}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){width:100px;text-align:center}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){width:70px;text-align:center}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:.8em;text-align:start;line-height:25px}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){color:#1e88b2;font-weight:900;font-size:1em}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5), .parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){text-align:center}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){background-color:#89d1e9}.parent-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(caption) > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:0;border-bottom:.5px solid #e8e8e8}@media (max-width: 768px){.parent-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{margin-top:1em}.table-container[_ngcontent-%COMP%]{overflow-x:auto}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:table;white-space:nowrap}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-right:25px!important}}"]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-training-courses"]],decls:2,vars:0,template:function(t,r){1&t&&n._UZ(0,"app-training-courses-breadcrumbs-wrapper")(1,"app-training-courses-all-courses")},directives:[_,P],styles:[""]}),e})();var l=i(127),T=i(4466);const v=[{path:"",component:f}];let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.ez,T.m,l.Bz.forChild(v)],l.Bz]}),e})()}}]);