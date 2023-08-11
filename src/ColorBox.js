export function ColorBox({ clr }) {
  const styles = {
    backgroundColor: clr,
    height: "28px",
    width: "170px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
