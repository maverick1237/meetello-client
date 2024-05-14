/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import {motion , useInView , useAnimation } from 'framer-motion'


function Reveal({children  ,className='' , animationDelay=0, colorBoxDelay=0 , startingPoint}) {
    const ref  = useRef(null);
    const isInView = useInView(ref ,{once:true});

    const mainAnimationControls = useAnimation();
    const slideAnimationControls = useAnimation();

    useEffect(() => {
        console.log(isInView)
        
        
        if(isInView){
            mainAnimationControls.start('visible')
            slideAnimationControls.start('visible')
        }
        


    } , [isInView])

    return (
    <div ref={ref} className={`relative overflow-hidden w-[100%] ${className}`}>
     
     <motion.div 
     variants={{
         hidden:{ opacity:0,y:75},
         visible:{opacity:1,y:0}
         }
     }
     initial="hidden"
     animate={mainAnimationControls}
     transition={{duration:.5 , delay:animationDelay}}
     >
            {children}
     </motion.div>
    <motion.div
    variants={{
        hidden:{left:0},
        visible:{left:'100%'}
    }}
    initial="hidden"
    animate={slideAnimationControls}
    transition={{
        start:startingPoint,
        duration:.5 ,
        delay:colorBoxDelay,
        ease:'easeInOut'
    }}
    className='absolute top-4 bottom-4 left-0 right-0 bg-pink-500 '
    />
    </div>
  )
}

export default Reveal