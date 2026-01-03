"use client";
import React from "react";

interface ColourfulTextProps {
  text: string;
}

export function ColourfulText({
  text
}: ColourfulTextProps) {
  const colors = [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ];

  const [currentColors, setCurrentColors] = React.useState<string[]>(colors);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${count}-${index}`}
          style={{
            color: currentColors[index % currentColors.length],
          }}
          className="inline-block whitespace-pre font-sans tracking-tight">
          {char}
        </span>
      ))}
    </>
  );
}

