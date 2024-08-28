import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast"
import axios from "axios"

import "./getuser.css"
import { Link } from 'react-router-dom'

const GetUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("http://localhost:8000/user/getalluser")
      console.log(res)
      setUsers(res.data)
    }
    fetchUser()
  }, [])

  const userDelete = async (userId) => {
    await axios.delete(`http://localhost:8000/user/delete/${userId}`).then((res) => {
      setUsers((prevUser) => prevUser.filter((user) => user._id !== userId))
      console.log(res)
      toast.success(res.data.message, { position: "top-center" })

    }).catch((res) => {
      console.log(res)
    })
  }

  return (
    <div className='container'>
      <Link to="/add" className='addbtn'>Add</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th className='action'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <th >{index + 1}</th>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.email} </td>
                <td className=' action-btn'>
                  <button onClick={() => userDelete(user._id)}>Delete</button>
                  <Link to={`/single/` + user._id}>Edit</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default GetUsers
