"use client";
import Image from "next/image";
import { CloseIcon, HamburgerIcon, LogoIcon } from "../../icons/icons";
import { useState } from "react";

export function NavBar() {
  const [showBar, setShowBar] = useState<boolean>(false);

  const handleShowBar = () => {
    setShowBar(!showBar);
  };

  return (
    <div className="w-full flex flex-row justify-start items-center xl:gap-15 text-white px-10 xl:px-15 py-10">
      <button
        className="cursor-pointer rounded-full p-4"
        onClick={handleShowBar}
      >
        <Image
          src={HamburgerIcon}
          alt="hamburgerIcon"
          width={20}
          height={14}
          className="block xl:hidden"
        />
      </button>

      <div className="w-full xl:w-fit flex items-center justify-center xl:justify-start">
        <Image src={LogoIcon} alt="logoIcon" width={62} height={14} />
      </div>

      <div className="hidden xl:flex flex-row justify-center items-center gap-5 text-preset3-semibold">
        <a>home</a>
        <a>shop</a>
        <a>about</a>
        <a>contact</a>
      </div>

      {showBar && (
        <div className="absolute w-full min-h-dvh z-99 top-0 left-0">
          <div className="w-full px-10 py-10 md:px-20 bg-white flex flex-row justify-between items-center">
            <button className="cursor-pointer" onClick={handleShowBar}>
              <Image src={CloseIcon} alt="logoIcon" width={16} height={16} />
            </button>

            <div className="flex flex-row justify-center items-center gap-5 text-preset3-semibold text-black">
              <a>home</a>
              <a>shop</a>
              <a>about</a>
              <a>contact</a>
            </div>
          </div>
          <div className="w-full min-h-dvh bg-black opacity-25"></div>
        </div>
      )}
    </div>
  );
}
