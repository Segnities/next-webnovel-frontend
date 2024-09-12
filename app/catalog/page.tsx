import CatalogSection from "@/components/CatalogSection";
import FiltersSection from "@/components/FiltersSection";
import BgLayout from "@/components/ui/BgLayout";
import ContainerOffset from "@/components/ui/ContainerOffset";

import catalogSection from "@/data/catalogSection/catalogSection.json";

export default function CatalogPage() {
   return (
      <BgLayout>
         <div className="grid grid-cols-16 gap-x-3 justify-end">
            <div className="xl:col-start-2 xl:col-span-11 col-span-full">
               <CatalogSection title="Каталог" list={catalogSection} />
            </div>
            <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
               <ContainerOffset>
                  <FiltersSection/>
               </ContainerOffset>
            </div>
         </div>
      </BgLayout>
   )
}