import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import AnimatedTextLines from './AnimatedTextLines'
const AnimatedHeader = ({
    p1="404 no bugs found",
    heading="Gaurav Sharma",
    text = `I build smart code 
        that works, design that truly speaks, and 
        solutions that genuinely matter.`,
    textColor="text-black",
    withScroll=false
}) => {
    const contextRef = React.useRef(null);
    const headerRef = React.useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger:withScroll?{trigger:contextRef.current}:undefined
        });

        tl.from(contextRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out "
        })
        tl.from(headerRef.current, {
            y: 200,
            opacity: 0,
            duration: 1,
            ease: "circ.out",
        }, "<+0.2")
    })
    return (
        <div ref={contextRef} className=''>
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%" }}>
                <div
                    ref={headerRef}
                    className="flex flex-col justify-end gap-5 pt-10 sm:gap-5">
                    <p className={`text-sm font-light tracking-[0.3rem] uppercase px-5 sm:px-10 ${textColor}`}>{p1}</p>
                    <div className='px-3 sm:px-10'>
                        <h1 className={`flex flex-col flex-wrap gap-10 ${textColor}  uppercase banner-text-responsive sm:gap-10 md:block`}>{heading}</h1>
                    </div>
                </div>
            </div>
            <div className={`relative px-5 sm:px-10 ${textColor} `}>
                <div className="absolute inset-x-0 border-t-2">
                    <div className="py-10 text-end sm:py-10">
                        <AnimatedTextLines text={text} className={"font-light uppercase value-text-responsive px-6"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedHeader
