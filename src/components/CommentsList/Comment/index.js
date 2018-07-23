import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <div className='comment_item'>
                <h3 className='comment_item-title'>{this.props.comment.name}</h3>
                <p className='comment_item-text'>{this.props.comment.message}</p>
            </div>
        )
    }
}

export default Comment;