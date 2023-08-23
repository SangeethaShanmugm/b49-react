import React, { useRef } from "react";

function Ref() {
  const inputRef = useRef();
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h1>Ref Example</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>GetValue</button>
    </div>
  );
}

export default Ref;
