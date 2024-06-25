import React from 'react'
import object from "../assets/assets";
export default function Header() {
  return (
    <div className="p-4 flex justify-center bg-[#293040]">
      <img src={object.logo} alt="" className="w-96" />
    </div>
  );
}
