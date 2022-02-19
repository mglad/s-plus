import { MantineProvider } from "@mantine/core";
import OverlayCard from "./OverlayCard";
import { GradeColorsProvider } from "../hooks/use-grade-colors";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "@mantine/hooks";

function Overlay() {
  const [score, setScore] = useState(10);
  const containerRef = useRef();
  const hasRan = useRef<boolean>(false);
  const [ref, observer] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (!hasRan.current && observer?.isIntersecting) {
      hasRan.current = true;
      setScore(14.999);
    }
  }, [observer?.isIntersecting]);
  return (
    <div ref={ref} className="overlay">
      <MantineProvider>
        <GradeColorsProvider>
          <OverlayCard score={score} />
        </GradeColorsProvider>
      </MantineProvider>
    </div>
  );
}

export default Overlay;
