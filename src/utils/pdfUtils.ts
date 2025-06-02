import html2pdf from 'html2pdf.js';

// PDF style configurations
const styleConfigs = {
  default: {
    margin: [10, 10, 10, 10],
    filename: 'document.pdf',
    pagebreak: { mode: 'css', before: '.page-break' },
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  },
  github: {
    margin: [15, 15, 15, 15],
    filename: 'github-styled.pdf',
    pagebreak: { mode: 'css', before: '.page-break' },
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  },
  academic: {
    margin: [25, 20, 25, 20],
    filename: 'academic-paper.pdf',
    pagebreak: { mode: 'css', before: '.page-break' },
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  },
  elegant: {
    margin: [20, 20, 20, 20],
    filename: 'elegant-document.pdf',
    pagebreak: { mode: 'css', before: '.page-break' },
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }
};

/**
 * Generates a PDF from HTML content with the selected style
 */
export const generatePdf = async (html: string, style = 'default'): Promise<void> => {
  try {
    // Get the preview container
    const element = document.getElementById('preview-container');
    if (!element) {
      throw new Error('Preview container not found');
    }

    // Get the style configuration or use default if not found
    const config = styleConfigs[style as keyof typeof styleConfigs] || styleConfigs.default;
    
    // Generate the PDF
    await html2pdf().set(config).from(element).save();
    
    return Promise.resolve();
  } catch (error) {
    console.error('Error generating PDF:', error);
    return Promise.reject(error);
  }
};