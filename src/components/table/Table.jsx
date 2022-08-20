import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

  const rows = [
    {
      id: 123,
      product: 'Acer nitro 5',
      img: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400',
      costumer: 'Jhon 1',
      date: '1 March',
      amount: 785,
      status: 'Aproved',
      method: 'Online'
    },
    {
      id: 1234,
      product: 'Acer nitro 3',
      img: 'https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=400',
      costumer: 'Jhon 2',
      date: '1 March',
      amount: 785,
      status: 'Pending',
      method: 'Online'
    },
    {
      id: 1235,
      product: 'Playstation 5',
      img: 'https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg?auto=compress&cs=tinysrgb&w=400',
      costumer: 'Jhon 1',
      date: '1 March',
      amount: 785,
      status: 'Aproved',
      method: 'Online'
    },
    {
      id: 1236,
      product: 'Acer nitro 5',
      img: 'https://images.pexels.com/photos/3183149/pexels-photo-3183149.jpeg?auto=compress&cs=tinysrgb&w=400',
      costumer: 'Jhon 1',
      date: '1 March',
      amount: 785,
      status: 'Pending',
      method: 'Online'
    },
  ]

  return (

    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                  <img src={row.img} className='image' />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.costumer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <p className={`status ${row.status}`}>
                  {row.status}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default List