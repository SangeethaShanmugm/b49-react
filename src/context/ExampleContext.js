import React, { createContext, useContext } from "react";
import { Sample1 } from "./Sample1";
import Ref from "./Ref";
import Reducer from "./Reducer";
//1. Creating -> createContext ✅
//2. Publisher => provider => context.Provider ✅
//3. Subscriber => useContext => useContext(context)

const NameContext = createContext();

function ExampleContext() {
  const name = "Jack";
  return (
    <NameContext.Provider value={name}>
      <div>
        {/* <h1>ExampleContext</h1>
        <h1>{name}</h1> */}
        {/* <Sample />
        <Sample1 /> */}
        {/* <Ref /> */}
        <Reducer />
      </div>
    </NameContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(NameContext);
};

function Sample() {
  const nm = useContext(NameContext);
  return (
    <div>
      <h1>Hey {nm}</h1>
    </div>
  );
}

export default ExampleContext;
