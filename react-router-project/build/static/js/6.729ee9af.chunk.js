(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{43:function(e,t,n){e.exports={card:"Card_card__1m44e"}},44:function(e,t,n){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},53:function(e,t,n){"use strict";n.r(t);var c=n(34),r=n.n(c),a=n(35),o=n(2),s=n(37),u=n(0),i=n(43),l=n.n(i),d=n(1),j=function(e){return Object(d.jsx)("div",{className:l.a.card,children:e.children})},b=n(14),h=n(44),x=n.n(h),f=function(e){var t=Object(u.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1],a=Object(u.useRef)(),i=Object(u.useRef)();return Object(d.jsxs)(u.Fragment,{children:[Object(d.jsx)(o.a,{when:c,message:function(e){return"Are you sure? You want to leave? All data yout typed will be lost"}}),Object(d.jsx)(j,{children:Object(d.jsxs)("form",{onFocus:function(){r(!0)},className:x.a.form,onSubmit:function(t){t.preventDefault();var n=a.current.value,c=i.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(d.jsx)("div",{className:x.a.loading,children:Object(d.jsx)(b.a,{})}),Object(d.jsxs)("div",{className:x.a.control,children:[Object(d.jsx)("label",{htmlFor:"author",children:"Author"}),Object(d.jsx)("input",{type:"text",id:"author",ref:a})]}),Object(d.jsxs)("div",{className:x.a.control,children:[Object(d.jsx)("label",{htmlFor:"text",children:"Text"}),Object(d.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(d.jsx)("div",{className:x.a.actions,children:Object(d.jsx)("button",{onClick:function(){r(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=n(33),O=n(36);t.default=function(){var e=Object(m.a)(O.b,!0).sendRequest,t=Object(o.h)(),n=function(){var n=Object(a.a)(r.a.mark((function n(c){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(c);case 2:t.push("/quotes");case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(d.jsx)(f,{onAddQuote:n})}}}]);
//# sourceMappingURL=6.729ee9af.chunk.js.map