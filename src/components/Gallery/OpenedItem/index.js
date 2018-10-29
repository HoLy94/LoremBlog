import React, {Component} from 'react';

class OpenedItem extends Component{
    render() {
        const {click, item: {img, description}} = this.props;

        return(
            <div className='opened-item' style={{backgroundImage: `url(${img})`}}>
                <button className='opened-item_btn' onClick={click}><i className='fa fa-times'/></button>
                <p className='opened-item_desc'>{description}</p>
            </div>
        );
    }
}
export default OpenedItem;