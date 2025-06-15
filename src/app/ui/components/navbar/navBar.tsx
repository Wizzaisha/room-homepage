import Image from "next/image";
import { HamburgerIcon, LogoIcon } from "../../icons/icons";

export function NavBar() {
  return (
    <div className="w-full flex flex-row justify-start items-center gap-5 bg-black text-white">
      <Image
        src={HamburgerIcon}
        alt="hamburgerIcon"
        width={20}
        height={14}
        className="block xl:hidden"
      />

      <Image src={LogoIcon} alt="logoIcon" width={62} height={14} />

      <div className="hidden xl:flex flex-row justify-center items-center gap-5 text-preset3-semibold">
        <a>home</a>
        <a>shop</a>
        <a>about</a>
        <a>contact</a>
      </div>
    </div>
  );
}
