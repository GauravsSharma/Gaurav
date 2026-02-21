import React, { useRef, useState } from 'react'
import AnimatedHeader from '../components/AnimatedHeader'
import { projects } from '../constants/index'
import { Icon } from '@iconify/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Projects = () => {
  const [currentIdx, setCurrentIdx] = useState(null);
  const previewRef = useRef(null)
  const moveX = useRef(null);
  const moveY = useRef(null);
  const move = useRef({ x: 0, y: 0 })
  const overlaysRef = useRef([])
  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out"
    })
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out"
    })
    gsap.from("#project", {
      y: 100,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project"
      }
    })
  })
  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIdx(index)
    const el = overlaysRef.current[index]
    if (!el) return;
    gsap.killTweensOf(el)
    gsap.fromTo(el, {
      clipPath: "polygon(0 100%, 100% 100%,100% 100%, 0% 100% )"
    }, {
      clipPath: "polygon(0% 0%, 100% 0% , 100% 100%, 0% 100%)",
      duration: 0.15,
      ease: "power2.out",
    })
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    })
  }
  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIdx(null)
    const el = overlaysRef.current[index]
    if (!el) return;
    gsap.killTweensOf(el)
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%,100% 100%, 0% 100% )",
      duration: 0.2,
      ease: "power2.in"
    })
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out"
    })
  }
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    move.current.x = e.clientX + 24
    move.current.y = e.clientY + 24
    moveX.current(move.current.x)
    moveY.current(move.current.y)
  }
  return (
    <section id='projects'>
      <AnimatedHeader
        p1='Logic meets Aesthetics, Seamlessly'
        heading='Projects'
        text='Featured projects that have meticulously
      creafted with passion to drive
      result and impact'
        textColor='text-black'
        withScroll={true}
      />

      <div className='mt-40 md:mt-50  flex relative flex-col font-light' onMouseMove={handleMouseMove}>
        {projects.map((project, idx) => (
          <div
            id='project'
            key={project.id}
            className='flex relative flex-col gap-1 py-5 cursor-pointer group md:gap-2'
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <div
              ref={(ele) => overlaysRef.current[idx] = ele}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"></div>
            <div className='flex justify-between px-5 sm:px-10 items-center text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white'>
              <h3 className='lg:text-xl text-lg'>{project.name}</h3>
              <a  href={project.href} target="_blank" rel="noopener noreferrer">
          
              <Icon icon="meteor-icons:arrow-up-right" className='md:size-6 size-5' />
              </a> 
            </div>
            <div className='h-0.5 w-full bg-black/80' />
            <div className='flex px-5 sm:px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm  gap-x-5  md:group-hover:px-12'>
              {project.frameworks.map((framwork, idx) => (
                <p key={framwork.id} className='transition-colors text-black duration-500 md:group-hover:text-white'>{framwork.name}</p>
              ))}
            </div>
            <div className="relative flex justify-center items-center px-5 sm:px-10 md:hidden h-[400px]">
              <img src={project.bgImage} alt="" className='h-full w-full object-cover rounded-md brightness-50' />
              <img src={project.image} alt="" className='bg-center absolute px-12 rounded-xl' />
            </div>
          </div>
        ))}
        <div ref={previewRef} className='fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[660px] md:block hidden opacity-0'>
          {
            currentIdx !== null && (<img src={projects[currentIdx].image} alt="" className='w-full h-full object-cover' />)
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
