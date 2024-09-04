function getCatalogSection() {
  const arr: any[] = [];
  const root = document.body.querySelector("div.paper.catalog-body");
  const cardItems = root?.querySelectorAll(".w1_at");

  cardItems?.forEach((it, idx) => {
    const id = idx + 1;
    const img = it.querySelector("img")?.src;
    const rate = it.querySelector(".rating-label")?.textContent;
    const title = it.querySelector(".card-item-caption__main")?.textContent;
    const country = it.querySelector(
      ".card-item-caption__secondary"
    )?.textContent;

    arr.push({
      id,
      title,
      rate,
      img,
      country,
    });
  });
  console.log(arr);
}

getCatalogSection();