import Head from "next/head";
import Link from "next/link";

import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trivia</title>
        <meta name="description" content="You know trivia, right?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen text-center">
        <div className="m-auto">
          <h1>Welcome to Trivia!</h1>

          <Link href="/game">
            <Button onClick={() => console.log("Started Game")}>Start</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
