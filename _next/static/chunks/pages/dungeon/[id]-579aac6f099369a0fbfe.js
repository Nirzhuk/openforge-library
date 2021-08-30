(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{2672:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var l=t(5893),s=t(7294),r=t(4828),a=t(5848),d=t(2181),i=function(e){var n=e.enabled,t=e.onClick;return(0,l.jsx)("button",{className:"embla__button embla__button--prev",onClick:t,disabled:!n,children:(0,l.jsx)("svg",{className:"embla__button__svg fill-current text-white",viewBox:"137.718 -1.001 366.563 644",children:(0,l.jsx)("path",{d:"M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"})})})},c=function(e){var n=e.enabled,t=e.onClick;return(0,l.jsx)("button",{className:"embla__button embla__button--next",onClick:t,disabled:!n,children:(0,l.jsx)("svg",{className:"embla__button__svg fill-current text-white",viewBox:"0 0 238.003 238.003",children:(0,l.jsx)("path",{d:"M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"})})})},o=function(e){var n=e.slides,t=(0,d.x)({draggable:!1}),o=(0,a.Z)(t,2),u=o[0],m=o[1],x=(0,s.useState)(!1),h=x[0],b=x[1],f=(0,s.useState)(!1),g=f[0],v=f[1],w=(0,s.useCallback)((function(){return m&&m.scrollPrev()}),[m]),p=(0,s.useCallback)((function(){return m&&m.scrollNext()}),[m]),j=(0,s.useCallback)((function(){m&&(b(m.canScrollPrev()),v(m.canScrollNext()))}),[m]);return(0,s.useEffect)((function(){m&&(j(),m.on("select",j))}),[m,j]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"embla w-80 bg-white h-64 w-full rounded-lg shadow-md bg-cover bg-center overflow-hidden\t",children:[(0,l.jsx)("div",{className:"embla__viewport",ref:u,children:(0,l.jsx)("div",{className:"embla__container h-full",children:n.map((function(e,n){return(0,l.jsx)("div",{className:"embla__slide",children:(0,l.jsx)("div",{className:"embla__slide__inner",children:(0,l.jsx)("img",{height:295,width:363,src:"".concat(r.F).concat(e.src),alt:e.src})})},n)}))})}),(0,l.jsx)(i,{onClick:w,enabled:h}),(0,l.jsx)(c,{onClick:p,enabled:g})]})})},u=function(e){var n=e.item;return(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center max-w-sm  my-8 relative",children:[null!==n&&void 0!==n&&n.isCarousel?(0,l.jsx)(o,{slides:n.images}):(0,l.jsx)("div",{style:{backgroundImage:"url(".concat(r.Z).concat(n.mainImage,")")},className:"w-80 bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"}),(0,l.jsxs)("div",{className:"w-80 md:w-80 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden z-10",children:[(0,l.jsx)("div",{className:"py-2 text-center font-bold uppercase tracking-wide text-gray-800",children:n.name}),(0,l.jsx)("div",{className:"flex items-center justify-center py-2 px-3 bg-blue-100",children:(0,l.jsx)("button",{className:" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700",children:"Download"})})]})]},n.id)}},3363:function(e,n,t){"use strict";var l=t(5893),s=(t(7294),t(4828));n.Z=function(e){var n=e.data,t=e.mainName;return(0,l.jsx)("div",{className:"container mx-auto mt-20",children:(0,l.jsxs)("div",{className:"relative rounded-lg flex flex-col md:flex-row items-center shadow-xl md:h-72 mx-2",children:[(0,l.jsxs)("div",{className:"z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg",children:[(0,l.jsx)("div",{className:"absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom",style:{backgroundImage:" url(".concat(s.Z).concat(n.mainImage," )"),backgroundBlendMode:"multiply"}}),(0,l.jsxs)("div",{className:"md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900",children:[(0,l.jsx)("h3",{className:"w-full font-bold text-2xl uppercase text-white leading-tight mb-2",children:t}),(0,l.jsx)("h4",{className:"w-full text-xl text-gray-100 leading-tight",children:n.name})]}),(0,l.jsx)("svg",{className:"hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:(0,l.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})})]}),(0,l.jsx)("div",{className:"z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0",children:(0,l.jsxs)("div",{className:"grid md:grid-rows-3 gap-2 p-8 md:pr-12 md:pl-14 md:py-8 mx-2 md:mx-0 h-full w-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"hidden md:block font-bold text-3xl text-gray-700",children:t}),(0,l.jsx)("h2",{className:"hidden md:block text-2xl text-gray-400 mx-8",children:n.name})]}),(0,l.jsx)("p",{className:"text-gray-600 text-justify",children:n.description}),(0,l.jsx)("a",{className:"w-40  h-11 text-center text-xl uppercase bg-purple-600 transform transition duration-400 hover:bg-purple-500 rounded text-white py-2 px-4 shadow",href:n.downloadLink,children:(0,l.jsx)("span",{children:"Download"})})]})})]})})}},4828:function(e,n,t){"use strict";t.d(n,{F:function(){return l}});var l="https://nirzhuk.github.io/openforge-library/";n.Z="/openforge-library"},3136:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a}});var l=t(5893),s=(t(7294),t(2672)),r=t(3363),a=!0;n.default=function(e){var n=e.data;return(0,l.jsxs)("div",{className:"h-screen",children:[(0,l.jsx)(r.Z,{data:n,mainName:"Dungeon"}),(0,l.jsx)("div",{className:"grid grid-cols-1 p-5 gap-4 md:grid-cols-4 container mx-auto my-5",children:n.items.map((function(e){return(0,l.jsx)(s.Z,{item:e},e.id)}))})]})}},3782:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dungeon/[id]",function(){return t(3136)}])}},function(e){e.O(0,[823,774,888,179],(function(){return n=3782,e(e.s=n);var n}));var n=e.O();_N_E=n}]);