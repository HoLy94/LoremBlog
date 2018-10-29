import React, {Component} from 'react';

import NewArticle from './NewArticle';

class NewList extends Component{
    render() {
        const {articles} = this.props;

        return (
            <ul className='popular-list'>
                {articles.map(article =>
                    <NewArticle article={article} key={article.id}/>
                )}
            </ul>
        )
    }
}

export default NewList;