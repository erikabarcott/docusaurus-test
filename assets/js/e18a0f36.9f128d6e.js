"use strict";(self.webpackChunkcodiac=self.webpackChunkcodiac||[]).push([[4429],{3469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(4848),a=t(8453);const i={},o="Patch and Update",r={id:"api-base/basics/patch-and-update",title:"Patch and Update",description:"Let's modify our entities.",source:"@site/docs/api-base/basics/patch-and-update.md",sourceDirName:"api-base/basics",slug:"/api-base/basics/patch-and-update",permalink:"/docs/api-base/basics/patch-and-update",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-base/basics/patch-and-update.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Validation",permalink:"/docs/api-base/basics/custom-validation"},next:{title:"Projections",permalink:"/docs/api-base/basics/projections"}},d={},c=[{value:"Update",id:"update",level:2},{value:"Update Single",id:"update-single",level:3},{value:"Update Many",id:"update-many",level:3},{value:"Patch",id:"patch",level:2},{value:"Merge Patch (Default)",id:"merge-patch-default",level:3},{value:"JSON Patch",id:"json-patch",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"patch-and-update",children:"Patch and Update"}),"\n",(0,s.jsx)(n.p,{children:"Let's modify our entities."}),"\n",(0,s.jsx)(n.p,{children:"You just have to ask yourself one question:  Do I want to replace the whole thing or just modify one or more of its properties?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use the UPDATE endpoints to do a wholesale replacement of an entity"}),"\n",(0,s.jsx)(n.li,{children:"Use the PATCH endpoints to modify one or more of its properties"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"update",children:"Update"}),"\n",(0,s.jsx)(n.h3,{id:"update-single",children:"Update Single"}),"\n",(0,s.jsxs)(n.p,{children:['Life with UPDATE is very simple.  Simply fire off a "PUT" request using the route for that shoe (the shoes url suffixed with the ',(0,s.jsx)(n.code,{children:"id"}),' of the entity. "123" in this case).']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PUT http://localhost:1775/shoes/123\n"})}),"\n",(0,s.jsxs)(n.p,{children:["...and pass the entity (eg: a ",(0,s.jsx)(n.code,{children:"shoe"}),") as the body of the request"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "id": "123",\n    "brand": "Nike",\n    "model": "Metcon 4",\n    "gender": "M",\n    "size": 11,\n    "tags": [ "CrossTraining", "Sport" ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"update-many",children:"Update Many"}),"\n",(0,s.jsxs)(n.p,{children:["To replace several entities in a single request, fire a ",(0,s.jsx)(n.code,{children:"PUT"})," request just as you did for updating the single, but ",(0,s.jsx)(n.strong,{children:"dont use the id suffix"})," in the route..."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PUT http://localhost:1775/shoes/\n"})}),"\n",(0,s.jsx)(n.p,{children:"...and pass an array of your entities in the body..."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[    \n    {\n        "id": "123",\n        "brand": "Nike",\n        "model": "Metcon 4",\n        "gender": "M",\n        "size": 11,\n        "tags": [ "CrossTraining", "Sport" ]\n    },\n    {\n        "id": "456",\n        "brand": "New Balance",\n        "model": "20v7 Minimus Cross Trainer",\n        "gender": "F",\n        "size": 10,\n        "tags": [ "CrossTraining", "Sport", "Zero Drop" ]\n    }\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"NOTE:  You can indeed send just a single entity to this endpoint, but remember that the endpoint is expecting you to send it a list, so you'll need to pass it as an array of one."}),"\n",(0,s.jsx)(n.h2,{id:"patch",children:"Patch"}),"\n",(0,s.jsxs)(n.p,{children:["Patch, like Update, modifies an existing entity.  However, UNLIKE Update, it changes ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"only the properties you specify"})}),", it does NOT perform a wholesale entity replacement."]}),"\n",(0,s.jsxs)(n.p,{children:["The API supports two different PATCH operations, determined by their corresponding ",(0,s.jsx)(n.code,{children:"Content-Type"})," header:"]}),"\n",(0,s.jsx)(n.h3,{id:"merge-patch-default",children:"Merge Patch (Default)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The Merge patch is the simplest syntax, and as such, it's the default.  It operates just like Update, only you dont have to pass the entire entity (though you could if you like).  The request below will patch ",(0,s.jsx)(n.code,{children:"shoe id:123"})," with new values for ",(0,s.jsx)(n.code,{children:"size"})," and ",(0,s.jsx)(n.code,{children:"gender"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PATCH http://localhost:1775/shoes/123\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "gender": "M",\n    "size": 11\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As defined in ",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7386",children:"RFC7386"}),', a Merge Patch is essentially a partial representation of the entity. The submitted JSON is "merged" with the current entity to create a new one, then the new one is saved. For more details on how to use Merge Patch, ',(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7386",children:"see the RFC"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"json-patch",children:"JSON Patch"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json-patch+json\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you need to do something slightly more complicated than a merge patch will support, or if you are simply needing to follow a standard, you can use a JSON Patch."}),"\n",(0,s.jsxs)(n.p,{children:["As defined in ",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6902",children:"RFC6902"}),", a JSON Patch is a sequence of operations that are executed on the resource, e.g.\xa0"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"op": "add", "path": "/a/b/c", "value": [ "foo", "bar" ]}\n'})}),"\n",(0,s.jsxs)(n.p,{children:['So if we wanted to add the tag "Youth" to our shoe with ',(0,s.jsx)(n.code,{children:"id:123"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PATCH http://localhost:1775/shoes/123\n\nContent-Type: application/json-patch+json\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "op": "add", "path": "tags", "value": "Youth" }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For more details on how to use JSON Patch, ",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc6902",children:"see the RFC"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);