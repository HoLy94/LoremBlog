import React, {Component} from 'react';
import axios from "axios/index";
import {Link} from 'react-router-dom';

import CommentsList from '../../components/CommentsList';

import './index.css';

class PostFull extends Component {
    state = {
        openedArticle: {}
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get(`http://localhost:4000/articles/${this.props.match.params.id}`)
            .then(response => {
                this.setState({openedArticle: response.data});
            });
    };

    addComment = (comment) => {
        const article = this.state.openedArticle;
        article.comments = article.comments !== undefined ? [comment, ...article.comments] : [comment];
        this.setState({
            openedArticle: article
        });
        axios.put(`/articles/${article.id}`, article);
    };

    render() {
        const {openedArticle} = this.state;
        return (
            <React.Fragment>
                <div className="post-page_img" style={{backgroundImage: `url(${openedArticle.img})`}}/>
                <Link className="post-page_back" to='/'> <i className="fa fa-angle-left"/> back</Link>
                <section className="post-page_content container">
                    <h1 className='post-page_title'>{openedArticle.title}</h1>
                    <div className="article_description">
                        <h4 className="article_date"><i className="fa fa-calendar"/> {openedArticle.date}</h4>
                        <h4 className='article_author'><i className="fa fa-user"/> {openedArticle.author}</h4>
                    </div>
                    <div className="post-page_text">
                        {openedArticle.content !== undefined && openedArticle.content.map((item, index) =>
                            <div className="post-page_paragraph" key={index}>
                                {item.subTitle !== undefined && <h3>{item.subTitle}</h3>}
                                {item.paragraph !== undefined && <p>{item.paragraph}</p>}
                                {item.photo !== undefined && <img src={item.photo.url} alt={item.photo.alt}/>}
                            </div>
                        )}
                    </div>
                </section>
                <CommentsList comments={openedArticle.comments} click={this.addComment}/>
            </React.Fragment>
        );
    }
}

export default PostFull;