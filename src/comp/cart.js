import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ cart, setCart, like, setLike, setLikedProductsIds, likedProductsIds, setAddCartProduct, addCartProduct }) => {

    // Function to format numbers as currency
    const formatCurrency = (amount) => {
        return amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }).replace('₹', '₹ ');
    };

    const formatCurrency1 = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Increase quantity of cart product
    const incqty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm;
        }));
    };

    // Decrease quantity of cart product
    const decqty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        if (exist.qty > 1) { // Prevent quantity from going below 1
            setCart(cart.map((curElm) => {
                return curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm;
            }));
        }
    };

    // Remove cart product
    const removeproduct = (product) => {
        setCart(cart.filter((curElm) => curElm.id !== product.id));
        setAddCartProduct(addCartProduct.filter((id) => id !== product.id));

    };

    // Remove liked product
    const removelikeproduct = (product) => {
        setTimeout(() => {
            setLike(like.filter((curElm) => curElm.id !== product.id));
            setLikedProductsIds(likedProductsIds.filter((id) => id !== product.id));
        }, 300); // 300 milliseconds
    };



    // Total price calculation
    const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

    return (
        <>



            <div className='cart'>
                <h3>#cart</h3>
                {
                    cart.length === 0 &&
                    <div className='empty_cart'>
                        <h2>Your Shopping cart is empty</h2>
                        <Link to='/shop'>
                            <button>Shop Now</button>
                        </Link>
                    </div>
                }
                <div className='container'>
                    {
                        cart.map((curElm) => (
                            <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.images} alt=''></img>
                                </div>
                                <div className='detail'>
                                    <div className='info'>
                                        <h4>{curElm.cat}</h4>
                                        <h3>{curElm.Name}</h3>
                                        <p>Price: {formatCurrency1(curElm.price)}</p>
                                        <p>Total: {formatCurrency(curElm.price * curElm.qty)}</p>
                                    </div>
                                    <div className='quantity'>
                                        <button onClick={() => decqty(curElm)}>-</button>
                                        <input type='number' value={curElm.qty} readOnly></input>
                                        <button onClick={() => incqty(curElm)}>+</button>
                                    </div>
                                    <div className='icon'>
                                        <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='bottom'>
                    {
                        cart.length > 0 &&
                        <>
                            <div className='Total'>
                                <h4>Total: {formatCurrency(total)}</h4>
                            </div>
                            <button>Checkout</button>
                        </>
                    }
                </div>
            </div>

            <div className='like'>
                <h3>#Liked Product</h3>
                {
                    like.length === 0 &&
                    <div className='empty_like'>
                        <h2>Add your liked Products</h2>
                        <Link to='/shop'>
                            <button>View Products</button>
                        </Link>
                    </div>
                }
                <div className='container'>
                    {
                        like.map((curElm) => (
                            <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.images} alt=''></img>
                                </div>
                                <div className='detail'>
                                    <div className='info'>
                                        <h4>{curElm.cat}</h4>
                                        <h3>{curElm.Name}</h3>
                                        <p>Price: {formatCurrency1(curElm.price)}</p>
                                    </div>
                                    <div className='icon'>
                                        <li onClick={() => removelikeproduct(curElm)}><FaHeart /></li>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Cart;
