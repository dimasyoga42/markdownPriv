import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown';

const Live = ({markdowns}) => {
  return (
    <>
      <div className="border border-white rounded-sm  w-full lg:w-full h-auto lg:min-h-screen">
        <div className="markdown-preview p-4 prose font-poppins w-full h-full">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdowns}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Live;