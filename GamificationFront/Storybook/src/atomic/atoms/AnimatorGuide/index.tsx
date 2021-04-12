import React from "react";
import { AnimatorGuideImg } from "./styled";

export interface AnimatorGuideProps {
  type: string;
}

const AnimatorGuide = ({ type }: AnimatorGuideProps) => {
  const getOneAnimatedCharacter = () => {
    switch (type) {
      case "inlove":
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "0px", y: "0px" },
          dimensions: { width: "95px", height: "80px" },
        };
      case "smart":
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "-100px", y: "0px" },
          dimensions: { width: "95px", height: "80px" },
        };
      case "worried":
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "95px", y: "0px" },
          dimensions: { width: "95px", height: "80px" },
        };
      case "thinking":
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "0px", y: "-95px" },
          dimensions: { width: "95px", height: "80px" },
        };
      case "yawning":
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "-100px", y: "-95px" },
          dimensions: { width: "95px", height: "80px" },
        };
      case "drunk":
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "95px", y: "-95px" },
          dimensions: { width: "95px", height: "80px" },
        };
      case "surprised":
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "0px", y: "-190px" },
          dimensions: { width: "95px", height: "80px" },
        };
      case "upset":
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "-100px", y: "-190px" },
          dimensions: { width: "95px", height: "80px" },
        };
      case "sad":
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "95px", y: "-190px" },
          dimensions: { width: "95px", height: "80px" },
        };
      case "chill":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "0px", y: "0px" },
          dimensions: { width: "82px", height: "100px" },
        };
      case "strong":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "-85px", y: "0px" },
          dimensions: { width: "110px", height: "100px" },
        };
      case "box":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "95px", y: "0px" },
          dimensions: { width: "95px", height: "100px" },
        };
      case "byciclying":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "0px", y: "-100px" },
          dimensions: { width: "90px", height: "110px" },
        };
      case "basquet":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "-95px", y: "-102px" },
          dimensions: { width: "95px", height: "90px" },
        };
      case "uleule":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "95px", y: "-102px" },
          dimensions: { width: "95px", height: "90px" },
        };
      case "run":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "0px", y: "-215px" },
          dimensions: { width: "100px", height: "90px" },
        };
      case "skater":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "-100px", y: "-195px" },
          dimensions: { width: "95px", height: "100px" },
        };
      case "jumper":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "95px", y: "-195px" },
          dimensions: { width: "95px", height: "100px" },
        };
      case "singer":
        return {
          source: "https://i.ibb.co/0mTZHhV/brain-animated2.png",
          position: { x: "-100px", y: "-330px" },
          dimensions: { width: "110px", height: "120px" },
        };
      default:
        return {
          source: "https://i.ibb.co/BwSvrW2/brain-animated.png",
          position: { x: "0px", y: "0px" },
          dimensions: { width: "95px", height: "80px" },
        };
    }
  };

  return <AnimatorGuideImg imageProps={getOneAnimatedCharacter()} />;
};

AnimatorGuide.defaultProps = {
  type: "singer",
};

export default AnimatorGuide;
