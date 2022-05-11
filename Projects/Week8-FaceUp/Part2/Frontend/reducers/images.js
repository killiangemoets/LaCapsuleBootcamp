export default function (imagesList = [], action) {
  if (action.type == "addurl") {
    let imagesListCopy = [...imagesList];

    console.log(action.image);
    // imagesListCopy.push(action.image);
    imagesListCopy.unshift(action.image);
    // console.log("----REDUCER------");
    // console.log(imagesListCopy);

    return imagesListCopy;
  } else if (action.type == "removeImage") {
    const imagesListCopy = imagesList.filter(
      (image) => image.name !== action.name
    );

    return imagesListCopy;
  } else if (action.type == "cleanImages") {
    return [];
  } else {
    return imagesList;
  }
}
