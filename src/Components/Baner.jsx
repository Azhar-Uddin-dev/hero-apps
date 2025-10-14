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
                <div className="flex flex-wrap justify-center mt-8 mb-12">
                    {/* Google Play Button */}
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mx-2 my-2 px-6 py-3 bg-[#2F2F2F] text-white border border-black rounded-xl hover:bg-gray-800 transition shadow-lg"
                    >
                        <svg aria-label="Google Play logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M96 96H247V247H96" fill="#f24f23"></path>
                            <path d="M265 96V247H416V96" fill="#7eba03"></path>
                            <path d="M96 265H247V416H96" fill="#3ca4ef"></path>
                            <path d="M265 265H416V416H265" fill="#f9ba00"></path>
                        </svg>
                        Google Play
                    </a>

                    {/* App Store Button */}
                    <a
                        href="https://www.apple.com/app-store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mx-2 my-2 px-6 py-3 bg-[#2F2F2F] text-white border border-black rounded-xl hover:bg-gray-800 transition shadow-lg"
                    >
                        <svg aria-label="Apple App Store logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M349.9 105.4c-26.5 0-46.6 15.2-58.3 30.1-12.6 16.5-22.9 41.1-40.3 41.1-17.6 0-28.3-16.2-50.2-16.2-25.8 0-49.5 23.6-49.5 56.1 0 31.2 18.5 78.1 41.2 103.9 27.7 31.3 48.3 66.4 85.3 65.2 33.6-1 46.2-21.8 85.7-21.3 36.1.5 59 33 85.3 32.1 15.8-.6 55.5-18.2 82.3-50.3-213.4-122.3-158.6-228.5-141.8-229.7z" fill="#fff"/>
                        </svg>
                        App Store
                    </a>
                </div>
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