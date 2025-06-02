import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Configure marked with GitHub Flavored Markdown
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false,
  pedantic: false,
  sanitize: false, // We use DOMPurify instead
  smartLists: true,
  smartypants: true,
  xhtml: false
});

/**
 * Converts markdown text to sanitized HTML
 */
export const convertMarkdownToHtml = (markdown: string): string => {
  try {
    // First convert markdown to HTML
    const rawHtml = marked.parse(markdown);
    
    // Then sanitize the HTML to prevent XSS attacks
    const sanitizedHtml = DOMPurify.sanitize(rawHtml);
    
    return sanitizedHtml;
  } catch (error) {
    console.error('Error converting markdown to HTML:', error);
    return '<p>Error converting markdown. Please check your syntax.</p>';
  }
};