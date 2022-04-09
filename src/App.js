import './App.css';
import logo from'./logo.svg'
import avatar from'./elon.jpg'
import post from'./elon_mini.jpg'
function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Profil/>
    </div>
  );
}

export default App;


function Header(){
  return(
    <div className="header">
        <img src={logo} alt=""/>
    </div>
  );
}
function Sidebar(){
  return(
    <div className="sidebar">
        <a href="">Profil</a>
        <a href="">Messages</a>
        <a href="">Users</a>
    </div>
  );
}
function Profil(){
  return(
    <div className="profil">
      <div className="me">
        <img src={avatar} alt=""/>
        <p>Elon Mask</p>
      </div>
      <div className="posts">
        <h2>My posts</h2>
        <input placeholder="enter text" type="text"/>
        <button>Add post</button>
        <div className="post">
            <img src={post} alt=""/>
            <span>Elon Mask</span>
            <p>Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Sint sed dolorum ullam reiciendis corporis harum deserunt iure minus. Doloribus sequi, blanditiis pariatur fuga laudantium quidem veritatis nulla in eos numquam.</p>
        </div>
      </div>
    </div>
  );
}
