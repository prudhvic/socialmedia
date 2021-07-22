import React from "react";
import Articles from "./Articles";
import { useState, useEffect } from "react";
const Cinema = () => {
  let [News, setNews] = useState([])
    let [isLoading,setIsLoading]=useState(true)
  
  useEffect(() => {
     
      let url=`https://newsapi.org/v2/everything?q=cinema&from=2021-07-20&to=2021-07-22&sortBy=popularity&apiKey=48ea256b9eca48698443fd521a86edc0`
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((news) => {
          setNews(news.articles);
          setIsLoading(false)
      });
  }, [isLoading]);
  
  return (
    <div>
      {isLoading?<h1 className="loader">Loading...</h1>:""}
      <div className="grid">
        {News.map((article) => (
          <Articles article={article} />
        ))}
      </div>
    </div>
  );
};

export default Cinema;
