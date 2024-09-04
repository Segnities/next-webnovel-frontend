import CatalogSection from "@/components/CatalogSection";
import BgLayout from "@/components/UI/BgLayout";

import catalogSection from "@/data/catalogSection/catalogSection.json";

export default function CatalogPage() {
   return (
      <BgLayout>
         <div className="grid grid-cols-16 gap-x-3 justify-end">
            <div className="col-start-2 col-span-11">
               <CatalogSection title="Каталог" list={catalogSection} />
            </div>
            <div className="col-span-4"></div>
         </div>
      </BgLayout>
   )
}