import React from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import ServiceImg from '../../assets/images/construction1.jpg';


const service = () => {
    return (
        <>
            <Header />
            <section className='section-7'>
                <div className='hero d-flex align-items-center'>
                    <div className='container-fluid'>
                        <div className='text-left' style={{ marginLeft: '100px' }}>
                            <span>Quality. Integrity. Value.</span>
                            <h1>Services
                            </h1>
                            <p>
                                We excel at transforming visions into reality<br />
                                through outstanding craftsmanship and precise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/*Our Services*/}
            <section className='section-3 bg-light py-5'>
                <div className='container py-5'>
                    <div className='section-header text-center '>
                        <span>our services</span>
                        <h2>Our construction services</h2>
                        <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} alt="Service" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction </h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>

                                            Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} alt="Service" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction </h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>

                                            Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} alt="Service" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction </h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>

                                            Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} alt="Service" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction </h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>

                                            Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} alt="Service" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction </h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>

                                            Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} alt="Service" className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction </h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>

                                            Civil construction is a core sector within the construction industry that focuses on the design, development, and maintenance of infrastructure that supports modern society.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </>

    )
}

export default service