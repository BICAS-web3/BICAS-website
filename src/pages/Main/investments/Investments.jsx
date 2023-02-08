import React from 'react'
import "./investments.scss"

import diagram from "../../../assets/img/diagram.png"

export default function Investments() {
    return (
        <div className="Investments">
            <div className="Invest_diagram">
                {/* <svg viewbox="0 0 538 538" class="progress-bar">
                    <circle r="290" cx="355" cy="355" fill="none" stroke-width="100" stroke="transparent" />
                    <circle r="290" cx="355" cy="355" fill="none" stroke-width="100" stroke="url(#linear-gradient)"
                        // stroke-linecap="round" 
                        stroke-dasharray="100 1300" // 1570
                        stroke-dashoffset="480" class="gradient" />
                    <defs>
                        <linearGradient id="linear-gradient">
                            <stop offset="0%" class="stp1" />
                            <stop offset="100%" class="stp2" />
                        </linearGradient>
                    </defs>
                </svg> */}
                <h3 className="Investments_currVolume">Current volume: <span>$320к</span></h3>
                <img src={diagram} alt="" />
            </div>
            <div className="Invest_text">
                <span>The number of</span>
                <h3>collected investments</h3>
                <span>in a private round</span>
            </div>
        </div>
    )
}