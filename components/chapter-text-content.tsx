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
      const baseCoefficient = 0.05;
      const widthCoefficient = Math.max(0, (1000 - containerWidth) / 10000);
      const fontSizeCoefficient = Math.max(0, (24 - fontSize) / 100);
      const letterSpacing = baseCoefficient + widthCoefficient + fontSizeCoefficient;

      return Math.round(letterSpacing * 100) / 100;
   };
   const letterSpacing = useMemo(() => calculateLetterSpacing(fontSize, containerWidth), [fontSize, containerWidth]);
   const chapterContentStyle = useMemo(() => ({
      '--font-size': `${fontSize}px`,
      '--line-height': `${lineHeight}rem`,
      '--text-align': textAlign ? 'left' : 'justify',
      '--container-width': `${containerWidth}%`,
      '--paragraph-spacing': `${paragraphSpacing}px`,
      '--letter-spacing': `${letterSpacing}em`,
      '--font-family': selectedFont?.style?.fontFamily ?? 'sans-serif',
      fontSize: `var(--font-size)`,
      lineHeight: `var(--line-height)`,
      textAlign: `var(--text-align)`,
      textIndent: '1.5rem',
      width: `var(--container-width)`,
      margin: '0 auto',
      fontFamily: `var(--font-family)`,
      letterSpacing: `var(--letter-spacing)`,
   }), [fontSize, lineHeight, textAlign, containerWidth, paragraphSpacing, selectedFont]);

   return (
      <>
         <style jsx global>{`
           .chapter-content p {
               margin-bottom: var(--paragraph-spacing);
            }
         `}</style>
         <div
            className="chapter-content"
            style={chapterContentStyle as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: text }}
         />
      </>
   )
}