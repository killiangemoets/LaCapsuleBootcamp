export default function (articlesList = [], action) {
  if (action.type == "addArticle") {
    let articlesListCopy = [...articlesList];

    articlesListCopy.push(action.article);

    return articlesListCopy;
  } else if (action.type == "removeArticle") {
    const articlesListCopy = articlesList.filter(
      (article) => article.title !== action.title
    );

    return articlesListCopy;
  } else {
    return articlesList;
  }
}
