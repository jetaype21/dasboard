import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/DarkModeContext';
import { useContext } from 'react';

const decoration = { textDecoration: 'none' }

const Sidebar = () => {
  const [darkMode, dispatch] = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={decoration}>
          <span className='logo'>Juan Eber</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to='/' style={decoration}>
            <li>
              < DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LIST</p>
          <Link to='/users' style={decoration}>
            <li>
              < PersonIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products' style={decoration}>
            <li>
              < StoreIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            < AddCardIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            < LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            < QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            < NotificationsNoneIcon className='icon' />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICES</p>
          <li>
            < SettingsSystemDaydreamIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            < PsychologyIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            < SettingsIcon className='icon' />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            < AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            < ExitToAppIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({
          type: 'LIGHT'
        })}></div>
        <div className="colorOption" onClick={() => dispatch({
          type: 'DARK'
        })}></div>
        {/* <div className="colorOption"></div> */}
      </div>
    </div>
  )
}

export default Sidebar