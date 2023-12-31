import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-image'>
        <img src='images/blog-1.jpg' alt='blog' className='img-fluid' />
      </div>
      <div className='blog-content'>
        <p className='date'>1 Dec, 2022</p>
        <h5 className='title'>A beautify sunday morning renainssance</h5>
        <p className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          qui est libero magnam ea rerum nobis? Quidem voluptatibus recusandae
          corrupti?
        </p>
        <Link to='' className='button'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
