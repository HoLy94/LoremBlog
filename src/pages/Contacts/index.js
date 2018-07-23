import React, {Component} from 'react';
import MapContainer from '../../components/Map';

import './index.css';

class Contacts extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='contacts-page'>
                <div className="container">
                    <h1 className='contacts_title'>Get in touch</h1>
                    <div className="contacts-form">
                        <div className="contacts-form_item contacts-form_item__half">
                            <label htmlFor="contacts_name" className="contacts-form_label">Name</label>
                            <input type="text" id='contacts_name' className='contacts-form_input'/>
                        </div>
                        <div className="contacts-form_item contacts-form_item__half">
                            <label htmlFor="contact_mail" className="contacts-form_label">Email</label>
                            <input type="text" id='contacts_mail' className='contacts-form_input'/>
                        </div>
                        <div className="contacts-form_item">
                            <label htmlFor="contacts_message" className="contacts-form_label">Message</label>
                            <textarea id='contacts_message' className='contacts-form_textarea' rows='3'/>
                        </div>
                        <button className="contacts-form_submit btn">Send</button>
                    </div>
                </div>
                <MapContainer/>
            </div>

        );
    }
}


export default Contacts;