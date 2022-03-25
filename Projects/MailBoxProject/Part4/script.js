"use strict";

const count = $("#count").find("span");
const addBtn = $("#btn--add");
const searchBtn = $("#btn--search");
const returnBtn = $("#btn--return");
const addInput = $("#input--add");
const searchInput = $("#input--search");
const messagesSection = $("#messages");

const renderNumberMessages = function () {
  count.text($(".message").length);
};

const renderMessage = function (message) {
  const markup = `
  <li class="message">
    <img
      class="img-avatar"
      src="My-Mails-Assets/avatar-bm.jpg"
      alt="avatar picture"
    />
    <div class="content">
      <h6 class="name">${message.name}</h6>
      <p class="text">
        ${message.content}
      </p>
    </div>
    <img
      class="img-trash"
      src="My-Mails-Assets/trash.png"
      alt="trash icon"
    />
  </li> 
  `;
  messagesSection.prepend(markup);
};

const deleteMessage = function () {
  messagesSection.on("click", ".img-trash", function () {
    $(this).parent().remove();
    renderNumberMessages();
  });
};

const addANewMessage = function () {
  addBtn.click(function (e) {
    e.preventDefault();
    const message = {
      name: "Bob Marley",
      content: addInput.val(),
    };

    if (message.content === "") return;
    addInput.val("");

    renderMessage(message);
    renderNumberMessages();
    // deleteMessage(); DON'T NEED IT ANYMORE THANKS TO THE .ON METHOD !
    $("#messages").children().show();
  });
};

const searchForAMessage = function () {
  searchBtn.click(function (e) {
    e.preventDefault();

    const searchName = searchInput.val();
    if (searchName === "") return;
    searchInput.val("");

    const messagesArray = $("#messages").children();
    const names = messagesArray.find(".name");

    names.each(function (index) {
      if ($(this).text().toLowerCase().indexOf(searchName.toLowerCase()) === -1)
        $(messagesArray[index]).hide();
      else $(messagesArray[index]).show();
    });

    returnBtn.show();
  });

  returnBtn.click(function (e) {
    e.preventDefault();
    $("#messages").children().show();
    returnBtn.hide();
  });
};

const init = function () {
  returnBtn.hide();
  renderNumberMessages();
  deleteMessage();
  addANewMessage();
  searchForAMessage();
};
init();
