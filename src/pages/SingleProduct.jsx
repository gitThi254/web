import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";

const SingleProduct = () => {
  return (
    <>
      <Meta title={"Product name"} />
      <BreadCrum title={"Product Name"} />
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'></div>
            <div className='col-6'></div>
          </div>
        </div>
      </div>
      <div className='description-wrapper py-5 home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4>description</h4>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <section className='reviews-wrapper py-5 home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'></div>
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper'></section>
    </>
  );
};

export default SingleProduct;
