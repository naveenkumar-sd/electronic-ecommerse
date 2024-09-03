import React, { useState } from 'react'
import './shop.css'
import { FaHeart, FaEye } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Shop = ({ shop, Filter, allcartfilter, addtocart }) => {

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

    return (
        <>
            {
                showDetail && detail && (
                    <div className='product_detail'>
                        <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
                        <div className='container'>
                            <div className='img_box'>
                                <img src={detail.image} alt={detail.Name}></img>
                            </div>
                            <div className='product_info'>
                                <h4># {detail.cat}</h4>
                                <h2>{detail.Name}</h2>
                                <p>A Screen Everyone Will Love: Whether your family is streaming or view</p>
                                <p>Price: ${detail.price}</p>
                                <button onClick={() => addtocart(detail)}>Add to cart</button>

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
                                <img src='image/image/shop_left.avif' alt=''></img>
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='image/image/shop_top.webp' alt=''></img>
                            </div>
                        </div>
                        <div className='product_box'>
                            <h2>Shop product</h2>
                            <div className='product_container'>
                                {
                                    shop.map((curElm) => {
                                        return (
                                            <div className='box' key={curElm.id}>
                                                <div className='img_box'>
                                                    <img src={curElm.image} alt={curElm.Name}></img>
                                                    <div className='icon'>
                                                        <li><FaHeart /></li>
                                                        <li onClick={() => detailpage(curElm)}><FaEye /></li>
                                                    </div>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;
