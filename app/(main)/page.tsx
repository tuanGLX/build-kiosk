import { getBanner } from "@/lib/banners";
import { getConcessionByCinema } from "@/lib/concession";
import { getLocalData } from "@/lib/localdata";
import Carousel from "@/modules/carousel";
import Concessions from "@/modules/home/Concessions";
import SwitchTabs from "@/modules/layout/templates/switchTabs";

export default async function Home() {
  const banners = await getBanner();
  const concessions = await getConcessionByCinema(
    "d1b07444-41e4-46b4-99c6-444e97518624"
  );
  console.log(banners, "banners");
  console.log(concessions, "concessions");
  const localData = await getLocalData();

  return (
    <div>
      <Carousel data={banners} />
      {/* <SwitchTabs data={["Movies", "TV Shows"]} /> */}
      <Concessions data={localData?.result} />
    </div>
  );
}
