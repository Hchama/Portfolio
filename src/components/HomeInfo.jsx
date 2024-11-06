import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-grey py-4 px-8 text-white mx-5'>
        Hi, My name is 
        <span className='font-semibold mx-2 text-white'>Hobie</span>
        <br />
        A Fresh Graduate from Mapua University
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box neo-brutalism-grey'>
        <p className='font-medium sm:text-xl text-center  '>
          I Worked with many developers <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more!
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box neo-brutalism-grey'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects in college over the years. <br /> Curious about my work?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio!
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box neo-brutalism-grey'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> My email is hobie841@gmail.com
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Email me!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;