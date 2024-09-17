import { CheckboxGroup } from "./ui/checkbox-group"

const genres = [
   { id: 'fantasy', label: 'Фентезі' },
   { id: 'sci-fi', label: 'Наукова фантастика' },
   { id: 'romance', label: 'Романтика' },
   { id: 'action', label: 'Бойовик' },
   { id: 'adventure', label: 'Пригоди' },
   { id: 'mystery', label: 'Детектив' },
   { id: 'horror', label: 'Жахи' },
   { id: 'thriller', label: 'Трилер' },
   { id: 'comedy', label: 'Комедія' },
   { id: 'drama', label: 'Драма' },
   { id: 'historical', label: 'Історичний' },
   { id: 'supernatural', label: 'Надприродне' },
   { id: 'slice-of-life', label: 'Повсякденність' },
   { id: 'psychological', label: 'Психологічний' },
   { id: 'martial-arts', label: 'Бойові мистецтва' }
]


export default function GenresFilterContent() {
   return (
      <CheckboxGroup options={genres} scrollable={true}/>
   )
}