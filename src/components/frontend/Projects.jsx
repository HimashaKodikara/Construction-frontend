import React from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import ConstructionImg from '../../assets/images/construction1.jpg';
import ConstructionImg1 from '../../assets/images/construction2.jpg';
import ConstructionImg2 from '../../assets/images/construction3.jpg';
import ConstructionImg3 from '../../assets/images/construction4.jpg';
import ConstructionImg4 from '../../assets/images/construction5.jpg';
const Projects = () => {
  return (
    <>
     <Header/>
     <main>
     <section className='section-7'>
          <div className='hero d-flex align-items-center'>
            <div className='container-fluid'>
              <div className='text-left' style={{ marginLeft: '100px' }}>
                <span>Quality. Integrity. Value.</span>
                <h1>Our Projects</h1>
                <p>
                  We excel at transforming visions into reality<br />
                  through outstanding craftsmanship and precise.
                </p>
              </div>
            </div>
          </div>
        </section>

          {/*Our Projects*/}
        
                        <section className='section-3 bg-light py-5'>
                            <div className='container py-5'>
                                <div className='section-header text-center '>
                                    <span>our projects</span>
                                    <h2>Discover our diverse range of projects</h2>
                                    <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                                </div>
                                <div className='row pt-4'>
                                    <div className='col-md-4 col-lg-4'>
                                        <div className='item'>
                                            <div className='service-image'>
                                                <img src={ConstructionImg} alt="Service" className='w-100' />
                                            </div>
                                            <div className='service-body'>
                                                <div className='service-title'>
                                                    <h3>Kanpur Project 2025</h3>
                                                </div>
                                                <div className='service-content'>
                                                    <p>
        
                                                        Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                                                </div>
                                                <a href='#' className='btn btn-primary small'>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-lg-4'>
                                        <div className='item'>
                                            <div className='service-image'>
                                                <img src={ConstructionImg2} alt="Service" className='w-100' />
                                            </div>
                                            <div className='service-body'>
                                                <div className='service-title'>
                                                    <h3>Kanpur Project 2025</h3>
                                                </div>
                                                <div className='service-content'>
                                                    <p>
        
                                                        Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                                                </div>
                                                <a href='#' className='btn btn-primary small'>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-lg-4'>
                                        <div className='item'>
                                            <div className='service-image'>
                                                <img src={ConstructionImg3} alt="Service" className='w-100' />
                                            </div>
                                            <div className='service-body'>
                                                <div className='service-title'>
                                                    <h3>Kanpur Project 2025</h3>
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
                                                <img src={ConstructionImg4} alt="Service" className='w-100' />
                                            </div>
                                            <div className='service-body'>
                                                <div className='service-title'>
                                                    <h3>Kanpur Project 2025</h3>
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
                                                <img src={ConstructionImg4} alt="Service" className='w-100' />
                                            </div>
                                            <div className='service-body'>
                                                <div className='service-title'>
                                                    <h3>Kanpur Project 2025</h3>
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
                                                <img src={ConstructionImg4} alt="Service" className='w-100' />
                                            </div>
                                            <div className='service-body'>
                                                <div className='service-title'>
                                                    <h3>Kanpur Project 2025</h3>
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
     </main>
    <Footer/></>
   
  )
}

export default Projects