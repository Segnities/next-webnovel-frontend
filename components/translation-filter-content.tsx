import { CheckboxGroup } from "./ui/checkbox-group";

const translations: { id: string, label: string }[] = [
   { id: 'completed', label: 'Завершений переклад' },
   { id: 'ongoing', label: 'Переклад триває' },
   { id: 'dropped', label: 'Переклад покинуто' },
   { id: 'machine', label: 'Машинний переклад' },
   { id: 'original', label: 'Оригінал' },
];


export default function TranslationFilterContent() {
  return (
    <CheckboxGroup scrollable={true} options={translations}/>
  )
}