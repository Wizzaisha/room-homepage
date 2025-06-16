"use client";
import React from "react";

import Image from "next/image";
import { Footer } from "../footer/footer";
import { NavBar } from "../navbar/navBar";
import { LandingData } from "../../models/landing";
import { AngleLeftIcon, AngleRightIcon, ArrowIcon } from "../../icons/icons";

export default function LandingPage({
  landingData,
}: {
  landingData: LandingData[];
}) {
  const [activeView, setActiveView] = React.useState<number>(0);

  const handleIncrease = () => {
    if (activeView < 2) {
      setActiveView(activeView + 1);
    }
  };

  const handleDecrease = () => {
    if (activeView > 0) {
      setActiveView(activeView - 1);
    }
  };

  return (
    <div className="w-full min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <div className="relative flex flex-col xl:flex-row justify-start items-center">
        <div className="relative flex-4/5">
          <Image
            src={landingData[activeView]?.imageUrlDesktop}
            alt={"landingImage" + activeView}
            width={840}
            height={534}
            className="hidden w-dvw md:block xl:w-full md:h-[500px]"
          />

          <Image
            src={landingData[activeView]?.imageUrlMobile}
            alt={"landingImage" + activeView}
            width={500}
            height={360}
            className="md:hidden"
          />

          <div className="w-full absolute top-0 left-0">
            <NavBar></NavBar>
          </div>
        </div>

        <div className="w-full xl:w-fit h-full relative flex items-center justify-center xl:px-27 px-10 xl:py-0 py-15">
          <div className="max-w-prose">
            <h2 className="text-preset1">{landingData[activeView]?.title}</h2>

            <p className="text-preset3-medium text-gray-500 mt-5">
              {landingData[activeView]?.description}
            </p>

            <button className="flex flex-row justify-center items-center gap-5 text-preset4-medium mt-5 cursor-pointer">
              <span> SHOP NOW</span>
              <Image src={ArrowIcon} alt="arrowIcon" width={40} height={12} />
            </button>
          </div>

          <div className="hidden xl:block absolute bottom-0 left-0">
            <button
              className="bg-black py-4 px-9 cursor-pointer"
              onClick={handleDecrease}
            >
              <Image
                src={AngleLeftIcon}
                alt="angleLeft"
                width={14}
                height={24}
              />
            </button>
            <button
              className="bg-black py-4 px-9 cursor-pointer"
              onClick={handleIncrease}
            >
              <Image
                src={AngleRightIcon}
                alt="angleLeft"
                width={14}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
