(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),r=n(10),c=n.n(r),i=n(8),s=n(6),l=n(7),u=n(2),d=n(3),b=n(5),f=n(4),p=(n(17),function(t){var e=t.toDo,n=t.done;return Object(o.jsxs)("div",{className:"app-header d-flex",children:[Object(o.jsx)("h1",{children:"Todo List"}),Object(o.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})}),j=(n(18),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("input",{onChange:this.props.onSearch,type:"search",className:"form-control search-input",placeholder:"type to search"})}}]),n}(a.Component)),m=n(11),h=(n(19),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.label,a=e.onDeleted,r=e.onToggleDone,c=e.onToggleImportatn,i=e.important,s="todo-list-item";return e.done&&(s+=" done"),i&&(s+=" important"),Object(o.jsxs)("span",{className:s,children:[Object(o.jsx)("span",{className:"todo-list-item-label",onClick:function(){return r(t.props.id)},children:n}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:function(){return c(t.props.id)},children:Object(o.jsx)("i",{className:"fa fa-exclamation"})}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:a,children:Object(o.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(a.Component)),O=(n(20),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.todos,a=e.onDeleted,r=e.onToggleDone,c=e.onToggleImportatn,i=n.map((function(e){var n=e.id,i=Object(m.a)(e,["id"]);return Object(o.jsx)("li",{className:e.className,children:Object(o.jsx)(h,Object(s.a)(Object(s.a)({},i),{},{zzz:function(){return t.props.zzz()},onDeleted:function(){return a(n)},onToggleImportatn:function(){return c(n)},onToggleDone:function(){return r(n)}}))},n)}));return Object(o.jsx)("ul",{className:"list-group todo-list",children:i})}}]),n}(a.Component)),g=(n(21),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"btn-group",onClick:this.props.activeButton,children:[Object(o.jsx)("button",{type:"button",className:"btn btn-info",onClick:this.props.filterAll,children:"All"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.props.filterActive,children:"Active"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.props.filterDone,children:"Done"})]})}}]),n}(a.Component)),v=(n(22),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault();var n=t.state.label;t.setState({label:""}),(t.props.onItemAdded||function(){})(n)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit,children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"What needs to be done",value:this.state.label,onChange:this.onLabelChange}),Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"Add"})]})}}]),n}(a.Component)),D=(n(23),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).maxId=0,t.state={todoData:[t.createTodoItem("Drink Coffe"),t.createTodoItem("Make Awesome App"),t.createTodoItem("Have a lunch")]},t.onSearch=function(e){t.setState((function(t){var n=t.todoData;return n.map((function(t){return t.className="list-group-item",!1===t.label.toLowerCase().includes(e.target.value)&&(t.className+=" hide"),0===e.target.value.length&&(t.className="list-group-item"),n})),{todoData:n}}))},t.deleteItem=function(e){t.setState((function(t){var n=t.todoData,o=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(l.a)(n.slice(0,o)),Object(l.a)(n.slice(o+1)))}}))},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(l.a)(e),[n])}}))},t.onToggleImportatn=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"important")}}))},t.onToggleDone=function(e){t.setState((function(n){var o=n.todoData;return{todoData:t.toggleProperty(o,e,"done")}}))},t.filterActive=function(){t.setState((function(t){var e=t.todoData;return e.map((function(t){return t.className="list-group-item",t.done&&(t.className+=" hide"),e})),{todoData:e}}))},t.filterDone=function(){t.setState((function(t){var e=t.todoData;return e.map((function(t){return t.className="list-group-item",t.done||(t.className+=" hide"),e})),{todoData:e}}))},t.filterAll=function(){t.setState((function(t){var e=t.todoData;return e.map((function(t){return t.className="list-group-item",e})),{todoData:e}}))},t.activeButton=function(t){document.querySelector(".btn-info").className="btn btn-outline-secondary",t.target.className="btn btn-info"},t}return Object(d.a)(n,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++,className:"list-group-item"}}},{key:"toggleProperty",value:function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=t[o],r=Object(s.a)(Object(s.a)({},a),{},Object(i.a)({},n,!a[n]));return[].concat(Object(l.a)(t.slice(0,o)),[r],Object(l.a)(t.slice(o+1)))}},{key:"render",value:function(){var t=this.state.todoData.filter((function(t){return t.done})).length,e=this.state.todoData.length-t;return Object(o.jsxs)("div",{className:"todo-app",children:[Object(o.jsx)(p,{toDo:e,done:t}),Object(o.jsxs)("div",{className:"top-panel d-flex",children:[Object(o.jsx)(j,{onSearch:this.onSearch}),Object(o.jsx)(g,{filterActive:this.filterActive,filterDone:this.filterDone,filterAll:this.filterAll,activeButton:this.activeButton})]}),Object(o.jsx)(O,{onToggleImportatn:this.onToggleImportatn,onToggleDone:this.onToggleDone,todos:this.state.todoData,onDeleted:this.deleteItem}),Object(o.jsx)(v,{onItemAdded:this.addItem})]})}}]),n}(a.Component));c.a.render(Object(o.jsx)(D,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.c2fe680f.chunk.js.map