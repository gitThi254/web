import React, { useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const gridSetter = (i) => {
    setGrid(i);
  };
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrum title={"Out Store"} />
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'>Availablity</h5>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id=''
                    />
                    <label className='form-check-label' for=''>
                      In Stock (0)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id=''
                    />
                    <label className='form-check-label' for=''>
                      Out of Stock (0)
                    </label>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='floatingInput'
                        placeholder='From'
                      />
                      <label htmlFor='floatingInput'>From</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='floatingInput1'
                        placeholder='To'
                      />
                      <label htmlFor='floatingInput1'>To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Colors</h5>
                  <div>
                    <Color />
                  </div>
                </div>
                <h5 className='sub-title'>Size</h5>
                <div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-1'
                    />
                    <label className='form-check-lable' htmlFor='color-1'>
                      S (2)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-1'
                    />
                    <label className='form-check-lable' htmlFor='color-1'>
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    Headphone
                  </div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    Laptop
                  </div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    Mobile
                  </div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    Wire
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Product</h3>
                <div>
                  <div className='random-products mb-3 d-flex'>
                    <div className='w-50'>
                      <img
                        src='images/watch.jpg'
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>
                        Kids headphoens bulk 10 pack mutil colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor={"#ffd700"}
                      />
                      <p>$ 300</p>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img
                        src='images/watch.jpg'
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>
                        Kids headphoens bulk 10 pack mutil colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor={"#ffd700"}
                      />
                      <p>$ 300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{ width: "100px" }}>
                      Sort By :
                    </p>
                    <select name='' className='form-control form-select' id=''>
                      <option value='manual'>Featured</option>
                      <option value='best-selling' selected='selected'>
                        Best selling
                      </option>
                      <option value='title-ascending'>
                        Alphabetically, A-Z
                      </option>
                      <option value='title-descending'>
                        Alphabetically, Z-A
                      </option>
                      <option value='price-ascending'>
                        Price, low to high
                      </option>
                      <option value='price-descending'>
                        Price, high to low
                      </option>
                      <option value='created-ascending'>
                        Date, old to new
                      </option>
                      <option value='created-descending'>
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalProducts mb-0'>21 Products</p>
                    <div className='d-flex align-items-center  gap-10 grid'>
                      <img
                        onClick={() => {
                          gridSetter(3);
                        }}
                        src='images/gr.svg'
                        alt='grid'
                        className='d-block img-fluid'
                      />
                      <img
                        onClick={() => {
                          gridSetter(4);
                        }}
                        src='images/gr2.svg'
                        alt='grid'
                        className='d-block img-fluid'
                      />
                      <img
                        onClick={() => {
                          gridSetter(6);
                        }}
                        src='images/gr3.svg'
                        alt='grid'
                        className='d-block img-fluid'
                      />
                      <img
                        onClick={() => {
                          gridSetter(12);
                        }}
                        src='images/gr4.svg'
                        alt='grid'
                        className='d-block img-fluid'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
