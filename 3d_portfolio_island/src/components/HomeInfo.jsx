import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
  <div className="info-box">
    <p classNam="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow}/>
    </Link>
  </div>
)



const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> Hello, I am <span className="font-semibold">Daniel Chin</span>👋<br/>An aspiring software developer</h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led many passionate projects. Please give them a look!"
      link="/projects"
      btnText="My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Contacting me is easy!"
      link="/contact"
      btnText="Contact me"
    />
  )
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
