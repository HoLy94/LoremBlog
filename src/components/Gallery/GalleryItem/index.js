import React, {Component} from 'react';

class GalleryItem extends Component{
    handleClick = () => {
        this.props.click(this.props.item)
    };
    render() {
        return (
            <div className='gallery_item' style={{backgroundImage: `url(${this.props.item.img})`}}>
                <button className='gallery_item-btn' onClick={this.handleClick}><i className='fa fa-plus-circle'/></button>
            </div>
        )
    }
}

export default GalleryItem;