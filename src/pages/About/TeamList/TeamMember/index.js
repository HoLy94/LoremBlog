import React, {Component} from 'react';

class TeamMember extends Component {
    render() {
        const {member: {photo, name, position, description, socials:{twitter, facebook, dribble, instagram, linkedin}}} = this.props;

        return (
            <div className="team-list_item">
                <img className="team-list_item-img" src={photo} alt={name}/>
                <h3 className="team-list_item-title">{name}<br/><span>{position}</span>
                </h3>
                <p className="team-list_item-desc"> {description}</p>
                <ul className="team-list_item-socials">
                    <li>
                        <a href={twitter}><i className="fa fa-twitter"/></a>
                    </li>
                    <li>
                        <a href={facebook}><i className="fa fa-facebook"/></a>
                    </li>
                    <li>
                        <a href={dribble}><i className="fa fa-dribbble"/></a>
                    </li>
                    <li>
                        <a href={instagram}><i className="fa fa-instagram"/></a>
                    </li>
                    <li>
                        <a href={linkedin}><i className="fa fa-linkedin"/></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TeamMember;