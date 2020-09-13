import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {

    const [click, setClick] = useState(false);
    let handleClick = () =>{
        if(click==false){
            setClick(true);
        }
        else{
            setClick(false);
        }
        
    }


    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                   
                <Link to='/' className='navbar-logo'>
                    TRVL <i className='fab fa-typo3'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                </div>
            </nav>

        </div>
    )
}
