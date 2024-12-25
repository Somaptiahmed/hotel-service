import React from 'react';
import Lottie from 'lottie-react';
import reception from "../assets/lottie/reception.json"; 
import spa from "../assets/lottie/spa.json"; 

const Animation = () => {
    return (
        <div className="w-8/12 mx-auto py-10">
            
            <h2 className="text-3xl font-bold text-center text-blue-950 mb-6">
                Experience Ultimate Comfort and Relaxation
            </h2>
            
            
            <p className="text-center text-gray-600 mb-6">
                Explore our premium services for a luxurious stay. Whether you seek a warm welcome at reception or a rejuvenating spa experience, we've got you covered.
            </p>

            <div className='flex justify-center gap-10'>
               
                <div>
                    <h3 className="text-xl font-semibold text-center text-blue-950 mb-4">Welcome to Our Reception</h3>
                    <Lottie animationData={reception} className="w-72 h-72" />
                </div>
                
               
                <div>
                    <h3 className="text-xl font-semibold text-center text-blue-950 mb-4">Relax and Unwind at Our Spa</h3>
                    <Lottie animationData={spa} className="w-72 h-72" />
                </div>
            </div>
        </div>
    );
};

export default Animation;

