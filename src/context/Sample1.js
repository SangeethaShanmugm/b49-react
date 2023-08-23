import { useGlobalContext } from "./ExampleContext";

export function Sample1() {
  const name = useGlobalContext();
  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
}
