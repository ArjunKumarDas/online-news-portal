import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './News.css';
const News = (props) => {
    const {title, description, urlToImage} = props.article;
    return (
        <div className="news-cotainer">
            <div className="news-part">
                    <Jumbotron>
                        <img className="photo" src={urlToImage} alt=""/>
                        <h6 className="line-height">{title}</h6>
                         <p className="line-height">{description}</p>
                        <p>
                            <Button variant="primary">More</Button>
                        </p>
                    </Jumbotron>
            </div>
            <div className="extra-info">

            </div>
        </div>
    );
};

export default News;
