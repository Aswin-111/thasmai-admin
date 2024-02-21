"use client";

// import CarouselPlugin from "../components/carousal/carousal";


import { useStore } from "../state/navbar-state";

export default function Overview() {
  const setNavbarText = useStore((state) => state.setNavbarText);
  setNavbarText("Overview");

  return (
    <div className="h-full">
      <div className='w-full h-[50%] flex  justify-center items-center'>Website under development</div>
      
    </div>
  );
}
