import React, {Component} from 'react';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";
import classNames from 'classnames';
import axios from "axios/index";

class NewArticle extends Component {
    state = {
        title: '',
        author: '',
        description: '',
        content: '',
        img: '',
        category: [],
        views: 0,
        isImageLoaded: false,
        id: this.props.articles.length + 1
    };
    handleChange = event => {
        const {target: {value, name}} = event;

        this.setState({
            [name]: value
        });
    };
    handleImg = event => {
        const {target: {files}} = event;

        if (files && files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
                    img: e.target.result,
                    isImageLoaded: true
                });
            };
            reader.readAsDataURL(files[0]);
        }
    };
    handleCreate = () => {
        document.body.classList.remove('modal__open');
        const date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
        const data = {
            author: this.state.author,
            title: this.state.title,
            shortDescription: this.state.description,
            content: [{ paragraph: this.state.content}],
            img: this.state.img,
            category: this.state.category,
            views: this.state.views,
            date: date,
            id: this.state.id,
            timeToRead: 2
        };
        const {create} = this.props;

        create(data);
        axios.post('/articles/', data);
    };
    handleCancel = () => {
        const {cancel} = this.props;

        document.body.classList.remove('modal__open');
        cancel();
    };
    render() {
        const {img, isImageLoaded, title, author, description, content} = this.state;

        return (
            <div className="article_new">
                <header className="article_new-header">
                    {img.length > 1 && <img className="article_new-img" src={img} alt='New'/>}
                    <div className="article_new-img__new">
                        <label htmlFor="newImage">Add image <i className="fa fa-image"/></label>
                        <input type="file" id='newImage' onChange={this.handleImg}/>
                    </div>
                    <button className={classNames("article_new-close", {"article_new-close__loaded": isImageLoaded})} onClick={this.handleCancel}><i className="fa fa-times"/>
                    </button>
                </header>
                <div className="article_new-input">
                    <h3>Title: </h3>
                    <input
                        name='title'
                        type="text"
                        value={title}
                        onChange={this.handleChange}/>
                </div>
                <div className="article_new-input">
                    <h3>Author: </h3>
                    <input
                        name='author'
                        type="text"
                        value={author}
                        onChange={this.handleChange}/>
                </div>
                <div className="article_new-input">
                    <h3>Description: </h3>
                    <textarea
                        name='description'
                        value={description}
                        onChange={this.handleChange}/>
                </div>
                <div className="article_new-input">
                    <h3>Content: </h3>
                    <textarea
                        name='content'
                        value={content}
                        onChange={this.handleChange}/>
                </div>
                <footer className="article_new-footer">
                    <button className="btn article_new-btn" onClick={this.handleCancel}>cancel</button>
                    <button className="btn article_new-btn" onClick={this.handleCreate}>create</button>
                </footer>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};
const mapDispatchToProps = dispatch => {
    return {
        create: article => dispatch(actions.createArticleAction(article)),
        cancel: () => dispatch(actions.cancelArticleCreateAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);