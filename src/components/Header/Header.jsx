import { Link } from 'react-router-dom';
import './Header.css'


function Header() {

const menuOptions = ['home', 'new-in', 'shop', 'about-us', 'contact'];

  return(
    <nav>
      <div className='nav-left'>
        <ul>
        {menuOptions.map((item, index) =>
          <li key={index}><Link to={`/${item}`}>{item}</Link></li>
        )}
        </ul> 
      </div>
      <div className='nav-middle'>
        <p>LOGO</p>
       
      </div>
      <div className='nav-right'>
        <p>asd</p>
      </div>
    </nav>
  )
}

export {Header}