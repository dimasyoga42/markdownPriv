
import { useState, useEffect } from 'react';
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('./../../public/docs.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className='h-screen w-full lg:w-1/2 rounded-2xl'>
      <div className="markdown-preview prose  h-full w-full m-auto font-poppins overscroll-auto overflow-scroll text-ms" >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
