"use strict";(self.webpackChunkorderAppWeb=self.webpackChunkorderAppWeb||[]).push([[76],{76:(S,Z,a)=>{a.r(Z),a.d(Z,{PublicModule:()=>L});var r=a(2382),h=a(4466),l=a(6533),q=a(5698),f=a(4004),e=a(5e3),g=a(2323);let v=(()=>{class i{constructor(n,t){this.router=n,this.store=t}canActivate(){return this.store.select(n=>n.auth).pipe((0,q.q)(1),(0,f.U)(n=>!n.user||this.router.createUrlTree(["private/dashboard"])))}}return i.\u0275fac=function(n){return new(n||i)(e.LFG(l.F0),e.LFG(g.yh))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var A=a(4795),b=a(8505),u=a(9808);function w(i,o){if(1&i&&(e.TgZ(0,"span",16),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&i){const n=e.oxw();e.xp6(2),e.Oqu(n.errorMessage)}}let U=(()=>{class i{constructor(n,t){this.fb=n,this.store=t,this.errorMessage="",this.loginValid=!0,this.loginForm=this.fb.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(6)]]})}ngOnInit(){this.store.select(n=>n.auth).pipe((0,f.U)(n=>n.authError),(0,b.b)(n=>{this.errorMessage=null!=n?n:""})).subscribe()}get f(){return this.loginForm.controls}onSubmit(){if(!this.loginForm)return;const{email:n}=this.loginForm.value,{password:t}=this.loginForm.value;this.store.dispatch((0,A.h8)({email:n,password:t}))}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(r.qu),e.Y36(g.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-log-in"]],decls:27,vars:7,consts:[[1,"container"],[1,"row","align-items-center","vh-100"],[1,"col-md-6","col-xs-12","mx-auto"],[1,"card","shadow","border"],[1,"card-body"],[1,"text-center",3,"formGroup","ngSubmit"],["class","invalid-feedback d-block error-box",4,"ngIf"],[1,"form-row"],[1,"form-group"],["placeholder","Email","formControlName","email","name","email","required","",1,"form-control","mb-2",3,"ngClass"],[1,"invalid-feedback"],["type","password","placeholder","Password","formControlName","password","name","password","required","",1,"form-control","mb-2",3,"ngClass"],[1,"row"],[1,"col"],[1,"btn","btn-primary","mb-2","mt-2",3,"disabled"],["routerLink","../sign-up"],[1,"invalid-feedback","d-block","error-box"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"form",5),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(6,"h2"),e._uU(7,"Log In"),e.qZA(),e.YNc(8,w,3,1,"span",6),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e._UZ(11,"input",9),e.TgZ(12,"span",10),e._uU(13," Please provide a valid email address "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",7),e.TgZ(15,"div",8),e._UZ(16,"input",11),e.TgZ(17,"span",10),e._uU(18),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",12),e.TgZ(20,"div",13),e.TgZ(21,"button",14),e._uU(22,"Login"),e.qZA(),e.qZA(),e.TgZ(23,"p"),e._uU(24,"If you don't have an account yet, please create one. "),e.TgZ(25,"a",15),e._uU(26,"Sign Up"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(5),e.Q6J("formGroup",t.loginForm),e.xp6(3),e.Q6J("ngIf",t.errorMessage),e.xp6(3),e.Q6J("ngClass",t.f.email.errors&&t.f.email.dirty&&t.f.email.touched?"is-invalid":t.f.email.valid?"is-valid":""),e.xp6(5),e.Q6J("ngClass",t.f.password.errors&&t.f.password.dirty&&t.f.password.touched?"is-invalid":t.f.password.valid?"is-valid":""),e.xp6(2),e.AsE(" ",null!=t.f.password&&t.f.password.hasError("minlength")?"Password must be 6 characters long":""," ",null!=t.f.password&&t.f.password.hasError("required")?"Please provide a valid password":""," "),e.xp6(3),e.Q6J("disabled",!t.loginForm.valid))},directives:[r._Y,r.JL,r.sg,u.O5,r.Fj,r.JJ,r.u,r.Q7,u.mk,l.yS],styles:[".error-box[_ngcontent-%COMP%]{font-weight:500}"]}),i})();function y(i,o){1&i&&(e.TgZ(0,"span"),e._uU(1," The username and password were not recognized "),e.qZA())}let C=(()=>{class i{constructor(n,t){this.fb=n,this.store=t,this.loginValid=!0,this.signUpForm=this.fb.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(6),this.matchValidator("passwordAgain",!0)]],passwordAgain:["",[r.kI.required,r.kI.minLength(6),this.matchValidator("password")]]})}get f(){return this.signUpForm.controls}onSubmit(){if(!this.signUpForm)return;const{email:n}=this.signUpForm.value,{password:t}=this.signUpForm.value;this.store.dispatch((0,A.hI)({email:n,password:t}))}matchValidator(n,t){return s=>{var p,c;if(s.parent&&t){const T=(null===(p=s.parent)||void 0===p?void 0:p.controls)[n];return T&&T.updateValueAndValidity(),null}return s.parent&&s.parent.value&&s.value===(null===(c=s.parent)||void 0===c?void 0:c.controls)[n].value?null:{matching:!0}}}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(r.qu),e.Y36(g.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-sign-up"]],decls:28,vars:6,consts:[[1,"container"],[1,"row","align-items-center","vh-100"],[1,"col-6","mx-auto"],[1,"card","shadow","border"],[1,"card-body"],[1,"text-center",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"form-row"],[1,"form-group"],["placeholder","Email","formControlName","email","name","email","required","",1,"form-control","mb-2",3,"ngClass"],[1,"invalid-feedback"],["type","password","placeholder","Password","formControlName","password","name","password","required","",1,"form-control","mb-2",3,"ngClass"],["type","password","placeholder","Password again","formControlName","passwordAgain","name","passwordAgain","required","",1,"form-control","mb-2",3,"ngClass"],[1,"row"],[1,"col"],[1,"btn","btn-primary","mb-2","mt-2",3,"disabled"],["routerLink","../login"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"form",5),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(6,"h2"),e._uU(7,"Sign Up"),e.qZA(),e.YNc(8,y,2,0,"span",6),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e._UZ(11,"input",9),e.TgZ(12,"div",10),e._uU(13," Please provide a valid email address "),e.qZA(),e.qZA(),e.qZA(),e._UZ(14,"input",11),e.TgZ(15,"span",10),e._uU(16," Please provide a valid password "),e.qZA(),e._UZ(17,"input",12),e.TgZ(18,"span",10),e._uU(19," Passwords don't match. "),e.qZA(),e.TgZ(20,"div",13),e.TgZ(21,"div",14),e.TgZ(22,"button",15),e._uU(23,"Sign Up"),e.qZA(),e.qZA(),e.TgZ(24,"p"),e._uU(25,"Already have an account?."),e.TgZ(26,"a",16),e._uU(27,"Log In"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(5),e.Q6J("formGroup",t.signUpForm),e.xp6(3),e.Q6J("ngIf",!t.loginValid),e.xp6(3),e.Q6J("ngClass",t.f.email.errors&&t.f.email.dirty&&t.f.email.touched?"is-invalid":t.f.email.valid?"is-valid":""),e.xp6(3),e.Q6J("ngClass",t.f.password.errors&&t.f.password.dirty&&t.f.password.touched?"is-invalid":t.f.password.valid?"is-valid":""),e.xp6(3),e.Q6J("ngClass",t.f.passwordAgain.errors&&t.f.passwordAgain.dirty&&t.f.passwordAgain.touched?"is-invalid":t.f.passwordAgain.valid?"is-valid":""),e.xp6(5),e.Q6J("disabled",!(null!=t.signUpForm&&t.signUpForm.valid)))},directives:[r._Y,r.JL,r.sg,u.O5,r.Fj,r.JJ,r.u,r.Q7,u.mk,l.yS],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;margin:8rem auto;text-align:center}mat-form-field[_ngcontent-%COMP%]{display:block}"]}),i})();class m{constructor(o,n,t,s,p){this.name=o,this.imageUrl=n,this.price=t,this.size=s,this.measuringUnit=p}}let k=(()=>{class i{constructor(){this.fruit=null}increment(){this.fruit&&this.fruit.size++}decrement(){this.fruit&&this.fruit.size>0&&this.fruit.size--}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-item-card"]],inputs:{fruit:"fruit"},decls:25,vars:5,consts:[[1,"card","my-2",2,"width","300px"],["alt","Card image cap",1,"card-img-top",3,"src"],[1,"card-body"],[1,"row"],[1,"col-9"],[1,"card-title"],[1,"col-3"],[1,"card-text","fw-bold"],[1,"card-text"],[1,"col-2"],[1,"btn","btn-primary",3,"click"],[1,"my-2","mx-2"],[1,"col-6","d-flex","justify-content-end"],[1,"btn","btn-outline-secondary","rounded-circle","px-3"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h5",5),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"p",7),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"p",8),e._uU(11),e.qZA(),e.TgZ(12,"div",3),e.TgZ(13,"div",9),e.TgZ(14,"button",10),e.NdJ("click",function(){return t.decrement()}),e._uU(15,"-"),e.qZA(),e.qZA(),e.TgZ(16,"div",9),e.TgZ(17,"p",11),e._uU(18,"0"),e.qZA(),e.qZA(),e.TgZ(19,"div",9),e.TgZ(20,"button",10),e.NdJ("click",function(){return t.increment()}),e._uU(21,"+"),e.qZA(),e.qZA(),e.TgZ(22,"div",12),e.TgZ(23,"button",13),e._uU(24,"i"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("src",null==t.fruit?null:t.fruit.imageUrl,e.LSH),e.xp6(5),e.Oqu(null==t.fruit?null:t.fruit.name),e.xp6(3),e.hij("",null==t.fruit?null:t.fruit.price," $"),e.xp6(2),e.AsE("",null==t.fruit?null:t.fruit.size,"",null==t.fruit?null:t.fruit.measuringUnit,""))},styles:[""]}),i})();function _(i,o){1&i&&e._UZ(0,"app-item-card",16),2&i&&e.Q6J("fruit",o.$implicit)}let d=(()=>{class i{constructor(){this.selectedSort="Popular",this.fruits=[new m("Apple","https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",1.67,1,"kg"),new m("Banana","https://www.konzumshop.ba/images/products/014/01410106l.gif",2.67,1,"kg"),new m("Orange","https://www.luluhypermarket.com/medias/18993-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjc2MTV8aW1hZ2UvanBlZ3xoYjcvaDY4LzExOTE2MjMxOTAxMjE0LzE4OTkzLTAxLmpwZ18xMjAwV3gxMjAwSHxlZGI5ZGFjMDM2ZGUzNmI5ZGJiYzkzMTEwYTliMmQ0ZjIyM2E5OTI5Y2RjYTU1NDg4MDRmNjBhMjAyN2Y4NmQ3",2.3,1,"kg"),new m("Strawberry","https://www.luluhypermarket.com/medias/18993-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjc2MTV8aW1hZ2UvanBlZ3xoYjcvaDY4LzExOTE2MjMxOTAxMjE0LzE4OTkzLTAxLmpwZ18xMjAwV3gxMjAwSHxlZGI5ZGFjMDM2ZGUzNmI5ZGJiYzkzMTEwYTliMmQ0ZjIyM2E5OTI5Y2RjYTU1NDg4MDRmNjBhMjAyN2Y4NmQ3",5,1,"kg")]}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-fruits"]],decls:30,vars:1,consts:[[1,"row"],[1,"col-6"],[1,"row","justify-content-end"],[1,"col-5"],["aria-label","Default select example",1,"form-select"],["selected",""],["value","1"],["value","2"],["value","3"],[1,"col-7"],["selected","","value","Popular"],["value","Likes"],["value","Price"],["value","Size"],[1,"d-flex","flex-wrap","justify-content-between"],[3,"fruit",4,"ngFor","ngForOf"],[3,"fruit"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h3"),e._uU(3,"Fruits & Vegetables"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti provident sed tenetur, soluta corrupti repudiandae quos? Fugit natus, vitae dicta sapiente modi error possimus soluta, quis, eaque itaque excepturi. "),e.qZA(),e.qZA(),e.TgZ(6,"div",1),e.TgZ(7,"div",2),e.TgZ(8,"div",3),e.TgZ(9,"select",4),e.TgZ(10,"option",5),e._uU(11,"Filter"),e.qZA(),e.TgZ(12,"option",6),e._uU(13,"One"),e.qZA(),e.TgZ(14,"option",7),e._uU(15,"Two"),e.qZA(),e.TgZ(16,"option",8),e._uU(17,"Three"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",9),e.TgZ(19,"select",4),e.TgZ(20,"option",10),e._uU(21,"Sort by Popular"),e.qZA(),e.TgZ(22,"option",11),e._uU(23,"Sort by Likes"),e.qZA(),e.TgZ(24,"option",12),e._uU(25,"Sort by Price"),e.qZA(),e.TgZ(26,"option",13),e._uU(27,"Sort by Size"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"div",14),e.YNc(29,_,1,1,"app-item-card",15),e.qZA()),2&n&&(e.xp6(29),e.Q6J("ngForOf",t.fruits))},directives:[r.YN,r.Kr,u.sg,k],styles:[""]}),i})();const I=[{path:"",component:(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-public"]],decls:32,vars:0,consts:[[1,"container"],[1,"navbar","navbar-expand-sm","navbar-light","bg-light"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item","active"],["routerLink","fruits","routerLinkActive","active","href","#",1,"nav-link"],[1,"nav-item"],["routerLink","meats","routerLinkActive","active","href","#",1,"nav-link"],["routerLink","dairy","routerLinkActive","active","href","#",1,"nav-link"],["routerLink","snacks","routerLinkActive","active","href","#",1,"nav-link"],["routerLink","drinks","routerLinkActive","active","href","#",1,"nav-link"],[1,"nav","navbar-nav","ms-auto"],[1,"nav-item","d-flex","align-items-center","px-4"],[1,"fas","fa-shopping-cart"],["routerLink","login",1,"nav-link","login"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"nav",1),e.TgZ(2,"div",2),e.TgZ(3,"a",3),e._uU(4,"Order app"),e.qZA(),e.TgZ(5,"button",4),e._UZ(6,"span",5),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"ul",7),e.TgZ(9,"li",8),e.TgZ(10,"a",9),e._uU(11,"Fruit & Vegetables"),e.qZA(),e.qZA(),e.TgZ(12,"li",10),e.TgZ(13,"a",11),e._uU(14,"Meats"),e.qZA(),e.qZA(),e.TgZ(15,"li",10),e.TgZ(16,"a",12),e._uU(17,"Dairy"),e.qZA(),e.qZA(),e.TgZ(18,"li",10),e.TgZ(19,"a",13),e._uU(20,"Snacks"),e.qZA(),e.qZA(),e.TgZ(21,"li",10),e.TgZ(22,"a",14),e._uU(23,"Drinks"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"ul",15),e.TgZ(25,"li",16),e._UZ(26,"i",17),e.qZA(),e.TgZ(27,"li",10),e.TgZ(28,"a",18),e._uU(29,"Log In"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(30,"hr"),e._UZ(31,"router-outlet"),e.qZA())},directives:[l.yS,l.Od,l.lC],styles:[""]}),i})(),children:[{path:"fruits",component:d},{path:"meats",component:d},{path:"dairy",component:d},{path:"snacks",component:d},{path:"drinks",component:d},{path:"login",component:U,canActivate:[v]},{path:"sign-up",component:C,canActivate:[v]}]}];let F=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[l.Bz.forChild(I)],l.Bz]}),i})(),L=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[r.u5,r.UX,F,h.m]]}),i})()}}]);