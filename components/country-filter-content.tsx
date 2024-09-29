import { CheckboxGroup } from "./ui/checkbox-group";

const countries: { id: string, label: string }[] = [
   { id: 'china', label: 'Китай' },
   { id: 'korea', label: 'Корея' },
   { id: 'japan', label: 'Японія' },
   { id: 'usa', label: 'США' },
   { id: 'ukraine', label: 'Україна' },
   { id: 'uk', label: 'Велика Британія' },
   { id: 'france', label: 'Франція' },
   { id: 'germany', label: 'Німеччина' },
   { id: 'india', label: 'Індія' },
   { id: 'canada', label: 'Канада' },
   { id: 'australia', label: 'Австралія' },
   { id: 'brazil', label: 'Бразилія' },
   { id: 'spain', label: 'Іспанія' },
   { id: 'italy', label: 'Італія' }
];


export default function CountryFilterContent() {
   return (
      <CheckboxGroup options={countries} scrollable={true} />
   );
}