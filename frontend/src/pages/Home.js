import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";
import axios from "axios";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [data, setData]= useState([]);


    useEffect(() =>{
    ( async () =>{
      await getUsers();
      console.log("data=>",data); 
    })()
    },[])

    const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    if (response.status===200) {
        setData(response.data);
    }
    }

   const onDeleteUser = async (id) => {
    if(window.confirm("Are you sure that you want to delete this user?")) 
   {
     const response = await axios.delete(`http://localhost:5000/user/${id}`);
     if(response.status ===200)
     {
      toast.success(response.data);
      getUsers();
    }
    }
  }
   console.log("data=>", data);



  return (
    <div style={{marginTop:"100px"}}>
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>Number</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Contact</th>
                    <th style={{textAlign:"center"}}>Actions</th>

                </tr>
            </thead>
            
             <tbody>
                { Array.isArray(data) && data.map((item, index) => {
                  return(
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>

                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                          <Link to={`/update/${item.id}`}>
                            <button className='btn btn-edit'> <FontAwesomeIcon icon={faEdit} /> Edit</button>
                          </Link>
                          <Link to={`/view/${item.id}`}>
                            <button className='btn btn-view' >  <FontAwesomeIcon icon={faEye} /> View</button>
                          </Link>
                          <Link>
                            <button className='btn btn-delete' onClick={() => onDeleteUser(item.id)}>    <FontAwesomeIcon icon={faTrash} /> Delete</button>
                          </Link>

                        </td>


                    </tr>
                  );
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home;