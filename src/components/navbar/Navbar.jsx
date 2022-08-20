import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const Navbar = () => {

  const [darkMode, dispatch] = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          < SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            < LanguageIcon className='icon' />
            English
          </div>
          <div className="item" onClick={() => dispatch({
            type: 'TOGGLE'
          })}>

            { darkMode.darkMode ? < LightModeIcon className='icon'  style={{cursor: 'pointer'}} /> : < DarkModeIcon className='icon' style={{cursor: 'pointer'}} />}

          </div>
          <div className="item">
            < FullscreenIcon className='icon' />
          </div>
          <div className="item">
            < NotificationsNoneIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            < ChatIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            < ListIcon className='icon' />
          </div>
          <div className="item">
            <img 
              src="https://images.pexels.com/photos/2575775/pexels-photo-2575775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
              alt=""
              className='avatar' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar