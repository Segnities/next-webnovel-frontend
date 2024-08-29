import { Montserrat } from "next/font/google";

import ContinueReading from "@/components/ContinueReading";
import Header from "@/components/Header";
import NowReading from "@/components/NowReading";
import ContainerOffset from "@/components/UI/ContainerOffset";
import RecomendedChaptersList from "@/components/UI/RecomendedChaptersList";
import RecentlyUpdatedChaptersList from "@/components/RecentlyUpdatedChaptersList";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NewsList from "@/components/NewsList";


const montserrat = Montserrat({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Header />
      <main className={"w-full min-h-screen dark:bg-richBlack bg-ghostWhite lg:mt-12" + ' ' + montserrat.className}>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                <ContainerOffset>
                  <RecentlyUpdatedChaptersList />
                </ContainerOffset>
                <div className="flex flex-col gap-y-5">
                  <section className="mt-3">
                    <h2 className="font-medium text-base dark:text-silver">Новини  <span className="ml-2 text-sm"><ArrowForwardIcon /></span></h2>
                    <ContainerOffset>
                      <NewsList/>
                    </ContainerOffset>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
