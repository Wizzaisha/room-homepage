import Image from "next/image";

import { ImageFooter1, ImageFooter2 } from "../../icons/png";

export function Footer() {
  return (
    <div className="w-full grid xl:grid-cols-3 grid-cols-1 ">
      <div className="relative w-full h-[300px]">
        <Image
          src={ImageFooter1}
          alt="imageFooter1"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          fill
        />
      </div>

      <div className="flex items-center justify-center xl:px-10 xl:py-0 py-15">
        <div className="max-w-prose">
          <h2 className="text-preset3-bold">ABOUT OUR FURNITURE</h2>

          <p className="text-preset3-medium text-gray-500 mt-5">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[300px]">
        <Image
          src={ImageFooter2}
          alt="imageFooter2"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}
