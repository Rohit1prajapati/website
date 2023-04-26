import React from 'react'
import Herosec from './components/Herosec'

const About = () => {
  const aboutdata={
    name:['Who I Am', 'Rohit Prajapati'],
    img:'https://images.pexels.com/photos/3184603/pexels-photo-3184603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    head:' Hii buddy , I Am Rohit A React Developer , MERN Stack Developer. YouTuber & Freelancer, Coding Lover',
    button:'Download CV',
    link:'../src/cv/rohitcv (2).pdf',
    para:'This is me'
  }
  return (
    <Herosec {...aboutdata}/>
  )
}

export default About