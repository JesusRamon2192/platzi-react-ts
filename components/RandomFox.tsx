import type { FunctionComponent, FC } from "react";

/* export const RandomFox = () => {
  return <img />;
}; */

const random = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;
  return <img width={320} height="auto" src={image} className="rounded" />;
};

/* export const RandomFox: FunctionComponent = () => {
  return <img />;
};

export const RandomFox: FC = () => {
  return <img />;
}; */
