import React from 'react'
import "./topBanner.scss"
import Btn1 from '../../../components/ui/Btn1/Btn1'

import TopBannerGif from "../../../assets/img/topBannerGif.gif";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function TopBanner() {
    return (
        <div className="TopBanner">
            <h1 className="title">
                <span>web3 las vegas where you</span>
                <span className="left">fun &</span>
                <span className="right">earn</span>
            </h1>
            <div className="TopBanner_btns">
                <div className="left">
                    <p>Bicas is a constantly expanding gaming ecosystem with different directions that embody the new reality of making money in WEB3</p>
                    <Btn1 
                        text={'buy token'}
                        func={() => {}}
                        style={{
                            backgroundColor: '#FE0524',
                        }}
                    />
                </div>
                <div className="right">
                    <p>play more - <br/> get more</p>
                    <a href="https://bcss-organization.gitbook.io/whitepaper-bicas-eng/">
                        <Btn1
                            text={'white paper'}
                            func={() => { }}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid #FFFFFF',
                            }}
                        />
                    </a>
                    
                </div>
            </div>

            <AnchorLink href='#footer' className="TopBanner_scrollDown">SCROLL DOWN</AnchorLink>

            <div className="TopBanner_gif">
                <img src={TopBannerGif} alt="" />
            </div>
        </div>
    )
}