import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'


const SingleUser = () => {
  const [users, setUsers] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8000/user/singleuser/${id}`)
      console.log(res)
      setUsers({
        firstname: res.data.firstname,
        lastname: res.data.lastname,
        email: res.data.email
      })
    }
    fetchUser()
  }, [id])
  const handleChange = (e) => {
    setUsers({
      ...users, [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(users)
    const res = await axios.put(`http://localhost:8000/user/update/${id}`, users)
    toast.success(res.data.msg, { position: "top-center" })
    navigate("/")
  }
  return (
    <div className='add-user'>
      <Link to="/">Back</Link>
      <h3>Update User</h3>
      <form className='add-user-form' onSubmit={handleSubmit} >
        <div className="inputGroup">
          <label htmlFor="firstname">first Name</label>
          <input type="text" name="firstname" value={users.firstname}
            onChange={handleChange}
            placeholder='Enter First Name'
          />

        </div>
        <div className="inputGroup">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname"
            onChange={handleChange}
            value={users.lastname}
            placeholder='Enter Last Name'
          />

        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={users.email}
            onChange={handleChange}
            placeholder='Enter Your Email'
          />
        </div>
        <div className="inputGroup">
          <button type='submit'> Update User</button>
        </div>
      </form>

    </div>
  )
}

export default SingleUser
