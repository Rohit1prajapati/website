import React, { useEffect, useState } from 'react';
import './toptobottom.css';
import { FaArrowUp } from "react-icons/fa";
const ToptBottom = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ttb = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const hiddentotop = () => {
        var scrollhieght = 250;

        var wescrollhieght = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(wescrollhieght)
        if (scrollhieght < wescrollhieght) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', hiddentotop);
    }, []);

    return (
        
          <div className='select-ttb'>
          {
                isVisible && (<div className='toptobottom' onClick={ttb}>
                    <FaArrowUp className='ttb' />
                </div>)
            }
          </div>
    
    )
}
export default ToptBottom;
