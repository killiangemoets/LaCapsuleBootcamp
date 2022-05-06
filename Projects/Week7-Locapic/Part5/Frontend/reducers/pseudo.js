export default function (pseudo = "", action) {
  if (action.type == "savePseudo") {
    const newPseudo = action.pseudo;
    console.log("--NEWPSEUDO--");
    console.log(newPseudo);
    return newPseudo;
  } else {
    return pseudo;
  }
}
