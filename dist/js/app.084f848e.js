(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)a=s[d],o[a]&&m.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={1:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([33,0]),n()})({33:function(t,e,n){t.exports=n("Vtdi")},"3Lv+":function(t,e,n){"use strict";var i=n("89PS"),o=n.n(i);o.a},"7eeT":function(t,e,n){t.exports=n.p+"img/logo.b0048340.png"},"89PS":function(t,e,n){},"8HgA":function(t,e,n){},EDI0:function(t,e,n){},Ebxp:function(t,e,n){},G4Rg:function(t,e,n){"use strict";var i=n("8HgA"),o=n.n(i);o.a},HGXu:function(t,e,n){"use strict";var i=n("X75m"),o=n.n(i);o.a},HdMa:function(t,e,n){},IZbs:function(t,e,n){"use strict";var i=n("UqSZ"),o=n.n(i);o.a},LycN:function(t,e,n){},R9sx:function(t,e,n){},RmWV:function(t,e,n){"use strict";var i=n("HdMa"),o=n.n(i);o.a},UqSZ:function(t,e,n){},VFYm:function(t,e,n){"use strict";var i=n("pxmY"),o=n.n(i);o.a},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var i=n("Kw5r"),o=n("jE9Z"),r=(n("5Vif"),n("+C1L"),n("CHRH")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Menu"),n("keep-alive",{attrs:{include:"Home"}},[n("router-view")],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("div",{staticClass:"menu__brand"},[n("img",{attrs:{src:t.logo}})]),n("div",{staticClass:"menu__nav"},[n("Nav")],1)])},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("div",{staticClass:"nav__btn",on:{click:t.anim}},[n("div",{staticClass:"nav__btn--line nav__btn--line"}),n("div",{staticClass:"nav__btn--line nav__btn--line"}),n("div",{staticClass:"nav__btn--line nav__btn--line"})]),n("div",{staticClass:"nav__menu"},[n("div",{staticClass:"nav__filter",on:{click:t.anim}}),n("div",{staticClass:"nav__container"},[n("ul",{on:{click:t.anim}},[t._m(0),n("router-link",{attrs:{tag:"li",to:"/",exact:""}},[t._v("\n          Home\n        ")]),n("router-link",{attrs:{tag:"li",to:"/portfolio",exact:""}},[t._v("\n          Portfolio\n        ")]),n("li",[t._v("Blog")])],1)])])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"close"})])}],m=n("z/o8"),p={props:{msg:String},data:function(){return{navOpen:!1}},methods:{anim:function(){var t=document.querySelector(".nav__container"),e=document.querySelector(".nav__filter");this.navOpen?(m["b"].to(t,.2,{x:"-100%"}),m["b"].fromTo(e,.2,{autoAlpha:.2,display:"block"},{autoAlpha:0,display:"none"})):(m["b"].to(t,.3,{x:"0%"}),m["b"].fromTo(e,.2,{autoAlpha:0,display:"none"},{autoAlpha:.2,display:"block"})),this.navOpen=!this.navOpen}}},h=p,f=(n("G4Rg"),n("KHd+")),g=Object(f["a"])(h,u,d,!1,null,null,null),v=g.exports,x=n("7eeT"),y=n.n(x),_={name:"Menu",components:{Nav:v},data:function(){return{logo:y.a}}},b=_,T=(n("y3qf"),Object(f["a"])(b,c,l,!1,null,null,null)),C=T.exports,w={name:"app",components:{Menu:C}},k=w,S=(n("ZL7j"),Object(f["a"])(k,a,s,!1,null,null,null)),O=S.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h1",[t._v("Type in the terminal to learn\n    something about me")]),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"terminal__help"},[n("h4",[t._v("Commands")]),n("ul",{staticClass:"font--alternative"},t._l(t.publicCmds,function(e){return n("li",{key:e.command},[t._v(t._s(e.command))])}))]),n("Terminal",{staticClass:"marginBottom",attrs:{terminalOptions:t.options,commands:t.cmds,title:"antoniosantos -- bash",directory:"antoniosantos.io$",newDistanceToTop:t.dummyPosition,newSize:t.dummySize},on:{isFullscreen:t.renderDummy}}),t.shouldRenderDummy?n("Terminal",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],ref:"dummy",staticClass:"paddingBottom invisible",attrs:{title:"antoniosantos -- bash",directory:"antoniosantos.io$",commands:t.cmds,isDummy:!0}}):t._e()],1)])},L=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"terminal",staticClass:"terminal"},[n("div",{staticClass:"terminal__top"},[n("TerminalButton",{attrs:{disabled:!0,color:"#f1605c"}}),n("TerminalButton",{attrs:{disabled:!t.fullScreenActive,icon:"minus",color:"#fdbe2a"},on:{click:t.goFullscreen}}),n("TerminalButton",{attrs:{color:"#45b748"},on:{click:t.goFullscreen}}),n("div",{staticClass:"terminal__top--title"},[t._v(t._s(t.title))])],1),n("div",{ref:"terminalContainer",staticClass:"terminal__container"},t._l(t.nTextAreas,function(e){return n("div",{key:e,staticClass:"terminal__textarea"},[n("TerminalTextArea",{attrs:{id:e,commands:t.commands,directory:t.directory+" ",commandLogs:t.commandLogs,terminalOptions:t.mergedTerminalOptions,isFullscreen:t.isFullscreen},on:{"command-finished":t.appendTextArea,"command-clear":t.clearTerminal,"command-log":t.saveCmdLog}})],1)}))])},P=[],j=(n("91GP"),n("pIFo"),n("xmWZ")),R=n("qpph"),D=function(){function t(){Object(j["a"])(this,t)}return Object(R["a"])(t,null,[{key:"convertToRegex",value:function(t){return"^(".concat(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),")")+"(.*)"}},{key:"getPublicCommandsArr",value:function(t){var e=t.filter(function(t){return!t.hidden});return e=e.map(function(t){return t.command}),e}},{key:"getPublicCommandsObj",value:function(t){var e=t.filter(function(t){return!t.hidden});return e}},{key:"getDistanceToTop",value:function(t){var e=0,n=0;return e+=t.offsetLeft-t.scrollLeft+t.clientLeft,n+=t.offsetTop-t.scrollTop+t.clientTop,{x:e,y:n}}}]),t}(),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textAreaTxt,expression:"textAreaTxt"},{name:"focus",rawName:"v-focus"}],ref:"txtArea",style:t.styleObj,attrs:{rows:t.textAreaRows,disabled:t.commandEntered,spellcheck:"false",autofocus:""},domProps:{value:t.textAreaTxt},on:{keyup:t.disableUserDelete,keydown:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),t.readCommand(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?(e.preventDefault(),t.typePrevCommand(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?(e.preventDefault(),t.typeNextCommand(e)):null}],input:function(e){e.target.composing||(t.textAreaTxt=e.target.value)}}})])},E=[],H=(n("Z2Ku"),n("L9s1"),n("k5N+")),z=(n("Oyvg"),n("SRfc"),n("rGqo"),{regexCd:/^\bcd\s+(.*)$/}),B=z,W={name:"TerminalTextArea",props:{directory:{type:String,required:!0},commands:{type:Array,required:!0},commandLogs:{type:Array},terminalOptions:{type:Object},isFullscreen:{type:Boolean}},data:function(){return{textAreaTxt:this.directory,commandEntered:!1,textAreaRows:1,cmd:void 0,focus:!0,height:"auto",logIndex:this.commandLogs.length-1,logIndexDecreased:!1,logIndexIncreased:!1}},watch:{textAreaTxt:function(){this.fixTxtAreaHeight()},isFullscreen:function(){this.fixTxtAreaHeight()}},computed:{directoryRegex:function(){return D.convertToRegex(this.directory)},styleObj:function(){return"auto"!==this.height?{height:"".concat(this.height,"px")}:{height:this.height}},helpText:function(){var t="Available commands:";return this.commands?D.getPublicCommandsObj(this.commands).forEach(function(e){e.description?t+="\n".concat(e.command," - ").concat(e.description):t+="\n".concat(e.command)}):t="\nNo commands available",t},cdText:function(){var t="Available directories:",e=this.$router.options.routes.map(function(t){return"\n".concat(t.path)});return e=e.join(""),t+e}},methods:{readCommand:function(){if(this.cmd=this.textAreaTxt.match(new RegExp(this.directoryRegex)),this.cmd[2]){var t=Object(H["a"])(this.cmd,3),e=t[2];this.cmd=e,this.$emit("command-log",this.cmd),this.resetLogIndex(),this.manageCommandRes()}else this.cmd=!1},typePrevCommand:function(){this.logIndexDecreased=!1,this.logIndexIncreased&&(this.logIndex-=1),this.logIndex>0&&this.logIndex<=this.commandLogs.length-1?(this.replaceCommand(this.commandLogs[this.logIndex]),this.logIndex-=1,this.logIndexDecreased=!0):0===this.logIndex&&this.replaceCommand(this.commandLogs[this.logIndex])},typeNextCommand:function(){this.logIndexIncreased=!1,this.logIndexDecreased&&(this.logIndex+=1,this.logIndexDecreased=!1),this.logIndex<this.commandLogs.length-1?(this.logIndexIncreased=!0,this.replaceCommand(this.commandLogs[this.logIndex+=1])):this.replaceCommand("")},resetLogIndex:function(){this.logIndex=this.commandLogs.length-1},manageCommandRes:function(){var t=this;this.typeCommandResponse().then(function(e){e&&t.fixTxtAreaHeight(),t.$emit("command-finished")}).catch(function(){"clear"!==t.cmd&&"cls"!==t.cmd&&(t.fixTxtAreaHeight(),t.$emit("command-finished"))})},typeCommandResponse:function(){var t=this;return new Promise(function(e,n){var i=t.validateCommand(),o=!0;if(t.commandEntered=!0,i&&"defaultCmd"!==i){var r=i.response;"function"===typeof r?(r=r(),"string"===typeof r?t.$nextTick(function(){t.typeText(r),o=!0,e(o)}):(o=!1,e(o))):t.$nextTick(function(){o=!0,t.typeText(r),e(o)})}else"defaultCmd"===i?t.$nextTick(function(){t.textAreaRows=t.textAreaRows+1,n()}):t.$nextTick(function(){t.typeText('"'.concat(t.cmd,'" Command not found, type "help"')),n()})})},typeText:function(t){this.textAreaTxt+="\n".concat(t)},typeTextInline:function(t){this.textAreaTxt+=t},replaceCommand:function(t){this.textAreaTxt=this.directory+t},fixTxtAreaHeight:function(){this.height=this.$refs.txtArea.scrollHeight},getRoutesPath:function(){var t=this.$router.options.routes.map(function(t){return t.path});return t},findRoutes:function(t){return this.getRoutesPath().includes(t)},validateCommand:function(){var t=this;if(this.cmd=this.cmd.toLowerCase(),!this.defaultCommand()){var e=this.commands.filter(function(e){return e.command.toLowerCase()===t.cmd});return 1===e.length&&e[0]}return"defaultCmd"},defaultCommand:function(){var t=this,e=!1;switch(this.cmd){case"clear":case"cls":this.$emit("command-clear"),e=!0;break;case"help":this.$nextTick(function(){t.typeText(t.helpText)}),e=!0;break;case"cd":this.terminalOptions.routing&&(this.$nextTick(function(){t.typeText(t.cdText)}),e=!0);break;default:break}if(this.terminalOptions.routing&&!e){var n,i=this.cmd.match(B.regexCd);if(null!==i){var o=Object(H["a"])(i,2);n=o[1]}else n=!1;n?(n===this.$route.path?this.$nextTick(function(){t.typeText("You are already here!")}):this.findRoutes(n)?this.$nextTick().then(function(){return new Promise(function(e){t.typeText("Navigated to ".concat(n)),e(!0)})}).then(function(){t.$router.push(n)}):this.$nextTick(function(){t.typeText(t.cdText)}),e=!0):e=!1}return e},disableUserDelete:function(t){this._checkDirectoryIsDefault()||(t.preventDefault(),this.textAreaTxt=this.directory)},_checkDirectoryIsDefault:function(){var t,e;if(t=this.textAreaTxt.match(new RegExp(this.directoryRegex)),t){var n=t,i=Object(H["a"])(n,2);t=i[1]}else t=!1;return e=this.directory===t,e}}},q=W,F=(n("HGXu"),Object(f["a"])(q,I,E,!1,null,null,null)),M=F.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"terminal__icoBtn--wrapper",class:t.wrapperStyleClass,on:{click:t.handleClick}},[n("div",{ref:"terminalBtn",staticClass:"terminal__icoBtn",class:t.btnStyleClass,style:t.btnStyle},[t.disabled?t._e():n("div",{staticClass:"terminal__icoBtn--content"},[n("icon",{attrs:{name:t.icon}})],1)])])},J=[],V={name:"TerminalButton",props:{icon:{type:String,default:"expand"},disabled:{type:Boolean,default:!1},color:{type:String,default:"#45b748"}},computed:{wrapperStyleClass:function(){return{"terminal__icoBtn--wrapper--disabled":this.disabled}},btnStyleClass:function(){return{"terminal__icoBtn--disabled":this.disabled}},btnStyle:function(){return{backgroundColor:this.color}}},methods:{handleClick:function(){this.disabled||this.$emit("click")}}},G=V,Y=(n("VFYm"),Object(f["a"])(G,N,J,!1,null,null,null)),Z=Y.exports,U={name:"Terminal",components:{TerminalTextArea:M,TerminalButton:Z},props:{title:{type:String,required:!1,default:"terminal -- root"},directory:{type:String,required:!1,default:"root:"},commands:{type:Array,required:!0},terminalOptions:{type:Object,required:!1,default:function(){return{routing:!0,emptyLog:!0}}},newDistanceToTop:{type:Object},newSize:{type:Object},isDummy:{type:Boolean}},data:function(){return{command:"",action:"",nTextAreas:[0],inputLog:[],mountedRoute:"",defaultOptions:{routing:!0,emptyLog:!0},fullScreenActive:!1,distanceToTop:{},size:{width:438},isFullscreen:!1}},methods:{appendTextArea:function(){var t=btoa(Math.random());this.nTextAreas.push(t)},clearTerminal:function(){this.nTextAreas=[btoa(Math.random())]},saveCmdLog:function(t){this.inputLog.push(t)},scrollToBottomTerminal:function(){var t=this.$refs.terminalContainer;t.scrollTop=t.scrollHeight},goFullscreen:function(){var t,e,n=this,i=this.distanceToTop,o=this.$refs.terminal,r=this.$refs.terminalContainer;this.fullScreenActive?(e=new m["a"]({paused:!0}),e.fromTo(r,.2,{minHeight:"100%",maxHeight:"100%"},{minHeight:"100px",maxHeight:"300px",clearProps:"minHeight,maxHeight"}).fromTo(o,.5,{position:"fixed",top:0,left:0,height:"100%"},{minWidth:this.minWidth,position:"absolute",top:i.y,left:i.x,height:"auto",clearProps:"left,top,position,minWidth,zIndex,height",ease:Power4.easeOut,onComplete:function(){n.isFullscreen=!1,r.scrollTo(0,r.scrollHeight)}},0),e.play(),this.fullScreenActive=!1):(t=new m["a"]({paused:!0}),this.size={width:this.$refs.terminal.offsetWidth},t.fromTo(o,.5,{minWidth:this.minWidth,position:"fixed",top:i.y,left:i.x},{minWidth:"100%",position:"fixed",height:"100%",zIndex:"999",top:0,left:0,ease:Power4.easeOut}).fromTo(r,.5,{minHeight:"100px",maxHeight:"300px"},{minHeight:"100%",maxHeight:"100%",ease:Expo.easeOut,onComplete:function(){n.isFullscreen=!0}},0),t.play(),this.fullScreenActive=!0)},handleWindowResize:function(){this.isDummy||this.isFullscreen?this.isDummy||(this.distanceToTop=this.newDistanceToTop,this.size=this.newSize):this.distanceToTop=D.getDistanceToTop(this.$refs.terminal)}},computed:{minWidth:function(){return"".concat(this.size.width,"px")},commandLogs:function(){if(!this.mergedTerminalOptions.emptyLog){var t=D.getPublicCommandsArr(this.commands);return t=[""].concat(t),t.concat(this.inputLog)}return[""].concat(this.inputLog)},mergedTerminalOptions:function(){return Object.assign(this.defaultOptions,this.terminalOptions)}},watch:{$route:function(t){this.mergedTerminalOptions.routing&&t.path===this.mountedRoute&&this.scrollToBottomTerminal()},isFullscreen:function(){this.$emit("is-fullscreen",this.isFullscreen)}},mounted:function(){var t=this;this.mergedTerminalOptions.routing&&this.$nextTick(function(){t.mountedRoute=t.$route.path}),this.distanceToTop=D.getDistanceToTop(this.$refs.terminal),window.addEventListener("resize",this.handleWindowResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)}},X=U,K=(n("3Lv+"),Object(f["a"])(X,$,P,!1,null,null,null)),Q=K.exports,tt={name:"Home",components:{Terminal:Q},data:function(){return{cmds:[{command:"about",description:"my general information",response:"Name: Antonio santos \nStudying: New Technologies of Communication in Aveiro\nAge:21"},{command:"hobbies",description:"my favorite activities",response:"Web Development\nSurfing\nPhotography\nFilm Making"},{command:"treasure",description:"hidden",hidden:!0,response:function(){return"you are rich"}},{command:"flip",description:"hidden",hidden:!0,response:function(){return Math.random()>.5?"cara":"croa"}}],options:{routing:!0,emptyLog:!0},shouldRenderDummy:!1,windowSize:window.innerWidth,dummyPosition:{},dummySize:{}}},computed:{publicCmds:function(){return D.getPublicCommandsObj(this.cmds)}},methods:{renderDummy:function(t){this.shouldRenderDummy=t},getDummyStyle:function(){var t=this.$refs.dummy.$el;this.dummyPosition=D.getDistanceToTop(t),this.dummySize={width:t.offsetWidth}},handleWindowResize:function(t){this.windowSize={width:t.currentTarget.innerWidth,height:t.currentTarget.innerHeight},this.shouldRenderDummy&&this.getDummyStyle()}},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)},mounted:function(){window.addEventListener("resize",this.handleWindowResize)}},et=tt,nt=(n("RmWV"),Object(f["a"])(et,A,L,!1,null,"768d6309",null)),it=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h1",[t._v("Portfolio")]),n("div",{staticClass:"portfolio__list"},t._l(t.cards,function(e){return n("PortfolioCard",t._b({key:e.title},"PortfolioCard",e,!1))}))])},rt=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"portfolio__card"},[n("div",{staticClass:"portfolio__card-header"},[n("h2",[t._v(t._s(t.title))])]),n("div",{staticClass:"portfolio__card-mockup"},[n("img",{staticClass:"img-responsive",attrs:{src:t.img,alt:"mockup"}})]),t.description?n("div",{staticClass:"portfolio__card-description"},[n("p",[t._v(t._s(t.description))])]):t._e(),t.keywords?n("div",{staticClass:"portfolio__card-keywords"},[n("ul",t._l(t.keywords,function(e){return n("li",{key:e,staticClass:"portfolio__card-keyword"},[t._v(t._s(e))])}))]):t._e(),t.link?n("div",{staticClass:"portfolio__card-link"},[n("a",{attrs:{href:t.link,target:"_blank"}},[t._v("View project")])]):t._e()])},st=[],ct={name:"PortfolioCard",props:{title:{type:String,required:!0},description:{type:String,required:!1},img:{type:String,required:!0},keywords:{type:Array,required:!1},link:{type:String,required:!1}},data:function(){return{}}},lt=ct,ut=(n("eJt8"),Object(f["a"])(lt,at,st,!1,null,"e4c1ed06",null)),dt=ut.exports,mt={components:{PortfolioCard:dt},data:function(){return{cards:[{title:"YTRank.net",img:n("r+5m"),keywords:["Vue JS","PHP","Javascript/ES6","SCSS","Webpack","Git","MySQL"]},{title:"Epa",img:n("r+5m"),keywords:["Vue JS","PHP","Javascript/ES6","SCSS"]},{title:"Uepa",img:n("r+5m"),keywords:["Vue JS","PHP","Javascript/ES6","SCSS","Webpack","Git","Nginx","MySQL"]},{title:"ei carambas que cena",img:n("r+5m"),keywords:["Vue JS","PHP","Javascript/ES6","SCSS","Webpack","Git","Nginx","MySQL"],description:"Uepa",link:"http://google.pt"}]}}},pt=mt,ht=(n("cwXl"),Object(f["a"])(pt,ot,rt,!1,null,"b6326f9a",null)),ft=ht.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loadingScreen"},[n("LoadingLogo"),n("LoadingBar",{attrs:{percentage:"50"}})],1)},vt=[],xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loadingScreen__img"})},yt=[],_t={name:"LoadingLogo",data:function(){return{}},mounted:function(){m["b"].to(".loadingScreen__img",1,{repeat:-1,backgroundPositionY:"-291px",ease:SteppedEase.config(6)})}},bt=_t,Tt=(n("uJT4"),Object(f["a"])(bt,xt,yt,!1,null,null,null)),Ct=Tt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loadingScreen__bar marginVertLarge"},[n("div",{ref:"bar",staticClass:"loadingScreen__bar--percentage"})])},kt=[],St={name:"LoadingBar",props:{percentage:{required:!1,default:0}},methods:{animBar:function(){m["b"].to(this.$refs.bar,1,{width:"".concat(this.percentage,"%")})}},mounted:function(){this.animBar()},watch:{percentage:function(){this.animBar()}}},Ot=St,At=(n("IZbs"),Object(f["a"])(Ot,wt,kt,!1,null,null,null)),Lt=At.exports,$t={name:"LoadingScreen",components:{LoadingLogo:Ct,LoadingBar:Lt},props:{finished:{type:Boolean,default:!1},percentage:{default:0}}},Pt=$t,jt=(n("g02j"),Object(f["a"])(Pt,gt,vt,!1,null,null,null)),Rt=jt.exports,Dt=[{path:"/",component:it},{path:"/loading",component:Rt},{path:"/portfolio",component:ft}],It=Dt;i["a"].config.productionTip=!1,i["a"].use(o["a"]),i["a"].component("icon",r["a"]),i["a"].directive("focus",{inserted:function(t){i["a"].nextTick(function(){t.focus()})}});var Et=new o["a"]({routes:It});new i["a"]({router:Et,render:function(t){return t(O)}}).$mount("#app")},X75m:function(t,e,n){},XS19:function(t,e,n){},"Ys+r":function(t,e,n){},ZL7j:function(t,e,n){"use strict";var i=n("EDI0"),o=n.n(i);o.a},cwXl:function(t,e,n){"use strict";var i=n("LycN"),o=n.n(i);o.a},eJt8:function(t,e,n){"use strict";var i=n("Ebxp"),o=n.n(i);o.a},g02j:function(t,e,n){"use strict";var i=n("XS19"),o=n.n(i);o.a},pxmY:function(t,e,n){},"r+5m":function(t,e,n){t.exports=n.p+"img/yt-rank.f9793fc1.png"},uJT4:function(t,e,n){"use strict";var i=n("Ys+r"),o=n.n(i);o.a},y3qf:function(t,e,n){"use strict";var i=n("R9sx"),o=n.n(i);o.a}});
//# sourceMappingURL=app.084f848e.js.map