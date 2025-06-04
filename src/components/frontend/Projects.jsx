import React, { useEffect, useState } from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import ConstructionImg from '../../assets/images/construction1.jpg';
import ConstructionImg1 from '../../assets/images/construction2.jpg';
import ConstructionImg2 from '../../assets/images/construction3.jpg';
import ConstructionImg3 from '../../assets/images/construction4.jpg';
import ConstructionImg4 from '../../assets/images/construction5.jpg';
import { apiurl, fileUrl } from './common/http';
import {Link}  from 'react-router-dom';

const Projects = () => {

    const [projects, setProjects] = useState([]);


    const fetchProject = async () => {

        const res = await fetch(apiurl + 'get-projects', {
            method: 'GET'
        });
        const result = await res.json();
        console.log(result);
        if (result.status == true) {
            setProjects(result.data)
        }
    }

    useEffect(() => {
        fetchProject()
    }, []);

    return (
        <>
            <Header />
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
                            {
                                projects && projects.map(project => {
                                    return (
                                        <div className='col-md-4 col-lg-4'>
                                            <div className='item'>
                                                <div className='service-image'>
                                                    <img src={`${fileUrl}uploads/projects/small/${project.image}`} alt="Service" className='w-100' />
                                                </div>
                                                <div className='service-body'>
                                                    <div className='service-title'>
                                                        <h3>{project.title}</h3>
                                                    </div>
                                                    <div className='service-content'>
                                                        <p>
                                                            {project.short_desc} </p>
                                                    </div>
                                                    <Link to={`/project/${project.id}`} className='btn btn-primary small'>Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                </section>
            </main>
            <Footer /></>

    )
}

export default Projects