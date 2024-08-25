import { Montserrat } from "next/font/google";

import ContinueReading from "@/components/ContinueReading";
import Header from "@/components/Header";
import NowReading from "@/components/NowReading";
import ContainerOffset from "@/components/UI/ContainerOffset";
import RecentChaptersList from "@/components/UI/RecentChaptersList";

const montserrat = Montserrat({subsets: ['latin']})


export default function Home() {
  return (
    <>
      <Header />
      <main className={"w-full min-h-screen dark:bg-richBlack bg-ghostWhite" + ' ' + montserrat.className}>
        <div className="flex flex-col items-center py-6">
          <div className="w-[98vw] lg:w-[90vw]">
            <ContainerOffset>
              <RecentChaptersList />
            </ContainerOffset>
            <div className="mt-6">
              <ContainerOffset>
                <ContinueReading />
              </ContainerOffset>
            </div>
            <div className="mt-6">
              <ContainerOffset>
                <NowReading/>
              </ContainerOffset>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
