import download from "downloadjs";
import { Download } from "react-feather";


const Btndw = ({onClick}) => {

  return (
        <>
        <button onClick={onClick} className=" fixed bottom-0 left-0 z-10 mb-4 ml-[75%] lg:ml-[5%] flex h-10 w-10 cursor-pointer items-center justify-center justify-items-center rounded-full">
        <Download size={40} color="grey" />
      </button>
        </>
    );
}
export default Btndw;