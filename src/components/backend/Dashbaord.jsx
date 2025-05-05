import React from 'react'
import Footer from '../frontend/common/Footer'
import Header from '../frontend/common/Header'
import Slidebar from '../frontend/common/Slidebar'

const Dashbaord = () => {
    return (
        <>
            <Header />
            <main >
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                           <Slidebar/>
                            {/* Sidebar component can be added here */}
                        </div>
                        <div className='col-md-9 dashboard'>
                            {/*Dashboard*/}
                            <div className='card shadow border-0'>
                                <div className='card-body d-flex justify-content-center align-items-center'>
                                    <h4>Welcome to admin console</h4>
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

export default Dashbaord