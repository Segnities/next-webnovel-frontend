import InfoItem from "./info-item";
import { Card, CardContent } from "./ui/card";

const infoItems = [
   {
      label: "Тип",
      value: "Корея",
      href: "/",
   },
   {
      label: "Випуск",
      value: "2018",
      href: "/",
   },
   {
      label: "Формат",
      value: "Веб",
      href: "/",
   },
   {
      label: "Глав",
      value: "442",
   },
   {
      label: "Автор",
      value: "Farnar",
      href: "/",
   },
   {
      label: "Статус",
      value: "Завершено",
      href: "/",

   }
];

export default function BookAdditionalInfo() {
   return (
      <Card className="rounded-md">
         <div className="space-y-2 py-2 px-2">
            {
               infoItems.map((item, index) => (
                  <InfoItem key={index} {...item} />
               ))
            }
         </div>
      </Card>
   )
}