
import React, { useState } from 'react';
import { Check, Clipboard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeSnippetProps {
  code: string;
  language?: string;
  fileName?: string;
  className?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language = 'move',
  fileName,
  className,
  showLineNumbers = true,
  highlightLines = [],
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className={cn("rounded-lg overflow-hidden bg-gray-900 shadow-xl", className)}>
      {fileName && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-gray-400 font-mono">{fileName}</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-2">{language}</span>
            <button
              onClick={handleCopy}
              className="p-1.5 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Copy code"
            >
              {copied ? <Check size={16} /> : <Clipboard size={16} />}
            </button>
          </div>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          {lines.map((line, i) => (
            <div
              key={i}
              className={cn(
                "flex",
                highlightLines.includes(i + 1) && "bg-blue-900/30 -mx-4 px-4"
              )}
            >
              {showLineNumbers && (
                <span className="text-gray-500 w-8 inline-block select-none text-right mr-4">
                  {i + 1}
                </span>
              )}
              <span className="text-gray-200">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
