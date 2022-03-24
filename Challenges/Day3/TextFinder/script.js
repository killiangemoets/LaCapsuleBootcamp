const btn = document.querySelector("#button");
const result = document.querySelector("#result");

btn.addEventListener("click", function () {
  const text = document.querySelector("#textarea").value;
  const input = document.querySelector("#input").value.toLowerCase();
  // const words = text.split(" ");
  const words = text
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("'", " ")
    .replaceAll("-", " ")
    .toLowerCase()
    .split(" ");
  console.log(words);
  console.log(input);

  if (input === "")
    result.textContent = `Il y a ${words.length} mots dans le texte ci-dessus`;
  else {
    result.textContent = "";
    let numberOfInput = 0;
    words.forEach((word) => {
      if (word === input) numberOfInput++;
    });
    result.textContent =
      numberOfInput > 0
        ? `Le mot "${input}" est présent ${numberOfInput} fois dans le texte ci-dessus`
        : `Le mot "${input}" n'a pas été trouvé dans le texte ci-dessus.`;
  }
  document.querySelector("#input").value = "";
});
