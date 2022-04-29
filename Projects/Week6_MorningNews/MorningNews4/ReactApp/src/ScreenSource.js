import React, { useState, useEffect } from "react";
import "./App.css";
import { List, Avatar } from "antd";
import Nav from "./Nav";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const NEWSAPI_KEY = "86a3a3a56e154b13a3db4a45fe7d034f";

function ScreenSource(props) {
  const [sourceList, updateSourceList] = useState([]);

  async function loadNews(country) {
    var rawResponse = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?country=${country}&apiKey=${NEWSAPI_KEY}`
    );
    var response = await rawResponse.json();
    updateSourceList(() => response.sources);
  }

  useEffect(() => {
    loadNews("gb");
  }, []);

  // const data = [
  //   {
  //     title: "Ant Design Title 1",
  //   },
  //   {
  //     title: "Ant Design Title 2",
  //   },
  //   {
  //     title: "Ant Design Title 3",
  //   },
  //   {
  //     title: "Ant Design Title 4",
  //   },
  // ];

  return (
    <div>
      <Nav />

      <div className="Banner">
        <div className="flags">
          <img
            src="../images/france-flag.png
      "
            width="50"
            height="50"
            className="flag"
            alt=""
            onClick={() => loadNews("fr")}
          />
          <img
            src="../images/great-bretain-flag.png
      "
            width="50"
            height="50"
            className="flag"
            alt=""
            onClick={() => loadNews("gb")}
          />
        </div>
      </div>

      <div className="HomeThemes">
        <List
          itemLayout="horizontal"
          dataSource={sourceList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<Link to={`/sources/${item.id}`}>{item.name}</Link>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { myArticles: state.myArticles, myToken: state.myToken };
}

export default connect(mapStateToProps, null)(ScreenSource);

// export default ScreenSource;
