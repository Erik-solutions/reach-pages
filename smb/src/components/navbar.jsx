import { useState } from 'react'
//import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/navbar.css'

export default function NavBar() {
  const [count, setCount] = useState(0);

  return (

    <nav>
    <div className='nav__container'>
<div className='logos'>
<img src={viteLogo} />
<h1> BusinessOS</h1>

</div>

      <ul className='nav__items'>
<li><a href="">Register</a></li>
<li><a href="">Login</a></li>
<li><a href="">Pricing </a></li>


      </ul>
    </div> </nav>
  );
}