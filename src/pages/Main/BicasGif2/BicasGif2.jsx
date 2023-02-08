import React, { useEffect, useState } from 'react'
import "./BicasGif2.scss"

import gifImg2 from "../../../assets/img/gifImg2.svg"
import gifImg2_mob from "../../../assets/img/gifImg2_mob.svg"

export default function BicasGif2() {

    let [img, setimg] = useState(null)

    window.addEventListener("orientationchange", function () {
        // console.log(window.innerWidth)
        if (window.innerWidth <= 500 || window.orientation === 90) {
            setimg(<img src={gifImg2} alt="" />)
        } else if (window.innerWidth > 500 || window.orientation === 0) {
            setimg(<img src={gifImg2_mob} alt="" />)
        }
    }, false)

    useEffect(() => {
        if (window.innerWidth > 500 || window.orientation === 90) {
            setimg(<img src={gifImg2} alt="" />)
        } else if (window.innerWidth <= 500 || window.orientation === 0) {
            setimg(<img src={gifImg2_mob} alt="" />)
        }
    }, [])

    return (
        <div className="BicasGif2">
            <div className="BicasGif2_text">
                <span>BICAS</span>
                <p>Bicas is an ecosystem that builds a gambling destination in the WEB3 space</p>
            </div>
            <div className="BicasGif2_img">
                {img}

                <div className="BicasGif2_important">
                    <div className="BicasGif2_important_icon">i</div>
                    <p>BICS TOKEN IS THE ENERGY OF THE ECOSYSTEM, WHICH CONNECTS ALL DIRECTIONS ECONOMICALLY AND PROVIDES EXPONENTIAL GROWTH OF THE TOKEN</p>
                </div>
            </div>
        </div>
    )
}