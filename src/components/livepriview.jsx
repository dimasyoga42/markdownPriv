import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown';

const Live = ({markdowns}) => {
  return (
    <>
      <div className="border border-white rounded-sm  w-full min-h-screen lg:w-full lg:h-[100vh] overflow-hidden overflow-x-hidden  overflow-scroll">
        <div className="markdown-preview p-4 prose font-poppins w-full h-full">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdowns}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Live;