(this["webpackJsonproses-fekin-website"]=this["webpackJsonproses-fekin-website"]||[]).push([[0],{136:function(t,e,n){},146:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(47),o=n.n(s),i=(n(136),n(137),n(53)),r=n(74),j=n(75),l=n(76),h=n(84),b=n(81),u=n(157),d=n(82),p=n(158),O=n(163),m=n(164),x=n(159),v=n(165),C=n(147),f=n(45),g=n.n(f),k=n(6),y=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{style:{width:"30%"},children:Object(k.jsxs)(u.a,{fluid:!0,labeled:!0,labelPosition:"left",type:"number",name:this.props.name,onChange:this.props.onChange,value:this.props.value,children:[Object(k.jsx)(d.a,{style:{width:"50%"},content:this.props.content}),Object(k.jsx)("input",{step:"0.01"})]})})}}]),n}(a.Component),w=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(j.a)(this,n),(a=e.call(this,t)).state={mod:0,c:0,mon:0,calcMon:0},a.onChange=a.onChange.bind(Object(r.a)(a)),a.calculateCoT=a.calculateCoT.bind(Object(r.a)(a)),a}return Object(l.a)(n,[{key:"onChange",value:function(t,e){var n;n="c"===e.name?e.value>100?g()(this.state,Object(i.a)({},e.name,{$set:100})):e.value<0?g()(this.state,Object(i.a)({},e.name,{$set:0})):g()(this.state,Object(i.a)({},e.name,{$set:e.value})):"mod"===e.name&&e.value>0?g()(this.state,Object(i.a)({},e.name,{$set:0})):g()(this.state,Object(i.a)({},e.name,{$set:e.value})),this.setState(n)}},{key:"calculateCoT",value:function(t,e,n){for(var a=t,c=n,s=1*e;s>0;s=s+1*s/-20/12+1*a/12)c++;var o=g()(this.state,{calcMon:{$set:c}});this.setState(o)}},{key:"render",value:function(){var t=this;return Object(k.jsx)(p.a,{children:Object(k.jsxs)(O.a,{inverted:!0,children:[Object(k.jsx)(m.a,{as:"h2",content:"Corruption Calculator"}),Object(k.jsx)(x.a,{}),Object(k.jsxs)(v.a,{style:{padding:"14px",paddingTop:"0px"},children:[Object(k.jsx)(v.a.Row,{children:Object(k.jsx)(y,{name:"mod",value:this.state.mod,onChange:this.onChange,content:"Modifier"})}),Object(k.jsx)(v.a.Row,{children:Object(k.jsx)(y,{name:"c",value:this.state.c,onChange:this.onChange,content:"Corruption"})}),Object(k.jsx)(d.a,{content:"It will take "+this.state.calcMon+" months to burn to the ground"}),Object(k.jsx)(C.a,{onClick:function(){return t.calculateCoT(t.state.mod,t.state.c,t.state.mon)}})]})]})})}}]),n}(a.Component),I=n(161),M=n(120),T=n(160),$=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(I.a,{attached:"bottom",inverted:!0,children:[Object(k.jsx)(I.a.Item,{style:{padding:5},children:Object(k.jsx)(M.a,{src:"https://cdn.discordapp.com/attachments/236152279839801344/868161637671137300/unknown.png",size:"mini",spaced:"right"})}),Object(k.jsx)(I.a.Item,{header:!0,children:"LaceSlick exists."}),Object(k.jsxs)(I.a.Item,{fitted:!0,children:[Object(k.jsx)(u.a,{list:"projects",placeholder:"Search...",icon:"search"}),Object(k.jsxs)("datalist",{id:"projects",children:[Object(k.jsx)("option",{value:"Corruption Calculator",children:"Corruption Calculator"}),Object(k.jsx)("option",{value:"Home",children:"Home"})]})]}),Object(k.jsxs)(I.a.Menu,{position:"right",children:[Object(k.jsx)(T.a,{item:!0,text:"Tools",children:Object(k.jsx)(T.a.Menu,{children:Object(k.jsxs)(T.a.Item,{content:"haha pp",children:[Object(k.jsx)(M.a,{src:"https://cdn.discordapp.com/attachments/236152279839801344/868161871721680936/unknown.png"}),"pp"]})})}),Object(k.jsx)(I.a.Item,{content:"Home"})]})]})}}]),n}(a.Component);o.a.render(Object(k.jsxs)(c.a.StrictMode,{children:[Object(k.jsx)($,{}),Object(k.jsx)(w,{})]}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.3274c9a3.chunk.js.map