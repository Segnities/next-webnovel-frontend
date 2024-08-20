import ContainerOffset from "@/components/UI/ContainerOffset";
import MaterialListSwiper from "@/components/UI/MaterialListSwiper";

export default function Home() {
  return (
    <main className="w-full min-h-screen dark:bg-richBlack bg-ghostWhite">
      <div className="flex flex-col items-center py-6">
        <div className="w-[98vw] lg:w-[90vw]">
          <ContainerOffset>
            <MaterialListSwiper />
          </ContainerOffset>
        </div>
      </div>
    </main>
  );
}
