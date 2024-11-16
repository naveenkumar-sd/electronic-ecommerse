import React, { useState } from 'react'
import Nav from './comp/nav'
import Rout from './comp/rout'
import Footer from './comp/footer'
import HomeProduct from './comp/home_product'
import { BrowserRouter } from 'react-router-dom'


const App = () => {

  //Add to cart
  const [cart, setCart] = useState([])

  //set property for add to cart
  const [addCartProduct, setAddCartProduct] = useState([])

  //Add to like
  const [like, setLike] = useState([])

  //set color for heart(like)
  const [likedProductsIds, setLikedProductsIds] = useState([])



  //shop page product
  const [shop, setShop] = useState(HomeProduct)

  //Shop search Filter
  const [search, setSearch] = useState([])

  //shop category filter
  const Filter = (x) => {
    const catefilter = HomeProduct.filter((product) => {
      return product.cat === x
    })
    setShop(catefilter)
  }

  const allcartfilter = () => {
    setShop(HomeProduct)
  }


  //shop search filter
  const searchlength = (search || []).length === 0
  const searchproduct = () => {

    if (searchlength) {

      alert("Please Search Something !")
      setShop(HomeProduct)

    } else {



      const searchfilter = HomeProduct.filter((x) => {
        return x.cat === search

      })
      setShop(searchfilter)

    }
  }


  //Add to cart

  const addtocart = (product) => {

    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist) {

      setCart(cart.filter((curElm) => curElm.id !== product.id))
      setAddCartProduct(addCartProduct.filter((id) => id !== product.id))
    } else {

      setCart([...cart, { ...product, qty: 1 }])
      setAddCartProduct([...addCartProduct, product.id]);
    }

  }

  //Add to like
  const addtolike = (product) => {
    const exist = like.find((x) => {
      return x.id === product.id
    })
    if (exist) {

      setLike(like.filter((curElm) => curElm.id !== product.id));
      setLikedProductsIds(likedProductsIds.filter((id) => id !== product.id));


    } else {
      setLike([...like, { ...product }])
      setLikedProductsIds([...likedProductsIds, product.id]);

    }
  }


  return (
    <>

      <BrowserRouter>

        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
        <Rout setAddCartProduct={setAddCartProduct} addCartProduct={addCartProduct} likedProductsIds={likedProductsIds} setLikedProductsIds={setLikedProductsIds} setCart={setCart} cart={cart} setLike={setLike} like={like} shop={shop} Filter={Filter} allcartfilter={allcartfilter} addtocart={addtocart} addtolike={addtolike} />
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App