interface RecentBook {
  id: number;
  title: string | null | undefined;
  img: string | null | undefined;
  country: string | null | undefined;
  latestChaptersTime: string | null | undefined;
  latestChapterNum: string | null | undefined;
  latestChapterTitle: string | null | undefined;
  chaptersNum: number;
}

function getLastUpdatedChapters() {
  const recentBooks: RecentBook[] = [];
  const rootClass = document.body.querySelector(".jl_e");
  const cards = rootClass?.querySelectorAll(".section-body");

  cards?.forEach((card, idx) => {
    const id = idx + 1;
    const title = card.querySelector(".w1_bl")?.textContent;
    const img = card.querySelector("img")?.src;
    const country = card.querySelector(".w1_fo")?.textContent;
    const latestChaptersTime = card.querySelector(".w1_na")?.textContent;
    const latestChapterNum = card.querySelector(".w1_lr")?.textContent;
    const latestChapterTitle = card.querySelector(".w1_w3")?.textContent;
    const chaptersNum = Math.floor(Math.random() * 119) - 1;

    recentBooks.push({
      id,
      title,
      img,
      country,
      latestChaptersTime,
      latestChapterNum,
      latestChapterTitle,
      chaptersNum,
    });
  });
  console.log(recentBooks);
}
