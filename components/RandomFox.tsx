import { useRef, useEffect, useState } from "react";

type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=",
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //onIntersection -> consolelog
        if (entry.isIntersecting) {
          console.log("heyyou");
          setSrc(image);
        }
      });
    });
    //observer node
    if (node.current) {
      observer.observe(node.current);
    }

    //desconectar
    return () => {
      observer.disconnect();
    };
  }, [image]);
  //nuevo observador

  return (
    <img
      ref={node}
      width={320}
      height="auto"
      src={src}
      className="rounded bg-gray-300"
    />
  );
};
