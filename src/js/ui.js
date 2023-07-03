import initialData from "./todos.json";
import styles from "../styles/notification.module.css";
import CheckmarkImage from "../../images/checkmark.svg";
import { getMotivationalPictures } from "./api";
import { css } from "@emotion/css";

const realCheckboxClass = css`
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: -3px;
  left: -5px;
`;

let data = initialData;

export function getAllTodos() {
  return data;
}

export function addTodo(todo) {
  data.push(todo);
}

export function removeTodo(id) {
  data = data.filter(function (item) {
    return item.id !== id;
  });
}

export function updateTodo(id, completed) {
  const itemIndex = data.findIndex(function (value) {
    return value.id === id;
  });
  data[itemIndex].completed = completed;
}

export function renderTodos(todos) {
  const renderedItemArray = todos.map(function (todo) {
    const className = todo.completed ? "completed" : "";
    const completionClass = todo.completed ? "checked" : "";
    return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <img class="check" src="${CheckmarkImage}" width="22" height="22"></img>
                    <input class="${realCheckboxClass}" data-element="real-checkbox" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.text}</label>
                <span class="delete"></span>
            </li>
        `;
  });
  document.querySelector(".todo-list").innerHTML = renderedItemArray.join("");
  renderMotivationalPictures();
}

export function clearNewTodoInput() {
  document.querySelector(".new-todo").value = "";
  showNotification();
}

export function getTodoId(element) {
  return parseInt(
    element.dataset.id ||
      element.parentNode.dataset.id ||
      element.parentNode.parentNode.dataset.id,
    10
  );
}

function showNotification() {
  const notification = document.createElement("div");
  notification.classList.add("alert", "alert-success", styles.notification);
  notification.setAttribute("role", "alert");
  notification.innerHTML = "Todo item added!!!";
  document.body.appendChild(notification);

  setTimeout(function () {
    const notificationElement = document.querySelector(
      `.${styles.notification}`
    );
    notificationElement.parentNode.removeChild(notificationElement);
  }, 2000);
}

function renderMotivationalPictures() {
  getMotivationalPictures().then((pictures) => {
    const motivationalPicturesHtml = `<div class="motivational-pictures">
      ${pictures
        .map((p) => {
          return (
            '<img class="header-image" src="' + p + '" alt="Motivational pic"/>'
          );
        })
        .join("")}
    </div>`;
    const motivationalPicturesContainer = document.querySelector(
      ".motivational-pictures-container"
    );
    motivationalPicturesContainer.innerHTML = motivationalPicturesHtml;
  });
}
