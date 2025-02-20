'use client';

import React, { useEffect, useState, useCallback } from 'react';

const lettersAndSymbols = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,';

interface AnimatedTextProps {
  text: string;
}

export function RandomizedTextEffect({ text }: AnimatedTextProps) {
  const [animatedText, setAnimatedText] = useState('');

  const getRandomChar = useCallback(
    () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
    []
  );

  const animateText = useCallback(async () => {
    const duration = 50;            // How fast the random characters change (in ms)
    const revealDuration = 80;      // Delay between revealing each actual character (in ms)
    const initialRandomDuration = 300; // Total time for initial random phase (in ms)

    const generateRandomText = () =>
      text.split('').map(() => getRandomChar()).join('');

    // Start by displaying fully random text
    setAnimatedText(generateRandomText());

    // Randomize the text for a short duration
    const endTime = Date.now() + initialRandomDuration;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(generateRandomText());
    }

    // Gradually reveal each character
    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText((prevText) =>
        text.slice(0, i + 1) +
        prevText
          .slice(i + 1)
          .split('')
          .map(() => getRandomChar())
          .join('')
      );
    }
  }, [text, getRandomChar]);

  useEffect(() => {
    animateText();
  }, [text, animateText]);

  return <div className="relative inline-block">{animatedText}</div>;
}
