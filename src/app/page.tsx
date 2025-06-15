import { Footer } from "./ui/components/footer/footer";
import { NavBar } from "./ui/components/navbar/navBar";

export default function Home() {
  return (
    <div className="w-full min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <NavBar></NavBar>

      <h1>Hello</h1>

      <Footer></Footer>
    </div>
  );
}
