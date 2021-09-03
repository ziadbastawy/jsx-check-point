import './Profile.css';
{/* <Profile fullName="Ziad Bastawy" bio="my is name ziad, I'm Computer science student" profession="Phd" 
handleName={handleName}>
<img src="./imgSrc.png" alt="user" />
</Profile> */}

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
