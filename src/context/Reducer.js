import React, { useReducer } from "react";

function Reducer() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      //action type
      if (action.type === "update") {
        return { ...state, name: action.value };
      }
      if (action.type === "btn") {
        return { ...state, btn: state.btn + 1 };
      }
      if (action.type === "pass") {
        return { ...state, password: action.value };
      }
    },
    {
      name: "Jack",
      btn: 1,
      password: "12345",
    }
  );
  return (
    <div>
      <h1>Reducer Example</h1>
      <p>{state.name}</p>
      <p>{state.btn}</p>
      <p>{state.password}</p>
      <input
        type="text"
        onChange={(e) => dispatch({ type: "pass", value: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "update", value: "Mick" })}>
        GetValue
      </button>
      <button onClick={() => dispatch({ type: "btn" })}>counter</button>
    </div>
  );
}

export default Reducer;
