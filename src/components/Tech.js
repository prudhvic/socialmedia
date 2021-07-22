import React from "react";
import Articles from "./Articles";
import { useState, useEffect } from "react";
const Tech = () => {
  let [News, setNews] = useState([]);
  let [isLoading,setIsLoading]=useState(true)
  useEffect(() => {
     
      let url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=48ea256b9eca48698443fd521a86edc0`
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((news) => {
          setNews(news.articles);
          setIsLoading(false)
      });
  }, []);
 
  
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

export default Tech;
