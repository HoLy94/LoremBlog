import React, {Component} from 'react';

class NewComment extends Component {
    state = {
        commentName: '',
        commentMessage: ''
    };
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };
    handleClick = () => {
        this.props.click({
            name: this.state.commentName,
            message: this.state.commentMessage
        })
    };

    render() {
        return (
            <div className='comment_new'>
                <h2 className='comment_title'>You can leave a comment</h2>
                <input className='comment_new-input' name='commentName' type="text" placeholder='Name' value={this.state.commentName}
                       onChange={this.handleChange}/>
                <textarea className='comment_new-textarea' name='commentMessage' placeholder="Comment" rows='10'
                          value={this.state.commentMessage} onChange={this.handleChange}/>
                <button className='btn' onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

export default NewComment;