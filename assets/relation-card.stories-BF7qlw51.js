import{j as e}from"./iframe-BKv4NkpT.js";import{C as h,a as f}from"./cover-D9jG8gaU.js";import{a as p,M as u,f as a,d as x,e as g}from"./utils-Cg5bKbzt.js";import"./preload-helper-D9Z9MdNV.js";import"./image-B3puUfpn.js";import"./skeleton-BZrigFNZ.js";const o=({relation:t})=>{if(!t?.node)return;const r=t.node.status,n=t.node.format,m=t.relationType,c=m&&v[m],S=r&&n?u[n]+" · "+p[r]:r?p[r]:n?u[n]:void 0;return e.jsxs("article",{className:"group relative size-fit",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-[3px] group-hover:rounded-r-none",children:[e.jsx(h,{size:"md",src:t?.node?.coverImage?.medium,alt:t?.node?.title?.romaji&&"Cover of "+t?.node?.title?.romaji}),m&&e.jsx("p",{className:"absolute inset-x-0 bottom-0 bg-[rgba(31,38,49,.7)] py-2.5 text-center text-xs leading-[0.8625rem] text-white transition-opacity duration-300 group-hover:opacity-0",children:c})]}),e.jsxs("div",{className:"bg-foreground-sp pointer-events-none absolute inset-y-0 right-0 z-[1] flex w-60 translate-x-full flex-col rounded-r-[3px] p-3 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 hover:pointer-events-none hover:opacity-0",children:[e.jsx("p",{className:"text-blue mb-2 text-xs leading-[0.8625rem] font-medium",children:c}),e.jsx("h3",{className:"text-text text-sm leading-[1rem]",children:t.node.title?.romaji}),e.jsx("p",{className:"text-text-lighter mt-auto mb-0 text-xs leading-[0.8625rem]",children:S})]})]})},d=()=>e.jsx(f,{size:"md",className:"rounded-[3px]"}),v={[a.Other]:"Other",[a.Parent]:"Parent",[a.Sequel]:"Sequel",[a.Source]:"Source",[a.Prequel]:"Prequel",[a.SpinOff]:"Spin Off",[a.Summary]:"Summary",[a.Contains]:"Contains",[a.SideStory]:"Side Story",[a.Character]:"Character",[a.Adaptation]:"Adaptation",[a.Alternative]:"Alternative",[a.Compilation]:"Compilation"};d.__docgenInfo={description:"",methods:[],displayName:"RelationCardSkeleton"};o.__docgenInfo={description:"",methods:[],displayName:"RelationCard",props:{relation:{required:!1,tsType:{name:"NonNullable[number]",raw:`NonNullable<
  NonNullable<NonNullable<AnimeQuery["Media"]>["relations"]>["edges"]
>[number]`},description:""}}};const W={tags:["autodocs"],component:o},s={args:{},render:t=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{...t}),e.jsx(d,{})]})},j={relationType:a.Source,node:{title:{romaji:"Sousou no Frieren"},coverImage:{medium:"https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx118586-CXKgWikBFQgS.jpg"},format:g.Manga,status:x.Releasing}},i={args:{relation:j},render:t=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{...t}),e.jsx(d,{})]})},y={relationType:a.SideStory,node:{title:{romaji:"Sousou no Frieren: ●● no Mahou Part 2"},coverImage:{medium:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx170068-ijY3tCP8KoWP.jpg"},format:g.Ona,status:x.Releasing}},l={args:{relation:y},render:t=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{...t}),e.jsx(d,{})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex gap-4">
      <RelationCard {...args} />
      <RelationCardSkeleton />
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    relation: sourceRelation
  },
  render: args => <div className="flex gap-4">
      <RelationCard {...args} />
      <RelationCardSkeleton />
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    relation: sideStoryRelation
  },
  render: args => <div className="flex gap-4">
      <RelationCard {...args} />
      <RelationCardSkeleton />
    </div>
}`,...l.parameters?.docs?.source}}};const P=["DefaultWithSkeleton","SourceRelationWithSkeleton","SideStoryRelationWithSkeleton"];export{s as DefaultWithSkeleton,l as SideStoryRelationWithSkeleton,i as SourceRelationWithSkeleton,P as __namedExportsOrder,W as default};
