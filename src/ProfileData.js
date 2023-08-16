import { Counter } from "./Counter";

//Display Profile Pic and name 🏢
export function ProfileData({ image, name }) {
  return (
    <div className="user-container">
      <img className="profile-pic" src={image} alt={name} />
      <h1>{name}</h1>
      <Counter />
    </div>
  );
}
