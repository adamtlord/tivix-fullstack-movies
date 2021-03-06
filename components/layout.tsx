import Footer from "./footer";
import Image from 'next/image';
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="fixed w-full h-full overflow-hidden -z-10">
        <Image
          alt="Movie theater"
          src="/theater.jpg"
          layout="fill"
          objectFit="cover"
          quality={75}
        />
      </div>
      <header className="text-center w-full p-8 md:p-16 drop-shadow-lg">
        <h1 className="text-6xl md:text-7xl text-red-700 font-extrabold">
          TFMDb
        </h1>
        <h2 className="text-3xl md:text-4xl text-amber-400 font-bold">The Tivix Fullstack Movie Database</h2>
      </header>
      <main className="container relative z-10 mx-auto bg-white bg-opacity-80 p-6 md:py-10 md:px-12 rounded-2xl shadow-lg max-w-4xl drop-s">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;