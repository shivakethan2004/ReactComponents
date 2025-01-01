import React, { useEffect, useState } from "react";
import { delay, motion, useScroll, useTransform } from "motion/react";
import About from "../About";
const WelcomeScreen = () => {
  const [content, setContent] = useState("");
  const [showWelcome, setShowWelcome] = useState("true");
  const [index, setIndex] = useState(0);
  const {scrollYProgress} = useScroll()
  const welcomeWords = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "Привет",
    "你好",
    "こんにちは",
    "안녕하세요",
    "नमस्ते",
    "مرحبا",
    "হ্যালো",
    "Habari",
    "Merhaba",
  ];
  useEffect(() => {
    const intervel = setInterval(() => {
      if (index < welcomeWords.length) {
        setContent(welcomeWords[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(intervel);
        setShowWelcome(false);
      }
    }, 250);
    return () => clearInterval(intervel);
  });


  return (
    <>
      { showWelcome?  (
        <div className="flex justify-center items-center bg-gray-900 h-full w-full">
          <span className="text-white font-bold text-5xl list-item">
            {content}
          </span>
        </div>
      ):(
        <div className="h-full w-full"> {/* Make the page scrollable */}
        <About/>
      </div>
      )}
    </>
  );
};

export default WelcomeScreen;
