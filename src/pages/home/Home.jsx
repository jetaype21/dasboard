import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/siderbar/Sidebar'
import List from '../../components/table/Table'
import Widtget from '../../components/widget/Widtget'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      < Sidebar />
      <div className="homeContainer">
        < Navbar />
        <div className="widgets">
          < Widtget type='user' />
          < Widtget type='order' />
          < Widtget type='earning' />
          < Widtget type='balance' />
        </div>
        <div className="charts">
          < Featured />
          < Chart aspect={2 /1} title='Last 6 Months (REVENUE)' />
        </div>
        <div className="listContainer">
          <span className="listTitle">Latest Transaction</span>
          < List />
        </div>
      </div>
    </div>
  )
}

export default Home