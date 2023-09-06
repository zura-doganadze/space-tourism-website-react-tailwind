import React from "react";
import desktopBackgorund from "../../public/home/background-home-desktop.jpg";

function Crew() {
  return (
    <div className="relative h-full">
      <div className="flex w-full h-full relative">
        <img
          className="w-full h-full"
          src={desktopBackgorund}
          alt="desktop backgorund img"
        />
      </div>
      <div className="flex text-white absolute top-96">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, deserunt
        sint. Perferendis, cupiditate. Sit consequatur, incidunt optio rerum
        illum suscipit laudantium sequi officia quidem accusamus cumque saepe
        dignissimos. Laboriosam, accusantium?
      </div>
    </div>
  );
}

export default Crew;
