import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";
import Head from "next/head";

import getQuestions from "./api/questions";
import Button from "@/components/Button";
import Answer from "@/components/Answer";
import Card from "@/components/Card";

export default function Game() {
  const router = useRouter();

  let data = useRef(getQuestions());

  let checkpoints = [
    "1500 Points",
    "2000 Points",
    "2500 Points",
    "3000 Points",
    "3500 Points",
    "4000 Points",
  ];

  let maxPoints = useRef("0" as string | null);

  const [lastGuess, setLastGuess] = useState("");

  const [gameData, setGameData] = useState({
    questionsAnswered: 0 as number,
    timeRemaining: 100 as number, // in seconds
    currentStreak: 0 as number,
    totalPoints: 0 as number,
    loading: true as boolean,
    ended: false as boolean,
  });

  useEffect(() => {
    setTimeout(() => {
      setGameData((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }, 1500);
  }, []);

  useEffect(() => {
    if (gameData.timeRemaining >= 0) {
      setTimeout(() => {
        setGameData((prevState) => ({
          ...prevState,
          timeRemaining: prevState.timeRemaining--,
        }));
      }, 1000);

      const element = window.document.getElementById("time-bar");

      if (element !== null) {
        element.style.width = `${gameData.timeRemaining}%`;
      }
    } else {
      setGameData((prevState) => ({
        ...prevState,
        ended: true,
      }));

      let storedPoints = new URLSearchParams(document.cookie.replaceAll("; ", "&")).get(
        "max-points"
      );

      if (
        (storedPoints !== null && gameData.totalPoints > (storedPoints as unknown as number)) ||
        storedPoints == null
      ) {
        document.cookie = `max-points=${gameData.totalPoints}; path=/; SameSite=None; Secure`;
      }

      maxPoints.current = new URLSearchParams(document.cookie.replaceAll("; ", "&")).get(
        "max-points"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData.timeRemaining]);

  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="description" content="You know trivia, right?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {gameData.loading === true ? (
        <div className="flex h-screen text-center">
          <div className="m-auto">
            <h2 className="m-0">Loading...</h2>
          </div>
        </div>
      ) : gameData.ended === true ? (
        <div className="flex h-screen text-center">
          <div className="m-auto">
            <h2 className="my-0">Challanges</h2>

            <h5 className="pb-5">
              {maxPoints.current} Points Reached · {gameData.questionsAnswered} Questions Answered
            </h5>

            <div className="grid grid-rows-6 md:grid-rows-3 grid-flow-col gap-5 text-left">
              {checkpoints.map((checkpoint, i) => (
                <h5
                  key={i}
                  className={`py-2 px-10 border rounded-full ${
                    checkpoint > (maxPoints.current as string) && "opacity-50"
                  }`}
                >
                  {checkpoint}
                </h5>
              ))}
            </div>

            <div className="pt-5">
              <Button
                onClick={() => {
                  console.log("Started New Game");

                  router.refresh();
                }}
              >
                Play Again
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full gap-[1rem] py-[1rem]">
          {/* Time Remaining Bar */}
          <div className="h-[2%] md:h-[4%] flex items-center justify-between gap-5">
            <div id="time-bar" className={`bg-pink-800/80 w-full h-full rounded-full relative`}>
              <div className="absolute -inset-y-2.5 -right-2 text-2xl">🔥</div>
            </div>

            <div>
              <h5>{gameData.totalPoints}</h5>
            </div>
          </div>

          {/* Question */}
          <Card>{data.current[gameData.questionsAnswered].question}</Card>

          {/* Possible Answers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {data.current[gameData.questionsAnswered].possibleAnswers.map((element, i) => (
              <Answer
                onClick={() => {
                  setLastGuess(element);

                  setTimeout(() => {
                    setGameData((prevState) => ({
                      ...prevState,
                      questionsAnswered: prevState.questionsAnswered++,
                      totalPoints:
                        element === data.current[gameData.questionsAnswered].correctAnswer
                          ? prevState.totalPoints + 200
                          : prevState.totalPoints,
                      currentStreak:
                        element === data.current[gameData.questionsAnswered].correctAnswer
                          ? prevState.currentStreak++
                          : 0,
                    }));

                    setLastGuess("");
                  }, 1500);
                }}
                key={i}
                index={i == 0 ? "A" : i == 1 ? "B" : i == 2 ? "C" : "D"}
                isCorrect={
                  lastGuess &&
                  lastGuess === element &&
                  lastGuess === data.current[gameData.questionsAnswered].correctAnswer
                }
                isChecked={lastGuess === element}
                disabled={lastGuess}
              >
                {element}
              </Answer>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
