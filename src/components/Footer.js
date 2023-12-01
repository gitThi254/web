import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up for newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Seach Product Here...'
                  aria-label='Seach Product Here...'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-2' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row text-white'>
            <div className='col-4'>
              <h4>Contact us</h4>
              <div>
                <address className='text-white'>
                  Hno: 277 Near Vill chopal,
                  <br /> Sonipat, Naryana <br />
                  PinCode : 131103
                </address>
                <Link
                  href='tel:91+ 8264954234'
                  className='mt-4 d-block mb-2 text-white'
                >
                  +91 8264954234
                </Link>
                <Link
                  to='mailto:navddepdahiya753@gmail.com'
                  className='mt-2 d-block mb-2 text-white'
                >
                  navddepdahiya753@gmail.com
                </Link>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <Link to='' className='text-white'>
                    <BsLinkedin className='fs-4' />
                  </Link>
                  <Link to='' className='text-white'>
                    <BsInstagram className='fs-4' />
                  </Link>
                  <Link to='' className='text-white'>
                    <BsGithub className='fs-4' />
                  </Link>
                  <Link to='' className='text-white'>
                    <BsYoutube className='fs-4' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>HeadPhones</Link>
                <Link className='text-white py-2 mb-1'>Tablet</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()} Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
