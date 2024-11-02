import Btn from "../components/buttons";
import Live from "../components/livepriview";
import { useState, useEffect } from "react";
import Editor from '@monaco-editor/react';

const Page = ({ markdowns }) => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (value) => {
    setMarkdown(value);
    localStorage.setItem("mark", JSON.stringify(value));
  };

  const handleToggle = () => {
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
      <div className="z-0">
      <div id="texts" className="">
        <Editor
          height="200px"
          defaultLanguage="markdown"
          defaultValue="mulai lah mengetik markdown"
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
        <Btn onClick={handleToggle} />
      </div>
      <Live markdowns={markdown} />
    </>
  );
};

export default Page;
