import React, { useState, useEffect } from 'react'
import ServiceImg from '../../../assets/images/construction1.jpg';
import { apiurl, fileUrl, token } from '../../frontend/common/http';
import {Link}  from 'react-router-dom';
 
const LatestServices = () => {
    const [services, setService] = useState([]);
    const fetchLatestServices = async () => {
        const res = await fetch(apiurl + 'get-latest-services?limit=4', {
            'method': 'GET',
        });
        const result = await res.json();
        console.log(result)
        setService(result.data)
    }

    useEffect(() => {
        fetchLatestServices()
    }, []);

    return (
        <section className='section-3 bg-light py-5'>
            <div className=' py-5'>
                <div className='section-header text-center '>
                    <span>our services</span>
                    <h2>Our construction services</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                </div>
                <div className='row pt-4'>
                    {
                        services && services.map(service => {
                            return(
                                <div key={`service-${service.id}`} className='col-md-3 col-lg-3'>
                                    <div className='item'>
                                        <div className='service-image'>
                                            <img src={`${fileUrl}uploads/services/small/${service.image}`} alt="Service" className='w-100' />
                                        </div>
                                        <div className='service-body'>
                                            <div className='service-title'>
                                                <h3>{service.title} </h3>
                                            </div>
                                            <div className='service-content'>
                                                <p>

                                                   {service.short_desc}</p>
                                            </div>
                                            <Link to={`/service/${service.id}`} className='btn btn-primary'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </section>
    )
}

export default LatestServices