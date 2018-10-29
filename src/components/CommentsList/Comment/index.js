import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {comment: {name, message}} = this.props;

        return (
            <div className='comment_item'>
                <h3 className='comment_item-title'>{name}</h3>
                <p className='comment_item-text'>{message}</p>
            </div>
        )
    }
}

export default Comment;