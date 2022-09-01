import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../img/bug.svg';
import ideaImageUrl from '../../img/idea.svg';
import thoughtImageUrl from '../../img/thought.svg';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackSeccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: "Ícone de um inseto"
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: "Ícone de uma lâmpada"
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: "Ícone de um balão de pensamento"
    }
  }
}

/* 
Object.entries(feedbackTypes) => 
[
  ['BUG', {...}]
  ['IDEA', {...}]
  ['OTHER', {...}]
]
*/

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ?
        (<FeedbackSeccessStep onFeedbackRestartRequested={handleRestartFeedback} />) : (
          <>
            {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )
            }
          </>
        )
      }

      <footer className="text-sm text-neutral-400">
        Feito com ♥ pelo <a className="underline underline-offset-2" href="https://github.com/zelmarjunior">Zelmar Jr</a>
      </footer>
    </div >
  );

}