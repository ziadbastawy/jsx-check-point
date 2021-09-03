import './App.css';
import Profile from './Profile/Profile';
import user_img from './imgSrc.png'
function App() {
  const handleName = (e) => {
    e.preventDefault()
    alert(`my name is Ziad`)
  }
  return (
    <div className="App">
      <Profile fullName="Ziad Bastawy" bio="my is name ziad, I'm Computer science student" profession="Phd" 
        handleName={handleName}
      >
        <img src={user_img} alt="user" className="img" />
      </Profile>
    </div>
  );
}
export default App;
