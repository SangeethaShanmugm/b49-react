import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <>
      {/* onClick => camelCase */}
      <IconButton
        aria-label="like-btn"
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        aria-label="dislike-btn"
        onClick={() => {
          setDisLike(dislike + 1);
          console.log(dislike);
        }}
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </>
  );
}
