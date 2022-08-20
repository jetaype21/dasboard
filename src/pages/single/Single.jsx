import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/siderbar/Sidebar'
import List from '../../components/table/Table'
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
      < Sidebar />
      <div className="singleContainer">
        < Navbar />
        <div className="top">
          <div className="left">
            <button className="editButton">Edit</button>
            <h1 className="title">Information</h1>
            <article className="item">
              <img src="https://images.pexels.com/photos/2643815/pexels-photo-2643815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="itemImg" />
              <div className="details">
                <h2 className="itemTitle">Jhon Doe</h2>
                <section className="detailsItem">
                  <span className="itemKey">Email:</span><span className="itemValue">Jhondoe@gmail.com</span>
                </section>
                <section className="detailsItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+123 1234567</span>
                </section>
                <section className="detailsItem">
                  <span className="itemKey">Address:</span><span className="itemValue">Room 5, Latam</span>
                </section>
                <section className="detailsItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">LATAM</span>
                </section>
              </div>
            </article>
          </div>
          <div className="right">
            < Chart aspect={3 / 1} title='User Speding - 6 Months' />
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Last Transactions</h2>
          < List />
        </div>
      </div>
    </div>
  )
}

export default Single