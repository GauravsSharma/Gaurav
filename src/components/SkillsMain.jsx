import React from 'react'
import AnimatedHeader from './AnimatedHeader'
import { servicesData } from '../constants/index.js'
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)

const SkillsMain = () => {
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
    <div id='skills' className='min-h-screen bg-black rounded-4xl'>
      <AnimatedHeader
        p1='200 skills found'
        heading='Skills'
        text="Here are a few technologies
        I've been working with recently"
        textColor="text-white"
        withScroll={true}
      />
      <div className='mt-40'>
        {
          servicesData.map((service, index) => (
            <div key={index}
              ref={el => serviceRefs.current[index] = el}
              className='sticky px-5 sm:px-10  pt-5 pb-12 text-white border-t-2 border-white/30  bg-black'
              style={isDesktop ? { top: `calc(10vh + ${index * 5}em)`, marginBottom: `${(servicesData.length - index - 1) * 5}rem` } : { top: 0 }}
            >
              <div className="flex justify-between items-center gap-4 font-light">
                <div className="flex flex-col gap-6">
                  <h2 className='text-2xl lg:text-4xl'>{service.title}</h2>
                  <p className='text-base leading-relaxed tracking-widest lg:text-xl text-white/60 text-pretty'>{service.description}</p>
                  <div className="flex flex-col gap-2 text-xl sm:gap-4 lg:text-2xl text-white/80">{
                    service.items.map((item, idx) => (
                      <div key={idx}>
                        <h3 className='flex'>
                          <span className='mr-12 text-base text-white/30'>0{idx + 1}</span>
                          {item.title}
                        </h3>
                        {idx < service.items.length - 1 && <div className='w-full h-px my-2 bg-white/30' />}

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

export default SkillsMain
