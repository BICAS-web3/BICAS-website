import React from 'react'
import "./solidProduct.scss"

import synergy from "../../../assets/img/synergy.png"

export default function SolidProduct() {
    return (
        <div className="SolidProduct">
            <div className="SolidProduct_synergy">
                <img className="SolidProduct_synergy_bg" src={synergy} alt="" />

                <h2 className="title1">A SOLID PRODUCT</h2>
                <h2 className="title2">IN SYNERGY</h2>
                <h2 className="title3">WITH NEW TECHNOLOGIES</h2>
            </div>
            <div className="SolidProduct_gambling">
                <div className="SolidProduct_row1">
                    <h2 className="left">SOLID PRODUCT - GAMBLING</h2>
                    <p className="right">А SOLID PRODUCT</p>
                </div>
                <div className="SolidProduct_row2">
                    <div className="SolidProduct_left">
                        <div className="amount">
                            <span className="num">+$500</span>
                            <span className="text">billion</span>
                        </div>
                        <div className="underNum_text">One of the fastest growing niches with capitalization</div>
                    </div>
                    <div className="SolidProduct_right">
                        <p className="text">IT ENSURES THAT THE PRODUCT DEMANDED AND USED BY THE AUDIENCE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
