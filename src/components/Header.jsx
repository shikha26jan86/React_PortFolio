import React from 'react'
import {Link} from "react-router-dom";
import './css/Header.css'


const Header = () => {
  return (
    <>
    <div >
        <nav className='HeaderNav' >
            <div class="left"><h1><strong> SHIKHA GADPAYLE</strong> </h1></div>
            <div class="right" >
                <ul >
                    <li><Link to="/Home">Home</Link>  </li>
                    <li><Link to="./About">About</Link>  </li>
                    <li><Link to="./Service">Service</Link>  </li>
                    <li><Link to="./Project">Project</Link>  </li>
                    <li><Link to="./contact">Contact Me</Link>  </li>
                </ul>
              </div>
             <div>
                 </div>
        </nav>
    </div>
      </>
  )
}

export default Header