import React, { useState } from "react";
import "./App.css";
import { Card, Icon, Modal } from "antd";
import Nav from "./Nav";
import { connect } from "react-redux";

const { Meta } = Card;

function ScreenMyArticles(props) {
  const [seeModals, setSeeModals] = useState([]);

  const setModalVisible = function (state, i) {
    setSeeModals((previousState) => {
      const newState = [...previousState];
      newState.splice(i, 1, state);
      return newState;
    });
  };

  const renderEmpty = function (numArticles) {
    if (numArticles) {
      return;
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          No Articles
        </div>
      );
    }
  };

  return (
    <div>
      <Nav />

      <div className="Banner" />
      {renderEmpty(props.myArticles.length)}
      <div className="Card">
        {props.myArticles.map((article, i) => {
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
                    type="delete"
                    key="ellipsis"
                    onClick={() => props.removeFromWishList(article.title)}
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

function mapStateToProps(state) {
  return { myArticles: state.myArticles };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromWishList: function (title) {
      dispatch({ type: "removeArticle", title });
    },
  };
}

// export default ScreenMyArticles;
export default connect(mapStateToProps, mapDispatchToProps)(ScreenMyArticles);
