const cookies = document.getElementsByClassName("cookie");
console.log(cookies);

for (var i = 0; i < cookies.length; i++) {
  cookies[i].addEventListener("click", function () {
    eatCookie(this);
  });
}

const eatCookie = function (img) {
  if (img.src.indexOf("cookie-1") > -1) img.src = "cookie-2.jpg";
  else if (img.src.indexOf("cookie-2") > -1) img.style.opacity = 0;
};
