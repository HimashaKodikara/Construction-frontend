import React, { useState, useRef, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Footer from '../../frontend/common/Footer'
import Header from '../../frontend/common/Header'
import Slidebar from '../../frontend/common/Slidebar'
import { apiurl, token } from '../../frontend/common/http'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react'


const Create = ({ placeholder }) => {
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
        const newData = { ...data, "content": content, "imageId": imageId }
        const res = await fetch(apiurl + 'services', {
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
            navigate('/admin/services');
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
                                        <h4 className='h5'>Services / Create</h4>
                                        <a href='/admin/services' className='btn btn-primary'>Back</a>
                                    </div>
                                    <hr />
                                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Name</label>
                                            <input
                                                placeholder='Name'
                                                {
                                                ...register('title', {
                                                    required: "The title field is required"
                                                })
                                                }
                                                type='text'
                                                className={`form-control ${errors.title && 'is-invalid'}`} />
                                            {
                                                errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>
                                            }
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Slug</label>
                                            <input
                                                placeholder='slug'
                                                {
                                                ...register('slug', {
                                                    required: "The slug field is required"
                                                })
                                                } type='text'
                                                className={`form-control ${errors.slug && 'is-invalid'}`} />
                                            {
                                                errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>
                                            }
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Short Description</label>
                                            <textarea
                                                placeholder='short description'
                                                {
                                                ...register('short_desc')
                                                } className='form-control' rows={4}></textarea>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                config={config}
                                                tabIndex={1}
                                                onBlur={newContent => setContent(newContent)}
                                                onChange={newContent => { }}
                                            />
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