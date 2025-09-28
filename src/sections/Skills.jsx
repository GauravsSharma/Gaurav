import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);


const Skills = () => {
     useGSAP(()=>{
        gsap.to("#title-skill1",{
            xPercent:20,
            scrollTrigger:{
                target:"#title-skill1",
                scrub:true
            }
        })
        gsap.to("#title-skill2",{
            xPercent:-30,
            scrollTrigger:{
                target:"#title-skill2",
                scrub:true
            }
        })
        gsap.to("#title-skill3",{
            xPercent:100,
            scrollTrigger:{
                target:"#title-skill3",
                scrub:true
            }
        })
        // gsap.to("#title-skill4",{
        //     xPercent:-100,
        //     scrollTrigger:{
        //         target:"#title-skill4",
        //         scrub:true
        //     }
        // })
    })
    return (
        <div
            className='mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive'
        >
            <div id='title-skill1' className='flex justify-center items-center gap-3 -translate-x-32'>
                <p className='font-normal'>React.js</p>
                <div className='w-10 h-1 md:w-32 bg-gold' />
                <p className='italic'>Next.js</p>
                <div className='w-10 h-1 md:w-32 bg-gold' />
                <p>Tailwind </p>
            </div>
            <div id='title-skill2' className='flex justify-center items-center gap-3 translate-x-32'>
                <p className='font-normal'>Node.js</p>
                <div className='w-10 h-1 md:w-32 bg-gold' />
                <p className='italic'>Express.js</p>
                <div className='w-10 h-1 md:w-32 bg-gold' />
                <p>MongoDB</p>
            </div>
            <div id='title-skill3' className='flex justify-center items-center gap-3 -translate-x-32'>
                <p className='font-normal'>Python</p>
                <div className='w-10 h-1 md:w-32 bg-gold' />
                <p className='italic'>Typecript</p>
                {/* <div className='w-10 h-1 md:w-32 bg-gold' />
                <p>Scalibility</p> */}
            </div>
            {/* <div id='title-skill4' className='flex justify-center items-center gap-3 translate-x-48'>
                <p className='font-normal'>Databases</p>
            </div> */}
        </div>
    )
}

export default Skills
