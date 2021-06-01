import React, { useState, useEffect }from 'react'

import NewsItem from './NewsItem.js'

const apiKey = 'd7823b1f334049e6bde50a93b6a75e31';
const Sports = () => {
    const [newslist, setNewsList] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?lang=en&category=sport&apiKey=${apiKey}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.articles)
            setNewsList(data.articles)
            
        })
    },[setNewsList])
         return (
             <div>
                 <h3>Welcome to Science Section of The News</h3>
                 <div>
                     {
                         newslist.map(news => (
                             <div key={news.index}>
                             <NewsItem  props={news}/>
                             </div>
                         ))
                     }
                 
                 </div>
             </div>
         )
     
 }
export default Sports

//The category you want to get headlines for. Possible options: business
/* entertainment
general
health
science
sports
technology 
https://newsapi.org/v2/sources?category=businessapiKey=API_KEY
*/