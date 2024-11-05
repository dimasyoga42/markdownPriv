import { Eye } from 'react-feather'

const Btn = ({ onClick }) => {
  return (
    <>
      {/* <button onClick={onClick} className="fixed bottom-0 left-0 z-10 mb-4 ml-[77%] flex h-10 w-10 cursor-pointer items-center justify-center justify-items-center rounded-full lg:hidden">
        <Eye color="gray" size={40} />
      </button> */}
      <button
        className='btn btn-square btn-ghost fixed bottom-0 left-0 z-10 m-auto mb-4 ml-[77%] flex h-10 w-10 cursor-pointer items-center justify-center justify-items-center lg:hidden'
        onClick={onClick}
      >
        <Eye color='white' size={40} />
      </button>
    </>
  )
}
export default Btn
