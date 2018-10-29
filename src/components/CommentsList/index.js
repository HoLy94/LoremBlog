import React, {Component} from 'react';

import Comment from './Comment';
import NewComment from './NewComment';
import './index.css';

class CommentsList extends Component {
    render() {
        const {comments} = this.props;

        return (
            <section className="container comment">
                <h2 className="articles-list_title">Comments</h2>
                <NewComment click={this.props.click}/>
                <h2 className='comment_title'>Other comments</h2>
                {comments !== undefined && comments.map((comment, index) =>
                    <Comment comment={comment} key={index}/>
                )}
            </section>
        )
    }
}

export default CommentsList;