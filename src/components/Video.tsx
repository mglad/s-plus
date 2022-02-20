import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import topChampions from "../assets/overall_list.mp4";
import topChampionsImage from "../assets/top_champions.png";

function Video() {
  const containerRef = useRef();
  const hasRan = useRef<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [ref, observer] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (!hasRan.current && observer?.isIntersecting && videoRef.current) {
      hasRan.current = true;
      setTimeout(() => {
        videoRef.current?.play();
      }, 3000);
    }
  }, [observer?.isIntersecting, videoRef]);

  const reset = () => {
    videoRef.current?.play();
  };
  return (
    <>
      <img className="top-image" src={topChampionsImage} alt="top champions" />
      <div ref={ref} className="top-video" onClick={reset}>
        <video ref={videoRef} src={topChampions} muted playsInline />
      </div>
    </>
  );
}

export default Video;
