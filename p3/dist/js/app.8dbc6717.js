(function(e){function t(t){for(var r,a,o=t[0],u=t[1],c=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,o=1;o<i.length;o++){var u=i[o];0!==n[u]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},n={app:0},s=[];function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=u;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"20e5":function(e,t,i){},5460:function(e,t,i){e.exports=i.p+"img/quesadillas.59702210.jpg"},"549b":function(e,t,i){e.exports=i.p+"img/strawberry-muffins.be5b50bf.jpg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Recipe Book logo",id:"logo",src:i("6100")}}),r("nav",[r("ul",e._l(e.links,(function(t){return r("li",{key:t},[r("router-link",{attrs:{to:{name:t},exact:""}},[e._v(" "+e._s(t)+" "),"shoppingList"==t?r("span",[e._v("("+e._s(e.shoppingListCount)+")")]):e._e(),"favoritesList"==t?r("span",[e._v("("+e._s(e.favoritesListCount)+")")]):e._e()])],1)})),0)]),r("router-view")],1)},s=[],a=(i("7db0"),i("4160"),i("159b"),i("96cf"),i("1da1")),o=i("d4ec"),u=i("bee2"),c=i("59ca"),p=(i("e71f"),function(){function e(t){Object(o["a"])(this,e),c["initializeApp"]({apiKey:t.apiKey,authDomain:t.projectId+".firebaseapp.com",databaseURL:"https://"+t.projectId+".firebaseio.com",projectId:t.projectId}),this.api=c["firestore"]()}return Object(u["a"])(e,[{key:"find",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,i,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(i,"==",r).get();case 3:return n=e.sent,e.abrupt("return",n.docs.shift().data());case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,i,r){return e.apply(this,arguments)}return t}()},{key:"filter",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,i,r,n){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(i,r,n).get();case 3:return s=e.sent,e.abrupt("return",s.docs);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,i,r,n){return e.apply(this,arguments)}return t}()},{key:"get",value:function(e,t){return this.find(e,"id",t)}},{key:"all",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={},e.next=3,this.api.collection(t).get();case 3:return r=e.sent,r.forEach((function(e){i[e.id]=e.data()})),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,i){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).add(i);case 3:return r=e.sent,e.abrupt("return",r.id);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error adding document: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,i){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(e,t){this.api.collection(e).doc(t).delete()}}]),e}()),l=(i("c975"),i("a434"),i("b0c0"),i("b64b"),function(){function e(){Object(o["a"])(this,e);var t=localStorage.getItem("shoppingList");this.items=t?JSON.parse(t):[]}return Object(u["a"])(e,[{key:"getItems",value:function(){return this.items}},{key:"count",value:function(){for(var e=0,t=0,i=Object.keys(this.items);t<i.length;t++){var r=i[t];e+=this.items[r].quantity}return e}},{key:"update",value:function(){localStorage.setItem("shoppingList",JSON.stringify(this.items))}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e=this.normalizeName(e);var i=this.getItem(e);i?i.quantity+=t:this.items.push({name:e,quantity:t}),this.update()}},{key:"remove",value:function(e){var t=this.getItem(e),i=this.items.indexOf(t);t&&(this.items.splice(i,1),this.update())}},{key:"getItem",value:function(e){return this.items.find((function(t){var i=t.name;return i===e}))||null}},{key:"normalizeName",value:function(e){return e}}]),e}()),d=function(){function e(){Object(o["a"])(this,e);var t=localStorage.getItem("favoritesList");this.items=t?JSON.parse(t):[]}return Object(u["a"])(e,[{key:"count",value:function(){return this.items.length}},{key:"update",value:function(){localStorage.setItem("favoritesList",JSON.stringify(this.items))}},{key:"add",value:function(e){var t=this.getItem(e);t||(this.items.push({slug:e}),this.update())}},{key:"remove",value:function(e){var t=this.getItem(e),i=this.items.indexOf(t);t&&(this.items.splice(i,1),this.update())}},{key:"getItem",value:function(e){return this.items.find((function(t){var i=t.slug;return i===e}))||null}},{key:"getItems",value:function(){return this.items}}]),e}(),f={firebase:{apiKey:"AIzaSyBiVFyAmIexbkQ60XlcxN0arHSpD6x_oIU",projectId:"e28-p2-76e95"}},m=new p({apiKey:f.firebase.apiKey,projectId:f.firebase.projectId}),v={name:"App",components:{},data:function(){return{links:["home","shoppingList","favoritesList","add a recipe"],favoritesList:null}},mounted:function(){var e=new l,t=new d;this.$store.commit("setShoppingListCount",e.count()),this.$store.commit("setFavoritesListCount",t.count()),this.$store.dispatch("setRecipes")},computed:{shoppingListCount:function(){return this.$store.state.shoppingListCount},favoritesListCount:function(){return this.$store.state.favoritesListCount}}},h=v,g=(i("5c0b"),i("2877")),b=Object(g["a"])(h,n,s,!1,null,null,null),_=b.exports,y=i("8c4f"),L=i("1dce"),j=i.n(L),k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("show-recipes")],1)},w=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("i",[e._v("A recipe book for all your favorite recipes")])])}],$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"recipes"}},[i("h2",[e._v("Recipes")]),e._l(e.recipes,(function(e){return i("show-recipe",{key:e.id,attrs:{recipe:e}})}))],2)},x=[],O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-link",{staticClass:"recipe",attrs:{to:{name:"recipe",params:{slug:e.recipe.slug}}}},[i("div",{staticClass:"recipe-name"},[e._v(e._s(e.recipe.name))]),i("img",{staticClass:"recipe-thumb",attrs:{src:e.imageSrc}}),i("div",{staticClass:"recipe-summary"},[e._v(e._s(e.recipe.summary))])])},C=[],S={props:["recipe"],data:function(){return{}},computed:{imageSrc:function(){try{return i("ca62")("./"+this.recipe.slug+".jpg")}catch(e){return i("82a1")}}}},I=S,R=Object(g["a"])(I,O,C,!1,null,"016291ac",null),E=R.exports,N={components:{"show-recipe":E},data:function(){return{}},computed:{recipes:function(){return this.$store.state.recipes}}},F=N,q=Object(g["a"])(F,$,x,!1,null,"5362d1c3",null),A=q.exports,P={components:{"show-recipes":A}},T=P,D=Object(g["a"])(T,k,w,!1,null,"a9c6e72e",null),J=D.exports,B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.recipe?i("div",{attrs:{id:"recipe-page"}},[i("h2",[e._v(e._s(e.recipe.name))]),i("img",{staticClass:"recipe-thumb",attrs:{alt:"Recipe image of  "+e.recipe.name,src:e.imageSrc}}),i("p",{staticClass:"description"},[e._v(e._s(e.recipe.summary))]),i("show-ingredients",{attrs:{ingredients:e.recipe.ingredients}}),i("button",{staticClass:"add-to-favs-list",on:{click:function(t){return e.addToFavoritesList(e.slug)}}},[e._v("Add recipe to favorites list")]),i("transition",{attrs:{name:"fade"}},[e.addAlert?i("div",{staticClass:"alert"},[e._v("Your favorites list has been updated!")]):e._e()]),i("router-link",{attrs:{to:{name:"home"}}},[e._v("← Return to all recipes")])],1):e._e()},K=[],M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"ingredients-page"}},[e.ingredients&&0!=e.ingredients.length?e._e():i("div",[e._v("No ingredients")]),this.ingredients?i("ul",{staticClass:"cleanList"},[i("h3",[e._v("Ingredients")]),i("transition",{attrs:{name:"fade"}},[e.addIngredient?i("div",{staticClass:"alert"},[e._v("Your recipe ingredient was added!")]):e._e()]),e._l(e.ingredients,(function(t){return i("li",{key:t},[i("p",[i("span",[e._v(e._s(t))]),i("span",[i("button",{staticClass:"ingredient",on:{click:function(i){return e.addToShoppingList(t)}}},[e._v("Add to cart")])])])])}))],2):e._e()])},U=[],Y={props:["ingredients"],data:function(){return{addIngredient:!1}},methods:{addToShoppingList:function(e){var t=this,i=new l;i.add(e),this.$store.commit("updateShoppingListCount",1),this.addIngredient=!0,setTimeout((function(){return t.addIngredient=!1}),1e3)}}},z=Y,H=Object(g["a"])(z,M,U,!1,null,null,null),Q=H.exports,V={name:"",props:["slug"],data:function(){return{addAlert:!1}},components:{"show-ingredients":Q},computed:{recipe:function(){return this.$store.getters.getRecipeBySlug(this.slug)},imageSrc:function(){try{return i("ca62")("./"+this.recipe.slug+".jpg")}catch(e){return i("82a1")}}},methods:{addToFavoritesList:function(e){var t=this,i=new d;i.add(e),this.$store.commit("updateFavoritesListCount",i.count()),this.addAlert=!0,setTimeout((function(){return t.addAlert=!1}),1e3)}}},X=V,G=Object(g["a"])(X,B,K,!1,null,"1d83dee4",null),W=G.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h2",[e._v("Add a Recipe")]),i("label",{attrs:{for:"name"}},[e._v("Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.recipe.name.$model,expression:"$v.recipe.name.$model"}],class:{"form-input-error":e.$v.recipe.name.$error},attrs:{type:"text","data-test":"recipe-name-input",id:"name"},domProps:{value:e.$v.recipe.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.recipe.name,"$model",t.target.value)}}}),e.$v.recipe.name.$error?i("div",[e.$v.recipe.name.required?e._e():i("div",{staticClass:"form-feedback-error"},[e._v("Name is required.")])]):e._e(),i("label",{attrs:{for:"slug"}},[e._v("URL Identifier:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.slug,expression:"recipe.slug"}],attrs:{type:"text",id:"slug"},domProps:{value:e.recipe.slug},on:{input:function(t){t.target.composing||e.$set(e.recipe,"slug",t.target.value)}}}),i("label",{attrs:{for:"description"}},[e._v("Description")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.description,expression:"recipe.description"}],attrs:{id:"description"},domProps:{value:e.recipe.description},on:{input:function(t){t.target.composing||e.$set(e.recipe,"description",t.target.value)}}}),i("input",{attrs:{type:"submit",value:"Add"},on:{click:function(t){return t.preventDefault(),e.addRecipe(t)}}}),e.$v.$anyError?i("div",{staticClass:"form-feedback-error"},[e._v("Please correct the above errors")]):e._e(),i("transition",{attrs:{name:"fade"}},[e._v(" data-test='recipe-added-confirmation' "),e.added?i("div",{staticClass:"alert"},[e._v("Your recipe was added!")]):e._e()])],1)},ee=[],te=(i("caad"),i("2532"),i("b5ae")),ie={data:function(){return{added:!1,recipe:{name:"",slug:"",summary:"",ingredients:[]}}},validations:{recipe:{name:{required:te["required"]},slug:{required:te["required"],minLength:Object(te["minLength"])(4),doesNotExist:function(e){return!this.$store.getters.getRecipeBySlug(e)}}}},methods:{addRecipe:function(){var e=this;this.$v.$touch(),0==this.$v.$anyError&&m.add("recipes",this.recipe).then((function(t){t.includes("Error")?alert(t):(e.$v.$reset(),e.added=!0,setTimeout((function(){return e.added=!1}),3e3),e.recipe={name:"",slug:"",summary:"",ingredients:[]})}))}}},re=ie,ne=(i("6f25"),Object(g["a"])(re,Z,ee,!1,null,"748817fe",null)),se=ne.exports,ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"shopping-page"}},[i("h1",[e._v("Your Ingredients Shopping List")]),0==e.items.length?i("div",[e._v("No items")]):e._e(),e.recipes?i("ul",{staticClass:"cleanList"},e._l(e.items,(function(t){return i("li",{key:t.name},[i("p",[i("span",[e._v("("+e._s(t.quantity)+") x "+e._s(t.name))]),i("span",[i("button",{staticClass:"remove-frm-list-btn",on:{click:function(i){return e.removeFromShoppingList(t.name,t.quantity)}}},[e._v("Remove")])])])])})),0):e._e()])},oe=[],ue={data:function(){return{items:[],shoppingList:null}},mounted:function(){this.shoppingList=new l,this.items=this.shoppingList.getItems()},methods:{removeFromShoppingList:function(e,t){this.shoppingList.remove(e),this.$store.commit("updateShoppingListCount",-t)}},computed:{recipes:function(){return this.$store.state.recipes}}},ce=ue,pe=Object(g["a"])(ce,ae,oe,!1,null,null,null),le=pe.exports,de=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"favorites-page"}},[i("h1",[e._v("Your Favorite Recipes")]),0==e.items.length?i("div",[e._v("No items")]):e._e(),e.recipes?i("ul",{staticClass:"cleanList"},e._l(e.items,(function(t){return i("li",{key:t.slug},[e._v(" "+e._s(e.getRecipeDetails(t.slug).name)+" "),i("button",{staticClass:"remove-frm-list-btn",on:{click:function(i){return e.removeFromFavoritesList(t.slug)}}},[e._v("Remove")])])})),0):e._e()])},fe=[],me={data:function(){return{items:[],favoritesList:null}},mounted:function(){this.favoritesList=new d,this.items=this.favoritesList.getItems()},methods:{getRecipeDetails:function(e){for(var t=0,i=Object.keys(this.recipes);t<i.length;t++){var r=i[t];if(this.recipes[r].slug==e)return this.recipes[r]}},removeFromFavoritesList:function(e){this.favoritesList.remove(e),this.$store.commit("updateFavoritesListCount",this.favoritesList.count())}},computed:{recipes:function(){return this.$store.state.recipes}}},ve=me,he=Object(g["a"])(ve,de,fe,!1,null,null,null),ge=he.exports,be=i("2f62");r["a"].use(be["a"]);var _e=new be["a"].Store({state:{shoppingListCount:0,favoritesListCount:0,recipes:[]},mutations:{setShoppingListCount:function(e,t){e.shoppingListCount=t},setFavoritesListCount:function(e,t){e.favoritesListCount=t},updateShoppingListCount:function(e,t){e.shoppingListCount+=t},updateFavoritesListCount:function(e,t){e.favoritesListCount=t},updateRecipes:function(e,t){e.recipes=t}},actions:{setRecipes:function(e){m.all("recipes").then((function(t){e.commit("updateRecipes",t)}))}},getters:{getRecipeBySlug:function(e){return function(t){for(var i=0,r=Object.keys(e.recipes);i<r.length;i++){var n=r[i];if(e.recipes[n].slug==t)return e.recipes[n]}}}}});r["a"].use(y["a"]),r["a"].use(j.a);var ye=[{path:"/",component:J,name:"home"},{path:"/recipe/:slug",component:W,name:"recipe",props:!0},{path:"/recipes/create",component:se,name:"add a recipe"},{path:"/shoppingList",component:le,name:"shoppingList"},{path:"/favoritesList",component:ge,name:"favoritesList"}],Le=new y["a"]({routes:ye,mode:"history"});new r["a"]({store:_e,router:Le,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var r=i("9c0c"),n=i.n(r);n.a},"5fa0":function(e,t,i){e.exports=i.p+"img/egg-salad.59702210.jpg"},6100:function(e,t,i){e.exports=i.p+"img/recipe-book-logo.6c8dc65d.jpg"},"6f25":function(e,t,i){"use strict";var r=i("20e5"),n=i.n(r);n.a},7378:function(e,t,i){e.exports=i.p+"img/quiche.2ad787e9.jpg"},8007:function(e,t,i){e.exports=i.p+"img/tartar-sauce.05f1f45b.jpg"},"82a1":function(e,t,i){e.exports=i.p+"img/image-not-available.549b729b.jpg"},"9c0c":function(e,t,i){},c88e:function(e,t,i){e.exports=i.p+"img/turkey-meatloaf.ee7d7f22.jpg"},ca62:function(e,t,i){var r={"./egg-salad.jpg":"5fa0","./image-not-available.jpg":"82a1","./quesadillas.jpg":"5460","./quiche.jpg":"7378","./strawberry-muffins.jpg":"549b","./tartar-sauce.jpg":"8007","./turkey-meatloaf.jpg":"c88e"};function n(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="ca62"}});
//# sourceMappingURL=app.8dbc6717.js.map