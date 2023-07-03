"use strict";
globalThis["webpackHotUpdatewebpack_optimization_starter"]("main",{

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   clearNewTodoInput: () => (/* binding */ clearNewTodoInput),
/* harmony export */   getAllTodos: () => (/* binding */ getAllTodos),
/* harmony export */   getTodoId: () => (/* binding */ getTodoId),
/* harmony export */   removeTodo: () => (/* binding */ removeTodo),
/* harmony export */   renderTodos: () => (/* binding */ renderTodos),
/* harmony export */   updateTodo: () => (/* binding */ updateTodo)
/* harmony export */ });
/* harmony import */ var _todos_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.json */ "./src/js/todos.json");
/* harmony import */ var _styles_notification_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/notification.module.css */ "./src/styles/notification.module.css");
/* harmony import */ var _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/checkmark.svg */ "./images/checkmark.svg");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/js/api.js");




let data = _todos_json__WEBPACK_IMPORTED_MODULE_0__;
function getAllTodos() {
  return data;
}
function addTodo(todo) {
  data.push(todo);
}
function removeTodo(id) {
  data = data.filter(function (item) {
    return item.id !== id;
  });
}
function updateTodo(id, completed) {
  const itemIndex = data.findIndex(function (value) {
    return value.id === id;
  });
  data[itemIndex].completed = completed;
}
function renderTodos(todos) {
  const renderedItemArray = todos.map(function (todo) {
    const className = todo.completed ? "completed" : "";
    const completionClass = todo.completed ? "checked" : "";
    return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <img class="check" src="${_images_checkmark_svg__WEBPACK_IMPORTED_MODULE_2__}" width="22" height="22"></img>
                    <input class="real-checkbox" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.text}</label>
                <span class="delete"></span>
            </li>
        `;
  });
  document.querySelector(".todo-list").innerHTML = renderedItemArray.join("");
  renderMotivationalPictures();
}
function clearNewTodoInput() {
  document.querySelector(".new-todo").value = "";
  showNotification();
}
function getTodoId(element) {
  return parseInt(element.dataset.id || element.parentNode.dataset.id || element.parentNode.parentNode.dataset.id, 10);
}
function showNotification() {
  const notification = document.createElement("div");
  notification.classList.add("alert", "alert-success", _styles_notification_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].notification);
  notification.setAttribute("role", "alert");
  notification.innerHTML = "Todo item added!!!";
  document.body.appendChild(notification);
  setTimeout(function () {
    const notificationElement = document.querySelector(`.${_styles_notification_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].notification}`);
    notificationElement.parentNode.removeChild(notificationElement);
  }, 2000);
}
function renderMotivationalPictures() {
  (0,_api__WEBPACK_IMPORTED_MODULE_3__.getMotivationalPictures)().then(pictures => {
    const motivationalPicturesHtml = `<div class="motivational-pictures">
      ${pictures.map(p => {
      return '<img class="header-image" src="' + p + '" alt="Motivational pic"/>';
    }).join("")}
    </div>`;
    const motivationalPicturesContainer = document.querySelector(".motivational-pictures-container");
    motivationalPicturesContainer.innerHTML = motivationalPicturesHtml;
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bc434de10a15e9718416")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1c3cd73ce1ba2541bb41.hot-update.js.map