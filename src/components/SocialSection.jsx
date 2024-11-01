import React from 'react'
import imgColton from '../assets/image-colton.jpg'
import imgIrene from '../assets/image-irene.jpg'
import imgAnne from '../assets/image-anne.jpg'
import startImage from '../assets/icon-star.svg'
import './SocialSection.css'

const SocialSection = () => {
    return (
        <>
            <section className='md:max-w-6xl py-10 px-10 md:px-0 mx-auto font-spartan'>
                <div id="info" className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div id='col-1' className='space-y-6'>
                            <h1 className='text-5xl font-bold text-dark-magenta md:w-80 text-center md:text-start'>10,000+ of our users love our products.</h1>
                            <p className='sub-title opacity-80 font-medium text-dark-grayish-magenta md:w-96 text-center md:text-start'>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
                        </div>
                        <div id='col-2' className='content-center'>
                            <div id="reviews" className='space-y-4'>
                                <div className='flex flex-col md:flex-row justify-start items-center py-4 px-8 bg-light-grayish-magenta md:space-x-8 rounded-lg md:w-426 space-y-3 md:space-y-0'>
                                    <div className='flex space-x-2'>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-dark-magenta font-bold'>Rated 5 Stars in Reviews</p>
                                    </div>
                                </div>
                                <div className='md:ml-12 flex flex-col md:flex-row justify-start items-center py-4 px-8 bg-light-grayish-magenta md:space-x-8 rounded-lg md:w-426 space-y-3 md:space-y-0'>
                                    <div className='flex space-x-2'>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-dark-magenta font-bold'>Rated 5 Stars in Report Guru</p>
                                    </div>
                                </div>
                                <div className='md:ml-24 flex flex-col md:flex-row justify-start items-center py-4 px-8 bg-light-grayish-magenta md:space-x-8 rounded-lg md:w-426 space-y-3 md:space-y-0'>
                                    <div className='flex space-x-2'>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                        <img src={startImage} alt="" className='w-4 h-4'/>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-dark-magenta font-bold'>Rated 5 Stars in BestTech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="comments" className='flex flex-col md:flex-row justify-between mt-10 md:mt-20'>
                    <div id="colton" className='flex flex-col justify-center md:items-start md:w-88 h-56 bg-dark-magenta rounded-lg pl-8 pr-8'>
                        <div className='flex items-center justify-start space-x-5 mb-5'>
                            <img src={imgColton} alt="Colton Smith" className='w-9 h-9 rounded-full' />
                            <div>
                                <h3 className='text-white opacity-80 text-base font-bold'>Colton Smith</h3>
                                <p className='text-soft-pink opacity-75 text-base font-normal leading-4'>Verified Buyer</p>
                            </div>
                        </div>
                        <p className='text-white opacity-80 font-normal text-base leading-5 md:w-72'>&ldquo; We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!&rdquo;</p>
                    </div>

                    <div id="irene" className='flex flex-col justify-center md:w-88 h-56 bg-dark-magenta rounded-md pl-8 pr-8 mt-4'>
                        <div className='flex items-center justify-start space-x-5 mb-5'>
                            <img src={imgIrene} alt="Irene Roberts" className='w-9 h-9 rounded-full' />
                            <div>
                                <h3 className='text-white opacity-80 text-base font-bold'>Irene Roberts</h3>
                                <p className='text-soft-pink opacity-75 text-base font-normal leading-4'>Verified Buyer</p>
                            </div>
                        </div>
                        <p className='text-white opacity-80 font-normal text-base leading-5 md:w-72'>&ldquo; Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. &rdquo;</p>
                    </div>

                    <div id="anne" className='flex flex-col justify-center md:w-88 h-56 bg-dark-magenta rounded-md pl-8 pr-8 mt-4 md:mt-8'>
                        <div className='flex items-center justify-start space-x-5 mb-5'>
                            <img src={imgAnne} alt="Anne Wallace" className='w-9 h-9 rounded-full' />
                            <div>
                                <h3 className='text-white opacity-80 text-base font-bold'>Anne Wallace</h3>
                                <p className='text-soft-pink opacity-75 text-base font-normal leading-4'>Verified Buyer</p>
                            </div>
                        </div>
                        <p className='text-white opacity-80 font-normal text-base leading-5 md:w-72'>&ldquo; Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! &rdquo;</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SocialSection