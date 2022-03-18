import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-300 text-sm fixed bottom-0 w-full text-center p-4 z-0">
      Brought to you by{' '}
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-400 transition-colors hover:underline"
      >
        The Movie Database
      </a>{' | '}
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-400 transition-colors hover:underline"
      >
        Next.js
      </a>{' | '}
      <a
        href="https://aws.amazon.com/amplify/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-400 transition-colors hover:underline"
      >
        Amplify
      </a>{' | '}
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-400 transition-colors hover:underline"
      >
        Tailwind
      </a>
    </footer>
  )
}

export default Footer;