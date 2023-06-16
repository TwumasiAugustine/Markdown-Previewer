import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './MarkdownPreviewer.css';
import Editor from './Editor';
import Header from './Header'
import Footer from './Footer'



const MarkdownPreviewer = () => {

    const [markdown, setMarkdown] = useState('')
    function handleInputChange(e) {
        setMarkdown(e.target.value)
    }

    useEffect(() => {
        const defaultMarkdown = `# Welcome to the Markdown Previewer

Here are some examples of different elements  you can use in **Markdown**:

Organize your content with expressive headings that capture attention and  structure your ideas effectively.

- Create Informative links

[OpenAI](https:example.com) - Discover the incredible  world of example and stay up to date with our latest advancements

- Inline Code for Clarity \`code\` - Highlight specific commands or provide context within your text.

- Show Your Code with Code Blocks

\`\`\`javascript
function greet(){
    console.log('Hello, World')
}
\`\`\`

> " This is a blockquote.
It's great for highlighting important information
or quoting external sources."

![Image](https://example.com/image.jpg)
        `
        
        setMarkdown(defaultMarkdown)
    }, [])

    const [isEditorLarge, setIsEditorLarge] = useState(false)
    const [isPreviewerLarge, setIsPreviewerLarge] = useState(false)
    function toggleEditorSize () {
        setIsEditorLarge(!isEditorLarge)
    }
    function togglePreviewerSize () {
        setIsPreviewerLarge(!isPreviewerLarge)
    }
    return (
        <div className="App">
            <Header/>
            <main className='main m-3'>
                <Editor markdown={markdown}
                    handleInputChange={handleInputChange}
                    toggleEditorSize={toggleEditorSize}
                    isEditorLarge={isEditorLarge}
                />
                <div className={ isPreviewerLarge ? 'contain large' : ' contain small' }>
                    <div className="heading">
                        <h2>Previewer</h2>
                        <button className="btn bi-arrows-angle-expand"
                            onClick={togglePreviewerSize}></button>
                    </div>
                    <ReactMarkdown id='preview' className='p-4'
                        remarkPlugins={[remarkGfm]}>
                        { markdown }
                    </ReactMarkdown>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default MarkdownPreviewer