import "./Profile.css";
import propTypes from "prop-types";
import Border from "../Border/Border";
function Profile(props) {
  const { fullName, profession, bio, handleName, children } = props;

  return (
    <div className="profile">
      <div className="info">
        <Border color="red" borderRadius="10">
          <h3>
            {fullName}, {profession}
          </h3>
        </Border>
        <Border color="black" borderRadius="10">
          <p>{bio}</p>
        </Border>
        <Border >
          <button className="btn" onClick={handleName}>
            Alert
          </button>
        </Border>
      </div>
      <div>
        <Border color="#ddd" borderRadius="10">{children}</Border>
      </div>
    </div>
  );
}
export default Profile;

Profile.defaultProps = {
  fullName: "ziad",
  profession: "maste",
};

Profile.propTypes = {
  fullName: propTypes.string,
  handleName: propTypes.func,
};
