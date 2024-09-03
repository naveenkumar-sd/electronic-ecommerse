import React, { useState } from 'react'
import Nav from './comp/nav'
import Rout from './comp/rout'
import Footer from './comp/footer'
import HomeProduct from './comp/home_product'
import { BrowserRouter } from 'react-router-dom'


const App = () => {

  //Add to cart
  const [cart, setCart] = useState([])

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
      alert("This product is already in cart")
    } else {
      setCart([...cart, { ...product, qty: 1 }])
      alert("Added to cart")
    }



  }
  console.log(cart)


  return (
    <>

      <BrowserRouter>

        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcartfilter={allcartfilter} addtocart={addtocart} />
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App