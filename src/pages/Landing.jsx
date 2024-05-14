import React from 'react'
import Button from '../components/Button'
import { FaPodcast, FaComments, FaUsers } from 'react-icons/fa';
import Reveal from '../utils/Reveal';
import NormalReveal from '../utils/NormalReveal';
import { Link } from 'react-router-dom';


function Feature({ icon, title, description }) {
  return (
    <div className="flex items-center">
      <div className="mr-4 text-2xl text-white">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className='bg-gradient-to-r from-[#333399] to-[#FF00CC] h-full min-h-screen w-[100%] absolute '>
      <div className="overflow-hidden main-container">
      <img src='../../public/podcastbg.webp' className=" bg-no-repeat w-[100%] max-h-screen h-screen absolute opacity-5" />
      
      <div className="sm:flex sm:flex-row  justify-center items-center 
      heading-container-div ">
      <div className="max-w-[80%] 
      sm:max-w-[45%] 
      ml-[30%] mt-16 sm:mt-[5%]
      sm:ml-12
      sm:mr-52
      items-center
      left-contianer-div
      ">
       
        <h1 className="
        text-xxxl
        font-extrabold
        sm:text-vxl
        leading-tight
        text-white animate-fade-in duration-200
        ">
         <Reveal animationDelay={.35} >
         <span>We Provide </span>,
         </Reveal>
         <Reveal animationDelay={.45} colorBoxDelay={.15}>
          <span>So that You can <br/>Communicate</span>
         </Reveal>
         <Reveal animationDelay={.50} colorBoxDelay={.25}>
           <span>Effectively</span>
         </Reveal>
        </h1>
      </div>
      
      <div className="flex flex-col text-3xl ml-12 text-gray-200 max-w-[80%] md:max-w-[30%] mt-[10%] justify-center text-center sm:text-start items-center
      right-heading-container-div">
        <NormalReveal animationDelay={.70}>
        <h2 className='mb-2 text-white font-extrabold text-pretty underline text-2xl'>Welcome to our platform!</h2>
        <h2 className='mb-4 text-2xl italic '>Great way to communicate, podcast and many more!</h2>
        </NormalReveal>
        <NormalReveal  animationDelay={.80}>
          <Link to='/auth'>
          <Button className='md:w-[60%] sm:w-[80%] sm:rounded-2xl border border-white' text="Start here!" />
          </Link>
        </NormalReveal>
        
       
      </div>
      </div>
      
      <div className="sm:flex justify-center items-center mt-16 ml-[15%] sm:ml-[0]">
      <div className="md:max-w-[55%] md:ml-12">
        <NormalReveal animationDelay={.90}>
             <div className="feature-container">
        <Feature
          icon={<FaPodcast />}
          title="Podcasts"
          description="Listen to your favorite podcasts on the go."
        />
        </div>
        </NormalReveal>
       <NormalReveal animationDelay={1}>
       <div className="feature-container">
        <Feature
          icon={<FaComments />}
          title="Communication"
          description="Efficiently communicate with your team."
        />
         </div>
       </NormalReveal>
        <NormalReveal animationDelay={1.1}>
        <div className="feature-container">
        <Feature
          icon={<FaUsers />}
          title="Collaboration"
          description="Collaborate with others in real-time."
        />
        </div>
        </NormalReveal>
      </div>
      </div>
      
    </div>
    </div>
    
  );
}

export default Landing;


