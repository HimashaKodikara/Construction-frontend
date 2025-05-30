import React, { useEffect, useState } from 'react'
import BlogImg1 from '../../../assets/images/construction3.jpg'
import { apiurl, fileUrl } from './http';

const LatestArticles = () => {

    const [articles, setArticles] = useState([]);

    const fetchLatestArticles = async () => {
        const res = await fetch(apiurl + 'get-latest-articles?limit=3', {
            method: 'GET'
        });
        const result = await res.json();

        console.log(result);
        if (result.status == true) {
            setArticles(result.data)
        }
    }

    useEffect(() => {
        fetchLatestArticles();
    }, [])
    return (
        <>
            <section className='section-6 bg-light py-5'>
                <div className='container'>
                    <div className='section-header text-center '>
                        <span>Blog & News</span>
                        <h2>Articles & blog posts</h2>
                        <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                    </div>
                    <div className='row pt-3'>
                        {
                            articles && articles.map(article => {
                                return (
                                    <div className='col-md-4'>
                                        <div className=' shadow '>
                                            <div className=''>
                                            <img src={`${fileUrl}uploads/articles/small/${article.image}`} alt="Article" className='w-100' />
                                            </div>
                                            <div className='card-body p-4'>
                                                <div className='mb-3 '>
                                                    <a href='#' className='title text-decoration-none text-black'>{article.title}</a>
                                                </div>
                                                <a href='#' className='btn btn-primary small'>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>



            </section>
        </>
    )
}

export default LatestArticles