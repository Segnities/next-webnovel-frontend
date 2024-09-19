import CatalogCard from "./catalog-card";

interface Props {
   list: {
      id: number;
      title: string;
      rate: string;
      img: string;
      country: string;
   }[]
}

export default function CatalogCardsList({ list }: Props) {
   return (
      <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-5 lg:gap-5">
         {
            list.slice(0,25).map(item => (
               <CatalogCard key={item.id} catalogCard={item}/>
            ))
         }
      </div>
   )
}