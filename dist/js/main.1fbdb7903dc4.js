!function(){"use strict";var e=JSON.parse('[{"id":1560865205317,"text":"Buy eggs","completed":false},{"id":1560865205318,"text":"Do 15 min exercise","completed":false},{"id":1560865205310,"text":"Course","completed":false}]'),t={notification:"E0yvz8SDFF78Hbsu2uXH"};let n=e;function c(){return n}function o(e){const t=e.map((function(e){const t=e.completed?"completed":"",n=e.completed?"checked":"";return`\n            <li data-id="${e.id}" class="${t}">\n                <span class="custom-checkbox">\n                    <img class="check" src="../images/checkmark.svg" width="22" height="22"></img>\n                    <input class="real-checkbox" type="checkbox" ${n} />\n                </span>\n                <label>${e.text}</label>\n                <span class="delete"></span>\n            </li>\n        `}));document.querySelector(".todo-list").innerHTML=t.join("")}function i(e){return parseInt(e.dataset.id||e.parentNode.dataset.id||e.parentNode.parentNode.dataset.id,10)}function a(e){let i=e.target.value;var a;a={id:Date.now(),text:i,completed:!1},n.push(a),o(c()),document.querySelector(".new-todo").value="",function(){const e=document.createElement("div");e.classList.add("alert","alert-success",t.notification),e.setAttribute("role","alert"),e.innerHTML="Todo item added!!!",document.body.appendChild(e),setTimeout((function(){const e=document.querySelector(`.${t.notification}`);e.parentNode.removeChild(e)}),2e3)}()}window.addEventListener("load",(function(){o(c())})),document.addEventListener("change",(function(e){e.target.classList.contains("new-todo")&&a(e)})),document.addEventListener("click",(function(e){e.target.classList.contains("delete")&&function(e){var t;t=i(e.target),n=n.filter((function(e){return e.id!==t})),o(c())}(e),e.target.classList.contains("real-checkbox")&&function(e){!function(e,t){const c=n.findIndex((function(t){return t.id===e}));n[c].completed=t}(i(e.target),e.target.checked),o(c())}(e)})),console.log("hello world")}();