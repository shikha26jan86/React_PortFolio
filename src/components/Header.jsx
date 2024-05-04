import React from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


const Header = () => {
  return (
    <>
    <div >
        <nav className='HeaderNav' style={{color:"black ",backgroundColor:"gray"}} >
            <div class="left"><h1><strong> SHIKHA GADPAYLE</strong> </h1></div>
            <div class="right" >
                <ul >
                    <li><Link to="/Home">Home</Link>  </li>
                    <li><Link to="./About">About</Link>  </li>
                    <li><Link to="./Service">Service</Link>  </li>
                    <li><Link to="./Project">Project</Link>  </li>
                    <li><Link to="./contact">Contact Me</Link>  </li>
                    {/* <li><Link to="./Shikh Gadpayle(f).pdf">My Resume</Link>  </li> */}
                    <li><button className='btn btn-danger'><a href='images/Shikh Gadpayle(f).pdf' download >Download CV</a></button></li>
                    
               </ul>
              </div>
              {/* = */}
              {/* <header> */}
        {/* <nav>
            <div class="left">Shikha's Portfolio  </div>
            <div class="right" >
                <ul >
                    <li><a href="./index.html">Home</a>  </li>
                    <li><a href="./about.html ">About</a>  </li>
                    <li><a href="./service.html">Service</a>  </li>
                    <li><a href="./project.html">Project</a>  </li>
                    <li><a href="./contact_me.html">Contact Me</a>  </li>
                    <li><a href="./Shikh Gadpayle(f).pdf">My Resume</a>  </li>
               </ul>
            </div>
        </nav> */}
    {/* </header><hr></hr> */}
              {/* = */}
            <div>
                 </div>
        </nav>
    </div>
      </>
  )
}

export default Header