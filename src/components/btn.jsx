import download from 'downloadjs'
import { Download } from 'react-feather'

const Btndw = ({ onClick }) => {
  return (
    <>
      {/* <button onClick={onClick} className=" fixed bottom-0 left-0 z-10 mb-4 md:mb-5 md:ml-[70%] ml-[65%] lg:ml-[5%] flex h-10 w-10 cursor-pointer items-center justify-center justify-items-center rounded-full">
        <Download size={40} color="grey" />
      </button> */}
      <button
        className='btn btn-square btn-ghost fixed bottom-0 left-0 z-10 m-auto mb-4 ml-[65%] flex h-10 w-10 cursor-pointer items-center justify-center justify-items-center md:mb-4 md:ml-[70%] lg:ml-[5%]'
        onClick={onClick}
      >
        <Download color='white' size={40} />
      </button>
    </>
  )
}
export default Btndw
