import React from "react";
export const BlogHeader = () => {
  return (
    <header className="flex justify-between items-center bg-gray-600  text-white p-4">
      <h1>CF Blog</h1>
      <nav >
        <a className="ml-1 text-white hover:underline" href="/blog">Inicio</a>
        <a className="ml-1 text-white hover:underline " href="#">Iniciar Session</a>
      </nav>
    </header>
  );
};
