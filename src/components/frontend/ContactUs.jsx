import React, { useState, useEffect } from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import { useForm } from 'react-hook-form'
import { apiurl, fileUrl } from './common/http';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactUs = () => {

      const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()

    const onSubmit = async (data) => {

        const res = await fetch(apiurl+ 'contact-now',{
            method : 'POST',
            headers: {
                'Content-type' : 'application/json'
            },body: JSON.stringify(data)
        });

        const result = await res.json();

        if(result.status == true){
            toast.success(result.message);
            reset();
        }else{
            toast.error(result.message);
        }
    }

    return (
        <>
            <Header />

            <section className='section-7'>
                <div className='hero d-flex align-items-center'>
                    <div className='container-fluid'>
                        <div className='text-left' style={{ marginLeft: '100px' }}>
                            <span>Quality. Integrity. Value.</span>
                            <h1>Contact Us</h1>
                            <p>
                                We excel at transforming visions into reality<br />
                                through outstanding craftsmanship and precise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-3 bg-light py-5'>
                <div className='container py-5'>
                    <div className='section-header text-center'>
                        <h2>Contact Us</h2>
                        <p>Our dedicated experts are here to help you with any of your questions, contact us by<br />
                            filling out the form below and we will be in touch shortly.</p>
                    </div>
                    <div className='row pt-4 gx-4'>
                        <div className='col-12 col-md-4'>
                            <div className='card border-0 shadow p-5 h-100'>
                                <div className='mb-4'>
                                    <h4 className='mb-3'>Call Us</h4>
                                    <p className='mb-0'>077 895 9856<br />
                                        078 258 9856</p>
                                </div>

                                <div className='mb-4'>
                                    <h4 className='mb-3'>You can write us</h4>
                                    <p className='mb-0'>example@example.com<br />
                                        info@example.com</p>
                                </div>

                                <div className='mb-0'>
                                    <h4 className='mb-3'>Address</h4>
                                    <p className='mb-0'>455/A, Colombo 7</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-12 col-md-8'>
                            <div className='card border-0 shadow p-5 h-100'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='row'>
                                        <div className='col-12 col-md-6 mb-3'>
                                            <label htmlFor='name' className='form-label'>Name</label>
                                            <input 
                                                type='text' 
                                                {
                                                    ...register('name',{
                                                        required: "The name feild is required"
                                                    })
                                                }
                                                className={`form-control form-control-lg ${errors.name && 'is-invalid'}`}   placeholder='Enter Name'/>
                                            
                                            {
                                                    errors.name && <p className='invalid-feedback'>{errors.name?.message}</p>
                                                }
                                        </div>
                                        <div className='col-12 col-md-6 mb-3'>
                                            <label htmlFor='email' className='form-label'>Email</label>
                                            <input  
                                            {
                                                ...register('email',{
                                                    required: "This email field is required",
                                                    pattern:{
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message : "Invalid email address"
                                
                                                    }
                                                })
                                            }
                                            type='text'
                                                
                                                className={`form-control form-control-lg ${errors.email && 'is-invalid'}`}   placeholder='Enter Email'/>
                                                {
                                                    errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>
                                                }
                                                
                                            
                                        </div>
                                    </div>
                                    
                                    <div className='row'>
                                        <div className='col-12 col-md-6 mb-3'>
                                            <label htmlFor='phone' className='form-label'>Phone</label>
                                            <input 
                                             type='text'
                                             {
                                                ...register('phone')
                                             }
                                              className='form-control form-cotnrol-lg' placeholder='Phone No' 
                                            />
                                        </div>
                                        <div className='col-12 col-md-6 mb-3'>
                                            <label htmlFor='subject' className='form-label'>Subject</label>
                                            <input 
                                                type='text' 
                                                {
                                                    ...register('subject')
                                                }
                                                className='form-control form-contro-lg' placeholder='Subject'
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className='mb-4'>
                                        <label htmlFor='message' className='form-label'>Message *</label>
                                        <textarea 
                                           {
                                            ...register('message')
                                           }
                                           placeholder='Message' rows={5}  id='' className='form-cotrol form-control-lg w-100'
                                        ></textarea>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-primary px-5 py-2'>
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ContactUs