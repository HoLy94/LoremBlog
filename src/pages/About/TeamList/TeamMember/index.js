import React, {Component} from 'react';

class TeamMember extends Component {
    render() {
        return (
            <div className="team-list_item">
                <img className="team-list_item-img" src={this.props.member.photo} alt={this.props.member.name}/>
                <h3 className="team-list_item-title">{this.props.member.name}<br/><span>{this.props.member.position}</span>
                </h3>
                <div className="team-list_item-desc">
                    <p>{this.props.member.description}</p>
                </div>
                <ul className="team-list_item-socials">
                    <li>
                        <a href={this.props.member.socials.twitter}><i className="fa fa-twitter"/></a>
                    </li>
                    <li>
                        <a href={this.props.member.socials.facebook}><i className="fa fa-facebook"/></a>
                    </li>
                    <li>
                        <a href={this.props.member.socials.dribble}><i className="fa fa-dribbble"/></a>
                    </li>
                    <li>
                        <a href={this.props.member.socials.instagram}><i className="fa fa-instagram"/></a>
                    </li>
                    <li>
                        <a href={this.props.member.socials.linkedin}><i className="fa fa-linkedin"/></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TeamMember;