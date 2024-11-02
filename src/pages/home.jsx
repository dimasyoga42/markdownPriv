import Btn from "../components/buttons";
import Live from "../components/livepriview";
import { useState } from "react";
import { useEffect } from "react";
const Page = ({markdowns}) => {
  const [ markdown, setmarkdown ] = useState('')
  const handlechange = (e) => {
     setmarkdown(e.target.value);
     localStorage.setItem("mark", JSON.stringify(markdown));
  };
  const handlers = () => {
    document.getElementById('texts').classList.toggle('hidden')
  }
  useEffect(() => {
    const storedName = localStorage.getItem("mark");
    if (storedName) {
      setmarkdown(JSON.parse(storedName));
    }
  }, []);
  return (
    <>
    <div className="z-0">
      <textarea type="text" id="texts" className=" w-full  h-60  outline-none " value={markdown} onChange={handlechange}/>
      <Btn onClick={handlers}/>
    </div>
     <Live markdowns={markdown}/>
    </>
  );
};
export default Page;
