(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,n){e.exports=n(70)},45:function(e,t,n){},46:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),l=n.n(o),c=(n(45),n(33)),m=n(34),i=n(39),s=n(38),u=n(8),d=n(3),E=(n(46),n(2)),p=n.n(E),g=function(){return function(e){p.a.get("http://localhost:3000/memes").then((function(t){return e({type:"GET_MEMES",payload:t.data})}))}},h=n(71),f=n(4),v=function(){return{type:"NOTLOGGEDIN"}},b=function(e){return function(t){p.a.get("http://localhost:3000/user/checkauth",{headers:{Authorization:"Bearer "+e}}).then((function(e){200===e.status&&t({type:"LOGGEDIN",payload:e.data.Data.username})})).catch((function(e){if(e)throw console.log("Auth Error "),e;t(v)}))}},y={type:"MEME_DELETED"},_={type:"MEME_NOT_DELETED"},w=Object(f.b)((function(e){return{memesData:e.memes.memesData,isLoading:e.memes.isLoading,username:e.auth.username}}),(function(e){return{fetchMemes:function(){return e(g())},upvoteMeme:function(t){return e(function(e){return function(t){var n=e.target.getAttribute("data-id"),a=(new h.a).get("token");p.a.post("http://localhost:3000/memes/".concat(n,"/upvote"),null,{headers:{Authorization:"Bearer "+a}}).then((function(e){return t({type:"UPVOTE",payload:parseInt(e)})}))}}(t))},downvoteMeme:function(t){return e(function(e){return function(t){var n=e.target.getAttribute("data-id"),a=(new h.a).get("token");p.a.post("http://localhost:3000/memes/".concat(n,"/downvote"),null,{headers:{Authorization:"Bearer "+a}}).then((function(e){return t({type:"DOWNVOTE",payload:parseInt(e)})}))}}(t))},checkAuth:function(t){return e(b(t))},deleteMeme:function(t){return e(function(e){return function(t){var n=(new h.a).get("token");p.a.delete("http://localhost:3000/memes/".concat(e),{headers:{Authorization:"Bearer "+n}}).then((function(e){return t(y)})).catch((function(e){e&&t(_)}))}}(t))}}}))((function(e){e.dispatch;var t=e.checkAuth,n=e.memesData,o=e.isLoading,l=e.fetchMemes,c=e.upvoteMeme,m=e.downvoteMeme,i=e.username,s=e.deleteMeme;Object(a.useEffect)((function(){l()}),[n,l]);var d=new h.a;Object(a.useEffect)((function(){return t(d.get("token"))}),[d.get("token")]);var E=Object(u.g)(),p=function(e){null===i&&E.push("/login"),c(e)},g=function(e){m(e)},f=function(e){var t=e.target.getAttribute("data-id");s(t)};return r.a.createElement(a.Fragment,null,o?null:n.map((function(e,t){return r.a.createElement("div",{className:"col-md-4 col-sm-6 col-12",key:t},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,e.name)),r.a.createElement("img",{id:e._id,key:t,alt:"meme-img",className:"card-img-top",src:e.image}),r.a.createElement("div",{className:"card-body"},e.upvoted_users.includes(i)?r.a.createElement(a.Fragment,null,r.a.createElement("span",{id:"upvote_icon","data-id":e._id,onClick:p,role:"img","aria-label":"upvote",style:{textShadow:"0 0 0 #d39e00",color:"transparent"},"data-toggle":"modal","data-target":"#myModal"},"\ud83d\udc4d")," ",r.a.createElement("span",null,e.upvotes," ")):r.a.createElement(a.Fragment,null,r.a.createElement("span",{id:"upvote_icon","data-id":e._id,onClick:p,role:"img","aria-label":"upvote"},"\ud83d\udc4d")," ",r.a.createElement("span",null,e.upvotes," ")),e.downvoted_users.includes(i)?r.a.createElement(a.Fragment,null,r.a.createElement("span",{id:"downvote_icon","data-id":e._id,role:"img",onClick:g,"aria-label":"downvote",style:{textShadow:"0 0 0 #d39e00",color:"transparent"}},"\ud83d\udc4e"),r.a.createElement("span",null,e.downvotes," ")):r.a.createElement(a.Fragment,null,r.a.createElement("span",{id:"downvote_icon","data-id":e._id,onClick:g,role:"img","aria-label":"downvote"},"\ud83d\udc4e"),r.a.createElement("span",null,e.downvotes," ")),r.a.createElement("button",{style:{padding:"6px"},className:"btn btn-info",onClick:function(){E.push("memes/".concat(e._id))}},"Info"),e.author===i?r.a.createElement("button",{"data-id":e._id,onClick:f,style:{padding:"6px",marginLeft:"6px"},className:"btn btn-danger"},"Delete"):null)))})))})),O=(n(69),function(){return{type:"POST_MEME"}}),N=Object(f.b)((function(e){return{isLogged:e.auth.isLogged_Main,username:e.auth.username}}),(function(e){return{postMeme:function(t){return e(function(e){return function(t){var n=new FormData(e.target),a=(new h.a).get("token");p.a.post("http://localhost:3000/memes",n,{headers:{Authorization:"Bearer "+a}}).then((function(){return t(O)}))}}(t))},checkAuth:function(t){return e(b(t))}}}))((function(e){var t=e.postMeme,n=(e.isPosted,e.isLogged),o=(e.username,e.checkAuth),l=new h.a;Object(a.useEffect)((function(){return o(l.get("token"))}),[l,o]);var c=Object(u.g)();return r.a.createElement("div",{id:"post_meme_form"},n?r.a.createElement(a.Fragment,null,r.a.createElement("h3",null,"POST MEME"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(e),c.push("/")}},r.a.createElement("input",{className:"d-block",placeholder:"Name",name:"name"}),r.a.createElement("input",{className:"d-block",placeholder:"Meme URL",name:"image"}),r.a.createElement("textarea",{className:"d-block",placeholder:"Description",name:"description"}),r.a.createElement("button",{className:"btn btn-primary"},"Submit"))):r.a.createElement(a.Fragment,null,r.a.createElement(u.a,{to:{pathname:"/login",state:{error:"Please sign in before posting memes",remind_to_login:!0}}})))})),M=Object(f.b)((function(e){return{isLogged:e.auth.isLogged_Main,username:e.auth.username}}))((function(e){var t=e.dispatch,n=e.isLogged,o=e.username,l=new h.a;Object(a.useEffect)((function(){return t(b(l.get("token")))}),[t,l]);return r.a.createElement("div",{id:"user_buttons"},n?r.a.createElement(a.Fragment,null,r.a.createElement("button",{className:"btn btn-warning",onClick:function(){l.remove("token",{path:"/"}),t(v),window.location.reload()}},"Logout"),r.a.createElement("span",null,"Hello, ",o)):r.a.createElement(a.Fragment,null,r.a.createElement(d.b,{to:"/register"},r.a.createElement("button",{className:"btn btn-danger"},"Register")),r.a.createElement(d.b,{to:"/login"},r.a.createElement("button",{className:"btn btn-success"},"Login"))))})),D=Object(f.b)((function(e){return{isLoggedin:e.login.isLogged,user:e.login.user,attempt:e.login.attempt}}))((function(e){var t=e.dispatch,n=e.isLoggedin,o=(e.user,e.attempt),l=Object(u.h)(),c=Object(u.g)();Object(a.useEffect)((function(){n?c.goBack():o&&c.push({pathname:"/login"})}),[n,o,c]);return r.a.createElement("div",{id:"login_form"},l.state&&l.state.remind_to_login?r.a.createElement("p",{style:{color:"red",fontStyle:"italic"}},l.state.error):null,o?r.a.createElement(a.Fragment,null,r.a.createElement("p",{style:{color:"red",fontStyle:"italic"}},"Incorrect password/email")," "):null,r.a.createElement("h3",{style:{textAlign:"center"}},"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t((function(e){p.a.post("http://localhost:3000/user/login",{email:document.getElementById("email").value,password:document.getElementById("password").value}).then((function(t){(new h.a).set("token",t.data.token,{path:"/"}),e({type:"LOGGEDIN",payload:t.data.username})})).catch((function(t){var n;t&&e({type:"NOT_LOGGEDIN",payload:n})}))}))}},r.a.createElement("label",{htmlFor:"email"},"Email: "),r.a.createElement("input",{id:"email",name:"email",placeholder:"Email"}),r.a.createElement("label",{htmlFor:"password"},"Passowrd: "),r.a.createElement("input",{id:"password",name:"password",placeholder:"Password"}),r.a.createElement(d.b,{to:"/register"},r.a.createElement("p",null,"Don't have an account yet?")),r.a.createElement("button",{className:"btn btn-primary"},"Submit")))})),L=Object(f.b)((function(e){return{isRegistered:e.register.isRegistered,user:e.register.user}}))((function(e){var t=e.dispatch,n=(e.isRegistered,e.user,Object(u.g)());return r.a.createElement("div",{id:"register_form"},r.a.createElement("h3",null,"Register"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t((function(e){p.a.post("http://localhost:3000/user/register",{username:document.getElementById("username").value,email:document.getElementById("email").value,password:document.getElementById("password").value}).then((function(t){return e({type:"REGISTERED",payload:t.data})}))})),n.push("/")}},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{id:"username",name:"username",placeholder:"Username"}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",name:"email",placeholder:"Email"}),r.a.createElement("label",{htmlFor:"password"},"Passowrd"),r.a.createElement("input",{id:"password",name:"password",placeholder:"Password"}),r.a.createElement(d.b,{to:"/login"},r.a.createElement("p",null,"Already have an account?")),r.a.createElement("button",{className:"btn btn-primary"},"Submit")))})),k={type:"COMMENT_DELETE"},T={type:"COMMENT_DELETE_ERROR"},C=function(e){e.target.firstElementChild&&(e.target.firstElementChild.style.display="initial",e.target.firstElementChild.focus())},S=function(){for(var e=document.getElementsByClassName("comment_delete_modal").length,t=0;t<e;t++)document.getElementsByClassName("comment_delete_modal")[t].style.display="none"},I=Object(f.b)((function(e){return{memesData:e.memes.memesData,isLoading:e.memes.isLoading,username:e.auth.username,posted:e.comment.posted,failure:e.comment.failure,error_msg:e.comment.error_msg,comment_deleted:e.comment_deletion.comment_deleted}}),(function(e){return{fetchMemes:function(){return e(g())},checkAuth:function(t){return e(b(t))},postComment:function(t,n){return e(function(e,t){return function(n){var a=(new h.a).get("token");p.a.post("http://localhost:3000/memes/".concat(t,"/comments"),{comment:e},{headers:{Authorization:"Bearer "+a}}).then((function(e){return n({type:"SUCCESS_COMMENT"})})).catch((function(e){return n({type:"FALIURE_COMMENT_LOGIN_NEED",payload:e.message})}))}}(t,n))},deleteComment:function(t,n){return e(function(e,t){return function(n){var a=(new h.a).get("token");p.a.delete("http://localhost:3000/memes/".concat(e,"/comments/").concat(t),{headers:{Authorization:"Bearer "+a}}).then((function(e){return n(k)})).catch((function(e){e&&n(T)}))}}(t,n))}}}))((function(e){var t=e.memesData,n=e.fetchMemes,o=e.username,l=e.match,c=e.postComment,m=e.posted,i=e.failure,s=e.error_msg,u=e.deleteComment;e.comment_deleted;Object(a.useEffect)((function(){n()}),[t,n]),Object(a.useEffect)((function(){i&&(document.getElementById("comment_error").innerText=s),null!=o&&i&&(document.getElementById("comment_error").innerText=""),m&&window.location.reload()}),[i,m,o]);var d=function(){var e=document.getElementById("comment_text").value;c(e,l.params.id)},E=function(e){var t=e.target.getAttribute("data-commentid"),n=e.target.getAttribute("data-memeid");u(n,t)};return r.a.createElement("div",{id:"meme_detail"},t.map((function(e,t){if(e._id.toString()===l.params.id)return r.a.createElement(a.Fragment,{key:t},r.a.createElement("div",{className:"col-12 col-sm-8 offset-sm-2"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,e.name)),r.a.createElement("img",{alt:"meme",key:t,src:e.image}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{style:{fontStyle:"italic"}},"Description: \xa0",e.description),r.a.createElement("p",{style:{fontStyle:"italic"}},"Uploader: \xa0",e.author),r.a.createElement("p",{style:{fontStyle:"italic"}},"Date: \xa0",e.date.slice(0,10)," ")),r.a.createElement("div",{className:"card-body",id:"comment_section"},r.a.createElement("textarea",{id:"comment_text",onChange:function(){document.getElementById("comment_button").style.display="initial"},placeholder:"..Comment"})," ",r.a.createElement("p",{id:"comment_error",style:{color:"red",fontStyle:"italic"}}),r.a.createElement("input",{type:"button",value:"Submit",id:"comment_button",onClick:d}),e.comments.map((function(t,n){return r.a.createElement("p",{key:n},r.a.createElement("span",{id:"commenters"},t.commenter)," ",r.a.createElement("br",null)," ",t.commenter===o?r.a.createElement(a.Fragment,null,r.a.createElement("span",{onClick:C,style:{float:"right"}},"\xd7",r.a.createElement("span",{tabIndex:"0",onBlur:S,className:"comment_delete_modal","data-commentid":t._id,"data-memeid":e._id,onClick:E},"Delete"))):null,r.a.createElement("span",{style:{fontSize:"0.75rem"}},"\ud83d\udd50 ",t.date.slice(0,10)),r.a.createElement("br",null),t.content)}))))))})))})),j=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).exitButton=function(){document.getElementById("contact-form").style.display="none"},e.hiddenForm=function(){document.getElementById("contact-form").style.display="none",window.location.reload()},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{alt:"LOGO",src:"logo.png"}))),r.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},r.a.createElement(d.b,{to:"/postmeme"},r.a.createElement("button",{className:"btn btn-success",id:"addButton"},"+ Add meme"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/register",component:L}),r.a.createElement(u.b,{path:"/login",component:D}),r.a.createElement(u.b,{path:"/postmeme",component:N}),r.a.createElement(u.b,{exact:!0,path:"/memes/:id",component:I}))),r.a.createElement("div",{className:"row",style:{display:"inherit"}},r.a.createElement("div",{className:"card-deck"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:w}))))),r.a.createElement("div",{style:{borderTop:"1px solid #0000001a",textAlign:"center"}},"\xa9 2020 Copyright - Barney Shi"))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(13),A=n(37),G=n(10),R={memesData:[],isLoading:!0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MEMES":return Object(G.a)({},e,{isLoading:!1,memesData:t.payload});default:return e}},F={isPosted:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_MEME":return Object(G.a)({},e,{isPosted:!0});default:return e}},U={isUpvoted:!1,upVotes:0},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPVOTE":return Object(G.a)({},e,{isUpvoted:!0,upVotes:t.payload});default:return e}},V={isDownvoted:!1,downVotes:0},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DOWNVOTE":return Object(G.a)({},e,{isDownvoted:!0});default:return e}},J={isLogged_Main:!1,username:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGEDIN":return{isLogged_Main:!0,username:t.payload};case"NOTLOGGEDIN":return{isLogged_Main:!1,user:null};default:return e}},$={isRegistered:!1,user:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTERED":return{isRegistered:!0,user:t.payload};case"NOT_REGISTER":return{isRegistered:!1};default:return e}},K={isLogged:!1,username:[],attempt:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGEDIN":return{isLogged:!0};case"NOT_LOGGEDIN":return{isLogged:!1,username:null,attempt:!0};default:return e}},X={posted:!1,failure:!1,error_msg:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS_COMMENT":return{posted:!0,failure:!1,error_msg:"123"};case"FALIURE_COMMENT_LOGIN_NEED":return Object(G.a)({},e,{failure:!0,posted:!1,error_msg:"Please sign in to comment"});default:return e}},Z={comment_deleted:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMMENT_DELETE":return{comment_deleted:!0};case"COMMENT_DELETE_ERROR":return{comment_deleted:!1};default:return e}},te={meme_deleted:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MEME_DELETED":return{meme_deleted:!0};case"MEME_NOT_DELETED":return{meme_deleted:!1};default:return e}},ae=Object(B.c)({memes:x,postmeme:P,upvotememe:z,downvotememe:W,auth:H,register:q,login:Q,comment:Y,comment_deletion:ee,meme_deletion:ne}),re=Object(B.d)(ae,Object(B.a)(A.a));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{basename:"https://barneyshi.github.io/iMemeDB"},r.a.createElement(f.a,{store:re},r.a.createElement(j,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.2cc53e89.chunk.js.map