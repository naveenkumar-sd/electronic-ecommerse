import React, { useState } from 'react';
import './shop.css';
import { FaHeart, FaEye } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import shopleft from '../image/shop_left.avif';
import shoptop from '../image/shop_top.webp';

const Shop = ({ shop, Filter, allcartfilter, addtocart, addtolike, likedProductsIds, setAddCartProduct, addCartProduct }) => {
    // Toggle product Detail    
    const [showDetail, setShowDetail] = useState(false);

    // Detail Page Data
    const [detail, setDetail] = useState(null);

    // Showing Detail Box
    const detailpage = (product) => {
        setDetail(product);
        setShowDetail(true);
    };

    const closedetail = () => {
        setShowDetail(false);
    };

    // Function to format numbers as currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <>
            {
                showDetail && detail && (
                    <div className='product_detail'>
                        <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
                        <div className='container'>
                            <div className='img_box'>
                                <img src={detail.images} alt={detail.Name}></img>
                            </div>
                            <div className='product_info'>
                                <h4># {detail.cat}</h4>
                                <h2>{detail.Name}</h2>
                                <p>{detail.lines}</p>
                                <p>Price: {formatCurrency(detail.price)}</p>
                                <button onClick={() => {
                                    console.log(`Button clicked for: ${detail.Name}`);
                                    addtocart(detail);
                                }}
                                    className={`add-cart ${addCartProduct.includes(detail.id) ? 'addtocart1' : 'removetocart1'}`}
                                >
                                    {addCartProduct.includes(detail.id) ? 'Remove cart' : 'Add To Cart'}
                                </button>
                                {/* Add more product details here */}
                            </div>
                        </div>
                    </div>
                )
            }


            <div className='shop'>
                <h2># shop</h2>
                <p>Home/ shop</p>
                <div className='container'>
                    <div className='left-box'>
                        <div className='category'>
                            <div className='header'>
                                <h2>all categories</h2>
                            </div>
                            <div className='box'>
                                <ul>
                                    <li onClick={() => allcartfilter()}># All </li>
                                    <li onClick={() => Filter("tv")}># tv</li>
                                    <li onClick={() => Filter("laptop")}># laptop</li>
                                    <li onClick={() => Filter("watch")}># watch</li>
                                    <li onClick={() => Filter("speaker")}># speaker</li>
                                    <li onClick={() => Filter("electronics")}># electronics</li>
                                    <li onClick={() => Filter("headphone")}># headphone</li>
                                    <li onClick={() => Filter("phone")}># phone</li>
                                </ul>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src={shopleft} alt=''></img>
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src={shoptop} alt=''></img>
                            </div>
                        </div>
                        <div className='product_box'>
                            <h2>Shop product</h2>
                            <div className='product_container'>
                                {shop.map((curElm) => {
                                    const isLiked = likedProductsIds.includes(curElm.id);
                                    const isAdd = addCartProduct.includes(curElm.id);

                                    return (
                                        <div className='box' key={curElm.id}>
                                            <div className='img_box'>
                                                <img src={curElm.images} alt={curElm.Name}></img>
                                                <div className='icon'>
                                                    <li onClick={() => addtolike(curElm)}
                                                        className={`heart-icon ${isLiked ? 'liked' : 'unliked'}`}><FaHeart /></li>
                                                    <li onClick={() => detailpage(curElm)}><FaEye /></li>
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>{formatCurrency(curElm.price)}</p>
                                                <button
                                                    onClick={() => {
                                                        console.log(`Button clicked for: ${curElm.Name}`);
                                                        addtocart(curElm);
                                                    }}
                                                    className={`add-cart ${isAdd ? 'addtocart' : 'removetocart'}`}>
                                                    {isAdd ? 'Remove cart' : 'Add To Cart'}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
