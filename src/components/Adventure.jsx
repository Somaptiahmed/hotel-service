import React from 'react';
import Lottie from 'lottie-react';
import adventureAnimation from "../assets/lottie/adventure.json"

const Adventure = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <h1 className="text-4xl font-bold text-center text-blue-950 mb-6">
                Embark on an Unforgettable Journey
            </h1>
            <div className='flex gap-5'>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Explore More to Unlock the Best Services
                    </h2>
                    <p className="text-gray-600">
                        Discover new places and experience the best services that cater to your every need. 
                        Whether you're looking for relaxation, adventure, or luxury, exploring more will help you 
                        find the perfect service for an unforgettable experience.
                    </p>
                </div>
                <div>
                    <Lottie animationData={adventureAnimation} />
                </div>
            </div>
        </div>
    );
};

export default Adventure;
