import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogIn } from 'react-icons/fi'
import { CiLogout } from 'react-icons/ci'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import logo from '../image/logo.webp';

import './nav.css'

const Nav = ({ search, setSearch, searchproduct }) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className='header'>
                <div className='top_header'>
                    <div className='icon'>
                        <MdLocalShipping />
                    </div>

                    <div className='info'>
                        <p>Free shipping when shopping upto  ₹1000</p>
                    </div>
                </div>
                <div className='mid_header'>
                    <div className='logo'>
                        <img src={logo} alt='logo'></img>
                    </div>
                    <div className='search_box'>
                        <input type='text' value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)}></input>
                        <button onClick={searchproduct}><AiOutlineSearch /></button>
                    </div>

                    {
                        isAuthenticated ?
                            //logout:Button
                            <div className='user'>
                                <div className='icon'>
                                    <CiLogout />
                                </div>
                                <div className='btn'>
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                            :
                            //Login:Button
                            <div className='user'>
                                <div className='icon'>
                                    <FiLogIn />
                                </div>
                                <div className='btn'>
                                    <button onClick={() => loginWithRedirect()}>Log In</button>
                                </div>
                            </div>


                    }

                </div>
                <div className='last_header'>
                    <div className='user_profile'>
                        {
                            //User profile
                            isAuthenticated ?
                                <>
                                    <div className='for_logo'>
                                        <div className='icon'>
                                            <FaRegUserCircle />
                                        </div>
                                        <div className='info'>
                                            <h2>{user.name}</h2>
                                            <p>{user.email}</p>
                                        </div>
                                    </div>

                                </>
                                :
                                <>

                                    <div className='for_logo'>

                                        <div className='icon'>
                                            <FaRegUserCircle />
                                        </div>
                                        <div className='info'>
                                            <p>Please Login</p>
                                        </div>

                                    </div>


                                </>
                        }
                    </div>

                    <div className='nav'>
                        <ul>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/shop' className='link'>Shop</Link></li>
                            <li> <Link to='/cart' className='link'>Cart</Link></li>
                            {/* <li> <Link to='/about' className='link'>About</Link></li> */}
                            <li> <Link to='/contact' className='link'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='offer'>
                        <p>Flat 10% over all iphone</p>
                    </div>

                </div>



            </div>


        </>
    )
}

export default Nav