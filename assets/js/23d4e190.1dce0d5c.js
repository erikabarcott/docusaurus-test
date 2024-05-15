"use strict";(self.webpackChunkcodiac=self.webpackChunkcodiac||[]).push([[7895],{7376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(4848),s=t(8453);const r={sidebar_position:3,sidebar_label:"Quicker - Database CRUDs",slug:"quickstart-database-cruds",title:"Quicker Quickstart - Database CRUDs",description:"A quickstart guide to database CRUDs.",tags:["Intro","Getting started"]},o="Quicker Quickstart: Database cruds in < 30 minutes",a={id:"getting-started/quickstart-database-cruds",title:"Quicker Quickstart - Database CRUDs",description:"A quickstart guide to database CRUDs.",source:"@site/docs/getting-started/quickstart-database-cruds.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart-database-cruds",permalink:"/docs/getting-started/quickstart-database-cruds",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/quickstart-database-cruds.md",tags:[{label:"Intro",permalink:"/docs/tags/intro"},{label:"Getting started",permalink:"/docs/tags/getting-started"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Quicker - Database CRUDs",slug:"quickstart-database-cruds",title:"Quicker Quickstart - Database CRUDs",description:"A quickstart guide to database CRUDs.",tags:["Intro","Getting started"]},sidebar:"tutorialSidebar",previous:{title:"Quick - Extend CRUD",permalink:"/docs/getting-started/quickstart-extend-crud"},next:{title:"Quickest - Custom Endpoint",permalink:"/docs/getting-started/quickstart-custom-endpoint"}},l={},d=[{value:"Before you begin:",id:"before-you-begin",level:2},{value:"Install MongoDB",id:"install-mongodb",level:3},{value:"EITHER:  Install MongoDB locally on your machine",id:"either--install-mongodb-locally-on-your-machine",level:4},{value:"OR: Run the mongodb Docker image",id:"or-run-the-mongodb-docker-image",level:4},{value:"Step 1: Wire Up Your Database",id:"step-1-wire-up-your-database",level:2},{value:"Step 2: Create Your Domain Entities",id:"step-2-create-your-domain-entities",level:2},{value:"Step 3: Specify a Persistence Layer for your Domain Entities",id:"step-3-specify-a-persistence-layer-for-your-domain-entities",level:2},{value:"Step 3: Expose a CRUD Endpoint Set",id:"step-3-expose-a-crud-endpoint-set",level:2},{value:"Step 4: Look at Your Endpoints",id:"step-4-look-at-your-endpoints",level:2},{value:"Step 5: Consuming Your Endpoints",id:"step-5-consuming-your-endpoints",level:2},{value:"<strong>CREATE</strong>: Creating New Entities",id:"create-creating-new-entities",level:3},{value:"The Response Envelope:",id:"the-response-envelope",level:4},{value:"<strong>READ</strong>: Searching on a Text Property",id:"read-searching-on-a-text-property",level:3},{value:"Projections",id:"projections",level:3},{value:"<strong>UPDATE</strong>: Modifying Entities",id:"update-modifying-entities",level:3},{value:"Patch",id:"patch",level:4},{value:"PUT (ie: replace)",id:"put-ie-replace",level:4},{value:"<strong>DELETE</strong>: Deleting Entities",id:"delete-deleting-entities",level:3},{value:"Validation",id:"validation",level:3},{value:"Built-in validation",id:"built-in-validation",level:4},{value:"Next Steps",id:"next-steps",level:3}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quicker-quickstart-database-cruds-in--30-minutes",children:"Quicker Quickstart: Database cruds in < 30 minutes"}),"\n",(0,i.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin:"}),"\n",(0,i.jsxs)(n.p,{children:["If you havent already, create an api project as outlined in the ",(0,i.jsx)(n.a,{href:"../README.md#gettingStarted",children:"Getting Started tutorial"})]}),"\n",(0,i.jsxs)(n.p,{children:["Open up your favorite API client (",(0,i.jsx)(n.a,{href:"https://www.getpostman.com/",children:"Postman"})," is a good one)."]}),"\n",(0,i.jsx)(n.h3,{id:"install-mongodb",children:"Install MongoDB"}),"\n",(0,i.jsxs)(n.p,{children:["Your API will need access to a database, and this tutorial uses ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/",children:"MongoDB"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"either--install-mongodb-locally-on-your-machine",children:"EITHER:  Install MongoDB locally on your machine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Download MongoDB Community Server from the ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/download-center/community",children:"mongoDB download page"})]}),"\n",(0,i.jsxs)(n.li,{children:["Follow their ",(0,i.jsx)(n.a,{href:"https://docs.mongodb.com/manual/administration/install-community/",children:"installation instructions"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"or-run-the-mongodb-docker-image",children:"OR: Run the mongodb Docker image"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Be sure you have ",(0,i.jsx)(n.a,{href:"https://www.docker.com/get-started",children:"Docker"})," installed on your machine."]}),"\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://hub.docker.com/_/mongo",children:"instructions on docker hub"})," for using the mongo image."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-wire-up-your-database",children:"Step 1: Wire Up Your Database"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Bootstrap"}),' method of your API Definition, invoke the mongo initializer with "footwear" as the name for your database:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Typescript",children:'this.useMongoDb("footwear");\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"footwear"})," db does not yet exist, it will be created on first use.\nYou must, however, have a MongoDb instance running on your local machine listening on the default MongoDb port (aka: a connection string of ",(0,i.jsx)(n.code,{children:"mongodb://localhost:27017/footwear"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"Or you can declare a MongoDb by calling out your own connection string:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Typescript",children:'this.useMongoDb("footwear", "mongodb://localhost:27017/footwear");\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-create-your-domain-entities",children:"Step 2: Create Your Domain Entities"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create an entity (make it implement the ",(0,i.jsx)(n.code,{children:"IDomainEntity"})," interface)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Typescript",children:"export class shoe implements IDomainEntity\n{\n    constructor(public size: number, public brand: string, public model: string, public id?: string) {\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Notice that the ",(0,i.jsx)(n.code,{children:"id"})," is an optional parameter; it will need to be when you are creating a new entity and you want ids to be assigned automatically."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a search criteria object"}),"\n",(0,i.jsx)(n.p,{children:"This class defines the search parameters that can be used to search on your entities.  The repo consumer will craft queries using this object."}),"\n",(0,i.jsx)(n.p,{children:"A simple way to approach this is to mirror the properties of your entity with filter properties on the criteria object:"}),"\n",(0,i.jsxs)(n.p,{children:["In this case: ",(0,i.jsx)(n.code,{children:"StringFilter"})," for any ",(0,i.jsx)(n.code,{children:"string"})," property and ",(0,i.jsx)(n.code,{children:"NumericFilter"})," for any properties of type ",(0,i.jsx)(n.code,{children:"number"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Typescript",children:"export class shoeCriteria\n{\n    constructor(public size?: NumericFilter, public brand?: StringFilter, \n        public model?: StringFilter, public id?: StringFilter) {\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the code above you can see that for each property type on the entity, it is convenient to use a corresponding Filter type on the criteria object.  The Filter classes provide options for how to specify parameters and are already fully supported by the repo system (which means you wont need to manually write in support for them)."}),"\n",(0,i.jsxs)(n.p,{children:["Be sure also to ",(0,i.jsx)(n.strong,{children:"make all criteria properties optional"}),", because we want to allow our repo consumers to specify or omit parameters at their own discretion."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-3-specify-a-persistence-layer-for-your-domain-entities",children:"Step 3: Specify a Persistence Layer for your Domain Entities"}),"\n",(0,i.jsxs)(n.p,{children:["On the back of your MongoDb declaration, chain a call to the fluent method ",(0,i.jsx)(n.code,{children:"forCrudsOn()"})," to set up the data layer for each entity."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Typescript",children:'this.useMongoDb("footwear", "mongodb://localhost:27017/footwear")\n    .forCrudsOn<footwearDomain.shoe>(footwearDomain.shoe)\n    .forCrudsOn<footwearDomain.Vendor>(footwearDomain.Vendor);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-expose-a-crud-endpoint-set",children:"Step 3: Expose a CRUD Endpoint Set"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Declare a crud endpoint set"}),"\n",(0,i.jsx)(n.p,{children:"In the constructor of your own apiDef, add the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Typescript",children:'this.addCrudsFor<footwearDomain.shoe,footwearDomain.shoeCriteria>(footwearDomain.shoe, footwearDomain.shoeCriteria, "/shoes", "/footgear");\n\nthis.addCrudsFor<footwearDomain.Vendor,footwearDomain.VendorCriteria>(footwearDomain.Vendor, footwearDomain.VendorCriteria, "/vendors");\n'})}),"\n",(0,i.jsx)(n.p,{children:"For each entity here you are specifying its criteria object and one or more routes for the endpoint set."}),"\n",(0,i.jsx)(n.p,{children:"This will produce a full set of RESTful crud endpoints in your api for each of these entities, accessible, respectively, through the urls:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://localhost:1775/shoes\nhttp://localhost:1775/footgear\nhttp://localhost:1775/vendors\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-4-look-at-your-endpoints",children:"Step 4: Look at Your Endpoints"}),"\n",(0,i.jsx)(n.p,{children:"Among the luxurious prizes you get with your new API, are BOTH:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["an ",(0,i.jsx)(n.a,{href:"https://www.openapis.org/",children:"OpenAPI definition"})," document to describe your endpoints, and","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET http://localhost:1775/openApi\n"})}),"\n","This will provide the openApi specification document in json."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"...AND..."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.a,{href:"https://swagger.io/tools/swagger-ui/",children:"Swagger UI"})," page to view it in a visual, interactive format.",(0,i.jsx)(n.br,{}),"\n","Open this url in a browser:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://localhost:1775/swagger-ui\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-5-consuming-your-endpoints",children:"Step 5: Consuming Your Endpoints"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h3,{id:"create-creating-new-entities",children:[(0,i.jsx)(n.strong,{children:"CREATE"}),": Creating New Entities"]}),"\n",(0,i.jsx)(n.p,{children:"In short, you're just going to send up your entities in a POST."}),"\n",(0,i.jsx)(n.p,{children:"Set your list of new shoes as the body of the http request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "brand": "Nike",\n        "model": "Metcon 4",\n        "gender": "M",\n        "size": 11,\n        "tags": [ "CrossTraining", "Sport" ]\n    },\n    {\n        "brand": "New Balance",\n        "model": "20v7 Minimus Cross Trainer",\n        "gender": "F",\n        "size": 10,\n        "tags": [ "CrossTraining", "Sport", "Zero Drop" ]\n    }        \n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then send it off as a post to the shoes endpoint:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"POST http://localhost:1775/shoes\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You'll get your new enities back as the ",(0,i.jsx)(n.code,{children:"output"})," in the response, complete with the new unique id it was given by the system."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "success": true,\n    "output": \n        [    \n            {\n                "id": "123",\n                "brand": "Nike",\n                "model": "Metcon 4",\n                "gender": "M",\n                "size": 11,\n                "tags": [ "CrossTraining", "Sport" ]\n            },\n            {\n                "id": "456",\n                "brand": "New Balance",\n                "model": "20v7 Minimus Cross Trainer",\n                "gender": "F",\n                "size": 10,\n                "tags": [ "CrossTraining", "Sport", "Zero Drop" ]\n            }\n        ]\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"the-response-envelope",children:"The Response Envelope:"}),"\n",(0,i.jsx)(n.p,{children:'Take note that the response above includes not just your entity; it also contains some meta information about the transaction.  We call this object the "response envelope", and the built-in crud endpoints all use it. The response envelopes will typically provide you status on whether your request succeeded or failed, the associated error if it exists, and any validation failures if the request was rejected.'}),"\n",(0,i.jsxs)(n.p,{children:["If your response was for a list of output entities, it will also include the ",(0,i.jsx)(n.code,{children:"count"})," of entities returned, as well as any output paging counts (aka: ",(0,i.jsx)(n.code,{children:"take"}),"/",(0,i.jsx)(n.code,{children:"skip"}),"/",(0,i.jsx)(n.code,{children:"countOverall"}),") if paging was specified in the request.  See ",(0,i.jsx)(n.a,{href:"response-envelopes.md",children:"Response Envelopes"})," for more info."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h3,{id:"read-searching-on-a-text-property",children:[(0,i.jsx)(n.strong,{children:"READ"}),": Searching on a Text Property"]}),"\n",(0,i.jsx)(n.p,{children:"Ok, pretend you're a web app, and you're searching for shoes.\nLet's start simple and fire off a request to the shoes endpoint to give us all the Nike brand shoes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET http://localhost:1775/shoes?brand=Nike\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["NOTE: Default search behavior is NOT case-sensitive, so ",(0,i.jsx)(n.code,{children:"?brand=Nike"})," will work just as well as ",(0,i.jsx)(n.code,{children:"?brand=NIKE"})," or ",(0,i.jsx)(n.code,{children:"brand=nike"})]})}),"\n",(0,i.jsxs)(n.p,{children:["The properties of your criteria object ",(0,i.jsx)(n.em,{children:"are"}),' the supported querystring parameters, and in this case, we\'re doing a simple search for shoes with brand name of "Nike".']}),"\n",(0,i.jsxs)(n.p,{children:["Congratulations, you just implicitly invoked the ",(0,i.jsx)(n.code,{children:"Equals"})," operator.  But wait, there's more..."]}),"\n",(0,i.jsxs)(n.p,{children:["Remember in our criteria object, we are using a ",(0,i.jsx)(n.a,{href:"StringFilter.md",children:(0,i.jsx)(n.code,{children:"StringFilter"})})," type for brand, so that also means we get to use some more interesting search operators for free, such as ",(0,i.jsx)(n.a,{href:"StringFilter.md#StartsWith",children:"StartsWith"}),", ",(0,i.jsx)(n.a,{href:"StringFilter.md#EndsWith",children:"EndsWith"}),", ",(0,i.jsx)(n.a,{href:"StringFilter.md#Contains",children:"Contains"}),", ",(0,i.jsx)(n.a,{href:"StringFilter.md#In",children:"In"}),", and ",(0,i.jsx)(n.a,{href:"StringFilter.md#Pattern",children:"Pattern"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Let's use the StartsWith operator (",(0,i.jsx)(n.code,{children:"$sw"}),") to search for shoes with brands starting with the letter ",(0,i.jsx)(n.code,{children:'"N"'}),"  (eg: Nike or New Balance)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Url",children:"/shoes?brand=$sw_N\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more, see the ",(0,i.jsx)(n.a,{href:"StringFilter.md",children:"StringFilter operators"})," page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h3,{id:"projections",children:"Projections"}),"\n",(0,i.jsx)(n.p,{children:"Ok, you got your shoes back, but currently your results contain each shoe record in its entirety:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id": "123",\n        "brand": "Nike",\n        "model": "Metcon 4",\n        "gender": "M",\n        "size": 11,\n        "tags": [ "CrossTraining", "Sport" ]\n    },\n    {\n        "id": "456",\n        "brand": "New Balance",\n        "model": "20v7 Minimus Cross Trainer",\n        "gender": "F",\n        "size": 10,\n        "tags": [ "CrossTraining", "Sport", "Zero Drop" ]\n    }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Suppose all you wanted was the ",(0,i.jsx)(n.code,{children:"model"})," and ",(0,i.jsx)(n.code,{children:"brand"}),"?"]}),"\n",(0,i.jsxs)(n.p,{children:["Enter ",(0,i.jsx)(n.a,{href:"projections.md",children:"Projections"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Projections allow the API endpoint consumer to declare ",(0,i.jsx)(n.em,{children:"in the request"})," what parts of the entities they want back."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Support for projections is built-in, thus again preventing the API author from  writing custom code or adding redundant endpoints simply to accommodate varying representations of a given entity."})}),"\n",(0,i.jsx)(n.p,{children:"Projections get applied as headers in a request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'output-includes: "model,brand"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When this http header is set in the request, a projection will be applied to each output entity that will pair it down to just the properties called out in the ",(0,i.jsx)(n.code,{children:"output-includes"})," header."]}),"\n",(0,i.jsxs)(n.p,{children:["If it was easier to simply exclude properties than to name each one to be included, you could use the ",(0,i.jsx)(n.code,{children:"output-excludes"})," header:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'output-excludes: "id,gender,size,tags"\n'})}),"\n",(0,i.jsx)(n.p,{children:"In both cases your entities will be returned like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "brand": "Nike",\n        "model": "Metcon 4",\n    },\n    {\n        "brand": "New Balance",\n        "model": "20v7 Minimus Cross Trainer",\n    }\n]\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h3,{id:"update-modifying-entities",children:[(0,i.jsx)(n.strong,{children:"UPDATE"}),": Modifying Entities"]}),"\n",(0,i.jsxs)(n.p,{children:["Let's change an existing entity. How about changing the gender and size of one of our shoes?  The Update part of CRUDs comes in two flavors:  ",(0,i.jsx)(n.code,{children:"PATCH"})," and ",(0,i.jsx)(n.code,{children:"PUT"})]}),"\n",(0,i.jsx)(n.h4,{id:"patch",children:"Patch"}),"\n",(0,i.jsxs)(n.p,{children:["We're going to use a ",(0,i.jsx)(n.code,{children:"PATCH"})," http method with the route for that entity (in this case, that's the ",(0,i.jsx)(n.code,{children:"/shoes"})," url suffixed with the ",(0,i.jsx)(n.code,{children:"id"})," of the entity. ",(0,i.jsx)(n.code,{children:"123"})," in this case)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PATCH http://localhost:1775/shoes/123\n"})}),"\n",(0,i.jsx)(n.p,{children:"...and then pass the properties that we are modifying as the body of the request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "gender": "F",\n    "size": 6,\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"put-ie-replace",children:"PUT (ie: replace)"}),"\n",(0,i.jsxs)(n.p,{children:["That Patch was simple enough.  But doing so will leave the rest of the entity intact.  Suppose you want not just a few properties changed, but the ",(0,i.jsx)(n.em,{children:"entire entity"})," replaced.  Now we're talking ",(0,i.jsx)(n.code,{children:"PUT"})]}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"PUT"})," http method to ",(0,i.jsx)(n.strong,{children:"replace"})," an existing entity:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PUT http://localhost:1775/shoes/123\n"})}),"\n",(0,i.jsxs)(n.p,{children:["...and pass your new incarnation of the entity (eg: a ",(0,i.jsx)(n.code,{children:"shoe"}),") as the body of the request"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "id": "123",\n    "brand": "Nike",\n    "model": "Metcon 4",\n    "gender": "F"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Notice that after you make this update, you wont see the ",(0,i.jsx)(n.code,{children:"tags"})," and ",(0,i.jsx)(n.code,{children:"size"})," properties leftover from the previously saved state of your entity; we've replaced the entity wholesale with what you just submitted in the ",(0,i.jsx)(n.code,{children:"PUT"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["These are simple single-entity examples, but you can also perform Patches and Puts on multiple entities at a time; you can apply a Patch by specifying criteria for which entities get the patch; and Patch will also allow you to perform more detailed operations on an entity such as modifying the contents of a list property (such as adding a tag to ",(0,i.jsx)(n.code,{children:"shoe.tags"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"./patch-and-update.md",children:"Patch and Update"})," for more on modifying entities."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.h3,{id:"delete-deleting-entities",children:[(0,i.jsx)(n.strong,{children:"DELETE"}),": Deleting Entities"]}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to specify a delete:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"one at a time, using a unique identifier\nand"}),"\n",(0,i.jsx)(n.li,{children:"many at a time, using criteria"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Deleting is a lot like searching: you specify what to delete using search criteria, and the endpoint will carry out the delete and return you the deleted entities."}),"\n",(0,i.jsxs)(n.p,{children:["Let's delete our first shoe by its id.  The easiest way to do that is by appending the id onto the RESTful route and sending it off with a ",(0,i.jsx)(n.code,{children:"DELETE"})," http method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DELETE http://localhost:1775/shoes/123\n"})}),"\n",(0,i.jsx)(n.p,{children:"Your response should look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "success": true,\n    "output": \n        {\n            "id": "123",\n            "brand": "Nike",\n            "model": "Metcon 4",\n            "gender": "M",\n            "size": 11,\n            "tags": [ "CrossTraining", "Sport" ]\n        }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Notice that the output is not a json array ",(0,i.jsx)(n.code,{children:"[]"}),", it's just the single entity itself.  That's because we used the route to a ",(0,i.jsx)(n.em,{children:"single entity"})," delete endpoint."]}),"\n",(0,i.jsx)(n.p,{children:"Now let's delete using a criteria:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'DELETE http://localhost:1775/shoes/\n\n{\n    "brand": "New Balance"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'This will delete ALL the "New Balance" entities in the system.  In our case, it\'s only the one (tho it is listed as an array of one because we hit the delete many endpoint):'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "success": true,\n    "output": \n        [\n            {\n                "id": "456",\n                "brand": "New Balance",\n                "model": "20v7 Minimus Cross Trainer",\n                "gender": "F",\n                "size": 10,\n                "tags": [ "CrossTraining", "Sport", "Zero Drop" ]\n            }\n        ]\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,i.jsx)(n.p,{children:"All those saves and updates were designed to run successfully because the intention was to focus on how to invoke the CRUD actions, so we fed the API with good data.  Now that you know a bit about how to perform basic CRUDs, let's get real and take a look at protecting our data integrity with validation."}),"\n",(0,i.jsx)(n.h4,{id:"built-in-validation",children:"Built-in validation"}),"\n",(0,i.jsx)(n.p,{children:"There are a few forms of simple data validation that you get for free:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Property name enforcement"}),"\n",(0,i.jsxs)(n.li,{children:["Native data type enforcement: (for properties of type ",(0,i.jsx)(n.code,{children:"number"})," and ",(0,i.jsx)(n.code,{children:"Date"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Any write request ",(0,i.jsx)(n.em,{children:"(Create Update Delete aka: POST PATCH PUT DELETE)"})," will be rejected if the request violates one of these two types of validation."]}),"\n",(0,i.jsx)(n.p,{children:"Thus, if you send a malformed entity up for a patch, you're going to get a response showing that your request was rejected and some details as to why."}),"\n",(0,i.jsx)(n.p,{children:"So let's send up the following patch request; it contains both types of violations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a misspelled property name for ",(0,i.jsx)(n.code,{children:"shoe.gender"})]}),"\n",(0,i.jsxs)(n.li,{children:["a string for ",(0,i.jsx)(n.code,{children:"shoe.size"})," which is a numeric property"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PATCH http://localhost:1775/shoes/123\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "gemdr": "F",\n    "size": "motorcycle",\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Your response will be quite descriptive:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http status: 422\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "success": false,\n    "message": "Multiple validation failures.  See validation property for details.",\n    "error": {  \n        "stack": "Multiple validation failures.  See details"\n    },\n    "validation": {\n        "failure": "Multiple validation failures.  See details",\n        "details": [\n            {\n                "candidate": "gemdr",\n                "failure": "No property exists with that name"\n            },\n            {\n                "candidate": "size",\n                "failure": "Value is not a number"\n            }\n        ]\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"You'll see several ways to know how your request failed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.a,{href:"https://httpstatuses.com/422",children:"http status code 422"})," will denote an invalid request"]}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.code,{children:"success"})," flag will be ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.code,{children:"error"})," field will be populated with a validation error"]}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.code,{children:"validation"})," field will be populated with the breakdown of what failed."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You'll see there is a summary message and a breakdown of each validation failure for you to use as you see fit.  Notice the ",(0,i.jsx)(n.code,{children:"candidate"})," field in each validation detail, which includes the system name of the relevant property.  This value will describe the failure as well as help you link the error back a relevant data entry control."]}),"\n",(0,i.jsx)(n.p,{children:'MarkStartHere("We need to explicitly add a built-in validator")\nMarkStartHere("We need a custom validator")'}),"\n",(0,i.jsxs)(n.p,{children:["This is just to get you started - the validation features provide much more intensive capabilities.  You can learn about adding more validation rules in ",(0,i.jsx)(n.a,{href:"custom-validation.md",children:"custom validation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"Ok, you've built a pretty functional RESTful crud API, but up to this point we've been using a pretty simple domain model.  Made sense so that you could get a bird's eye view of the toolset without getting your hands too dirty in the details."}),"\n",(0,i.jsx)(n.p,{children:"But quality comes from attention to detail, so let's start getting a look at where we're gonna make our money:  customization."}),"\n",(0,i.jsxs)(n.p,{children:["Our next tutorial, ",(0,i.jsx)(n.a,{href:"quickstart-3.md",children:"Third-Most-Quickest Quickstart Tutorial: (Extending Crud operations and custom data design in < 45 minutes)"}),", will introduce you to some extensible and customizable features that empower you as you add your own flavor to your APIs."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom Validators"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom Endpoint Handlers"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Complex domain entity relationships"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom entity repos"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom request and response pipeline middleware"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Setting OpenAPI/Swagger content"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Security and Access"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);