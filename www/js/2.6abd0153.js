(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"40d3":function(e,t,a){"use strict";a("c8eb")},a751:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"bg-grey-3 column"},[a("div",{staticClass:"row q-pa-sm bg-primary"},[a("q-input",{staticClass:"col",attrs:{square:"",filled:"","bg-color":"white",placeholder:"Add task",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTask(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:e.addTask}})]},proxy:!0}]),model:{value:e.newTask,callback:function(t){e.newTask=t},expression:"newTask"}})],1),a("q-list",{staticClass:"bg-white",attrs:{separator:"",bordered:""}},e._l(e.tasks,(function(t,s){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.title,class:{"done bg-blue-1":t.done},attrs:{clickable:""},on:{click:function(e){t.done=!t.done}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-checkbox",{staticClass:"no-pointer-events",attrs:{color:"primary"},model:{value:t.done,callback:function(a){e.$set(t,"done",a)},expression:"task.done"}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.title))])],1),t.done?a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{flat:"",round:"",dense:"",color:"primary",icon:"delete"},on:{click:function(t){return t.stopPropagation(),e.deleteTask(s)}}})],1):e._e()],1)})),1),e.tasks.length?e._e():a("div",{staticClass:"no-task absolute-center"},[a("q-icon",{attrs:{name:"check",size:"100px",color:"primary"}}),a("div",{staticClass:"text-h5 text-primary text-center"},[e._v("\n      No tasks\n    ")])],1)],1)},n=[],i=(a("a434"),a("498a"),{data(){return{newTask:"",tasks:[{title:"Wake up",done:!0},{title:"Write code",done:!0},{title:"Get a job",done:!1}]}},methods:{deleteTask(e){this.$q.dialog({title:"Confirm",message:"Really delete?",cancel:!0,persistent:!0}).onOk((()=>{this.tasks.splice(e,1),this.$q.notify("Task deleted")}))},addTask(){this.tasks.push({title:this.newTask,done:!1,editing:!1}),this.newTask=""},editTodo(e){this.beforeEditCache=e.title,e.editing=!0},doneEdit(e){""==e.title.trim()&&(e.title=this.beforeEditCache),e.editing=!1},cancelEdit(e){e.title=this.beforeEditCache,e.editing=!1}}}),o=i,c=(a("40d3"),a("2877")),l=a("9989"),r=a("27f9"),d=a("9c40"),k=a("1c1c"),p=a("66e5"),u=a("4074"),b=a("8f8e"),f=a("0170"),m=a("0016"),h=a("714f"),g=a("eebe"),q=a.n(g),w=Object(c["a"])(o,s,n,!1,null,null,null);t["default"]=w.exports;q()(w,"components",{QPage:l["a"],QInput:r["a"],QBtn:d["a"],QList:k["a"],QItem:p["a"],QItemSection:u["a"],QCheckbox:b["a"],QItemLabel:f["a"],QIcon:m["a"]}),q()(w,"directives",{Ripple:h["a"]})},c8eb:function(e,t,a){}}]);