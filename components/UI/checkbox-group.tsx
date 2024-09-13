import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";

interface Props {
   title: string;
   description?: string;
   list: { id: string, label: string }[];
   scrollable?: boolean;
   searchField?: boolean; 
}


const FormSchema = z.object({
   items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "У вас має бути вибраний хоча б 1 пункт",
   }),
})

export default function CheckboxGroup(props: Props) {
   const { list } = props;
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         items: [list[0].id],
      },
   })

   const onSubmit = () => {

   }
}