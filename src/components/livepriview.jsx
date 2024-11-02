import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown';
const Live = ({markdowns}) => {
    return (
        <>
        <h1 className="font-poppins font-bold text-2xl uppercase">live priview:</h1>
        <div className="border border-white  lg:m-auto rounded-sm  w-full h-auto z-10">
            <div className="markdown-preview p-4 prose font-poppins w-full h-full">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdowns}</ReactMarkdown>
</div>
</div>
</>
    );
}
export default Live;