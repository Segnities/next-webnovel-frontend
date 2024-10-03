'use client'

import { useAppSelector } from '@/store/hooks'
import { Roboto, Open_Sans, Lato, Merriweather, Nunito, Source_Sans_3, PT_Serif } from 'next/font/google';

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });
const merriweather = Merriweather({ weight: ['400', '700'], subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });
const sourceSansPro = Source_Sans_3({ weight: ['400', '700'], subsets: ['latin'] });
const ptSerif = PT_Serif({ weight: ['400', '700'], subsets: ['latin'] });

const fonts = {
  Roboto: roboto,
  'Open Sans': openSans,
  Lato: lato,
  Merriweather: merriweather,
  Nunito: nunito,
  'Source Sans Pro': sourceSansPro,
  'PT Serif': ptSerif,
};


export default function ChapterTextContent({ text }: { text: string }) {
   const fontSize = useAppSelector(state => state.chapterSettings.fontSize);
   const lineHeight = useAppSelector(state => state.chapterSettings.lineHeight);
   const fontFamily = useAppSelector(state => state.chapterSettings.fontFamily);
   const textAlign = useAppSelector(state => state.chapterSettings.textAlign);
   const containerWidth = useAppSelector(state => state.chapterSettings.containerWidth);
   const paragraphSpacing = useAppSelector(state => state.chapterSettings.paragraphSpacing);

   const selectedFont = fonts[fontFamily as keyof typeof fonts];

   return (
      <div
         className="text-justify"
         style={{
            fontSize: `${fontSize}rem`,
            lineHeight: `${lineHeight}rem`,
            textAlign: 'justify',
            textIndent: '1.5rem',
         }}
         dangerouslySetInnerHTML={{ __html: text }}
      />
   )
}