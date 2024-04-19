import { MouseEventHandler, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { RandomFox } from "@/components/RandomFox";

const inter = Inter({ subsets: ["latin"] });
const random = () => Math.floor(Math.random() * 123) + 1;

const generateId = () => Math.random().toString(36).substring(2, 9);
type ImageItem = { id: string; url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newImageItem: ImageItem = {
      id: "generateId()",
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hey Platzi 😎!</h1>
        <button onClick={addNewFox}>Add new fox</button>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomFox image={url} />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
