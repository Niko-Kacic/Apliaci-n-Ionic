"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6688],{6688:(C,u,i)=>{i.r(u),i.d(u,{LoginPageModule:()=>v});var d=i(177),c=i(4341),n=i(4742),l=i(70),h=i(467),t=i(3953),m=i(804);const p=()=>["/home"],f=[{path:"",component:(()=>{class e{constructor(a,o,s){this.router=a,this.toastController=o,this.loginService=s,this.welcomeMessage="Bienvenido!"}validateLogin(){this.loginService.validateLogin(this.username,this.password)?(this.toastMessage("Usuario y contrase\xf1a valido","success"),this.router.navigate(["/home"])):this.toastMessage("Usuario y contrase\xf1a no valido","danger")}toastMessage(a,o){var s=this;return(0,h.A)(function*(){(yield s.toastController.create({message:a,duration:3e3,position:"bottom",color:o})).present()})()}static#t=this.\u0275fac=function(o){return new(o||e)(t.rXU(l.Ix),t.rXU(n.K_),t.rXU(m.H))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-login"]],decls:21,vars:7,consts:[[1,"ion-no-border",3,"translucent"],[1,"ion-text-center"],[3,"fullscreen"],[1,"ion-no-border","ion-text-center"],["size","large"],["label","Username",3,"ngModelChange","ngModel"],["label","Password","type","password",3,"ngModelChange","ngModel"],["expand","block",3,"click"],["expand","block",3,"routerLink"]],template:function(o,s){1&o&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1)(3,"h1"),t.EFF(4,"SkeletonAPP"),t.k0s(),t.j41(5,"h6"),t.EFF(6,"Aqui comienza todo"),t.k0s()()()(),t.j41(7,"ion-content",2)(8,"ion-header",3)(9,"ion-toolbar")(10,"ion-title",4),t.EFF(11),t.k0s()()(),t.j41(12,"ion-list")(13,"ion-item")(14,"ion-input",5),t.mxI("ngModelChange",function(r){return t.DH7(s.username,r)||(s.username=r),r}),t.k0s()(),t.j41(15,"ion-item")(16,"ion-input",6),t.mxI("ngModelChange",function(r){return t.DH7(s.password,r)||(s.password=r),r}),t.k0s()()(),t.j41(17,"ion-button",7),t.bIt("click",function(){return s.validateLogin()}),t.EFF(18," Ingresa "),t.k0s(),t.j41(19,"ion-button",8),t.EFF(20," Home "),t.k0s()()),2&o&&(t.Y8G("translucent",!0),t.R7$(7),t.Y8G("fullscreen",!0),t.R7$(4),t.JRh(s.welcomeMessage),t.R7$(3),t.R50("ngModel",s.username),t.R7$(2),t.R50("ngModel",s.password),t.R7$(3),t.Y8G("routerLink",t.lJ4(6,p)))},dependencies:[c.BC,c.vS,n.Jm,n.W9,n.eU,n.$w,n.uz,n.nf,n.BC,n.ai,n.Gw,n.N7,l.Wk]})}return e})()}];let M=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[l.iI.forChild(f),l.iI]})}return e})(),v=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[d.MD,c.YN,n.bv,M]})}return e})()}}]);