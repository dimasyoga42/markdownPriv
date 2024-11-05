import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { useEffect, useRef } from 'react'

const Live = ({ markdowns }) => {
  const contentRef = useRef(null)

  useEffect(() => {
    const handlerkeyDow = event => {
      // SHORTCUT SELECT ALL
      if (event.ctrlKey && event.key === 'a') {
        event.preventDefault()
        const range = document.createRange()
        range.selectNodeContents(contentRef.current)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
      }
    }

    window.addEventListener('keydown', handlerkeyDow)
    return () => {
      window.removeEventListener('keydown', handlerkeyDow)
    }
  }, [])

  return (
    <>
      <div className='mockup-window h-screen w-full rounded-2xl border border-white'>
        <div className='markdown-preview prose m-auto h-full w-full overflow-scroll overscroll-auto font-poppins'>
          <div className='p-3' ref={contentRef}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdowns}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default Live
