import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PopularArticle extends Component{
    render() {
        return (
            <li className='popular-article'>
                <div className='popular-article_header'>
                    <Link to={`/post/${this.props.article.id}`} className='popular-article_link'>
                        <h2 className='popular-article_title'>
                            {this.props.article.title}
                        </h2>
                    </Link>
                </div>
                <div className='popular-article_footer'>
                    <h5 className='popular-article_read'>
                        {this.props.article.timeToRead} min read
                    </h5>
                    <h5 className='popular-article_views'>
                        {this.props.article.views} views
                    </h5>
                    <h5 className='popular-article_date'>
                        {this.props.article.date}
                    </h5>
                </div>
            </li>
        )
    }
}

export default PopularArticle;