import './Profile.css';
import propTypes from 'prop-types'; 
function Profile(props) {
  return (
    <div className="profile">
      <div className="info">
        <h3>{props.fullName}, {props.profession}</h3>
        <p>{props.bio}</p>
        <button className="btn" onClick={e => props.handleName(e)}>Alert</button>
      </div>
      <div >
        {props.children}
      </div>
    </div>
  );
}
export default Profile;

Profile.defaultProps = {
  fullName:'ziad',
  profession:'maste'
}

Profile.propTypes = {
  fullName:propTypes.string,
  handleName:propTypes.func
}
