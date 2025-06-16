import { getDataFromJSON } from "./lib/services/getDataService";
import LandingPage from "./ui/components/landingPage/landingPage";
import { LandingData } from "./ui/models/landing";

export default async function Home() {
  const landingData = (await getDataFromJSON()) as LandingData[];

  return <LandingPage landingData={landingData}></LandingPage>;
}
