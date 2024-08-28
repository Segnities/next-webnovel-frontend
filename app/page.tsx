import { Montserrat } from "next/font/google";

import ContinueReading from "@/components/ContinueReading";
import Header from "@/components/Header";
import NowReading from "@/components/NowReading";
import ContainerOffset from "@/components/UI/ContainerOffset";
import RecomendedChaptersList from "@/components/UI/RecomendedChaptersList";
import RecentlyUpdatedChaptersList from "@/components/RecentlyUpdatedChaptersList";

const montserrat = Montserrat({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Header />
      <main className={"w-full min-h-screen dark:bg-richBlack bg-ghostWhite" + ' ' + montserrat.className}>
        <div className="flex flex-col items-center py-6">
          <div className="w-[98vw] lg:w-[90vw]">
            <ContainerOffset>
              <RecomendedChaptersList />
            </ContainerOffset>
            <div className="mt-6">
              <ContainerOffset>
                <ContinueReading />
              </ContainerOffset>
            </div>
            <div className="mt-6">
              <ContainerOffset>
                <NowReading />
              </ContainerOffset>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <ContainerOffset>
                  <RecentlyUpdatedChaptersList/>
                </ContainerOffset>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
