import React, { useState, useEffect } from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import { apiurl, fileUrl } from './common/http';
import { Link, useParams } from 'react-router-dom';
import ShowTestimonial from './common/ShowTestimonial';

const ProjectDetail = () => {
  const params = useParams();
    const [project, setProject] = useState([]);
    
   
    const fetchProject = async () => {
        const res = await fetch(`${apiurl}get-projects/${params.id}`, {
            method: 'GET'
        });
        const result = await res.json();
        setProject(result.data)
        console.log(result);
    }

    useEffect(() => {
        fetchProject();
    }, []) // Services only need to be fetched once

    
    return (
        <>
            <Header />
            <main>

                <section className='section-7'>
                    <div className='hero d-flex align-items-center'>
                        <div className='container-fluid'>
                            <div className='text-left' style={{ marginLeft: '100px' }}>
                                <span>Quality. Integrity. Value.</span>
                                <h1>{project.title}</h1>

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
                                        <h3 className="mt-2 mb-3">Insights</h3>
                                        <ul>
                                             {
                                                project.location && <li className='mb-2'>
                                                <span class="text-body-secondary">Location</span>
                                                <p>{project.location}</p>
                                            </li>
                                            }
                                            {
                                                project.construction_type && <li className='mb-2'>
                                                <span class="text-body-secondary">Construction Type</span>
                                                <p>{project.construction_type}</p>
                                            </li>
                                            }

                                            {
                                                project.sector && <li className='mb-2'>
                                                <span class="text-body-secondary">Sector</span>
                                                <p>{project.sector}</p>
                                            </li>
                                            }
                                            
                                        </ul>
                         
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                 <div>
                                    <img className='w-100' src={`${fileUrl}uploads/projects/large/${project.image}`} />
                                 </div>
                                 <h3 className='py-3'>{project.title}</h3>
                                 <div dangerouslySetInnerHTML={{ __html: project.content}}>
                                  
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>
              <section className='section-11 bg-light py-5'>
                <ShowTestimonial/>
              </section>
            </main>

            <Footer />
        </>

    )
}

export default ProjectDetail