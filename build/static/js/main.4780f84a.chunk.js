(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2fzuy",sent:"Cart_sent__17MR5",total:"Cart_total__3-l35",actions:"Cart_actions__ukv_G","button--alt":"Cart_button--alt__rwoEP",button:"Cart_button__2Qli3",error:"Cart_error__1uW4P",inputfetch:"Cart_inputfetch__1TwRQ",buttonf:"Cart_buttonf__3BTsS"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3BpX2",icon:"HeaderCartButton_icon__1bpLT",badge:"HeaderCartButton_badge__1VjoL",bump:"HeaderCartButton_bump__1jtjg",optional:"HeaderCartButton_optional__3--zA"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3Aqv8",summary:"CartItem_summary__1qCAP",price:"CartItem_price__3yni-",amount:"CartItem_amount__1y6hb",actions:"CartItem_actions__2oQsz"}},,,function(e,t,n){e.exports={header:"Header_header__2vwiw","main-image":"Header_main-image__3pMg0",optional:"Header_optional__Jlecj"}},function(e,t,n){e.exports={meal:"MealItem_meal__2s6ko",description:"MealItem_description__27aM1",price:"MealItem_price__3_Y6w"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2dKYM",modal:"Modal_modal__10sss","slide-down":"Modal_slide-down__1AWTw"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__30PRI"}},function(e,t,n){e.exports={card:"Card_card__1fQ31"}},function(e,t,n){e.exports={input:"Input_input__26nj1"}},function(e,t,n){e.exports={form:"MealItemForm_form__2xuQ1"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1ekqC","meals-appear":"AvailableMeals_meals-appear__2R8Ni"}},function(e,t,n){e.exports={filter:"Filter_filter__2yo9c",options:"Filter_options__1ZCc9"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),r=(n(28),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(e){return"1"===e.icon?Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})}):Object(o.jsx)("i",{className:"fa-solid fa-dumpster-fire"})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearItems:function(){}}),j=n(6),b=n.n(j),d=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(u).items,j=i.reduce((function(e,t){return e+t.amount}),0),d="".concat(b.a.button," ").concat(a?b.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("button",{className:d,onClick:e.onOrders,children:[Object(o.jsx)("span",{className:"".concat(b.a.icon," ").concat(b.a.optional),children:Object(o.jsx)(l,{icon:"2"})}),Object(o.jsx)("span",{children:"Your Orders"})]}),Object(o.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(o.jsx)("span",{className:"".concat(b.a.icon," ").concat(b.a.optional),children:Object(o.jsx)(l,{icon:"1"})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:b.a.badge,children:j})]})]})},m=n.p+"static/media/meals.2971f633.jpg",O=n(12),p=n.n(O),h=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:p.a.header,children:[Object(o.jsx)("h1",{className:p.a.optional,children:"ReactMeals"}),Object(o.jsx)(d,{onOrders:e.onShowOrders,onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:p.a["main-image"],children:Object(o.jsx)("img",{src:m,alt:"A table full of delicious food!"})})]})},f=n(18),x=n.n(f),_=function(){return Object(o.jsxs)("section",{className:x.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(3),C=n(7),g=n(5),y=n.n(g),N=n(19),w=n.n(N),A=function(e){return Object(o.jsx)("div",{className:w.a.card,children:e.children})},S=n(20),k=n.n(S),I=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:k.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(v.a)({ref:t},e.input))]})})),M=n(21),F=n.n(M),H=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(o.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(I,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=n(13),B=n.n(R),E=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:B.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:B.a.description,children:e.description}),Object(o.jsx)("div",{className:B.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(H,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=n(22),D=n.n(T),P=n(23),Y=n.n(P);var z=function(e){var t=Object(s.useState)("all"),n=Object(r.a)(t,2),a=n[0],c=n[1];return Object(s.useEffect)((function(){e.filterBy(a)}),[a]),Object(o.jsx)("div",{className:Y.a.filter,children:Object(o.jsxs)("select",{value:a,onChange:function(e){c(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"meat",children:"Meat"}),Object(o.jsx)("option",{value:"fish",children:"Fish"}),Object(o.jsx)("option",{value:"veggie",children:"Veggies"})]})})},L=function(){var e=i.a.useState([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=i.a.useState(n),s=Object(r.a)(c,2),l=s[0],u=s[1],j=i.a.useState(!0),b=Object(r.a)(j,2),d=b[0],m=b[1],O=i.a.useState(""),p=Object(r.a)(O,2),h=p[0],f=p[1];function x(){return(x=Object(C.a)(y.a.mark((function e(){var t,n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-467cc-default-rtdb.firebaseio.com/meals.json");case 2:return(t=e.sent).ok||f("Error while fetching"),e.next=6,t.json();case 6:for(r in n=e.sent,c=[],n)c.push(Object(v.a)(Object(v.a)({},n[r]),{},{id:r}));a(c),u(c),m(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.useEffect(i.a.useCallback((function(){(function(){return x.apply(this,arguments)})().catch((function(e){m(!1),f(e.message)}))})),[]);var _=i.a.useCallback(l.map((function(e){return Object(o.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)})),[l]);return Object(o.jsxs)("section",{className:D.a.meals,children:[Object(o.jsx)(z,{filterBy:function(e){console.log(e),u("all"===e?n:n.filter((function(t){return t.type===e})))}}),Object(o.jsx)(A,{children:h?Object(o.jsx)("p",{children:h}):d?Object(o.jsx)("p",{children:"Loading..."}):Object(o.jsx)("ul",{children:_})})]})},Q=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(L,{})]})},V=n(14),q=n.n(V),J=function(e){return Object(o.jsx)("div",{className:q.a.backdrop,onClick:e.onClose})},$=function(e){return Object(o.jsx)("div",{className:q.a.modal,children:Object(o.jsx)("div",{className:q.a.content,children:e.children})})},W=document.getElementById("overlays"),G=function(e){return Object(o.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(o.jsx)(J,{onClose:e.onClose}),W),c.a.createPortal(Object(o.jsx)($,{children:e.children}),W)]})},K=n(9),X=n.n(K),Z=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:X.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:X.a.summary,children:[Object(o.jsx)("span",{className:X.a.price,children:t}),Object(o.jsxs)("span",{className:X.a.amount,children:["x ",e.amount]})]})]}),e.changable&&Object(o.jsxs)("div",{className:X.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(4),ee=n.n(U),te=function(e){var t=i.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],s=i.a.useState(""),l=Object(r.a)(s,2),u=l[0],j=l[1],b=i.a.useState(0),d=Object(r.a)(b,2),m=d[0],O=d[1],p=i.a.useState(""),h=Object(r.a)(p,2),f=h[0],x=h[1],_=i.a.useState(!1),C=Object(r.a)(_,2),g=C[0],y=C[1],N=i.a.useState({name:!1,street:!1,postal:!1,city:!1}),w=Object(r.a)(N,2),A=w[0],S=w[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),g?!1===A.name&&!1===A.street&&!1===A.postal&&!1===A.city&&e.onConfirm({name:a,street:u,postal:m,city:f}):S({name:!0,street:!0,postal:!0,city:!0})},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{onChange:function(e){y(!0),c(e.target.value),e.target.value.length<=4?S(Object(v.a)(Object(v.a)({},A),{},{name:!0})):S(Object(v.a)(Object(v.a)({},A),{},{name:!1}))},value:a,type:"text"}),A.name&&Object(o.jsx)("p",{className:ee.a.error,children:"Your name must be longer"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Street"}),Object(o.jsx)("input",{onChange:function(e){y(!0),j(e.target.value),e.target.value.length<=5?S(Object(v.a)(Object(v.a)({},A),{},{name:!1,street:!0})):S(Object(v.a)(Object(v.a)({},A),{},{street:!1}))},value:u,type:"text"}),A.street&&Object(o.jsx)("p",{className:ee.a.error,children:"Street must be longer"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Postal Code"}),Object(o.jsx)("input",{onChange:function(e){y(!0),O(e.target.value),e.target.value<=1e3?S(Object(v.a)(Object(v.a)({},A),{},{postal:!0})):S(Object(v.a)(Object(v.a)({},A),{},{postal:!1}))},value:m,type:"number"}),A.postal&&Object(o.jsx)("p",{className:ee.a.error,children:"Something is wrong"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"City"}),Object(o.jsx)("input",{onChange:function(e){y(!0),x(e.target.value),e.target.value.length<=1?S(Object(v.a)(Object(v.a)({},A),{},{city:!0})):S(Object(v.a)(Object(v.a)({},A),{},{city:!1}))},value:f,type:"text"}),A.city&&Object(o.jsx)("p",{className:ee.a.error,children:"City must be longer"})]}),Object(o.jsxs)("div",{className:ee.a.actions,children:[Object(o.jsx)("button",{onClick:e.onCancel,className:ee.a.button,children:"Cancel"}),Object(o.jsx)("button",{type:"submit",className:ee.a.button,children:"Confirm"})]})]})},ne=function(e){var t=Object(s.useContext)(u),n=Object(s.useState)(!1),a=Object(r.a)(n,2),c=a[0],i=a[1],l=Object(s.useState)(""),j=Object(r.a)(l,2),b=j[0],d=j[1],m="$".concat(t.totalAmount.toFixed(2)),O=t.items.length>0,p=function(e){t.removeItem(e)},h=function(e){t.addItem(e),i(!1)},f=Object(o.jsx)("ul",{className:ee.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(Z,{name:e.name,amount:e.amount,price:e.price,changable:!0,onRemove:p.bind(null,e.id),onAdd:h.bind(null,e)},e.id)}))});function x(){return(x=Object(C.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(""),i(!0);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(C.a)(y.a.mark((function e(n){var a,c,r,s,l,u;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in i(!1),a=[],n)a.push(n[c]);r=a[0],s=a[1],l=a[2],u=a[3],{id:Date.now(),name:r,street:s,postal:l,city:u},t.clearItems(),d(Object(o.jsx)("p",{className:ee.a.sent,children:"Your order was updated"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}ee.a.sent;return Object(o.jsxs)(G,{onClose:e.onClose,children:[f,Object(o.jsxs)("div",{className:ee.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:m})]}),!c&&Object(o.jsxs)("div",{className:ee.a.actions,children:[Object(o.jsx)("button",{className:ee.a["button--alt"],onClick:e.onClose,children:"Close"}),O&&Object(o.jsx)("button",{onClick:function(){return x.apply(this,arguments)},className:ee.a.button,children:"Order"})]}),b,c&&Object(o.jsx)(te,{onCancel:function(t){t.preventDefault(),e.onClose()},onConfirm:function(e){return _.apply(this,arguments)}})]})},ae=n(17),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(v.a)(Object(v.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(v.a)(Object(v.a)({},l),{},{amount:l.amount-1});(i=Object(ae.a)(e.items))[o]=j}return{items:i,totalAmount:u}}return t.type,ce},se=function(e){var t=Object(s.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearItems:function(){c({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:i,children:e.children})},ie=n(16),oe=function(e){var t=Object(s.useState)([]),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(!1),l=Object(r.a)(i,2),u=l[0],j=l[1],b=Object(s.useState)(""),d=Object(r.a)(b,2),m=d[0],O=d[1];function p(){return(p=Object(C.a)(y.a.mark((function e(){var t,n,a,r,s,i,o,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,fetch("https://react-http-467cc-default-rtdb.firebaseio.com/orders.json");case 4:return(t=e.sent).ok&&console.log("All right!"),e.next=8,t.json();case 8:for(s in n=e.sent,a=[],r=!1,n)if(n[s].user.name.trim()!==m.trim()||r||(r=!0),r){i=Object(ie.a)(n[s].order);try{for(i.s();!(o=i.n()).done;)l=o.value,a.push(Object(v.a)({},l))}catch(u){i.e(u)}finally{i.f()}c(a)}e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.message);case 17:j(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}var h,f=0,x=Object(ie.a)(a);try{for(x.s();!(h=x.n()).done;){var _=h.value;f+=_.price*_.amount}}catch(N){x.e(N)}finally{x.f()}var g=f;return Object(o.jsxs)(G,{onClose:e.onClose,children:[u?Object(o.jsx)("p",{children:"Loading..."}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Search to see your orders!"}),Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{className:ee.a.inputfetch,onChange:function(e){O(e.target.value)},value:m}),m.length>3&&0===a.length&&Object(o.jsx)("button",{className:ee.a.buttonf,onClick:function(){return p.apply(this,arguments)},children:"Fetch orders"})]}),Object(o.jsx)("ul",{className:ee.a["cart-items"],children:a.map((function(e){return Object(o.jsx)(Z,{name:e.name,amount:e.amount,price:e.price,changable:!1},e.key)}))}),Object(o.jsxs)("div",{className:ee.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:g})]}),Object(o.jsx)("div",{className:ee.a.actions,children:Object(o.jsx)("button",{onClick:e.onClose,className:ee.a.button,children:"Close"})})]})};var le=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),i=Object(r.a)(c,2),l=i[0],u=i[1];return Object(o.jsxs)(se,{children:[l&&Object(o.jsx)(oe,{onClose:function(){u(!1)}}),n&&Object(o.jsx)(ne,{onClose:function(){a(!1)}}),Object(o.jsx)(h,{onShowOrders:function(){u(!0)},onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(Q,{})})]})};c.a.render(Object(o.jsx)(le,{}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.4780f84a.chunk.js.map