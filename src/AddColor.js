import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("skyblue");

  // const colorList = ["orange", "crimson", "pink", "skyblue"];
  const [colorList, setColorList] = useState(["orange", "crimson", "pink"]);
  const styles = {
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
        <input
          style={styles}
          type="text"
          onChange={(event) => setColor(event.target.value)}
          value={color} />
        <button
          //copy the colorList and add new color to it
          onClick={() => {
            setColorList([...colorList, color]);
            console.log(colorList, color);
          }}
        >
          Add color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox clr={clr} />
      ))}
    </div>
  );
}
