import { useState } from "react";

type LazyBackgroundImageProps = {
  img: string;
  children?: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
  isDarkened?: boolean;
  className?: string;
};

export function LazyBackgroundImg({
  img,
  children,
  style,
  isDarkened,
  className,
}: Readonly<LazyBackgroundImageProps>) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={className}
      style={{
        backgroundImage: `${
          isDarkened
            ? "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),"
            : ""
        }url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        filter: loaded ? "none" : "blur(20px)",
        transition: "filter 0.5s",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <img src={img} alt="" onLoad={handleLoad} style={{ display: "none" }} />
      {loaded && children}
    </div>
  );
}