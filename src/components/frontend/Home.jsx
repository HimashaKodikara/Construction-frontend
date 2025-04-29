import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from './common/Header';
import Footer from './common/Footer';
const Home = () => {
    return (
        <>
            <Header />
            <main>
                {/*Hero section*/}
                <section className='section-1'>
                    <div className='hero d-flex align-items-center '>
                        <div className='container-fluid'>
                            <div className='text-center'>
                                <span>Welcome Amazing Construction</span>
                                <h1>Crafting freams with <br /> precision and excellence.</h1>
                                <p> We excel at transforming visions into reality through outstanding craftsmanship and precise <br />
                                    attention to details. With years of experiance ans a dedication to qulity.
                                </p>

                                <div className='mt-4'>
                                    <a className='btn btn-primary'>Contact Now</a>
                                    <a className='btn btn-secondary ms-2'>View Project</a></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*About us section*/}
                <section className='section-2 py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={AboutImg} alt="About Us" className='w-100' />
                            </div>
                            <div className='col-md-6'>
                                <span className=''>about us</span>
                                <h2>Crafting structures that last a lifetime</h2>
                                <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.

                                </p>
                                <p> Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>


    )
}

export default Home
