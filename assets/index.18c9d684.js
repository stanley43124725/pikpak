var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&H(e,o,t[o]);return e};import{d as D,u as me,r as f,a as G,o as g,c as K,w as l,b as r,e as a,N as he,f as fe,g as ve,z as ge,h as _e,i as ke,j as Y,k as ye,l as we,m as Fe,n as Ee,p as Ce,q as Ae,s as y,t as Ne,v as xe,x as be,y as w,A as I,B as De,C as Ie,D as b,E as m,F as q,G as $e,H as Pe,I as $,L as Le,J as Z,K as Be,M as Oe,O as Te,P as Se,Q as Ve,R as Re,S as Me,T as ze,U as X,V as je,W as Je,X as Ue,Y as He,Z as We,_ as Ge,$ as Ke,a0 as Ye,a1 as qe}from"./vendor.2ddacc38.js";const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Ze();const Xe=D({setup(e){return window.$message=me(),(t,o)=>null}}),Qe=D({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return(o,n)=>{const s=G("router-view");return g(),K(a(ke),{locale:a(ge),"date-locale":a(_e),"theme-overrides":t.value},{default:l(()=>[r(a(ve),null,{default:l(()=>[r(a(he),null,{default:l(()=>[r(a(fe),null,{default:l(()=>[r(Xe),r(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),et="modulepreload",Q={},tt="",_=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${tt}${n}`,n in Q)return;Q[n]=!0;const s=n.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":et,s||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),s)return new Promise((F,v)=>{c.addEventListener("load",F),c.addEventListener("error",v)})})).then(()=>t())};var ot="assets/logo1.08eb9157.png";const p=Y.create({});p.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&A.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},((o=e.url)==null?void 0:o.indexOf("https://pikpak.6948701.workers.dev"))===-1&&(e.url="https://pikpak.6948701.workers.dev/"+e.url),e});let C=!1;p.interceptors.response.use(e=>e,e=>{const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const n=window.localStorage.getItem("pikpakLoginData"),s=n?JSON.parse(n):{};return s.username&&s.password&&!C?(console.log("wait",o.url),C=!0,p.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(i=>(i.data&&i.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(i.data)),C=!1,p(o))).catch(()=>(A.push("/login"),!1))):s.username&&s.password&&C?new Promise((i,c)=>{const F=setInterval(()=>{C||(clearInterval(F),i(p(o)))},100)}):(A.push("/login"),!1);case 400:case 403:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return console.log(o.url,111),Promise.reject(e)});const ee=Y.create({});ee.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://pikpak.6948701.workers.dev"))===-1&&(e.url="https://pikpak.6948701.workers.dev/"+e.url),e});const Ct=ee,te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let n=Math.floor(o/10);return e=e/Math.pow(2,10*n),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[n]};const st=m("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[m("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),m("div",{class:"logo-box__text"},"PikPak")],-1),at={key:0,class:"content-bottom"},rt=w("\u4F1A\u5458\u7801"),nt={style:{"margin-bottom":"0"}},it=m("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\uFFE5119\u8D2D\u4E70\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),ut=w(" \u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),lt={class:"bottom-user-info"},ct={key:0,src:ot,class:"user-info-avatar"},dt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},pt={class:"user-info-name"},mt={key:0},ht={class:"action"},ft=w(" \u9000\u51FA\u767B\u5F55 "),vt=m("p",null,[m("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0\uFF0C\u611F\u8C22\u652F\u6301")],-1),gt=w("\u6DFB\u52A0"),_t=D({setup(e){const t=f(!1),o=u=>()=>X($,null,{default:()=>X(u)}),n=ye(),s=we(),i=f([{label:"\u6587\u4EF6",key:"list",icon:o(He)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(je)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Je)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ue)}]),c=f(),F=()=>{p.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),c.value=u.data}).catch(u=>{console.log(u)})},v=f(),P=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{v.value=u.data}).catch(u=>{console.log(u)})},k=f(),oe=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var d;k.value=(d=u.data)==null?void 0:d.data})},se=(u,d)=>{console.log(d),n.push("/"+d.key)};Fe(()=>{F(),P(),oe()});const x=f(),E=f(!1),ae=()=>{p.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:x.value}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),P()}).catch(u=>{console.log(u)}).finally(()=>{E.value=!1})},L=f(!1),re=u=>{L.value=u<800,t.value||(t.value=u<800)};Ee(s,()=>{L.value&&(t.value=!0)});const ne=Ce(),ie=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{p.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),n.push("/login")}).catch(u=>{console.log(u)})}})};return(u,d)=>{const ue=G("router-view"),le=Ae("resize");return g(),y(ze,null,[Ne(r(a(Z),{"has-sider":"",onResize:re},{default:l(()=>[r(a(xe),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=h=>t.value=!0),onExpand:d[2]||(d[2]=h=>t.value=!1),bordered:""},{default:l(()=>{var h,B,O,T,S,V,R,M,z,j,J;return[st,r(a(be),{options:i.value,value:String(a(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?b("",!0):(g(),y("div",at,[w(I(a(te)((h=v.value)==null?void 0:h.quota.usage))+" / "+I(a(te)((B=v.value)==null?void 0:B.quota.limit))+" ",1),r(a(De),{type:"primary",onClick:d[0]||(d[0]=wt=>E.value=!0)},{default:l(()=>[rt]),_:1}),((O=v.value)==null?void 0:O.quota)?(g(),K(a(Ie),{key:0,type:"line",percentage:Number((((T=v.value)==null?void 0:T.quota.usage)/((S=v.value)==null?void 0:S.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):b("",!0),m("p",nt,[r(a(q),{placement:"right"},{trigger:l(()=>[it]),default:l(()=>[ut]),_:1})])])),t.value?b("",!0):(g(),y("div",{key:1,class:$e(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[m("div",lt,[((M=k.value)==null?void 0:M.status)==="ok"?(g(),y("img",ct)):(g(),y("img",dt)),m("div",pt,[w(I((z=c.value)==null?void 0:z.name)+" ",1),((j=k.value)==null?void 0:j.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(g(),y("div",mt,[r(a(Pe),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):b("",!0)]),m("div",ht,[r(a(q),null,{trigger:l(()=>[r(a($),{onClick:ie},{default:l(()=>[r(a(Le))]),_:1})]),default:l(()=>[ft]),_:1})])])],2))]}),_:1},8,["collapsed"]),r(a(Z),null,{default:l(()=>[r(a(Be),{style:{height:"100vh"}},{default:l(()=>[r(a(Oe),{style:{"max-height":"100vh"}},{default:l(()=>[r(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),r(a(Me),{show:E.value,"onUpdate:show":d[5]||(d[5]=h=>E.value=h)},{default:l(()=>[r(a(Te),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":l(()=>[r(a($),{onClick:d[3]||(d[3]=h=>E.value=!1)},{default:l(()=>[r(a(Se))]),_:1})]),action:l(()=>[r(a(Ve),{block:!0,type:"primary",disabled:!x.value,onClick:ae},{default:l(()=>[gt]),_:1},8,["disabled"])]),default:l(()=>[r(a(Re),{placeholder:"\u4F1A\u5458\u7801",value:x.value,"onUpdate:value":d[4]||(d[4]=h=>x.value=h)},null,8,["value"]),vt]),_:1})]),_:1},8,["show"])],64)}}}),kt=[{path:"/",name:"home",component:_t,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>_(()=>import("./list.13983eb9.js"),["assets/list.13983eb9.js","assets/list.b938c6ec.css","assets/vendor.2ddacc38.js","assets/StreamSaver.8930e540.js","assets/StreamSaver.594f5e9d.css"])},{path:"trash",name:"trash",component:()=>_(()=>import("./trash.b2ee32e1.js"),["assets/trash.b2ee32e1.js","assets/trash.99a3677d.css","assets/vendor.2ddacc38.js"])},{path:"setting",name:"setting",component:()=>_(()=>import("./setting.d8d18d82.js"),["assets/setting.d8d18d82.js","assets/setting.f947579c.css","assets/vendor.2ddacc38.js"])},{path:"share",name:"share",component:()=>_(()=>import("./share.17d31a76.js"),["assets/share.17d31a76.js","assets/share.4f9c11c6.css","assets/vendor.2ddacc38.js"])}]},{path:"/t/:id?",name:"test",component:()=>_(()=>import("./test.aaeb4515.js"),["assets/test.aaeb4515.js","assets/vendor.2ddacc38.js"])},{path:"/s/:id",name:"shareInfo",component:()=>_(()=>import("./shareInfo.6eaa5db5.js"),["assets/shareInfo.6eaa5db5.js","assets/shareInfo.9e107d57.css","assets/vendor.2ddacc38.js","assets/StreamSaver.8930e540.js","assets/StreamSaver.594f5e9d.css"])},{path:"/login",name:"login",component:()=>_(()=>import("./login.2c7f9176.js"),["assets/login.2c7f9176.js","assets/login.5735a7bc.css","assets/vendor.2ddacc38.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/register",name:"register",component:()=>_(()=>import("./register.acf17ba7.js"),["assets/register.acf17ba7.js","assets/register.5588ce76.css","assets/vendor.2ddacc38.js","assets/phone-pc2.dbf6d71e.js"])}],yt=We({history:Ge(),routes:kt});var A=yt;const N=Ke(Qe);N.directive("resize",{mounted(e,t,o){e.$$erd=Ye({strategy:"scroll"}),e.$$erd.listenTo({},e,n=>{let s=n.offsetWidth,i=n.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var c;(c=o.props)==null||c.onResize(s,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});N.config.globalProperties.$http=p;N.use(A);N.use(qe,{router:A,siteIdList:[1280510106]});N.mount("#app");export{te as b,p as i,Ct as n};
