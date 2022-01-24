import { NextComponentType } from "next";

const Footer: NextComponentType = () => {
  return (
    <footer className="text-gray-300 text-sm fixed bottom-0 w-full text-center p-4">
      Powered by{' '}
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
        href="https://netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-400 transition-colors hover:underline"
      >
        Netlify
      </a>
    </footer>
  )
}

export default Footer;