import React from 'react'
import './news.css'

const NewsItem = ({ props }) => {
    return (
        <div className="news">
          <h1 className="news__title">{props.title}</h1>
          <span className="news__source"> {props.source.name}</span>
          <img src={props.urlToImage} className="news_image" alt={props.urlToImage}></img>
          <p className="news__desc">{props.description}</p>
          <p className="news_content">{props.content}</p>
          <span className="news__author">{props.author}</span> <br />
        </div>
      );
}

export default NewsItem
