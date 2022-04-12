"use strict";

const arrayMessages = document.getElementsByClassName("message");
const count = document.getElementById("count").querySelector("span");
const trashImages = document.getElementsByClassName("img-trash");

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

renderNumberMessages();
deleteMessage();
