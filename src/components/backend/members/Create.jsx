import React, { useState, useRef, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Footer from '../../frontend/common/Footer'
import Header from '../../frontend/common/Header'
import Slidebar from '../../frontend/common/Slidebar'
import { apiurl, token } from '../../frontend/common/http'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react'

const Create = ({placeholder}) => {

    const editor = useRef(null);
        const [content, setContent] = useState('');
        const [isDisable, setIsDisable] = useState(false);
        const [imageId, setImageId] = useState(null);
    
        const config = useMemo(() => ({
            readonly: false,
            placeholder: placeholder || 'Content'
        }),
            [placeholder]
        );
    
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()
    
        const navigate = useNavigate();
    
        const onSubmit = async (data) => {
            const newData = { ...data, "imageId": imageId }
            const res = await fetch(apiurl + 'members', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },
                body: JSON.stringify(newData)
            });
            const result = await res.json();
    
            if (result.status == true) {
                toast.success(result.message);
                navigate('/admin/members');
            } else {
                toast.error(result.message);
            }
        }
    
        const handleFile = async (e) => {
            const formData = new FormData();
            const file = e.target.files[0];
            formData.append("image", file);
            setIsDisable(true);
            try {
                const response = await fetch(apiurl + 'temp-images', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token()}`
                    },
                    body: formData
                });
    
                const result = await response.json();
                setIsDisable(false);
                if (result.status === false) {
                    const errorMessage = result.errors?.image?.[0] || 'Image upload failed';
                    toast.error(errorMessage);
                } else {
                    setImageId(result.data.id);
                }
            } catch (error) {
                toast.error('Failed to upload image');
                console.error(error);
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
                                        <h4 className='h5'>Members / Create</h4>
                                        <a href='/admin/members' className='btn btn-primary'>Back</a>
                                    </div>
                                    <hr />
                                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Name</label>
                                            <input
                                                placeholder='Name'
                                                {
                                                ...register('name', {
                                                    required: "The Name field is required"
                                                })
                                                }
                                                type='text'
                                                className={`form-control ${errors.name && 'is-invalid'}`} />
                                            {
                                                errors.name && <p className='invalid-feedback'>{errors.mame?.message}</p>
                                            }
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Job Title</label>
                                            <input
                                                placeholder='Job Title'
                                                {
                                                ...register('job_title', {
                                                    required: "The Job Title field is required"
                                                })
                                                } type='text'
                                                className={`form-control ${errors.job_title && 'is-invalid'}`} />
                                            {
                                                errors.job_title && <p className='invalid-feedback'>{errors.job_title?.message}</p>
                                            }
                                        </div>
                                         <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>LinkedIn URL</label>
                                            <input
                                                placeholder='LinkedIn URL'
                                                {
                                                ...register('linkedin_url', {
                                                    required: "The Linkedin Url field is required"
                                                })
                                                } type='text'
                                                className={`form-control ${errors.linkedin_url && 'is-invalid'}`} />
                                            {
                                                errors.linkedin_url && <p className='invalid-feedback'>{errors.linkedin_url?.message}</p>
                                            }
                                        </div>
                                       

                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Image</label>
                                            <br />
                                            <input onChange={handleFile} type='file' />

                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Status</label>
                                            <select className='form-control'
                                                {
                                                ...register('status')
                                                }>
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>

                                            </select>
                                        </div>
                                        <button disabled={isDisable} className='btn btn-primary'>Submit</button>
                                    </form>

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

export default Create