import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios/index";

class Article extends Component {
    handleDelete = () => {
        const {onDelete, article: {id}} = this.props;

        onDelete({
            id,
        });
    };
    handleUpdate = () => {
        const {onUpdate, article: {id}} = this.props;

        document.body.classList.add('modal__open');
        onUpdate(id);
    };
    handleFilter = (event) => {
        const {onFilter} = this.props;

        onFilter(event.target.getAttribute('data-category'))
    };
    handleOpen = () => {
        const {article} = this.props;
        article.views +=1;

        axios.put(`/articles/${article.id}`, article);
    };


    render() {
        const {article: {img, title, shortDescription, id, date, views, author, category}, admin} = this.props;
        return (
            <article className='article'>
                <header className='article_header'>
                    <img className="article_img" src={img} alt={`${title}`}/>
                    {admin && <div className="article_change-panel">
                        <button className="article_edit" onClick={this.handleUpdate}><i className="fa fa-edit"/>
                        </button>
                        <button className="article_delete" onClick={this.handleDelete}><i className="fa fa-trash"/>
                        </button>
                    </div>}
                </header>
                <main className="article_content">
                    <Link to={`/post/${id}`}><h2
                        className='article_title' onClick={this.handleOpen}>{title}</h2></Link>
                    <p className='article_paragraph'>{shortDescription}
                        <Link to={`/post/${id}`} className='article_link' onClick={this.handleOpen}>more
                            <i className="fa fa-angle-double-right"/>
                        </Link>
                    </p>
                    <div className="article_description">
                        <h4 className="article_date"><i className="fa fa-calendar"/> {date}</h4>
                        <h4 className="article_views"><i className="fa fa-eye"/> {views}</h4>
                        <h4 className='article_author'><i className="fa fa-user"/> {author}</h4>
                    </div>
                </main>
                <footer className="article_footer">
                    {category.map((category, index) =>
                        <span key={index} className='article_category' onClick={this.handleFilter}
                              data-category={category}>{category}</span>
                    )}
                </footer>
            </article>
        );
    }
}

export default Article;