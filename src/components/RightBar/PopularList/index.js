import React, {Component} from 'react';

import PopularArticle from './PopularArticle';

class PopularList extends Component{
    render() {
        const {articles} = this.props;

        return (
            <ul className='popular-list'>
                {articles.map(article =>
                    <PopularArticle article={article} key={article.id}/>
                )}
            </ul>
        )
    }
}

export default PopularList;