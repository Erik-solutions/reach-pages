
 import '../css/sideBar.css'
 import { useState } from 'react';

export default function SideBar(){

       const [extendsMenu,extendsMenuSet] = useState(false)
     
    

        function menuExtender(){
                if (extendsMenu=== false){
                  const  menuText = document.querySelectorAll('.nav__item')
                  const menuIcon= document.querySelector('.menu__icon')
                  const navItem= document.querySelector('.sidebar')
                  menuText.forEach(item => {
                  item.style.display = 'none';
                  //console.log(menuText)
                  })
                  menuIcon.style.display='inline'
                  navItem.style.width='5rem'
                  menuExtender()
                  
                }
            else{
                menuExtender()
            } }


        function iconReset() {
            // Use the functional form of setState to toggle the state based on previous state
                    extendsMenuSet(prevState => !prevState);  // Toggling the state
                 console.log(extendsMenu)}

       

    return(

        <nav className='sidebar'>  
            <div className="company__logo">
                <div className='nav__item'><h1 >Finance Pro</h1>  </div>
                <span className="material-symbols-outlined menu__icon" onClick={iconReset}>menu </span>
            </div>
            <div className="nav__items">
                <ul>
                    <li>  <span className="material-symbols-outlined" >dashboard </span>
                    <div className='nav__item'>  Dashboard  </div></li> 

                    <li><span className="material-symbols-outlined" >local_atm </span>
                        <div className='nav__item'>Transactions</div> </li>

                    <li><span className="material-symbols-outlined" >import_contacts </span>
                        <div className='nav__item'>Day Books</div> </li>

                    <li><span className="material-symbols-outlined"  >memory </span>
                   
                        <div className='nav__item'>Ledgers</div></li>

                    <li><span className="material-symbols-outlined" >docs </span>
                         <div className='nav__item'>Reports</div></li>

                    <li><span className="material-symbols-outlined" >settings </span>
                        <div className='nav__item'>Settings</div></li>
                </ul>
            </div>
        </nav>

    );}