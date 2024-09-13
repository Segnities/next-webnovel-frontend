'use client';

import { ArrowLeft } from 'lucide-react';

interface Props {
   isOpen: boolean;
   children: Readonly<React.ReactNode>;
   onClose: () => void;
}

export default function ContentDrawer({
   children,
   onClose,
   isOpen
}: Props) {

   return (
      <div className={`absolute bg-white dark:bg-charcoal shadow-lg transform transition-transform duration-700 rounded-md ease-out overflow-hidden ${isOpen ? 'translate-x-0 -left-1 inset-0' : 'translate-x-full top-0 right-0 bottom-0'
         }`}>
         <div className='max-h-10 pt-1 px-2'>
            <button onClick={onClose} className="mb-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors">
               <ArrowLeft size={20} className='cursor-pointer' />
            </button>
         </div>
         <div className='pl-3'>
            {children}
         </div>
      </div>
   )
}