import React from 'react'
import "./JoinRevolution.scss"

import bg from "../../../assets/img/joinRevolution_bg.jpg"
import Btn1 from '../../../components/ui/Btn1/Btn1'

export default function JoinRevolution() {
    return (
        <div className="JoinRevolution">
            <img src={bg} alt="" />

            <div className="JoinRevolution_btn">
                <Btn1
                    text={'join the ecosystem'}
                    func={() => { }}
                    style={{
                        backgroundColor: '#FE0524',
                    }}
                />
            </div>
        </div>
    )
}