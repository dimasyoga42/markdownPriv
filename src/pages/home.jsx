import Btn from "../components/buttons";
import Live from "../components/livepriview";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import download from "downloadjs";
import Btndw from "../components/btn";
// import { useLocation } from "react-router-dom";

const Page = ({ markdowns }) => {
  const [markdown, setMarkdown] = useState("");
  const handleChange = (value) => {
    setMarkdown(value);
    localStorage.setItem(`mark`, JSON.stringify(value));
  };
  const handleToggle = () => {
    document.getElementById("box").classList.toggle("hidden");
    document.getElementById("texts").classList.toggle("hidden");
  };
  const handleDownload = () => {
    const promot = prompt("masukan nama file:");
    if (promot) {
      download(markdown, `${promot}.md`, "text/markdown");
    } else {
      alert("download batal di lakukan.");
    }
  };
  useEffect(() => {
    const storedMarkdown = localStorage.getItem(`mark`);
    if (storedMarkdown) {
      setMarkdown(JSON.parse(storedMarkdown));
    }
  }, []);
  // const location = useLocation();
  // const file = location.state?.file || "markdown";
  return (
    <>
      <div className="lg:flex lg:gap-2">
        <div
          id="texts"
          className="mockup-window min-h-screen border border-white lg:flex lg:h-[100vh] lg:w-full"
        >
          {/* <h1 className="ml-2 font-bold text-gray-50">{file}</h1> */}
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
                verticalScrollbarSize: 8, // Ukuran scrollbar vertikal
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
      <div className="m-auto flex items-center justify-items-center">
        <Btn onClick={handleToggle} />
        <Btndw onClick={handleDownload} />
      </div>
    </>
  );
};

export default Page;
