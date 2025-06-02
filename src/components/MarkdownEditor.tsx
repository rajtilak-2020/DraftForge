import React, { useRef, useEffect } from 'react';

interface MarkdownEditorProps {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ markdown, setMarkdown }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [markdown]);

  return (
    <div className="w-full md:w-1/2 p-4 overflow-auto bg-gray-50">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Markdown Input</h2>
        <div className="text-xs text-gray-500">
          {markdown.length} characters
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="w-full h-full min-h-[calc(100vh-12rem)] p-4 font-mono text-sm rounded-md resize-none outline-none bg-white text-gray-800 border-gray-300 focus:border-blue-500 border focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        placeholder="Write your Markdown here..."
      />
    </div>
  );
};

export default MarkdownEditor;