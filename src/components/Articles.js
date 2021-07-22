import React from "react";

const Articles = ({ article }) => {
  return (
    <div className="article">
      <img src={article?.urlToImage} alt={article.title} />
      <h2 className="title">{article?.title}</h2>
      <div className="content">
        <p className="text">{article?.content}</p>

        <blockquote className="author">written by {article?.author}</blockquote>
      </div>
    </div>
  );
};

export default Articles;
