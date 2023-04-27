import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import attlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Brand = () => {
  return (
    <div className='gpt4__brand flex flex-wrap justify-center items-center section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={attlassian} alt="attlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand