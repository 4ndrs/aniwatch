import{j as e}from"./iframe-CL4vWSkc.js";import{S as d}from"./skeleton-Bsms-jkE.js";import{C as c,a as p}from"./cover-BIc1KL1P.js";import{s as u}from"./utils-Cg5bKbzt.js";import"./preload-helper-D9Z9MdNV.js";import"./image-Ccw6NF6Q.js";const s=({imageUrl:a,title:o,color:m,size:t="lg"})=>e.jsxs("article",{style:{width:u[t].width,"--anime-color":m},className:"group flex size-fit flex-col gap-2.5",children:[e.jsx(c,{src:a,alt:o,size:t,className:"rounded-sm"}),e.jsx("h2",{className:"line-clamp-2 w-[185px] max-w-full font-(family-name:--font-overpass) text-sm font-semibold text-wrap transition-colors duration-200 group-hover:text-[var(--anime-color)]",children:o??"No Title"})]}),i=({size:a="lg"})=>e.jsxs("div",{className:"flex size-fit flex-col gap-2.5",children:[e.jsx(p,{size:a,className:"rounded-sm"}),e.jsx(d,{className:"line-clamp-2 max-w-full font-(family-name:--font-overpass) text-sm font-semibold text-wrap",children:"Sousou no Frieren"})]});i.__docgenInfo={description:"",methods:[],displayName:"AnimeCardSkeleton",props:{size:{defaultValue:{value:'"lg"',computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[],displayName:"AnimeCard",props:{title:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof sizes",elements:[{name:"literal",value:"profile"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"xm"},{name:"literal",value:"lg"},{name:"literal",value:"xl"}]},description:"",defaultValue:{value:'"lg"',computed:!1}},imageUrl:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""}}};const S={tags:["autodocs"],component:s},r={args:{},render:a=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{...a}),e.jsx(i,{})]})},n={args:{title:"Sousou no Frieren",color:"hsl(129, 80%, 70%)",imageUrl:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg"},render:a=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{...a}),e.jsx(i,{})]})},l={args:{title:"Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",color:"rgb(227, 79, 133)",imageUrl:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151384-gv0q8wOE6D58.jpg"},render:a=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{...a}),e.jsx(i,{})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex gap-4">
      <AnimeCard {...args} />
      <AnimeCardSkeleton />
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Sousou no Frieren",
    color: "hsl(129, 80%, 70%)",
    imageUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg"
  },
  render: args => <div className="flex gap-4">
      <AnimeCard {...args} />
      <AnimeCardSkeleton />
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
    color: "rgb(227, 79, 133)",
    imageUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151384-gv0q8wOE6D58.jpg"
  },
  render: args => <div className="flex gap-4">
      <AnimeCard {...args} />
      <AnimeCardSkeleton />
    </div>
}`,...l.parameters?.docs?.source}}};const w=["DefaultWithSkeleton","FrierenAndSkeleton","KaguyaAndSkeleton"];export{r as DefaultWithSkeleton,n as FrierenAndSkeleton,l as KaguyaAndSkeleton,w as __namedExportsOrder,S as default};
