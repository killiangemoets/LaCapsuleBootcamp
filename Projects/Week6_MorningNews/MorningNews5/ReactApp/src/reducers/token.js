export default function (token = "", action) {
  if (action.type == "addToken") {
    // console.log("add" + action.token);
    const newToken = action.token;
    return newToken;
  } else if (action.type == "removeToken") {
    console.log("remove" + action.token);
    return "";
  } else {
    return token;
  }
}
