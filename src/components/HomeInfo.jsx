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
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> Hello there!👋 I am <span className="font-semibold">Daniel Chin</span>,<br/>An aspiring software developer! Welcome to my page! Feel free to take a look around!</h1>
  ),
  2: (
    <InfoBox
      text="Found out more about my skills and my journey!"
      link="/about"
      btnText="About"
    />
  ),
  3: (
    <InfoBox
      text="Led many passionate projects. Please give them a look!"
      link="/projects"
      btnText="Projects"
    />
  ),
  4: (
    <InfoBox
      text="You can contact me several ways! Feel free to reach out!"
      link="/contact"
      btnText="Contact"
    />
  )
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
