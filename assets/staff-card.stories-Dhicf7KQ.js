import{j as e}from"./iframe-zl-2m5io.js";import{S as d}from"./skeleton-33udTq7U.js";import{C as o,a as c}from"./cover-RBmyu3Gu.js";import"./preload-helper-D9Z9MdNV.js";import"./image-C2ovh6bS.js";import"./utils-B2VraMb7.js";const n=({staff:a})=>{if(!a)return;const s=a?.node?.name?.last&&a.node?.name.first?`${a.node.name.last} ${a.node.name.first}`:a.node?.name?.first?a.node.name.first:a.node?.name?.last?a.node.name.last:void 0;return e.jsx("article",{"aria-labelledby":s+"-card-title",className:"bg-foreground-sp flex justify-between overflow-hidden rounded-[3px]",children:e.jsxs("div",{className:"flex",children:[e.jsx(o,{size:"xs",src:a?.node?.image?.large,alt:s&&s+"'s cover"}),e.jsxs("div",{className:"flex flex-col justify-between p-2.5",children:[e.jsx("h3",{id:s+"-card-title",className:"text-text text-xs leading-[0.975rem]",children:s}),e.jsx("span",{"aria-label":"Role",className:"text-text-lighter text-[0.6875rem] leading-[0.790625rem] capitalize",children:a.role})]})]})})},t=()=>e.jsx("div",{"aria-hidden":!0,className:"bg-foreground-sp flex justify-between overflow-hidden rounded-[3px]",children:e.jsxs("div",{className:"flex",children:[e.jsx(c,{size:"xs"}),e.jsxs("div",{className:"flex flex-col justify-between p-2.5",children:[e.jsx(d,{className:"text-xs leading-[0.975rem]",children:"Nitro Plus"}),e.jsx(d,{className:"text-[0.6875rem] leading-[0.790625rem] capitalize",children:"Original Creator"})]})]})});t.__docgenInfo={description:"",methods:[],displayName:"StaffCardSkeleton"};n.__docgenInfo={description:"",methods:[],displayName:"StaffCard",props:{staff:{required:!1,tsType:{name:"NonNullable[number]",raw:`NonNullable<
  NonNullable<NonNullable<AnimeQuery["Media"]>["staff"]>["edges"]
>[number]`},description:""}}};const u={tags:["autodocs"],component:n},r={args:{},render:a=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-[337.33px]",children:e.jsx(n,{...a})}),e.jsx("div",{className:"w-[337.33px]",children:e.jsx(t,{})})]})},i={args:{staff:{id:612615,role:"Original Story",node:{name:{last:"Yamada",first:"Kanehito"},image:{large:"https://s4.anilist.co/file/anilistcdn/staff/large/n122202-lxoDudr9vaul.jpg"}}}},render:a=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-[337.33px]",children:e.jsx(n,{...a})}),e.jsx("div",{className:"w-[337.33px]",children:e.jsx(t,{})})]})},l={args:{staff:{id:612616,role:"Original Character Design",node:{name:{last:"Abe",first:"Tsukasa"},image:{large:"https://s4.anilist.co/file/anilistcdn/staff/large/n170189-HOqnSDEYpFKZ.jpg"}}}},render:a=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-[337.33px]",children:e.jsx(n,{...a})}),e.jsx("div",{className:"w-[337.33px]",children:e.jsx(t,{})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex gap-2">
      <div className="w-[337.33px]">
        <StaffCard {...args} />
      </div>
      <div className="w-[337.33px]">
        <StaffCardSkeleton />
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    staff: {
      id: 612615,
      role: "Original Story",
      node: {
        name: {
          last: "Yamada",
          first: "Kanehito"
        },
        image: {
          large: "https://s4.anilist.co/file/anilistcdn/staff/large/n122202-lxoDudr9vaul.jpg"
        }
      }
    }
  },
  render: args => <div className="flex gap-2">
      <div className="w-[337.33px]">
        <StaffCard {...args} />
      </div>
      <div className="w-[337.33px]">
        <StaffCardSkeleton />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    staff: {
      id: 612616,
      role: "Original Character Design",
      node: {
        name: {
          last: "Abe",
          first: "Tsukasa"
        },
        image: {
          large: "https://s4.anilist.co/file/anilistcdn/staff/large/n170189-HOqnSDEYpFKZ.jpg"
        }
      }
    }
  },
  render: args => <div className="flex gap-2">
      <div className="w-[337.33px]">
        <StaffCard {...args} />
      </div>
      <div className="w-[337.33px]">
        <StaffCardSkeleton />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const v=["DefaultWithSkeleton","YamadaKanehitoWithSkeleton","AbeTsukasaWithSkeleton"];export{l as AbeTsukasaWithSkeleton,r as DefaultWithSkeleton,i as YamadaKanehitoWithSkeleton,v as __namedExportsOrder,u as default};
