import React from 'react'
import "./blockchainTechs.scss"

import listIcon from "../../../assets/img/listIcon_star.svg"
import BlockchainTechs_bg from "../../../assets/img/BlockchainTechs_bg.png"

export default function BlockchainTechs() {

    let BlockchainTechs = [
        {
            id: 1,
            text: 'Help eliminate the distrust from the audience to such platforms, because all transactions become open and provide 100% honesty of actions',
        },
        {
            id: 2,
            text: 'Introducing new opportunities to reward players who become loyal fans of the platform',
        },
        {
            id: 3,
            text: 'More loyal players to invest in the project and watch it grow',
        },
    ]
    let BlockchainItems = [
        {
            id: 1,
            img: 'hat.png',
            title: 'ANONIMITY',
            text: 'You don\'t need to link your bank card, enter your real name and surname.With us you connect only your cryptocurrency wallet, which simplifies the process and makes it anonymous',
        },
        {
            id: 2,
            img: 'trancpicon.png',
            title: 'PROCESS TRANSPARENCY',
            text: 'No winnings will be hidden and all payments and other important information will be open and can be checked, due to pre-created smart contracts which cannot be changed after getting into block',
        },
        {
            id: 3,
            img: 'os_3Phone_icon.png',
            title: 'PAYMENT GUARANTEE',
            text: 'No one will block your payout, because everything is done quickly, automatically, without human involvement',
        },
    ]

    return (
        <div className="BlockchainTechs">
            <div className="Blockchain_techs">
                <div className="BlockchainTechs_bg">
                    <img src={BlockchainTechs_bg} alt="" />
                </div>
                <p className="new">NEW TECHNOLOGIES</p>
                <div className="Blockchain_right">
                    <h2>BLOCKCHAIN TECHNOLOGIES</h2>
                    <ul>
                        {BlockchainTechs.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className="icon">
                                        <img src={listIcon} alt="" />
                                    </div>
                                    <div className="text">{item.text}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="Blockchain_items">
                {BlockchainItems.map((item) => {
                    return (
                        <div key={item.id} className="Blockchain_item">
                            <div className="img">
                                <img src={'./img/' + item.img} alt="" />
                            </div>
                            <h4>{item.title}</h4>
                            <div className="text">{item.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}