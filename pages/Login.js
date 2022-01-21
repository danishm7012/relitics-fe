import React from 'react'
import Navbar from "../Component/Navbar"
import classes from "./Login.module.css"
import Acount from '../Api/Acount'
import { useState } from 'react'
import CustomModal from '../Component/Modal'
import Link from "next/link"


const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
  
    const [errorModel, setErrorModel] = useState(false)
    const [succesModel, setSuccesModel] = useState(false)


    const loginHandler = e => {
        e.preventDefault();
        // nextStep();
        const res = Acount.Login(userName, password, setError, setErrorModel)
        res.then(value => {
            console.log(value)
            setSuccess(value.data.statusText)

            if (value.statusText=='OK') {
                setSuccesModel(true)
              }
              else {
                setErrorModel(true)
              }
        })
            .catch(error => {
                console.log(error.responce)
            })

    }

    return (
        <div>
            {console.log({error})}
            <Navbar />
            <div className={`${classes.bgLogin}`}>
                <div className="container">
                    <div className="col-11 mx-auto p-5">
                        <div className={`my-5 ${classes.bgBlue}`}>
                            <div className="row">
                                <div className=" col-md-6 my-auto">
                                    <div className=" text-center p-5 m-0">
                                        <img src="Group 251.png" className='w-50' alt="reilitics" />
                                        <div>
                                            <p className="text-white mt-5 fs-15">Welcome, get started by logging into the REI Litics platform. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 my-auto px-0 ">
                                    <div className="login-right p-5">
                                        <p className="fs-40 Gothic_3D text-center mt-5">LOG IN</p>
                                        <p className='fs-15'>Username</p>
                                        <form onSubmit={loginHandler}>
                                            <input type="text"
                                                id="inputPassword6"
                                                className="form-control w-100 form-bg my-2"
                                                aria-describedby="passwordHelpInline"
                                                name="firstName"
                                                onChange={(e) => setUserName(e.target.value)}
                                                value={userName}
                                                required
                                                placeholder="Enter User Name"
                                            />
                                            <p className="fs-15 my-3">Password</p>
                                            <input type="password"
                                                id="inputPassword6"
                                                className="form-control form-bg  w-100"
                                                aria-describedby="passwordHelpInline"
                                                name="firstName"
                                                onChange={(e) => setPassword(e.target.value)}
                                                value={password}
                                                required
                                                placeholder="Enter Password"
                                            />
                                            <div className="mt-2 d-flex">
                                                <p className="fs-13 ">Forgot Password?<a className="ms-1 fs-13 text-link pointer-cursor">Reset Now</a></p>
                                                <p className="fs-13 text-nowrap ms-auto">Not a Member<a href='/SignUp' className="ms-1 fs-13 text-link pointer-cursor">Sign up</a></p>
                                            </div>
                                            <div className="d-grid gap-2 col-12 mt-3 mx-auto">
                                                <button className="btn btn-primary login-button fs-15" type='submit'>Log in</button>
                                            </div>
                                        </form>
                                        <div className="text-center my-4">
                                            <p className='fs-14'>Sign up with a Social Media</p>
                                        </div>
                                        <div className="text-center my-5">
                                            <img src={"Group 21.png"} className="ms-2  social" alt="facebook" />
                                            <img src={"Group 16.png"} className="ms-3 social" alt="facebook" />
                                            <img src={"Group 19.png"} className="ms-3 social" alt="facebook" />

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal
              title="Succefull"
              isModalVisible={succesModel}
              closable={false}
            >
              <div className='p-5'>
                <p className='fs-22 text-white text-center p-5'>{success}</p>
                <div className='text-center'>
                <Link href="/Dashboard">
                  <button className='btn login-button fs-14 px-5 mx-auto'>View your dashboard</button></Link>
                </div>
              </div>
            </CustomModal>
            <CustomModal
              title="Error"
              isModalVisible={errorModel}
              handleCancel={() => setErrorModel(false)}
              closable={true}
            >
              <p className='text-white'>{error}</p>
            </CustomModal>
        </div>
    )
}

export default Login
