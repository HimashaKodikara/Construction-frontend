import React, { useRef, useState, useMemo, useEffect } from 'react';
import Footer from '../../frontend/common/Footer';
import Header from '../../frontend/common/Header';
import Slidebar from '../../frontend/common/Slidebar';
import { apiurl, token, fileUrl } from '../../frontend/common/http';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';
import { useForm } from 'react-hook-form';

const Edit = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [service, setService] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const params = useParams();

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || ''
    }), [placeholder]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiurl + 'services/' + params.id, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },

            });
            const result = await res.json();
            setContent(result.data.content);
            setService(result.data);
            return {

                title: result.data.title,
                slug: result.data.slug,
                short_desc: result.data.short_desc,
                status: result.data.status

            }
        }
    });


    const navigate = useNavigate();

   
    const onSubmit = async (data) => {
    const newData = {
        ...data,
        "content": content,
        "imageId": imageId
    };

    const res = await fetch(apiurl + 'services/' + params.id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token()}`
        },
        body: JSON.stringify(newData)
    });

    const result = await res.json();

    if (result.status === true) {
        toast.success(result.message);
        navigate('/admin/services');
    } else {
        if (result.errors) {
            // Manually set errors for react-hook-form
            if (result.errors.slug) {
                toast.error(result.errors.slug[0]);
            } else {
                toast.error(result.message || 'Something went wrong');
            }
        } else {
            toast.error(result.message || 'Something went wrong');
        }
    }
};


    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("image", file);

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

            if (result.status === false) {
                const errorMessage = result.errors?.image?.[0] || 'Image upload failed';
                toast.error(errorMessage);
            } else {
                setImageId(result.data.id);
                // Update service image preview
                setService(prev => ({ ...prev, image: result.data.name }));
            }
        } catch (error) {
            toast.error('Failed to upload image');
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <main>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Slidebar />
                        </div>
                        <div className='col-md-9'>
                            <div className='card shadow border-0'>
                                <div className='card-body p-4'>
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='h5'>Services / Edit</h4>
                                        <a href='/admin/services' className='btn btn-primary'>Back</a>
                                    </div>
                                    <hr />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-3'>
                                            <label className='form-label'>Name</label>
                                            <input
                                                placeholder='Name'
                                                {...register('title', {
                                                    required: "The title field is required"
                                                })}
                                                type='text'
                                                className={`form-control ${errors.title && 'is-invalid'}`}
                                            />
                                            {errors.title && <p className='invalid-feedback'>{errors.title.message}</p>}
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Slug</label>
                                            <input
                                                placeholder='Slug'
                                                {...register('slug', {
                                                    required: "The slug field is required"
                                                })}
                                                type='text'
                                                className={`form-control ${errors.slug && 'is-invalid'}`}
                                            />
                                            {errors.slug && <p className='invalid-feedback'>{errors.slug.message}</p>}
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Short Description</label>
                                            <textarea
                                                placeholder='Short description'
                                                {...register('short_desc')}
                                                className='form-control'
                                                rows={4}
                                            />
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                config={config}
                                                value={content}
                                                onBlur={newContent => setContent(newContent)}
                                                onChange={() => { }}
                                            />
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Image</label>
                                            <br />
                                            <input type='file' onChange={handleFile} />
                                        </div>

                                        <div className='pb-3'>
                                            {service.image ? (
                                                <img
                                                    src={`${fileUrl}uploads/services/small/${service.image}`}
                                                    alt='Preview'
                                                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                                                />
                                            ) : (
                                                <p>No image available</p>
                                            )}
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Status</label>
                                            <select className='form-control' {...register('status')}>
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                        </div>

                                        <button disabled={isDisable} className='btn btn-primary'>Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Edit;
