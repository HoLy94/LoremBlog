import React, {Component} from 'react';

class OpenedItem extends Component{
    render() {
        return(
            <div className='opened-item' style={{backgroundImage: `url(${this.props.item.img})`}}>
                <button className='opened-item_btn' onClick={this.props.click}><i className='fa fa-times'/></button>
                <p className='opened-item_desc'>{this.props.item.description}</p>
            </div>
        );
    }
}
export default OpenedItem;