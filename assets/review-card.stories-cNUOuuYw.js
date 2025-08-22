import{j as e}from"./iframe-zl-2m5io.js";import{S as l}from"./skeleton-33udTq7U.js";import{b as d}from"./index-BBvT6_Rh.js";import{C as o,a as m}from"./cover-RBmyu3Gu.js";import"./preload-helper-D9Z9MdNV.js";import"./iconBase-yhC1S9RG.js";import"./image-C2ovh6bS.js";import"./utils-B2VraMb7.js";const s=({review:r})=>{if(r)return e.jsxs("article",{children:[e.jsxs("h3",{className:"sr-only",children:["Review by ",r.user?.name]}),e.jsxs("div",{className:"flex gap-5",children:[e.jsx(o,{size:"profile",className:"shrink-0 rounded-sm",src:r.user?.avatar?.medium,alt:"Profile picture of "+r.user?.name}),e.jsxs("p",{className:"bg-foreground-sp relative flex-1 rounded-sm py-[0.8125rem] pr-[1.5625rem] pl-[0.9375rem] text-center after:absolute after:top-3 after:left-[-0.5625rem] after:size-2.5 after:[border-width:6px_9px_6px_0] after:[border-style:solid] after:[border-color:transparent_var(--color-foreground-sp)_transparent_transparent] after:content-['']",children:[e.jsx("span",{className:"text-text text-sm leading-[1.225rem] italic",children:r.summary}),e.jsxs("span",{className:"text-text-lighter absolute right-2.5 bottom-2.5 flex items-center gap-1 text-[0.8125rem] leading-[0.934375rem]",children:[e.jsx(d,{className:"size-3"}),r.rating]})]})]})]})},n=()=>e.jsx("div",{"aria-hidden":!0,children:e.jsxs("div",{className:"flex gap-5",children:[e.jsx(m,{size:"profile",className:"shrink-0 rounded-sm"}),e.jsxs("div",{className:"bg-foreground-sp relative flex-1 rounded-sm py-[0.8125rem] pr-[1.5625rem] pl-[0.9375rem] text-center after:absolute after:top-3 after:left-[-0.5625rem] after:size-2.5 after:[border-width:6px_9px_6px_0] after:[border-style:solid] after:[border-color:transparent_var(--color-foreground-sp)_transparent_transparent] after:content-['']",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 text-sm leading-[1.225rem] italic",children:[e.jsx(l,{className:"w-full",children:"long first line"}),e.jsx(l,{children:"last review line"})]}),e.jsxs("span",{className:"text-text-lighter absolute right-2.5 bottom-2.5 flex items-center gap-1 text-[0.8125rem] leading-[0.934375rem]",children:[e.jsx(d,{className:"size-3"}),e.jsx(l,{children:"100"})]})]})]})});n.__docgenInfo={description:"",methods:[],displayName:"ReviewCardSkeleton"};s.__docgenInfo={description:"",methods:[],displayName:"ReviewCard",props:{review:{required:!1,tsType:{name:"NonNullable[number]",raw:`NonNullable<
  NonNullable<NonNullable<AnimeQuery["Media"]>["reviews"]>["nodes"]
>[number]`},description:""}}};const N={tags:["autodocs"],component:s},a={args:{},render:r=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-[381px]",children:e.jsx(s,{...r})}),e.jsx("div",{className:"w-[381px]",children:e.jsx(n,{})})]})},t={args:{review:{id:23847,summary:"Fascinating, fulfilling, and full of feelings—a trek where every step matters.",rating:277,user:{name:"befalt",avatar:{medium:"https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b277712-4a6bAFWMQU5g.png"}}}},render:r=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-[381px]",children:e.jsx(s,{...r})}),e.jsx("div",{className:"w-[381px]",children:e.jsx(n,{})})]})},i={args:{review:{id:23852,summary:"Frieren's wasted potential",rating:59,user:{name:"Ionliosite2",avatar:{medium:"https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b6294004-rHFvI4sswmSp.jpg"}}}},render:r=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-[381px]",children:e.jsx(s,{...r})}),e.jsx("div",{className:"w-[381px]",children:e.jsx(n,{})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex gap-2">
      <div className="w-[381px]">
        <ReviewCard {...args} />
      </div>
      <div className="w-[381px]">
        <ReviewCardSkeleton />
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    review: {
      id: 23847,
      summary: "Fascinating, fulfilling, and full of feelings—a trek where every step matters.",
      rating: 277,
      user: {
        name: "befalt",
        avatar: {
          medium: "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b277712-4a6bAFWMQU5g.png"
        }
      }
    }
  },
  render: args => <div className="flex gap-2">
      <div className="w-[381px]">
        <ReviewCard {...args} />
      </div>
      <div className="w-[381px]">
        <ReviewCardSkeleton />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    review: {
      id: 23852,
      summary: "Frieren's wasted potential",
      rating: 59,
      user: {
        name: "Ionliosite2",
        avatar: {
          medium: "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b6294004-rHFvI4sswmSp.jpg"
        }
      }
    }
  },
  render: args => <div className="flex gap-2">
      <div className="w-[381px]">
        <ReviewCard {...args} />
      </div>
      <div className="w-[381px]">
        <ReviewCardSkeleton />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const w=["DefaultWithSkeleton","FrierenReviewWithSkeleton","FrierenReview2WithSkeleton"];export{a as DefaultWithSkeleton,i as FrierenReview2WithSkeleton,t as FrierenReviewWithSkeleton,w as __namedExportsOrder,N as default};
