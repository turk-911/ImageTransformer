import { useState } from "react";
import Header from "./components/Header";
import Converter from "./components/Converter";

function App() {
  return (
    <div className="bg-[#d5b263] w-full h-screen text-[#293040]">
      <Header />
      <Converter />
    </div>
  );
}

export default App;
