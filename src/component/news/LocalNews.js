import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem.js'

const apiKey = 'd7823b1f334049e6bde50a93b6a75e31';

const LocalNews = () =>  {
    const [newslist, setNewsList] = useState([]);

   useEffect(() => {
       fetch(`http://newsapi.org/v2/top-headlines?country=us&from=2021-05-01&sortBy=publishedAt&apiKey=${apiKey}`)
       .then(res=>res.json())
       .then(data=>{
           
           setNewsList(data.articles)
       })
   },[setNewsList])
        return (
            <div>
                {
                    newslist.map(news => (
                        <div key={news.index}>
                        <NewsItem  props={news}/>
                        </div>
                    ))
                }
               
            </div>
        )
    
}

export default LocalNews;