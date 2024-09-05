import Image from "next/image";

interface Props {
   catalogCard: {
      id: number;
      title: string;
      rate: string;
      img: string;
      country: string;
   }
}

export default function CatalogCard(props: Props) {
   const { catalogCard } = props;
   return (
      <section className="mb-4">
         <div className="relative">
            <div className="absolute -left-2 top-0 z-10 flex items-center justify-center bg-green-500 rounded-md w-5 h-4 md:w-8 md:h-5">
               <span className="font-medium text-[10px] sm:text-xs text-white text-center">{catalogCard.rate}</span>
            </div>
            <div className="relative w-20 h-32 md:w-32 md:h-48 lg:w-36 lg:h-52 xl:w-40 xl:h-56 rounded-lg overflow-hidden">
               <Image
                  src={catalogCard.img}
                  alt={catalogCard.title}
                  fill={true}
                  quality={98}
               />
            </div>
         </div>
         <h3 className="line-clamp-2 leading-tight max-h-14 text-[0.75rem] sm:text-[0.8rem] md:text-[0.925rem] font-semibold mt-1 dark:text-primary text-charcoal">{catalogCard.title}</h3>
         <p className="text-xs md:text-sm text-secondary">{catalogCard.country}</p>
      </section>
   )
}