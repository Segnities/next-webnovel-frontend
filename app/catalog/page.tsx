import CatalogSection from "@/components/CatalogSection";
import FilterBox from "@/components/FilterBox";
import BgLayout from "@/components/ui/BgLayout";

import catalogSection from "@/data/catalogSection/catalogSection.json";

export default function CatalogPage() {
   return (
      <BgLayout>
         <div className="grid grid-cols-16 gap-x-3 justify-end">
            <div className="lg:col-span-10 lg:col-start-1 xl:col-start-2 col-span-full">
               <CatalogSection title="Каталог" list={catalogSection} />
            </div>
            <div className="lg:col-span-5 hidden lg:flex justify-center">
               <FilterBox />  
            </div>
         </div>
      </BgLayout>
   )
}