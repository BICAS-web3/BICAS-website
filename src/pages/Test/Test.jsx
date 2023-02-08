import React from 'react'
import TopBannerGif from "../../assets/img/topBannerGif.webp";

export default function Test() {
    return (
        <picture>
            <source srcSet={TopBannerGif} />
            <img src={TopBannerGif} alt="MDN" />
        </picture>
    )
}
