import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a project in mind? <br className='sm:block hidden'/>
        Let's discuss about it!</p>
        <Link to="/contact" className='btn'>
        Contact Me!
        </Link>
    </section>
)
}

export default CTA