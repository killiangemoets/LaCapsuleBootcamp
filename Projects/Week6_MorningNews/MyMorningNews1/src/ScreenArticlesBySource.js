import React, { useState, useEffect } from "react";
import "./App.css";
import { Card, Icon, Modal } from "antd";
import Nav from "./Nav";
import { useParams } from "react-router-dom";

const NEWSAPI_KEY = "86a3a3a56e154b13a3db4a45fe7d034f";
const { Meta } = Card;

function ScreenArticlesBySource() {
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
      console.log(response.articles[0].content);
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
                  <Icon type="like" key="ellipsis" />,
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

export default ScreenArticlesBySource;
