import React, { useState, useRef, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Footer from '../../frontend/common/Footer'
import Header from '../../frontend/common/Header'
import Slidebar from '../../frontend/common/Slidebar';
import { Link, useNavigate, useParams } from 'react-router-dom'
//import { useForm } from 'react-hook-form'
import { apiurl, token,fileUrl } from '../../frontend/common/http'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react'

const Edit = ({ placeholder }) => {
    const editor = useRef(null);
    const [project, setProject] = useState([]);
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [content, setContent] = useState('');
    
    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || 'Content'
    }),
        [placeholder]
    );

    const params = useParams();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiurl + 'projects/' + params.id, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },

            });
            const result = await res.json();
            //console.log(result);
            setProject(result.data)
            setContent(result.data.content)
            setImageId(result.data.imageId);
            return {
                title: result.data.title,
                slug: result.data.slug,
                short_desc: result.data.short_desc,
                status: result.data.status,
                construction_type: result.data.construction_type,
                location: result.data.location,
                sector: result.data.sector,

            }
        }
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newData = { ...data, "content": content, "imageId": imageId }
        const res = await fetch(apiurl + 'projects', {
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
            navigate('/admin/projects');
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
            })

                .then(response => response.json())
                .then(result => {
                    setIsDisable(false);
                    if (result.status == false) {
                        toast.error(result.errors.image[0])
                    } else {
                        setImageId(result.data.id)
                    }
                })

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
                                        <h4 className='h5'>Project / Edit</h4>
                                        <a href='/admin/projects' className='btn btn-primary'>Back</a>
                                    </div>
                                    <hr />
                                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Title</label>
                                            <input
                                                placeholder='Title'
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
                                                placeholder='Slug'
                                                {
                                                ...register('slug', {
                                                    required: "The Slug field is required"
                                                })
                                                }
                                                type='text'
                                                className={`form-control ${errors.slug && 'is-invalid'}`} />
                                            {
                                                errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>
                                            }
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='mb-3'>
                                                    <label htmlFor='' className='form-label'>Location</label>
                                                    <input

                                                        placeholder='Location'
                                                        {
                                                        ...register('location', {
                                                            required: "The slug field is required"
                                                        })
                                                        } type='text'
                                                        className={`form-control`} />
                                                    {
                                                        errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>
                                                    }
                                                </div>
                                            </div>
                                            <div className='col-md-6'>

                                                <div className='mb-3'>
                                                    <label htmlFor='' className='form-label'>Construction Type</label>
                                                    <select name='construction_type' class="form-control"
                                                        {
                                                        ...register('construction_type')

                                                        }
                                                    >
                                                        <option value="">Construction Type</option>
                                                        <option value="Residential Construction">Residential Construction</option>
                                                        <option value="Commercial Construction">Commerical Construction</option>
                                                        <option value="Industrial Construction">Industrial Construction</option>
                                                        <option value="Infrastructure Construction">Infrastructure Construction</option>



                                                    </select>
                                                    {/* <input
                                                    
                                                        
                                                        placeholder='Location'
                                                        {
                                                        ...register('location', {
                                                            required: "The slug field is required"
                                                        })
                                                        } type='text'
                                                        className={`form-control`} /> */}
                                                    {
                                                        errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>
                                                    }
                                                </div>


                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='mb-3'>
                                                    <label htmlFor='' className='form-label'>Sector</label>
                                                    <select name='sector' class="form-control"
                                                        {
                                                        ...register('sector')

                                                        }
                                                    >
                                                        <option value="">Sector</option>
                                                        <option value="Health">Health</option>
                                                        <option value="Education">Education</option>
                                                        <option value="Corporate">Coporate</option>



                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>

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


                                            </div>
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
                                        <div className='pb-3'>
                                            {
                                                project.image && <img src={fileUrl+'uploads/projects/small/'+project.image} alt=''/>
                                            }
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