import{j as e}from"./iframe-DOy6vm9F.js";import{S as o}from"./skeleton-CPhVGNux.js";import{a as d}from"./index-PY8cXWUg.js";import{s as n}from"./utils-DgeUiRbi.js";import"./preload-helper-D9Z9MdNV.js";import"./iconBase-kV2UoGIi.js";const r=({rank:t,context:i})=>{if(!(t==null||i==null))return e.jsxs("p",{className:"bg-foreground-sp relative flex items-center justify-center rounded-[3px] p-2",children:[e.jsx(d,{className:"absolute top-[calc(50%-1px)] left-3 size-3 -translate-y-1/2 text-yellow-500"}),e.jsxs("span",{className:"text-text text-xs leading-[0.8625rem] font-medium capitalize",children:["#",t," ",i]})]})},l=()=>e.jsxs("div",{"aria-hidden":!0,className:"bg-foreground-sp relative flex items-center justify-center rounded-[3px] p-2",children:[e.jsx(d,{className:"absolute top-[calc(50%-1px)] left-3 size-3 -translate-y-1/2 text-yellow-500"}),e.jsx(o,{className:"text-xs leading-[0.8625rem] font-medium capitalize",children:"#1 some random rank info"})]});l.__docgenInfo={description:"",methods:[],displayName:"RatingSkeleton"};r.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{rank:{required:!1,tsType:{name:"number"},description:""},context:{required:!1,tsType:{name:"string"},description:""}}};const u={tags:["autodocs"],component:r},s={args:{},render:t=>e.jsx("div",{style:{width:n.xl.width},children:e.jsx(r,{...t})})},a={args:{rank:1,context:"highest rated all time"},render:t=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{style:{width:n.xl.width},children:e.jsx(r,{...t})}),e.jsx("div",{style:{width:n.xl.width},children:e.jsx(l,{})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div style={{
    width: sizes.xl.width
  }}>
      <Rating {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const f=["Default","HighestRatedAndSkeleton"];export{s as Default,a as HighestRatedAndSkeleton,f as __namedExportsOrder,u as default};
