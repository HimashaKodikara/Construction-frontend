import React, { useEffect, useState } from 'react'
import Footer from '../../frontend/common/Footer'
import Header from '../../frontend/common/Header'
import Slidebar from '../../frontend/common/Slidebar'
import { Link } from 'react-router-dom'
import { apiurl, token } from '../../frontend/common/http'
import { toast } from 'react-toastify'

const Show = () => {

  const [members, setMembers] = useState([]);
    
      //http://localhost:8000/api/projects
      const fetchMembers = async () => {
        const res = await fetch(apiurl + 'members', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token()}`
          }
        });
        const result = await res.json();
    
        setMembers(result.data); // Optional: set to state if needed
      }
    
      const deleteMember = async(id) =>{
       if(confirm("Are you sure you want to delete?")){
          const res = await fetch(apiurl + 'members/'+id, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token()}`
          }
        });
        const result = await res.json();
        if(result.status == true){
          toast.success(result.message);
          const newMembers = members.filter(members => members.id != id)
          setMembers(newMembers)
        }
       }
      }
  
      useEffect(()=>{
        fetchMembers();
      },[])
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
                    <h4 className='h5'>Members</h4>
                    <Link to='/admin/members/create' className='btn btn-primary'>Create</Link>
                  </div>
                  <hr />

                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Status</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        members && members.map(member => {
                          return (

                            <tr key={`member-${member.id}`}>
                              <td>{member.id}</td>

                              <td>{member.name}</td>
                              <td>{member.job_title}</td>
                              <td>{
                                (member.status == 1) ? 'Active' : 'Block'
                              }
                              </td>
                              <td>
                                <Link to={`/admin/members/edit/${member.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                <Link onClick={() => deleteMember(member.id)} href='#' className='btn btn-secondary btn-sm ms-2'>Delete</Link>
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