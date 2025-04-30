import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { default as AboutNew } from '../../components/frontend/common/About'
import MemebrImages from '../../assets/images/pexels-pixabay-220453.jpg'
import MemebrImages2 from '../../assets/images/pexels-sindre-fs-1040880.jpg'


const About = () => {
  return (
    <> <Header />
      <main>
        {/*Hero section*/}
        <section className='section-7'>
          <div className='hero d-flex align-items-center '>
            <div className='container-fluid'>
              <div className='text-left ' style={{ marginLeft: '100px' }}>
                <span>Quality. Integrity. Value.</span>
                <h1>About Us</h1>
                <p> We excel at transforming visions into reality<br />
                  through outstanding craftsmanship and precise.
                </p>


              </div>
            </div>
          </div>
        </section>
        <AboutNew />

        {/* Our Team */}
        <section className='section-8 bg-light py-5'>
          <div className='container'><div className='section-header text-center '>
            <span>Team</span>
            <h2>Our Team</h2>
            <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
          </div></div>
          <div className="container-fluid">
  <div className="row pt-3 justify-content-center">
    <div className="col-md-3">
      <div className="card shadow border-0">
        <div className="card-img-top">
          <img src={MemebrImages2} alt="Blog" className="w-100" />
        </div>
        <div className="card-body p-4">
          <div className="mb-3">
            <a href="#" className="title">Dummy blog title</a>
          </div>
          <a href="#" className="btn btn-primary small">Read More</a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card shadow border-0">
        <div className="card-img-top">
          <img src={MemebrImages2} alt="Blog" className="w-100" />
        </div>
        <div className="card-body p-4">
          <div className="mb-3">
            <a href="#" className="title">Dummy blog title</a>
          </div>
          <a href="#" className="btn btn-primary small">Read More</a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card shadow border-0">
        <div className="card-img-top">
          <img src={MemebrImages2} alt="Blog" className="w-100" />
        </div>
        <div className="card-body p-4">
          <div className="mb-3">
            <a href="#" className="title">Dummy blog title</a>
          </div>
          <a href="#" className="btn btn-primary small">Read More</a>
        </div>
      </div>
    </div>
  </div>
</div>
        </section>
      </main>
      <Footer />
    </>

  )
}

export default About