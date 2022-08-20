import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total renueve</h1>
        < MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          < CircularProgressbar value={70} text='70%' strokeWidth={3} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previus transactions preccessing. Las payments may not be included</p>

        <div className="summary">
          <div className="item">
            <span className="itemTitle">Last year</span>
            <div className="itemResult positive">
              < KeyboardArrowUpIcon fontSize='small' />
              <span className="resultAmount">$12.4k</span>
            </div>
          </div>
          <div className="item">
            <span className="itemTitle">Last Week</span>
            <div className="itemResult negative">
              < KeyboardArrowDownIcon fontSize='small' />
              <span className="resultAmount">$12.4k</span>
            </div>
          </div>
          <div className="item">
            <span className="itemTitle">Last Month</span>
            <div className="itemResult positive">
              < KeyboardArrowUpIcon fontSize='small' />
              <span className="resultAmount">$12.4k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured