/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { SparkleIcon } from 'lucide-react';

const GREETINGS = [
  'Halo, dunia!',       // Indonesian
  'Hello, world!',       // English
  '¡Hola, mundo!',       // Spanish
  'Bonjour, le monde!',  // French
  'Hallo, Welt!',        // German
  'こんにちは、世界！',  // Japanese
  '안녕하세요, 세상!',   // Korean
  '你好，世界！',        // Chinese
  'Ciao, mondo!',        // Italian
  'Olá, mundo!',         // Portuguese
];

const TypewriterText = ({ text }: { text: string }) => {
  return (
    <>
      <motion.span
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={`${index}-${char}`}
            variants={{
              hidden: { opacity: 0, display: 'none' },
              visible: { opacity: 1, display: 'inline' },
              exit: { opacity: 0, display: 'none' }
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className="inline-block w-[4px] h-[0.9em] bg-current ml-2 align-middle rounded-full"
      />
    </>
  );
};

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 4500); // Increased time to match slower typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial='hidden'
      animate='visible'
      variants={staggerContainer(0)}
      className='pt-20'
      id='hero'
    >
      {/* Restored original border since gradient-border was invisible here */}
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-zinc-300 dark:border-neutral-600 rounded-sm w-32 text-zinc-600 dark:text-neutral-300 text-sm font-medium uppercase'
      >
        <SparkleIcon size={15} /> <span>Introduction</span>
      </motion.p>

      {/* Dynamic Greeting Title with Typing Effect */}
      <div className='h-[60px] md:h-[80px] flex items-center mt-4 overflow-hidden'>
        <AnimatePresence mode='wait'>
          <motion.h1
            key={index}
            className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#f5c542] via-[#e8445a] to-[#a855f7] bg-clip-text text-transparent'
          >
            <TypewriterText text={GREETINGS[index]} />
          </motion.h1>
        </AnimatePresence>
      </div>

      <motion.p
        variants={fadeUp}
        className='text-lg md:text-xl text-zinc-600 dark:text-neutral-300 mt-4 max-w-2xl leading-relaxed font-medium'
      >
        I'm <span className='text-zinc-950 dark:text-white font-semibold'>Fachril</span>, a Software & AI Engineer based in Indonesia, with a strong focus on modern web development and computer vision. Welcome to my online home, hope you enjoy strollin' around here!
      </motion.p>

      <motion.div
        variants={fadeUp}
        className='mt-6 flex gap-2'
      >
        <Button asChild>
          <a href='#projects'>My projects</a>
        </Button>

        <Button variant='outline' asChild>
          <a href='/Fachril_CV_2026.pdf' download='Fachril_CV_2026.pdf'>Download CV</a>
        </Button>
      </motion.div>
    </motion.section>
  );
};
