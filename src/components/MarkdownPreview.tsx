import React from 'react';

interface MarkdownPreviewProps {
  html: string;
  style: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ html, style }) => {
  return (
    <div className="w-full md:w-1/2 p-4 overflow-auto bg-white">
      <h2 className="text-lg font-semibold mb-2 text-gray-900">Preview</h2>
      <div 
        id="preview-container"
        className={`markdown-preview style-${style} p-8 min-h-[calc(100vh-12rem)] rounded-md shadow-md bg-white text-gray-900 border-gray-200 border overflow-auto`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default MarkdownPreview;