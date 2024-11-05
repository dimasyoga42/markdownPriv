import Btn from '../components/buttons'
import Live from '../components/livepriview'
import { useState, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import download from 'downloadjs'
import Btndw from '../components/btn'
import Promot from '../components/promots'
// import { useLocation } from "react-router-dom";

const Page = ({ markdowns, value }) => {
  const [markdown, setMarkdown] = useState('')
  const [fileName, setFileName] = useState('')
  const [isPromotVisible, setIsPromotVisible] = useState(false)

  const handleChange = value => {
    setMarkdown(value)
    localStorage.setItem(`mark`, JSON.stringify(value))
  }
  const handleToggle = () => {
    document.getElementById('box').classList.toggle('hidden')
    document.getElementById('texts').classList.toggle('hidden')
  }

  const handleDownload = () => {
    setIsPromotVisible(true)
    document.body.classList.add('overflow-hidden')
  }

  const handleFileNameChange = e => {
    setFileName(e.target.value)
  }

  const handleFileDownload = () => {
    if (fileName) {
      download(markdown, `${fileName}.md`, 'text/markdown')
      setIsPromotVisible(false)
    }
  }
  const closePromot = () => {
    setIsPromotVisible(false)
    document.body.classList.remove('overflow-hidden') // Hapus overflow-hidden saat modal ditutup
  }
  useEffect(() => {
    const storedMarkdown = localStorage.getItem(`mark`)
    if (storedMarkdown) {
      setMarkdown(JSON.parse(storedMarkdown))
    }
  }, [])
  // const location = useLocation();
  // const file = location.state?.file || "markdown";

  return (
    <>
      <div className='flex w-full items-center justify-center justify-items-center lg:flex lg:items-center lg:justify-center lg:justify-items-center lg:gap-2'>
        <div
          id='texts'
          className='mockup-window min-h-screen w-full border border-white lg:flex lg:h-[100vh] lg:w-full'
        >
          {/* <h1 className="ml-2 font-bold text-gray-50">{file}</h1> */}
          <Editor
            width='100%'
            height='100vh'
            defaultLanguage='markdown'
            defaultValue='_+'
            onChange={handleChange}
            value={markdown}
            theme='vs-dark'
            options={{
              scrollbar: {
                wordWrap: 'on',
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
            className={isPromotVisible ? 'pointer-events-none' : ''}
          />
        </div>
        <div id='box' className='hidden w-full lg:flex'>
          <Live markdowns={markdown} />
        </div>
        {/* Overlay */}
        {isPromotVisible && (
          <div className='fixed inset-0 z-40 bg-transparent backdrop-blur-sm'></div>
        )}
        <Promot
          oke={handleFileDownload}
          batal={closePromot}
          value={fileName}
          onChange={handleFileNameChange}
          id='promotModal'
          className={isPromotVisible ? '' : 'hidden'}
        />
      </div>
      <div className='m-auto flex place-items-center justify-items-center'>
        <Btn onClick={handleToggle} />
        <Btndw onClick={handleDownload} />
      </div>
    </>
  )
}

export default Page
