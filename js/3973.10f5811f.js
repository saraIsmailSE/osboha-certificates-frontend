(self["webpackChunkosboha180"]=self["webpackChunkosboha180"]||[]).push([[3973],{14230:(e,t,r)=>{var n=r(1702),a=r(84488),o=r(41340),u=/"/g,i=n("".replace);e.exports=function(e,t,r,n){var l=o(a(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+i(o(n),u,"&quot;")+'"'),s+">"+l+"</"+t+">"}},43429:(e,t,r)=>{var n=r(47293);e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},29254:(e,t,r)=>{"use strict";var n=r(82109),a=r(14230),o=r(43429);n({target:"String",proto:!0,forced:o("link")},{link:function(e){return a(this,"a","href",e)}})},63692:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(50124),a=r(48534),o=r(62760),u=r(57333);const i={getGeneralStatistics:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("userbook/general-statistics/");case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),checkAchievement:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("books/check-achievement/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),updateBook:function(e,t){return(0,a.Z)((0,n.Z)().mark((function r(){var a;return(0,n.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o.h.patch("books/".concat(t),e);case 2:return a=r.sent,r.abrupt("return",a.data.data);case 4:case"end":return r.stop()}}),r)})))()},getBookByName:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("books/by-name/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getStatistics:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("userbook/statistics/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getBook:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("books/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getUserBook:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("books/user-book/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getAllUserBooks:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("books/user");case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getAllBooks:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("books?page="+t);case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),acceptThesis:function(e){var t=o.h.post("/thesises/audit",{id:e,status:"review",auditor_id:u.Z.getUser().id});return t},rejectThesis:function(e,t){var r=o.h.post("/thesises/audit",{id:e,status:"rejected",auditor_id:u.Z.getUser().id,reviews:t});return r},addBook:function(e){return(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.h.post("books",e);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},deleteBook:function(e){return(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.h["delete"]("books/".concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()}}},3973:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>fe});r(68309),r(29254);var n=r(66252),a=r(49963),o=r(3577),u=r(71320),i=function(e){return(0,n.dD)("data-v-2be38a30"),e=e(),(0,n.Cn)(),e},l={class:"col-sm-12 mt-3"},s=i((function(){return(0,n._)("div",{class:"iq-card-header-toolbar d-flex text-center align-items-center mx-auto"},[(0,n._)("h1",{class:"text-center mt-3 mb-3"}," تعديل الكتاب ")],-1)})),c=i((function(){return(0,n._)("div",{class:"iq-card-body p-4"},[(0,n._)("div",{class:"image-block text-center"},[(0,n._)("img",{src:u,class:"img-fluid rounded w-25",alt:"blog-img"})])],-1)})),d={class:"col-12 bg-white pt-2"},p={class:"sign-in-from"},m=i((function(){return(0,n._)("h1",{class:"mb-0"},"تعديل كتاب",-1)})),f={class:"form-group"},v=i((function(){return(0,n._)("label",{for:"exampleInputEmail1"},"الاسم",-1)})),g={key:0,style:{color:"red"}},h={class:"form-group"},b=i((function(){return(0,n._)("label",{for:"exampleInputEmail1"},"الكاتب",-1)})),k={key:0,style:{color:"red"}},w={class:"form-group"},x=i((function(){return(0,n._)("label",{for:"exampleInputEmail1"},"دار النشر",-1)})),y={key:0,style:{color:"red"}},_={class:"form-group"},$=i((function(){return(0,n._)("label",{for:"exampleInputEmail1"},"الرابط",-1)})),Z={key:0,style:{color:"red"}},U={class:"form-group"},q=i((function(){return(0,n._)("label",{for:"exampleInputEmail1"},"صفحة البداية",-1)})),E={key:0,style:{color:"red"}},D={class:"form-group"},I=i((function(){return(0,n._)("label",{for:"exampleInputEmail1"},"صفحة النهاية",-1)})),T={key:0,style:{color:"red"}},C={class:"form-group"},B=i((function(){return(0,n._)("label",{for:"exampleInputEmail2"},"مستوى الكتاب",-1)})),V=i((function(){return(0,n._)("option",{value:""},"اختر مستوى الكتاب",-1)})),S=["value"],z={key:0,style:{color:"red"}},L={class:"form-group"},M=i((function(){return(0,n._)("label",{for:"exampleInputEmail2"},"قسم الكتاب",-1)})),H=i((function(){return(0,n._)("option",{value:""},"اختر قسم الكتاب",-1)})),K=["value"],Y={key:0,style:{color:"red"}},A={class:"form-group"},j=i((function(){return(0,n._)("label",{for:"exampleInputEmail2"},"نوع الكتاب",-1)})),P=i((function(){return(0,n._)("option",{value:""},"اختر نوع الكتاب",-1)})),R=["value"],G={key:0,style:{color:"red"}},N={class:"form-group"},O=i((function(){return(0,n._)("label",{for:"exampleInputEmail2"},"لغة الكتاب",-1)})),W=i((function(){return(0,n._)("option",{value:""},"اختر لغة الكتاب",-1)})),F=["value"],J={key:0,style:{color:"red"}},Q={key:0,class:"form-group"},X={style:{color:"red"}},ee={class:"form-group"},te=i((function(){return(0,n._)("label",{for:"exampleInputEmail1"},"ملخص",-1)})),re={key:0,style:{color:"red"}},ne=i((function(){return(0,n._)("div",{class:"d-inline-block w-100"},[(0,n._)("button",{type:"submit",class:"btn btn-primary float-end"}," تعديل الكتاب ")],-1)}));function ae(e,t,r,u,i,ae){var oe=(0,n.up)("iq-card");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(oe,{class:"iq-card"},{default:(0,n.w5)((function(){return[s,c,(0,n._)("div",d,[(0,n._)("div",p,[m,(0,n._)("form",{class:"mt-2",onSubmit:t[11]||(t[11]=(0,a.iM)((function(e){return ae.onSubmit()}),["prevent"]))},[(0,n._)("div",f,[v,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return u.v$.form.name.$model=e}),class:"form-control mb-0",id:"exampleInputEmail1",placeholder:"ادخال اسم الكتاب هنا"},null,512),[[a.nr,u.v$.form.name.$model]]),u.v$.form.name.$error?((0,n.wg)(),(0,n.iD)("small",g,"الرجاء قم بادخال الكتاب")):(0,n.kq)("",!0)]),(0,n._)("div",h,[b,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.v$.form.author.$model=e}),class:"form-control mb-0",id:"exampleInputEmail1",placeholder:"ادخال اسم الكاتب هنا"},null,512),[[a.nr,u.v$.form.author.$model]]),u.v$.form.author.$error?((0,n.wg)(),(0,n.iD)("small",k,"الرجاء قم بادخال الكاتب")):(0,n.kq)("",!0)]),(0,n._)("div",w,[x,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.v$.form.publisher.$model=e}),class:"form-control mb-0",id:"exampleInputEmail1",placeholder:"ادخال اسم دار النشر هنا"},null,512),[[a.nr,u.v$.form.publisher.$model]]),u.v$.form.publisher.$error?((0,n.wg)(),(0,n.iD)("small",y,"الرجاء قم بادخال دار النشر")):(0,n.kq)("",!0)]),(0,n._)("div",_,[$,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return u.v$.form.link.$model=e}),class:"form-control mb-0",id:"exampleInputEmail1",placeholder:"ادخال الرابط هنا"},null,512),[[a.nr,u.v$.form.link.$model]]),u.v$.form.link.$error?((0,n.wg)(),(0,n.iD)("small",Z,"الرجاء قم بادخال الرابط")):(0,n.kq)("",!0)]),(0,n._)("div",U,[q,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return u.v$.form.start_page.$model=e}),class:"form-control mb-0",id:"exampleInputEmail1",placeholder:"ادخال عدد الصفحات هنا"},null,512),[[a.nr,u.v$.form.start_page.$model]]),u.v$.form.start_page.$error?((0,n.wg)(),(0,n.iD)("small",E,"الرجاء قم بادخال صفحة البداية")):(0,n.kq)("",!0)]),(0,n._)("div",D,[I,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return u.v$.form.end_page.$model=e}),class:"form-control mb-0",id:"exampleInputEmail1",placeholder:"ادخال صفحة النهاية هنا"},null,512),[[a.nr,u.v$.form.end_page.$model]]),u.v$.form.end_page.$error?((0,n.wg)(),(0,n.iD)("small",T,"الرجاء قم بادخال صفحة النهاية")):(0,n.kq)("",!0)]),(0,n._)("div",C,[B,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return u.v$.form.level.$model=e}),class:"form-select","data-trigger":"",name:"choices-single-default",id:"choices-single-default"},[V,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.book.level,(function(e,t){return(0,n.wg)(),(0,n.iD)("option",{key:t,value:e},(0,o.zw)(e.name),9,S)})),128))],512),[[a.bM,u.v$.form.level.$model]]),u.v$.form.level.$error?((0,n.wg)(),(0,n.iD)("small",z,"يجب ادخال مستوئ الكتاب")):(0,n.kq)("",!0)]),(0,n._)("div",L,[M,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return u.v$.form.section.$model=e}),class:"form-select","data-trigger":"",name:"choices-single-default",id:"choices-single-default"},[H,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.book.section,(function(e,t){return(0,n.wg)(),(0,n.iD)("option",{key:t,value:e},(0,o.zw)(e.name),9,K)})),128))],512),[[a.bM,u.v$.form.section.$model]]),u.v$.form.section.$error?((0,n.wg)(),(0,n.iD)("small",Y,"يجب ادخال قسم الكتاب")):(0,n.kq)("",!0)]),(0,n._)("div",A,[j,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return u.v$.form.type.$model=e}),class:"form-select","data-trigger":"",name:"choices-single-default",id:"choices-single-default"},[P,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.book.type,(function(e,t){return(0,n.wg)(),(0,n.iD)("option",{key:t,value:e},(0,o.zw)(e.name),9,R)})),128))],512),[[a.bM,u.v$.form.type.$model]]),u.v$.form.type.$error?((0,n.wg)(),(0,n.iD)("small",G,"يجب ادخال نوع الكتاب")):(0,n.kq)("",!0)]),(0,n._)("div",N,[O,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[9]||(t[9]=function(e){return u.v$.form.language.$model=e}),class:"form-select","data-trigger":"",name:"choices-single-default",id:"choices-single-default"},[W,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.book.languages,(function(e,t){return(0,n.wg)(),(0,n.iD)("option",{key:t,value:e},(0,o.zw)(e.name),9,F)})),128))],512),[[a.bM,u.v$.form.language.$model]]),u.v$.form.type.$error?((0,n.wg)(),(0,n.iD)("small",J,"يجب ادخال لغة الكتاب")):(0,n.kq)("",!0)]),i.regError?((0,n.wg)(),(0,n.iD)("div",Q,[(0,n._)("small",X,(0,o.zw)(i.regError),1)])):(0,n.kq)("",!0),(0,n._)("div",ee,[te,(0,n.wy)((0,n._)("textarea",{type:"text","onUpdate:modelValue":t[10]||(t[10]=function(e){return u.v$.form.brief.$model=e}),class:"form-control mb-0",id:"exampleInputEmail1",placeholder:"ادخال الملخص هنا"},null,512),[[a.nr,u.v$.form.brief.$model]]),u.v$.form.brief.$error?((0,n.wg)(),(0,n.iD)("small",re,"الرجاء قم بادخال الملخص")):(0,n.kq)("",!0)]),ne],32)])])]})),_:1})])}var oe=r(50124),ue=r(48534),ie=r(54028),le=r(62587),se=r(62760),ce=r(63692);const de={name:"UpdateBOok",setup:function(){return{v$:(0,ie.ZP)()}},created:function(){var e=this;return(0,ue.Z)((0,oe.Z)().mark((function t(){return(0,oe.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getLevel();case 2:return t.next=4,e.getsection();case 4:return t.next=6,e.getType();case 6:return t.next=8,e.getLanguage();case 8:return t.next=10,e.getBook(e.$route.params.id);case 10:console.log(e.form);case 11:case"end":return t.stop()}}),t)})))()},data:function(){return{loader:!1,book:{level:[],section:[],type:[],languages:[]},options:{centeredSlides:!1,loop:!1,slidesPerView:1,autoplay:{delay:3e3},spaceBetween:15,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}},form:{name:"",author:"",publisher:"",link:"",start_page:"",end_page:"",section:{},level:{},type:{},brief:"",language:{}},bookToUpdate:[],regError:""}},methods:{getLevel:function(){var e=this;return(0,ue.Z)((0,oe.Z)().mark((function t(){var r;return(0,oe.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se.h.get("level");case 2:r=t.sent,e.book.level=r.data.data;case 4:case"end":return t.stop()}}),t)})))()},getType:function(){var e=this;return(0,ue.Z)((0,oe.Z)().mark((function t(){var r;return(0,oe.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se.h.get("types");case 2:r=t.sent,e.book.type=r.data.data,console.log(e.book.type);case 5:case"end":return t.stop()}}),t)})))()},getsection:function(){var e=this;return(0,ue.Z)((0,oe.Z)().mark((function t(){var r;return(0,oe.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se.h.get("section");case 2:r=t.sent,e.book.section=r.data.data;case 4:case"end":return t.stop()}}),t)})))()},getLanguage:function(){var e=this;return(0,ue.Z)((0,oe.Z)().mark((function t(){var r;return(0,oe.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se.h.get("languages");case 2:r=t.sent,e.book.languages=r.data.data;case 4:case"end":return t.stop()}}),t)})))()},getBook:function(e){var t=this;return(0,ue.Z)((0,oe.Z)().mark((function r(){return(0,oe.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,se.h.get("books/".concat(e));case 2:t.bookToUpdate=r.sent,t.form.name=t.bookToUpdate.data.data.name,t.form.author=t.bookToUpdate.data.data.writer,t.form.publisher=t.bookToUpdate.data.data.publisher,t.form.link=t.bookToUpdate.data.data.link,t.form.start_page=t.bookToUpdate.data.data.start_page,t.form.end_page=t.bookToUpdate.data.data.end_page,t.form.level=t.bookToUpdate.data.data.level,t.form.section=t.bookToUpdate.data.data.section,t.form.type=t.bookToUpdate.data.data.type,t.form.brief=t.bookToUpdate.data.data.brief,t.form.language=t.bookToUpdate.data.data.language;case 14:case"end":return r.stop()}}),r)})))()},onSubmit:function(){var e=this;return(0,ue.Z)((0,oe.Z)().mark((function t(){return(0,oe.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.v$.$touch(),e.v$.form.$invalid){t.next=14;break}return e.loader=!0,t.prev=3,t.next=6,ce.Z.updateBook({name:e.form.name,writer:e.form.author,publisher:e.form.publisher,link:e.form.link,start_page:e.form.start_page,end_page:e.form.end_page,level_id:e.form.level.id,section_id:e.form.section.id,type_id:e.form.type.id,brief:e.form.brief,language_id:e.form.language.id},e.$route.params.id);case 6:e.$router.push("/admin/book-list"),e.loader=!1,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](3),e.loader=!1,console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,10]])})))()}},validations:function(){return{form:{name:{required:le.C1},author:{required:le.C1},publisher:{required:le.C1},link:{required:le.C1},start_page:{required:le.C1,numeric:le.uR},end_page:{required:le.C1,numeric:le.uR},section:{required:le.C1},level:{required:le.C1},type:{required:le.C1},brief:{required:le.C1},language:{required:le.C1}}}}};var pe=r(83744);const me=(0,pe.Z)(de,[["render",ae],["__scopeId","data-v-2be38a30"]]),fe=me},71320:(e,t,r)=>{"use strict";e.exports=r.p+"img/registration-admin.c086c1db.png"}}]);
//# sourceMappingURL=3973.10f5811f.js.map