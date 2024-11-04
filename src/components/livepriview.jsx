import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";
const Live = ({ markdowns }) => {
  const contentRef = useRef(null);
  //shortcute pada IDE
  useEffect(() => {
    const handlerkeyDow = (event) => {
      //SHORTCUT SELECT ALL
      if (event.ctrlKey && event.key === "a") {
        event.preventDefault();
        const range = document.createRange();
        range.selectNodeContents(contentRef.current);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };
    window.addEventListener("keydown", handlerkeyDow);
    return () => {
      window.removeEventListener("keydown", handlerkeyDow);
    };
  }, []);
  return (
    <>
      <div className="overflow-scrol min-h-screen w-full overflow-hidden overflow-x-hidden rounded-2xl border border-white md:w-full lg:h-[100vh]">
        <div className="markdown-preview prose mockup-window h-full w-full rounded-md font-poppins">
          <div className="pl-3">
            <ReactMarkdown remarkPlugins={[remarkGfm]} ref={contentRef}>
              {markdowns}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
