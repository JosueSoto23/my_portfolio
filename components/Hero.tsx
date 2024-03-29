import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Josué Soto!",
      "A-Guy-who-loves-Coding.tsx",
      "<ButFirstCoffee />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span> {text} </span>
        <Cursor cursorColor="green" />
      </h1>
    </div>
  );
}
