import{j as e}from"./iframe-CL4vWSkc.js";import{n as x}from"./image-Ccw6NF6Q.js";import{S as d}from"./skeleton-Bsms-jkE.js";import{F as c}from"./index-BZDOdLGD.js";import{s as l}from"./utils-Cg5bKbzt.js";import"./preload-helper-D9Z9MdNV.js";const a=({links:i})=>{if(!(!i||i.length===0))return e.jsxs("section",{children:[e.jsx("h2",{className:"text-text mb-2.5 text-sm leading-4 font-medium",children:"External & Streaming Links"}),e.jsx("ul",{className:"flex flex-col gap-2.5",children:i.filter(s=>!!s).map(s=>e.jsx("li",{style:{"--link-color":s.color},children:e.jsxs("a",{href:s.url??"#",target:"_blank",rel:"noopener noreferrer","data-highlight":s.icon?!0:void 0,className:"bg-foreground-sp group flex items-center gap-3 rounded-[5px] p-1 transition-colors data-[highlight]:hover:bg-[var(--link-color)]/88",children:[s.icon?e.jsx("div",{className:"rounded-[3px] bg-[var(--link-color)] p-1",children:e.jsx(x,{width:16,height:16,src:s.icon,alt:`${s.site} icon`})}):e.jsx(h,{}),e.jsxs("span",{className:"text-text group-hover:text-blue font-(family-name:--font-overpass) text-[0.8125rem] leading-[0.8125rem] font-bold transition-colors group-hover:group-data-[highlight]:text-white",children:[s.site,s.language?.toLowerCase()==="japanese"&&e.jsx("span",{className:"text-[0.625rem] opacity-70",children:" JP"})]})]})},s.id))})]})},h=()=>e.jsx("div",{className:"rounded-[3px] bg-[rgb(12,101,166)] p-[0.3125rem]",children:e.jsx(c,{className:"size-3.5 text-white"})}),o=()=>e.jsxs("div",{"aria-hidden":!0,children:[e.jsx("h2",{className:"text-text mb-2.5 text-sm leading-4 font-medium",children:"External & Streaming Links"}),e.jsxs("ul",{className:"flex flex-col gap-2.5",children:[e.jsx("li",{children:e.jsx(n,{children:"Official Site"})}),e.jsx("li",{children:e.jsx(n,{children:"YouTube"})}),e.jsx("li",{children:e.jsx(n,{children:"Crunchyroll"})}),e.jsx("li",{children:e.jsx(n,{children:"Netflix"})}),e.jsx("li",{children:e.jsx(n,{children:"Twitter"})})]})]}),n=({children:i})=>e.jsxs("div",{className:"bg-foreground-sp group flex items-center gap-3 rounded-[5px] p-1 transition-colors data-[highlight]:hover:bg-[var(--link-color)]/88",children:[e.jsx(d,{className:"rounded-[3px] p-[0.3125rem]",children:e.jsx(c,{className:"size-3.5"})}),e.jsx(d,{className:"font-(family-name:--font-overpass) text-[0.8125rem] leading-[0.8125rem] font-bold",children:i})]});o.__docgenInfo={description:"",methods:[],displayName:"ExternalLinksSkeleton"};a.__docgenInfo={description:"",methods:[],displayName:"ExternalLinks",props:{links:{required:!1,tsType:{name:'NonNullable["externalLinks"]',raw:'NonNullable<AnimeQuery["Media"]>["externalLinks"]'},description:""}}};const v={tags:["autodocs"],component:a},t={args:{},render:i=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:l.xl.width},children:e.jsx(a,{...i})}),e.jsx("div",{style:{width:l.xl.width},children:e.jsx(o,{})})]})},p=[{icon:null,color:null,language:"Japanese",site:"Official Site",url:"https://kusuriyanohitorigoto.jp/season2/",id:89524},{icon:"https://s4.anilist.co/file/anilistcdn/link/icon/17-R0tMgOvwvhsS.png",color:"#000000",language:"Japanese",site:"Twitter",url:"https://twitter.com/kusuriya_PR",id:89528},{icon:"https://s4.anilist.co/file/anilistcdn/link/icon/5-AWN2pVlluCOO.png",color:"#F88B24",language:null,site:"Crunchyroll",url:"https://www.crunchyroll.com/series/G3KHEVDJ7/the-apothecary-diaries",id:94813},{icon:"https://s4.anilist.co/file/anilistcdn/link/icon/196-o2g5cLUG6k5V.png",color:"#010101",language:"Japanese",site:"TikTok",url:"https://www.tiktok.com/@kusuriya_pr",id:105922},{icon:"https://s4.anilist.co/file/anilistcdn/link/icon/10-rVGPom8RCiwH.png",color:"#E50914",language:null,site:"Netflix",url:"https://www.netflix.com/title/81712068",id:114583}],r={args:{links:p},render:i=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:l.xl.width},children:e.jsx(a,{...i})}),e.jsx("div",{style:{width:l.xl.width},children:e.jsx(o,{})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex gap-2">
      <div style={{
      width: sizes.xl.width
    }}>
        <ExternalLinks {...args} />
      </div>
      <div style={{
      width: sizes.xl.width
    }}>
        <ExternalLinksSkeleton />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    links: kusuriya
  },
  render: args => <div className="flex gap-2">
      <div style={{
      width: sizes.xl.width
    }}>
        <ExternalLinks {...args} />
      </div>
      <div style={{
      width: sizes.xl.width
    }}>
        <ExternalLinksSkeleton />
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};const k=["Default","Kusuriya"];export{t as Default,r as Kusuriya,k as __namedExportsOrder,v as default};
