import React, {Component} from 'react';

class NewComment extends Component {
    state = {
        commentName: '',
        commentMessage: ''
    };

    handleChange = event => {
        const {target: {value, name}} = event;

        this.setState({
            [name]: value
        });
    };

    handleClick = () => {
        const {click} = this.props;

        click({
            name: this.state.commentName,
            message: this.state.commentMessage
        })
    };

    render() {
        const {commentName, commentMessage} = this.state;

        return (
            <div className='comment_new'>
                <h2 className='comment_title'>You can leave a comment</h2>
                <input className='comment_new-input' name='commentName' type="text" placeholder='Name'
                       value={commentName}
                       onChange={this.handleChange}/>
                <textarea className='comment_new-textarea' name='commentMessage' placeholder="Comment" rows='10'
                          value={commentMessage} onChange={this.handleChange}/>
                <button className='btn' onClick={this.handleClick}>send</button>
            </div>
        )
    }
}

export default NewComment;