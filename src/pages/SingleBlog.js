import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrum title={"Dynamic Blog Name"} />
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                <Link to='/blogs' className='d-flex align-item-center gap-10'>
                  <HiOutlineArrowLeft className='fs-5' />
                  Go back to Blogs
                </Link>
                <h3>A Beautiful Sunday Morning Renaissance</h3>
                <img src='images/blog-1.jpg' alt='blog' />
                <p>
                  You're only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury -
                  it's not something their heart. I have a fantastic
                  relationship with money. Screlerisque sociosqu ullamsorper
                  urna nisl mollis vestibulum pertium commodo inceptos cum
                  condimentum placerat diam venenaties ante vestibulumn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
