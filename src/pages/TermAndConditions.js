import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Term And conditions"} />
      <BreadCrum title={"Term And conditions"} />
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermAndConditions;
