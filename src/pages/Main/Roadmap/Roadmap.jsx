import React from 'react'
import "./Roadmap.scss"

import roadMapLine_dsktp from "../../../assets/img/roadMapLine_dsktp.png"
import roadMapLine_mbl from "../../../assets/img/roadMapLine_mbl.png"

export default function Roadmap() {

    let roadMapItems = [
        {
            id: 1,
            title: '2021 Q4 2022 Q1',
            listItems: [
                'The genesis of the idea;',
                'Finding and assembling a team;',
                'Marketing market survey;',
                'Creating and thinking about a working concept;',
                'Writing the initial roadmap;',
                'Starting platform development;',
            ],
        },
        {
            id: 2,
            title: '2022 Q2',
            listItems: [
                'Development of a basic online casino platform, for the earliest launch of the MVP model;',
                'Marketing research;',
                'Creating a marketing strategy;',
                'Invested $200.000 self - funded in product',
            ],
        },
        {
            id: 3,
            title: '2022 Q3',
            listItems: [
                'Social media packaging;',
                'Website design and development;',
                'Development of technical documentation for the project;',
                'Work on the beta version of the online casino platform;',
                'Preparing for Private Round;',
            ],
        },
        {
            id: 4,
            title: '2022 Q4',
            listItems: [
                'Casino Release,',
                'Private Round,',
                'Whitelist launching,',
                'Marketing Phase 1,',
                '$BICS Token Launch + Distribution,',
                'Huge Airdrop,',
                'Governance, and utility token launching',
            ],
        },
        {
            id: 5,
            title: '2023 Q1',
            listItems: [
                'Security Smart Contract Audit,',
                'IDO(DEX Listing),',
                'Ambassador program launching,',
                'Staking Integration,',
                'Community TestNet Validation,',
                'CEX Listings, Onboarding first,',
                '2000 members, Open First Meta Mainer Gaming Map, and 1M  BCS token Unlocking…',
            ],
        },
        {
            id: 6,
            title: '2023 Q2',
            listItems: [
                'Mainnet Launch,',
                'Marketing Phase 2,',
                'Adding Boxes To The Platform,',
                'Developing Customization for each Player, + 18 games',
            ],
        },
        {
            id: 7,
            title: '2023 Q3',
            listItems: [
                'Apps Release,',
                'Metaverse Release,',
                'VIP Club Release,',
                'Legendary Cards Announcement,',
                'Unlocking 2 / 5 Maps in Meta Mainer',
            ],
        },
        {
            id: 8,
            title: '2023 Q4',
            listItems: [
                'Borrowing and Lending Option,',
                'Secondary Marketplace,',
                'Further Exchanges Listing,',
                'NFT collection Development',
            ],
        },
        {
            id: 9,
            title: '2024',
            listItems: [
                'Q1, 2',
                'Own Blockchain Launching,',
                'Unlocking 4 / 5 of Meta Mainer Maps',

                'Q3, 4',
                'Brands and Sponsored Onboarding to the Metaverse,',
                'Land Selling, +20 new games.',
            ],
        },
        {
            id: 10,
            title: '2025',
            listItems: [
                'Q1, 2',
                'Announce VP Poker, NFT collection Drop,',
                'Release 5 / 5 Maps of Metamainer + VR,',
                'Own Cybersecurity of the Blockchain',
                'Q3, 4',
                'VR Slots Launching',
                '+ 15 new games',
            ],
        },
        {
            id: 11,
            title: '2026 Q1,2',
            listItems: [
                'VR Casino Launching,',
                '+30 games,',
                'Closes Minting Function',
            ],
        },
    ]

    /* let [img, setimg] = useState(null)

    window.addEventListener("orientationchange", function () {
        // console.log(window.innerWidth)
        if (window.innerWidth <= 500 || window.orientation === 90) {
            setimg(<img src={gifImg2} alt="" />)
            console.log('window.innerWidth > 500 || window.orientation == 90', window.orientation, window.innerWidth)
        } else if (window.innerWidth > 500 || window.orientation === 0) {
            setimg(<img src={gifImg2_mob} alt="" />)
            console.log('window.innerWidth <= 500 || window.orientation == 0')
        }
    }, false)

    useEffect(() => {
        if (window.innerWidth > 500 || window.orientation === 90) {
            setimg(<img src={gifImg2} alt="" />)
            console.log('useEffect___window.innerWidth > 500 || window.orientation == 90')
        } else if (window.innerWidth <= 500 || window.orientation === 0) {
            setimg(<img src={gifImg2_mob} alt="" />)
            console.log('useEffect___window.innerWidth <= 500 || window.orientation == 0')
        }
    }, []) */

    return (
        <div className="Roadmap" id="Roadmap">
            <h3 className="title">road map</h3>

            <div className="Roadmap_content">
                {(window.innerWidth > 500)
                 ?
                    <img src={roadMapLine_dsktp} className="Roadmap_Line" />
                 :
                    <img src={roadMapLine_mbl} className="Roadmap_Line" />
                }

                {roadMapItems.map((item) => {
                    return (
                        <div key={item.id} className="Roadmap_item">
                            <ul>
                                {item.listItems.map((listItem) => {
                                    return <li key={listItem}>{listItem}</li>
                                })}
                            </ul>

                            <h3 className="Roadmap_item_title">{item.title}</h3>
                        </div>
                    )
                })}
                
                <div className="year y_2022">2022</div>
                <div className="year y_2023">2023</div>
                <div className="year y_2024">2024</div>
                <div className="year y_2025">2025</div>
                <div className="year y_2026">2026</div>
            </div>
        </div>
    )
}