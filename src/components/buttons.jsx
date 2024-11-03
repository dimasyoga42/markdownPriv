import {   Eye } from "react-feather";

const Btn = ({onClick}) => {
  return (
    <>
      <button onClick={onClick} className="fixed bottom-0 left-0 z-10 mb-4 ml-[77%] flex h-10 w-10 cursor-pointer items-center justify-center justify-items-center rounded-full lg:hidden">
        <Eye color="gray" size={40} />
      </button>
    </>
  );
};
export default Btn;
