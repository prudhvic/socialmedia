import React from "react";
import Articles from "./Articles";
import { useState, useEffect } from "react";
const Home = () => {
  let [News, setNews] = useState([]);
  let [query, setQuery] = useState("usa");
    let [search, setSearch] = useState("");
    let [isLoading,setIsLoading]=useState(true)
  useEffect(() => {
     
      let url=`https://newsapi.org/v2/everything?q=${query}&from=2021-07-20&to=2021-07-22&sortBy=popularity&apiKey=48ea256b9eca48698443fd521a86edc0`
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((news) => {
          setNews(news.articles);
          setIsLoading(false)
      });
  }, [query]);
  function handleSubmit(e) {
      e.preventDefault();
      if (!search) {
          alert("please enter something")
      }
    setQuery(search);
    setSearch("");
  }
  console.log(News);
  return (
    <div>
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
          </form>
          {isLoading?<h1 className="loader">Loading...</h1>:""}
      <div className="grid">
        {News && News.map((article) => (
          <Articles article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
