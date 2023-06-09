import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
            <p>
                2023 MSN Headphones All rights reserved
            </p>
            <p className='icons'>
                <AiOutlineTwitter />
                <AiFillInstagram />
            </p>
    </div>
  )
}

export default Footer