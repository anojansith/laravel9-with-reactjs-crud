import{r as i,R as S,a as s,F as ee,j as b,L as H}from"./app.749493fd.js";import{A as Le}from"./ApplicationLogo.4a6d3efd.js";const Fe=typeof window>"u"||typeof document>"u";let M=Fe?i.exports.useEffect:i.exports.useLayoutEffect;function F(e){let t=i.exports.useRef(e);return M(()=>{t.current=e},[e]),t}function Se(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function q(){let e=[],t=[],r={enqueue(n){t.push(n)},addEventListener(n,o,f,d){return n.addEventListener(o,f,d),r.add(()=>n.removeEventListener(o,f,d))},requestAnimationFrame(...n){let o=requestAnimationFrame(...n);return r.add(()=>cancelAnimationFrame(o))},nextFrame(...n){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...n))},setTimeout(...n){let o=setTimeout(...n);return r.add(()=>clearTimeout(o))},microTask(...n){let o={current:!0};return Se(()=>{o.current&&n[0]()}),r.add(()=>{o.current=!1})},add(n){return e.push(n),()=>{let o=e.indexOf(n);if(o>=0){let[f]=e.splice(o,1);f()}}},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return r}function ue(){let[e]=i.exports.useState(q);return i.exports.useEffect(()=>()=>e.dispose(),[e]),e}let L=function(e){let t=F(e);return S.useCallback((...r)=>t.current(...r),[t])},_={serverHandoffComplete:!1};function de(){let[e,t]=i.exports.useState(_.serverHandoffComplete);return i.exports.useEffect(()=>{e!==!0&&t(!0)},[e]),i.exports.useEffect(()=>{_.serverHandoffComplete===!1&&(_.serverHandoffComplete=!0)},[]),e}function y(e,t,...r){if(e in t){let o=t[e];return typeof o=="function"?o(...r):o}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,y),n}let Oe=Symbol();function ce(...e){let t=i.exports.useRef(e);i.exports.useEffect(()=>{t.current=e},[e]);let r=L(n=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(n):o.current=n)});return e.every(n=>n==null||(n==null?void 0:n[Oe]))?void 0:r}var fe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(fe||{}),E=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(E||{});function pe({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:o,visible:f=!0,name:d}){let a=me(t,e);if(f)return A(a,r,n,d);let p=o!=null?o:0;if(p&2){let{static:l=!1,...c}=a;if(l)return A(c,r,n,d)}if(p&1){let{unmount:l=!0,...c}=a;return y(l?0:1,{[0](){return null},[1](){return A({...c,hidden:!0,style:{display:"none"}},r,n,d)}})}return A(a,r,n,d)}function A(e,t={},r,n){let{as:o=r,children:f,refName:d="ref",...a}=G(e,["unmount","static"]),p=e.ref!==void 0?{[d]:e.ref}:{},l=typeof f=="function"?f(t):f;a.className&&typeof a.className=="function"&&(a.className=a.className(t));let c={};if(t){let v=!1,w=[];for(let[h,u]of Object.entries(t))typeof u=="boolean"&&(v=!0),u===!0&&w.push(h);v&&(c["data-headlessui-state"]=w.join(" "))}if(o===i.exports.Fragment&&Object.keys(ie(a)).length>0){if(!i.exports.isValidElement(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));return i.exports.cloneElement(l,Object.assign({},me(l.props,ie(G(a,["ref"]))),c,p,je(l.ref,p.ref)))}return i.exports.createElement(o,Object.assign({},G(a,["ref"]),o!==i.exports.Fragment&&p,o!==i.exports.Fragment&&c),l)}function je(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}}function me(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let o in n)o.startsWith("on")&&typeof n[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(n[o])):t[o]=n[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](o,...f){let d=r[n];for(let a of d){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;a(o,...f)}}});return t}function te(e){var t;return Object.assign(i.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ie(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function G(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let re=i.exports.createContext(null);re.displayName="OpenClosedContext";var O=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(O||{});function he(){return i.exports.useContext(re)}function $e({value:e,children:t}){return S.createElement(re.Provider,{value:e},t)}function ve(){let e=i.exports.useRef(!1);return M(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Re(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function J(e,...t){e&&t.length>0&&e.classList.add(...t)}function K(e,...t){e&&t.length>0&&e.classList.remove(...t)}var X=(e=>(e.Ended="ended",e.Cancelled="cancelled",e))(X||{});function Pe(e,t){let r=q();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:o}=getComputedStyle(e),[f,d]=[n,o].map(a=>{let[p=0]=a.split(",").filter(Boolean).map(l=>l.includes("ms")?parseFloat(l):parseFloat(l)*1e3).sort((l,c)=>c-l);return p});if(f+d!==0){let a=[];a.push(r.addEventListener(e,"transitionrun",p=>{p.target===p.currentTarget&&(a.splice(0).forEach(l=>l()),a.push(r.addEventListener(e,"transitionend",l=>{l.target===l.currentTarget&&(t("ended"),a.splice(0).forEach(c=>c()))}),r.addEventListener(e,"transitioncancel",l=>{l.target===l.currentTarget&&(t("cancelled"),a.splice(0).forEach(c=>c()))})))}))}else t("ended");return r.add(()=>t("cancelled")),r.dispose}function Ae(e,t,r,n){let o=r?"enter":"leave",f=q(),d=n!==void 0?Re(n):()=>{};o==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let a=y(o,{enter:()=>t.enter,leave:()=>t.leave}),p=y(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),l=y(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return K(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),J(e,...a,...l),f.nextFrame(()=>{K(e,...l),J(e,...p),Pe(e,c=>(c==="ended"&&(K(e,...a),J(e,...t.entered)),d(c)))}),f.dispose}function De({container:e,direction:t,classes:r,onStart:n,onStop:o}){let f=ve(),d=ue(),a=F(t);M(()=>{let p=q();d.add(p.dispose);let l=e.current;if(!!l&&a.current!=="idle"&&!!f.current)return p.dispose(),n.current(a.current),p.add(Ae(l,r.current,a.current==="enter",c=>{p.dispose(),y(c,{[X.Ended](){o.current(a.current)},[X.Cancelled]:()=>{}})})),p.dispose},[t])}function k(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let U=i.exports.createContext(null);U.displayName="TransitionContext";var He=(e=>(e.Visible="visible",e.Hidden="hidden",e))(He||{});function Me(){let e=i.exports.useContext(U);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function qe(){let e=i.exports.useContext(z);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let z=i.exports.createContext(null);z.displayName="NestingContext";function B(e){return"children"in e?B(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ge(e,t){let r=F(e),n=i.exports.useRef([]),o=ve(),f=ue(),d=L((h,u=E.Hidden)=>{let g=n.current.findIndex(({el:m})=>m===h);g!==-1&&(y(u,{[E.Unmount](){n.current.splice(g,1)},[E.Hidden](){n.current[g].state="hidden"}}),f.microTask(()=>{var m;!B(n)&&o.current&&((m=r.current)==null||m.call(r))}))}),a=L(h=>{let u=n.current.find(({el:g})=>g===h);return u?u.state!=="visible"&&(u.state="visible"):n.current.push({el:h,state:"visible"}),()=>d(h,E.Unmount)}),p=i.exports.useRef([]),l=i.exports.useRef(Promise.resolve()),c=i.exports.useRef({enter:[],leave:[],idle:[]}),v=L((h,u,g)=>{p.current.splice(0),t&&(t.chains.current[u]=t.chains.current[u].filter(([m])=>m!==h)),t==null||t.chains.current[u].push([h,new Promise(m=>{p.current.push(m)})]),t==null||t.chains.current[u].push([h,new Promise(m=>{Promise.all(c.current[u].map(([x,N])=>N)).then(()=>m())})]),u==="enter"?l.current=l.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(u)):g(u)}),w=L((h,u,g)=>{Promise.all(c.current[u].splice(0).map(([m,x])=>x)).then(()=>{var m;(m=p.current.shift())==null||m()}).then(()=>g(u))});return i.exports.useMemo(()=>({children:n,register:a,unregister:d,onStart:v,onStop:w,wait:l,chains:c}),[a,d,n,v,w,c,l])}function Ue(){}let ze=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function se(e){var t;let r={};for(let n of ze)r[n]=(t=e[n])!=null?t:Ue;return r}function Be(e){let t=i.exports.useRef(se(e));return i.exports.useEffect(()=>{t.current=se(e)},[e]),t}let We="div",xe=fe.RenderStrategy,be=te(function(e,t){let{beforeEnter:r,afterEnter:n,beforeLeave:o,afterLeave:f,enter:d,enterFrom:a,enterTo:p,entered:l,leave:c,leaveFrom:v,leaveTo:w,...h}=e,u=i.exports.useRef(null),g=ce(u,t),m=h.unmount?E.Unmount:E.Hidden,{show:x,appear:N,initial:ye}=Me(),[C,I]=i.exports.useState(x?"visible":"hidden"),oe=qe(),{register:j,unregister:$}=oe,V=i.exports.useRef(null);i.exports.useEffect(()=>j(u),[j,u]),i.exports.useEffect(()=>{if(m===E.Hidden&&!!u.current){if(x&&C!=="visible"){I("visible");return}return y(C,{hidden:()=>$(u),visible:()=>j(u)})}},[C,u,j,$,x,m]);let we=F({enter:k(d),enterFrom:k(a),enterTo:k(p),entered:k(l),leave:k(c),leaveFrom:k(v),leaveTo:k(w)}),R=Be({beforeEnter:r,afterEnter:n,beforeLeave:o,afterLeave:f}),Q=de();i.exports.useEffect(()=>{if(Q&&C==="visible"&&u.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[u,C,Q]);let Y=ye&&!N,Ee=(()=>!Q||Y||V.current===x?"idle":x?"enter":"leave")(),Ne=L(T=>y(T,{enter:()=>R.current.beforeEnter(),leave:()=>R.current.beforeLeave(),idle:()=>{}})),Ce=L(T=>y(T,{enter:()=>R.current.afterEnter(),leave:()=>R.current.afterLeave(),idle:()=>{}})),P=ge(()=>{I("hidden"),$(u)},oe);De({container:u,classes:we,direction:Ee,onStart:F(T=>{P.onStart(u,T,Ne)}),onStop:F(T=>{P.onStop(u,T,Ce),T==="leave"&&!B(P)&&(I("hidden"),$(u))})}),i.exports.useEffect(()=>{!Y||(m===E.Hidden?V.current=null:V.current=x)},[x,Y,C]);let Te=h,ke={ref:g};return s(z.Provider,{value:P,children:s($e,{value:y(C,{visible:O.Open,hidden:O.Closed}),children:pe({ourProps:ke,theirProps:Te,defaultTag:We,features:xe,visible:C==="visible",name:"Transition.Child"})})})}),Z=te(function(e,t){let{show:r,appear:n=!1,unmount:o,...f}=e,d=i.exports.useRef(null),a=ce(d,t);de();let p=he();if(r===void 0&&p!==null&&(r=y(p,{[O.Open]:!0,[O.Closed]:!1})),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,c]=i.exports.useState(r?"visible":"hidden"),v=ge(()=>{c("hidden")}),[w,h]=i.exports.useState(!0),u=i.exports.useRef([r]);M(()=>{w!==!1&&u.current[u.current.length-1]!==r&&(u.current.push(r),h(!1))},[u,r]);let g=i.exports.useMemo(()=>({show:r,appear:n,initial:w}),[r,n,w]);i.exports.useEffect(()=>{if(r)c("visible");else if(!B(v))c("hidden");else{let x=d.current;if(!x)return;let N=x.getBoundingClientRect();N.x===0&&N.y===0&&N.width===0&&N.height===0&&c("hidden")}},[r,v]);let m={unmount:o};return s(z.Provider,{value:v,children:s(U.Provider,{value:g,children:pe({ourProps:{...m,as:i.exports.Fragment,children:S.createElement(be,{ref:a,...m,...f})},theirProps:{},defaultTag:i.exports.Fragment,features:xe,visible:l==="visible",name:"Transition"})})})}),Ie=te(function(e,t){let r=i.exports.useContext(U)!==null,n=he()!==null;return s(ee,{children:!r&&n?S.createElement(Z,{ref:t,...e}):S.createElement(be,{ref:t,...e})})}),Ve=Object.assign(Z,{Child:Ie,Root:Z});const ne=S.createContext(),W=({children:e})=>{const[t,r]=i.exports.useState(!1),n=()=>{r(o=>!o)};return s(ne.Provider,{value:{open:t,setOpen:r,toggleOpen:n},children:s("div",{className:"relative",children:e})})},Qe=({children:e})=>{const{open:t,setOpen:r,toggleOpen:n}=i.exports.useContext(ne);return b(ee,{children:[s("div",{onClick:n,children:e}),t&&s("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},Ye=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white",children:n})=>{const{open:o,setOpen:f}=i.exports.useContext(ne);let d="origin-top";e==="left"?d="origin-top-left left-0":e==="right"&&(d="origin-top-right right-0");let a="";return t==="48"&&(a="w-48"),s(ee,{children:s(Ve,{as:i.exports.Fragment,show:o,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:s("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${d} ${a}`,onClick:()=>f(!1),children:s("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:n})})})})},_e=({href:e,method:t="post",as:r="a",children:n})=>s(H,{href:e,method:t,as:r,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:n});W.Trigger=Qe;W.Content=Ye;W.Link=_e;const D=W;function ae({href:e,active:t,children:r}){return s(H,{href:e,className:t?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",children:r})}function le({method:e="get",as:t="a",href:r,active:n=!1,children:o}){return s(H,{method:e,as:t,href:r,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${n?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out`,children:o})}function Ke({auth:e,header:t,children:r}){const[n,o]=i.exports.useState(!1);return b("div",{className:"min-h-screen bg-gray-100",children:[b("nav",{className:"bg-white border-b border-gray-100",children:[s("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:b("div",{className:"flex justify-between h-16",children:[b("div",{className:"flex",children:[s("div",{className:"shrink-0 flex items-center",children:s(H,{href:"/",children:s(Le,{className:"block h-9 w-auto text-gray-500"})})}),b("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[s(ae,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),s(ae,{href:route("posts.index"),active:route().current("posts.index"),children:"Posts"})]})]}),s("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:s("div",{className:"ml-3 relative",children:b(D,{children:[s(D.Trigger,{children:s("span",{className:"inline-flex rounded-md",children:b("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[e.user.name,s("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:s("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s(D.Content,{children:s(D.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})})]})})}),s("div",{className:"-mr-2 flex items-center sm:hidden",children:s("button",{onClick:()=>o(f=>!f),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:b("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[s("path",{className:n?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),s("path",{className:n?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),b("div",{className:(n?"block":"hidden")+" sm:hidden",children:[s("div",{className:"pt-2 pb-3 space-y-1",children:s(le,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),b("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[b("div",{className:"px-4",children:[s("div",{className:"font-medium text-base text-gray-800",children:e.user.name}),s("div",{className:"font-medium text-sm text-gray-500",children:e.user.email})]}),s("div",{className:"mt-3 space-y-1",children:s(le,{method:"post",href:route("logout"),as:"button",children:"Log Out"})})]})]})]}),t&&s("header",{className:"bg-white shadow",children:s("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),s("main",{children:r})]})}export{Ke as A};
