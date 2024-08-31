import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Shop from './shop';

const Rout = ({ shop, Filter, allcartfilter }) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcartfilter={allcartfilter} />} />
            </Routes>
        </>
    )
}

export default Rout