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
        const res = await fetch(apiurl + 'articles', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            }
        });
        const result = await res.json();
        setArticles(result.data);
    }

    useEffect(() => {
        fetchArtciles();
    })
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
                                        <Link to='/admin/services/create' className='btn btn-primary'>Create</Link>
                                    </div>
                                    <hr />

                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Slug</th>
                                                <th>Status</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                services && services.map(service => {
                                                    return (

                                                        <tr key={`service-${service.id}`}>
                                                            <td>{service.id}</td>
                                                            <td>{service.title}</td>
                                                            <td>{service.slug}</td>
                                                            <td>{
                                                                (service.status == 1) ? 'Active' : 'Block'
                                                            }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/services/edit/${service.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                                <Link onClick={() => deleteService(service.id)} href='#' className='btn btn-secondary btn-sm ms-2'>Delete</Link>
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