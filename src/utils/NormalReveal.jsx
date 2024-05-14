/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import {motion , useInView , useAnimation } from 'framer-motion'


function NormalReveal({children  ,className='' , animationDelay=0 , }) {
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
    </div>
  )
}

export default NormalReveal