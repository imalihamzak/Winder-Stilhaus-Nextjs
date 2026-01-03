"use client";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}: TextGenerateEffectProps) => {
  let wordsArray = words.split(" ");

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <span
              key={word + idx}
              className="dark:text-white"
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className=" text-white/70  text-base typography-body-copy leading-relaxed mb-8">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

