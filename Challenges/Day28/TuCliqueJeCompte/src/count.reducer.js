export default function (count = 0, action) {
  if (action.type == "increase") {
    return count + 1;
  } else if (action.type === "decrease") {
    return count - 1;
  } else if (action.type == "reset") {
    // count = 0;
    return (count = 0);
  } else {
    return count;
  }
}
