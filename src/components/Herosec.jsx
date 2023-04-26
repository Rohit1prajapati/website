import React from 'react';
import Typewriter from 'typewriter-effect';
import './Herosec.css';
import '../assets/style.css';



const Herosec = ({para,img,name,head,link,button}) => {
    return (
        <>
            <div className='max-width grid grid-two-column' >

                <div className='left-side'>

                    <div className='hero-top-data'>
                        <p >{para}</p>
                    </div>
                    <div className='hero-heading'> <h1> 
                    <Typewriter
                            options={{
                                strings:name.map((i)=>{return i}),
                                autoStart: true,
                                loop: true,
                            }}
                        />

                        </h1></div>


                    <div className='hero-para'>
                       {head}
                    </div>
                    <div>

                        <a href={link} target='_blank' download>
                            <button className='btn'>{button}</button>
                        </a>

                    </div>

                </div>
                <div className='right-side'>
                    <picture>
                        <img src={img}
                            alt='img' className='hero-img'></img>
                    </picture>
                </div>

            </div>
        </>
    )
}

export default Herosec;