import {skills, experiences} from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA'


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hi There! My name is <span className = "blue-gradient_text front-semibold drop-shadow">Dan</span>.
      </h1>

      <div className = "mt-5 flex flex-col gap-3 text-slate-500">
      <p>I'm an aspiring software developer that is trying to jump into the world of tech! Coming from a background in sales with an interest in history and international relations, my curiosity is boundless and I never want to stop learning!</p>
    </div>

    <div className = "py-10 flex flex-col">
        <h3 className = "subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                  />
              </div>
            </div>
          ))}
        </div>
    </div>

      <div className="py-16">
            <h3 className="subhead-text">My Journey</h3>
        <div className = "mt-5 flex flex-col gap-3 text-slate-500">
         <p>Throughout my life, I have pursued diverse experiences that fuel my curiosity and drive for growth. Starting with a degree in International Studies, I built a solid foundation in critical thinking and adaptability. My 15 years of experience in the automotive industry taught me the value of resilience, customer insight, and managing complex responsibilities. A personal interest in language led me to study Japanese in Tokyo, which deepened my adaptability and cultural awareness. Now, I’m channeling this journey into technology, where I am eager to bring my unique perspective and dedication to a career in software development.</p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) =>(
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>}
                iconStyle={{background: experience.iconBg}}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
                >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.company_name}
                  </h3>
                  <p className ="text-black-500 font-medium font-base"
                  style={{margin:0}}>
                    {experience.title}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li className="text-black-500/50">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className = "border-slate-200"/>
      <CTA />
    </section>
  )
}

export default About
