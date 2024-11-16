import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Shop from './shop';
import Cart from './cart';
import Contact from './contact';

const Rout = ({ shop, Filter, allcartfilter, addtocart, cart, setCart, addtolike, like, setLike, likedProductsIds, setLikedProductsIds, setAddCartProduct, addCartProduct }) => {
    return (
        <>
            <Routes>
                {/* Home Route */}
                <Route path='/' element={<Home addtocart={addtocart} addtolike={addtolike} likedProductsIds={likedProductsIds} addCartProduct={addCartProduct} setAddCartProduct={setAddCartProduct} />} />

                {/* Cart Route */}
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart} like={like} setLike={setLike} likedProductsIds={likedProductsIds} setLikedProductsIds={setLikedProductsIds}
                    addCartProduct={addCartProduct} setAddCartProduct={setAddCartProduct} />} />

                {/* Shop Route (with corrected path) */}
                <Route path='/shop' element={<Shop shop={shop} cart={cart} setCart={setCart} Filter={Filter} allcartfilter={allcartfilter} addtocart={addtocart}
                    addtolike={addtolike} likedProductsIds={likedProductsIds} addCartProduct={addCartProduct} setAddCartProduct={setAddCartProduct} />} />

                {/* Contact Route */}
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Rout;
