import React from 'react';

const Banner = () => { 
    return (
        <div className="pt-10">
            
            {/* --- Main Content Section (Text & Links) --- */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Text Content */}
                <div className="text-center">
                    <h1 className='font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight'> 
                        We Build <br />
                        <span className='text-[#632ee3]'>Productive</span> Apps
                    </h1>
                    
                    <p className='text-base sm:text-lg text-gray-600 mt-6 max-w-3xl mx-auto'>
                        At **HERO.IO**, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>

                {/* App Store Links - Centered using justify-center */}
                
            </div>

            {/* --- Hero Image Section --- */}
            <div className="flex justify-center items-center mt-8">
                <img 
                    src="/src/assets/hero.png" 
                    alt="Hero" 
                    className="max-w-full h-auto px-4 md:max-w-4xl"
                />
            </div>

            {/* --- Statistics Section --- */}
            <div className="bg-[#7a48ee] text-white py-12 sm:py-16 mt-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center font-bold text-3xl sm:text-4xl mb-10">
                        Trusted by Millions, Built for You
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div className="space-y-1">
                            <p className="text-sm opacity-90 uppercase tracking-wider">Total Downloads</p>
                            <h1 className="font-extrabold text-5xl sm:text-6xl">29.6M</h1>
                            <p className="text-sm opacity-80">21% more than last month</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm opacity-90 uppercase tracking-wider">Total Reviews</p>
                            <h2 className="font-extrabold text-5xl sm:text-6xl">906K</h2>
                            <p className="text-sm opacity-80">46% more than last month</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm opacity-90 uppercase tracking-wider">Active Apps</p>
                            <h2 className="font-extrabold text-5xl sm:text-6xl">132+</h2>
                            <p className="text-sm opacity-80">31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;