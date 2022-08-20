import './datarable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data/datatablesource'
import { Link, useLocation } from 'react-router-dom'

const Datatable = () => {

  const location = useLocation()

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to='/users/test' style={{ textDecoration: 'none' }}>
              <span className="viewButton">View</span>
            </Link>
            <span className="deleteButton">Delete</span>
          </div>
        )
      }
    }
  ]

  return (
    <div className='datatable'>

      <div className="dataTableTitle">
        Add New {location.pathname === '/users' ? 'User' : 'Product'}
        <Link to={`${location.pathname}/new`} className='link'>
          Add New
        </Link>
      </div>

      <DataGrid
        className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable