import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GalleryItem from './GalleryItem';
import OpenedItem from './OpenedItem';

import './index.css';
import {connect} from "react-redux";

class Gallery extends Component {
    state = {
        openedImg: null,
        isOpen: false
    };

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    openImg = (item) => {
        document.body.classList.add('modal__open');
        this.setState({
            openedItem: item,
            isOpen: true
        });
    };
    closeImg = () => {
        document.body.classList.remove('modal__open');
        this.setState({
            openedImg: null,
            isOpen: false
        });
    };
    handleClickOutside = (event) => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            document.body.classList.remove('modal__open');
            this.setState({
                openedImg: null,
                isOpen: false
            });
        }
    };

    render() {
        const {items} = this.props;
        const {isOpen, openedItem} = this.state;

        return (
            <section className="gallery">
                {items.map(item =>
                    <GalleryItem item={item} key={item.id} click={this.openImg}/>
                )}
                {isOpen && <OpenedItem item={openedItem} click={this.closeImg}/>}
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.galleryItems,
    };
};


export default connect(mapStateToProps, null)(Gallery);