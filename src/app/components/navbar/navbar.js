import React from "react";

function Navbar({heading}) {
  return (
    <nav className="navbar w-full h-10 bg-white flex justify-between">
      <div className="w-[18rem]"></div>
      <div className="w-[82rem] px-10 flex justify-between">
        <h1>{heading}</h1>
        <h1>Thasmai</h1>
      </div>
    </nav>
  );
}

export default Navbar;
