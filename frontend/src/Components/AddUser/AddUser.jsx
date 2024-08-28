import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import "./adduser.css"
import axios from "axios"
import toast from 'react-hot-toast'

const AddUser = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const addUser = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:8000/user/create", addUser).then((res) => {
      console.log(res)
      if (res.data) {
        toast.success("user add successfully")
        navigate("/")
      }
    }).catch((err) => {
      if (err.response) {
        console.log(err);
        alert("Error" + err)
      }
    })

  }
  return (
    <div className='add-user'>
      <Link to="/">Back</Link>
      <h3>Add User</h3>
      <form className='add-user-form' onSubmit={handleSubmit(onSubmit)}>
        <div className="inputGroup">
          <label htmlFor="firstname">first Name</label>
          <input type="text" name="firstname"
            placeholder='Enter First Name'
            {...register("firstname", { required: true })} />
          {errors.firstname && <span>This field is required</span>}
        </div>
        <div className="inputGroup">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname"
            placeholder='Enter Last Name'
            {...register("lastname", { required: true })} />
          {errors.lastname && <span>This field is required</span>}
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="text" name="email"
            placeholder='Enter Your Email'
            {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" autoComplete='off' placeholder='Enter Your Password'
            {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="inputGroup">
          <button type='submit'> Add User</button>
        </div>
      </form>

    </div>
  )
}

export default AddUser
