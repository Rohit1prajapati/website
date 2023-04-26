import React from 'react'
import Herosec from './components/Herosec'
import Contact from './Contact'
import Service from './Service'

const Home = () => {
  const homedata={
    name:['Welcome To RohiTECH'],
    img:'https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=600',
    head:'',
    link:'https://github.com/Rohit1prajapati',
    button:'GitHub',
    para:'Hii Guys ,'
  }
  return (
    <>
      <Herosec {...homedata}/> 
      <Service/>
      <Contact/>
    </>
  )
}

export default Home