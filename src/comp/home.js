import React, { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom'
import { FaEye, FaHeart, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HomeProduct from './home_product';

const Home = () => {
    //product category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])

    //Trending product
    const [trendingProduct, setTrendingProduct] = useState(HomeProduct)
    // Filter of trending product

    const filtercate = (x) => {

        const filterproduct = HomeProduct.filter((curElm) => {
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }

    //All trending product
    const allTrendingProduct = () => {
        setTrendingProduct(HomeProduct)
    }

    //product Type
    useEffect(() => {
        productcategory()
    })

    const productcategory = () => {

        // New product
        const newcategory = HomeProduct.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        // Featured product
        const featuredcategory = HomeProduct.filter((x) => {
            return x.type === 'featured'
        })
        setFeaturedProduct(featuredcategory)

        // Top product
        const topcategory = HomeProduct.filter((x) => {
            return x.type === 'top'
        })
        setTopProduct(topcategory)
    }


    return (
        <>
            <div className='home'>
                <div className='top_banner'>
                    <div className='content'>
                        <h3>silver aluminum</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first order</p>
                        <Link to='/shop' className='link'>Shop Now</Link>
                    </div>
                </div>
                <div className='trending'>
                    <div className='container'>
                        <div className='left_box'>
                            <div className='header'>
                                <div className='heading'>
                                    <h1 onClick={() => allTrendingProduct()}>trending products</h1>
                                </div>
                                <div className='cate'>
                                    <h3 onClick={() => filtercate('new')}>New</h3>
                                    <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                    <h3 onClick={() => filtercate('top')}>top selling</h3>
                                </div>
                            </div>
                            <div className='products'>
                                <div className='container'>
                                    {
                                        trendingProduct.map((curElm) => {
                                            return (
                                                <>
                                                    <div className='box' key={curElm.id}>
                                                        <div className='img_box'>
                                                            <img src={curElm.image} alt=''></img>
                                                            <div className='icon'>
                                                                <div className='icon_box'>
                                                                    <FaEye />
                                                                </div>
                                                                <div className='icon_box'>
                                                                    <FaHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='info'>
                                                            <h3>{curElm.Name}</h3>
                                                            <p>${curElm.price}</p>
                                                            <button className='btn'>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        })
                                    }
                                </div>
                                <button>Show More</button>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='right_container'>
                                <div className='testimonial'>
                                    <div className='head'>
                                        <h3>Our Testimonial</h3>
                                    </div>
                                    <div className='detail'>
                                        <div className='img_box'>
                                            <img src='image/image/T1.avif' alt='testimonial'></img>
                                        </div>
                                        <div className='info'>
                                            <h3>stephen robot</h3>
                                            <h4>web designer</h4>
                                            <p>The product is very good to use and look.
                                                The product is very good to use and look.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='newsletter'>
                                    <div className='head'>
                                        <h3>newsletter</h3>
                                    </div>
                                    <div className='form'>
                                        <p>join our malling list</p>
                                        <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                        <button>subscribe</button>
                                        <div className='icon_box'>
                                            <div className='icon'>
                                                <FaFacebook />
                                            </div>
                                            <div className='icon'>
                                                <FaTwitter />
                                            </div>
                                            <div className='icon'>
                                                <FaInstagram />
                                            </div>
                                            <div className='icon'>
                                                <FaYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banners'>
                    <div className='container'>
                        <div className='left_box'>
                            <div className='box'>
                                <img src='image/image/Multi-Banner-1.avif' alt='banner'></img>
                            </div>
                            <div className='box'>
                                <img src='image/image/Multi-Banner-2.avif' alt='banner'></img>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='top'>
                                <img src='image/image/Multi-Banner-3.webp' alt=''></img>
                                <img src='image/image/Multi-Banner-4.avif' alt=''></img>
                                <img src='image/image/Multi-Banner-4.avif' alt=''></img>
                            </div>
                            <div className='bottom'>
                                <img src='image/image/Multi-Banner-5.webp' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product_type'>
                    <div className='container'>
                        <div className='box'>
                            <div className='header'>
                                <h2>New product</h2>
                            </div>
                            {
                                newProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className='product_box'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button><AiOutlineShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className='box'>
                            <div className='header'>
                                <h2>Featured product</h2>
                            </div>
                            {
                                featuredProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className='product_box'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button><AiOutlineShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className='box'>
                            <div className='header'>
                                <h2>Top product</h2>
                            </div>
                            {
                                topProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className='product_box'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button><AiOutlineShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
