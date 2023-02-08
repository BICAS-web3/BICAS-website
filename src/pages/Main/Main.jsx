import React from 'react'
import "./Main.scss"
import BicasGif2 from './BicasGif2/BicasGif2'
import BlockchainTechs from './blockchainTechs/BlockchainTechs'
import NoMater from './noMater/NoMater'
import SolidProduct from './solidProduct/SolidProduct'
import Team from './Team/Team'
import TopBanner from './topBanner/TopBanner'
import Roadmap from './Roadmap/Roadmap'
import JoinRevolution from './JoinRevolution/JoinRevolution'
import Investments from './investments/Investments'

export default function Main() {

  return (
    <main className="main">
      <TopBanner/>
      <BicasGif2/>
      <Investments/>
      <NoMater/>
      <SolidProduct/>
      <BlockchainTechs/>
      <Team/>
      <Roadmap/>
      <JoinRevolution/>

      <div className="main_circleBlur circleBlur1"></div>
      <div className="main_circleBlur circleBlur2"></div>
      <div className="main_circleBlur circleBlur3"></div>
      <div className="main_circleBlur circleBlur4"></div>
      <div className="main_circleBlurRoadmap circleBlurRoadmap4"></div>
      <div className="main_circleBlurRoadmap circleBlurRoadmap5"></div>
      <div className="main_circleBlurRoadmap circleBlurRoadmap6"></div>
    </main>
  )
}
