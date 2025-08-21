import{j as e}from"./iframe-BKv4NkpT.js";import{M as S,a as M,b as g,c as j,d as f,e as v,s as a}from"./utils-Cg5bKbzt.js";import{S as t}from"./skeleton-BZrigFNZ.js";import{M as y}from"./graphql-Hav8TeqN.js";import"./preload-helper-D9Z9MdNV.js";const r=({anime:s})=>{if(!s)return e.jsx("aside",{className:"bg-foreground-sp rounded-[3px] p-2",children:"No anime data available"});const n=s.studios?.edges?.filter(i=>i?.isMain),d=s.studios?.edges?.filter(i=>!i?.isMain),o=Array.isArray(s.genres)?s.genres:[s.genres];return e.jsx("aside",{className:"bg-foreground-sp rounded-[3px] p-[1.125rem]",children:e.jsxs("dl",{className:"flex flex-col gap-[0.875rem]",children:[!!s.format&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Format"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:S[s.format]})]}),!!s.episodes&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Episodes"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:s.episodes})]}),!!s.duration&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Episode Duration"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:D(s.duration)})]}),!!s.status&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Status"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem] capitalize",children:M[s.status]})]}),s.format!==y.Movie&&!!s.startDate?.day&&!!s.startDate?.year&&!!s.startDate?.month&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Start Date"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:N({day:s.startDate.day,month:s.startDate.month,year:s.startDate.year})})]}),s.format!==y.Movie&&!!s.endDate?.day&&!!s.endDate?.year&&!!s.endDate?.month&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"End Date"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:N({day:s.endDate.day,month:s.endDate.month,year:s.endDate.year})})]}),s.format===y.Movie&&!!s.startDate?.day&&!!s.startDate?.year&&!!s.startDate?.month&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Release Date"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:N({day:s.startDate.day,month:s.startDate.month,year:s.startDate.year})})]}),!!s.season&&!!s.seasonYear&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Season"}),e.jsxs("dd",{className:"text-lighter text-xs leading-[0.975rem] capitalize",children:[s.season.toLowerCase()," ",s.seasonYear]})]}),!!s.averageScore&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Average Score"}),e.jsxs("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:[s.averageScore,"%"]})]}),!!n&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Studios"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx("ul",{className:"flex flex-col",children:n.map(i=>e.jsx("li",{children:i?.node?.name},i?.node?.id))})})]}),!!d&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Producers"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx("ul",{className:"flex flex-col",children:d.map(i=>e.jsx("li",{children:i?.node?.name},i?.node?.id))})})]}),!!s.source&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Source"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem] capitalize",children:s.source.toLowerCase().replace("_"," ")})]}),!!s.hashtag&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Hashtag"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:s.hashtag})]}),!!o&&o.length>0&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Genres"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx("ul",{className:"flex flex-col",children:o.map((i,p)=>e.jsx("li",{children:i},p))})})]}),!!s.title?.romaji&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Romaji"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:s.title.romaji})]}),!!s.title?.english&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"English"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:s.title.english})]}),!!s.title?.native&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Native"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:s.title.native})]}),!!s.synonyms&&s.synonyms.length>0&&e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Synonyms"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx("ul",{className:"flex flex-col",children:s.synonyms.map((i,p)=>e.jsx("li",{children:i},p))})})]})]})})},D=s=>{const n=s%60,d=Math.floor(s/60),o=n>0?n+" min"+(n>1?"s":""):"";return(d>0?d+" hour"+(d>1?"s":"")+(n>0?", ":""):"")+o},N=s=>{const n=new Date(s.year,s.month-1,s.day);return Intl.DateTimeFormat("en-US",{month:"short",year:"numeric",day:"numeric"}).format(n)},l=()=>e.jsx("div",{"aria-hidden":!0,className:"bg-foreground-sp rounded-[3px] p-[1.125rem]",children:e.jsxs("dl",{className:"flex flex-col gap-[0.875rem]",children:[e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Format"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"Format"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Episodes"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"12"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Episode Duration"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"23 mins"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Status"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem] capitalize",children:e.jsx(t,{children:"Airing"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Start Date"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"Sep 20, 2024"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"End Date"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"Sep 20, 2024"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Season"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem] capitalize",children:e.jsx(t,{children:"Winter 2017"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Average Score"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"90%"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Studios"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx("ul",{className:"flex flex-col gap-1",children:e.jsx("li",{children:e.jsx(t,{children:"Studio One"})})})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Producers"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsxs("ul",{className:"flex flex-col gap-1",children:[e.jsx("li",{children:e.jsx(t,{children:"Producer One"})}),e.jsx("li",{children:e.jsx(t,{children:"Producer Zero two"})}),e.jsx("li",{children:e.jsx(t,{children:"Producer 3"})})]})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Source"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem] capitalize",children:e.jsx(t,{children:"Manga"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Hashtag"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"#SomeHashtag"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Genres"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsxs("ul",{className:"flex flex-col gap-1",children:[e.jsx("li",{children:e.jsx(t,{children:"Genre 1"})}),e.jsx("li",{children:e.jsx(t,{children:"Genre two"})}),e.jsx("li",{children:e.jsx(t,{children:"Genre three"})})]})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Romaji"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"Some Romaji Title"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"English"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"Some English Title"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Native"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsx(t,{children:"Some Native Title"})})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium",children:"Synonyms"}),e.jsx("dd",{className:"text-lighter text-xs leading-[0.975rem]",children:e.jsxs("ul",{className:"flex flex-col gap-1",children:[e.jsx("li",{children:e.jsx(t,{children:"Some synonym with long name"})}),e.jsx("li",{children:e.jsx(t,{children:"Some short synonym"})}),e.jsx("li",{children:e.jsx(t,{children:"Some synonym with crazy name"})}),e.jsx("li",{children:e.jsx(t,{children:"Some other synonym"})})]})})]})]})});l.__docgenInfo={description:"",methods:[],displayName:"InfoPanelSkeleton"};r.__docgenInfo={description:"",methods:[],displayName:"InfoPanel",props:{anime:{required:!1,tsType:{name:"union",raw:"Anime | null",elements:[{name:"Pick",elements:[{name:"NonNullable",elements:[{name:"union",raw:'AnimeQuery["Media"]'}],raw:'NonNullable<AnimeQuery["Media"]>'},{name:"union",raw:`| "title"
| "format"
| "episodes"
| "status"
| "season"
| "seasonYear"
| "source"
| "genres"
| "hashtag"
| "startDate"
| "endDate"
| "studios"
| "duration"
| "synonyms"
| "averageScore"`,elements:[{name:"literal",value:'"title"'},{name:"literal",value:'"format"'},{name:"literal",value:'"episodes"'},{name:"literal",value:'"status"'},{name:"literal",value:'"season"'},{name:"literal",value:'"seasonYear"'},{name:"literal",value:'"source"'},{name:"literal",value:'"genres"'},{name:"literal",value:'"hashtag"'},{name:"literal",value:'"startDate"'},{name:"literal",value:'"endDate"'},{name:"literal",value:'"studios"'},{name:"literal",value:'"duration"'},{name:"literal",value:'"synonyms"'},{name:"literal",value:'"averageScore"'}]}],raw:`Pick<
  NonNullable<AnimeQuery["Media"]>,
  | "title"
  | "format"
  | "episodes"
  | "status"
  | "season"
  | "seasonYear"
  | "source"
  | "genres"
  | "hashtag"
  | "startDate"
  | "endDate"
  | "studios"
  | "duration"
  | "synonyms"
  | "averageScore"
>`},{name:"null"}]},description:""}}};const E={tags:["autodocs"],component:r},m={args:{},render:s=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:a.xl.width},children:e.jsx(r,{...s})}),e.jsx("div",{style:{width:a.xl.width},children:e.jsx(l,{})})]})},w={title:{romaji:"Sousou no Frieren",native:"葬送のフリーレン",english:"Frieren: Beyond Journey’s End"},format:v.Tv,episodes:28,duration:24,status:f.Finished,startDate:{day:29,month:9,year:2023},endDate:{day:22,month:3,year:2024},season:j.Fall,seasonYear:2023,averageScore:91,studios:{edges:[{isMain:!1,node:{name:"Toho",id:245,isAnimationStudio:!1}},{isMain:!0,node:{name:"MADHOUSE",id:11,isAnimationStudio:!0}},{isMain:!1,node:{name:"Shogakukan",id:6161,isAnimationStudio:!1}},{isMain:!1,node:{name:"Nippon Television Network",id:6620,isAnimationStudio:!1}},{isMain:!1,node:{name:"Shogakukan-Shueisha Productions",id:62,isAnimationStudio:!1}},{isMain:!1,node:{name:"Aniplex",id:17,isAnimationStudio:!1}},{isMain:!1,node:{name:"Dentsu",id:53,isAnimationStudio:!1}}]},source:g.Manga,hashtag:"#フリーレン #frieren",genres:["Adventure","Drama","Fantasy"],synonyms:["Frieren at the Funeral","장송의 프리렌","Frieren - Oltre la Fine del Viaggio","คำอธิษฐานในวันที่จากลา Frieren","Frieren e a Jornada para o Além","Frieren – Nach dem Ende der Reise","葬送的芙莉蓮","Frieren: Más allá del final del viaje","Frieren en el funeral","Sōsō no Furīren","Frieren. U kresu drogi","Frieren - Pháp sư tiễn táng","Фрирен, провожающая в последний путь","فريرن: ما وراء نهاية الرحلة","Frieren: Tras finalizar el viaje"]},x={args:{anime:w},render:s=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:a.xl.width},children:e.jsx(r,{...s})}),e.jsx("div",{style:{width:a.xl.width},children:e.jsx(l,{})})]})},A={title:{romaji:"Girls und Panzer Movie",native:"ガールズ&パンツァー 劇場版",english:"Girls und Panzer der Film"},format:v.Movie,episodes:1,duration:120,status:f.Finished,startDate:{day:21,month:11,year:2015},endDate:{day:21,month:11,year:2015},season:j.Fall,seasonYear:2015,averageScore:81,studios:{edges:[{isMain:!0,node:{name:"Actas",id:60,isAnimationStudio:!0}},{isMain:!1,node:{name:"Q-Tec",id:6297,isAnimationStudio:!1}},{isMain:!1,node:{name:"Movic",id:166,isAnimationStudio:!1}},{isMain:!1,node:{name:"Hakuhodo DY Music & Pictures",id:777,isAnimationStudio:!1}},{isMain:!1,node:{name:"Lantis",id:104,isAnimationStudio:!1}},{isMain:!1,node:{name:"Sentai Filmworks",id:376,isAnimationStudio:!1}},{isMain:!1,node:{name:"Bandai Visual",id:23,isAnimationStudio:!1}}]},source:g.Original,hashtag:"#garupan",genres:["Action","Sports"],synonyms:[]},c={args:{anime:A},render:s=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:a.xl.width},children:e.jsx(r,{...s})}),e.jsx("div",{style:{width:a.xl.width},children:e.jsx(l,{})})]})},b={title:{romaji:"PriPara Movie: Mi~nna no Akogare♪ Let's Go☆PriParis",native:"映画 プリパラ み～んなのあこがれ♪ レッツゴー☆プリパリ",english:null},format:v.Movie,episodes:1,duration:72,status:f.Finished,startDate:{day:12,month:3,year:2016},endDate:{day:12,month:3,year:2016},season:j.Winter,seasonYear:2016,averageScore:72,studios:{edges:[{isMain:!0,node:{name:"Tatsunoko Production",id:103,isAnimationStudio:!0}},{isMain:!0,node:{name:"Passione",id:911,isAnimationStudio:!0}},{isMain:!1,node:{name:"Avex Pictures",id:6429,isAnimationStudio:!1}},{isMain:!1,node:{name:"Takara Tomy",id:327,isAnimationStudio:!1}},{isMain:!1,node:{name:"Tatsunoko Production",id:103,isAnimationStudio:!0}},{isMain:!1,node:{name:"TV Tokyo",id:16,isAnimationStudio:!1}},{isMain:!1,node:{name:"Aeon Entertainment",id:6619,isAnimationStudio:!1}}]},source:g.Original,hashtag:"#pripara",genres:["Music"],synonyms:[]},h={args:{anime:b},render:s=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:a.xl.width},children:e.jsx(r,{...s})}),e.jsx("div",{style:{width:a.xl.width},children:e.jsx(l,{})})]})},k={title:{romaji:"Kusuriya no Hitorigoto 2nd Season",english:"The Apothecary Diaries Season 2",native:"薬屋のひとりごと 第2期"},format:v.Tv,episodes:24,duration:24,status:f.Finished,startDate:{day:10,month:1,year:2025},endDate:{day:4,month:7,year:2025},season:j.Winter,seasonYear:2025,averageScore:88,studios:{edges:[{isMain:!1,node:{name:"Toho",id:245,isAnimationStudio:!1}},{isMain:!0,node:{name:"TOHO animation STUDIO",id:7368,isAnimationStudio:!0}},{isMain:!0,node:{name:"OLM",id:28,isAnimationStudio:!0}},{isMain:!1,node:{name:"Nippon Television Network",id:6620,isAnimationStudio:!1}},{isMain:!1,node:{name:"Imagica Infos",id:7472,isAnimationStudio:!1}},{isMain:!1,node:{name:"OLM",id:28,isAnimationStudio:!0}},{isMain:!1,node:{name:"Dentsu",id:53,isAnimationStudio:!1}},{isMain:!1,node:{name:"Shogakukan",id:6161,isAnimationStudio:!1}},{isMain:!1,node:{name:"Square Enix",id:58,isAnimationStudio:!1}}]},source:g.LightNovel,hashtag:"#薬屋のひとりごと #薬屋２期",genres:["Drama","Mystery"],synonyms:["Die Tagebücher der Apothekerin Season 2","Diários de uma Apotecária 2ª Temporada","Монолог фармацевта 2"]},u={args:{anime:k},render:s=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{style:{width:a.xl.width},children:e.jsx(r,{...s})}),e.jsx("div",{style:{width:a.xl.width},children:e.jsx(l,{})})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex gap-2">
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanel {...args} />
      </div>
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanelSkeleton />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    anime: frieren
  },
  render: args => <div className="flex gap-2">
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanel {...args} />
      </div>
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanelSkeleton />
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    anime: gupMovie
  },
  render: args => <div className="flex gap-2">
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanel {...args} />
      </div>
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanelSkeleton />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    anime: priparis
  },
  render: args => <div className="flex gap-2">
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanel {...args} />
      </div>
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanelSkeleton />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    anime: kusuriya
  },
  render: args => <div className="flex gap-2">
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanel {...args} />
      </div>
      <div style={{
      width: sizes.xl.width
    }}>
        <InfoPanelSkeleton />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const W=["DefaultWithSkeleton","FrierenWithSkeleton","GirlsUndPanzerMovieWithSkeleton","PriparaMovieWithSkeleton","KusuriyaNoHitorigoto2ndSeasonWithSkeleton"];export{m as DefaultWithSkeleton,x as FrierenWithSkeleton,c as GirlsUndPanzerMovieWithSkeleton,u as KusuriyaNoHitorigoto2ndSeasonWithSkeleton,h as PriparaMovieWithSkeleton,W as __namedExportsOrder,E as default};
