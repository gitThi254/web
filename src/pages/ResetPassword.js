import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrum title={"Reset Password"} />
      <div className='logig-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Reset Password</h3>
              <form action='' className='d-flex flex-column gap-30'>
                <div className='mt-1'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='form-control'
                  />
                </div>
                <div>
                  <input
                    type='pasword'
                    name='Confirmpassword'
                    placeholder='Confirm Password'
                    className='form-control'
                  />
                </div>
                <div>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-30'>
                    <button className='button border-0'>OK</button>
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

export default ResetPassword;
