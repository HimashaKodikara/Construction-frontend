import React, { useState, useRef, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Footer from '../../frontend/common/Footer'
import Header from '../../frontend/common/Header'
import Slidebar from '../../frontend/common/Slidebar'
import { apiurl, token , fileUrl} from '../../frontend/common/http'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react'


const Edit = ({ placeholder }) => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [testimonial, setTestimonial] = useState([]);
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
            const res = await fetch(apiurl + 'testimonials/' + params.id, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },

            });
            const result = await res.json();
            setContent(result.data.content);
            setTestimonial(result.data);
            return {

                testimonial: result.data.testimonial,
                citation: result.data.citation,
                designation: result.data.designation,
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

        const res = await fetch(apiurl + 'testimonials/' + params.id, {
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
            navigate('/admin/testimonials');
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
                // Update service image preview
                setTestimonial(prev => ({ ...prev, image: result.data.name }));
            }
        } catch (error) {
            toast.error('Failed to upload image');
            console.error(error);
        }
    };

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
                                        <h4 className='h5'>Testimonial / Edit</h4>
                                        <Link to='/admin/testimonials' className='btn btn-primary'>Back</Link>
                                    </div>
                                    <hr />
                                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Testimonial</label>
                                            <textarea
                                                placeholder='Testimonial'
                                                {
                                                ...register('testimonial', {
                                                    required: "The testimonial filed is required"
                                                })
                                                }
                                                className={`form-control ${errors.testimonial && 'is-invalid'}`}
                                                rows={4}></textarea>

                                            {
                                                errors.testimonial && <p className='invalid-feedback'>{errors.testimonial?.message}</p>
                                            }
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Citation</label>
                                            <input
                                                placeholder='Citation'
                                                {
                                                ...register('citation', {
                                                    required: "The Citation field is required"
                                                })
                                                }
                                                type='text'
                                                className={`form-control ${errors.citation && 'is-invalid'}`} />
                                            {
                                                errors.citation && <p className='invalid-feedback'>{errors.citation?.message}</p>
                                            }
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Designation</label>
                                            <input
                                                placeholder='Designation'
                                                {
                                                ...register('designation', {
                                                    required: "The Citation field is required"
                                                })
                                                }
                                                type='text'
                                                className={`form-control`} />
                                            {
                                                errors.designation && <p className='invalid-feedback'>{errors.designation?.message}</p>
                                            }
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
                                        <div className='pb-3'>
                                            {testimonial.image ? (
                                                <img
                                                    src={`${fileUrl}uploads/testimonials/${testimonial.image}`}
                                                    alt='Preview'
                                                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                                                />
                                            ) : (
                                                <p>No image available</p>
                                            )}
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

export default Edit