import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown';
import { useEffect, useRef } from "react";
const Live = ({markdowns}) => {
const contentRef = useRef(null);
//shortcute pada IDE
useEffect(() => {
  const handlerkeyDow = (event) => {
    //SHORTCUT SELECT ALL
    if (event.ctrlKey && event.key === 'a') {
      event.preventDefault();
      const range = document.createRange();
      range.selectNodeContents(contentRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
  window.addEventListener('keydown', handlerkeyDow);
  return () => {
    window.removeEventListener('keydown', handlerkeyDow);
  }
}, []);
  return (
    <>
      <div className="border border-white rounded-sm  w-full min-h-screen  lg:h-[100vh] overflow-hidden overflow-x-hidden md:w-full overflow-scroll">
        <div className="markdown-preview p-4 prose font-poppins w-full h-full">
          <ReactMarkdown remarkPlugins={[remarkGfm]} ref={contentRef}>{markdowns}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Live;