import React from 'react'
import "./noMater.scss"

import Rectangle_transparent from "../../../assets/img/Rectangle_transparent.svg"

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
                                <div className="NoMater_item_bg">
                                    <svg width="309" height="388" viewBox="0 0 309 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_bd_104_26)">
                                            <path d="M14 64C14 36.3858 36.3858 14 64 14H245C272.614 14 295 36.3858 295 64V324C295 351.614 272.614 374 245 374H64C36.3858 374 14 351.614 14 324V64Z" fill="#291D1E" fillOpacity="0.06" shapeRendering="crispEdges" />
                                            <path d="M14.5 64C14.5 36.6619 36.6619 14.5 64 14.5H245C272.338 14.5 294.5 36.6619 294.5 64V324C294.5 351.338 272.338 373.5 245 373.5H64C36.6619 373.5 14.5 351.338 14.5 324V64Z" stroke="url(#paint0_linear_104_26)" shapeRendering="crispEdges" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_bd_104_26" x="-16" y="-16" width="341" height="420" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_104_26" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="7" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />
                                                <feBlend mode="normal" in2="effect1_backgroundBlur_104_26" result="effect2_dropShadow_104_26" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_104_26" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_104_26" x1="360" y1="56.5" x2="154.5" y2="374" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.318329" stopColor="#DE001E" />
                                                <stop offset="0.739583" stopColor="white" stopOpacity="0.15" />
                                                <stop offset="1" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    {/* <img src={Rectangle_transparent} alt="" /> */}
                                </div>
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