webpackJsonp([1],{"8hDk":function(t,e){},D4uH:function(t,e,i){"use strict";var n=i("Gu7T"),a=i.n(n),r=i("fZjL"),s=i.n(r),o=i("To8Q"),l=i.n(o),c={};function h(t,e){e?e.constructor.super.util.warn(t,e):console.error(t)}var u={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in c||(h('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.',this),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t||"both"===t}},label:String,tabindex:[Number,String]},data:function(){return{id:f("va-"),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(h('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){var t=this,e={"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-flip-both":"both"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse};return this.classes&&s()(this.classes).forEach(function(i){t.classes[i]&&(e[i]=!0)}),e},icon:function(){return this.name?c[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,i=t.height;return Math.max(e,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,i,n){var a=f("vat-");return e[n]=a,' id="'+a+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,i,n,a){var r=i||a;return r&&e[r]?"#"+e[r]:t}),t},focusable:function(){var t=this.tabindex;return null==t?"false":("string"==typeof t?parseInt(t,10):t)>=0?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var t=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var e=0,i=0;this.$children.forEach(function(n){n.outerScale=t.normalizedScale,e=Math.max(e,n.width),i=Math.max(i,n.height)}),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(i-t.height)/2})}}else h('Invalid prop: prop "name" is required.',this)}},render:function(t){if(null===this.name)return t();var e={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable},on:this.$listeners},i=this.id;if(this.title&&(e.attrs["aria-labelledby"]=i),this.raw){var n="<g>"+this.raw+"</g>";this.title&&(n='<title id="'+i+'">'+function(t){return t.replace(/[<>"&]/g,function(t){return p[t]||t})}(this.title)+"</title>"+n),e.domProps={innerHTML:n}}var r=this.title?[t("title",{attrs:{id:i}},this.title)]:[];return t("svg",e,this.raw?null:r.concat([t("g",this.$slots.default||(this.icon?[].concat(a()(this.icon.paths.map(function(e,i){return t("path",{attrs:e,key:"path-"+i})})),a()(this.icon.polygons.map(function(e,i){return t("polygon",{attrs:e,key:"polygon-"+i})}))):[]))]))},register:function(t){for(var e in t){var i=t[e],n=i.paths,a=void 0===n?[]:n,r=i.d,s=i.polygons,o=void 0===s?[]:s,l=i.points;r&&a.push({d:r}),l&&o.push({points:l}),c[e]=d({},i,{paths:a,polygons:o})}},icons:c};function d(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return i.forEach(function(e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}),t}function f(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")+l()(7)}var p={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};var m=i("VU/8")(u,null,!1,function(t){i("iaHB")},null,null);e.a=m.exports},EiOf:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("vue-accordion",{attrs:{items:this.items,accordionClass:this.acClass,styles:this.styles}})},staticRenderFns:[]},r={name:"app",components:{AccordionVue:i("VU/8")({data:function(){return{items:[{title:"Home",text:"",url:"#/Home",image:"https://unsplash.it/650/350/?image=534"},{title:"About",text:"",url:"#/About",image:"https://unsplash.it/650/350/?image=821"},{title:"Projects",text:"",url:"#/Projects",image:"https://unsplash.it/650/350/?image=445"},{title:"Interactive",text:"",url:"#/Interactive",image:"https://unsplash.it/650/350/?image=96"},{title:"Contact",text:"",url:"#/Contact",image:"https://unsplash.it/650/350/?image=668"}]}}},a,!1,null,null,null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("AccordionVue",{attrs:{id:"AV"}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")(r,s,!1,function(t){i("lRY1")},null,null).exports,l=i("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Home")]),this._v(" "),e("p",[this._v("Here is some information. This is the home page")])])}]};var h=i("VU/8")({name:"Home"},c,!1,function(t){i("R/CO")},null,null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"About"}},[e("h1",[this._v("Cindy Quach")]),this._v(" "),e("p",[this._v("Hi! My name is Cindy and welcome to my online resume portfolio! "),e("br"),this._v("\n    I am currently in my senior year at California State University Fullerton, studying Computer Science.\n    One of the greatest things that I enjoy about my major is the ability to create my own digital\n    worlds like this online resume!\n    Please feel free to look around, and please don't hesitate to contact me if you'd like\n    to know more about me!")])])}]};var d=i("VU/8")({name:"About"},u,!1,function(t){i("OrlK")},null,null).exports,f={data:function(){return{isToggle:!1}},props:{imgFront:{type:String,default:""},imgBack:{type:String,default:""},front:{type:String,default:""},back:{type:String,default:""},textSizeFront:{type:String,default:"2em"},textSizeBack:{type:String,default:"1.5em"},colorTextFront:{type:String,default:"black"},colorTextBack:{type:String,default:"white"},colorFront:{type:String,default:"white"},colorBack:{type:String,default:"#2ecc71"},headerFront:{},headerBack:{},footerFront:{},footerBack:{}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isToggle,expression:"!isToggle"}],staticClass:"animated flipInX flashcard",style:{backgroundColor:t.colorFront,color:t.colorTextFront},on:{click:function(e){t.isToggle=!t.isToggle}}},[i("div",{staticClass:"card-header",staticStyle:{"padding-bottom":"15px"}},[t._v(" "+t._s(t.headerFront)+" ")]),t._v(" "),i("div",{staticClass:"card-content center"},[i("p",{style:{fontSize:t.textSizeFront,fontWeight:"bold"}},[t._v(t._s(t.front))]),t._v(" "),""!=t.imgFront?i("img",{attrs:{src:t.imgFront,width:"200",height:"200"}}):t._e()]),t._v(" "),i("div",{staticClass:"card-footer"},[t._v(t._s(t.footerFront))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isToggle,expression:"isToggle"}],staticClass:"animated flipInX flashcard",style:{backgroundColor:t.colorBack,color:t.colorTextBack},on:{click:function(e){t.isToggle=!t.isToggle}}},[i("div",{staticClass:"card-header",staticStyle:{"padding-bottom":"15px"}},[t._v(" "+t._s(t.headerBack))]),t._v(" "),i("div",{staticClass:"card-content center"},[i("p",{style:{fontSize:t.textSizeBack}},[t._v(t._s(t.back))]),t._v(" "),""!=t.imgBack?i("img",{attrs:{src:t.imgBack,width:"200",height:"200"}}):t._e()]),t._v(" "),i("div",{staticClass:"card-footer"},[t._v(t._s(t.footerBack))])])])},staticRenderFns:[]};var m=i("VU/8")(f,p,!1,function(t){i("8hDk")},"data-v-0d51de7c",null).exports,v={components:{vueFlashcard:m}},g={render:function(){var t=this.$createElement;return(this._self._c||t)("vue-flashcard",{attrs:{front:"TRACKERSTACKER INVENTORY SYSTEM (SWIFT)",back:"iPhone application that can be used by any type of business or even for personal use.\n        User will be able to add and remove categories and data for the items."}})},staticRenderFns:[]},_={components:{vueFlashcard:m}},b={render:function(){var t=this.$createElement;return(this._self._c||t)("vue-flashcard",{attrs:{front:"STARFIT (SWIFT)",back:"iPhone application's purpose is to keep track of user's daily caloric intake.\n        Displays user's daily and weekly average calories.\n        Demonstrated ability to write software for a functional application."}})},staticRenderFns:[]},y={components:{vueFlashcard:m}},k={render:function(){var t=this.$createElement;return(this._self._c||t)("vue-flashcard",{attrs:{front:"WAREHOUSE MANAGEMENT SYSTEM (JAVA)",back:"Warehouse Management System is made to keep track of inventory items. \n  The system allows user to register new item and check in/out item to track location of item with real-time date stamp and \n  displays entire list of items and appropriate data."}})},staticRenderFns:[]},S={name:"Projects",components:{TrackerStacker:i("VU/8")(v,g,!1,null,null,null).exports,StarFit:i("VU/8")(_,b,!1,null,null,null).exports,Warehouse:i("VU/8")(y,k,!1,null,null,null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Projects")]),this._v(" "),e("TrackerStacker"),this._v(" "),e("StarFit"),this._v(" "),e("Warehouse")],1)},staticRenderFns:[]};var x=i("VU/8")(S,w,!1,function(t){i("EiOf")},null,null).exports,C={name:"Contact",data:function(){return{components:{"v-icon":Icon}}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Contact Me")]),t._v(" "),i("a",{staticClass:"social social-mail",attrs:{href:"https://gmail.com",target:"_blank"}},[i("v-icon",{attrs:{name:"envelope"}}),t._v(" "),i("div",{staticClass:"front"},[i("v-icon",{attrs:{name:"envelope"}})],1),t._v(" "),i("div",{staticClass:"back"},[i("v-icon",{attrs:{name:"envelope"}})],1)],1),t._v(" "),i("a",{staticClass:"social social-github",attrs:{href:"https://github.com/cindyquach1",target:"_blank"}},[i("v-icon",{attrs:{name:"brands/github"}}),t._v(" "),i("div",{staticClass:"front"},[i("v-icon",{attrs:{name:"brands/github"}})],1),t._v(" "),i("div",{staticClass:"back"},[i("v-icon",{attrs:{name:"brands/github"}})],1)],1),t._v(" "),i("a",{staticClass:"social social-linkedin",attrs:{href:"https://www.linkedin.com/in/cindy-quach-83b0b0113/",target:"_blank"}},[i("v-icon",{attrs:{name:"brands/linkedin"}}),t._v(" "),i("div",{staticClass:"front"},[i("v-icon",{attrs:{name:"brands/linkedin"}})],1),t._v(" "),i("div",{staticClass:"back"},[i("v-icon",{attrs:{name:"brands/linkedin"}})],1)],1)])},staticRenderFns:[]};var T=i("VU/8")(C,F,!1,function(t){i("mBjK")},null,null).exports,E=i("hqwk"),B=i("D4uH");n.a.component("vue-accordion",E.vueAccordion),n.a.component("v-icon",B.a),n.a.use(l.a);var A=new l.a({routes:[{path:"/home",name:"Home",component:h},{path:"/about",name:"About",component:d},{path:"/projects",name:"Projects",component:x},{path:"/contact",name:"Contact",component:T}]});i("D/PP");n.a.config.productionTip=!1,new n.a({el:"#app",router:A,components:{App:o},template:"<App/>"})},OrlK:function(t,e){},"R/CO":function(t,e){},iaHB:function(t,e){},lRY1:function(t,e){},mBjK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.63fe547080ce49a4fcf6.js.map