import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title='Contact us' />
      <BreadCrum title='Contact us' />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24690.838066941687!2d105.76268367192057!3d21.044645476866375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ec71c09415%3A0x43bc27251047003d!2zS2nhu4F1IE1haSwgUGjDumMgRGnhu4VuLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1701423015405!5m2!1svi!2s'
                width='600'
                height='450'
                className='border-0 w-100'
                allowfullscreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Mobile Number'
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        className='w-100 form-control'
                        cols='30'
                        rows='4'
                        placeholder='Comments'
                      />
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Hno:277, Near village chopal, Mandaura, Sonipat,
                          Haryan
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href='tel:+91 8264954234'>+91 8264954234</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto:navdeepahiya753@mail.com'>
                          navdeepdahiya753@gmail.com
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Monday - Friday 10 AM 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
