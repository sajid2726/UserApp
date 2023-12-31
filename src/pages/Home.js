import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Home() {

  const [users,setUsers] = useState([]);

  useEffect(() => {
     loadUsers();
  },[]);

  const loadUsers =async()=>{
    const result = await axios.get("http://localhost:8088/api/getusers");
     setUsers(result.data);
    console.log(result.data)
  };

  const {id} = useParams;

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8088/api/deleteuser/${id}`)
    loadUsers();
  } 

  return (
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                { users ?
                  users.map((user,index)=>{
                    return(
                  <tr> 
                  <th scope="row" key={index}>{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-warning mx-2" to={`/viewuser/${user.id}`}>View</Link>
                    <Link className="btn btn-info mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                    <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
)
                  }) : null
                }
              
            </tbody>
          </table>
        </div>
      </div>
  );
}
