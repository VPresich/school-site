import { PortableTextComponents } from '@portabletext/react';

const PortableTextConfig: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-xl font-bold text-[#993333] mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-[#993333] mb-3">{children}</h3>
    ),
    normal: ({ children }) => <p className="text-gray-700 mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-4 text-gray-700">{children}</ol>
    ),
  },

  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 rounded">{children}</code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

export default PortableTextConfig;
