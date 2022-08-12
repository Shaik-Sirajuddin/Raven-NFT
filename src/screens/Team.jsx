import React, { Component } from 'react';
import TeamMem from './TeamMem';
class TeamMember {
    constructor(_name, _image, _position, _insta, _twitter) {
        this.name = _name;
        this.image = _image;
        this.position = _position;
        this.insta = _insta;
        this.twitter = _twitter
    }
}
export default class Team extends Component {
    constructor() {
        super()
        this.team = [
            new TeamMember(
                "Aiden N. Bradley",
                "./images/team_aiden.png",
                "Founder And CEO (Chief Executive Officer)",
                "https://www.instagram.com/theofficialaidenbradley/",
                "https://twitter.com/AidenBOfficial"),
            new TeamMember(
                "Briana Cordero",
                "./images/team_briana.png",
                "Lead Artist and Art Director",
                "#",
                null),
            new TeamMember(
                "Elena Heffelfinger",
                "./images/team_elena.png",
                "Founder and Executive Assistant",
                "https://www.instagram.com/elenaheff_/",
                null)

        ]
    }
    render() {
        return <div className="section z-bigger">
            <div className="section " id="buy">

                <div className="col-md-12">
                    <div className="title-wrap text-center">
                        <div className="back-title" style={{ "color": "white" }}>Our Team</div>
                        <h3 className="text-white">Simply The Best.</h3>
                    </div>
                </div>

                <div class="container">
                    <div class="row text-center">
                        {
                            this.team.map((mem) => {
                                return (
                                    <TeamMem member={mem} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    }
} 
