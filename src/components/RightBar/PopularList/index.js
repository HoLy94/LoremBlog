import React, {Component} from 'react';

import PopularArticle from './PopularArticle';

class PopularList extends Component{
    render() {
        return (
            <ul className='popular-list'>
                {this.props.articles.map(article =>
                    <PopularArticle article={article} key={article.id}/>
                )}
            </ul>
        )
    }
}

export default PopularList;