import React from 'react'
import "./Team.scss"

import iconLinkedin from "../../../assets/img/linkedin.svg"

export default function Team() {

    let members = [
        {
            id: 1,
            memberName: 'Bogdan Karichkovsky',
            place: 'Founder',
            img: 'bogdan.jpg',
            linkedInLink: 'https://www.linkedin.com/in/bogdan-karichkovsky-57a892250',
        },
        {
            id: 2,
            memberName: 'Adam Coltuc',
            place: 'CTO',
            img: 'adam.jpg',
            linkedInLink: 'https://www.linkedin.com/in/adam-coltuc-712489252/',
        },
        {
            id: 3,
            memberName: 'Vlad Svitan’ko',
            place: 'Co-Founder',
            img: 'vlad.jpg',
            linkedInLink: 'https://www.linkedin.com/in/vlad-svitanko/',
        },
        {
            id: 4,
            memberName: 'Gleb Radchenko',
            place: 'Co-Founder',
            img: 'gleb.jpg',
            linkedInLink: 'https://www.linkedin.com/in/gleb-specter-a75b77237/',
        },
        {
            id: 5,
            memberName: 'Vadim Hortolomei',
            place: 'CEO',
            img: 'vadim.jpg',
            linkedInLink: 'https://www.linkedin.com/in/vadim-hortolomei-86a632246',
        },
        {
            id: 6,
            memberName: 'Nikita Gradinar',
            place: 'Team Lead',
            img: 'nikita.jpg',
            linkedInLink: 'https://www.linkedin.com/mwlite/in/%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B0-%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0%D1%80%D1%8C-2a70b5252',
        },
        {
            id: 7,
            memberName: 'Vasily Peyu',
            place: 'Motion Designer',
            img: 'vasia.jpg',
            linkedInLink: 'https://www.linkedin.com/in/%D0%BF%D0%B5%D1%8E-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9-815633248/',
        },
        {
            id: 8,
            memberName: 'Vladimir Mavrodi',
            place: 'Developer',
            img: 'vovchik.jpg',
            linkedInLink: 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%BC%D0%B0%D0%B2%D1%80%D0%BE%D0%B4%D0%B8-35a090147/',
        },
        {
            id: 9,
            memberName: 'Adrian Hortolomei',
            place: '3D Designer',
            img: 'adrian.jpg',
            linkedInLink: 'https://www.linkedin.com/in/adrian-hortolomei-5044a824a/',
        },
        {
            id: 10,
            memberName: 'Mykhailo Unhurian',
            place: 'Project',
            img: 'MykhailoUnhurian.jpg',
            linkedInLink: 'https://www.linkedin.com/in/misha-intro-118a20178/',
        },
    ]

    return (
        <div className="Team" id="team">
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
                                <span className="place">{member.place}</span>
                                <div className="icon">
                                    <a href={member.linkedInLink}>
                                        <img src={iconLinkedin} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}