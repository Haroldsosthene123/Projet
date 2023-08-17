import React, {useRef} from 'react'
import {Container} from 'reactstrap';
import './header.css';







const navLinks=[
    {
        display:'Accueil',
        url:'#',
    },
    {
        display:'Apropos',
        url:'#',
    },
    {
        display:'Catalogue',
        url:'#',
    },
    {
        display:'Cours',
        url:'#',
    },
    {
        display:'Page',
        url:'#',
    },
    {
        display:'Blog',
        url:'#',
    },
    {
        display:'Inscription',
        url:'#',
    },
    {
        display:'Contact',
        url:'#',
    },
]

const Header = () => {
    const menuRef = useRef()
    const menuToggle = ()=>menuRef.current.classList.toggle('active_menu')
  return (
    <header className="header">
      <Container>
        <div className="Navigation d-flex align-item-center justify-content-between">
            <div className="logo">
                <h2 className="d-flex align-items-center">
                    <i class="ri-tent-line"></i>Agro-Formation
                </h2>
            </div>

            <div className="nav d-flex align-items-center gap-5">
                <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                    <ul className="nav_list">

                            {
                                navLinks.map((item,index)=>(

                                    <li key={index} className="nav_item">
                                     <a href={item.url}>{item.display}</a>
                                     </li>

                                ))
                            }
                    </ul>
                </div>
                <div className="nav_right">
                    <p className="mb-o d-flex align-items-center gap-2"><i class="ri-phone-fill"></i>+229 96483527/45550535</p>
                </div>
                <div className="mobile_menu">
                    <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                </div>
            </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
