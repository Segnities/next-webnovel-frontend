import MaterialYouSwiper from "@/components/UI/MaterialYouSwiper";

export default function Home() {
  return (
    <main className="w-full min-h-screen dark:bg-richBlack bg-ghostWhite">
      <div className="flex flex-col items-center py-6">
        <section className="dark:bg-eerieBlack bg-white w-[80vw] rounded-lg p-4">
          <MaterialYouSwiper />
        </section>
      </div>
    </main>
  );
}
