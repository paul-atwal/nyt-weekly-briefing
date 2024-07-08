import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TopStories.css";

const TopStories = () => {
  const [articles, setArticles] = useState([]);
  const NYT_API_KEY = "M8q3c4BQMMk04Z0AmM9heQQwnKuEUgiG";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NYT_API_KEY}`
        );
        setArticles(response.data.results);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="top-stories">
      <h1>Top Stories</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
            <a href={article.url}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopStories;
