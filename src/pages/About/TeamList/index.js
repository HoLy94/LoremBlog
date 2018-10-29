import React, {Component} from 'react';
import axios from 'axios';
import TeamMember from './TeamMember';

class TeamList extends Component {
    state = {
        team: []
    };

    componentDidMount() {
        axios.get('/team')
            .then(response => {
                this.setState({
                    team: response.data
                });
            });
    }

    render() {
        const {team} = this.state;

        return (
            <div className="team-list">
                {team.map(member =>
                    <TeamMember member={member} key={member.id}/>
                )}
            </div>
        );
    }
}

export default TeamList;