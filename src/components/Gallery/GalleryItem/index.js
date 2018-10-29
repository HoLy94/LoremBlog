import React, {Component} from 'react';

class GalleryItem extends Component{
    handleClick = () => {
        this.props.click(this.props.item)
    };

    render() {
        const {item: {img, description}} = this.props;

        return (
            <div className='gallery_item'>
                <img className="gallery_item-img" src={img} alt={description}/>
                <button className='gallery_item-btn' onClick={this.handleClick}><i className='fa fa-plus-circle'/></button>
            </div>
        )
    }
}

export default GalleryItem;