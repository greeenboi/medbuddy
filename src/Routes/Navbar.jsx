import React from 'react'
import "../Components/navstyles.scss"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
        <div className="container">
            <div className='links'>
                <Link className="listItem" to="/" >
                    <button className='wrapper'>
                        <img src="/medbuddy1.png" alt="logo" height="50x"/>
                            MedBuddy
                    </button>
                </Link>
                <ul>
                    <Link className="listItem" to="/About" >About</Link>
                    <img width="20" height="20" src="/slash.png" alt="line--v1"/>

                    <Link className="listItem" to="/Download" >Download</Link>
                    <img width="20" height="20" src="/slash.png" alt="line--v1"/>
                    
                    <Link className="listItem" to="/Contact" >Contact</Link>
                </ul>
            </div>
            <div className="links">
                <Link className="listItem" to="/Download" >
                    <button className="button2">Try it Now</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Navbar