import { useState, useEffect } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
function App() {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/docs.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
  }, [])

  return (
    <div className='h-screen w-full rounded-2xl lg:w-full'>
      <div className='markdown-preview text-ms prose m-auto h-full w-full overflow-scroll overscroll-auto font-poppins'>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className='w-full'>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default App
