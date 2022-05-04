export default function (POIList = [], action) {
  if (action.type == "addPOI") {
    let POIListCopy = [...POIList];

    POIListCopy.push(action.poi);

    return POIListCopy;
  } else if (action.type == "deletePOI") {
    const POIListCopy = POIList.filter((el) => el.title !== action.title);
    return POIListCopy;
  } else {
    return POIList;
  }
}
