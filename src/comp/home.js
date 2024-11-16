import React, { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom'
import { FaEye, FaHeart, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import HomeProduct from './home_product';
import girl from '../image/education.png';
import multi1 from '../image/Multi-Banner-1.avif';
import multi2 from '../image/Multi-banner-2.avif';
import multi3 from '../image/Multi-Banner-3.webp';
import multi4 from '../image/Multi-banner-4.avif';
import multi5 from '../image/Multi-Banner-5.webp';



const Home = ({ addtocart, addtolike, likedProductsIds, setAddCartProduct, addCartProduct }) => {
    //product category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])


    //Trending product
    const [trendingProduct, setTrendingProduct] = useState(HomeProduct);
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

    //format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };


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
                                            const isLiked = likedProductsIds.includes(curElm.id);
                                            const isAdd = addCartProduct.includes(curElm.id);

                                            return (
                                                <>
                                                    <div className='box' key={curElm.id}>
                                                        <div className='img_box'>
                                                            <img src={curElm.images} alt=''></img>
                                                            <div className='icon'>
                                                                <div className='icon_box' onClick={() => detailpage(curElm)} >
                                                                    <FaEye />
                                                                </div>
                                                                <div onClick={() => addtolike(curElm)} className={`icon_box  heart-icon  ${isLiked ? 'liked' : 'unliked'}`}>
                                                                    <FaHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='info'>
                                                            <h3>{curElm.Name}</h3>
                                                            <p> {formatCurrency(curElm.price)}</p>
                                                            <button onClick={() => {

                                                                addtocart(curElm);
                                                            }}
                                                                className={`add-cart ${isAdd ? 'addtocart' : 'removetocart'}`}
                                                            >
                                                                {isAdd ? 'Remove cart' : 'Add To Cart'}</button>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        })
                                    }
                                </div>
                                <button className='end_btn'>Show More</button>
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
                                            <img src={girl} alt='testimonial'></img>
                                        </div>
                                        <div className='detail_testimonial'>
                                            <div className='info'>
                                                <h3>Charlie</h3>
                                                <h4>Kino</h4>
                                                <p>The products are of exceptional quality, and the customer service is top-notch. Highly recommend!
                                                </p>
                                            </div>

                                            <div className='info'>
                                                <h3>Naveen</h3>
                                                <h4>web designer</h4>
                                                <p>"I've had an amazing experience shopping here. Fast delivery, great products, and excellent support!"
                                                </p>
                                            </div>
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
                                <img src={multi1} alt='banner'></img>
                            </div>
                            <div className='box'>
                                <img src={multi2} alt='banner'></img>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='top'>
                                <img src={multi3} alt=''></img>
                                <img src={multi4} alt=''></img>
                                <img src={multi4} alt=''></img>
                            </div>
                            <div className='bottom'>
                                <img src={multi5} alt=''></img>
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
                                    const isLiked = likedProductsIds.includes(curElm.id);
                                    const isAdd = addCartProduct.includes(curElm.id);

                                    return (
                                        <>
                                            <div className='product_box'>
                                                <div className='img-box'>
                                                    <img src={curElm.images} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p> {formatCurrency(curElm.price)}</p>
                                                    <div className='icon'>
                                                        <button onClick={() => detailpage(curElm)}><FaEye /></button>
                                                        <button onClick={() => addtolike(curElm)} className={`heart-icon  ${isLiked ? 'liked' : 'unliked'}`}><FaHeart /></button>
                                                        <button onClick={() => {

                                                            addtocart(curElm);
                                                        }}
                                                            className={`add-cart ${isAdd ? 'addtocartlogo' : 'removetocartlogo'}`}
                                                        >
                                                            {isAdd ? <FaShoppingCart /> : <AiOutlineShoppingCart />}</button>

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
                                    const isLiked = likedProductsIds.includes(curElm.id);
                                    const isAdd = addCartProduct.includes(curElm.id);

                                    return (
                                        <>
                                            <div className='product_box'>
                                                <div className='img-box'>
                                                    <img src={curElm.images} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p> {formatCurrency(curElm.price)}</p>
                                                    <div className='icon'>
                                                        <button onClick={() => detailpage(curElm)}><FaEye /></button>
                                                        <button onClick={() => addtolike(curElm)} className={`heart-icon  ${isLiked ? 'liked' : 'unliked'}`}><FaHeart /></button>
                                                        <button onClick={() => {

                                                            addtocart(curElm);
                                                        }}
                                                            className={`add-cart ${isAdd ? 'addtocartlogo' : 'removetocartlogo'}`}
                                                        >
                                                            {isAdd ? <FaShoppingCart /> : <AiOutlineShoppingCart />}</button>
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
                                    const isLiked = likedProductsIds.includes(curElm.id);
                                    const isAdd = addCartProduct.includes(curElm.id);

                                    return (
                                        <>
                                            <div className='product_box'>
                                                <div className='img-box'>
                                                    <img src={curElm.images} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p> {formatCurrency(curElm.price)}</p>
                                                    <div className='icon'>
                                                        <button onClick={() => detailpage(curElm)}><FaEye /></button>
                                                        <button onClick={() => addtolike(curElm)} className={`heart-icon  ${isLiked ? 'liked' : 'unliked'}`}><FaHeart /></button>
                                                        <button onClick={() => {

                                                            addtocart(curElm);
                                                        }}
                                                            className={`add-cart ${isAdd ? 'addtocartlogo' : 'removetocartlogo'}`}
                                                        >
                                                            {isAdd ? <FaShoppingCart /> : <AiOutlineShoppingCart />}</button>
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
