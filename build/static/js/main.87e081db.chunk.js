(this.webpackJsonpandre_todolist=this.webpackJsonpandre_todolist||[]).push([[0],{27:function(e,t,a){e.exports=a(52)},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),o=a(3),l=a(4),d=a(5),s=a.n(d),i=a(25),u=a.n(i),m=(a(33),u.a.initializeApp({apiKey:"AIzaSyBAy3w_AgaOYuBjJ1h0dkXCzC6nevdkqlU",authDomain:"andre-todolist.firebaseapp.com",databaseURL:"https://andre-todolist.firebaseio.com",projectId:"andre-todolist",storageBucket:"andre-todolist.appspot.com",messagingSenderId:"351150871112",appId:"1:351150871112:web:7a029eeb0a32b0c6753e7d"})),E=a(18),b=[{key:"INBOX",name:"Inbox"},{key:"TODAY",name:"Today"},{key:"NEXT_7",name:"Next 7 Days"}],k=function(e){return b.find((function(t){return t.key===e}))},j=function(){var e="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",t=[];return function(){for(var a=(new Date).getTime(),n=new Array(8),c=7;c>=0;c--)n[c]=e.charAt(a%64),a=Math.floor(a/64);var r=n.join("");for(c=0;c<12;c++)r+=e.charAt(t[c]);return r}}(),p=Object(n.createContext)(),f=function(e){var t=e.children,a=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){m.firestore().collection("projects").where("userId","==","bart1104").orderBy("projectId").get().then((function(e){var t=e.docs.map((function(e){return Object(E.a)({},e.data(),{docId:e.id})}));JSON.stringify(t)!==JSON.stringify(a)&&c(t)}))}),[a]),{projects:a,setProjects:c}}(),r=a.projects,l=a.setProjects;return c.a.createElement(p.Provider,{value:{projects:r,setProjects:l}},t)},v=function(){return Object(n.useContext)(p)},y=Object(n.createContext)(),h=function(e){var t=e.children,a=Object(n.useState)("INBOX"),r=Object(o.a)(a,2),l=r[0],d=r[1];return c.a.createElement(y.Provider,{value:{selectedProject:l,setSelectedProject:d}},t)},N=function(){return Object(n.useContext)(y)},_=function(e){var t=e.setProject,a=e.showProjectOverlay,n=e.setShowProjectOverlay,r=v().projects;return r&&a&&c.a.createElement("div",{className:"project-overlay","data-testid":"project-overlay"},c.a.createElement("ul",{className:"project-overlay__list"},r.map((function(e){return c.a.createElement("li",{key:e.projectId},c.a.createElement("div",{"data-testid":"project-overlay-action",onClick:function(){t(e.projectId),n(!1)},onKeyDown:function(a){"Enter"===a.key&&(t(e.projectId),n(!1))},role:"button",tabIndex:0,"aria-label":"Select the task project"},e.name))}))))},O=function(e){var t=e.setTaskDate,a=e.showTaskDate,n=e.setShowTaskDate;return a&&c.a.createElement("div",{className:"task-date","data-testid":"task-date-overlay"},c.a.createElement("ul",{className:"task-date__list"},c.a.createElement("li",null,c.a.createElement("div",{onClick:function(){n(!1),t(s()().format("DD/MM/YYYY"))},onKeyDown:function(e){"Enter"===e.key&&(n(!1),t(s()().format("DD/MM/YYYY")))},"data-testid":"task-date-today",tabIndex:0,"aria-label":"Select today as the task date",role:"button"},c.a.createElement("span",null,c.a.createElement(l.j,null)),c.a.createElement("span",null,"Today"))),c.a.createElement("li",null,c.a.createElement("div",{onClick:function(){n(!1),t(s()().add(1,"day").format("DD/MM/YYYY"))},onKeyDown:function(e){"Enter"===e.key&&(n(!1),t(s()().add(1,"day").format("DD/MM/YYYY")))},"data-testid":"task-date-tomorrow",role:"button",tabIndex:0,"aria-label":"Select tomorrow as the task date"},c.a.createElement("span",null,c.a.createElement(l.a,null)),c.a.createElement("span",null,"Tomorrow"))),c.a.createElement("li",null,c.a.createElement("div",{onClick:function(){n(!1),t(s()().add(7,"days").format("DD/MM/YYYY"))},onKeyDown:function(e){"Enter"===e.key&&(n(!1),t(s()().add(7,"days").format("DD/MM/YYYY")))},"data-testid":"task-date-next-week","aria-label":"Select next week as the task date",tabIndex:0,role:"button"},c.a.createElement("span",null,c.a.createElement(l.e,null)),c.a.createElement("span",null,"Next week")))))},w=function(e){var t=e.showAddTaskMain,a=void 0===t||t,r=e.shouldShowMain,d=void 0!==r&&r,i=e.showQuickAddTask,u=e.setShowQuickAddTask,E=Object(n.useState)(""),b=Object(o.a)(E,2),k=b[0],j=b[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),v=f[0],y=f[1],h=Object(n.useState)(""),w=Object(o.a)(h,2),D=w[0],I=w[1],x=Object(n.useState)(d),S=Object(o.a)(x,2),Y=S[0],C=S[1],T=Object(n.useState)(!1),g=Object(o.a)(T,2),M=g[0],A=g[1],P=Object(n.useState)(!1),K=Object(o.a)(P,2),X=K[0],B=K[1],z=N().selectedProject,Q=function(){var e=D||z,t="";return"TODAY"===e?t=s()().format("DD/MM/YYYY"):"NEXT_7"===e&&(t=s()().add(7,"days").format("DD/MM/YYYY")),k&&e&&m.firestore().collection("tasks").add({archived:!1,projectId:e,task:k,date:t||v,userId:"jlIFXIwyAL3tzHMtzRbw"}).then((function(){j(""),I(""),C(""),A(!1)}))};return c.a.createElement("div",{className:i?"add-task add-task__overlay":"add-task","data-testid":"add-task-comp"},a&&c.a.createElement("div",{className:"add-task__shallow","data-testid":"show-main-action",onClick:function(){return C(!Y)},onKeyDown:function(e){"Enter"===e.key&&C(!Y)},tabIndex:0,"aria-label":"Add task",role:"button"},c.a.createElement("span",{className:"add-task__plus"},"+"),c.a.createElement("span",{className:"add-task__text"},"\ud83c\udfcb\ud83c\udffb\u200d\u2642\ufe0f New Task \ud83c\udfcb\ud83c\udffb\u200d\u2642\ufe0f")),(Y||i)&&c.a.createElement("div",{className:"add-task__main","data-testid":"add-task-main"},i&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{"data-testid":"quick-add-task"},c.a.createElement("h2",{className:"header"},"Quick Add Task"),c.a.createElement("span",{className:"add-task__cancel-x","data-testid":"add-task-quick-cancel","aria-label":"Cancel adding task",onClick:function(){C(!1),A(!1),u(!1)},onKeyDown:function(e){"Enter"===e.key&&(C(!1),A(!1),u(!1))},tabIndex:0,role:"button"},"X"))),c.a.createElement(_,{setProject:I,showProjectOverlay:M,setShowProjectOverlay:A}),c.a.createElement(O,{setTaskDate:y,showTaskDate:X,setShowTaskDate:B}),c.a.createElement("input",{className:"add-task__content","aria-label":"Enter your task","data-testid":"add-task-content",type:"text",value:k,onChange:function(e){return j(e.target.value)}}),c.a.createElement("button",{type:"button",className:"add-task__submit","data-testid":"add-task",onClick:function(){return i?Q()&&u(!1):Q()}},"Add Task"),!i&&c.a.createElement("span",{className:"add-task__cancel","data-testid":"add-task-main-cancel",onClick:function(){C(!1),A(!1)},onKeyDown:function(e){"Enter"===e.key&&(C(!1),A(!1))},"aria-label":"Cancel adding a task",tabIndex:0,role:"button"},"Cancel"),c.a.createElement("span",{className:"add-task__project","data-testid":"show-project-overlay",onClick:function(){return A(!M)},onKeyDown:function(e){"Enter"===e.key&&A(!M)},tabIndex:0,role:"button"},c.a.createElement(l.h,null)),c.a.createElement("span",{className:"add-task__date","data-testid":"show-task-date-overlay",onClick:function(){return B(!X)},onKeyDown:function(e){"Enter"===e.key&&B(!X)},tabIndex:0,role:"button"},c.a.createElement(l.g,null))))},D=function(e){var t=e.darkMode,a=e.setDarkMode,r=Object(n.useState)(!1),d=Object(o.a)(r,2),s=d[0],i=d[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),E=m[0],b=m[1];return c.a.createElement("header",{className:"header","data-testid":"header"},c.a.createElement("nav",null,c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"/images/img1.png",alt:"Todoist"})),c.a.createElement("div",{className:"name-header","data-testid":"name"},c.a.createElement("h1",null,"HOME - TO DO LIST")),c.a.createElement("div",{className:"settings"},c.a.createElement("ul",null,c.a.createElement("li",{className:"settings__add"},c.a.createElement("button",{"data-testid":"quick-add-task-action","aria-label":"Quick add task",type:"button",onClick:function(){b(!0),i(!0)}},"+")),c.a.createElement("li",{className:"settings__darkmode"},c.a.createElement("button",{"data-testid":"dark-mode-action","aria-label":"Darkmode on/off",type:"button",onClick:function(){return a(!t)}},c.a.createElement(l.i,null)))))),c.a.createElement(w,{showAddTaskMain:!1,shouldShowMain:s,showQuickAddTask:E,setShowQuickAddTask:b}))},I=a(13),x=function(e){var t=e.project,a=Object(n.useState)(!1),r=Object(o.a)(a,2),d=r[0],s=r[1],i=v(),u=i.projects,E=i.setProjects,b=N().setSelectedProject;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"sidebar__dot"},"\u2022"),c.a.createElement("span",{className:"sidebar__project-name"},t.name),c.a.createElement("span",{className:"sidebar__project-delete","data-testid":"delete-project",onClick:function(){return s(!d)},onKeyDown:function(e){"Enter"===e.key&&s(!d)},tabIndex:0,role:"button","aria-label":"Confirm deletion of project"},c.a.createElement(l.l,null),d&&c.a.createElement("div",{className:"project-delete-modal"},c.a.createElement("div",{className:"project-delete-modal__inner"},c.a.createElement("p",null," Delete project?"),c.a.createElement("button",{type:"button",onClick:function(){return e=t.docId,void m.firestore().collection("projects").doc(e).delete().then((function(){E(Object(I.a)(u)),b("INBOX")}));var e}},"Delete"),c.a.createElement("span",{onClick:function(){return s(!d)},onKeyDown:function(e){"Enter"===e.key&&s(!d)},role:"button",tabIndex:0,"aria-label":"Cancel adding project, do not delete"},"Cancel")))))},S=function(e){var t=e.activeValue,a=void 0===t?null:t,r=Object(n.useState)(a),l=Object(o.a)(r,2),d=l[0],s=l[1],i=N().setSelectedProject,u=v().projects;return u&&u.map((function(e){return c.a.createElement("li",{key:e.projectId,"data-testid":"project-action-parent","data-doc-id":e.docId,className:d===e.projectId?"active sidebar__project":"sidebar__project"},c.a.createElement("div",{role:"button","data-testid":"project-action",tabIndex:0,"aria-label":"Select ".concat(e.name," as the task project"),onClick:function(){s(e.projectId),i(e.projectId)},onKeyDown:function(t){"Enter"===t.key&&(s(e.projectId),i(e.projectId))}},c.a.createElement(x,{project:e})))}))},Y=function(e){var t=e.shouldShow,a=void 0!==t&&t,r=Object(n.useState)(a),l=Object(o.a)(r,2),d=l[0],s=l[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),E=u[0],b=u[1],k=j(),p=v(),f=p.projects,y=p.setProjects;return c.a.createElement("div",{className:"add-project","data-testid":"add-project"},d&&c.a.createElement("div",{className:"add-project__input","data-testid":"add-project-inner"},c.a.createElement("input",{value:E,onChange:function(e){return b(e.target.value)},className:"add-project__name","data-testid":"project-name",type:"text",placeholder:"Name your project"}),c.a.createElement("button",{className:"add-project__submit",type:"button",onClick:function(){return E&&m.firestore().collection("projects").add({projectId:k,name:E,userId:"bart1104"}).then((function(){y(Object(I.a)(f)),b(""),s(!1)}))},"data-testid":"add-project-submit"},"Add Project"),c.a.createElement("span",{"aria-label":"Cancel adding project","data-testid":"hide-project-overlay",className:"add-project__cancel",onClick:function(){return s(!1)},onKeyDown:function(e){"Enter"===e.key&&s(!1)},role:"button",tabIndex:-1},"Cancel")),c.a.createElement("span",{className:"add-project__plus"},"+"),c.a.createElement("span",{"aria-label":"Add Project","data-testid":"add-project-action",className:"add-project__text",onClick:function(){return s(!d)},onKeyDown:function(e){"Enter"===e.key&&s(!d)},role:"button",tabIndex:0},"\ud83d\ude9c New Project \ud83d\ude9c"))},C=function(){var e=N().setSelectedProject,t=Object(n.useState)("inbox"),a=Object(o.a)(t,2),r=a[0],d=a[1],s=Object(n.useState)(!0),i=Object(o.a)(s,2),u=i[0],m=i[1];return c.a.createElement("div",{className:"sidebar","data-testid":"sidebar"},c.a.createElement("ul",{className:"sidebar__generic"},c.a.createElement("li",{"data-testid":"inbox",className:"inbox"===r?"active":void 0},c.a.createElement("div",{"data-testid":"inbox-action","aria-label":"Show inbox tasks",tabIndex:0,role:"button",onClick:function(){d("inbox"),e("INBOX")},onKeyDown:function(t){"Enter"===t.key&&(d("inbox"),e("INBOX"))}},c.a.createElement("span",null,c.a.createElement(l.d,null)),c.a.createElement("span",null,"Inbox"))),c.a.createElement("li",{"data-testid":"today",className:"today"===r?"active":void 0},c.a.createElement("div",{"data-testid":"today-action","aria-label":"Show today's tasks",tabIndex:0,role:"button",onClick:function(){d("today"),e("TODAY")},onKeyDown:function(t){"Enter"===t.key&&(d("today"),e("TODAY"))}},c.a.createElement("span",null,c.a.createElement(l.f,null)),c.a.createElement("span",null,"Today"))),c.a.createElement("li",{"data-testid":"next_7",className:"next_7"===r?"active":void 0},c.a.createElement("div",{"data-testid":"next_7-action","aria-label":"Show tasks for the next 7 days",tabIndex:0,role:"button",onClick:function(){d("next_7"),e("NEXT_7")},onKeyDown:function(t){"Enter"===t.key&&(d("next_7"),e("NEXT_7"))}},c.a.createElement("span",null,c.a.createElement(l.g,null)),c.a.createElement("span",null,"Next 7 days")))),c.a.createElement("div",{className:"sidebar__middle","aria-label":"Show/hide projects",onClick:function(){return m(!u)},onKeyDown:function(e){"Enter"===e.key&&m(!u)},role:"button",tabIndex:0},c.a.createElement("span",null,c.a.createElement(l.b,{className:u?void 0:"hidden-projects"})),c.a.createElement("h2",{className:"middle_project"},"Projects")),c.a.createElement("ul",{className:"sidebar__projects"},u&&c.a.createElement(S,null)),u&&c.a.createElement(Y,null))},T=function(e){var t=e.id,a=e.taskDesc,n=function(){m.firestore().collection("tasks").doc(t).update({archived:!0})};return c.a.createElement("div",{className:"checkbox-holder","data-testid":"checkbox-action",onClick:function(){return n()},onKeyDown:function(e){"Enter"===e.key&&n()},"aria-label":"Mark ".concat(a," as done?"),role:"button",tabIndex:0},c.a.createElement("span",{className:"checkbox"}))},g=function(){var e=N().selectedProject,t=v().projects,a=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)([]),d=Object(o.a)(l,2),i=d[0],u=d[1];return Object(n.useEffect)((function(){var t=m.firestore().collection("tasks").where("userId","==","jlIFXIwyAL3tzHMtzRbw");return t=(t=e&&!k(e)?t=t.where("projectId","==",e):"TODAY"===e?t=t.where("date","==",s()().format("DD/MM/YYYY")):"INBOX"===e||0===e?t=t.where("date","==",""):t).onSnapshot((function(t){var a=t.docs.map((function(e){return Object(E.a)({id:e.id},e.data())}));r("NEXT_7"===e?a.filter((function(e){return s()(e.date,"DD-MM-YYYY").diff(s()(),"days")<=7&&!0!==e.archived})):a.filter((function(e){return!0!==e.archived}))),u(a.filter((function(e){return!1!==e.archived})))})),function(){return t()}}),[e]),{tasks:c,archivedTasks:i}}(e).tasks,r="";return k(e)&&e&&(r=function(e,t){return e.find((function(e){return e.key===t}))}(b,e).name),t&&t.length>0&&e&&!k(e)&&(r=function(e,t){return e.find((function(e){return e.projectId===t}))}(t,e).name),Object(n.useEffect)((function(){document.title="".concat(r,": Todoist")})),c.a.createElement("div",{className:"tasks","data-testid":"tasks"},c.a.createElement("h2",{"data-testid":"project-name"},r),c.a.createElement("ul",{className:"tasks__list"},a.map((function(e){return c.a.createElement("li",{key:"".concat(e.id)},c.a.createElement(T,{id:e.id,taskDesc:e.task}),c.a.createElement("span",null,e.task))}))),c.a.createElement(w,null))},M=function(){return c.a.createElement("div",{className:"footer","data-testid":"footer"},c.a.createElement("h4",null,"ANDRE TORRES ",c.a.createElement(l.c,null)," 2020"))},A=a(16),P=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"aside-right","data-testid":"aside-right"},c.a.createElement("div",{className:"calendar","data-testid":"calendar"},c.a.createElement("p",null,"Calendar"),c.a.createElement("div",{className:"calendar-img","data-testid":"calendar-import"},c.a.createElement(A.default,{onChange:r,value:a}))),c.a.createElement("div",{className:"notifications","data-testid":"notifications"},c.a.createElement("p",null,"Notifications")),c.a.createElement("div",{className:"stopwatch","data-testid":"stopwatch"},c.a.createElement("p",null,"Pomodoro Timer"),c.a.createElement("div",{className:"fastop","data-testid":"fastop"},c.a.createElement(l.k,null))))},K=(a(26),function(){return c.a.createElement("section",{className:"content"},c.a.createElement(C,null),c.a.createElement(g,null),c.a.createElement(M,null),c.a.createElement(P,null))}),X=function(e){var t=e.darkModeDefault,a=void 0!==t&&t,r=Object(n.useState)(a),l=Object(o.a)(r,2),d=l[0],s=l[1];return c.a.createElement(h,null,c.a.createElement(f,null,c.a.createElement("main",{"data-testid":"application",className:d?"darkmode":void 0},c.a.createElement(D,{darkMode:d,setDarkMode:s}),c.a.createElement(K,null))))};a(51);Object(r.render)(c.a.createElement(X,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.87e081db.chunk.js.map