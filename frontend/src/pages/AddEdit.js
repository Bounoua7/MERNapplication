import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import axios from 'axios';
import './AddEdit.css';
import { toast } from 'react-toastify';

import { Toast } from 'react-bootstrap';


const initialState= {
  name: "",
  email: "",
  contact: "",

};

const AddEdit = () => {


   const [state, setState] = useState(initialState);

   const {name, email, contact} =state;
  
   const history = useHistory();

   const {id} = useParams();

   useEffect(() => {
    if(id) {
        getSingleUser(id);
    }
  }, [id])

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
     if(response.status ===200)
     {
       setState({...response.data[0] });
     }
  }

  const handleInputChange = (e) => {
    let {name, value}= e.target;
    setState({...state,[name]: value,});
  };

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:5000/user",data);
    if (response.status ===200) {
      Toast.success(response.data);
    }
  };
  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`,data);
    if (response.status ===200) {
      Toast.success(response.data);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact){
       toast.error("please provide value into each input field")
    } else {
      if(!id) {
        addUser(state);
      } else {
        updateUser(state,id)
      }
      setTimeout(() => history.push("/"), 500);

    }
  };

 

    
  return (
    <div style={{marginTop:"100px"}}>
      <form style={{margin:"auto", padding:"15px", maxWidth: "400px", alignContent:"center" }}  onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          placeholder='Enter Name...' 
          onChange={handleInputChange}
          value={name}/>

        <label htmlFor="email">Email</label>
        <input 
          type="text"
          id="email"
          name="email"
          placeholder='Enter email...' 
          onChange={handleInputChange}
          value={email}/>

        <label htmlFor="contact">Contact</label>
        <input 
          type="text"
          id="contact"
          name="contact"
          placeholder='Enter contact number...' 
          onChange={handleInputChange}
          value={contact}/>
      <input type="submit" value={id ? "update" : "Add"}/>
      </form>

    </div>
  );
};

export default AddEdit;