import logo from "./logo.svg";
import "./App.css";

import Button from "storybook-gamification/atomic/atoms/Button"

function App() {
  return (
    <div>
      <Button
        borderColor={"#a7f4ff"}
        backgroundColor={"#a7f4ff"}
        widthType={"SMALL"}
        heigthType={"SMALL"}
        shadowType={"XLARGE"}
        borderType={"PILLSHAPE"}
      >
        Hola Como estas!
      </Button>
    </div>
  );
}

export default App;
