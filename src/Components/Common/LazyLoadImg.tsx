import React from "react";

// import { loadingImgUrl } from "../../data";

type ImageProps = {
  src: string;
  alt: string;
  classes: string;
};

function LazyLoadImg({ src, alt, classes }: ImageProps) {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [showImg, setShowImg] = React.useState(false);

  React.useEffect(() => {
    if (!imgRef.current) return;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowImg(true);
            observer.unobserve(imgRef.current!);
          }
        });
      },
      { rootMargin: "0px", threshold: 0 }
    );
    const refre = imgRef.current;
    observer.observe(refre);
  }, [imgRef]);

  return (
    <>
      {showImg ? (
        <img src={src} alt={alt} className={`${classes}`} ref={imgRef} />
      ) : (
        <div className={`bg-transparent w-full h-[100%]`} ref={imgRef} />
      )}
    </>
  );
}

export default LazyLoadImg;
