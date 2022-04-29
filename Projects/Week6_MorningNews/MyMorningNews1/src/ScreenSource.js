import React, { useState, useEffect } from "react";
import "./App.css";
import { List, Avatar } from "antd";
import Nav from "./Nav";
import { Link, Redirect } from "react-router-dom";

const NEWSAPI_KEY = "86a3a3a56e154b13a3db4a45fe7d034f";

function ScreenSource() {
  const [sourceList, updateSourceList] = useState([]);

  useEffect(() => {
    async function loadNews() {
      var rawResponse = await fetch(
        `https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=${NEWSAPI_KEY}`
      );
      var response = await rawResponse.json();
      console.log(response.sources);
      updateSourceList(() => response.sources);
    }
    loadNews();
  }, []);

  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <div>
      <Nav />

      <div className="Banner" />

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

export default ScreenSource;
