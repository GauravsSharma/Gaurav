import React, { useRef } from 'react'
import AnimatedHeader from "../components/AnimatedHeader"
import AnimatedTextLines from '../components/AnimatedTextLines'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const About = () => {
    const aboutText = `I’m a full-stack developer obsessed with turning real problems into clean, performant products. From pixel-perfect frontends in Next.js to robust Node.js backends with Redis caching and smart rate limiting — I build systems that don’t just work, they scale.
  When I’m not shipping:
💡 Solving DSA problems (350+ and counting)
🚀 Improving performance and system design
🧠 Learning deeper backend architecture and scalability patterns
🛠 Turning side projects into serious products`;
const imageRef = useRef(null)
useGSAP(()=>{
gsap.to('#about',{
    scale:0.95,
    duration:1,
    ease:'power1.inOut',
    scrollTrigger:{
        trigger:'#about',
        start:"bottom 80%",
        end:"bottom 20%",
        scrub:true,
    }
})
gsap.set(imageRef.current,{
    clipPath:"polygon(0 100%, 100% 100%,100% 100%, 0% 100% )"
})
gsap.to(imageRef.current,{
    clipPath:"polygon(0% 0%, 100% 0% , 100% 100%, 0% 100%)",
    duration:2,
    ease:"power4.out",
    scrollTrigger:{
        trigger:imageRef.current
    }
})
},[])
  return (
   <section id='about' className='min-h-screen rounded-b-4xl bg-black '>
        <AnimatedHeader
        p1='code with purpose, build to scale'
        text='Passionate about clean arcitecture
        I build scalable high performance solutions
        from prototype to production.'
        heading='About'
        withScroll={true}
        textColor='text-white'
        />
        <div className='flex mt-50 flex-col justify-between items-center gap-14 px-8 pb-14 text-lg font-light tracking-wide lg:flex-row md:text-xl lg:text-2xl text-white/60'>
        <img ref={
            imageRef
        } src="/images/man.jpg" alt="" className='w-md rounded-2xl'/>
        <AnimatedTextLines
         text={aboutText}
         className={'text-base sm:text-xl'}
        />
        </div>
   </section>
  )
}

export default About
