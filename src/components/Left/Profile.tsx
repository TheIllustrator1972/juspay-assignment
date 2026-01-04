import { profileStyles } from "./styles";

const Profile = () => {
  return (
    <div style={profileStyles.container}>
      <img
        src={`/ByeWind.png`}
        style={profileStyles.avatar}
        alt="User avatar"
      />

      <div style={profileStyles.textContainer}>
        <p style={profileStyles.name}>ByeWind</p>
      </div>
    </div>
  );
};

export default Profile;
