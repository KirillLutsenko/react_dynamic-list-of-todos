(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=n(2),l=n(3),i=n(5),u=n(4),d=(n(14),n(15),n(8)),m=n(1),p=n.n(m),f=p.a.arrayOf(p.a.shape({userId:p.a.number,id:p.a.number,title:p.a.string,completed:p.a.bool})),h=p.a.shape({userId:p.a.number,id:p.a.number,title:p.a.string,completed:p.a.bool}),v=(f.isRequired,p.a.number.isRequired,p.a.func.isRequired,h.isRequired,p.a.bool.isRequired,p.a.func.isRequired,p.a.number.isRequired,p.a.func.isRequired,n(18)),b=function(e){var t=e.todo,n=e.onButtonClick,a=e.isSelectedUser;return r.a.createElement("li",{className:v({TodoList__item:!0,"TodoList__item--checked":t.completed,"TodoList__item--unchecked":!t.completed}),key:t.id},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,t.title)),r.a.createElement("button",{className:v({"TodoList__user-button":!0,"TodoList__user-button--selected":a,button:!0}),type:"button",onClick:function(){return n(t.userId)}},"User #".concat(t.userId)))},E=(n(19),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",filteredTodos:"all"},e.filter={all:function(){return!0},completed:function(e){return e.completed},active:function(e){return!e.completed}},e.changeHandler=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todos,a=t.selectedUserId,c=t.onButtonClick,o=this.state,s=o.search,l=o.filteredTodos,i=n.filter((function(t){return t.title&&function(e){return e.title.toLowerCase().includes(s.toLowerCase())}(t)&&e.filter[l](t)}));return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("input",{name:"search",placeholder:"Type search task",className:"input is-primary",value:s,onChange:this.changeHandler}),r.a.createElement("div",null,r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:"filteredTodos",value:l,onChange:this.changeHandler},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"completed"},"Completed"),r.a.createElement("option",{value:"active"},"Active"))),r.a.createElement("ul",{className:"TodoList__list"},i?i.map((function(e){return r.a.createElement(b,{todo:e,onButtonClick:c,isSelectedUser:a===e.userId,key:e.id})})):r.a.createElement("p",null,"No tasks"))))}}]),n}(r.a.PureComponent)),_=(n(20),function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))}),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.updateUser(this.props.userId)}},{key:"componentDidUpdate",value:function(){var e=this.props.userId;this.updateUser(e)}},{key:"updateUser",value:function(e){var t,n=this;(t=e,_("/users/".concat(t))).then((function(e){n.setState({user:e})})).catch((function(){n.setState({user:{}})}))}},{key:"render",value:function(){var e=this.state.user,t=this.props.onButtonClick;return r.a.createElement("div",{className:"CurrentUser"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(e.id))),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",onClick:function(){t()},className:"button clear-button"},"Clear")):r.a.createElement("p",null,"User is not found"))}}]),n}(a.PureComponent),y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearSelectedUser=function(){e.setState({selectedUserId:0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;_("/todos").then((function(e){return e.filter((function(e){var t=e.id,n=e.title;return t&&n}))})).then((function(t){e.setState({todos:t})})).catch((function(){e.setState({todos:null})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(E,{todos:t,selectedUserId:n,onButtonClick:this.selectUser})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(k,{userId:n,onButtonClick:this.clearSelectedUser}):"No user selected")))}}]),n}(r.a.Component);o.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.67d50448.chunk.js.map