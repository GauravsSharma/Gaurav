import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);


const AnimatedTextLines = ({ text, className }) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    console.log(lines);
    
    const containerRef = React.useRef(null);
    const lineRefs = React.useRef([]);
    useGSAP(()=>{
      if(lineRefs.current.length){
          gsap.from(lineRefs.current,{
            y:100,
            opacity:0,
            duration:1,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger:{
                trigger:containerRef.current,
            }
        })
      }
    })
    return (
        <div className={className
         }
         ref={containerRef}>
            {
                lines.map((line, index) => (
                    <span
                    ref={el => lineRefs.current[index] = el}
                    key={index} className='block leading-relaxed tracking-wide text-pretty'>{line}</span>
                ))
            }
        </div>
    )
}

export default AnimatedTextLines
