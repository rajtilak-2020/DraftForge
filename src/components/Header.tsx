import React from 'react';
import { Download, Upload, Loader2 } from 'lucide-react';

interface HeaderProps {
  onDownloadPdf: () => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isPdfGenerating: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  onDownloadPdf, 
  onFileUpload,
  isPdfGenerating 
}) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-blue-500">Markdown</span> to <span className="text-red-500">PDF</span> Converter
        </h1>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4">
        <label className="flex items-center justify-center h-10 px-4 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-100">
          <Upload className="w-5 h-5 mr-2" />
          <span className="hidden md:inline">Upload MD</span>
          <input
            type="file"
            accept=".md"
            className="hidden"
            onChange={onFileUpload}
          />
        </label>
        
        <button
          onClick={onDownloadPdf}
          disabled={isPdfGenerating}
          className={`flex items-center justify-center h-10 px-4 bg-blue-500 text-white rounded-md transition-colors duration-200 ${
            isPdfGenerating ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
        >
          {isPdfGenerating ? (
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <Download className="w-5 h-5 mr-2" />
          )}
          <span className="hidden md:inline">Download PDF</span>
        </button>
      </div>
    </header>
  );
};

export default Header;