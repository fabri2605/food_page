(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3pqCn",sent:"Cart_sent__lcmuw",total:"Cart_total__3Hf6H",actions:"Cart_actions__2ySOC","button--alt":"Cart_button--alt__2i6Ia",button:"Cart_button__3G6EA",error:"Cart_error__fL7ps",inputfetch:"Cart_inputfetch__WLPF8",buttonf:"Cart_buttonf__4CLi3"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__1Fo_U",icon:"HeaderCartButton_icon__kOe8u",badge:"HeaderCartButton_badge__2SI_e",bump:"HeaderCartButton_bump__Q7grV",optional:"HeaderCartButton_optional__3A4xm"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__zQ4rE",summary:"CartItem_summary__j6QK7",price:"CartItem_price__160pf",amount:"CartItem_amount__Eqv_S",actions:"CartItem_actions__3-tb2"}},,,function(e,t,n){e.exports={header:"Header_header__7aZoG","main-image":"Header_main-image__9WzYN",optional:"Header_optional__2Ec5v"}},function(e,t,n){e.exports={meal:"MealItem_meal__3JrRL",description:"MealItem_description__1Lh5T",price:"MealItem_price__3StRk"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__FyZpc",modal:"Modal_modal__2RTz3","slide-down":"Modal_slide-down__DIMBZ"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__3SgxE"}},function(e,t,n){e.exports={card:"Card_card__wj4uF"}},function(e,t,n){e.exports={input:"Input_input__2UfX1"}},function(e,t,n){e.exports={form:"MealItemForm_form__2nyRr"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1QPDo","meals-appear":"AvailableMeals_meals-appear__2UM-o"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),r=(n(27),n(3)),s=n(1),o=n.n(s),i=n(0),l=function(e){return"1"===e.icon?Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(i.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})}):Object(i.jsx)("i",{class:"fa-solid fa-dumpster-fire"})},u=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearItems:function(){}}),j=n(6),d=n.n(j),b=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useContext)(u).items,j=o.reduce((function(e,t){return e+t.amount}),0),b="".concat(d.a.button," ").concat(a?d.a.bump:"");return Object(s.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(i.jsxs)(s.Fragment,{children:[Object(i.jsxs)("button",{className:b,onClick:e.onOrders,children:[Object(i.jsx)("span",{className:"".concat(d.a.icon," ").concat(d.a.optional),children:Object(i.jsx)(l,{icon:"2"})}),Object(i.jsx)("span",{children:"Your Orders"})]}),Object(i.jsxs)("button",{className:b,onClick:e.onClick,children:[Object(i.jsx)("span",{className:"".concat(d.a.icon," ").concat(d.a.optional),children:Object(i.jsx)(l,{icon:"1"})}),Object(i.jsx)("span",{children:"Your Cart"}),Object(i.jsx)("span",{className:d.a.badge,children:j})]})]})},m=n.p+"static/media/meals.2971f633.jpg",O=n(12),p=n.n(O),h=function(e){return Object(i.jsxs)(s.Fragment,{children:[Object(i.jsxs)("header",{className:p.a.header,children:[Object(i.jsx)("h1",{className:p.a.optional,children:"ReactMeals"}),Object(i.jsx)(b,{onOrders:e.onShowOrders,onClick:e.onShowCart})]}),Object(i.jsx)("div",{className:p.a["main-image"],children:Object(i.jsx)("img",{src:m,alt:"A table full of delicious food!"})})]})},f=n(18),x=n.n(f),_=function(){return Object(i.jsxs)("section",{className:x.a.summary,children:[Object(i.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(i.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(i.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(2),C=n(7),g=n(5),y=n.n(g),N=n(19),S=n.n(N),A=function(e){return Object(i.jsx)("div",{className:S.a.card,children:e.children})},k=n(20),w=n.n(k),I=o.a.forwardRef((function(e,t){return Object(i.jsxs)("div",{className:w.a.input,children:[Object(i.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(i.jsx)("input",Object(v.a)({ref:t},e.input))]})})),E=n(21),T=n.n(E),R=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useRef)();return Object(i.jsxs)("form",{className:T.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(i.jsx)(I,{ref:o,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(i.jsx)("button",{children:"+ Add"}),!a&&Object(i.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},H=n(13),M=n.n(H),D=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(i.jsxs)("li",{className:M.a.meal,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:e.name}),Object(i.jsx)("div",{className:M.a.description,children:e.description}),Object(i.jsx)("div",{className:M.a.price,children:n})]}),Object(i.jsx)("div",{children:Object(i.jsx)(R,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},F=n(22),P=n.n(F),B=function(){var e=o.a.useState([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=o.a.useState(!0),s=Object(r.a)(c,2),l=s[0],u=s[1],j=o.a.useState(""),d=Object(r.a)(j,2),b=d[0],m=d[1];function O(){return(O=Object(C.a)(y.a.mark((function e(){var t,n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-467cc-default-rtdb.firebaseio.com/meals.json");case 2:return(t=e.sent).ok||m("Error while fetching"),e.next=6,t.json();case 6:for(r in n=e.sent,c=[],n)c.push(Object(v.a)(Object(v.a)({},n[r]),{},{id:r}));a(c),u(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.useEffect(o.a.useCallback((function(){(function(){return O.apply(this,arguments)})().catch((function(e){u(!1),m(e.message)}))})),[]);var p=o.a.useCallback(n.map((function(e){return Object(i.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)})),[n]);return Object(i.jsx)("section",{className:P.a.meals,children:Object(i.jsx)(A,{children:b?Object(i.jsx)("p",{children:b}):l?Object(i.jsx)("p",{children:"Loading..."}):Object(i.jsx)("ul",{children:p})})})},L=function(){return Object(i.jsxs)(s.Fragment,{children:[Object(i.jsx)(_,{}),Object(i.jsx)(B,{})]})},z=n(14),Y=n.n(z),U=function(e){return Object(i.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},V=function(e){return Object(i.jsx)("div",{className:Y.a.modal,children:Object(i.jsx)("div",{className:Y.a.content,children:e.children})})},W=document.getElementById("overlays"),J=function(e){return Object(i.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(i.jsx)(U,{onClose:e.onClose}),W),c.a.createPortal(Object(i.jsx)(V,{children:e.children}),W)]})},K=n(9),Q=n.n(K),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(i.jsxs)("li",{className:Q.a["cart-item"],children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:e.name}),Object(i.jsxs)("div",{className:Q.a.summary,children:[Object(i.jsx)("span",{className:Q.a.price,children:t}),Object(i.jsxs)("span",{className:Q.a.amount,children:["x ",e.amount]})]})]}),e.changable&&Object(i.jsxs)("div",{className:Q.a.actions,children:[Object(i.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(i.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=n(4),$=n.n(Z),G=function(e){var t=o.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],s=o.a.useState(""),l=Object(r.a)(s,2),u=l[0],j=l[1],d=o.a.useState(0),b=Object(r.a)(d,2),m=b[0],O=b[1],p=o.a.useState(""),h=Object(r.a)(p,2),f=h[0],x=h[1],_=o.a.useState(!1),C=Object(r.a)(_,2),g=C[0],y=C[1],N=o.a.useState({name:!1,street:!1,postal:!1,city:!1}),S=Object(r.a)(N,2),A=S[0],k=S[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),g?!1===A.name&&!1===A.street&&!1===A.postal&&!1===A.city&&e.onConfirm({name:a,street:u,postal:m,city:f}):k({name:!0,street:!0,postal:!0,city:!0})},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Name"}),Object(i.jsx)("input",{onChange:function(e){y(!0),c(e.target.value),e.target.value.length<=4?k(Object(v.a)(Object(v.a)({},A),{},{name:!0})):k(Object(v.a)(Object(v.a)({},A),{},{name:!1}))},value:a,type:"text"}),A.name&&Object(i.jsx)("p",{className:$.a.error,children:"Your name must be longer"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Street"}),Object(i.jsx)("input",{onChange:function(e){y(!0),j(e.target.value),e.target.value.length<=5?k(Object(v.a)(Object(v.a)({},A),{},{name:!1,street:!0})):k(Object(v.a)(Object(v.a)({},A),{},{street:!1}))},value:u,type:"text"}),A.street&&Object(i.jsx)("p",{className:$.a.error,children:"Street must be longer"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Postal Code"}),Object(i.jsx)("input",{onChange:function(e){y(!0),O(e.target.value),e.target.value<=1e3?k(Object(v.a)(Object(v.a)({},A),{},{postal:!0})):k(Object(v.a)(Object(v.a)({},A),{},{postal:!1}))},value:m,type:"number"}),A.postal&&Object(i.jsx)("p",{className:$.a.error,children:"Something is wrong"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"City"}),Object(i.jsx)("input",{onChange:function(e){y(!0),x(e.target.value),e.target.value.length<=1?k(Object(v.a)(Object(v.a)({},A),{},{city:!0})):k(Object(v.a)(Object(v.a)({},A),{},{city:!1}))},value:f,type:"text"}),A.city&&Object(i.jsx)("p",{className:$.a.error,children:"City must be longer"})]}),Object(i.jsxs)("div",{className:$.a.actions,children:[Object(i.jsx)("button",{onClick:e.onCancel,className:$.a.button,children:"Cancel"}),Object(i.jsx)("button",{type:"submit",className:$.a.button,children:"Confirm"})]})]})},X=function(e){var t=Object(s.useContext)(u),n=Object(s.useState)(!1),a=Object(r.a)(n,2),c=a[0],o=a[1],l=Object(s.useState)(""),j=Object(r.a)(l,2),d=j[0],b=j[1],m="$".concat(t.totalAmount.toFixed(2)),O=t.items.length>0,p=function(e){t.removeItem(e)},h=function(e){t.addItem(e),o(!1)},f=Object(i.jsx)("ul",{className:$.a["cart-items"],children:t.items.map((function(e){return Object(i.jsx)(q,{name:e.name,amount:e.amount,price:e.price,changable:!0,onRemove:p.bind(null,e.id),onAdd:h.bind(null,e)},e.id)}))});function x(){return(x=Object(C.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(""),o(!0);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(C.a)(y.a.mark((function e(n){var a,c,r,s,l,u,j;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in o(!1),a=[],n)a.push(n[c]);return r=a[0],s=a[1],l=a[2],u=a[3],j={id:Date.now(),name:r,street:s,postal:l,city:u},e.next=7,fetch("https://react-http-467cc-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({order:t.items,user:j}),headers:{"Content-Type":"application/json"}});case 7:e.sent.ok&&(t.clearItems(),b(Object(i.jsx)("p",{className:$.a.sent,children:"Your order was updated"})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}$.a.sent;return Object(i.jsxs)(J,{onClose:e.onClose,children:[f,Object(i.jsxs)("div",{className:$.a.total,children:[Object(i.jsx)("span",{children:"Total Amount"}),Object(i.jsx)("span",{children:m})]}),!c&&Object(i.jsxs)("div",{className:$.a.actions,children:[Object(i.jsx)("button",{className:$.a["button--alt"],onClick:e.onClose,children:"Close"}),O&&Object(i.jsx)("button",{onClick:function(){return x.apply(this,arguments)},className:$.a.button,children:"Order"})]}),d,c&&Object(i.jsx)(G,{onCancel:function(t){t.preventDefault(),e.onClose()},onConfirm:function(e){return _.apply(this,arguments)}})]})},ee=n(17),te={items:[],totalAmount:0},ne=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(v.a)(Object(v.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ee.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,i=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[i],u=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(v.a)(Object(v.a)({},l),{},{amount:l.amount-1});(o=Object(ee.a)(e.items))[i]=j}return{items:o,totalAmount:u}}return t.type,te},ae=function(e){var t=Object(s.useReducer)(ne,te),n=Object(r.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearItems:function(){c({type:"CLEAR"})}};return Object(i.jsx)(u.Provider,{value:o,children:e.children})},ce=n(16),re=function(e){var t=Object(s.useState)([]),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(!1),l=Object(r.a)(o,2),u=l[0],j=l[1],d=Object(s.useState)(""),b=Object(r.a)(d,2),m=b[0],O=b[1];function p(){return(p=Object(C.a)(y.a.mark((function e(){var t,n,a,r,s,o,i,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,fetch("https://react-http-467cc-default-rtdb.firebaseio.com/orders.json");case 4:return(t=e.sent).ok&&console.log("All right!"),e.next=8,t.json();case 8:for(s in n=e.sent,a=[],r=!1,n)if(n[s].user.name!==m||r||(r=!0),r){o=Object(ce.a)(n[s].order);try{for(o.s();!(i=o.n()).done;)l=i.value,a.push(Object(v.a)({},l))}catch(u){o.e(u)}finally{o.f()}c(a)}e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.message);case 17:j(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NOT_SECRET_CODE:"buenas"}));var h,f=0,x=Object(ce.a)(a);try{for(x.s();!(h=x.n()).done;){var _=h.value;f+=_.price*_.amount}}catch(N){x.e(N)}finally{x.f()}var g=f;return Object(i.jsxs)(J,{onClose:e.onClose,children:[u?Object(i.jsx)("p",{children:"Loading..."}):Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Search to see your orders!"}),Object(i.jsx)("label",{children:"Name"}),Object(i.jsx)("input",{className:$.a.inputfetch,onChange:function(e){O(e.target.value)},value:m}),m.length>3&&0===a.length&&Object(i.jsx)("button",{className:$.a.buttonf,onClick:function(){return p.apply(this,arguments)},children:"Fetch orders"})]}),Object(i.jsx)("ul",{className:$.a["cart-items"],children:a.map((function(e){return Object(i.jsx)(q,{name:e.name,amount:e.amount,price:e.price,changable:!1},e.key)}))}),Object(i.jsxs)("div",{className:$.a.total,children:[Object(i.jsx)("span",{children:"Total Amount"}),Object(i.jsx)("span",{children:g})]}),Object(i.jsx)("div",{className:$.a.actions,children:Object(i.jsx)("button",{onClick:e.onClose,className:$.a.button,children:"Close"})})]})};var se=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),o=Object(r.a)(c,2),l=o[0],u=o[1];return Object(i.jsxs)(ae,{children:[l&&Object(i.jsx)(re,{onClose:function(){u(!1)}}),n&&Object(i.jsx)(X,{onClose:function(){a(!1)}}),Object(i.jsx)(h,{onShowOrders:function(){u(!0)},onShowCart:function(){a(!0)}}),Object(i.jsx)("main",{children:Object(i.jsx)(L,{})})]})};c.a.render(Object(i.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.d3a367f9.chunk.js.map