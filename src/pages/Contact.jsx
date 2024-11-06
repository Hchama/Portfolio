import { Canvas } from "@react-three/fiber";
import { React, Suspense, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import Loader from '../components/Loader';

import Knight from '../models/Knight';

import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Forward');


  const { alert, showAlert, hideAlert} = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleFocus = () => setCurrentAnimation('Jump');
  const handleBlur = () => setCurrentAnimation('Forward');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Victory Pose');

      emailjs

        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name ,
          to_name: 'Hobie' ,
          from_email: form.email ,
          to_email: 'hobie841@gmai.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY


      ).then(() =>{
        setIsLoading(false);
        showAlert({show: true, text: 'Message sent succesffuly!', type: 'success'})
        

        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation('Forward')
          setForm({name: '', email: '', message: ''}); 
        }, [3000])

      }).catch(() => {
        setIsLoading(false);
        setCurrentAnimation('Forward');

        showAlert({show: true, text: 'Message not received', type: 'danger'})
      })
  };


  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert}/>}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text blue-gradient_text'>Contact me here!</h1>
              <p className="mt-1 flex glex-col gap-3 text-slate-500">You can also message me through my email hobie841@gmail.com</p>
        <form
          ref={formRef}
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Juan Dela Cruz'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='JuanCruz@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Your message!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]
      ">
        <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}>
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Knight
            currentAnimation={currentAnimation}
            position={[0.5, -1, 1]}
            rotation={[12.6, -0.6, 0]}
            scale={[1,1,1]}
            />
          </Suspense>
        </Canvas>
      </div>

    </section>
  );
};

export default Contact;