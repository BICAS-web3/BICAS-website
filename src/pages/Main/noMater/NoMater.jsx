import React from 'react'
import "./noMater.scss"

export default function NoMater() {

    let items = [
        {
            id: 1,
            img: 'NoMaterImg1.png',
            title: 'FAIR ENVIRONMENT WITH RELIABLE RULES',
        },
        {
            id: 2,
            img: 'NoMaterImg2.png',
            title: 'EASY QUICK AND GUARANTEED PAYOUTS',
        },
        {
            id: 3,
            img: 'NoMaterImg3.png',
            title: 'MULTIPLY YOUR EARNINGS WITH OUR HOLD TO EARN SYSTEM',
        },
        {
            id: 4,
            img: 'NoMaterImg4.png',
            title: 'TARGET BICS TOKENS IN OUR "META MINER" GAME',
        },
    ]

    return (
        <div className="NoMater">
            <h3>No matter what you play,</h3>
            <h2>you make money!</h2>
            <div className="NoMater_items">
                <div className="inner">
                    {items.map((item) => {
                        return (
                            <div key={item.id} className="NoMater_item">
                                <div className="img">
                                    <img src={'./img/' + item.img} alt="" />
                                </div>
                                <span className="text">{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}