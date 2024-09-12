function getLatestReviews() {
   const arr: any[] = [];
   const root = document.body.querySelector('.jc_ch');
   const cards = root?.querySelectorAll('a.nm_ar.jc_ar');

   cards?.forEach((el, idx) => {
      const img = el.querySelector('img')?.src;
      const title = el.querySelector('.nm_b6')?.textContent;
      const body = el.querySelector('p.node-paragraph')?.textContent;
      const views = el.querySelector('button.btn.is-link.variant-secondaryStart')?.querySelector('span')?.textContent;
      const likes = el.querySelector('button.btn.is-link.variant-secondaryStart')?.querySelector('span')?.textContent;
      const type = el.querySelectorAll('.mh_ey')[1]?.querySelector('span')?.textContent;

      const card = {
         id: idx + 1,
         img,
         title,
         body,
         views,
         likes,
         type
      }
      arr.push(card);
   });
   console.log(arr);
}