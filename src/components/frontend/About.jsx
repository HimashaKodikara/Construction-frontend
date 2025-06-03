import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Team from './common/Team';

// Make sure this path is correct relative to your file structure
// If AboutNew can't be found, this import will cause an error
import { default as AboutNew } from '../../components/frontend/common/About';

// Check if these image paths are correct in your project structure
// Consider using relative paths if you're getting errors

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className='section-7'>
          <div className='hero d-flex align-items-center'>
            <div className='container-fluid'>
              <div className='text-left' style={{ marginLeft: '100px' }}>
                <span>Quality. Integrity. Value.</span>
                <h1>About Us</h1>
                <p>
                  We excel at transforming visions into reality<br />
                  through outstanding craftsmanship and precise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AboutNew />

      <Team/>
      </main>
      <Footer />
    </>
  );
};

export default About;