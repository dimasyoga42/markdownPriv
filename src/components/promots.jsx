const Promot = ({ oke, batal, value, onChange, id, className }) => {
  return (
    <div
      className={`mockup-window absolute z-50 m-auto flex items-center justify-center border border-white bg-transparent backdrop-blur-sm lg:w-[30%] ${className}`}
      id={id}
    >
      <div className='flex flex-col items-center justify-center justify-items-center gap-3 px-6 py-6'>
        <input
          type='text'
          placeholder='nama file'
          className='input w-full max-w-xs border border-gray-400 bg-transparent hover:border-white'
          value={value}
          onChange={onChange}
        />
        <div className='flex gap-2'>
          <button
            className='btn btn-ghost border border-white text-white'
            onClick={oke}
          >
            oke
          </button>
          <button
            className='btn btn-ghost border border-white text-white'
            onClick={batal}
          >
            batal
          </button>
        </div>
      </div>
    </div>
  )
}

export default Promot
