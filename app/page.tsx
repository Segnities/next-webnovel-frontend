import ContinueReading from "@/components/ContinueReading";
import Header from "@/components/Header";
import ContainerOffset from "@/components/UI/ContainerOffset";
import MaterialListSwiper from "@/components/UI/MaterialListSwiper";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen dark:bg-richBlack bg-ghostWhite">
        <div className="flex flex-col items-center py-6">
          <div className="w-[98vw] lg:w-[90vw]">
            <ContainerOffset>
              <MaterialListSwiper />
            </ContainerOffset>
            <div className="mt-7">
              <ContainerOffset>
                <ContinueReading />
              </ContainerOffset>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
