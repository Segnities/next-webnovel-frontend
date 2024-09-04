import CatalogCard from "./CatalogCard";

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
      <div className="grid grid-cols-5 gap-5">
         {
            list.slice(0,25).map(item => (
               <CatalogCard key={item.id} catalogCard={item}/>
            ))
         }
      </div>
   )
}