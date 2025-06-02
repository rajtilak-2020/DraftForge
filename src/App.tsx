import React, { useState, useEffect } from 'react';
import { Download, Upload, Settings } from 'lucide-react';
import Header from './components/Header';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import StyleSelector from './components/StyleSelector';
import { defaultMarkdown } from './utils/constants';
import { convertMarkdownToHtml } from './utils/markdownUtils';
import { generatePdf } from './utils/pdfUtils';
import { loadFromStorage, saveToStorage } from './utils/storageUtils';

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [html, setHtml] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('default');
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    const savedMarkdown = loadFromStorage('markdown');
    if (savedMarkdown) {
      setMarkdown(savedMarkdown);
    }
    
    const savedStyle = loadFromStorage('style');
    if (savedStyle) {
      setSelectedStyle(savedStyle);
    }
  }, []);

  // Update HTML when markdown changes
  useEffect(() => {
    const convertedHtml = convertMarkdownToHtml(markdown);
    setHtml(convertedHtml);
    saveToStorage('markdown', markdown);
  }, [markdown]);

  // Save style preference
  useEffect(() => {
    saveToStorage('style', selectedStyle);
  }, [selectedStyle]);

  const handleStyleChange = (style: string) => {
    setSelectedStyle(style);
  };

  const handleDownloadPdf = async () => {
    setIsPdfGenerating(true);
    try {
      await generatePdf(html, selectedStyle);
    } finally {
      setIsPdfGenerating(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setMarkdown(content);
      };
      reader.readAsText(file);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        onDownloadPdf={handleDownloadPdf}
        onFileUpload={handleFileUpload}
        isPdfGenerating={isPdfGenerating}
      />
      
      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        <MarkdownEditor 
          markdown={markdown} 
          setMarkdown={setMarkdown}
        />
        <MarkdownPreview 
          html={html} 
          style={selectedStyle}
        />
      </div>
      
      <div className="border-t border-gray-200 p-4 flex flex-col items-center space-y-4">
        <StyleSelector 
          selectedStyle={selectedStyle} 
          onStyleChange={handleStyleChange}
        />
        <div className="text-sm text-gray-600">
          © {currentYear} K Rajtilak |{' '}
          <a 
            href="https://github.com/rajtilak-2020" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;