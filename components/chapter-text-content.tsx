'use client'

import { useAppSelector } from '@/store/hooks';
import { Lato, Merriweather, Nunito, Open_Sans, PT_Serif, Roboto, Source_Sans_3 } from 'next/font/google';
import { useMemo } from 'react';

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
   const calculateLetterSpacing = (fontSize: number, containerWidth: number): number => {
      const baseCoefficient = 0.01;
      const widthCoefficient = Math.max(0, (1000 - containerWidth) / 20000);
      const fontSizeCoefficient = Math.max(0, (24 - fontSize) / 200);
      const letterSpacing = Math.min(0.05, baseCoefficient + widthCoefficient + fontSizeCoefficient);
   
      return Math.round(letterSpacing * 100) / 100;
   };
   const calculateLineHeight = (fontSize: number): number => {
      const baseCoefficient = 1.2;
      const fontSizeCoefficient = Math.max(0, (24 - fontSize) / 100);
      const lineHeight = baseCoefficient + fontSizeCoefficient;

      return Math.round(lineHeight * 100) / 100;
   };

   const autoLetterSpacing = useMemo(() => calculateLetterSpacing(fontSize, containerWidth), [fontSize, containerWidth]);
   const autoLineHeight = useMemo(() => calculateLineHeight(fontSize), [fontSize]);
   const chapterContentStyle = useMemo(() => ({
      '--font-size': `${fontSize}px`,
      '--line-height': `${lineHeight}rem`,
      '--text-align': textAlign ? 'left' : 'justify',
      '--container-width': `${containerWidth}%`,
      '--paragraph-spacing': `${paragraphSpacing}px`,
      '--letter-spacing': `${autoLetterSpacing}em`,
      fontSize: `var(--font-size)`,
      lineHeight: `var(--line-height)`,
      textAlign: `var(--text-align)`,
      textIndent: '1.5rem',
      width: `var(--container-width)`,
      margin: '0 auto',
      letterSpacing: `var(--letter-spacing)`,
   }), [fontSize, lineHeight, textAlign, containerWidth, paragraphSpacing]);

   return (
      <>
         <style jsx global>{`
           .chapter-content p {
               margin-bottom: var(--paragraph-spacing);
            }
         `}</style>
         <div
            className="chapter-content p-3 lg:p-1"
            style={{
               ...chapterContentStyle as React.CSSProperties,
               fontFamily: selectedFont?.style?.fontFamily ? selectedFont?.style?.fontFamily : 'sans-serif'
            }}
            dangerouslySetInnerHTML={{ __html: text }}
         />
      </>
   )
}