import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { apiurl, fileUrl } from './http';
import 'swiper/css';
import 'swiper/css/pagination';

// Star Rating Component
const StarRating = ({ rating = 5 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill={index < rating ? "currentColor" : "none"}
      stroke={index < rating ? "none" : "currentColor"}
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  ));
  
  return <div className="rating d-flex gap-1">{stars}</div>;
};

// Individual Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  const { testimonial: text, image, citation, designation } = testimonial;
  
  return (
    <div className="card shadow border-0 h-100">
      <div className="card-body p-5 d-flex flex-column">
        <StarRating />
        
        <div className="content pt-4 pb-2 flex-grow-1">
          <p className="mb-0">{text}</p>
        </div>
        
        <hr className="my-3" />
        
        <div className="d-flex align-items-center meta">
          <div className="flex-shrink-0">
            <img 
              src={`${fileUrl}uploads/testimonials/${image}`} 
              alt={`${citation}'s testimonial`}
              width={50}
              height={50}
              className="rounded-circle object-fit-cover"
              loading="lazy"
            />
          </div>
          <div className="ps-3">
            <div className="name fw-semibold">{citation}</div>
            <div className="text-muted small">{designation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading Component
const TestimonialSkeleton = () => (
  <div className="card shadow border-0 h-100">
    <div className="card-body p-5">
      <div className="placeholder-glow">
        <div className="placeholder col-4 mb-3"></div>
        <div className="placeholder col-12 mb-2"></div>
        <div className="placeholder col-8 mb-4"></div>
        <hr />
        <div className="d-flex align-items-center">
          <div className="placeholder rounded-circle" style={{width: 50, height: 50}}></div>
          <div className="ps-3">
            <div className="placeholder col-6 mb-1"></div>
            <div className="placeholder col-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
const ShowTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${apiurl}get-testimonials`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch testimonials: ${response.status}`);
      }

      const result = await response.json();
      setTestimonials(result.data || []);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Swiper configuration
  const swiperConfig = {
    modules: [Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: { 
      clickable: true,
      dynamicBullets: true 
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  return (
    <section className="section-5 py-5">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <span className="text-primary fw-semibold">Testimonials</span>
          <h2 className="display-6 fw-bold mt-2 mb-3">
            What people are saying about us
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            We offer a diverse array of construction services, spanning residential, 
            commercial, and industrial projects.
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            <strong>Error:</strong> {error}
            <button 
              className="btn btn-link ps-2" 
              onClick={fetchTestimonials}
              disabled={loading}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && !error && (
          <div className="row g-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="col-lg-4 col-md-6">
                <TestimonialSkeleton />
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Slider */}
        {!loading && !error && testimonials.length > 0 && (
          <Swiper {...swiperConfig}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id || index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Empty State */}
        {!loading && !error && testimonials.length === 0 && (
          <div className="text-center py-5">
            <div className="display-1 text-muted mb-3">💬</div>
            <h3 className="text-muted">No testimonials available</h3>
            <p className="text-muted">Check back later for customer reviews.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowTestimonial;