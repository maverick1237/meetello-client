import { useForm } from 'react-hook-form';
import Reveal from '../utils/Reveal';
import NormalReveal from '../utils/NormalReveal';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import {  useNavigate } from 'react-router-dom';
import { initRooms } from '../store/roomSlice';
import authService from '../service/auth';

import { useState } from 'react';


const Auth = () => {
    const { register, handleSubmit , reset } = useForm();
    const [showLogin, setShowLogin] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleLogin = async (data) => {
      if(data){
        try{
             console.log(data);
             console.log(process.env.NODE_ENV);
             const response = await authService.login(data);
                console.log(response);
                data['username']= response.data.username;
                data['userId'] = response.data['userId'];
                dispatch(login(data));
                dispatch(initRooms());
                navigate('/home');
                reset();

            return response;
        }
        catch(error){
            console.error(error);
        }
      }
    }

    const handleSignup = async (data) => {
        if(data){
            console.log(data);
            try {
                const response = await authService.signup(data);
                console.log(response);
                dispatch(login(data));
                dispatch(initRooms())
                navigate('/home')
                reset();
                return response;
            } catch (error) {
                console.error(error); 
            }
        }
    };

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className='bg-gradient-to-r from-[#333399] to-[#FF00CC] h-full min-h-screen w-[100%] absolute'>
        <div className="overflow-hidden main-container flex items-center justify-center">
        <img src='../../public/podcastbg.webp' className=" bg-no-repeat w-[100%] max-h-screen h-screen absolute opacity-5" />
        <div className="flex flex-col items-center form-container relative mt-[20vh] max-w-fit bg-white p-5 bg-opacity-20 rounded-xl">
            <Reveal animationDelay={0.5} >
           
            <h2 className='text-ivxl font-extrabold text-white text-center'>{showLogin ? 'Login' : 'Signup'}</h2>
            {showLogin ? (
                <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col">
                    <label htmlFor="email" className="text-white">Email</label>
                    <input type="email" {...register('email')} placeholder="Email" className="mb-2 w-[100%] 
                    placeholder:text-xl placeholder:font-bold placeholder:italic 
                    px-4 py-2
                    rounded-lg
                    text-xl font-semibold text-gray-600
                    decoration-none
                    " />
                    <label htmlFor="password" className="text-white">Password</label>
                    <input type="password" {...register('password')} placeholder="Password" className="mb-2 w-[100%] 
                    placeholder:text-xl placeholder:font-bold placeholder:italic 
                    px-4 py-2
                    rounded-lg
                    text-xl font-semibold text-gray-600
                    decoration-none" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-5">
                        Login
                    </button>
                </form>
            ) : (
                <NormalReveal  animationDelay={0} >
                        <form onSubmit={handleSubmit(handleSignup)} className="flex flex-col">
                    <label htmlFor="username" className="text-white">Username</label>
                    <input type="text" {...register('username')} placeholder="Username" className="mb-2 w-[100%] 
                    placeholder:text-xl placeholder:font-bold placeholder:italic 
                    px-4 py-2
                    rounded-lg
                    text-xl font-semibold text-gray-600
                    decoration-none" />
                    <label htmlFor="email" className="text-white">Email</label>
                    <input type="email" {...register('email')} placeholder="Email" className="mb-2 w-[100%] 
                    placeholder:text-xl placeholder:font-bold placeholder:italic 
                    px-4 py-2
                    rounded-lg
                    text-xl font-semibold text-gray-600
                    decoration-none" />
                    <label htmlFor="password" className="text-white">Password</label>
                    <input type="password" {...register('password')} placeholder="Password" className="mb-2 w-[100%] 
                    placeholder:text-xl placeholder:font-bold placeholder:italic 
                    px-4 py-2
                    rounded-lg
                    text-xl font-semibold text-gray-600
                    decoration-none" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-6">
                        Signup
                    </button>
                </form>
                </NormalReveal>
                
            )}
            <p className="mt-4">
                {showLogin ? "Don't have an account? " : 'Already have an account? '}
                <span className="text-blue-500 cursor-pointer duration-200" onClick={toggleForm}>
                    {showLogin ? 'Signup' : 'Login'}
                </span>
            </p>
        
            </Reveal>
            </div>
           
        </div>
                
        </div>
        
    );
};

export default Auth;

