import ContinueReading from "@/components/ContinueReading";
import Header from "@/components/Header";
import NowReading from "@/components/NowReading";
import ContainerOffset from "@/components/UI/ContainerOffset";
import RecommendedNovelsSlider from "@/components/RecommendedNovelsSlider";
import RecentlyUpdatedChaptersList from "@/components/RecentlyUpdatedChaptersList";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NewsList from "@/components/NewsList";
import LatestReviewsList from "@/components/LatestReviewsList";
import NewNovelsSlider from "@/components/NewNovelsSlider";
import Footer from "@/components/UI/Footer";
import BgLayout from "@/components/UI/BgLayout";


export default function Home() {
  return (
    <>
      <Header />
      <BgLayout>
        <div className="flex flex-col items-center">
          <div className="w-[98vw] lg:w-[90vw]">
            <ContainerOffset>
              <RecommendedNovelsSlider slidesPerViewDefault={8} />
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
                <div className="flex flex-col gap-y-5 p-3 md:p-1 lg:p-0">
                  <section className="mt-3">
                    <h2 className="font-medium text-base dark:text-silver">Новини  <span className="ml-2 text-sm"><ArrowForwardIcon /></span></h2>
                    <ContainerOffset>
                      <NewsList />
                    </ContainerOffset>
                  </section>
                  <section>
                    <h2 className="font-medium text-base dark:text-silver">Остані відгуки  <span className="ml-2 text-sm"><ArrowForwardIcon /></span></h2>
                    <LatestReviewsList />
                  </section>
                  <section>
                    <h2 className="font-medium text-base dark:text-silver">Новинки  <span className="ml-2 text-sm"><ArrowForwardIcon /></span></h2>
                    <ContainerOffset>
                      <NewNovelsSlider slidesPerViewDefault={4} />
                    </ContainerOffset>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BgLayout>
      <Footer/>
    </>
  );
}
