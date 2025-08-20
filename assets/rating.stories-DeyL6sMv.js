import{j as e}from"./iframe-CL4vWSkc.js";import{S as o}from"./skeleton-Bsms-jkE.js";import{a as d}from"./index-BZDOdLGD.js";import{s as r}from"./utils-Cg5bKbzt.js";import"./preload-helper-D9Z9MdNV.js";const n=({rank:s,context:i})=>{if(!(s==null||i==null))return e.jsxs("p",{className:"bg-foreground-sp relative flex items-center justify-center rounded-[3px] p-2",children:[e.jsx(d,{className:"absolute top-[calc(50%-1px)] left-3 size-3 -translate-y-1/2 text-yellow-500"}),e.jsxs("span",{className:"text-text text-xs leading-[0.8625rem] font-medium capitalize",children:["#",s," ",i]})]})},l=()=>e.jsxs("div",{"aria-hidden":!0,className:"bg-foreground-sp relative flex items-center justify-center rounded-[3px] p-2",children:[e.jsx(d,{className:"absolute top-[calc(50%-1px)] left-3 size-3 -translate-y-1/2 text-yellow-500"}),e.jsx(o,{className:"text-xs leading-[0.8625rem] font-medium capitalize",children:"#1 some random rank info"})]});l.__docgenInfo={description:"",methods:[],displayName:"RatingSkeleton"};n.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{rank:{required:!1,tsType:{name:"number"},description:""},context:{required:!1,tsType:{name:"string"},description:""}}};const h={tags:["autodocs"],component:n},t={args:{},render:s=>e.jsx("div",{style:{width:r.xl.width},children:e.jsx(n,{...s})})},a={args:{rank:1,context:"highest rated all time"},render:s=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{style:{width:r.xl.width},children:e.jsx(n,{...s})}),e.jsx("div",{style:{width:r.xl.width},children:e.jsx(l,{})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: sizes.xl.width
  }}>
      <Rating {...args} />
    </div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    rank: 1,
    context: "highest rated all time"
  },
  render: args => <div className="flex gap-4">
      <div style={{
      width: sizes.xl.width
    }}>
        <Rating {...args} />
      </div>
      <div style={{
      width: sizes.xl.width
    }}>
        <RatingSkeleton />
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const u=["Default","HighestRatedAndSkeleton"];export{t as Default,a as HighestRatedAndSkeleton,u as __namedExportsOrder,h as default};
