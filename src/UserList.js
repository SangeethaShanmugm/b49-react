import { ProfileData } from "./ProfileData";

export function UserList() {
  const userList = [
    {
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg",
      name: "Yogesh",
    },
    {
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
      name: "OmPrakash",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
      name: "Aswin",
    },
  ];

  return (
    <>
      {userList.map((usr) => (
        <ProfileData image={usr.pic} name={usr.name} />
      ))}
    </>
  );
}
