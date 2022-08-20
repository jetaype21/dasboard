import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/siderbar/Sidebar'
import './list.scss'

const List = () => {
  return (
    <div className='list'>
      < Sidebar />
      <div className="listContainer">
        < Navbar />
        < Datatable />
      </div>
    </div>
  )
}

export default List