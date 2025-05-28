import React from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import ServiceImg from '../../assets/images/construction1.jpg';
import { apiurl ,fileUrl} from './common/http';

const service = () => {
    const [services, setService] = useState([]);
    const fetchAllServices = async () => {
        const res = await fetch(apiurl + 'get-services', {
            'method': 'GET',
        });
        const result = await res.json();
        console.log(result)
        setService(result.data)
    }

    useEffect(() => {
        fetchAllServices()
    }, []);
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
                    <div className='row pt-4 justify-content-center'>
                        {
                            services && services.map(service => {
                                return (
                                    <div className='col-md-4 col-lg-4'>
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
                                                <a href='#' className='btn btn-primary'>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </section>
            <Footer />
        </>

    )
}

export default service