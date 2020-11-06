(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),c=n.n(s),o=n(1),u=n.n(o),l=n(2),i=n(3),d=n(4),m=n(6),p=n(5),h=(n(16),n(17),n(7)),f=n.n(h),v=(n(18),function(e){var t=e.checkQuery;return r.a.createElement("div",{className:"ui input"},r.a.createElement("input",{type:"text",placeholder:"Type search task",onChange:t}))}),E=function(e){var t=e.handleStatus;return r.a.createElement("select",{className:"ui selection dropdown",onChange:t},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"false"},"Active"),r.a.createElement("option",{value:"true"},"Completed"))},k=(n(19),function(e){var t=e.todos,n=e.query,a=e.isTaskDone,s=e.selectedTask,c=e.handleUser,o=e.handleStatus,u=e.checkQuery,l=t.filter((function(e){var t=e.title,r=e.completed,s=function(){return t.toLowerCase().includes(n)};return"true"===a?s()&&r:"false"===a?s()&&!r:s()}));return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement(v,{checkQuery:u}),r.a.createElement(E,{handleStatus:o}),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},l.map((function(e){var t=e.id,n=e.title,a=e.completed,o=e.userId;return r.a.createElement("li",{key:t,className:f()("TodoList__item",{"TodoList__item--unchecked":!a,"TodoList__item--checked":a})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:a,readOnly:!0}),r.a.createElement("p",null,n)),r.a.createElement("button",{className:f()("TodoList__user-button",{"TodoList__user-button--selected":s===n},"button"),type:"button",onClick:function(){return c(o,n)}},"User".concat("\xa0","#",o)))})))))});n(20);function y(e){return fetch("".concat("https://mate-api.herokuapp.com/users/").concat(e)).then(_).then(b)}var _=function(e){return e.json()},b=function(e){return e.data},N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(this.props.userId);case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){var t=this;this.props.userId!==e.userId&&y(this.props.userId).then((function(e){return t.setState({user:e})}))}},{key:"render",value:function(){var e=this.props.handleUser,t=this.state.user,n=t.name,a=t.email,s=t.phone,c=t.id;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",c)),r.a.createElement("h3",{className:"CurrentUser__name"},n),r.a.createElement("p",{className:"CurrentUser__email"},a),r.a.createElement("p",{className:"CurrentUser__phone"},s),r.a.createElement("button",{className:"button clear-button",type:"button",onClick:function(){return e(0)}},"Clear"))}}]),n}(a.PureComponent),T=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,selectedTask:"",query:"",isTaskDone:""},e.handleUser=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.setState({selectedUserId:t,selectedTask:n})},e.handleStatus=function(t){e.setState({isTaskDone:t.target.value})},e.checkQuery=function(t){e.setState({query:t.target.value.toLowerCase()})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-api.herokuapp.com/todos").then(_).then(b);case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.handleUser,t=this.checkQuery,n=this.handleStatus,a=this.state,s=a.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(k,Object.assign({handleUser:e,handleStatus:n,checkQuery:t},a))),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},s?r.a.createElement(N,{userId:s,handleUser:e}):"No user selected")))}}]),n}(r.a.Component);n(21);c.a.render(r.a.createElement(T,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.6ad8d07e.chunk.js.map