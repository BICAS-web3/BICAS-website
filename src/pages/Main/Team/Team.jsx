import React from 'react'
import { Link } from 'react-router-dom'
import "./Team.scss"

import iconLinkedin from "../../../assets/img/icon-linkedin.svg"

export default function Team() {

    let members = [
        {
            id: 1,
            memberName: 'Top Gleb',
            img: 'teamImg1.jpg',
            linkedInLink: 'https://www.linkedin.com/',
        },
        {
            id: 2,
            memberName: 'Top Gleb',
            img: 'teamImg1.jpg',
            linkedInLink: 'https://www.linkedin.com/',
        },
        {
            id: 3,
            memberName: 'Top Gleb',
            img: 'teamImg1.jpg',
            linkedInLink: 'https://www.linkedin.com/',
        },
        {
            id: 4,
            memberName: 'Top Gleb',
            img: 'teamImg1.jpg',
            linkedInLink: 'https://www.linkedin.com/',
        },
        {
            id: 5,
            memberName: 'Top Gleb',
            img: 'teamImg1.jpg',
            linkedInLink: 'https://www.linkedin.com/',
        },
        {
            id: 6,
            memberName: 'Top Gleb',
            img: 'teamImg1.jpg',
            linkedInLink: 'https://www.linkedin.com/',
        },
    ]

    return (
        <div className="Team">
            <h2 className="title">executive Team</h2>

            <div className="Team_members">
                {members.map((member) => {
                    return (
                        <div key={member.id} className="oneMember">
                            <div className="oneMember_img">
                                <img src={'./img/' + member.img} alt="" />
                            </div>
                            <div className="oneMember_circle">
                                <span className="name">{member.memberName}</span>
                                <div className="icon">
                                    <Link to={member.linkedInLink}>
                                        <img src={iconLinkedin} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}