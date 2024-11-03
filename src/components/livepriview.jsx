import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown';
import { useEffect, useRef, useState } from "react";
const Live = ({markdowns}) => {
const [history, sethistory] = useState([]); //tempat ngesave kata/huruf yang di remove
const [isUndo, setIsUndo] = useState(false);//bollean untuk cek apakah udah melakukan undo
const [text, settext] = useState(markdowns);
const contentRef = useRef(null);
const handleChange = (newText) => {
  // Simpan teks saat ini ke dalam sejarah sebelum diperbarui
  if (!isUndo) {
    sethistory([...history, text]); // Simpan kondisi terakhir
  }
  settext(newText);
  setIsUndo(false); 
};
const handleUndo = () => {
  if (history.length > 0) {
    const previousText = history[history.length -1];
    settext(previousText);
    sethistory(history.slice(0, -1));
    setIsUndo(true);
  }
}
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
    //SHORTCUT UNDO
    if (event.ctrlKey && event.key === 'z') {
      event.preventDefault();
      handleUndo();
    }
  }
  window.addEventListener('keydown', handlerkeyDow);
  return () => {
    window.removeEventListener('keydown', handlerkeyDow);
  }
}, []);

const handleKeyUp = (event) => {
  // Simpan teks baru ke history jika enter atau spasi ditekan setelah undo
  if (isUndo && (event.key === 'Enter' || event.key === ' ')) {
    sethistory([...history, text]); // Simpan kondisi terakhir
    setIsUndo(false); // Reset status undo
  }
};
  return (
    <>
      <div className="border border-white rounded-sm  w-full min-h-screen lg:w-full lg:h-[100vh] overflow-hidden overflow-x-hidden  overflow-scroll">
        <div className="markdown-preview p-4 prose font-poppins w-full h-full">
          <ReactMarkdown remarkPlugins={[remarkGfm]} ref={contentRef} value={text} onKeyUp={handleKeyUp} onChange={(e) => handleChange(e.target.value)}>{markdowns}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Live;