import React, {Component} from 'react';

import './index.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <h4 className="footer_title">Created with <i className="fa fa-heart"/> by Vasyl</h4>
                <ul className="social">
                    <li className="social_item">
                        <a className="social_link" href="https://www.facebook.com/" target="_blank"
                           rel="noopener noreferrer"><i className="fa fa-facebook-f"/></a>
                    </li>
                    <li className="social_item">
                        <a className="social_link" href="https://www.instagram.com/" target="_blank"
                           rel="noopener noreferrer"><i className="fa fa-instagram"/></a>
                    </li>
                    <li className="social_item">
                        <a className="social_link" href="https://www.linkedin.com/" target="_blank"
                           rel="noopener noreferrer"><i className="fa fa-linkedin"/></a>
                    </li>
                    <li className="social_item">
                        <a className="social_link" href="https://twitter.com/" target="_blank"
                           rel="noopener noreferrer"><i className="fa fa-twitter"/></a>
                    </li>
                    <li className="social_item">
                        <a className="social_link" href="https://github.com/" target="_blank" rel="noopener noreferrer"><i
                            className="fa fa-github"/></a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;