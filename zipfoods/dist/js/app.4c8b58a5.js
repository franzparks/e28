(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1f02":function(e,t,r){e.exports=r.p+"img/driscolls-strawberries.418d31d2.jpg"},"23a0":function(e,t,r){e.exports=r.p+"img/eggo-nutri-grain-whole-wheat-waffles.baf64196.jpg"},"2ef8":function(e,t,r){e.exports=r.p+"img/gotham-greens-lettuce-medley.08a0e118.jpg"},"3ae3":function(e,t,r){},"3b07":function(e,t,r){e.exports=r.p+"img/birds-eye-vegetable-mix.7226e9df.jpg"},"46e5":function(e,t,r){"use strict";var a=r("3ae3"),n=r.n(a);n.a},"4c00":function(e,t,r){e.exports=r.p+"img/gold-medal-flour.793712c2.jpg"},"4f35":function(e,t,r){e.exports=r.p+"img/image-not-available.549b729b.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("img",{attrs:{alt:"ZipFoods logo",id:"logo",src:r("58dd")}}),a("nav",[a("ul",e._l(e.links,(function(t){return a("li",{key:t},[a("router-link",{attrs:{to:{name:t},exact:""}},[e._v(" "+e._s(t)+" "),"cart"==t?a("span",[e._v("("+e._s(e.cartCount)+")")]):e._e()])],1)})),0)]),a("router-view")],1)},o=[],i=(r("7db0"),r("4160"),r("159b"),r("96cf"),r("1da1")),s=r("d4ec"),c=r("bee2"),u=r("59ca"),l=(r("e71f"),function(){function e(t){Object(s["a"])(this,e),u["initializeApp"]({apiKey:t.apiKey,authDomain:t.projectId+".firebaseapp.com",databaseURL:"https://"+t.projectId+".firebaseio.com",projectId:t.projectId}),this.api=u["firestore"]()}return Object(c["a"])(e,[{key:"find",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,"==",a).get();case 3:return n=e.sent,e.abrupt("return",n.docs.shift().data());case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,a){return e.apply(this,arguments)}return t}()},{key:"filter",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,a,n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,a,n).get();case 3:return o=e.sent,e.abrupt("return",o.docs);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,a,n){return e.apply(this,arguments)}return t}()},{key:"get",value:function(e,t){return this.find(e,"id",t)}},{key:"all",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={},e.next=3,this.api.collection(t).get();case 3:return a=e.sent,a.forEach((function(e){r[e.id]=e.data()})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).add(r);case 3:return a=e.sent,e.abrupt("return",a.id);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error adding document: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(e,t){this.api.collection(e).doc(t).delete()}}]),e}()),p=(r("c975"),r("a434"),r("b64b"),function(){function e(){Object(s["a"])(this,e);var t=localStorage.getItem("cart");this.items=t?JSON.parse(t):[]}return Object(c["a"])(e,[{key:"getItems",value:function(){return this.items}},{key:"count",value:function(){for(var e=0,t=0,r=Object.keys(this.items);t<r.length;t++){var a=r[t];e+=this.items[a].quantity}return e}},{key:"update",value:function(){localStorage.setItem("cart",JSON.stringify(this.items))}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.getItem(e);r?r.quantity+=t:this.items.push({slug:e,quantity:t}),this.update()}},{key:"remove",value:function(e){var t=this.getItem(e),r=this.items.indexOf(t);t&&(this.items.splice(r,1),this.update())}},{key:"getItem",value:function(e){return this.items.find((function(t){var r=t.slug;return r===e}))||null}}]),e}()),d={firebase:{apiKey:"AIzaSyADeuL1QnB0fpW5wkwaV3rf-HRQArK8GTM",projectId:"e28-zipfoods-sb-production"}};console.log("e28-zipfoods-sb-production");var f=new l({apiKey:d.firebase.apiKey,projectId:d.firebase.projectId}),h={name:"App",components:{},data:function(){return{links:["home","products","categories","add a product","cart"]}},mounted:function(){var e=new p;this.$store.commit("setCartCount",e.count()),this.$store.dispatch("setProducts")},computed:{cartCount:function(){return this.$store.state.cartCount}}},g=h,m=(r("5c0b"),r("2877")),v=Object(m["a"])(g,n,o,!1,null,null,null),b=v.exports,y=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Admin")]),r("em",[e._v(" Disclaimer: This functionality is for demonstration purposes only. In a real-world application, this functionality must be locked down to administrators only, and seeding is not typically done via a client-side interface. ")]),r("button",{on:{click:e.clearApi}},[e._v("Clear API")]),r("button",{on:{click:e.seedApi}},[e._v("Seed API")]),e.message?r("div",{staticClass:"alert"},[e._v(e._s(e.message))]):e._e()])},_=[],k=[{slug:"driscolls-strawberries",name:"Driscoll’s Strawberries",description:"Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.",price:4.99,available:0,weight:1,perishable:!0,categories:["produce","fruits"]},{slug:"nestle-toll-house-cookie-dough",name:"Nestle Toll House Cookie Dough",description:"Get the classic taste that America loves in a ready to bake dough. Full of our famous morsels, these cookies deliver the chocolate flavor you’ve come to expect from Nestle Toll House.",price:7.49,available:325,weight:2.25,perishable:!0,categories:["snacks","baking"]},{slug:"gotham-greens-lettuce-medley",name:"Gotham Greens Gourmet Lettuce Medley",description:"This lovely blend features Gotham Greens’ Tropicana green leaf, Red Sail red leaf, Oak leaf, Lollo Rossa and tender Butterhead lettuces. Perfect for a colorful salad that's (almost) grown right in your own backyard!",price:3.49,available:10,weight:.3,perishable:!0,categories:["produce","vegetables"]},{slug:"gold-medal-flour",name:"Gold Medal All Purpose Flour",description:"All-purpose bleached flour is great for just about everything but doesn’t add any color. It’s perfect for baked goods like white sandwich bread and cake.",price:2.09,available:299,weight:2,perishable:!1,categories:["baking"]},{slug:"honey-nut-cheerios",name:"Honey Nut Cheerios",description:"You already know that Honey Nut Cheerios Naturally Flavored has the irresistible taste of golden honey, making it a family favorite. Something that everyone can smile about! ",price:3.99,available:400,weight:.68,perishable:!1,categories:["breakfast"]},{slug:"eggo-nutri-grain-whole-wheat-waffles",name:"Eggo Nutri-Grain Whole Wheat Waffles",description:"Eggo® Nutri-Grain® waffles made with whole wheat have the same light and crispy texture as our original Eggo® Waffles, only with the added bonus of nutritious whole grain! ",price:3.79,available:236,weight:.25,perishable:!0,categories:["breakfast","frozen"]},{slug:"amys-cheese-pizza",name:"Amy’s Cheese Pizza",description:"The classic favorite, made with our savory pizza sauce and grated part-skim mozzarella cheese.",price:8.49,available:125,weight:.81,perishable:!0,categories:["frozen","snacks"]},{slug:"birds-eye-vegetable-mix",name:"Birds Eye Steamfresh Fresh Frozen Vegetable Mix",description:"Delicious Birds Eye vegetables in blends that are just right for side dishes and your recipes.",price:2.99,available:99,weight:.68,perishable:!0,categories:["frozen","vegetables"]},{slug:"bare-coconut-chips",name:"Bare Coconut Chips",description:"Simply made with coconuts, cane sugar, and sea salt.",price:4.99,available:3,weight:.21,perishable:!1,categories:["snacks"]},{slug:"snapple-peach-tea",name:"Snapple Peach Tea",description:"To Peach their own. Smooth Snapple tea, perfect peach flavor. We made it just for you from the Best Stuff on Earth.",price:12.99,available:4,weight:12,perishable:!1,categories:["beverages"]}],j={data:function(){return{message:"",collections:{products:k}}},methods:{clearApi:function(){var e=function(e){f.all(e).then((function(t){Object.keys(t).forEach((function(t){f.delete(e,t)}))}))};for(var t in this.collections)e(t);this.message="Clearing API"},seedApi:function(){for(var e in this.collections)for(var t in this.collections[e])f.add(e,this.collections[e][t]);this.message="Seeding API"}}},x=j,C=(r("46e5"),Object(m["a"])(x,w,_,!1,null,"7e788e86",null)),O=C.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"products"}},[r("h2",[e._v("Products")]),e._l(e.products,(function(e){return r("show-product",{key:e.id,attrs:{product:e}})}))],2)},$=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"product",attrs:{to:{name:"product",params:{slug:e.product.slug}}}},[r("div",{staticClass:"product-name"},[e._v(e._s(e.product.name))]),r("img",{staticClass:"product-thumb",attrs:{src:e.imageSrc}}),r("div",{staticClass:"product-price"},[e._v("$"+e._s(e.product.price))])])},A=[],E={props:["product"],data:function(){return{}},computed:{imageSrc:function(){try{return r("634a")("./"+this.product.slug+".jpg")}catch(e){return r("4f35")}}}},z=E,I=Object(m["a"])(z,S,A,!1,null,"30f2484e",null),N=I.exports,T={components:{"show-product":N},data:function(){return{}},computed:{products:function(){return this.$store.state.products}}},R=T,D=Object(m["a"])(R,P,$,!1,null,"31766b6c",null),F=D.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Categories")]),r("ul",{staticClass:"cleanList"},e._l(e.categories,(function(t,a){return r("li",{key:a},[e._v(e._s(t))])})),0)])},B=[],L=(r("99af"),r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("2909")),M={data:function(){return{}},computed:{categories:function(){var e=this,t=[];Object.keys(this.products).map((function(r){t.push(e.products[r].categories)}));var r=[].concat.apply([],t);return Object(L["a"])(new Set(r)).sort()},products:function(){return this.$store.state.products}}},W=M,q=Object(m["a"])(W,G,B,!1,null,"248f1f70",null),K=q.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.")]),r("show-featured",{attrs:{category:e.featuredCategory}})],1)},J=[],U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"featured"}},[r("h2",[e._v("Featured Products")]),r("ul",{staticClass:"cleanList"},e._l(e.featuredProducts,(function(t){return r("li",{key:t.id},[e._v(e._s(t.name))])})),0)])},Y=[],Q=(r("caad"),r("2532"),{props:["category"],data:function(){return{}},computed:{featuredProducts:function(){var e=this,t=[];return Object.keys(this.products).map((function(r){e.products[r].categories&&e.products[r].categories.includes(e.category)&&t.push(e.products[r])})),t},products:function(){return this.$store.state.products}}}),V=Q,Z=Object(m["a"])(V,U,Y,!1,null,"3b272117",null),X=Z.exports,ee={components:{"show-featured":X},data:function(){return{featuredCategory:"snacks"}}},te=ee,re=Object(m["a"])(te,H,J,!1,null,"7ef11c56",null),ae=re.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.product?r("div",{attrs:{id:"product-page"}},[r("h1",[e._v(e._s(e.product.name))]),r("img",{staticClass:"product-thumb",attrs:{alt:"Product image of  "+e.product.name,src:e.imageSrc}}),r("p",{staticClass:"description"},[e._v(e._s(e.product.description))]),r("div",{staticClass:"price"},[e._v("$"+e._s(e.product.price))]),r("button",{on:{click:function(t){return e.addToCart(e.slug)}}},[e._v("Add to cart")]),r("transition",{attrs:{name:"fade"}},[e.addAlert?r("div",{staticClass:"alert"},[e._v("Your cart has been updated!")]):e._e()]),r("router-link",{attrs:{to:{name:"products"}}},[e._v("← Return to all products")])],1):e._e()},oe=[],ie={name:"",props:["slug"],data:function(){return{addAlert:!1}},computed:{product:function(){return this.$store.getters.getProductBySlug(this.slug)},imageSrc:function(){try{return r("634a")("./"+this.product.slug+".jpg")}catch(e){return r("4f35")}}},methods:{addToCart:function(e){var t=this,r=new p;r.add(e),this.$store.commit("updateCartCount",1),this.addAlert=!0,setTimeout((function(){return t.addAlert=!1}),3e3)}}},se=ie,ce=Object(m["a"])(se,ne,oe,!1,null,"f4574af0",null),ue=ce.exports,le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Add a Product")]),r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.name,expression:"product.name"}],attrs:{type:"text",id:"name"},domProps:{value:e.product.name},on:{input:function(t){t.target.composing||e.$set(e.product,"name",t.target.value)}}}),r("label",{attrs:{for:"slug"}},[e._v("URL Identifier:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.slug,expression:"product.slug"}],attrs:{type:"text",id:"slug"},domProps:{value:e.product.slug},on:{input:function(t){t.target.composing||e.$set(e.product,"slug",t.target.value)}}}),r("label",{attrs:{for:"price"}},[e._v("Price:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.price,expression:"product.price"}],attrs:{type:"text",id:"price"},domProps:{value:e.product.price},on:{input:function(t){t.target.composing||e.$set(e.product,"price",t.target.value)}}}),r("label",{attrs:{for:"available"}},[e._v("Quantity available:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.available,expression:"product.available"}],attrs:{type:"text",id:"available"},domProps:{value:e.product.available},on:{input:function(t){t.target.composing||e.$set(e.product,"available",t.target.value)}}}),r("label",{attrs:{for:"weight"}},[e._v("Weight (in lbs):")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.weight,expression:"product.weight"}],attrs:{type:"text",id:"weight"},domProps:{value:e.product.weight},on:{input:function(t){t.target.composing||e.$set(e.product,"weight",t.target.value)}}}),r("label",{attrs:{for:"perishable"}},[e._v("Perishable?")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.perishable,expression:"product.perishable"}],attrs:{type:"checkbox",id:"perishable"},domProps:{checked:Array.isArray(e.product.perishable)?e._i(e.product.perishable,null)>-1:e.product.perishable},on:{change:function(t){var r=e.product.perishable,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&e.$set(e.product,"perishable",r.concat([o])):i>-1&&e.$set(e.product,"perishable",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.product,"perishable",n)}}}),r("label",{attrs:{for:"description"}},[e._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.product.description,expression:"product.description"}],attrs:{id:"description"},domProps:{value:e.product.description},on:{input:function(t){t.target.composing||e.$set(e.product,"description",t.target.value)}}}),r("input",{attrs:{type:"submit",value:"Add"},on:{click:function(t){return t.preventDefault(),e.addProduct(t)}}}),r("transition",{attrs:{name:"fade"}},[e.added?r("div",{staticClass:"alert"},[e._v("Your product was added!")]):e._e()])],1)},pe=[],de={data:function(){return{added:!1,product:{name:"",slug:"",price:"",available:"",weight:"",perishable:!1,description:""}}},methods:{addProduct:function(){var e=this;f.add("products",this.product).then((function(){e.added=!0,setTimeout((function(){return e.added=!1}),3e3),e.product={name:"",slug:"",price:"",available:"",weight:"",perishable:!1,description:""}}))}}},fe=de,he=(r("6ec6"),Object(m["a"])(fe,le,pe,!1,null,"09c389c4",null)),ge=he.exports,me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"cart-page"}},[r("h1",[e._v("Your Cart")]),0==e.items.length?r("div",[e._v("No items")]):e._e(),e.products?r("ul",{staticClass:"cleanList"},e._l(e.items,(function(t){return r("li",{key:t.slug},[e._v(" "+e._s(t.quantity)+" x "+e._s(e.getProductDetails(t.slug).name)+" "),r("button",{on:{click:function(r){return e.removeFromCart(t.slug,t.quantity)}}},[e._v("Remove")])])})),0):e._e()])},ve=[],be={data:function(){return{items:[],cart:null}},mounted:function(){this.cart=new p,this.items=this.cart.getItems()},methods:{getProductDetails:function(e){for(var t=0,r=Object.keys(this.products);t<r.length;t++){var a=r[t];if(this.products[a].slug==e)return this.products[a]}},removeFromCart:function(e,t){this.cart.remove(e),this.$store.commit("updateCartCount",-t)}},computed:{products:function(){return this.$store.state.products}}},ye=be,we=Object(m["a"])(ye,me,ve,!1,null,null,null),_e=we.exports,ke=r("2f62");a["a"].use(ke["a"]);var je=new ke["a"].Store({state:{cartCount:0,products:[]},mutations:{setCartCount:function(e,t){e.cartCount=t},updateCartCount:function(e,t){e.cartCount+=t},updateProducts:function(e,t){e.products=t}},actions:{setProducts:function(e){f.all("products").then((function(t){e.commit("updateProducts",t)}))}},getters:{getProductBySlug:function(e){return function(t){for(var r=0,a=Object.keys(e.products);r<a.length;r++){var n=a[r];if(e.products[n].slug==t)return e.products[n]}}}}});a["a"].use(y["a"]),a["a"].config.productionTip=!1;var xe=[{path:"/",component:ae,name:"home"},{path:"/admin",component:O,name:"admin"},{path:"/products",component:F,name:"products"},{path:"/product/:slug",component:ue,name:"product",props:!0},{path:"/categories",component:K,name:"categories"},{path:"/products/create",component:ge,name:"add a product"},{path:"/cart",component:_e,name:"cart"}],Ce=new y["a"]({routes:xe,mode:"history"});new a["a"]({store:je,router:Ce,render:function(e){return e(b)}}).$mount("#app")},"58dd":function(e,t,r){e.exports=r.p+"img/zipfoods-logo.a23a3a29.png"},"5c0b":function(e,t,r){"use strict";var a=r("9c0c"),n=r.n(a);n.a},"5eb9":function(e,t,r){},"634a":function(e,t,r){var a={"./amys-cheese-pizza.jpg":"8bcd","./bare-coconut-chips.jpg":"ba90","./birds-eye-vegetable-mix.jpg":"3b07","./driscolls-strawberries.jpg":"1f02","./eggo-nutri-grain-whole-wheat-waffles.jpg":"23a0","./gold-medal-flour.jpg":"4c00","./gotham-greens-lettuce-medley.jpg":"2ef8","./honey-nut-cheerios.jpg":"f9e0","./image-not-available.jpg":"4f35","./nestle-toll-house-cookie-dough.jpg":"c905","./snapple-peach-tea.jpg":"88c8"};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="634a"},"6ec6":function(e,t,r){"use strict";var a=r("5eb9"),n=r.n(a);n.a},"88c8":function(e,t,r){e.exports=r.p+"img/snapple-peach-tea.410f9d36.jpg"},"8bcd":function(e,t,r){e.exports=r.p+"img/amys-cheese-pizza.491e93f2.jpg"},"9c0c":function(e,t,r){},ba90:function(e,t,r){e.exports=r.p+"img/bare-coconut-chips.16db8a64.jpg"},c905:function(e,t,r){e.exports=r.p+"img/nestle-toll-house-cookie-dough.f2dfb55e.jpg"},f9e0:function(e,t,r){e.exports=r.p+"img/honey-nut-cheerios.baffccef.jpg"}});
//# sourceMappingURL=app.4c8b58a5.js.map