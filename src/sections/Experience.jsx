import React from 'react'
import AnimatedHeader from '../components/AnimatedHeader';
import { experienceData, servicesData } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const Experience = () => {
    const text = `Curious about my professional 
      journey or internship experience ?`;
    const serviceRefs = React.useRef([]);
    const isDesktop = useMediaQuery({ minWidth: "48rem" })
    useGSAP(() => {
        serviceRefs.current.forEach((ele) => {
            if (!ele) return;
            gsap.from(ele, {
                y: 200,
                duration: 1,
                ease: "circ.out",
                scrollTrigger: {
                    trigger: ele,
                    start: "top 80%"
                }
            })
        })
    }, [])
    return (
        <div id='experience' className=''>
            <AnimatedHeader
                p1={"From Experience to Expertise."}
                heading={"Experience"}
                text={text}
                textColor={"text-black"}
                withScroll={true}
            />

            <div className='mt-40'>
                {
                    experienceData.map((service, index) => (
                        <div key={index}
                            ref={el => serviceRefs.current[index] = el}
                            className='sticky px-5 sm:px-10  pt-5 pb-12 text-black border-t-2 border-black/80   bg-[#e5e5e0]'
                            style={isDesktop ? { top: `calc(10vh + ${index * 4}em)`, marginBottom: `${(servicesData.length - index - 1) * 4}rem` } : { top: 0 }}
                        >
                            <div className="flex justify-between items-center gap-4 font-light">
                                <div className="flex flex-col gap-6">
                                    <h2 className='text-2xl lg:text-4xl'>{service.title}</h2>
                                    <p className='text-base leading-relaxed tracking-widest lg:text-xl text-black/80 text-pretty'>{service.description}</p>
                                    <div className="flex flex-col gap-2 text-xl sm:gap-4 lg:text-2xl text-black/80">{
                                        service.items.map((item, idx) => (
                                            <div key={idx}>
                                                <h3 className='flex'>
                                                    <span className='mr-12 text-base text-black/80'>0{idx + 1}</span>
                                                    {item.title}
                                                </h3>
                                                {idx < service.items.length - 1 && <div className='w-full h-px my-2 bg-black/80' />}

                                            </div>
                                        ))
                                    }</div>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Experience
