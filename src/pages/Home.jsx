import { Canvas } from '@react-three/fiber'
import { useState, Suspense, useEffect, useRef } from 'react'
import Loader from '../components/Loader'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'
import Book from '../models/Book'
import Dragon from '../models/Dragon'

import medieval from '../assets/tavern.mp3'
import { soundoff, soundon } from '../assets/icons'
import Tutorial from '../components/Tutorial'


const Home = () => {

  const [isLoaded, setIsLoaded] = useState(false)
  //libraries and variables
  const audioRef = useRef(new Audio(medieval));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  //useEffect for music
  useEffect(() => {
    const loadModel = async () => {
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoaded(true);
    };
    loadModel();

    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  //adjustments function
  const adjustBookforScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
    } else {
      screenScale = [0.67, 0.67, 0.67];
    }
    return [screenScale, screenPosition, rotation]
  }

  const adjustDragonforScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.0125, 0.0125, 0.0125];
      screenPosition = [0, -2.5, 0]
    } else {
      screenScale = [0.025, 0.025, 0.025];
      screenPosition = [-5, -4, -5]
    }
    return [screenScale, screenPosition];
  }

  const adjustBirdforScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [-5, 0, 0]

    } else {
      screenScale = [1, 1, 1];
      screenPosition = [-10, 0, 0]

    }
    return [screenScale, screenPosition];
  }

  const [bookScale, bookPosition, bookRotation] = adjustBookforScreenSize();
  const [dragonScale, dragonPosition] = adjustDragonforScreenSize();
  const [birdScale, birdPosition] = adjustBirdforScreenSize();

  //webpage design
  return (
    <section className='w-full h-screen relative'>

      <div className='absolute top-28 left-0 right-0 z-10 flex
      items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas

        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-default"
          }`}


        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
        <directionalLight position={[15,12,10]} intensity={1.5}/>
        <ambientLight intensity={0.3}/>
        <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
        
          {isLoaded && (<>
    
            <Bird position={birdPosition}
              scale={birdScale}
              rotation={[0, -20, 0]} />

            <Sky isRotating={isRotating}
            />

            <Book position={bookPosition}
              scale={bookScale}
              rotation={bookRotation}
              isRotating={isRotating}
              setCurrentStage={setCurrentStage}
              setIsRotating={setIsRotating} />

            <Dragon scale={dragonScale}
              position={dragonPosition}
              isRotating={isRotating}
              rotation={[0, 20, 0]} />

          </>)}
        </Suspense>
      </Canvas>

      <div>
        <Tutorial message="Press A or -> to go forward and D or <- to go backward" duration={20000} />
      </div>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />

      </div>
    </section>
  )
}

export default Home