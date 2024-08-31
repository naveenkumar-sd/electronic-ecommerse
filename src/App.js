import React, { useState } from 'react'
import Nav from './comp/nav'
import Rout from './comp/rout'
import Footer from './comp/footer'
import HomeProduct from './comp/home_product'
import { BrowserRouter } from 'react-router-dom'


const App = () => {

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




  return (
    <>

      <BrowserRouter>

        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
        <Rout shop={shop} Filter={Filter} allcartfilter={allcartfilter} />
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App