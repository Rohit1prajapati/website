import React from 'react';
import './moreService.css';
const Service = () => {
  const sdata = [{
    cover: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    link: 'https://www.lipsum.com/'
  },
  {
    cover: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    link: 'https://www.lipsum.com/'
  },
  {
    cover: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    link: 'https://www.lipsum.com/'
  },
  
  {
    cover: 'https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    link: 'https://www.lipsum.com/'
  },
  
  {
    cover: 'https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    link: 'https://www.lipsum.com/'
  },
  {
    cover: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: ' Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    link: 'https://www.lipsum.com/'
  }
  
  ]
  return (
    <>
       <>
      <div className='max-width serv-cont'>
        <h2 className='our-ser'>Our Services</h2>
        <div className='grid grid-three-column'>
          {
            sdata.map((items) => {
              return (
                <>
                  <div className='main' >
                    <div className='cards' >
                      <div className='card'>
                        <img src={items.cover} alt='mypics' className='pic' ></img>
                      </div>
                      <div className='heading'>
                        <h2>{items.title}</h2>
                        <h3>{items.name}</h3>
                      </div>
                      <a href={items.link} target='_blanks' className='card-btn'>
                        <button className='btn ' >Learn more</button>
                      </a>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
    </>
  )
}

export default Service