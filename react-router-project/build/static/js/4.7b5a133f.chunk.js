(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},46:function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},47:function(e,t,n){e.exports={item:"CommentItem_item__24mbD"}},48:function(e,t,n){e.exports={comments:"CommentsList_comments__valp0"}},49:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},51:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),o=n(7),r=n(34),a=n.n(r),m=n(35),i=n(37),u=n(45),j=n.n(u),d=n(46),l=n.n(d),b=n(33),x=n(36),h=n(1),O=function(e){var t=Object(b.a)(x.a).sendRequest,n=Object(c.useRef)(),s=function(){var c=Object(m.a)(a.a.mark((function c(s){var o;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),o=n.current.value,c.next=4,t({quoteId:e.id,commentText:o});case 4:e.onAddComment();case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(h.jsxs)("form",{className:l.a.form,onSubmit:s,children:[Object(h.jsxs)("div",{className:l.a.control,onSubmit:s,children:[Object(h.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(h.jsx)("textarea",{id:"comment",rows:"5",ref:n})]}),Object(h.jsx)("div",{className:l.a.actions,children:Object(h.jsx)("button",{className:"btn",children:"Add Comment"})})]})},f=n(14),p=n(47),_=n.n(p),N=function(e){return Object(h.jsx)("li",{className:_.a.item,children:Object(h.jsx)("p",{children:e.text})})},v=n(48),C=n.n(v),q=function(e){return Object(h.jsx)("ul",{className:C.a.comments,children:e.comments.map((function(e){return Object(h.jsx)(N,{text:e.text},e.id)}))})},g=function(e){var t=Object(b.a)(x.c,!0),n=t.sendRequest,s=t.status,o=t.data,r=t.error,u=Object(c.useState)(!1),d=Object(i.a)(u,2),l=d[0],p=d[1];Object(c.useEffect)((function(){n(e.quoteId)}),[n,e.quoteId]);var _=function(){var t=Object(m.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(e.quoteId);case 2:p(!1);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=Object(h.jsx)("p",{children:"Comments..."});return N="pending"===s?Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(f.a,{})}):r?Object(h.jsx)("p",{className:"centered",children:r}):0===o.length?Object(h.jsx)("p",{className:"centered",children:"No comments for this quotes."}):Object(h.jsx)(q,{comments:o}),Object(h.jsxs)("section",{className:j.a.comments,children:[Object(h.jsx)("h2",{children:"User Comments"}),!l&&Object(h.jsx)("button",{className:"btn",onClick:function(){p(!0)},children:"Add a Comment"}),l&&Object(h.jsx)(O,{onAddComment:_,id:e.quoteId}),N]})},w=n(49),I=n.n(w),k=function(e){return Object(h.jsxs)("figure",{className:I.a.quote,children:[Object(h.jsx)("p",{children:e.text}),Object(h.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(b.a)(x.e,!0),t=e.sendRequest,n=e.status,r=e.data,a=e.error,m=Object(s.j)(),i=Object(s.k)(),u=m.quoteId;return Object(c.useEffect)((function(){t(u)}),[t,u]),"pending"===n?Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(f.a,{})}):a?Object(h.jsx)("p",{className:"centered focused",children:a}):r.text?Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(k,{text:r.text,author:r.author}),Object(h.jsx)(s.c,{path:i.path,exact:!0,children:Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(o.b,{className:"btn",to:"".concat(i.url,"/comments"),children:"Load Comments"})})}),Object(h.jsx)(s.c,{path:"".concat(i.path,"/comments"),exact:!0,children:Object(h.jsx)(g,{quoteId:u})})]}):Object(h.jsx)("p",{children:"No quotes found"})}}}]);
//# sourceMappingURL=4.7b5a133f.chunk.js.map