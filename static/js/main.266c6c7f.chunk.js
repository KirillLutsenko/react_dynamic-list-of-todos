(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),l=a(2),o=a(3),i=a(5),u=a(4),d=(a(14),a(15),a(8)),m=a(1),p=a.n(m),h=p.a.arrayOf(p.a.shape({userId:p.a.number,id:p.a.number,title:p.a.string,completed:p.a.bool})),f=p.a.shape({userId:p.a.number,id:p.a.number,title:p.a.string,completed:p.a.bool}),v=(h.isRequired,p.a.number.isRequired,p.a.func.isRequired,f.isRequired,p.a.bool.isRequired,p.a.func.isRequired,p.a.number.isRequired,p.a.func.isRequired,a(18)),b=function(e){var t=e.todo,a=e.selectUser,n=e.isSelectedUser;return r.a.createElement("li",{className:v("TodoList__item",{"TodoList__item--checked":t.completed,"TodoList__item--unchecked":!t.completed}),key:t.id},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,t.title)),r.a.createElement("button",{className:v({"TodoList__user-button":!0,"TodoList__user-button--selected":n,button:!0}),type:"button",onClick:function(){return a(t.userId)}},"User #".concat(t.userId)))},E=(a(19),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:"",filteredTodos:"all"},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.filterByTitle=function(t){var a=e.state.search;return null!==t.title&&t.title.toLowerCase().includes(a.toLowerCase())},e.filterByStatus=function(t){switch(e.state.filteredTodos){case"completed":return t.completed;case"active":return!t.completed;default:return!0}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.todos,a=e.selectedUserId,n=e.selectUser,s=this.state,c=s.search,l=s.filteredTodos,o=t.filter(this.filterByTitle).filter(this.filterByStatus);return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("input",{name:"search",placeholder:"Type search task",className:"input is-primary",value:c,onChange:this.handleChange}),r.a.createElement("div",null,r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:"filteredTodos",value:l,onChange:this.handleChange},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"completed"},"Completed"),r.a.createElement("option",{value:"active"},"Active"))),r.a.createElement("ul",{className:"TodoList__list"},o?o.map((function(e){return r.a.createElement(b,{todo:e,selectUser:n,isSelectedUser:a===e.userId,key:e.id})})):r.a.createElement("p",null,"No tasks"))))}}]),a}(r.a.PureComponent)),y=(a(20),function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))}),U=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateUser(this.props.userId)}},{key:"componentDidUpdate",value:function(e){var t=e.userId,a=this.props.userId;t!==a&&this.updateUser(a)}},{key:"updateUser",value:function(e){var t,a=this;(t=e,y("/users/".concat(t))).then((function(e){a.setState({user:e})})).catch((function(){a.setState({user:{}})}))}},{key:"render",value:function(){var e=this.state.user,t=this.props.clearSelectedUser;return r.a.createElement("div",{className:"CurrentUser"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(e.id))),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",onClick:t,className:"button clear-button"},"Clear")):r.a.createElement("p",null,"User is not found"))}}]),a}(n.PureComponent),_=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearSelectedUser=function(){e.setState({selectedUserId:0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;y("/todos").then((function(e){return e.filter((function(e){var t=e.id,a=e.title;return t&&a}))})).then((function(t){return e.setState({todos:t})})).catch((function(){e.setState({todos:null})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,a=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(E,{todos:t,selectedUserId:a,selectUser:this.selectUser})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(U,{userId:a,clearSelectedUser:this.clearSelectedUser}):"No user selected")))}}]),a}(r.a.Component);c.a.render(r.a.createElement(_,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.266c6c7f.chunk.js.map