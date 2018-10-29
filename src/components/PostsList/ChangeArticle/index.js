import React, {Component} from 'react';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";
import axios from "axios/index";

class ChangeArticle extends Component {
    state = {
        id: this.props.article.id,
        title: this.props.article.title,
        author: this.props.article.author,
        description: this.props.article.shortDescription,
        content: this.props.article.content,
        img: this.props.article.img,
        category: this.props.article.category,
        isImageLoaded: false,
        date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        views: this.props.article.views
    };

    handleChange = (event) => {
        const {target: {value, name}} = event;

        this.setState({
            [name]: value
        });
    };

    handleImg = (event) => {
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
    handleUpdate = () => {
        const data = {
            id: this.state.id,
            author: this.state.author,
            title: this.state.title,
            shortDescription: this.state.description,
            content: this.state.content,
            img: this.state.img,
            category: this.state.category,
            date: this.state.date,
            views: this.state.views,
        };
        const {update} = this.props;

        update(data);

        axios.put(`/articles/${data.id}`, data)
            .then(() => {
                document.body.classList.remove('modal__open');
            });
    };
    handleCancel = () => {
        const {cancel} = this.props;

        document.body.classList.remove('modal__open');
        cancel();
    };

    render() {
        const {title, author, description, img} = this.state;

        return (
            <div className="article_change">
                <header className="article_change-header">
                    <img className="article_change-img" src={img} alt='New'/>
                    <div className="article_change-img__new">
                        <label htmlFor="newImage">Change image <i className="fa fa-image"/></label>
                        <input type="file" id='newImage' onChange={this.handleImg}/>
                    </div>
                    <button className='article_change-close' onClick={this.handleCancel}><i className="fa fa-times"/>
                    </button>
                </header>
                <div className="article_change-input">
                    <h3>New title: </h3>
                    <input
                        name='title'
                        type="text"
                        value={title}
                        onChange={this.handleChange}/>
                </div>
                <div className="article_change-input">
                    <h3>New author: </h3>
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
                        onChange={this.handleChange}
                        rows={5}/>
                </div>
                <footer className="article_change-footer">
                    <button className="btn article_change-btn" onClick={this.handleCancel}>cancel</button>
                    <button className="btn article_change-btn" onClick={this.handleUpdate}>update</button>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        article: state.articleToUpdate[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        update: article => dispatch(actions.updateArticleAction(article)),
        cancel: () => dispatch(actions.cancelArticleUpdateAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeArticle);