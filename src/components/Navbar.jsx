import React, { useEffect } from 'react';
import './Style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCompass , faStar , faBookmark , faBell , faCartShopping} from '@fortawesome/free-solid-svg-icons';

const YourNavbarComponent = () => {
  useEffect(() => {
    // Handle hover event to show dropdown
    const homeLink = document.getElementById('navbarDropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    const handleMouseOver = () => {
      dropdownMenu.classList.add('show');
    };

    const handleMouseOut = () => {
      dropdownMenu.classList.remove('show');
    };

    homeLink.addEventListener('mouseover', handleMouseOver);
    homeLink.addEventListener('mouseout', handleMouseOut);

    // Clean up event listeners on component unmount
    return () => {
      homeLink.removeEventListener('mouseover', handleMouseOver);
      homeLink.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (

    
    <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light" style={{height:'80px'}}>
      <a className="navbar-brand" href="/home">
        <img style={{width:'293px' , height:'60px' , paddingLeft:'97px'}} src="https://ik.imagekit.io/4kv3ly02s/logo.png?updatedAt=1706165096329" alt="logo" ></img>
      </a>

      

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

        <div className="input-group">
        <div style={{paddingTop:'10px' , paddingLeft:'34.7px'}}>
          <input style={{width:'300px' , height:'40px' , paddingTop:'0px' , paddingLeft:'10.7px'}} type="text" className="form-control" placeholder="Search here.." />
    
        </div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown" style={{paddingLeft:'90px'}}>
              
           
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <FontAwesomeIcon icon={faCompass} style={{color:'#8064A2'}}/> Explore
</a>
              
            </li>
            <li className="nav-item dropdown" style={{paddingLeft:'50px'}}>
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FontAwesomeIcon icon={faStar} style={{color:'#8064A2'}} />Hobbies
              </a>
              <div className="dropdown-menu border-bottom" aria-labelledby="navbarDropdown">
                <a className="dropdown-item border-bottom" href="/people">People - Community</a>
                <a className="dropdown-item border-bottom" href="/places">Places - Venues</a>
                <a className="dropdown-item border-bottom" href="/program">Programs - Events</a>
                <a className="dropdown-item border-bottom" href="/products">Products-store</a>
                <a className="dropdown-item " href="/blogs">Blogs</a>
              </div>
            </li>
          </ul>
          <div style={{paddingLeft:'70px'}}>
          <FontAwesomeIcon icon={faBookmark} style={{color:'#8064A2'}}/>
</div>
<div style={{paddingLeft:'50px'}}>
          <FontAwesomeIcon icon={faBell} style={{color:'#8064A2'}}/>
</div>
<div style={{paddingLeft:'50px'}}>
<FontAwesomeIcon icon={faCartShopping} style={{color:'#8064A2'}} />
</div>

<div style={{paddingLeft:'110px'}}>
  <button className='borders rounded-3 pl-2 pt-1 pr-2 pb-1'>Sign In</button>
</div>

        </div>
        

      </div>
    </nav>
  );
};

export default YourNavbarComponent;




<div className="dropdown-menu border-bottom" aria-labelledby="navbarDropdown">
                <a className="dropdown-item border-bottom" href="/people">People - Community</a>
                <a className="dropdown-item border-bottom" href="/places">Places - Venues</a>
                <a className="dropdown-item border-bottom" href="/program">Programs - Events</a>
                <a className="dropdown-item border-bottom" href="/products">Products-store</a>
                <a className="dropdown-item " href="/blogs">Blogs</a>
              </div>