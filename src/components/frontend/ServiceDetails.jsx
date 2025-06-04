import React, { useState, useEffect } from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import { apiurl, fileUrl } from './common/http';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const params = useParams();
    const [service, setService] = useState([]);
    const [services, setServices] = useState([]);
    
    const fetchServices = async () => {
        const res = await fetch(`${apiurl}get-services`, {
            method: 'GET'
        });
        const result = await res.json();
        setServices(result.data)
        console.log(result);
    }

    const fetchService = async () => {
        const res = await fetch(`${apiurl}get-service/${params.id}`, {
            method: 'GET'
        });
        const result = await res.json();
        setService(result.data)
        console.log(result);
    }

    useEffect(() => {
        fetchServices();
    }, []) // Services only need to be fetched once

    useEffect(() => {
        if (params.id) {
            fetchService();
        }
    }, [params.id]) // Fetch service whenever the ID changes

    return (
        <>
            <Header />
            <main>

                <section className='section-7'>
                    <div className='hero d-flex align-items-center'>
                        <div className='container-fluid'>
                            <div className='text-left' style={{ marginLeft: '100px' }}>
                                <span>Quality. Integrity. Value.</span>
                                <h1>Service</h1>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-10'>

                    <div className='container py-5'>
                        
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='card shadow border-0 sidebar'>
                                    <div className='card-body px-4 py-4'>
                                        <h3 className="mt-2 mb-3">Our Service</h3>
                                        <ul>
                                            {
                                                services && services.map(service => {
                                                 return(
                                                    <li className='service-link' key={`service-${service.id}`} >
                                                        <Link to={`/service/${service.id}`} className='service-link'>{service.title}</Link>
                                                    </li>
                                                 )
                                                })
                                            }
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                 <div>
                                    <img className='w-50' src={`${fileUrl}uploads/services/large/${service.image}`} />
                                 </div>
                                 <h3 className='py-3'>{service.title}</h3>
                                 <div dangerouslySetInnerHTML={{ __html: service.content}}>
                                  
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

export default ServiceDetails