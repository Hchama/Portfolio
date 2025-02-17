import React from 'react'
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
        <h1 className='head-text'>
          Hi, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Hobie!</span>
        </h1>

      <div className='mt-5 flex glex-col gap-3 text-slate-1000'>
        <p>A Junior Developer based in Manila, Philippines.  
          I specialized in Software Engineering and Data Science, and my Dream is to become a Machine Learning Engineer!</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
          <h3 className='subhead-text'>Work Experience</h3>
            <div className='mt-5 flex glex-col gap-3 text-slate-950'>
              <p> I've worked with many developers, learning a lot from them and applying it to my projects.
                I enjoy collaborating with people and brushing up my skills. Here's the rundown
              </p>
            </div>
            <div className='mt-12 flex'>
              <VerticalTimeline>
                {experiences.map((experience) =>(
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    icon={<div className='flex justify-center items-center w-full h-full'>
                      <img
                         src={experience.icon}
                         alt={experience.company_name}
                         className='w-[60%] h-[60%] object-contain'
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
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {experience.title}
                      </h3>
                      <p className='text-black-500 font-medium font-base'
                      style={{margin:0}}>
                        {experience.company_name}
                      </p>
                    </div>
                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className='text-black-500 font-normal pl-1 text-sm'>
                           {point}
                        </li>

                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
  
}

export default About