import React, {Component} from 'react';

import NewArticle from './NewArticle';

class NewList extends Component{
    render() {
        return (
            <ul className='popular-list'>
                {this.props.articles.map(article =>
                    <NewArticle article={article} key={article.id}/>
                )}
            </ul>
        )
    }
}

export default NewList;