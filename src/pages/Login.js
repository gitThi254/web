import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrum title={"Login"} />
      <div className='logig-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Login</h3>
              <form action='' className='d-flex flex-column gap-30'>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
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
                  <Link to='/forgot-password'>Forgot Password?</Link>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-30'>
                    <button className='button border-0'>Login</button>
                    <Link to='/signup' className='button signup'>
                      SignUp
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

export default Login;
