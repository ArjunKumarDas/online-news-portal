
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect( () => {
        const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-07&sortBy=publishedAt&apiKey=9d8aa91290944bb5b175e1c852af39db';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    // console.log(articles)
    return (
        <div>
               {/* <h1>Top Headline : {articles.length}</h1> */}
               {
                articles.map(article => <News article={article}></News>)
               }
        </div>
    );
};

export default TopHeadline;