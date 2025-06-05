import React, { useState, useEffect } from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import { apiurl, fileUrl } from './common/http';
import { Link, useParams } from 'react-router-dom';
import ShowTestimonial from './common/ShowTestimonial';


const BlogDetail = () => {

    const params = useParams();
    const [article, setArticle] = useState([]);
    const [latestArticles, setLatestArticle] = useState([]);


    const fetchArticle = async () => {
        const res = await fetch(`${apiurl}get-articles/${params.id}`, {
            method: 'GET'
        });
        const result = await res.json();
        setArticle(result.data)
    }

    const fetchLatestArticles = async () => {
        const res = await fetch(`${apiurl}get-latest-articles`, {
            method: 'GET'
        });
        const result = await res.json();
        setLatestArticle(result.data)
    }
    useEffect(() => {
        fetchArticle();
        fetchLatestArticles();
    }, [params.id]) // Services only need to be fetched once


    return (
        <>
            <Header />
            <main>

                <section className='section-7'>
                    <div className='hero d-flex align-items-center'>
                        <div className='container-fluid'>
                            <div className='text-left' style={{ marginLeft: '100px' }}>
                                <span>Quality. Integrity. Value.</span>
                                <h1>{article.title}</h1>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-11'>
                    <div className='container py-5'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h2>{article.title}</h2>
                                <div className='pb-3'>By<strong>{article.author}</strong> on {article.created_at}</div>

                                <div className='pe-md-5 pb-3'>
                                    <img className='w-100' src={`${fileUrl}uploads/articles/large/${article.image}`} />
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: article.content }}>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 slidebar'>
                                    <div className='card-body px-5 py-4'>
                                        <h3>Latest Blogs</h3>
                                        {
                                            latestArticles && latestArticles.map(article => {
                                                return (
                                                    <div className='d-flex border-bottom mb-3 pt-2'>
                                                        <div className='pe-3 pb-2'>
                                                            <Link to={`/blog/${article.id}`}><img width={100} src={`${fileUrl}uploads/articles/small/${article.image}`} /></Link>

                                                        </div>
                                                        <Link to={`/blog/${article.id}`} className='article-title'>{article.title}</Link>
                                                    </div>
                                                )
                                            })
                                        }

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

export default BlogDetail