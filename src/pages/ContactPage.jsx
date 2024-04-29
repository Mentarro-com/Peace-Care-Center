import React from 'react'
import ContactMap from '../components/ContactMap'
import ContactPhone from '../components/ContactPhone'

const ContactPage = () => {
  return (
    <div className='text-black '>
      <ContactMap />
      <ContactPhone />
    </div>
  )
}

export default ContactPage