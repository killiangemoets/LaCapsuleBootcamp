"use strict";

const arrayMessages = document.getElementsByClassName("message");
const count = document.getElementById("count").querySelector("span");
const trashImages = document.getElementsByClassName("img-trash");
const btn = document.getElementById("btn--add");
const input = document.getElementById("input--add");
const messagesSection = document.getElementById("messages");

const renderNumberMessages = function () {
  const numberMessages = arrayMessages.length;
  count.textContent = numberMessages;
};

const deleteMessage = function () {
  console.log(trashImages);
  Array.from(trashImages).forEach((trash) => {
    trash.addEventListener("click", function () {
      this.parentNode.remove();
      renderNumberMessages();
    });
  });
};

const addANewMessage = function () {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const name = "Bob Marley";
    const message = input.value;
    if (message === "") return;
    input.value = "";

    const markup = `
      <li class="message">
        <img
          class="img-avatar"
          src="My-Mails-Assets/avatar-bm.jpg"
          alt="avatar picture"
        />
        <div class="content">
          <h6 class="name">${name}</h6>
          <p class="text">
            ${message}
          </p>
        </div>
        <img
          class="img-trash"
          src="My-Mails-Assets/trash.png"
          alt="trash icon"
        />
      </li> 
      `;

    messagesSection.insertAdjacentHTML("afterbegin", markup);
    renderNumberMessages();
    deleteMessage();
  });
};

renderNumberMessages();
deleteMessage();
addANewMessage();
