import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
    const [isSelect, setIsSelect] = useState(false)
    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const Navigate = useNavigate()
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        Navigate('/')
        dispatch(setCurrentUser(null))
    }
    // ("body").click(function(e){
    //     const leftnav = document.querySelector(".leftnav-dialog");
    //     leftnav.classList.toggle("isSelected");
    //     if(('.leftnav-dialog').hasClass('isSelected')){
    //         ('.leftnav-dialog').toggleClass("isSelected")
    //     }
    // })
    const handleSwitch = () => {
        setOpen(!open);
        const item = document.querySelector(".nav-menu");
        const leftnav = document.querySelector(".leftnav-dialog");
        // const container = document.querySelector(".nav-container");
        // item.classList.toggle('isSelected');
        // leftnav.classList.toggle("isSelected");
        // container.classList.toggle('isSelected');
    }
        
    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
                // console.log(menuRef.current);
              } 
        };
    
        document.addEventListener("mousedown", handler);
        
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    
      });
      

    useEffect(() => {
        const token = User?.token
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])
    return (
        <header className="topbar">
            <div ref={menuRef} className="topbar-container">
                {/* <nav className='main-nav'> */}
                {/* <div className='navbar'> */}
                {/* <a href="#" class="s-topbar--menu-btn js-left-sidebar-toggle" role="menuitem" aria-haspopup="true" aria-controls="left-sidebar" aria-expanded="false" style=""><span></span></a> */}
                {/* <div className='nav-container'> */}
                <Link to='#' className={`nav-item nav-menu ${open? 'active' : 'inactive'}`} onClick={handleSwitch}>
                    <span></span>
                </Link>

                <div  className={`topbar-dialog leftnav-dialog ${open? 'active' : 'inactive'}`} style={{ top: "47px", left: "0px" }}>
                    <div className='leftnav-sidebar'>
                        <div className="leftnav-sidebar-sticky">
                            <nav>
                                <NavLink to='/' className='left-nav-links' activeclassname='actives'>
                                    <p>Home</p>
                                </NavLink>
                                <div className='left-nav-div'>
                                    <div><p>PUBLIC</p></div>
                                    <NavLink to='/Questions' className='left-nav-links' activeclassname='actives' >
                                        <img src={Globe} alt="Globe" />
                                        <p style={{ paddingLeft: "10px" }}> Questions </p>
                                    </NavLink>
                                    <NavLink to='/Tags' className='left-nav-links' activeclassname='actives' style={{ paddingLeft: "40px" }}>
                                        <p>Tags</p>
                                    </NavLink>
                                    <NavLink to='/Users' className='left-nav-links' activeclassname='actives' style={{ paddingLeft: "40px" }}>
                                        <p>Users</p>
                                    </NavLink>
                                </div>

                            </nav>
                        </div>
                    </div>

                </div>

                {/* </div> */}
                <Link to='/' className='nav-item nav-logo'>
                    <span class="-img _glyph"></span>
                    {/* <img src={logo} alt="logo" /> */}
                </Link>
                <ol class="s-navigation" role="presentation">
                    <li class="d-none">
                        <Link to='/' className='nav-item nav-btn'>About</Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-item nav-btn'>Products</Link>
                    </li>
                    <li class="d-none">
                        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                    </li>
                </ol>
                <form className="searchbar">
                    <div className="searchbar-input">
                        <input className="s-input" type="text" placeholder='Search...' />
                        <img src={search} alt="search" width="18" className='search-icon' />
                    </div>
                </form>
                <nav className="nav-auth">
                    <ol className="auth-content">
                        
                            {User === null ?
                                <>
                                    <li><Link to='/Auth' className='nav-item nav-links auth-item'>Log in</Link></li>
                                    <li><Link to="/SignupUser" id="signup-item" className="nav-item nav-links auth-item auth-item2">Sign up</Link></li>
                                </>
                                 :
                                <>
                                    <li><Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: 'none', display: 'flex', textAlign:'center', alignSelf:'center', padding:'0.8em' }}><Avatar backgroundColor='#009dff' px="10px" py="10px" borderRadius="50%" color='white'>{User.result.name.charAt(0).toUpperCase()}</Avatar></Link></li>
                                    <li><Link to='/' className='nav-item nav-links auth-item' onClick={handleLogout}>Log out</Link></li>
                                </>

                            }
                        
                        
                    </ol>
                </nav>

                {/* </div> */}
                {/* </nav> */}
            </div>
        </header>
    )
}

export default Navbar