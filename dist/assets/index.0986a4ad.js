var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=(t,r,l)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l,c=(e,c)=>{for(var a in c||(c={}))t.call(c,a)&&n(e,a,c[a]);if(r)for(var a of r(c))l.call(c,a)&&n(e,a,c[a]);return e};import{r as a,a as i}from"./vendor.de62f314.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const l=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,c)=>{const a=new URL(e,l);if(self[t].moduleMap[a])return r(self[t].moduleMap[a]);const i=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){c(new Error(`Failed to import: ${e}`)),n(d)},onload(){r(self[t].moduleMap[a]),n(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("/assets/");const d=a.memo((e=>{const t=e.depI||0,r=(e,t)=>{e.forEach((e=>{e.checked=t,e.half=!1,e.children&&r(e.children,t)}))},l=(t,l)=>{const c=l.target.checked;t.checked=c,t.half=!1,t.children&&r(t.children,c),t.parentId?n(t.parentId):e.renderData()},n=(t,r=!1)=>{if(!t)return;const l=e.activeLink[t];let c=!!l.children.some((e=>e.checked));l.checked=!l.children.some((e=>!e.checked)),l.half=c&&!l.checked||r,l.parentId?n(l.parentId,l.half):e.renderData()};return a.createElement("div",{style:{paddingLeft:25}},e.data.map((r=>a.createElement("div",{key:r.key},a.createElement("div",{style:{marginBottom:10}},a.createElement("label",null,a.createElement("input",{className:r.half?"half":"",type:"checkbox",checked:r.checked||!1,onChange:l.bind(null,r)}),r.title)),r.children?a.createElement(d,c(c({},e),{changeParentStatus:n,data:r.children,depI:t+1})):null))))})),o=a.memo((e=>{const[t,r]=a.useState([]),[l,n]=a.useState({});function c(e,t={},r=null){return e.reduce(((e,l)=>(l.checked=!1,l.parentId=r,e[l.key]=l,l.children&&c(l.children,t,l.key),e)),t)}return a.useEffect((()=>{r(e.data);const t=c([...e.data]);n(t)}),[e.data]),a.createElement(d,{renderData:()=>{r([...t])},activeLink:l,data:t})})),m=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0",children:[{title:"0-0-0-0-0",key:"0-0-0-0-0"},{title:"0-0-0-1-1",key:"0-0-0-1-1"},{title:"0-0-0-2-2",key:"0-0-0-2-2",children:[{title:"0-0-0-0-0-0",key:"0-0-0-0-0-0"},{title:"0-0-0-1-1-1",key:"0-0-0-1-1-1"},{title:"0-0-0-2-2-2",key:"0-0-0-2-2-2"}]}]},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}];function s(){const[e,t]=a.useState([]);return a.useEffect((()=>{setTimeout((()=>{t(m)}))}),[]),a.createElement("div",{className:"App"},a.createElement(o,{data:e}))}i.render(a.createElement(a.StrictMode,null,a.createElement(s,null)),document.getElementById("root"));