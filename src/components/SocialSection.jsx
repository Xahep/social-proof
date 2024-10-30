import React from 'react'
import imgColton from '../assets/image-colton.jpg'
import imgIrene from '../assets/image-irene.jpg'
import imgAnne from '../assets/image-anne.jpg'

const SocialSection = () => {
    return (
        <>
            <section className='px-64 mt-20 space-y-9 flex flex-col items-center justify-center font-spartan'>
                <div id="info">
                    <div className='grid grid-cols-2'>
                        <div id='col-1'>
                            <h1 className='text-5xl font-bold text-dark-magenta w-80'>10,000+ of our users love our products.</h1>
                            <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying abour our services.</p>
                        </div>
                        <div id='col-2'></div>
                    </div>
                </div>
                <div id="comments" className='flex flex-row space-x-8'>
                    <div id="colton" className='flex flex-col justify-center w-80 h-52 bg-dark-magenta rounded-md px-8 py-8'>
                        <div className='flex items-center justify-start space-x-5 mb-5'>
                            <img src={imgColton} alt="Colton Smith" className='w-9 h-9 rounded-full' />
                            <div>
                                <h3 className='text-white text-sm font-bold'>Colton Smith</h3>
                                <p className='text-soft-pink opacity-75 text-sm font-normal'>Verified Buyer</p>
                            </div>
                        </div>
                        <p className='text-white font-normal text-sm'>" We needed the same printed desing as the one we had ordered a week prior. Not only did the find the original order, but we also received it in time. Excellent! "</p>
                    </div>

                    <div id="irene" className='flex flex-col justify-center w-80 h-52 bg-dark-magenta rounded-md px-8 py-8 mt-4'>
                        <div className='flex items-center justify-start space-x-5 mb-5'>
                            <img src={imgIrene} alt="Irene Roberts" className='w-9 h-9 rounded-full' />
                            <div>
                                <h3 className='text-white text-sm font-bold'>Irene Roberts</h3>
                                <p className='text-soft-pink opacity-75 text-sm font-normal'>Verified Buyer</p>
                            </div>
                        </div>
                        <p className='text-white font-normal text-sm'>" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "</p>
                    </div>

                    <div id="anne" className='w-80 h-52 bg-dark-magenta rounded-md px-7 py-8 mt-8'>
                        <div className='flex items-center justify-start space-x-5 mb-5'>
                            <img src={imgAnne} alt="Anne Wallace" className='w-9 h-9 rounded-full' />
                            <div>
                                <h3 className='text-white text-sm font-bold'>Anne Wallace</h3>
                                <p className='text-soft-pink opacity-75 text-sm font-normal'>Verified Buyer</p>
                            </div>
                        </div>
                        <p className='text-white font-normal text-sm'>" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SocialSection