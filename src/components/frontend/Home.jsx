import React, { useEffect, useState } from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from './common/Header';
import Footer from './common/Footer';
import ConstructionImg from '../../assets/images/construction1.jpg';
import ConstructionImg1 from '../../assets/images/construction2.jpg';
import ConstructionImg2 from '../../assets/images/construction3.jpg';
import ConstructionImg3 from '../../assets/images/construction4.jpg';
import ConstructionImg4 from '../../assets/images/construction5.jpg';
import BlogImg1 from '../../assets/images/construction3.jpg'
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

import About from '../../components/frontend/common/About'
import LatestServices from './common/LatestServices';
import LatestProjects from './common/LatestProject';
import LatestAticles from './common/LatestArticles';
import ShowTestimonial from './common/ShowTestimonial';
//import 'swipper/css';

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
                                    <a className='btn btn-primary large'>Contact Now</a>
                                    <a className='btn btn-secondary ms-2 large'>View Project</a></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*About us section*/}
                <About />
                {/*Our Services*/}
                <div class='container bg-body rounded-3'>
                <LatestServices />
</div>
                {/*Why Choose Us*/}

                <section className='section-4 py-5'>
                    <div className='container'>
                        <div className='section-header text-center '>
                            <span>Why Choose Us</span>
                            <h2>Discover our wide variety of projects.</h2>
                            <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise,<br />
                                decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon1} alt='' />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>

                                    <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon2} alt='' />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>

                                    <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon3} alt='' />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>

                                    <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Our Projects*/}
                <div class='container bg-body'>
                    <LatestProjects />
                </div>
              <div>
                <ShowTestimonial/>
              </div>
                <div class='container bg-body'> <LatestAticles /></div>

            </main>
            <Footer />
        </>


    )
}

export default Home
