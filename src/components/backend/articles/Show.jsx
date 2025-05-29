import React, { useEffect, useState } from 'react'
import Footer from '../../frontend/common/Footer'
import Header from '../../frontend/common/Header'
import Slidebar from '../../frontend/common/Slidebar'
import { apiurl, token, fileUrl } from '../../frontend/common/http'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Show = () => {

    const [articles, setArticles] = useState([]);

    const fetchArtciles = async () => {
        try {
            const res = await fetch(apiurl + 'articles', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const result = await res.json();
            console.log("API response:", result);
            setArticles(result.data || []);
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("Failed to fetch articles.");
        }
    };


    useEffect(() => {
        fetchArtciles();
    }, []);

    const deleteArticle = async (id) => {
        if (confirm("Are you sure you want to delete?")) {
            const res = await fetch(apiurl + 'articles/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            if (result.status == true) {
                toast.success(result.message);
                const newArticles = articles.filter(article => article.id != id)
                setArticles(newArticles)
            }else{
                toast.error(result.message)
            }
        }
    }


    return (
        <>
            <Header />
            <main >
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Slidebar />
                            {/* Sidebar component can be added here */}
                        </div>
                        <div className='col-md-9'>
                            {/*Dashboard*/}
                            <div className='card shadow border-0'>
                                <div className='card-body p-4'>
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='h5'>Articles</h4>
                                        <Link to='/admin/articles/create' className='btn btn-primary'>Create</Link>
                                    </div>
                                    <hr />

                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                {/* <th>Slug</th> */}
                                                <th>Status</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                articles && articles.map(article => {
                                                    return (

                                                        <tr key={`article-${article.id}`}>
                                                            <td>{article.id}</td>
                                                            <td>{article.title}</td>
                                                            {/* <td>{article.slug}</td> */}
                                                            <td>{
                                                                (article.status == 1) ? 'Active' : 'Block'
                                                            }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/articles/edit/${article.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                                <Link onClick={() => deleteArticle(article.id)} href='#' className='btn btn-secondary btn-sm ms-2'>Delete</Link>
                                                            </td>

                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Show