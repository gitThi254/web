import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrum title={"Sign Up"} />
      <div className='logig-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Login</h3>
              <form action='' className='d-flex flex-column gap-30'>
                <div>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='form-control'
                  />
                </div>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='form-control'
                  />
                </div>
                <div>
                  <input
                    type='text'
                    name='phone'
                    placeholder='Phone Number'
                    className='form-control'
                  />
                </div>
                <div className='mt-1'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='form-control'
                  />
                </div>
                <div>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-30'>
                    <button className='button border-0'>Signup</button>
                    <Link to='/login' className='button signup'>
                      Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
