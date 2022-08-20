import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/siderbar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
const New = ({ inputs, title }) => {

  const [file, setFile] = useState('')
  return (
    <div className='new'>
      < Sidebar />
      <div className="newContainer">
        < Navbar />
        <article className="top">
          <h2 className="title">{title}</h2>
        </article>

        <article className="bottom">
          <section className="left">
            <img
              src={ file 
                ? URL.createObjectURL(file)
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWpyinxoDMIdSGJwY0JHazSzCAJZfL84BWw&usqp=CAU"}
              alt=""
            />
          </section>
          <section className="right">
            <form >
              <section className="formInput">
                <label htmlFor="perfil">
                  Image:  <DriveFolderUploadIcon className='icon' />
                </label>
                <input onChange={e => setFile(e.target.files[0])} type="file" id='perfil' style={{ display: 'none' }} />
              </section>
              {inputs.map(input => (
                <section className="formInput" key={input.id}>
                  <label htmlFor={input.label} >{input.label}: </label>
                  <input type={input.type} placeholder={input.placeholder} id={input.label} />
                </section>
              ))}
              <button>Send</button>
            </form>
          </section>
        </article>
      </div>
    </div>
  )
}

export default New