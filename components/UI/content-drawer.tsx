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
      <div className={`absolute py-3 px-2 bg-white dark:bg-charcoal shadow-lg transform transition-transform duration-700 rounded-md ease-out overflow-y-auto ${isOpen ? 'translate-x-0 -left-1 inset-0' : 'translate-x-full top-0 right-0 bottom-0'
         }`}>
         <div className='flex-shrink-0 max-h-10 pt-1 px-2'>
            <button onClick={onClose} className="mb-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full transition-colors">
               <ArrowLeft size={20} className='cursor-pointer' />
            </button>
         </div>
         <div className='flex-grow overflow-hidden pl-3'>
            {children}
         </div>
      </div>
   )
}