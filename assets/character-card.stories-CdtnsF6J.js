import{j as e}from"./iframe-CL4vWSkc.js";import{C as g}from"./graphql-Hav8TeqN.js";import{S as i}from"./skeleton-Bsms-jkE.js";import{C as x,a as p}from"./cover-BIc1KL1P.js";import"./preload-helper-D9Z9MdNV.js";import"./image-Ccw6NF6Q.js";import"./utils-Cg5bKbzt.js";const l=({role:n,character:s,voiceActor:a})=>{if(!s&&!a)return;const r=s?.name?.last&&s?.name.first?`${s.name.last} ${s.name.first}`:s?.name?.first?s.name.first:s?.name?.last?s.name.last:void 0,o=a?.name?.last&&a?.name.first?`${a.name.last} ${a.name.first}`:a?.name?.first?a.name.first:a?.name?.last?a.name.last:void 0;return e.jsxs("article",{"aria-labelledby":r+"-card-title",className:"bg-foreground-sp flex justify-between overflow-hidden rounded-[3px]",children:[e.jsxs("div",{className:"flex",children:[e.jsx(x,{size:"sm",src:s?.image?.large,alt:r&&r+"'s portrait"}),e.jsxs("div",{className:"flex flex-col justify-between p-2.5",children:[e.jsx("h3",{id:r+"-card-title",className:"text-text text-xs leading-[0.975rem]",children:r}),e.jsx("span",{"aria-label":"Role",className:"text-text-lighter text-[0.6875rem] leading-[0.790625rem] capitalize",children:n?.toLowerCase()})]})]}),a&&e.jsxs("div",{className:"flex text-right",children:[e.jsxs("div",{className:"flex flex-col justify-between p-2.5",children:[e.jsx("span",{"aria-label":"Voice Actor",className:"text-text text-xs leading-[0.975rem]",children:o||"No Name"}),e.jsx("span",{"aria-label":"Language",className:"text-text-lighter text-[0.6875rem] leading-[0.790625rem] capitalize",children:"Japanese"})]}),e.jsx(x,{size:"sm",src:a?.image?.large,alt:o&&o+"'s portrait"})]})]})},m=()=>e.jsxs("div",{"aria-hidden":!0,className:"bg-foreground-sp flex justify-between overflow-hidden rounded-[3px]",children:[e.jsxs("div",{className:"flex",children:[e.jsx(p,{size:"sm"}),e.jsxs("div",{className:"flex flex-col justify-between p-2.5",children:[e.jsx(i,{className:"text-xs leading-[0.975rem]",children:"Frieren"}),e.jsx(i,{className:"text-[0.6875rem] leading-[0.790625rem] capitalize",children:"Main"})]})]}),e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"flex flex-col items-end justify-between p-2.5",children:[e.jsx(i,{className:"text-xs leading-[0.975rem]",children:"Tenezaki Atsumi"}),e.jsx(i,{className:"text-[0.6875rem] leading-[0.790625rem] capitalize",children:"Japanese"})]}),e.jsx(p,{size:"sm"})]})]});m.__docgenInfo={description:"",methods:[],displayName:"CharacterCardSkeleton"};l.__docgenInfo={description:"",methods:[],displayName:"CharacterCard",props:{role:{required:!1,tsType:{name:"union",raw:"CharacterRole | null",elements:[{name:"CharacterRole"},{name:"null"}]},description:""},character:{required:!1,tsType:{name:'NonNullable["node"]',raw:`NonNullable<
  NonNullable<
    NonNullable<NonNullable<AnimeQuery["Media"]>["characters"]>["edges"]
  >[number]
>["node"]`},description:""},voiceActor:{required:!1,tsType:{name:"NonNullable[number]",raw:`NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<NonNullable<AnimeQuery["Media"]>["characters"]>["edges"]
    >[number]
  >["voiceActors"]
>[number]`},description:""}}};const C={tags:["autodocs"],component:l},t={args:{},render:n=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-[337.33px]",children:e.jsx(l,{...n})}),e.jsx("div",{className:"w-[337.33px]",children:e.jsx(m,{})})]})},d={args:{role:g.Main,character:{name:{first:"Frieren",last:null},image:{large:"https://s4.anilist.co/file/anilistcdn/character/large/b176754-PCnpqIOkjhFk.png"}},voiceActor:{name:{last:"Tanezaki",first:"Atsumi"},image:{large:"https://s4.anilist.co/file/anilistcdn/staff/large/n112215-kfABGD8W2YSJ.jpg"}}},render:n=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-[337.33px]",children:e.jsx(l,{...n})}),e.jsx("div",{className:"w-[337.33px]",children:e.jsx(m,{})})]})},c={args:{role:g.Main,character:{name:{first:"Fern",last:null},image:{large:"https://s4.anilist.co/file/anilistcdn/character/large/b183965-uGFohBjlFoTp.png"}},voiceActor:{name:{last:"Ichinose",first:"Kana"},image:{large:"https://s4.anilist.co/file/anilistcdn/staff/large/n124390-03LHel2XSFel.png"}}},render:n=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-[337.33px]",children:e.jsx(l,{...n})}),e.jsx("div",{className:"w-[337.33px]",children:e.jsx(m,{})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex gap-2">
      <div className="w-[337.33px]">
        <CharacterCard {...args} />
      </div>
      <div className="w-[337.33px]">
        <CharacterCardSkeleton />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    role: CharacterRole.Main,
    character: {
      name: {
        first: "Frieren",
        last: null
      },
      image: {
        large: "https://s4.anilist.co/file/anilistcdn/character/large/b176754-PCnpqIOkjhFk.png"
      }
    },
    voiceActor: {
      name: {
        last: "Tanezaki",
        first: "Atsumi"
      },
      image: {
        large: "https://s4.anilist.co/file/anilistcdn/staff/large/n112215-kfABGD8W2YSJ.jpg"
      }
    }
  },
  render: args => <div className="flex gap-2">
      <div className="w-[337.33px]">
        <CharacterCard {...args} />
      </div>
      <div className="w-[337.33px]">
        <CharacterCardSkeleton />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    role: CharacterRole.Main,
    character: {
      name: {
        first: "Fern",
        last: null
      },
      image: {
        large: "https://s4.anilist.co/file/anilistcdn/character/large/b183965-uGFohBjlFoTp.png"
      }
    },
    voiceActor: {
      name: {
        last: "Ichinose",
        first: "Kana"
      },
      image: {
        large: "https://s4.anilist.co/file/anilistcdn/staff/large/n124390-03LHel2XSFel.png"
      }
    }
  },
  render: args => <div className="flex gap-2">
      <div className="w-[337.33px]">
        <CharacterCard {...args} />
      </div>
      <div className="w-[337.33px]">
        <CharacterCardSkeleton />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const w=["Default","Frieren","Fern"];export{t as Default,c as Fern,d as Frieren,w as __namedExportsOrder,C as default};
