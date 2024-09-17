'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { useState } from "react";
import ScrollableWrapper from "./scrollable-wrapper";

interface CheckboxGroupProps {
   title?: string;
   description?: string;
   options: { id: string, label: string }[];
   scrollable?: boolean;
   searchField?: boolean;
}


const FormSchema = z.object({
   items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "У вас має бути вибраний хоча б 1 пункт",
   }),
})


export function CheckboxGroup({
   title,
   description,
   options,
   searchField = false,
   scrollable = false
}: CheckboxGroupProps) {
   const [searchTerm, setSearchTerm] = useState<string>('');

   const handleSearchTermChange = () => {

   }

   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         items: [options[0].id],
      },
   })

   const onSubmit = (data: z.infer<typeof FormSchema>) => {
      console.log(data);
   }

   return (
      <div className="h-full">
         {
            searchField ? <div className="mt-3 mb-4 relative">
               <div className="absolute flex items-center justify-center w-8 h-full">
                  <Search className="left-1 text-secondaryStart" size={18} />
               </div>
               <Input
                  type="search"
                  placeholder="Шукати"
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                  className="w-full bg-transparent border-secondaryStart rounded-md pl-8 pr-6 text-darkerGray dark:text-secondaryStart focus:outline-none border"
               />
            </div> : null
         }
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
               <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                     <FormItem>
                        <div className="mb-4">
                           {
                              title ? (
                                 <FormLabel className="text-base">{title}</FormLabel>
                              ) : null
                           }

                           {
                              description ? (
                                 <FormDescription>
                                    {description}
                                 </FormDescription>
                              ) : null
                           }
                        </div>
                        <ScrollableWrapper scrollable={scrollable} className="w-full h-[calc(100vh-200px)]">
                           {options.map((item) => (
                              <FormField
                                 key={item.id}
                                 control={form.control}
                                 name="items"
                                 render={({ field }) => {
                                    return (
                                       <FormItem
                                          key={item.id}
                                          className="w-full flex flex-row items-start space-x-3 space-y-1"
                                       >
                                          <FormControl>
                                             <Checkbox
                                                checked={field.value?.includes(item.id)}
                                                onCheckedChange={(checked) => {
                                                   return checked
                                                      ? field.onChange([...field.value, item.id])
                                                      : field.onChange(
                                                         field.value?.filter(
                                                            (value) => value !== item.id
                                                         )
                                                      )
                                                }}
                                             />
                                          </FormControl>
                                          <FormLabel className="font-normal">
                                             {item.label}
                                          </FormLabel>
                                       </FormItem>
                                    )
                                 }}
                              />
                           ))}
                        </ScrollableWrapper>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type="submit">Скинути</Button>
            </form>
         </Form>
      </div>
   )
}