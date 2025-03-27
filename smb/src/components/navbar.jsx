import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../css/navbar.css'

export default function NavBar() {
  const [count, setCount] = useState(0);

  return (
    <div className='nav__container'>
<div className='logos'>
<img src={reactLogo} />
<h1> BusinessOS</h1>

</div>

      <ul>
<li>Register</li>
<li>Login</li>
<li>Pricing</li>


      </ul>
    </div>
  );
}