import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import { RandomFox } from "@/components/RandomFox";

const inter = Inter({ subsets: ["latin"] });
const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hey Platzi 😎!</h1>
        <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`}/>
      </main>

      <footer></footer>
    </div>
  );
}
