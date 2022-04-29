import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./App.css";
import { Card, Icon, Modal } from "antd";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const NEWSAPI_KEY = "86a3a3a56e154b13a3db4a45fe7d034f";
const { Meta } = Card;

function ScreenArticlesBySource(props) {
  console.log(props.myToken);
  const { source } = useParams();

  const [articlesList, setArticlesList] = useState([]);
  const [seeModals, setSeeModals] = useState([]);

  useEffect(() => {
    async function loadNews() {
      var rawResponse = await fetch(
        `https://newsapi.org/v2/everything?sources=${source}&apiKey=${NEWSAPI_KEY}`
      );
      var response = await rawResponse.json();
      setArticlesList(() => response.articles);
      setSeeModals(() => Array(response.articles.length).fill(false));
    }
    loadNews();
  }, []);

  const setModalVisible = function (state, i) {
    setSeeModals((previousState) => {
      const newState = [...previousState];
      newState.splice(i, 1, state);
      return newState;
    });
  };

  const handleLike = function (article) {
    if (!props.myArticles.find((e) => e.title === article.title)) {
      props.addToWishList({
        urlToImage: article.urlToImage,
        title: article.title,
        description: article.description,
        content: article.content,
      });
    } else {
      props.removeFromWishList(article.title);
    }
  };

  const colorLike = function (article) {
    if (props.myArticles.find((e) => e.title === article.title)) {
      return { color: "blue" };
    } else {
      return {};
    }
  };

  return (
    <div>
      <Nav />

      <div className="Banner" />

      <div className="Card">
        {articlesList.map((article, i) => {
          return (
            <div key={i} style={{ display: "flex", justifyContent: "center" }}>
              <Card
                style={{
                  width: 300,
                  margin: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                cover={<img alt="example" src={article.urlToImage} />}
                actions={[
                  <Icon
                    type="read"
                    key="ellipsis2"
                    onClick={() => setModalVisible(true, i)}
                  />,
                  <Icon
                    type="like"
                    style={colorLike(article)}
                    key="ellipsis"
                    onClick={() => handleLike(article)}
                  />,
                ]}
              >
                <Meta title={article.title} description={article.description} />
              </Card>
              <Modal
                title={article.title}
                centered
                visible={seeModals[i]}
                onOk={() => setModalVisible(false, i)}
                onCancel={() => setModalVisible(false, i)}
              >
                <p>{article.content}</p>
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToWishList: function (article) {
      dispatch({ type: "addArticle", article });
    },
    removeFromWishList: function (title) {
      dispatch({ type: "removeArticle", title });
    },
  };
}

function mapStateToProps(state) {
  return { myArticles: state.myArticles, myToken: state.myToken };
}

// export default ScreenArticlesBySource;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenArticlesBySource);
