import { Title, Box } from "@mantine/core";
import { GradientCircularProgress } from "react-circular-gradient-progress";
import { useEffect, useMemo, useState } from "react";
import { useGradeColors } from "../hooks/use-grade-colors";
import logo from "../assets/logo_text.svg";

type Props = {
  score: number;
};

function blendColors(colorA: string, colorB: string, amount: number) {
  const [rA, gA, bA] = colorA.match(/\w\w/g)!.map((c) => parseInt(c, 16));
  const [rB, gB, bB] = colorB.match(/\w\w/g)!.map((c) => parseInt(c, 16));
  const r = Math.round(rA + (rB - rA) * amount)
    .toString(16)
    .padStart(2, "0");
  const g = Math.round(gA + (gB - gA) * amount)
    .toString(16)
    .padStart(2, "0");
  const b = Math.round(bA + (bB - bA) * amount)
    .toString(16)
    .padStart(2, "0");
  return `#${r}${g}${b}`;
}

function OverlayCard({ score }: Props) {
  const [scoreForAnimation, setScoreForAnimation] = useState(0);
  const gradeColors = useGradeColors();
  
  useEffect(() => {
    if (scoreForAnimation === score) {
      return;
    }

    if (scoreForAnimation === 0) {
      setScoreForAnimation(score);
    }
    const timer = setInterval(() => {
      if (Math.abs(scoreForAnimation - score) < 0.006) {
        setScoreForAnimation(score);
        clearInterval(timer);
      }
      setScoreForAnimation((prevScore) =>
        score > prevScore ? prevScore + 0.005 : prevScore - 0.005
      );
    }, 5);

    return () => {
      clearInterval(timer);
    };
  }, [score, scoreForAnimation]);
  const scoreFloor = useMemo(
    () => Math.floor(scoreForAnimation),
    [scoreForAnimation]
  );
  
  const currentScore = gradeColors[scoreFloor];
  
  const beginColor = useMemo(() => currentScore.color, [scoreFloor]);
  const endColor = useMemo(
    () =>
      scoreFloor === gradeColors.length - 1
        ? currentScore.color
        : gradeColors[scoreFloor + 1].color,
    [scoreFloor]
  );
  const middleColor = useMemo(
    () => blendColors(beginColor, endColor, 0.5),
    [beginColor, endColor]
  );
  
  return (
    <div
      style={{
        backgroundColor: "rgba(20, 20, 20, .8)",
        borderRadius: 8,
        display: "block",
        width: "fit-content",
        padding: 8,
        userSelect: 'none',
      }}
    >
      <img src={logo} style={{ height: 16 }} alt="logo" />
      <Box style={{ padding: 6, position: "relative" }}>
        <GradientCircularProgress
          size={80}
          progress={(scoreForAnimation % 1) * 100}
          startColor={beginColor}
          middleColor={middleColor}
          endColor={endColor}
        >
          <Title
            order={2}
            style={{
              color: beginColor,
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {currentScore.name}
          </Title>
        </GradientCircularProgress>
      </Box>
    </div>
  );
}

export default OverlayCard;
