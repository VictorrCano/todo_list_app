(this.webpackJsonpgreenchoice_demo=this.webpackJsonpgreenchoice_demo||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(7),c=o.n(r),l=o(5),i=o(1),d=o(2),p=o(4),u=o(3),s=function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).getStyle=function(){return e.props.todos.completed?{textDecoration:"line-through",background:"lightgrey",padding:"10px",borderBottom:"1px black solid"}:{textDecoration:"none",background:"lightgrey",padding:"10px",borderBottom:"1px black solid"}},e}return Object(d.a)(o,[{key:"render",value:function(){var e=this.props.todos,t=e.id,o=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,o,"  ",a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),a.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:m},"x")))}}]),o}(n.Component),m={background:"red",color:"white",border:"none",padding:"5px 13px",borderRadius:"50%",cursor:"pointer",float:"right"},h=s,b=function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){var e=this;return this.props.todo.map((function(t){return a.a.createElement(h,{key:t.id,todos:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),o}(a.a.Component),f=o(8),g=function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e.onChange=function(t){return e.setState(Object(f.a)({},t.target.name,t.target.value))},e}return Object(d.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"New To-Do",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),o}(n.Component);var y={background:"black",color:"white",padding:"10px"},v=function(){return a.a.createElement("header",{style:y},a.a.createElement("h1",null,"To-Do Web App"))},k=o(17),j=(o(14),function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todo:[{id:Object(k.a)(),title:"Sample To-Do Item",completed:!1}]},e.markComplete=function(t){e.setState({todo:e.state.todo.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todo:Object(l.a)(e.state.todo.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){var o={id:Object(k.a)(),title:t,completed:!1};e.setState({todo:[].concat(Object(l.a)(e.state.todo),[o])})},e}return Object(d.a)(o,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(v,null),a.a.createElement(b,{todo:this.state.todo,markComplete:this.markComplete,delTodo:this.delTodo}),a.a.createElement(g,{addTodo:this.addTodo})))}}]),o}(a.a.Component));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root"))},9:function(e,t,o){e.exports=o(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ced0139a.chunk.js.map