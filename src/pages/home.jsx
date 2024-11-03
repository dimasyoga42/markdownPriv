import Btn from "../components/buttons";
import Live from "../components/livepriview";
import { useState, useEffect } from "react";
import  Editor  from '@monaco-editor/react';

const Page = ({ markdowns }) => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (value) => {
    setMarkdown(value);
    localStorage.setItem("mark", JSON.stringify(value));
  };
  const handleToggle = () => {
    document.getElementById('box').classList.toggle('hidden');
    document.getElementById('texts').classList.toggle('hidden');
  };
  useEffect(() => {
    const storedMarkdown = localStorage.getItem("mark");
    if (storedMarkdown) {
      setMarkdown(JSON.parse(storedMarkdown));
    }
  }, []);

  return (
    <>
      <div className="lg:flex">
        <div id="texts" className="lg:flex lg:w-full lg:min-h-screen bg-transparent">
          <Editor
            width="100%"
            height="100vh"
            defaultLanguage="markdown"
            defaultValue="_+"
            onChange={handleChange}
            value={markdown}
            theme="vs-dark"
            options={{
              scrollbar: {
                wordWrap: "on",
                verticalHasArrows: false,
                horizontalHasArrows: false,
                verticalScrollbarSize: 8,   // Ukuran scrollbar vertikal
                horizontalScrollbarSize: 8, // Ukuran scrollbar horizontal
                handleMouseWheel: true,
                alwaysConsumeMouseWheel: false,
              },
              minimap: { enabled: false }, // Menonaktifkan minimap jika tidak diperlukan
              scrollBeyondLastLine: false, // Menonaktifkan scroll lebih dari akhir baris
              hideCursorInOverviewRuler: true, // Menghilangkan kursor di overview ruler
            }}
          />
       </div>
        <div id="box" className="hidden lg:flex lg:w-full">
          <Live markdowns={markdown} />
        </div>
      </div>
      <Btn onClick={handleToggle} />
    </>
  );
};

export default Page;
