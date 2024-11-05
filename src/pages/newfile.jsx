import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const New = ({ initialFile }) => {
  const [file, setFile] = useState(initialFile || '')
  const navigate = useNavigate()

  const handleInputChange = event => {
    setFile(event.target.value)
  }

  const handlerBtn = event => {
    if (event.key === 'Enter') {
      if (file.trim() === '') {
        alert('Input kosong')
      } else {
        // Navigasi ke halaman Home dengan data file
        navigate('/home', { state: { file } })
      }
    }
  }

  return (
    <div className='flex h-screen w-full content-center items-center justify-center lg:flex-col'>
      <input
        type='text'
        placeholder='name file'
        className='input input-bordered w-full max-w-xs border border-white bg-transparent'
        value={file}
        onChange={handleInputChange}
        onKeyDown={handlerBtn}
      />
    </div>
  )
}

export default New
