import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PopularArticle extends Component{
    render() {
        const {article: {id, title, timeToRead, views, date}} = this.props;

        return (
            <li className='popular-article'>
                <div className='popular-article_header'>
                    <Link to={`/post/${id}`} className='popular-article_link'>
                        <h2 className='popular-article_title'>
                            {title}
                        </h2>
                    </Link>
                </div>
                <div className='popular-article_footer'>
                    <h5 className='popular-article_read'>
                        {timeToRead} min read
                    </h5>
                    <h5 className='popular-article_views'>
                        {views} views
                    </h5>
                    <h5 className='popular-article_date'>
                        {date}
                    </h5>
                </div>
            </li>
        )
    }
}

export default PopularArticle;