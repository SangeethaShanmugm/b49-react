import { useState } from "react";


export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <>
      {/* onClick => camelCase */}
      <button
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
      >
        👍 {like}
      </button>
      <button
        onClick={() => {
          setDisLike(dislike + 1);
          console.log(dislike);
        }}
      >
        👎{dislike}
      </button>
    </>
  );
}
